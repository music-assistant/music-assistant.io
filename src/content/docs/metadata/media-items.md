---
title: Media items
---

# Media Item Metadata <img src="/assets/icons/metadata-mediaitem-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant draws on two layers of metadata. Source metadata comes from wherever the media item actually lives — embedded file tags, `.lrc` and `.nfo` files, and music providers such as Plex, Jellyfin, Subsonic, Spotify or Tidal. Online metadata providers (Fanart.tv, The Audio DB, MusicBrainz, Cover Art Archive, iTunes Artwork, LRCLIB, Genius) are dedicated third-party services queried only to fill in fields the source did not supply. Source metadata is always preferred; online metadata is complementary.

## Artists

| Metadata Type | Source(s) |
| --- | --- |
| Name, sort name, genres | File tags, `artist.nfo`, music providers |
| MusicBrainz ID (MBID) | File tags, `artist.nfo`, music providers, derived via MusicBrainz lookup if missing |
| Biography | `artist.nfo` (`<biography>`), music providers, **The Audio DB** |
| Style, mood, label | **The Audio DB** |
| Images (thumb, logo, banner, fanart, cutout, landscape, clearart) | Embedded tags, folder images, music providers, **Fanart.tv**, **The Audio DB** |
| Links (website, Facebook, Twitter, Last.fm) | **The Audio DB** |

The MusicBrainz Artist ID is the key that unlocks all online artist enrichment. When no MBID can be determined for an artist (typically because none of the artist's tracks or albums matched), no online bio or imagery is fetched. Adding the MBID to file tags or to an `artist.nfo` is the most reliable fix.

## Albums

| Metadata Type | Source(s) |
| --- | --- |
| Name, sort name, year, genres, album type | File tags, `album.nfo`, music providers |
| MusicBrainz Release Group / Album ID | File tags, `album.nfo`, music providers |
| Description / review | `album.nfo` (`<review>`), music providers, **The Audio DB** |
| Style, mood, label | **The Audio DB** |
| Links (Wikipedia, AllMusic, Last.fm, social) | **The Audio DB** |
| Front cover, disc art | See [Artwork](/metadata/artwork) |

## Tracks

| Metadata Type | Source(s) |
| --- | --- |
| Title, version, artists, album, disc / track number, duration, year | File tags, music providers |
| MusicBrainz Recording ID, ISRC, barcode | File tags, music providers |
| Genres, mood, style, description | File tags, music providers, **The Audio DB** |
| Explicit flag, copyright, grouping, comment | File tags, music providers |
| Lyrics | See [Lyrics](/metadata/lyrics) |
| Volume normalization value | See [Loudness Analysis](/audio-analysis/loudness-analysis) |

## Playlists

Playlists don't have rich metadata of their own; instead Music Assistant derives:

- **Thumbnail** See [Artwork](/metadata/artwork/#playlists)
- The **top genres** present across the playlist's tracks (the eight most common, requiring at least five occurrences each).

## Audiobooks

Audiobook items collect publisher, authors, narrators, duration, description and chapter list — sourced from embedded tags or the audiobook provider (Audiobookshelf, Audible, etc.). Cover artwork follows the same precedence as albums.

## Podcasts

Podcast shows track publisher and total episode count from the podcast provider (Audiobookshelf, Podcast Index, RSS feed, etc.). Per-episode metadata — title, description, artwork — comes directly from the show's feed.
