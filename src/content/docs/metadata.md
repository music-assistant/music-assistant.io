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

- **First play of a track:** As soon as the track is queued, Music Assistant starts a lyrics lookup in the background. Because metadata updates are throttled to one every ~30 seconds, lyrics usually won't appear during that first playback — they'll be in place the next time the track is played
- **Opening the Now Playing view:** Music Assistant returns whatever is already stored for the track. For tracks playing directly from a source (i.e. not in your library), if nothing is stored it will try the track's own music provider first (e.g. Tidal) and then fall back to the lyrics metadata providers on demand
- **Periodic refresh:** Stored metadata, including lyrics, is considered fresh for 90 days. After that, the next play triggers a fresh lookup
- **Manual refresh:** Selecting Update Metadata from a track's menu bypasses the 90-day check and re-runs the lookup immediately

Tidal has native lyrics support, but due to its API lyrics are only fetched as part of a full track lookup, which happens when you open a track's info page or play it. You may need to refresh the item and play again before lyrics appear.

### Lyrics providers

Music Assistant currently has two dedicated lyrics metadata providers. They run in addition to any lyrics delivered by the music source itself (Tidal, local tags, .lrc files, etc.) and are skipped when a track already has lyrics. If both providers are enabled, LRCLIB runs first and Genius fills in only when LRCLIB returned nothing.

#### LRCLIB

This provider is enabled by default and is the primary source for synchronized lyrics, backed by the community database at lrclib.net. It returns synced lyrics when available, otherwise falls back to plain lyrics.

The LRCLIB API only returns a result when track name, artist, album, and duration (within ~2 seconds) all match an entry in the database — tracks without artist or duration info are skipped.

Requests are throttled to 1 every 30 seconds, so a newly added library will populate gradually. Advanced users can point the provider at their own LRCLIB instance via the API URL option; throttling is relaxed automatically in that case.

#### Genius Lyrics

This provider is optional and is a fallback source for plain (unsynchronized) lyrics, scraped from genius.com. It only ever returns plain text — Genius does not provide timed lyrics.

It matches on title + artist only (no album/duration check), so it finds lyrics for more tracks than LRCLIB but occasionally picks the wrong version (e.g. a remix or cover) for ambiguous titles.

No configuration is required for this provider

