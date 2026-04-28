---
title: Lyrics
---

# Lyrics <img src="/assets/icons/metadata-lyrics-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Two kinds of lyrics are available:

- **Synchronized lyrics** (`.lrc` format with timestamps)
- **Unsynchronized lyrics** (plain text)

## Lyrics Sources

Sources, in order of preference:

1. **Embedded lyrics** in the audio file's tags.
2. **`.lrc` file** with the same name as the audio file (the format produced by tools such as [LRCGET](https://github.com/tranxuanthang/lrcget)).
3. **The track's own music provider**, when it exposes lyrics natively (e.g. some streaming providers).
4. **LRCLIB** — synchronized is preferred but there is an unsynchronized falllback.
5. **Genius Lyrics** (optional) — unsynchronized only, matched on title and artist.

A background lookup is started as soon as a track enters the queue, so lyrics are usually available by the time the song starts.

## How lyrics are fetched

Several strategies are employed:

- A background lookup is started when a track enters the queue.
- Manual metadata updates bypass the standard 90-day refresh cycle.
- The Now Playing view either retrieves stored information or queries the music provider directly.

## Two lyrics providers

### LRCLIB

Enabled by default and the primary source for synchronized lyrics from [lrclib.net](https://lrclib.net). Matching requires track name, artist, album and duration within approximately 2 seconds.

LRCLIB is throttled to one request per 30 seconds against the public API. For faster lookups across a large library, a self-hosted LRCLIB instance can be used by pointing Music Assistant at the custom endpoint via the provider's "API URL" setting.

### Genius Lyrics

An optional fallback for unsynchronized lyrics. Matching is on title and artist only — this can return results for more tracks but risks incorrect versions for ambiguously-titled songs.

Genius Lyrics is enabled from Settings → Providers → Add provider.

## Replacing wrong or stale lyrics

Once lyrics are stored on a track, the standard "Update metadata" action will not replace them — both LRCLIB and Genius skip tracks that already have lyrics.

To force a fresh lookup, use **"Refresh item"** on the track. This re-pulls the track from its music source and wipes the stored metadata before re-running the metadata refresh, so the lyrics providers query their APIs again rather than short-circuiting.

Two complementary approaches are also worth knowing about:

- **For local files**: a corrected `.lrc` file can be placed next to the audio file (or the embedded tag fixed) and the library re-scanned. Source-supplied lyrics always take precedence over previously stored online lyrics.
- **For LRCLIB-sourced lyrics**: corrections submitted at lrclib.net update the upstream entry. Once the track has been refreshed, the corrected version will be used.
