// The link-in-bio page at /bio/, built from src/data/bio.yml.
//
// The page is what the link on our social profiles points at. Its Latest
// list is the newest blog posts (release notes included), plus anything
// added by hand in bio.yml. Below it are lists of links.
//
// bio.yml is edited by people who don't run the site locally, so every
// mistake fails the build and names the item at fault, rather than
// silently rendering an empty section on the live page.
//
// Adapted from home-assistant.io's bio page (astro/src/utils/bio.mjs),
// without what this page doesn't use: pins, fallbacks, category feeds,
// downloaded data and per-source limits.
import { isShowing, select } from "./bio-schedule.mjs";

const SECTION_TYPES = ["links", "feed"];
const OG_ENDPOINT = "https://assets.openhomefoundation.org/opengraph";

// Platforms a social link can name: its label, and its Starlight icon.
export const PLATFORMS = {
  github: { label: "GitHub", icon: "github" },
  discord: { label: "Discord", icon: "discord" },
  youtube: { label: "YouTube", icon: "youtube" },
  mastodon: { label: "Mastodon", icon: "mastodon" },
  bluesky: { label: "Bluesky", icon: "blueSky" },
  instagram: { label: "Instagram", icon: "instagram" },
  threads: { label: "Threads", icon: "threads" },
  linkedin: { label: "LinkedIn", icon: "linkedin" },
  reddit: { label: "Reddit", icon: "reddit" },
  facebook: { label: "Facebook", icon: "facebook" },
  tiktok: { label: "TikTok", icon: "tiktok" },
  x: { label: "X", icon: "x.com" },
  rss: { label: "RSS", icon: "rss" },
};

export class BioConfigError extends Error {}

// `item` is the title or label of the item at fault, so the message says
// which one it is as well as where.
const fail = (keyPath, message, item) => {
  const which = blank(item) ? "" : ` ("${item}")`;
  throw new BioConfigError(`src/data/bio.yml ${keyPath}${which}: ${message}`.replace(" :", ":"));
};

const blank = (value) => value === undefined || value === null || String(value).trim() === "";
const isMap = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const nameOf = (item) => (isMap(item) ? (item.title ?? item.label) : undefined);

// -- Dates --------------------------------------------------------------------

const ISO_DATE = /^\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}(?::\d{2})?(?: ?(?:Z|[+-]\d{2}:?\d{2}))?)?$/;

// Dates in bio.yml must be ISO. A lenient parser would happily read
// "01/11/2026" as some other day instead of rejecting it. Times without a
// zone are UTC. YAML already turns unquoted dates into Dates.
export function parseTime(value, keyPath, item) {
  if (value === undefined || value === null) return null;
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) fail(keyPath, "is not a date. Use YYYY-MM-DD", item);
    return value;
  }
  const text = String(value).trim();
  if (!ISO_DATE.test(text)) fail(keyPath, `"${value}" is not a date. Use YYYY-MM-DD`, item);
  let iso = text.replace(" ", "T");
  if (iso.length === 10) iso += "T00:00:00";
  if (!/(Z|[+-]\d{2}:?\d{2})$/.test(iso)) iso += "Z";
  const date = new Date(iso.replace(/ ([+-])/, "$1"));
  const calendar = new Date(`${text.slice(0, 10)}T00:00:00Z`);
  if (
    Number.isNaN(date.getTime()) ||
    Number.isNaN(calendar.getTime()) ||
    calendar.toISOString().slice(0, 10) !== text.slice(0, 10)
  )
    fail(keyPath, `"${value}" is not a date. Use YYYY-MM-DD`, item);
  return date;
}

// A time was given, not just a day. YAML reads both `2026-11-15` and
// `2026-11-15T00:00:00Z` as the same Date, so midnight UTC counts as a day.
const hasTime = (value) =>
  value instanceof Date ? value.getUTCHours() !== 0 || value.getUTCMinutes() !== 0 : /\d{2}:\d{2}/.test(String(value));

const DAY = new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const DAY_NO_YEAR = new Intl.DateTimeFormat("en", { month: "long", day: "numeric", timeZone: "UTC" });
const TIME = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "UTC" });

export const formatDay = (date) => DAY.format(date);

const DAY_MS = 24 * 60 * 60 * 1000;
const startOfDay = (date) => new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

// An `ends` with only a day keeps the item up through that whole day:
// `ends: 2026-11-15` hides it at midnight UTC as the 16th begins. With a
// time, it hides at that time.
export function parseEnd(value, keyPath, item) {
  const date = parseTime(value, keyPath, item);
  if (!date || hasTime(value)) return date;
  return new Date(date.getTime() + DAY_MS);
}

// When an item shows: from `starts` until `ends`.
function windowOf(item, keyPath = "item") {
  const name = nameOf(item);
  return {
    starts: parseTime(item.starts, `${keyPath}.starts`, name),
    ends: parseEnd(item.ends, `${keyPath}.ends`, name),
  };
}

// Keys that are easy to reach for. Naming the right key beats an item
// that silently ignores its dates.
function validateWindow(item, keyPath, video = false) {
  const renamed = { expires: "ends", end: "ends", start: video ? "airs" : "starts", date: video ? "airs" : "starts" };
  for (const [old, current] of Object.entries(renamed)) {
    if (has(item, old)) fail(`${keyPath}.${old}`, `is not a key here. Use ${current}`, nameOf(item));
  }
  const { starts, ends } = windowOf(item, keyPath);
  if (starts && ends && ends <= starts) fail(`${keyPath}.ends`, "must be after starts", nameOf(item));
}

// -- YouTube ------------------------------------------------------------------

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

// Accepts a bare video ID or any of the usual YouTube links.
export function youtubeId(value) {
  const text = String(value ?? "").trim();
  if (YOUTUBE_ID.test(text)) return text;
  let url;
  try {
    url = new URL(text);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^(www|m)\./, "");
  let id = null;
  if (host === "youtu.be") id = url.pathname.slice(1);
  else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    id = url.searchParams.get("v") ?? url.pathname.match(/^\/(?:live|shorts|embed)\/([^/]+)/)?.[1] ?? null;
  }
  return id && YOUTUBE_ID.test(id) ? id : null;
}

// -- Validation ---------------------------------------------------------------

export function validate(config) {
  if (!isMap(config)) fail("", "is empty or missing");
  for (const key of ["tagline", "description"]) {
    if (blank(config[key])) fail(key, "is required");
  }

  const sections = config.sections;
  if (!Array.isArray(sections) || sections.length === 0) fail("sections", "must be a non-empty list");
  sections.forEach((section, index) => validateSection(section, index));
  if (sections.filter((section) => section.type === "feed").length > 1) {
    fail("sections", "can have only one section of type feed");
  }

  (config.socials ?? []).forEach((social, index) => {
    const keyPath = `socials[${index}]`;
    if (!has(PLATFORMS, social?.platform)) {
      fail(`${keyPath}.platform`, `must be one of: ${Object.keys(PLATFORMS).join(", ")}`);
    }
    requireUrl(social, keyPath);
  });

  return true;
}

function validateSection(section, index) {
  const keyPath = `sections[${index}]`;
  if (!isMap(section)) fail(keyPath, "must be a map");
  if (!SECTION_TYPES.includes(section.type)) fail(`${keyPath}.type`, `must be one of: ${SECTION_TYPES.join(", ")}`, section.title);
  if (blank(section.title)) fail(`${keyPath}.title`, "is required");

  if (section.type === "feed") {
    validateLimit(section.limit, `${keyPath}.limit`, section.title);
    if (has(section, "insert")) validateInserts(section.insert, `${keyPath}.insert`);
    return;
  }

  const items = section.items;
  if (!Array.isArray(items) || items.length === 0) fail(`${keyPath}.items`, "must be a non-empty list", section.title);
  items.forEach((item, itemIndex) => {
    const itemPath = `${keyPath}.items[${itemIndex}]`;
    if (!isMap(item)) fail(itemPath, "must be a map with label and url");
    if (blank(item.label)) fail(`${itemPath}.label`, "is required");
    requireUrl(item, itemPath);
    if (has(item, "featured") && typeof item.featured !== "boolean") fail(`${itemPath}.featured`, "must be true or false", item.label);
    validateWindow(item, itemPath);
  });
}

// Items written straight into the feed. `starts` is when one appears, and
// also where it sits and the date shown on it, as a post's publish date
// is, so it is required: a scheduled item comes in at the top. A YouTube
// video takes its link and picture from the video, and its place and
// date from when it `airs`; `starts` on a video only shows it early.
// Any of them can have `ends`.
function validateInserts(inserts, keyPath) {
  if (!Array.isArray(inserts)) fail(keyPath, "must be a list of items");

  inserts.forEach((item, index) => {
    const itemPath = `${keyPath}[${index}]`;
    if (!isMap(item)) fail(itemPath, "must be a map with title, url and starts");
    if (blank(item.title)) fail(`${itemPath}.title`, "is required");
    for (const key of ["label", "note"]) {
      if (has(item, key) && blank(item[key])) fail(`${itemPath}.${key}`, "must be text, or left out", item.title);
    }
    if (has(item, "image")) {
      const image = String(item.image ?? "");
      if (!(image === "auto" || image.startsWith("/") || image.startsWith("https://") || image.startsWith("http://"))) {
        fail(`${itemPath}.image`, "must be auto, a file in public/ like /assets/bio/x.webp, or a full https:// URL", item.title);
      }
    }
    validateWindow(item, itemPath, item.type === "youtube");

    if (item.type === "youtube") {
      if (!youtubeId(item.video)) {
        fail(`${itemPath}.video`, "must be a YouTube video ID or link, e.g. https://www.youtube.com/watch?v=XyAL1to3Lm4", item.title);
      }
      if (blank(item.airs)) fail(`${itemPath}.airs`, "is required, e.g. 2026-11-15T18:00:00Z", item.title);
      parseTime(item.airs, `${itemPath}.airs`, item.title);
      return;
    }
    if (has(item, "type")) fail(`${itemPath}.type`, "must be youtube, or left out for a plain link", item.title);
    if (has(item, "airs")) fail(`${itemPath}.airs`, "is only for YouTube items. Use starts", item.title);

    requireUrl(item, itemPath);
    if (blank(item.starts)) fail(`${itemPath}.starts`, "is required: when it appears, e.g. 2026-11-01", item.title);
  });
}

function validateLimit(limit, keyPath, name) {
  if (Number.isInteger(limit) && limit >= 1 && limit <= 10) return;
  fail(keyPath, "must be a whole number from 1 to 10", name);
}

function requireUrl(item, keyPath) {
  const url = String(item?.url ?? "");
  if (url.startsWith("/") || url.startsWith("https://") || url.startsWith("http://")) return;
  fail(`${keyPath}.url`, "must be a site path like /blog/ or a full https:// URL", nameOf(item));
}

// -- Resolution ---------------------------------------------------------------

// Plain objects for the page: only sections with something to render.
//
// `posts` are the blog posts, as { title, url, date, image, label }, and
// `siteUrl` is the site's address, for `image: auto`.
//
// Each section has:
//   - `entries`: everything to render, in order, including items that only
//     show later. Each has `hidden` (not showing at build time) and what
//     the rule in bio-schedule.mjs needs to show and hide it as time
//     passes: `key`, `url`, `starts`, `ends`, and maybe `variant`.
//   - `tiles`: the entries showing at build time.
//   - `limit`: how many the list shows, or null for every entry.
//   - `hidden`: nothing is showing yet, but something will.
export function resolve(config, posts, now, siteUrl) {
  const newestFirst = [...posts].sort((a, b) => b.date - a.date);
  const lists = config.sections.map((section) => {
    if (section.type !== "feed") return { limit: Infinity, entries: linkEntries(section, now) };
    const kept = canShow(mergedItems(section, newestFirst, now, siteUrl), section.limit, now);
    return { limit: section.limit, entries: feedEntries(kept, now) };
  });
  const picks = select(lists, now);

  return config.sections.flatMap((section, index) => {
    const list = lists[index];
    if (list.entries.length === 0) return [];
    const entries = list.entries.map((entry) => ({ ...entry, hidden: !isShowing(entry, picks[index]) }));
    const tiles = entries.filter((entry) => !entry.hidden);
    return [
      {
        title: section.title,
        type: section.type,
        limit: Number.isFinite(list.limit) ? list.limit : null,
        entries,
        tiles,
        hidden: tiles.length === 0,
      },
    ];
  });
}

// Up from now on, until it's removed: nothing about it will change.
const fixed = (item, now) => (!item.starts || item.starts <= now) && !item.ends;

// The items of the feed that might ever show, each marked `sure` if it is
// certain to show whenever the list gets that far: it is up for good, and
// no earlier item has its link. Once the list has `limit` sure items,
// nothing after them can show. Leaving out what can never show keeps the
// page small: the blog alone has well over a hundred posts.
function canShow(items, limit, now) {
  const kept = [];
  let sure = 0;
  for (const item of items) {
    if (sure >= limit) break;
    const rivals = kept.filter((before) => before.url === item.url);
    // An earlier item that is always up has the link.
    if (rivals.some((before) => fixed(before, now))) continue;
    const isSure = fixed(item, now) && rivals.length === 0;
    kept.push({ ...item, sure: isSure });
    if (isSure) sure++;
  }
  return kept;
}

// Blog posts and hand-added items in one list, newest first. Hand-added
// items take their place by `starts`, videos by `airs`. Ended items are
// left out.
function mergedItems(section, posts, now, siteUrl) {
  return [...posts.map((post) => ({ ...post, kind: "post" })), ...insertedItems(section, posts, siteUrl)]
    .filter((item) => !(item.ends && item.ends <= now))
    .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
}

// `insert:` entries on the feed section.
//
// A video without an `ends` comes down at the end of the day after it
// airs (UTC), so a livestream doesn't linger once it's over.
function insertedItems(section, posts, siteUrl) {
  return (section.insert ?? []).map((item, index) => {
    const keyPath = `sections.insert[${index}]`;
    const window = windowOf(item, keyPath);
    if (item.type === "youtube") {
      const id = youtubeId(item.video);
      const airs = parseTime(item.airs, `${keyPath}.airs`, item.title);
      return {
        kind: "video",
        title: item.title,
        url: `https://www.youtube.com/watch?v=${id}`,
        date: airs,
        timed: hasTime(item.airs),
        image: item.image ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        label: item.label,
        starts: window.starts,
        ends: window.ends ?? new Date(startOfDay(airs).getTime() + 2 * DAY_MS),
      };
    }
    return {
      kind: "insert",
      title: item.title,
      url: item.url,
      date: window.starts,
      image: imageFor(item, posts, siteUrl),
      label: item.label,
      note: item.note,
      ...window,
    };
  });
}

// A large first card can only go to an item that might come first: one
// with nothing sure to show before it. Those get a hero version and,
// unless they are always first, a row version too. Without an image an
// item stays a row rather than a card with a hole. A video already is a
// large card, wherever it lands.
function feedEntries(items, now) {
  return items.flatMap((item, index) => {
    const base = { key: String(index), url: item.url, starts: item.starts ?? null, ends: item.ends ?? null };
    const tile = { ...feedTile(item, now), ...base };
    if (item.kind === "video") return [tile];
    if (!tile.image || items.slice(0, index).some((before) => before.sure)) return [{ ...tile, layout: "row" }];
    if (index === 0) return [{ ...tile, layout: "hero" }];
    return [
      { ...tile, layout: "hero", variant: "hero" },
      { ...tile, layout: "row", variant: "row" },
    ];
  });
}

// Links, minus those that have ended. Links have no limit.
function linkEntries(section, now) {
  return section.items.flatMap((item, index) => {
    const window = windowOf(item);
    if (window.ends && window.ends <= now) return [];
    return [{ key: String(index), title: item.label, url: item.url, featured: item.featured === true, ...window }];
  });
}

function feedTile(item, now) {
  if (item.kind === "video") {
    // Before it airs: "Livestream · Starts November 15 · 18:00 UTC". The
    // script on the page swaps in `noteAfter` once it has started.
    const upcoming = item.date > now;
    const before = ["Starts " + DAY_NO_YEAR.format(item.date), item.timed ? `${TIME.format(item.date)} UTC` : null];
    const after = [formatDay(item.date)];
    const join = (when) => [item.label, ...when].filter(Boolean).join(" · ");
    return {
      kind: "video",
      title: item.title,
      note: join(upcoming ? before : after),
      noteAfter: upcoming ? join(after) : null,
      airs: upcoming ? item.date : null,
      image: item.image,
    };
  }

  // "Release · August 26, 2026", so a mixed list says what each item is.
  const note = [item.label, item.date ? formatDay(item.date) : null].filter(Boolean).join(" · ");
  return { kind: "link", title: item.title, note: item.note ?? note, image: item.image ?? null };
}

export function socialLinks(config) {
  return (config.socials ?? []).map((social) => ({
    url: social.url,
    label: social.label ?? PLATFORMS[social.platform].label,
    icon: PLATFORMS[social.platform].icon,
  }));
}


// `image: auto` uses the link's social preview image: a blog post's own
// cover, or, for any other page, the Open Home Foundation Open Graph
// service that the blog's covers come from.
export function imageFor(item, posts, siteUrl) {
  const image = item.image;
  if (blank(image)) return null;
  if (image !== "auto") return image;

  let url = item.url;
  const pathname = url.startsWith(siteUrl) ? url.slice(siteUrl.length) : url;
  if (pathname.startsWith("/")) {
    const post = posts.find((candidate) => candidate.url === pathname);
    if (post && !blank(post.image)) return post.image;
    url = siteUrl + pathname;
  }
  return `${OG_ENDPOINT}?url=${encodeURIComponent(url)}`;
}
