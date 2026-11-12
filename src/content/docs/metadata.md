---
title: Metadata
description: A Description of the Metadata sources available to Music Assistant
---

# Metadata <img src="/assets/icons/metadata-general-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Metadata is everything Music Assistant shows around your music: artwork, artist biographies, genres, lyrics and more. If you are here because artwork or artist info is missing, the short version is: your own tags and files always win, free online services fill in the gaps slowly in the background, and adding a MusicBrainz ID to a tag or `.nfo` file fixes most matching problems.

Music Assistant draws on two layers of metadata. **Source metadata** comes from wherever a track actually lives - embedded file tags, `.lrc` and [`.nfo` files](https://kodi.wiki/view/NFO_files), and music providers such as Plex, Jellyfin, Subsonic, Spotify or Tidal. **Online metadata providers** are dedicated third-party services queried only to fill in fields the source did not supply; they are listed in the [provider summary](#provider-summary) below.

Source metadata is always preferred; online metadata is complementary.

This section describes which providers contribute which fields and when lookups occur.

- [Media items](./media-items): what is gathered for artists, albums, tracks, playlists, audiobooks and podcasts
- [Artwork](./artwork): sources and ordering for thumbnails, fanart, disc art and radio stream artwork
- [Lyrics](./lyrics): what lyrics are available

Loudness tags are read from the file when the track is first scanned. If you add or change them later, use **Refresh item** on the track to pick up the new values. See [Loudness Analysis](../audio-analysis/loudness-analysis) for how the values are used and which source wins.

## How metadata gets fetched

Library items are enriched on a **90-day refresh cycle**. Refreshes are triggered by:

- **A daily background scan**, which picks up items with missing or stale metadata and refreshes them in small batches to avoid hammering free APIs
- **On-demand lookup**, scheduled in the background when an item is opened in the UI and its metadata is older than 90 days
- **Manual refresh** via the "Update metadata" action, which bypasses the 90-day restriction and forces a fresh lookup immediately

For each item, source metadata is collected first (sorted so local providers such as the file system, Plex, Jellyfin and Subsonic outrank streaming providers), then the online metadata providers are queried when "Enable metadata retrieval from online metadata providers" is on (default).

### Filling gaps and replacing outdated information

The daily background scan and the on-demand lookup only fill in information that is missing. The one exception is the [Local Metadata](/metadata-providers/local-metadata/) folder, whose artist information always replaces what is stored.

"Update metadata" also replaces outdated information. **Refresh item** ends with the same update. Every field a source has information for is set to the latest value, so a corrected biography, label or release date reaches your library. When more than one source has a value, the first one in this order wins:

1. The [Local Metadata](/metadata-providers/local-metadata/) folder
2. Your music library sources: `.nfo` files and file tags, Plex, Jellyfin, Subsonic and other non-streaming providers
3. Streaming providers
4. Online metadata providers

A field that no source has information for keeps its stored value. When a source cannot be reached during the update, for example because the NAS holding your music is switched off, nothing is replaced and only missing information is filled in. Genres, images and links are only added to, never removed. Lyrics follow their own rules, see [Lyrics](./lyrics).

The language used for descriptions and bios is set under [**Settings → System → Metadata**](/settings/core/#metadata) → "Preferred language". A bio or description in your preferred language wins, then one in English. A bio or description from your own files counts as your preferred language.

## What Music Assistant reads from local file libraries

For library items backed by a local music collection, the following are read automatically during the library scan:

- **Embedded tags** in audio files - title, artists, album, genres, year, MusicBrainz IDs, ISRC, embedded cover art, embedded lyrics, loudness values (`R128_TRACK_GAIN`, `R128_ALBUM_GAIN`, `REPLAYGAIN_TRACK_GAIN`, `REPLAYGAIN_ALBUM_GAIN`), etc. The `genre` tag is applied to the track only; album and artist genres are sourced separately (see below).
- **`.lrc` sidecar files** with the same name as the audio file, used as synchronized lyrics. This is the format produced by tools such as LRCGET
- **`artist.nfo`** in an artist folder ([Kodi NFO format](https://kodi.wiki/view/NFO_files)) - title, sort name, biography, genres, MusicBrainz artist ID
- **`album.nfo`** in an album folder - album artist, title, sort name, review, year, genres, MusicBrainz release group / album / album-artist IDs
- **Folder images** (`cover.jpg`, `folder.jpg`, `artist.jpg`, [etc.](/music-providers/local-files/#artwork)) - used as thumbnails and other artwork for albums and artists

These are part of the source metadata layer and always take priority over online lookups. They are also the most reliable way to fix problems with online matching: adding a MusicBrainz ID to a tag or `.nfo` file immediately unlocks the rest of the online providers for that item.

### Album and artist genres

The file `genre` tag is applied to the track, but not to the album or the artist. By default an album's genre comes from an `album.nfo`, a music provider that supplies one, or an online metadata provider; an artist's genre comes from an `artist.nfo`, a music provider, or an online metadata provider once a MusicBrainz Artist ID has been resolved.

The local filesystem providers offer an opt-in `Propagate track genres to albums and artists` setting that fills the gap by deriving the album's and artist's genres from their tracks' `genre` tags. Propagation only fills genres that are still empty; it never overwrites a genre that came from an `NFO` file, a music provider, or an online metadata provider.

Apart from propagation, sources merge their genres into whatever is already there rather than replacing or being suppressed. An `artist.nfo` genre plus genres returned by The Audio DB will both end up on the artist. 

## What Music Assistant writes to local files

By design the music collection is treated as **read-only**:

- MusicBrainz IDs are normally not written back to file tags. When an item's tags do not contain a MBID, one is derived in Music Assistant's own database for online lookups or via the AcoustID Lookup provider if that is enabled
- Bios, descriptions, genres, artwork and lyrics are never written back to files
- `.nfo` files are never created or modified

When write access is available the exceptions to this are:
- The [Loudness Analysis](../audio-analysis/loudness-analysis) provider's optional "Write REPLAYGAIN_TRACK_GAIN tags back to files" setting (default **off**); see its page for details
- The [AcoustID Lookup](../audio-analysis/acoustid) provider's optional "Write AcoustID/MusicBrainz tags back to files" setting (default **off**); see its page for details

## Provider summary

| Provider | Used for | Requires |
| --- | --- | --- |
| **MusicBrainz** | Looking up MBIDs from artist / album / track names. Also supplies artist dates and type, album label and release date, genres and links. Cannot be disabled. | None |
| **Fanart.tv** | High-quality artist and album imagery (thumb, logo, banner, fanart, CD art). | Artist or release-group MBID |
| **The Audio DB** | Bios, descriptions, genres / style / mood, label, links, images. | Artist MBID for artist metadata; release-group / recording MBID preferred for albums and tracks (with artist + name fallback). |
| **Cover Art Archive** | Album front covers from MusicBrainz's official archive. | Release-group MBID |
| **iTunes Artwork** | High-resolution album artwork. | Album barcode (UPC / EAN) |
| **LRCLIB** | Synchronized and plain lyrics (default lyrics provider). | Track name, artist, album, duration |
| **Genius Lyrics** | Unsynchronized lyrics fallback (optional). | Track name + artist |
| **Wikipedia** | Multi-lingual artist biographies, in your preferred language where available. | Artist MBID (used to resolve the Wikipedia article via Wikidata) |

Individual metadata sources can be turned off in **Settings → Metadata providers**, or all at once via the [settings](/settings/core/#metadata) "Enable metadata retrieval from online metadata providers".
