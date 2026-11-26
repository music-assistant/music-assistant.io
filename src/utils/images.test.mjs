// Tests for the image CDN URLs (src/utils/images.mjs). Run with `pnpm test`.
import assert from "node:assert/strict";
import fs from "node:fs";
import { describe, it } from "node:test";
import { REMOTE_IMAGE_HOSTS, resized, srcset } from "./images.mjs";

describe("resized images", () => {
  it("resizes this site's images", () =>
    assert.equal(resized("/assets/bio/x.webp", 312), "/.netlify/images?url=%2Fassets%2Fbio%2Fx.webp&w=312"));

  it("resizes images from the listed hosts", () =>
    assert.equal(
      resized("https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/x", 208),
      "/.netlify/images?url=https%3A%2F%2Fassets.openhomefoundation.org%2Fopengraph%3Furl%3Dhttps%3A%2F%2Fwww.music-assistant.io%2Fblog%2Fx&w=208",
    ));

  it("leaves other images alone", () => {
    assert.equal(resized("https://example.com/x.png", 312), null);
    assert.equal(resized("http://store.openhomefoundation.org/x.png", 312), null);
    assert.equal(resized("//store.openhomefoundation.org/x.png", 312), null);
    assert.equal(resized("not a url", 312), null);
    assert.equal(resized(null, 312), null);
  });

  it("builds a srcset, or none when the image can't be resized", () => {
    assert.equal(srcset("/x.webp", [208, 312]), "/.netlify/images?url=%2Fx.webp&w=208 208w, /.netlify/images?url=%2Fx.webp&w=312 312w");
    assert.equal(srcset("https://example.com/x.png", [208, 312]), undefined);
  });

  it("only lists hosts that netlify.toml allows", () => {
    const toml = fs.readFileSync(new URL("../../netlify.toml", import.meta.url), "utf8");
    const allowed = [...toml.matchAll(/"(https:\/\/[^"]+)"/g)].map(([, pattern]) => new RegExp(`^${pattern.replace(/\\\\/g, "\\")}$`));
    assert.ok(allowed.length > 0, "netlify.toml has no [images] remote_images");
    for (const host of REMOTE_IMAGE_HOSTS) {
      assert.ok(allowed.some((pattern) => pattern.test(`https://${host}/x.png`)), `${host} is missing from netlify.toml`);
    }
  });
});
