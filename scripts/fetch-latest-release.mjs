import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_URL =
  "https://api.github.com/repos/music-assistant/server/releases/latest";
const OUTPUT = fileURLToPath(
  new URL("../src/data/latest-release.json", import.meta.url),
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
  if (typeof data.tag_name !== "string" || !data.tag_name)
    throw new Error("payload has no tag_name");
  const release = { version: data.tag_name, url: data.html_url };
  await mkdir(dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, JSON.stringify(release, null, 2) + "\n");
  console.log(`[latest-release] wrote version ${release.version}`);
}

// The file is not committed, so a build starting from a fresh clone has
// nothing to fall back on and Astro cannot resolve the import. Write an empty
// object instead: SiteTitle.astro only renders the badge when it finds both a
// version and a url, so the build succeeds and the badge is simply left off.
// An existing file is kept, so a local dev server carries on showing whatever
// it last fetched.
main().catch(async (e) => {
  console.warn(`[latest-release] fetch failed. ${e}`);
  if (existsSync(OUTPUT)) {
    console.warn("[latest-release] keeping the file already on disk");
    return;
  }
  await mkdir(dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, "{}\n");
  console.warn("[latest-release] wrote an empty file so the build can proceed");
});
