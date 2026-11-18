// Merges the open pull requests labelled LABEL into `beta` once a server
// release that holds their feature is out. Run by
// .github/workflows/merge-on-next-beta.yml, which the server starts right
// after it publishes a release, and once a day as a safety net. It only reads
// pull request metadata and never checks out or runs code from a pull request.
//
// Needs GITHUB_TOKEN and GITHUB_REPOSITORY. With DRY_RUN=true it only prints
// what it would merge and why the other pull requests wait.

import { setTimeout as sleep } from "node:timers/promises";
import { pathToFileURL } from "node:url";

export const LABEL = "merge-on-next-beta";
const BASE = "beta";
const MERGEABLE_UNKNOWN = "GitHub has not worked out yet whether it can merge";
const SERVER_RELEASES =
  "https://api.github.com/repos/music-assistant/server/releases?per_page=100";

// A beta (2.11.0b9) or the first stable release of a version (2.11.0).
// Nightlies (2.11.0.dev2026111703) never count, and neither do stable patch
// releases (2.10.12): those come from the stable branch and do not carry what
// is in the nightly build.
const SERVER_RELEASE_TAG = /^\d+\.\d+\.(\d+b\d+|0)$/;

/**
 * The newest server release that counts, or null.
 *
 * @param {Array<{tag_name: string, draft: boolean, published_at: string | null}>} releases
 *   Releases as the GitHub REST API returns them.
 */
export function latestServerRelease(releases) {
  return (
    releases
      .filter((r) => !r.draft && r.published_at && SERVER_RELEASE_TAG.test(r.tag_name))
      .map((r) => ({ tag: r.tag_name, publishedAt: r.published_at }))
      .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))[0] ?? null
  );
}

/**
 * The reasons a pull request cannot be merged yet; an empty list means merge it.
 *
 * @param {object} pr The pull request as returned by PULL_REQUESTS_QUERY.
 * @param {{tag: string, publishedAt: string} | null} release The newest server release that counts.
 */
export function blockers(pr, release) {
  const reasons = [];
  if (pr.isDraft) reasons.push("is a draft");
  if (pr.baseRefName !== BASE) reasons.push(`targets ${pr.baseRefName}, not ${BASE}`);

  const reviews = pr.latestOpinionatedReviews.nodes;
  if (reviews.some((r) => r.state === "CHANGES_REQUESTED")) {
    reasons.push("a maintainer requested changes");
  } else if (!reviews.some((r) => r.state === "APPROVED" && r.commit?.oid === pr.headRefOid)) {
    reasons.push("no maintainer approval of the latest commit");
  }

  const checks = pr.commits.nodes[0]?.commit.statusCheckRollup?.state;
  if (checks !== "SUCCESS") reasons.push(`checks are ${checks?.toLowerCase() ?? "missing"}`);

  if (pr.mergeable === "CONFLICTING") reasons.push("has a merge conflict");
  else if (pr.mergeable !== "MERGEABLE") reasons.push(MERGEABLE_UNKNOWN);

  const labelled = pr.timelineItems.nodes.filter((e) => e.label?.name === LABEL).at(-1);
  if (!release) {
    reasons.push("no server release found");
  } else if (!labelled || Date.parse(release.publishedAt) <= Date.parse(labelled.createdAt)) {
    reasons.push(`no server release since the label was added (latest is ${release.tag})`);
  }
  return reasons;
}

const PULL_REQUESTS_QUERY = `
  query ($owner: String!, $name: String!, $label: String!) {
    repository(owner: $owner, name: $name) {
      pullRequests(states: OPEN, labels: [$label], first: 50) {
        nodes {
          number
          title
          isDraft
          baseRefName
          headRefOid
          mergeable
          latestOpinionatedReviews(first: 20, writersOnly: true) {
            nodes { state commit { oid } }
          }
          commits(last: 1) {
            nodes { commit { statusCheckRollup { state } } }
          }
          timelineItems(itemTypes: [LABELED_EVENT], last: 20) {
            nodes { ... on LabeledEvent { createdAt label { name } } }
          }
        }
      }
    }
  }`;

async function main() {
  const repo = process.env.GITHUB_REPOSITORY;
  const dryRun = process.env.DRY_RUN === "true";
  const [owner, name] = repo.split("/");

  const release = latestServerRelease(await github("GET", SERVER_RELEASES));
  console.log(`Latest server release: ${release ? `${release.tag} (${release.publishedAt})` : "none"}`);

  const fetchPulls = async () => {
    const { data } = await github("POST", "https://api.github.com/graphql", {
      query: PULL_REQUESTS_QUERY,
      variables: { owner, name, label: LABEL },
    });
    return data.repository.pullRequests.nodes;
  };
  // GitHub works out whether a pull request can merge only once it is asked,
  // so the first answer is often unknown. Ask again for the pull requests
  // that only wait on that.
  let pulls = await fetchPulls();
  for (let retry = 1; retry <= 3; retry++) {
    const unknown = pulls.filter((pr) => blockers(pr, release).join() === MERGEABLE_UNKNOWN);
    if (!unknown.length) break;
    console.log(`Asking again in 20 seconds whether ${unknown.map((pr) => `#${pr.number}`).join(", ")} can merge.`);
    await sleep(20_000);
    pulls = await fetchPulls();
  }
  if (!pulls.length) console.log(`No open pull requests labelled ${LABEL}.`);

  let failed = false;
  for (const pr of pulls) {
    const reasons = blockers(pr, release);
    if (reasons.length) {
      console.log(`#${pr.number} waits: ${reasons.join("; ")}. ${pr.title}`);
    } else if (dryRun) {
      console.log(`#${pr.number} would be merged. ${pr.title}`);
    } else {
      try {
        // The sha makes GitHub refuse the merge if a commit was pushed since the checks above.
        await github("PUT", `https://api.github.com/repos/${repo}/pulls/${pr.number}/merge`, {
          merge_method: "merge",
          sha: pr.headRefOid,
        });
        console.log(`#${pr.number} merged. ${pr.title}`);
      } catch (e) {
        failed = true;
        console.log(`::error::#${pr.number} could not be merged: ${e.message}`);
      }
    }
  }
  if (failed) process.exitCode = 1;
}

async function github(method, url, body) {
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "music-assistant.io-merge-on-next-beta",
    },
    body: body && JSON.stringify(body),
  });
  const json = await response.json();
  if (!response.ok || json.errors) {
    throw new Error(`${method} ${url}: ${response.status} ${JSON.stringify(json.errors ?? json.message)}`);
  }
  return json;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) await main();
