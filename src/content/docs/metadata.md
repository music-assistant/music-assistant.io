---
title: Metadata
description: A Description of the Metadata sources available to Music Assistant
---

# Metadata <img src="/assets/icons/metadata-general-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant draws on two layers of metadata. **Source metadata** comes from wherever a track actually lives — embedded file tags, `.lrc` and [`.nfo` files](https://kodi.wiki/view/NFO_files), and music providers such as Plex, Jellyfin, Subsonic, Spotify or Tidal. **Online metadata providers** (Fanart.tv, The Audio DB, MusicBrainz, Cover Art Archive, iTunes Artwork, LRCLIB, Genius) are dedicated third-party services queried only to fill in fields the source did not supply.

Source metadata is always preferred; online metadata is complementary. Original files are never modified.

This section describes which providers contribute which fields and when lookups occur.

- [Media items](./media-items) — what is gathered for artists, albums, tracks, playlists, audiobooks and podcasts.
- [Artwork](./artwork) — sources and ordering for thumbnails, fanart, disc art and radio stream artwork.
- [Lyrics](./lyrics) — what lyrics are available.

For loudness measurement, see the [Loudness Analysis](../audio-analysis/loudness-analysis) provider page.

## How metadata gets fetched

Library items are enriched on a **90-day refresh cycle**. Refreshes are triggered by:

- **A daily background scan**, which picks up items with missing or stale metadata and refreshes them in small batches to avoid hammering free APIs.
- **On-demand lookup**, scheduled in the background when an item is opened in the UI and its metadata is older than 90 days.
- **Manual refresh** via the "Update metadata" action, which bypasses the 90-day cooldown and forces a fresh lookup immediately.

For each item, source metadata is collected first (sorted so local providers — file system, Plex, Jellyfin, Subsonic, etc. — outrank streaming providers), then the online metadata providers are queried when "Enable metadata retrieval from online metadata providers" is on (default).

The language used for descriptions and bios is set under Settings → Metadata → "Preferred language". English is always used as fallback.

## What Music Assistant reads from local file libraries

For library items backed by a local music collection, the following are read automatically during the library scan:

- **Embedded tags** in audio files — title, artists, album, genres, year, MusicBrainz IDs, ISRC, embedded cover art, embedded lyrics, ReplayGain values, etc. The `genre` tag is applied to the track only; album and artist genres are sourced separately (see below).
- **`.lrc` sidecar files** with the same name as the audio file — used as synchronized lyrics. This is the format produced by tools such as LRCGET.
- **`artist.nfo`** in an artist folder ([Kodi NFO format](https://kodi.wiki/view/NFO_files)) — title, sort name, biography, genres, MusicBrainz artist ID.
- **`album.nfo`** in an album folder — title, sort name, review, year, genres, MusicBrainz release group / album / album-artist IDs.
- **Folder images** (`cover.jpg`, `folder.jpg`, `artist.jpg`, etc.) — used as thumbnails for albums and artists.

These are part of the source metadata layer and always take priority over online lookups. They are also the most reliable way to fix problems with online matching: adding a MusicBrainz ID to a tag or `.nfo` file immediately unlocks the rest of the online providers for that item.

### Album and artist genres

The file genre tag is applied to the track, but not to the album or the artist. By default an album's genre comes from an `album.nfo`, a music provider that supplies one, or an online metadata provider; an artist's genre comes from an `artist.nfo`, a music provider, or an online metadata provider once a MusicBrainz Artist ID has been resolved.

The local filesystem providers offer an opt-in `Propagate track genres to albums and artists` setting that fills the gap by deriving the album's and artist's genres from their tracks' genre tags. Propagation only fills genres that are still empty — it never overwrites a genre that came from an `NFO` file, a music provider, or an online metadata provider.

## What Music Assistant writes to local files

By design the music collection is treated as **read-only**:

- MusicBrainz IDs are never written back to file tags or `.nfo` files. When an item's tags do not contain an MBID, one is derived in Music Assistant's own database for online lookups; the source file is left alone.
- Bios, descriptions, genres, artwork and lyrics are never written back to files.
- `.nfo` files are never created or modified.

The single exception is the [Loudness Analysis](../audio-analysis/loudness-analysis) plugin's optional "Write REPLAYGAIN_TRACK_GAIN tags back to files" setting (default **off**). When enabled, a `REPLAYGAIN_TRACK_GAIN` tag is written into each track after its loudness is measured, so other apps on the network can use it for volume normalization. Read-only files are silently skipped.

## Provider summary

| Provider | Used for | Requires |
| --- | --- | --- |
| **MusicBrainz** | Looking up MBIDs from artist / album / track names. Cannot be disabled — it is used for identification only and never replaces information that already exists. | — |
| **Fanart.tv** | High-quality artist and album imagery (thumb, logo, banner, fanart, CD art). | Artist or release-group MBID |
| **The Audio DB** | Bios, descriptions, genres / style / mood, label, links, images. | Artist MBID for artist metadata; release-group / recording MBID preferred for albums and tracks (with artist + name fallback). |
| **Cover Art Archive** | Album front covers from MusicBrainz's official archive. | Release-group MBID |
| **iTunes Artwork** | High-resolution album artwork. | Album barcode (UPC / EAN) |
| **LRCLIB** | Synchronized and plain lyrics (default lyrics provider). | Track name, artist, album, duration |
| **Genius Lyrics** | Unsynchronized lyrics fallback (optional). | Track name + artist |

Individual metadata sources can be turned off in Settings>> Providers, or all at once via the [settings](/settings/core/#metadata) "Enable metadata retrieval from online metadata providers".
