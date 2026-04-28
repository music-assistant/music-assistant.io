---
title: Loudness Analysis
---

# Loudness Analysis Provider  <img src="/assets/icons/loudness-analysis-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The **Loudness Analysis** provider measures each track's loudness using FFmpeg's EBU R128 implementation, so Music Assistant can keep perceived volume consistent across tracks from very different sources.

It is built in, always on, and cannot be disabled. Measurements run automatically on tracks that do not yet have one stored.

## What is measured

For each analysed track:

- **Integrated loudness** — EBU R128 LUFS.
- **Loudness range** — EBU R128 LU.
- **True peak** — ITU-R BS.1770-4 dBTP.

When a track's tags already contain a usable `REPLAYGAIN_TRACK_GAIN` (or equivalent) value, the existing measurement is reused and the track is not re-analysed.

Tracks shorter than 10 seconds, longer than 10 minutes of analysed audio, or whose measurement comes back near silence are skipped to avoid unreliable values.

## How the data is used

- **Volume normalization** — keeps perceived loudness consistent when transitioning between tracks from different sources (a loudly-mastered modern album, a quiet jazz release, a podcast and a streaming track all play back at comparable loudness).
- When a track is played through a player that has volume normalization disabled, the live loudness measurement is skipped, as no gain would be applied. However, a background job continues to measure library tracks independently of playback, so a measurement is still produced over time.

## Settings

### Write `REPLAYGAIN_TRACK_GAIN` tags back to files

**Default: off.** When enabled, a `REPLAYGAIN_TRACK_GAIN` tag is written into each audio file after its loudness has been measured. This is the only situation in which Music Assistant ever modifies an audio file.

This is useful when other apps on the network read these tags for their own volume normalization. Write access to the file is required; read-only files are silently skipped.
