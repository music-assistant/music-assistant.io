import { mkdir, writeFile } from "node:fs/promises";
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

main().catch((e) =>
  console.warn(`[latest-release] fetch failed, keeping committed file. ${e}`),
);
