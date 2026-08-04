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

One thing to watch on `beta`: if your branch was taken before the last release it will be missing
files the build now expects, and you will get errors that have nothing to do with your change. If
that happens, say so on the pull request and a maintainer will bring your branch up to date.

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

Five things, and the build will tell you if you miss the last one.

1. **The page**, at `src/content/docs/music-providers/<slug>.md`. Copy an existing page and work
   from that. Structure is covered under [House style](#house-style) below.
2. **The icon**, in `public/assets/icons/`. See [Icons](#icons).
3. **The sidebar entry**, in the `Music Sources` group in `astro.config.mjs`, in alphabetical
   order. Nothing checks this, so it is the easiest one to forget. A page with no sidebar entry
   still builds but is unreachable from the menu.
4. **The tile entry**, in `src/data/music-sources.ts`, alphabetical by `name`:

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

5. **Pick the categories.** Your `Media Types Supported` row tells you whether the source offers
   music, radio, podcasts or audiobooks. Translate that into categories:

   - **Music**, which is what the table means by Artists, Albums, Tracks or Playlists, is either
     `streaming` for a service with a catalogue to search, or `own-files` for a collection you
     already own on a disk, a NAS or your own media server.
   - **Radio** is `radio`, but only for real broadcast stations. Several streaming services list
     Radio when they mean algorithmic artist stations, and those do not count.
   - **Podcasts** is `podcasts`.
   - **Audiobooks** is `audiobooks`.

   Two more are a judgement call rather than something the table can tell you: `live-concerts`
   for recordings of live shows, and `children` for audio aimed at younger listeners.

   Last are the country categories, covered just below. These are the ones people forget.

   The full list of valid categories is at the top of `src/data/music-sources.ts`, and the build
   lists them if you use one that does not exist.

### Country categories

**These are about the language people will hear, not where the company is registered.** Tag a
source with a country when most of what it carries is in that country's language. Deezer and
Qobuz are both French companies, but their catalogues are international, so neither is tagged
France. Sveriges Radio broadcasts in Swedish, so it is tagged Sweden.

One source can carry more than one language. Storytel is tagged both Sweden and Denmark, because
it is sold in Denmark as Mofibo with a full Danish catalogue.

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
   tall. Any aspect ratio is fine and the page draws the border for you.

Then tag your source with it. The build fails if the flag file is missing, and also if a category
exists that no source uses, so all three have to land together.

Do not worry about getting the flag or the wording exactly right. It will be looked at in review,
and a rough one is much better than leaving your source out of a language its listeners search
for. If you cannot find a flag at all, add the category without one, say so on the pull request
and somebody will sort it out.

## Adding a player provider

The same, with `src/content/docs/player-support/<slug>.md`, the `Player Providers` sidebar group,
and `src/data/players.ts`. Categories there are `commercial` for devices sold ready to use, and
`diy` for software you set up yourself.

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

## Editing an `.mdx` page

Most pages are `.md`. A few are `.mdx` because they use components. MDX is stricter than
markdown and two things bite:

- `<` starts a tag, so a bare `<100` breaks the build. Write `&lt;100`.
- Every tag must be closed, so `<br>` must be `<br />`.

## Anything else

Ask on [Discord](https://discord.gg/kaVm8hGpne). A pull request that is not quite right is much
more welcome than no pull request.
