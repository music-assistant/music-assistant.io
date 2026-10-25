---
title: Local Metadata Provider
description: Use your own artist biographies, genres and artwork from a Kodi style artist information folder
---

# Local Metadata Provider

The Local Metadata provider reads artist information you keep yourself, in the same folder layout Kodi uses for its [artist information folder](https://kodi.wiki/view/Artist_information_folder). It allows you to give your artists their own biography, genres, style, mood, type, dates and artwork. It works for every artist in your library, including artists that only come from a streaming service.

If you already use Kodi, you can point Music Assistant at the artist information folder Kodi created. You can also build the folder yourself.

## When to use it

If your music is in [Local files](/music-providers/local-files/), the artist folders in your music already hold the `artist.nfo` and artwork of your album artists, and Music Assistant reads them from there. This provider is for the artists that have no folder of their own in your music, such as:

- Artists who only appear as a featured or supporting artist on a track
- Artists who only appear on compilations
- Artists from streaming services

## Setting it up

1. Put the artist information folder somewhere Music Assistant can reach. It must be in one of the [storage locations](/settings/storage/), for example the Home Assistant media folder or a network share added on the Storage page.
2. In the settings, add the **Local metadata** metadata provider.
3. Browse to the artist information folder and select it.

The provider only reads from the folder. It never changes or adds files.

## How the folder is organised

The artist information folder holds one subfolder per artist. Each subfolder holds an [`artist.nfo` file](https://kodi.wiki/view/NFO_files/Artists), artwork, or both.

```
Artist information/
├── Radiohead/
│   ├── artist.nfo
│   ├── folder.jpg
│   └── fanart.jpg
└── John Williams_53b1/
    ├── artist.nfo
    └── folder.jpg
```

### Naming the artist folders

- Name each folder exactly like the artist in Music Assistant. Capital letters do not matter
- Characters that cannot be used in a file or folder name, such as `/` `:` `?` `*`, are written as `_`. For example, AC/DC goes in a folder called `AC_DC`
- When two different artists share the same name, give each folder the artist name followed by `_` and the first four characters of the artist's MusicBrainz ID, for example `John Williams_53b1`. Kodi names its folders the same way. A folder named like this is used before a folder with just the artist name

### Making sure the right artist is used

When both the `artist.nfo` and the artist in Music Assistant have a MusicBrainz artist ID, the two must match. A folder whose ID belongs to a different artist is skipped. This is the most reliable way to keep two artists with the same name apart, so add the MusicBrainz ID to the `artist.nfo` whenever you can. Kodi does this for you when it gets the artist information.

## The artist.nfo file

The `artist.nfo` file uses the format Kodi describes on its [artist NFO page](https://kodi.wiki/view/NFO_files/Artists). Music Assistant uses these fields. All of them are optional.

- <b>biography.</b> The artist's biography. It is shown instead of a biography found online
- <b>genre.</b> One or more genres. Use a separate line for each genre
- <b>style</b> and <b>mood.</b> One or more styles or moods
- <b>type.</b> One of `Person`, `Group`, `Orchestra`, `Choir`, `Character` or `Other`
- <b>born</b> or <b>formed</b>, and <b>died</b> or <b>disbanded.</b> Dates such as `1970-12-15`, `1970-12`, `1970`, `15/12/1970`, `1970/12/15`, `15 Dec 1970` or `December 15, 1970`. In a date with slashes or dashes the month is always the middle number, so `05/06/1970` is 5 June 1970
- <b>musicBrainzArtistID.</b> The artist's MusicBrainz ID, see [Making sure the right artist is used](#making-sure-the-right-artist-is-used)

The biography, style, mood, type and dates from your `artist.nfo` take the place of the same information found online. Information your file leaves out is still filled in from online sources.

## Artwork

Put the artwork in the artist's folder as `.jpg`, `.jpeg`, `.png` or `.gif` files with these names:

- <b>folder</b>, <b>thumb</b>, <b>cover</b> or <b>artist.</b> The artist picture
- <b>fanart.</b> A large background picture
- <b>clearlogo</b> or <b>logo.</b> The artist's logo
- <b>banner</b>, <b>clearart</b>, <b>landscape</b>, <b>cutout</b>, <b>back</b> and <b>discart.</b> The other artwork types Kodi uses

Your artwork is added to the artist's pictures next to the ones from your other sources, so you can still choose which picture to use. When you replace or remove a file, Music Assistant picks up the change the next time it updates the artist.

## Getting changes into Music Assistant

Music Assistant reads the folder whenever it updates an artist's information. Artists already in your library pick up the folder, or a change to it, at their next scheduled update, which can take weeks. To see a change straight away, open the artist and select `Update metadata` from the menu.

The provider also works when the online metadata lookups are switched off in the metadata settings.

## Good to know

- Only artists are supported. Album folders inside the artist information folder are ignored
- When the artist information folder cannot be reached, for example because the NAS is switched off, the information already in Music Assistant is kept and tried again later
- Style, mood, type and dates are stored with the artist, but the artist page does not show them yet
- If multiple tags are found when only one is allowed then the first will be taken and a warning logged that the others were skipped
