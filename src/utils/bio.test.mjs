// Tests for the bio page logic (src/utils/bio.mjs and bio-schedule.mjs).
// Run with `pnpm test` (node's built-in test runner, no dependencies).
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { BioConfigError, imageFor, parseEnd, parseTime, resolve, socialLinks, validate, youtubeId } from "./bio.mjs";
import { isOpen, isShowing, select } from "./bio-schedule.mjs";

const NOW = new Date("2026-11-06T12:00:00Z");
const SITE = "https://www.music-assistant.io";

const post = (day, title, extra = {}) => ({
  title,
  url: `/blog/${day}/`,
  date: new Date(`${day}T00:00:00Z`),
  image: `/images/${day}.jpg`,
  label: "News",
  ...extra,
});
const POSTS = [
  post("2026-10-20", "Voice"),
  post("2026-08-26", "2.10", { label: "Release" }),
  post("2026-08-13", "Save the date"),
  post("2026-07-30", "Plausible"),
  post("2026-06-10", "2.9", { label: "Release" }),
  post("2026-05-01", "Older"),
  post("2026-04-01", "Oldest"),
];

const config = ({ insert, limit = 3, links } = {}) => ({
  tagline: "Your music. Your way.",
  description: "A description.",
  sections: [
    { type: "feed", title: "Latest", limit, ...(insert ? { insert } : {}) },
    { type: "links", title: "Featured", items: links ?? [{ label: "Merch store", url: "https://store.example/" }] },
  ],
  socials: [{ platform: "github", url: "https://github.com/music-assistant" }],
});

const build = (cfg, now = NOW, posts = POSTS) => {
  validate(cfg);
  return resolve(cfg, posts, now, SITE);
};

// What the page shows at `time`, by section title, using the shared rule.
const showingAt = (sections, time) => {
  const picks = select(sections, new Date(time));
  return Object.fromEntries(
    sections.map((section, index) => [section.title, section.entries.filter((e) => isShowing(e, picks[index])).map((e) => e.title)]),
  );
};

// What the build rendered as showing, by section title.
const shownAtBuild = (sections) => Object.fromEntries(sections.map((section) => [section.title, section.tiles.map((t) => t.title)]));

const assertInvalid = (cfg, message) =>
  assert.throws(
    () => validate(cfg),
    (error) => error instanceof BioConfigError && error.message.includes(message),
  );

const insert = (overrides = {}) => ({ title: "Community Day", url: "https://example.test/cd/", starts: "2026-11-03", ...overrides });

describe("validation: an editing mistake names the item", () => {
  it("accepts a valid config", () => assert.equal(validate(config({ insert: [insert()] })), true));

  it("requires starts on a Latest item, naming it", () =>
    assertInvalid(config({ insert: [insert({ starts: undefined })] }), 'sections[0].insert[0].starts ("Community Day"): is required'));

  it("rejects ends before starts", () =>
    assertInvalid(config({ insert: [insert({ starts: "2026-11-05", ends: "2026-11-04" })] }), "insert[0].ends (\"Community Day\"): must be after starts"));

  it("allows starts and ends on the same day", () =>
    assert.equal(validate(config({ insert: [insert({ starts: "2026-11-05", ends: "2026-11-05" })] })), true));

  it("names starts for date and start", () => {
    assertInvalid(config({ insert: [{ title: "x", url: "/x/", date: "2026-11-01" }] }), "insert[0].date (\"x\"): is not a key here. Use starts");
    assertInvalid(config({ links: [{ label: "x", url: "/x/", start: "2026-11-01" }] }), "items[0].start (\"x\"): is not a key here. Use starts");
  });

  it("names ends for expires and end", () => {
    assertInvalid(config({ insert: [insert({ expires: "2026-11-09" })] }), "insert[0].expires (\"Community Day\"): is not a key here. Use ends");
    assertInvalid(config({ links: [{ label: "x", url: "/x/", end: "2026-11-09" }] }), "items[0].end (\"x\"): is not a key here. Use ends");
  });

  it("rejects a date that isn't YYYY-MM-DD", () => {
    assertInvalid(config({ insert: [insert({ starts: "06/11/2026" })] }), '"06/11/2026" is not a date. Use YYYY-MM-DD');
    assertInvalid(config({ insert: [insert({ starts: "2026-02-30" })] }), '"2026-02-30" is not a date');
  });

  it("rejects a relative link without a slash", () =>
    assertInvalid(config({ links: [{ label: "Docs", url: "documentation/" }] }), 'items[0].url ("Docs"): must be a site path'));

  it("requires a label on a link", () => assertInvalid(config({ links: [{ url: "/x/" }] }), "items[0].label: is required"));

  it("rejects airs on a plain item", () =>
    assertInvalid(config({ insert: [insert({ airs: "2026-11-10" })] }), "insert[0].airs (\"Community Day\"): is only for YouTube items"));

  it("rejects a limit out of range", () => assertInvalid(config({ limit: 0 }), "sections[0].limit (\"Latest\"): must be a whole number"));

  it("allows only one feed", () => {
    const cfg = config();
    cfg.sections.push({ type: "feed", title: "More", limit: 2 });
    assertInvalid(cfg, "can have only one section of type feed");
  });

  it("names the platforms for an unknown one", () => {
    const cfg = config();
    cfg.socials = [{ platform: "myspace", url: "https://myspace.example/" }];
    assertInvalid(cfg, "socials[0].platform: must be one of: github, discord");
  });

  it("requires a tagline", () => assertInvalid({ ...config(), tagline: "" }, "tagline: is required"));
});

describe("dates", () => {
  it("reads times as UTC unless they carry an offset", () => {
    assert.equal(parseTime("2026-11-15", "x").toISOString(), "2026-11-15T00:00:00.000Z");
    assert.equal(parseTime("2026-11-15T17:30:00Z", "x").toISOString(), "2026-11-15T17:30:00.000Z");
    assert.equal(parseTime("2026-11-15T18:30:00+01:00", "x").toISOString(), "2026-11-15T17:30:00.000Z");
    assert.equal(parseTime("2026-11-15 17:30", "x").toISOString(), "2026-11-15T17:30:00.000Z");
  });

  it("keeps a day-only ends up through that day", () => {
    assert.equal(parseEnd("2026-11-15", "x").toISOString(), "2026-11-16T00:00:00.000Z");
    assert.equal(parseEnd("2026-11-15T18:00:00Z", "x").toISOString(), "2026-11-15T18:00:00.000Z");
  });

  it("treats a YAML date (a Date at midnight UTC) as a day", () => {
    assert.equal(parseEnd(new Date("2026-11-15T00:00:00Z"), "x").toISOString(), "2026-11-16T00:00:00.000Z");
    assert.equal(parseEnd(new Date("2026-11-15T18:00:00Z"), "x").toISOString(), "2026-11-15T18:00:00.000Z");
  });

  it("opens at starts and closes at ends", () => {
    const item = { starts: "2026-11-01T00:00:00Z", ends: "2026-11-02T00:00:00Z" };
    assert.equal(isOpen(item, "2026-10-31T23:59:59Z"), false);
    assert.equal(isOpen(item, "2026-11-01T00:00:00Z"), true);
    assert.equal(isOpen(item, "2026-11-02T00:00:00Z"), false);
  });
});

describe("the Latest list", () => {
  it("shows the newest posts up to its limit, with what each is", () => {
    const [latest] = build(config());
    assert.deepEqual(latest.tiles.map((t) => [t.title, t.note]), [
      ["Voice", "News · October 20, 2026"],
      ["2.10", "Release · August 26, 2026"],
      ["Save the date", "News · August 13, 2026"],
    ]);
  });

  it("stops once enough items are certain to show", () => assert.equal(build(config()).at(0).entries.length, 3));

  it("puts an item added by hand in place by its starts", () => {
    const [latest] = build(config({ insert: [insert({ starts: "2026-09-01" })] }));
    assert.deepEqual(latest.tiles.map((t) => t.title), ["Voice", "Community Day", "2.10"]);
  });

  it("shows note instead of the label and date", () => {
    const [latest] = build(config({ insert: [insert({ note: "Find a meetup", label: "Event" })] }));
    assert.equal(latest.tiles[0].note, "Find a meetup");
    const [labelled] = build(config({ insert: [insert({ label: "Event" })] }));
    assert.equal(labelled.tiles[0].note, "Event · November 3, 2026");
  });

  it("renders a future item hidden, ready for the script, and brings it in at the top", () => {
    const [latest] = build(config({ insert: [insert({ starts: "2026-11-10T09:00:00Z" })] }));
    assert.deepEqual(latest.tiles.map((t) => t.title), ["Voice", "2.10", "Save the date"]);
    const scheduled = latest.entries.find((e) => e.title === "Community Day");
    assert.equal(scheduled.hidden, true);
    assert.equal(scheduled.starts.toISOString(), "2026-11-10T09:00:00.000Z");
    assert.deepEqual(showingAt([latest], "2026-11-10T09:00:00Z").Latest, ["Community Day", "Voice", "2.10"]);
  });

  it("renders the item that moves up when one ends, and leaves out what has ended", () => {
    const [latest] = build(config({ insert: [insert({ ends: "2026-11-07" })] }));
    assert.deepEqual(latest.tiles.map((t) => t.title), ["Community Day", "Voice", "2.10"]);
    assert.ok(latest.entries.some((e) => e.title === "Save the date" && e.hidden));
    assert.deepEqual(showingAt([latest], "2026-11-08T00:00:00Z").Latest, ["Voice", "2.10", "Save the date"]);

    const [later] = build(config({ insert: [insert({ ends: "2026-11-07" })] }), new Date("2026-11-08T00:00:00Z"));
    assert.ok(!later.entries.some((e) => e.title === "Community Day"));
  });

  it("shows a link once, as the earlier item that is up", () => {
    // A hand-added item for the Voice post, newer than it.
    const [latest] = build(config({ insert: [insert({ title: "Voice, pinned", url: "/blog/2026-10-20/", ends: "2026-11-07" })] }));
    assert.deepEqual(showingAt([latest], "2026-11-06T12:00:00Z").Latest, ["Voice, pinned", "2.10", "Save the date"]);
    assert.deepEqual(showingAt([latest], "2026-11-08T00:00:00Z").Latest, ["Voice", "2.10", "Save the date"]);
  });

  it("leaves out a post whose link an item always up already has", () => {
    const [latest] = build(config({ insert: [insert({ title: "Voice, again", url: "/blog/2026-10-20/" })] }));
    assert.ok(!latest.entries.some((e) => e.title === "Voice"));
  });
});

describe("the large first card", () => {
  it("makes the first item a hero with its image", () => {
    const [latest] = build(config());
    assert.deepEqual(latest.tiles.map((t) => t.layout), ["hero", "row", "row"]);
  });

  it("keeps a first item without an image as a row", () => {
    const [latest] = build(config(), NOW, [post("2026-10-20", "No image", { image: undefined }), ...POSTS.slice(1)]);
    assert.equal(latest.tiles[0].layout, "row");
  });

  it("gives an item that might come first a hero and a row version", () => {
    const [latest] = build(config({ insert: [insert({ image: "/cd.webp", ends: "2026-11-07" })] }));
    assert.deepEqual(latest.entries.slice(0, 3).map((e) => [e.title, e.layout, e.variant ?? null, e.hidden]), [
      ["Community Day", "hero", null, false],
      ["Voice", "hero", "hero", true],
      ["Voice", "row", "row", false],
    ]);
    const keys = select([latest], new Date("2026-11-08T00:00:00Z"))[0];
    assert.deepEqual(latest.entries.filter((e) => isShowing(e, keys)).map((e) => [e.title, e.layout]), [
      ["Voice", "hero"],
      ["2.10", "row"],
      ["Save the date", "row"],
    ]);
  });
});

describe("YouTube items", () => {
  const video = (overrides = {}) => ({
    type: "youtube",
    video: "https://www.youtube.com/watch?v=XyAL1to3Lm4",
    title: "Release party",
    airs: "2026-11-15T18:00:00Z",
    label: "Livestream",
    ...overrides,
  });

  it("reads IDs from the usual links", () => {
    for (const link of [
      "XyAL1to3Lm4",
      "https://youtu.be/XyAL1to3Lm4",
      "https://www.youtube.com/watch?v=XyAL1to3Lm4&t=10",
      "https://www.youtube.com/live/XyAL1to3Lm4",
      "https://m.youtube.com/shorts/XyAL1to3Lm4",
    ])
      assert.equal(youtubeId(link), "XyAL1to3Lm4", link);
    assert.equal(youtubeId("https://www.youtube.com/@musicassistant"), null);
  });

  it("needs a video and airs, and names airs for starts-like keys", () => {
    assertInvalid(config({ insert: [video({ video: "https://www.youtube.com/@x" })] }), 'insert[0].video ("Release party"): must be a YouTube video');
    assertInvalid(config({ insert: [video({ airs: undefined })] }), 'insert[0].airs ("Release party"): is required');
    assertInvalid(config({ insert: [video({ date: "2026-11-15" })] }), "insert[0].date (\"Release party\"): is not a key here. Use airs");
  });

  it("rejects an unknown type", () => assertInvalid(config({ insert: [insert({ type: "vimeo" })] }), "insert[0].type"));

  it("shows an upcoming stream with its start time in UTC, then the date it aired", () => {
    const [latest] = build(config({ insert: [video({ airs: "2026-11-06T18:00:00Z" })] }));
    const tile = latest.entries.find((e) => e.kind === "video");
    assert.equal(tile.note, "Livestream · Starts November 6 · 18:00 UTC");
    assert.equal(tile.noteAfter, "Livestream · November 6, 2026");
    assert.equal(tile.airs.toISOString(), "2026-11-06T18:00:00.000Z");
    assert.equal(tile.image, "https://i.ytimg.com/vi/XyAL1to3Lm4/hqdefault.jpg");
    assert.equal(tile.url, "https://www.youtube.com/watch?v=XyAL1to3Lm4");
  });

  it("leaves the time out when only a day is given", () => {
    const [latest] = build(config({ insert: [video({ airs: "2026-11-06" })] }), new Date("2026-11-05T12:00:00Z"));
    assert.equal(latest.entries.find((e) => e.kind === "video").note, "Livestream · Starts November 6");
  });

  it("shows before it airs, from starts if it has one", () => {
    const now = build(config({ insert: [video()] }));
    assert.deepEqual(showingAt(now, NOW).Latest, ["Release party", "Voice", "2.10"]);
    const later = build(config({ insert: [video({ starts: "2026-11-12" })] }));
    assert.deepEqual(showingAt(later, NOW).Latest, ["Voice", "2.10", "Save the date"]);
    assert.deepEqual(showingAt(later, "2026-11-12T00:00:00Z").Latest, ["Release party", "Voice", "2.10"]);
  });

  it("comes down at the end of the day after it airs", () => {
    const sections = build(config({ insert: [video({ starts: "2026-11-05" })] }));
    assert.equal(showingAt(sections, "2026-11-16T23:59:00Z").Latest[0], "Release party");
    assert.equal(showingAt(sections, "2026-11-17T00:00:00Z").Latest[0], "Voice");
  });

  it("is a large card wherever it lands, without a row version", () => {
    const [latest] = build(config({ insert: [video({ starts: "2026-11-05" })] }));
    const videos = latest.entries.filter((e) => e.kind === "video");
    assert.equal(videos.length, 1);
    assert.equal(videos[0].variant, undefined);
  });
});

describe("links", () => {
  it("shows a link only inside its window", () => {
    const sections = build(config({ links: [{ label: "Black Friday", url: "https://store.example/", starts: "2026-11-27T08:00:00Z", ends: "2026-11-30" }] }));
    const featured = sections.find((s) => s.title === "Featured");
    assert.equal(featured.hidden, true);
    assert.equal(featured.entries[0].hidden, true);
    assert.deepEqual(showingAt(sections, "2026-11-27T08:00:00Z").Featured, ["Black Friday"]);
    assert.deepEqual(showingAt(sections, "2026-12-01T00:00:00Z").Featured, []);
  });

  it("leaves out an ended link, and a section with nothing left", () => {
    const sections = build(config({ links: [{ label: "Old", url: "/old/", ends: "2026-11-01" }] }));
    assert.ok(!sections.some((s) => s.title === "Featured"));
  });

  it("keeps featured", () => {
    const sections = build(config({ links: [{ label: "Install", url: "/get-started/", featured: true }] }));
    assert.equal(sections[1].tiles[0].featured, true);
  });
});

describe("socials", () => {
  it("fills in the label and Starlight icon", () =>
    assert.deepEqual(socialLinks({ socials: [{ platform: "bluesky", url: "https://bsky.app/x" }] }), [
      { url: "https://bsky.app/x", label: "Bluesky", icon: "blueSky" },
    ]));
});

describe("images", () => {
  const OG = "https://assets.openhomefoundation.org/opengraph?url=";

  it("uses a blog post's own cover for auto", () =>
    assert.equal(imageFor({ url: "/blog/2026-10-20/", image: "auto" }, POSTS, SITE), "/images/2026-10-20.jpg"));

  it("finds the post from a full link to this site", () =>
    assert.equal(imageFor({ url: `${SITE}/blog/2026-10-20/`, image: "auto" }, POSTS, SITE), "/images/2026-10-20.jpg"));

  it("uses the Open Graph service for other pages", () => {
    assert.equal(imageFor({ url: "/get-started/", image: "auto" }, POSTS, SITE), `${OG}https%3A%2F%2Fwww.music-assistant.io%2Fget-started%2F`);
    assert.equal(
      imageFor({ url: "https://www.openhomefoundation.org/community-day/", image: "auto" }, POSTS, SITE),
      `${OG}https%3A%2F%2Fwww.openhomefoundation.org%2Fcommunity-day%2F`,
    );
  });

  it("keeps any other image as it is, and none as none", () => {
    assert.equal(imageFor({ url: "/x/", image: "/assets/bio/x.webp" }, POSTS, SITE), "/assets/bio/x.webp");
    assert.equal(imageFor({ url: "/x/" }, POSTS, SITE), null);
  });

  it("gives an item added by hand its auto image", () => {
    const [latest] = build(config({ insert: [insert({ image: "auto" })] }));
    assert.equal(latest.tiles[0].image, `${OG}https%3A%2F%2Fexample.test%2Fcd%2F`);
  });

  it("rejects an image that is neither auto, a path nor a URL", () =>
    assertInvalid(config({ insert: [insert({ image: "community-day.webp" })] }), 'insert[0].image ("Community Day"): must be auto'));
});

describe("the page and the build agree", () => {
  // The page reads each entry back from data attributes: times as ISO
  // strings, and no hidden flag. It must reach the build's answer.
  const asPage = (sections) =>
    sections.map((section) => ({
      title: section.title,
      limit: section.limit ?? undefined,
      entries: section.entries.map((e) => ({
        title: e.title,
        key: e.key,
        url: e.url,
        variant: e.variant,
        starts: e.starts?.toISOString(),
        ends: e.ends?.toISOString(),
      })),
    }));

  const scheduled = config({
    insert: [
      insert({ image: "/cd.webp", ends: "2026-11-07" }),
      insert({ title: "Soon", url: "/soon/", starts: "2026-11-09T10:00:00Z", ends: "2026-11-12" }),
      { type: "youtube", video: "XyAL1to3Lm4", title: "Stream", airs: "2026-11-10T18:00:00Z", starts: "2026-11-08" },
    ],
    links: [
      { label: "Store", url: "https://store.example/" },
      { label: "Sale", url: "https://store.example/sale", starts: "2026-11-09", ends: "2026-11-10" },
    ],
  });

  it("matches what the build shows at build time", () => {
    const sections = build(scheduled);
    assert.deepEqual(showingAt(asPage(sections), NOW), shownAtBuild(sections));
  });

  it("matches a later build at every moment along the way", () => {
    const sections = build(scheduled);
    for (const time of [
      "2026-11-07T23:59:59Z",
      "2026-11-08T00:00:00Z",
      "2026-11-09T10:00:00Z",
      "2026-11-10T18:00:00Z",
      "2026-11-12T00:00:00Z",
      "2026-11-20T00:00:00Z",
    ]) {
      const rebuilt = build(scheduled, new Date(time));
      assert.deepEqual(showingAt(asPage(sections), time), shownAtBuild(rebuilt), time);
    }
  });
});
