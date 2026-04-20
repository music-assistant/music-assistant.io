---
title: Metadata
description: A Description of the Metadata sources available to Music Assistant
---

# Metadata Providers

The metadata providers available in Music Assistant are used to supplement metadata which is missing from the items obtained from the music sources. They do NOT change anything (e.g. ID3 tags) obtained from the original item therefore they should not normally be disabled.

## Artwork

Music Assistant has access to a number of artwork providers. Specifically, in priority order, [Fanart.tv](https://fanart.tv/), [theaudiodb](https://www.theaudiodb.com/), iTunes Artwork and the [Cover Art Archive](https://coverartarchive.org/). This artwork is used throughout the Music Assistant UI. 

## Radio Stations

### Radio Stream Metadata

MA will parse the metadata from streams in the following formats:

- ICY
- HLS EXTINF
- Ogg container metadata (Vorbis comments) - supports Vorbis, Opus, and FLAC codecs

Legacy SHOUTcast v1 servers using non-standard HTTP responses are not currently supported.

> [!NOTE]
> See the page for the various radio stream providers for any further information in this regard

### Radio Stream Artist Artwork

When playing radio streams, Music Assistant can display album or artist images instead of the station logo. If the radio provider supplies its own artwork then this is used exclusively. For other stations artwork will be attempted to be sourced according to the following:

- "Artist - Title" format in the stream metadata is required
- Artwork for the single release is preferred first
- If no single artwork is found, then album artwork is tried
- If no album artwork is found, then artist imagery is tried
- Station logo is displayed when:
    - No artist/title metadata is available from the stream
    - The artist/track cannot be matched in the library or on MusicBrainz
    - No artwork is found from any source
    - An advertisement is detected in the stream

## Lyrics

Lyrics can be obtained from a variety of sources depending on the music source.

For <a href="https://www.music-assistant.io/music-providers/filesystem/#known-issues-notes" target="_blank" rel="noopener noreferrer">local file sources</a>, lyrics can be embedded in tags or in `.lrc` files. This is the most reliable way to have lyrics shown.

For all music sources, if one or more lyric metadata providers are available then lyrics will be attempted to be obtained according to the following rules (note that it is possible that matching lyrics can't be found)

- When a track is first played, a task will be queued to fetch the lyrics which should then mean they are available the next time the track is played (these tasks take some time to complete)
- A metadata update will occur when the track is played at least 90 days after the previous update
- If a specific track is viewed and UPDATE METADATA is selected from the top right menu then this will trigger a lyrics update request

Tidal has native lyrics support. Due to a convoluted API lookup process, lyrics are only fetched during a full track lookup, which only happens when viewing the info of a track or when the track is played. You also have to refresh the item at this point and then you might still have to hit play again in order to get lyrics to show.

> [!NOTE]
> The lrclib provider requires matching track name, artist, album and duration within 2 secs in order to return a result
