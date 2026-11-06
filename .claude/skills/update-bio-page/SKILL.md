---
name: update-bio-page
description: Use this whenever someone wants to add, schedule, change, or remove anything on Music Assistant's link-in-bio page (https://www.music-assistant.io/bio/, src/data/bio.yml) — a livestream, YouTube video, announcement, event, campaign, store link, or featured link — even if they only say "put X on the bio page", "add the livestream to bio", "link in bio", or "show this from Friday until Sunday". Also use it to clean up old items ("tidy the bio page", "take the stream down"), and to explain why something is or isn't showing on the bio page.
---

# Update the link-in-bio page

The link-in-bio page at `/bio/` is what Music Assistant's social profiles link to. Everything on it is set in one file: `src/data/bio.yml`. Read the comments at the top of that file before editing. They are the reference for every key, and this skill doesn't repeat them.

The people asking for changes are often from marketing or community teams, not developers. Ask in plain language, and don't make them write YAML or work out UTC themselves.

## 1. Work out what they want

Find out:

- **What it is:** a link, a YouTube video or livestream, or an announcement or event.
- **The title** as it should read on the page, and **the URL**.
- **When it should appear and disappear**, if it's time-limited, and in which time zone.
- **Where it goes**, if they have a view. Otherwise pick the place using step 3.

Whatever they asked for, also look for old items to clear out (see [Clear out old items](#clear-out-old-items)). Ask about those in the same message as your other questions. If they only asked for a cleanup, go straight to that section.

Don't add blog posts or release notes by hand. They appear in the Latest list by themselves once published, and older ones drop off as new ones arrive. If someone asks to add one, tell them it will appear on its own.

## 2. Check what you were given, and ask when it doesn't fit

Before you edit anything, compare the request with what the file needs. If something is missing, unclear, or doesn't match, ask the requester. Don't guess, and never make up a URL, title, date, or time. A wrong guess here goes live on a page linked from every social profile.

Ask when:

- **Something required is missing.** Every item needs a title and a URL. An item in the Latest list also needs to know when it appears (`starts`). If they want it up now, that's today. A YouTube item needs the video link and when it airs.
- **A link isn't what's needed.** For example, it isn't a full `https://` URL. Or it's a YouTube channel, playlist, or studio link instead of a single video. Or the livestream doesn't have its own link yet. Ask for the video link. For a livestream, YouTube creates one as soon as the stream is scheduled.
- **A time is ambiguous.** No time zone, a relative day ("Friday", "next week"), a time without a date, 12-hour time without AM or PM, or a vague time ("evening", "after the stream"). Work out the date you think they mean and ask them to confirm it.
- **The times don't add up.** An `ends` before `starts`, an `ends` that has already passed, an upcoming livestream whose `airs` has already passed, or an `ends` before a livestream airs.
- **"When it airs" and "when it shows" are mixed up.** For a livestream, check whether the time they gave is when the stream starts (`airs`) or when the item should appear on the page (`starts`). Without `starts`, a YouTube item shows as soon as the change is live, with a "Starts November 15 · 18:00 UTC" note.
- **It might be under embargo.** If it sounds like an unannounced release, feature, or news, confirm it's public before you schedule it. If it isn't public yet, explain that it has to be merged at launch time (see step 4).
- **It's already there.** If the file already has an item with the same URL or title, ask whether to update that item or add another.
- **They want to remove something that isn't there,** or that comes from the blog, which can't be deleted from `bio.yml`. Explain what they're seeing and ask what they want.
- **Where it goes isn't clear,** and the table in step 3 fits more than one place.
- **The wording breaks the writing rules,** such as all caps or a title much longer than the other items. Suggest a version and ask them to confirm it.
- **The file has old items in it.** List what you found and ask whether to remove them (see [Clear out old items](#clear-out-old-items)).

How to ask:

- Ask all your questions in one message, not one at a time.
- Use plain language. Don't ask about YAML keys. Ask "When should it disappear from the page?", not "What's the `ends` value?"
- Suggest an answer where there's a sensible default, so they can just say yes. For example: "Show it from 3 days before the stream? (I'd use Thursday, November 12)".
- Before you edit, repeat back the times you'll use, in their time zone and in UTC. For example: "Shows from Thursday, November 12; airs Sunday, November 15 at 19:00 CET (18:00 UTC); comes down at the end of Monday, November 16."
- If they can't answer yet, such as when there's no stream link, stop. Tell them what you still need, and don't add a placeholder.

## 3. Choose where it goes

The page has three sections: **Latest**, **Featured** and **Get started**.

| They want… | Put it in |
| --- | --- |
| A livestream or YouTube video in the Latest list | `insert` on the Latest section, with `type: youtube` and `airs` |
| An announcement, event or other link in the Latest list | `insert` on the Latest section, with `starts` |
| A button that sits below the Latest list (a campaign, the store) | `items` of the **Featured** section |
| A permanent "how to get started" link | `items` of the **Get started** section |

In the Latest list, an item's `starts` is when it appears, where it sits among the other items (newest first), and the date shown on it, just as a blog post's publish date is. So an item with a future `starts` comes in at the top of the list when that time comes, and moves down as newer posts are published. The list shows 5 items (its `limit`).

There are no pins on this page. If something has to stay at the top of Latest whatever gets published after it, tell the requester that a newer blog post will push it down, and suggest a **Featured** link instead, or as well.

## 4. Schedule it

Everything added by hand uses `starts` (when it appears) and `ends` (when it goes). The page checks the time with the website's server (not the visitor's own clock), so a scheduled item appears and disappears on time without anyone merging anything at that moment.

Scheduled items are in the page's source before they show. Anyone who reads the source can see them early, so don't schedule anything under embargo, such as an unannounced release. Merge that at launch time instead, and say so to the requester.

- **`starts` in the Latest list is required,** except on a YouTube item, which takes its place from `airs`. A past date shows the item as soon as the change is live; a future one makes it wait. On links and YouTube items `starts` is optional: without it, they show as soon as the change is live.
- **No `ends`:** it stays until someone deletes it. A YouTube item is the exception: it comes down at the end of the day after `airs`, unless `ends` says otherwise.
- **A date alone in `ends`** keeps the item up through that whole day (UTC). For midnight, write the date alone, not `T00:00:00Z`.
- **Times are UTC** unless they carry an offset. Convert the requester's local time and write it as UTC with `Z`, or keep their local time with an offset (`2026-11-15T18:30:00+01:00`). Add a comment with the local time so a reviewer can check it:

  ```yaml
  starts: 2026-11-15T17:30:00Z  # 18:30 CET
  ```

- **Mind daylight saving time:** the offset depends on the date. For example, Central European Time is +01:00 in winter and +02:00 (CEST) from late March to late October. Check the offset for the actual day.

A livestream usually wants to show from a few days before it airs, so people see the "Starts November 15 · 18:00 UTC" note:

```yaml
    insert:
      - type: youtube
        video: https://www.youtube.com/watch?v=VIDEO_ID
        title: "Title as it appears on YouTube"
        airs: 2026-11-15T18:00:00Z
        label: Livestream
        starts: 2026-11-12
```

A scheduled announcement in Latest, which comes in at the top on November 20:

```yaml
    insert:
      - title: "Community Day is this Saturday"
        url: https://www.openhomefoundation.org/community-day/
        label: Event
        starts: 2026-11-20T09:00:00Z
        ends: 2026-11-22
```

A time-limited campaign button:

```yaml
  - type: links
    title: Featured
    items:
      - label: Black Friday at the merch store
        url: https://store.openhomefoundation.org/
        starts: 2026-11-27T08:00:00Z
        ends: 2026-11-30
```

There are no other date keys. If you use `date`, `start`, `end`, or `expires`, the build stops and names the key to use instead.

## 5. Write it well

- Titles and labels use sentence-style capitalization, except for names and the exact title of a YouTube video or blog post.
- `label` is a short word shown before the date, such as `Livestream`, `Announcement`, or `Event`. `note` replaces the label and date with a short line of its own, such as "Find or host a meetup near you on Saturday, November 7".
- Images are optional. For a YouTube item, the video's thumbnail is used automatically. For anything else, in this order:
  - `image: auto` uses the link's social preview image: a blog post's own image, or the preview image of any other page. Try this first. It usually needs no new image.
  - A full `https://` URL of an image the linked site already hosts, such as the merch store's banner. The row cards and the large card get a resized copy from Netlify's image CDN, but only for this site's images and the hosts listed in `src/utils/images.mjs`. An image from any other host is sent at full size and shrunk by the browser, which is slower and can look jagged. In that case, save a copy in `public/assets/bio/` instead (next point). Don't add a new host to that list unless someone asks: it also needs a matching entry in `netlify.toml`.
  - A new image, if the requester sends one. Save it in `public/assets/bio/`, with a short lowercase name and the date, such as `public/assets/bio/2026-11-community-day.webp`. Then set `image: /assets/bio/2026-11-community-day.webp`. Save one image only, 1200 × 630 pixels, as WebP or JPEG, under about 200 KB. That size is for the large card at the top of Latest, which shows it at up to about 1100 pixels wide on high-resolution screens. Don't make a separate small version: the CDN makes the smaller copies from this one. Any other shape is cropped to fit. Keep important text and faces away from the edges, because the row cards crop tighter.
  - The CDN only runs on Netlify, so the dev server (`pnpm dev`) shows every image at full size. That's expected.
- The first item in Latest shows as a large card only if it has an image.
- Don't ask the requester for an image if `image: auto` gives a good one. If an item has no image and `auto` doesn't fit, ask whether they have one rather than making one up.
- Use site paths for links to this site (`/get-started/`) and full URLs (`https://…`) for everything else.

## 6. Check it

From the repository root:

```shell
pnpm test
pnpm build
```

The build checks `bio.yml` and fails with the item at fault if anything is wrong, such as a bad date, a missing title, or an `ends` before its `starts`. Fix what it names. If the fix needs information you don't have, ask the requester (see step 2) rather than guessing.

Then confirm the item is in `dist/bio/index.html`. A scheduled item that hasn't started yet is there with a `hidden` attribute and its `data-starts` and `data-ends` times. That's expected: the page reveals it when the time comes.

If `pnpm build` fails with an error that has nothing to do with `bio.yml` (for example, about `@astrojs/internal-helpers`), run `pnpm dev` instead and check `http://localhost:4321/bio/`. The dev server applies the same checks, and shows the error on the page.

## 7. Hand it over

Tell the requester, in plain language:

- What was added and where it will appear.
- When it appears and disappears, in their time zone as well as UTC.
- That it needs to be merged before `starts` (or, without a `starts`, that it goes live when merged).
- What you removed, and anything you left in because they wanted to keep it.

Don't commit, push, or open a pull request unless asked.

## Clear out old items

Items added by hand stay in `bio.yml` after they stop showing. They do no harm, but they make the file harder to read and easier to get wrong. Each time you edit the file, check for old items and offer to remove them.

### Find them

Check today's date and time in UTC first. Then look for:

- **Ended items:** anything whose `ends` has passed. These never show again.
- **Finished videos:** a YouTube item with no `ends` has come down by the end of the day after its `airs`.
- **Items pushed out of Latest for good:** an item in the Latest list whose `starts` has passed but that isn't in the built page (`dist/bio/index.html`). At least five newer items are ahead of it, and newer posts keep coming, so it won't come back. The only exception is when something above it is scheduled to end.
- **Featured links that look time-limited but have no `ends`:** such as a sale, an event, a survey, or a livestream. Ask whether they're still current.

Leave these alone: the **Get started** links, `tagline`, `description`, `socials`, and the commented-out examples in the file. Only change them if someone asks.

### Ask before you remove anything

Never delete an item without the requester's OK, even one that has clearly ended. Someone might want to reuse it, or it might be the record of what ran.

- List each item in plain language, with why you think it's old. For example: "'Community Day 2026' (an event that ended on November 7) is no longer showing."
- Group them into "these have ended and no longer show" and "these are still showing, but might be out of date". Suggest removing the first group and ask about the second.
- If there's nothing old, don't mention it.

### Remove them

- Delete the whole block for each item they agreed to remove, including any comment lines that belong only to it.
- If the item used an image in `public/assets/bio/`, delete that too, unless something else on the site uses it (search the repo for its file name first).
- To take something down now, delete its block. To take it down later instead, give it an `ends`.
- Run the checks in step 6 again. The build should pass, and nothing that should still be showing should be missing from `dist/bio/index.html`.
