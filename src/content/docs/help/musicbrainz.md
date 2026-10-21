---
title: Improve MusicBrainz Data
description: How to add and fix the MusicBrainz data Music Assistant relies on
---

# Improve MusicBrainz Data

[MusicBrainz](https://musicbrainz.org) is a free music encyclopedia that anyone can edit. Music Assistant uses it to recognise your music. When something is missing or wrong on MusicBrainz,
you can fix it yourself. Every fix helps all Music Assistant users, and everyone else who uses MusicBrainz.

You need a free [MusicBrainz account](https://musicbrainz.org/register) to make edits.

## Why MusicBrainz matters

Music Assistant uses MusicBrainz to:

- **identify** your artists, albums and tracks, so the same item from two sources becomes one item in your library
- **link** items to your other music services, using the streaming links stored on MusicBrainz
- **fill in details** such as life dates, countries and the year a recording was made
- **organise classical music** by composer and work. See [Classical Music](/classical/)

Music Assistant finds items on MusicBrainz in this order: the MusicBrainz IDs in your file tags, the streaming links on MusicBrainz, barcodes and ISRC codes, and finally a search by name. The
first three are reliable. A name search is not, so adding links and codes on MusicBrainz makes the biggest difference.

## What the log hints mean

When Music Assistant cannot find something on MusicBrainz, it often writes a hint in the log with a link to fix it. Each hint is written only once. Some are only shown with debug logging turned on.

| Hint in the log | Log level | What to do |
|:--|:--|:--|
| `Album "..." (barcode ...) is not on MusicBrainz, add it for example with Harmony: ...` | Info | [Add the album with Harmony](#add-a-missing-album-with-harmony). The link opens Harmony with the barcode filled in |
| `Album "..." is not on MusicBrainz, add it for example with Harmony: ...` | Info | The same, with the streaming link filled in |
| `Composer "..." is not on MusicBrainz through <link>, add <link> to their MusicBrainz page: ...` | Info | [Add the streaming link](#add-streaming-links) to the composer's MusicBrainz page. The link goes to the composer, or to a search when there is more than one candidate |
| `Artist "..." has no link to <service> on MusicBrainz, so it is not added ...; add one at ...` | Info | MusicBrainz names an artist, such as a performer on a recording, that has no link to your service. [Add the link](#add-streaming-links), then use **Update metadata** on the album |
| `Artist "..." is not on MusicBrainz through <link>, so it cannot be told apart from the other "..." on <service>; add <link> to their MusicBrainz page: ...` | Info | Your service has two different artists with the same name, and Music Assistant can only keep them apart when MusicBrainz knows both pages. [Add the streaming link](#add-streaming-links) to the correct artist's MusicBrainz page. The link goes to that artist when it is known, or to a search |
| `Titles "..." and "..." share <catalogue number> but name different keys, so they are kept as separate works; check which is right and link its recording to the correct work on MusicBrainz: ...` | Info | One of the two titles is probably wrong. Check the albums and [link the recording to the right work](#link-a-recording-to-its-work) |
| `ISRC ... of "..." is not on MusicBrainz, add it to the track's recording: ...` | Debug | [Add the ISRC codes with MagicISRC](#add-isrc-codes-with-magicisrc) |
| `ISRC ... of "..." is on MusicBrainz recording ..., which credits other artists, so it needs album "..." identified, add its streaming link or barcode to the release of that recording` | Debug | The code is used for more than one recording. [Add the streaming link](#add-streaming-links) or barcode to the album's MusicBrainz release |

## Add a missing album with Harmony

[Harmony](https://harmony.pulsewidth.org.uk) reads an album from Spotify, Tidal, Qobuz, Deezer, Apple Music and other services, and fills in the MusicBrainz "Add release" form for you. It also
adds the album's streaming links, barcode and ISRC codes.

1. Open the Harmony link from the log, or go to Harmony and paste the album's streaming link or barcode
2. Check what Harmony found. It compares the services and warns when they disagree
3. Select **Import into MusicBrainz**
4. MusicBrainz opens with the album filled in. Check the artists are linked to the right MusicBrainz artists, then enter a short note on where the data came from and submit
5. Back in Harmony, follow its suggestions to add any missing links and ISRC codes

## Add streaming links

Music Assistant links artists and albums to your services through the links on their MusicBrainz page.

1. Find the artist or release on [MusicBrainz](https://musicbrainz.org)
2. Select **Edit**
3. Under **External links**, paste the artist's or album's Spotify, Tidal, Qobuz, Deezer, Apple Music or YouTube Music link and select the type if necessary
4. Submit the edit

> [!TIP]
> Harmony can also add the links for a release that already exists on MusicBrainz. Paste the release's streaming link in Harmony and follow its suggestions.

Single tracks can have a link too. Open the recording on MusicBrainz, select **Edit**, and add the track's link under **External links** (for example `https://open.spotify.com/track/...`). Music
Assistant checks a track's links before its ISRC code, so this identifies the track even when its title differs from MusicBrainz. It is most useful for Spotify, which does not share ISRC codes with
Music Assistant. It takes one edit per track, so ISRC codes are usually the quicker way for a whole album.

## Add ISRC codes with MagicISRC

An ISRC is a code that identifies a recording. Music Assistant uses it to match streaming tracks to MusicBrainz. [MagicISRC](https://magicisrc.kepstin.ca) adds the codes for a whole release in one go.

1. Find your release: Open MagicISRC and paste your MusicBrainz release link or ID
2. Log in: Connect your MusicBrainz account when prompted
3. Extract the ISRCs:
    - For Spotify or Deezer URLs: Paste the album link into a web tool like [Chartmetric ISRC Finder](https://chartmetric.com/isrc-finder-lookup) or [Soundcharts ISRC Finder](https://soundcharts.com/en/isrc-finder) to instantly grab the 12-digit codes.
    - For Tidal, Qobuz, or Apple Music: Use the search bar on Chartmetric ISRC Finder and enter the Artist Name + Track/Album Title to fetch the codes from their global database.
    - Copy the generated list of codes.
4. Paste into MagicISRC: Paste the text block of codes into the input box on MagicISRC
5. Verify: Double-check that the codes align with the correct tracks in the tracklist
6. Submit: Click submit to apply the codes to MusicBrainz

> [!TIP]
> If you manage metadata frequently, install a browser extension like Tampermonkey and download the MusicBrainz Enhanced Tracklist (MET) userscript. This adds a native "Send to MagicISRC" button directly inside the web players for Spotify, Deezer, Apple Music, and Tidal.

## Link a recording to its work

For classical music a recording needs a link to the work it performs. This gives Music Assistant the composer, the work and its movements.

1. Open the release on MusicBrainz and select **Edit relationships**
2. Select the tracks, then **Batch-add new works** to link them to existing works or create new ones
3. For a movement, link the recording to the movement's work. The movement work should itself be a part of the main work
4. Submit the edit

## Tag your local files with Picard

[MusicBrainz Picard](https://picard.musicbrainz.org) writes the MusicBrainz IDs into your files, which is the most reliable way for Music Assistant to recognise them.

1. Install Picard and add your music folder
2. **Cluster** the files, then **Lookup** or **Scan** to match them to MusicBrainz releases
3. Check each match, then **Save**

For classical music, turn on these options before you save:

- **Options > Metadata > Use track relationships** and **Use release relationships**. These add   composers, conductors, performers and works
- The option that writes the movement tags (Movement Name, Movement Number and Movement Count)
  <!-- TODO exact option name in current Picard -->

If Picard cannot find your album, add it to MusicBrainz first with Harmony.

## When will Music Assistant see my edit?

Not right away.

- Music Assistant reads MusicBrainz through its own copy of the database. This copy follows
  musicbrainz.org with a delay <!-- TODO how long -->
- Answers from MusicBrainz are kept for up to 30 days
- Some edits go to a vote, which can take up to 7 days before the edit is applied
- Items that were not found are looked up again later on their own. Use **Update metadata** on an
  album or artist to try again sooner

> [!NOTE]
> Please only add data you can check, such as the album cover, the streaming service or the booklet. Read the [MusicBrainz style guidelines](https://musicbrainz.org/doc/Style) before
> bigger edits, and the [classical style guide](https://musicbrainz.org/doc/Style/Classical) for classical releases.
