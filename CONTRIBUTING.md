# Contributing to the Music Assistant documentation

Thanks for helping out. This page covers what a documentation pull request needs so it can be
merged without a round of back and forth.

## Which branch

| Branch | What it is |
|:--|:--|
| `main` | The live site at [music-assistant.io](https://music-assistant.io) |
| `beta` | The next release, at [beta.music-assistant.io](https://beta.music-assistant.io). Maintainers merge it into `main` at release time |

**Fixing something that is wrong on the live site? Use `main`.** A typo, a broken link, a
correction, or an instruction that no longer matches what people see should reach readers now
rather than waiting for the next release.

**Adding anything new? Use `beta`.** New pages, new music sources, new player providers, and
anything describing a feature that has not been released yet. Putting those on `main` would
document something readers cannot use.

If you are not sure, open it against `beta` and say so. Moving a pull request to the other branch
afterwards is one click for a maintainer.

## Checking your change

You do not need to install anything or build the site yourself. Open the pull request and the
site is built for you.

Scroll to the checks at the bottom of your pull request and look for **Deploy Preview**.

- **Green.** Click through to the preview link and you will see the whole site, with your change
  in it, exactly as it will look once merged. Check your page there.
- **Red.** The build found a problem. Click `Details` to open the log and scroll to the bottom.
  The error names the file and says what to fix, and where a missing entry is the cause it
  includes the exact block to paste. Push a fix to the same branch and it builds again on its
  own.

A red check is normal and nothing to worry about. It is there to catch the easy mistakes before
a reviewer has to.

<details>
<summary>Building it yourself, if you already have Node</summary>

Optional, and only worth it if you are making a lot of changes and want a faster loop than
waiting on the preview.

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # the same build the pull request runs
```

Node 22 or newer. The lockfile is pnpm's, so use pnpm rather than npm.

</details>

## Adding a music source

Four things, and the build will tell you if you miss the last one.

> [!NOTE]
> The `Features` table on a source page is not only documentation. The comparison table on
> [I Want To Listen To](https://music-assistant.io/faq/listen-to/) is built from those tables
> while the site builds, so a source appears in the comparison as soon as its page has one. That
> means the table has to be complete and has to use the standard row labels: the build fails,
> naming the source and the row, if a row is missing or if a Yes/No row answers something other
> than Yes or No. Wording after the answer, like `Yes (with limitations)`, becomes a footnote
> under the comparison rather than being lost.
>
> Two things there cannot be read from a page, and live in `src/data/music-summary.ts`. To keep a
> source out of the comparison, put its slug in `EXCLUDED`; it still gets a tile. And if
> `Maximum Stream Quality` does not say whether it is Hi-Res, CD or lossy, the build asks you to
> settle it in `QUALITY_TIER_OVERRIDES` rather than guessing.

1. **The page**, at `src/content/docs/music-providers/<slug>.md`. Copy an existing page and work
   from that. Structure is covered under [House style](#house-style) below.

   There is no sidebar entry to add. The `Music Sources` menu is generated from this folder, so
   the file lands in the menu on its own. Two things follow from that: **name the file after the
   source**, because the menu is sorted by filename, and **set `title` to the name people know it
   by**, because that is the label they will see. Abbreviate the filename and the two drift apart:
   `ha.md` sorted before `heos.md` while showing as Home Assistant, which belongs after HEOS. If
   the page needs a different title from its menu label, add `sidebar: { label: ... }` to the
   frontmatter.
2. **The icon**, in `public/assets/icons/`. See [Icons](#icons).
3. **The tile entry**, in `src/data/music-sources.ts`, alphabetical by `name`:

   ```ts
   {
     name: "Example",
     slug: "music-providers/example",
     icon: "/assets/icons/example-icon.svg",
     categories: ["streaming", "podcasts"],
   },
   ```

   This puts your source on the [I Want To Listen To](https://music-assistant.io/faq/listen-to/)
   page. **The build fails without it**, and the Deploy Preview check will go red with a
   ready-made entry for you to paste.

4. **Pick the categories.** Your `Media Types Supported` row tells you whether the source offers
   music, radio, podcasts or audiobooks. Translate that into categories:

   - **Music**, which is what the table means by Artists, Albums, Tracks or Playlists, is either
     `streaming` for a service with a catalogue to search, or `own-files` for a collection you
     already own on a disk, a NAS or your own media server.
   - **Radio** is `radio`, but only for real broadcast stations. Several streaming services list
     Radio when they mean algorithmic artist stations, and those do not count.
   - **Podcasts** is `podcasts`.
   - **Audiobooks** is `audiobooks`.

   Three more are a judgement call rather than something the table can tell you: `live-concerts`
   for recordings of live shows, `classical` for orchestral, chamber and operatic music, and
   `children` for audio aimed at younger listeners.

   Last are the country categories, covered just below.

   The full list of valid categories is at the top of `src/data/music-sources.ts`, and the build
   lists them if you use one that does not exist.

### Country categories

**Tag a country only when the source's content is predominantly or only from that country.** Not
where the company is registered, and not where it sells. Deezer and Qobuz are French companies
with international catalogues, so neither is tagged France. Sveriges Radio broadcasts in Swedish,
so it is tagged Sweden.

This is why the large international services carry no country tag at all. A source can be tagged
with more than one country where that genuinely holds.

**If the language you need is not on the list, add it.** Three small pieces, in
`src/data/music-sources.ts` unless stated:

1. Add the id to the `CategoryId` list at the top of the file.
2. Add an entry to the `country` group, copying the shape of the ones already there. The title
   is the native name and the English name together, like `Sverige / Sweden`, or a single name
   where the two are the same.
3. Add a flag at `public/assets/icons/listen/<id>.svg`, named after the id. Flags themselves are
   not copyrightable, so you can take one from
   [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:SVG_flags_by_country), where
   every national flag is available as an SVG, or from the MIT licensed
   [flag-icons](https://flagicons.lipis.dev/) set. Prefer a plain one over a highly detailed
   version: the existing flags are a few hundred bytes each and are only shown about 34 pixels
   tall. Keep it a similar shape to the ones already there, which are all wider than they are
   tall and mostly close to 3:2. Check it looks right against its neighbours on the built
   page rather than measuring it; the page draws the border for you.

Then tag your source with it. The build fails if the flag file is missing, and also if a category
exists that no source uses, so all three have to land together.

Do not worry about getting the flag or the wording exactly right. It will be looked at in review,
and a rough one is much better than leaving your source out of a language its listeners search
for. If you cannot find a flag at all, add the category without one, say so on the pull request
and somebody will sort it out.

### What to put in the free-text rows

Most rows in the `Features` table are Yes or No. Three carry free text and are shown in the
comparison exactly as you write them, so keep them in the same form as the other pages.

**Maximum Stream Quality.** Give the codec and the ceiling: `FLAC 192kHz 24 bit`, `MP3 320kbps`,
`AAC 256kbps`. The build reads this to decide whether the source is shown as Hi-Res, CD or Lossy.
A bare codec name like `MP3` is accepted, but it does not say what the maximum is, which is the
whole point of the column, so give the bitrate. Where the quality genuinely varies, use
`Lossy variable bitrate` or `Varies by station`.

**Login Method.** One of `None`, `Password`, `OAuth`, `Cookie` or `Token`. Where more than one
works, join them with `or` and put the easiest first, as in `None or Password`. Add a bracketed
qualifier only where it changes what the user has to do, as in `Cookie (ARL)`. Do not describe the
credential itself: signing in with an email address and a password is still `Password`.

**Media Types Supported.** A comma separated list drawn from Artists, Albums, Tracks, Playlists,
Radio, Podcasts and Audiobooks. Step 4 above explains how these map onto the tile categories.

## Adding a player provider

Four things, and the build will tell you if you miss either of the last two.

1. **The page**, at `src/content/docs/player-support/<slug>.md`. Copy an existing provider page
   and work from that. Structure is covered under [House style](#house-style) below.

   There is no sidebar entry to add. The `Player Providers` menu is generated from this folder,
   so the file lands in the menu on its own. Two things follow from that: **name the file after
   the provider**, because the menu is sorted by filename, and **set `title` to the name people
   know it by**, because that is the label they will see.
2. **The icon**, in `public/assets/icons/`. See [Icons](#icons).
3. **The tile entry**, in `src/data/players.ts`, alphabetical by `name`:

   ```ts
   {
     name: "Example",
     slug: "player-support/example",
     icon: "/assets/icons/example-icon.svg",
     categories: ["commercial"],
   },
   ```

   Categories are `commercial` for devices sold ready to use, and `diy` for software you set up
   yourself. A provider can be both. This puts it on the
   [I Want To Stream To](https://music-assistant.io/faq/stream-to/) page. **The build fails
   without it.**
4. **The row in the comparison table**, in `src/data/player-capabilities.ts`. That is the table
   further down the same page, comparing every provider side by side:

   ```ts
   {
     slug: "player-support/example",
     sampleRate: "48kHz/16 bits",
     values: {
       hiRes: false,
       lossless: true,
       perfectSync: false,
       syncCorrection: false,
       crossfade: false,
       stereoPair: false,
       deviceButton: false,
       deviceVoice: false,
       playerOptions: false,
     },
   },
   ```

   Use the same slug as the tile entry: the name and the logo are taken from `players.ts` rather
   than typed again. Every column needs a `true` or a `false`, because the table has no blank
   cells. What each column means is written out under **What the columns mean** on
   [the page itself](https://music-assistant.io/faq/stream-to/#comparing-players-side-by-side);
   that wording is the definition, so check your answers against it rather than going by the
   column name alone. **The build fails without a row**, and names your provider along with a
   block to paste.

   Where a provider supports two rates, as Sonos does across its two generations, give
   `sampleRate` a list of strings and each one gets its own line.

### When an answer needs a footnote

Some answers are yes only in a particular case — Sonos is hi-res on Series 2 devices, Google Cast
syncs when the group was made in the Google Home app. Put the wording in `CAPABILITY_NOTES` in the
same file, then point at it from the row by its position in that list:

```ts
notes: {
  hiRes: [5],
},
```

Add the note and the reference together: a note nothing refers to fails the build, and so does a
reference to a note that is not there. Adding to the end of the list is safe, but **deleting a
note renumbers every note after it**, and the rows point at numbers, so check the rows if you
remove one.

### Leaving a provider out of the table

If a provider needs to be left out, put its slug in `KNOWN_UNCHARTED` in the same file instead of
writing a row:

```ts
export const KNOWN_UNCHARTED: string[] = [
  "player-support/example",
];
```

The build then stops asking for a row and the provider is left out of the comparison.

A provider that relies on another one for the audio does not need this. Give it that provider's
row instead, as Bose SoundTouch has DLNA's.

### Adding a column

Rare, but if a new capability applies across providers rather than to one: add it to
`CAPABILITY_COLUMNS` with an id, a short label, a one-sentence `help` for the legend, and a `href`
if a page already explains the term. Then add it to every row — the build lists the ones you
missed. Keep the label short. The table only clears the content column because the headings are
small enough not to set the column widths themselves, and a long label brings back the sideways
scrolling.

The capability columns have a minimum width, so a short label will not leave a starved-looking
column next to its neighbours. There is no matching maximum: a label with a word longer than about
nine letters sets its own column wider than the rest and the row stops looking even.

A heading that is one long word is the worst case, because it cannot wrap and so sets its column's
width on its own. Put a `­` soft hyphen at a sensible break point in any word longer than
about eight letters, as `Cross­fade` and `Sync Cor­rection` do. It is invisible while
the column has room for the whole word, and becomes a hyphen and a line break when it does not.

## Adding a plugin, metadata provider or audio analysis provider

These do not follow a fixed structure, so there is no template to match and nothing to register
beyond the page itself:

1. **The page**, under `src/content/docs/plugins/`, `src/content/docs/metadata-providers/` or
   `src/content/docs/audio-analysis/`.
2. **The sidebar entry**, in the matching group in `astro.config.mjs`.

There are no tiles for these, so nothing fails the build if you forget something. Copy whichever
existing page is closest in kind to yours and follow its shape. Most open with a heading and
icon, an attribution line, a short `## Features` list and a `## Configuration` section, but the
detail varies from page to page and that is fine. The [House style](#house-style) and
[Icons](#icons) notes below still apply.

## House style

The opening and the writing style below apply to every page. The fixed `Features` table is
specific to music sources and player providers; plugins and the other providers use a short
bullet list instead.

Open the page like this, and look at an existing source page for the full shape:

```markdown
# Example <img src="/assets/icons/example-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [Example](https://example.com). Contributed and maintained by [you](https://github.com/you)

Example is a subscription streaming service from Sweden, with a catalogue of around a million
tracks. A monthly fee covers unlimited listening.

Connecting your account puts your Example library inside Music Assistant, with the catalogue
there to search.
```

- **One short paragraph on what the service is**, for a reader who has never heard of it, then
  **one on what the Music Assistant source gets you**. Keep both to a few sentences.
- Do not restate the Features table in prose. The table already says what is supported.
- Plain English. Write as you would explain it to someone in person.
- **Write for the person using Music Assistant, not the person building it.** Keep the page to
  what a reader needs to know or can act on. How it works inside — the API calls it makes, how it
  caches, what the sync does behind the scenes — belongs in the code, not on the page.
- On a music source or player provider page, keep every standard `Features` table row even
  where the answer is `No`, so the pages line up with each other.
- Use `## Configuration`, `## Known Issues / Notes` and the other standard headings at the same
  level as the existing pages.
- External links use `<a href="..." target="_blank" rel="noopener noreferrer">`. Internal links
  use ordinary markdown with a trailing slash, like `[the queue](/usage/#the-queue)`.

## Icons

Put the file in `public/assets/icons/` and reference it as `/assets/icons/<name>`. SVG or PNG are
both fine.

**Check it is visible against a white background.** The site is light only, and a white logo on
transparency will be invisible both on your page heading and on its tile. If the only logo you
have is white, put it on a dark rounded plate, as several existing icons do.

Keep PNGs small. They are served as they are, with no resizing, and they are displayed at about
48 pixels on the tile pages.

Screenshots and any other pictures go in `public/assets/screenshots/` and are referenced as
`/assets/screenshots/<name>`, not in `src/assets`.

## Editing an `.mdx` page

Most pages are `.md`. A few are `.mdx` because they use components. MDX is stricter than
markdown, and two things catch people out:

- `<` starts a tag, so a bare `<100` breaks the build. Write `&lt;100`.
- Every tag must be closed, so `<br>` must be `<br />`.

## Anything else

Ask on [Discord](https://discord.gg/kaVm8hGpne). A pull request that is not quite right is much
more welcome than no pull request.
