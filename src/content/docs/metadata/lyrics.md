---
title: Lyrics
---

# Lyrics <img src="/assets/icons/metadata-lyrics-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Two kinds of lyrics are available:

- **Synchronized lyrics** (`.lrc` format with timestamps)
- **Unsynchronized lyrics** (plain text)

## Lyrics Sources

Music Assistant currently has two dedicated lyrics metadata providers. They run in addition to any lyrics delivered by the music source itself (Tidal, local tags, .lrc files, etc.) and are skipped when a track already has lyrics. If both providers are enabled, LRCLIB runs first and Genius fills in only when LRCLIB returned nothing. The following lists all lyric sources in order of preference:

1. **Embedded lyrics** in the audio file's tags.
2. **`.lrc` file** with the same name as the audio file (the format produced by tools such as [LRCGET](https://github.com/tranxuanthang/lrcget)).
3. **The track's own music provider**, when it exposes lyrics natively (e.g. some streaming providers).
4. **LRCLIB** — synchronized is preferred but there is an unsynchronized falllback.
5. **Genius Lyrics** (optional) — unsynchronized only, matched on title and artist.

A background lookup is started as soon as a track enters the queue, so lyrics are usually available by the time the song starts.

## How lyrics are fetched

For all music sources, if one or more lyric metadata providers are available then lyrics will be attempted to be obtained according to the following rules (note that it is possible that matching lyrics can't be found)

- **First play of a track:** As soon as the track is queued, Music Assistant starts a lyrics lookup in the background. Because metadata updates are throttled to one every ~30 seconds, lyrics usually won't appear during that first playback — they'll be in place the next time the track is played
- **Opening the Now Playing view:** Music Assistant returns whatever is already stored for the track. For tracks playing directly from a source (i.e. not in your library), if nothing is stored it will try the track's own music provider first (e.g. Tidal) and then fall back to the lyrics metadata providers on demand
- **Periodic refresh:** Stored metadata, including lyrics, is considered fresh for 90 days. After that, the next play triggers a fresh lookup
- **Manual refresh:** Selecting Update Metadata from a track's menu bypasses the 90-day check and re-runs the lookup immediately

Tidal has native lyrics support, but due to its API lyrics are only fetched as part of a full track lookup, which happens when you open a track's info page or play it. You may need to refresh the item and play again before lyrics appear.

## Two lyrics providers

### LRCLIB

Enabled by default and the primary source for synchronized lyrics from [lrclib.net](https://lrclib.net). Matching requires track name, artist, album and duration within 2 seconds. It returns synced lyrics when available, otherwise falls back to plain lyrics.

LRCLIB is throttled to one request per 30 seconds against the public API, so a newly added library will populate gradually. For faster lookups across a large library, a self-hosted LRCLIB instance can be used by pointing Music Assistant at the custom endpoint via the provider's "API URL" setting.

### Genius Lyrics

An optional fallback for unsynchronized lyrics and is a fallback source for plain (unsynchronized) lyrics, scraped from genius.com. Matching is on title and artist only — this can return results for more tracks but risks incorrect versions for ambiguously-titled songs.

Genius Lyrics is enabled from Settings → Providers → Add provider.

## Replacing wrong or stale lyrics

Once lyrics are stored on a track, the standard "Update metadata" action will not replace them — both LRCLIB and Genius skip tracks that already have lyrics.

To force a fresh lookup, use **"Refresh item"** on the track. This re-pulls the track from its music source and wipes the stored metadata before re-running the metadata refresh, so the lyrics providers query their APIs again rather than short-circuiting.

Two complementary approaches are also worth knowing about:

- **For local files**: a corrected `.lrc` file can be placed next to the audio file (or the embedded tag fixed) and the library re-scanned. Source-supplied lyrics always take precedence over previously stored online lyrics.
- **For LRCLIB-sourced lyrics**: corrections submitted at lrclib.net update the upstream entry. Once the track has been refreshed, the corrected version will be used.
