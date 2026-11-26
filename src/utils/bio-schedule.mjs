// Which items of the bio page's lists are showing at a given moment.
// Shared by the build (src/utils/bio.mjs) and the script on the page
// (src/pages/bio.astro), so both apply the same rule. No Node imports
// here: this file also runs in the browser.
//
// The page is static, so the build can only get the lists right for the
// moment it runs. It also renders, hidden, every item that might show
// later: anything still to start, and anything that would take the place
// of an item that ends. The script runs this rule again with the
// website's time (from the server, not the visitor's clock) and shows or
// hides items to match. Without JavaScript, or if the time can't be read,
// the lists stay as they were at build time.
//
// Adapted from home-assistant.io's bio page. This page has one feed and no
// pins, so there is no ranking between feeds and no fallbacks.

// An item is open from `starts` (inclusive) until `ends` (exclusive).
// Either can be missing. Values are Dates or ISO strings.
export function isOpen(item, now) {
  const time = (value) => (value === undefined || value === null || value === "" ? null : new Date(value).getTime());
  const starts = time(item.starts);
  const ends = time(item.ends);
  const at = new Date(now).getTime();
  return (starts === null || starts <= at) && (ends === null || ends > at);
}

// Returns, for each of `lists`, the keys of its entries showing at `now`,
// in order. Each list has `entries` (in display order) and a `limit` (none
// means every entry). Each entry has `key` and `url`, and optionally
// `starts`, `ends` and `variant`.
//
// A link that appears twice in a list shows once, as the earlier entry
// that is up. So a hand-added item that points at a blog post takes the
// post's place while it's up, and the post shows again once it ends.
export function select(lists, now) {
  return lists.map((list) => {
    const limit = list.limit ?? Infinity;
    const keys = [];
    const urls = new Set();
    for (const entry of list.entries) {
      if (keys.length >= limit) break;
      if (!isOpen(entry, now)) continue;
      // A hero and a row version of the same item share a key.
      if (keys.includes(entry.key)) continue;
      if (urls.has(entry.url)) continue;
      urls.add(entry.url);
      keys.push(entry.key);
    }
    return keys;
  });
}

// Whether one rendered entry is showing. The Latest list puts its first
// item in a large card, so it renders the items that might end up first
// twice: a `hero` version, shown only in first place, and a `row` version,
// shown anywhere else. Entries without a variant show wherever they land.
export function isShowing(entry, keys) {
  const position = keys.indexOf(entry.key);
  if (position === -1) return false;
  if (entry.variant === "hero") return position === 0;
  if (entry.variant === "row") return position > 0;
  return true;
}
