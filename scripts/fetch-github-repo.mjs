import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_URL = "https://api.github.com/repos/music-assistant/server";
const OUTPUT = fileURLToPath(
  new URL("../src/data/github-repo.json", import.meta.url),
);

async function main() {
  const response = await fetch(SOURCE_URL, {
    headers: {
      "User-Agent": "music-assistant.io-build",
      Accept: "application/vnd.github+json",
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const data = await response.json();
  if (typeof data.stargazers_count !== "number")
    throw new Error("payload has no stargazers_count");
  const repo = { stars: data.stargazers_count, url: data.html_url };
  await mkdir(dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, JSON.stringify(repo, null, 2) + "\n");
  console.log(`[github-repo] wrote ${repo.stars} stars`);
}

// Same fallback as fetch-latest-release.mjs: keep a file already on disk, or
// write an empty object so the import resolves. The header then shows the
// GitHub link without a count.
main().catch(async (e) => {
  console.warn(`[github-repo] fetch failed. ${e}`);
  if (existsSync(OUTPUT)) {
    console.warn("[github-repo] keeping the file already on disk");
    return;
  }
  await mkdir(dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, "{}\n");
  console.warn("[github-repo] wrote an empty file so the build can proceed");
});
