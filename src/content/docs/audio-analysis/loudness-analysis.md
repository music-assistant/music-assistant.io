---
title: Loudness Analysis
---

# Loudness Analysis Provider  <img src="/assets/icons/loudness-analysis-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The **Loudness Analysis** provider measures each track's loudness using FFmpeg's EBU R128 implementation, so Music Assistant can keep perceived volume consistent across tracks from very different sources.

It is built in, always on, and cannot be disabled. Measurements run automatically on tracks that do not yet have a loudness value stored. Scanning is done as a background task for local file system (i.e. Local, SMB or NFS) provided tracks, and any track is measured while it plays.

## What is measured

For each analysed track:

- **Integrated loudness** — EBU R128 LUFS.
- **Loudness range** — EBU R128 LU.
- **True peak** — ITU-R BS.1770-4 dBTP.

When a track already carries a loudness value from its tags or from the music provider, that value is used and the track is not analysed at all. The tags read are `R128_TRACK_GAIN` and `R128_ALBUM_GAIN`, then `REPLAYGAIN_TRACK_GAIN` and `REPLAYGAIN_ALBUM_GAIN`, with the R128 pair taking priority where both are present. Plex and Subsonic report the same data through their own APIs.

Album level values come only from those tags or from a music provider. This provider measures the individual track, so album gain is available only for tracks that were tagged with it. How the values are chosen and applied is covered on the [Technical Information](/faq/tech-info/#volume-normalization) page.

Tracks shorter than 10 seconds, longer than 10 minutes of analysed audio, or whose measurement comes back near silence are skipped to avoid unreliable values.

## How the data is used

- **[Volume normalization](/settings/core/#queue-playback)**. Keeps perceived loudness consistent when transitioning between tracks from different sources (a loudly-mastered modern album, a quiet jazz release, a podcast and a streaming track all play back at comparable loudness). How the measurement is used is chosen under [**Settings → System → Streams → Queue Playback**](/settings/core/#queue-playback), and normalization is switched on or off per queue.
- When a track is played through a player that has volume normalization disabled, or from a source that delivers its audio at a loudness target of its own, the live loudness measurement is skipped, as no gain would be applied. However, a background job continues to measure local library tracks independently of playback, so a measurement is still produced over time.

## Settings

- <b>Write `REPLAYGAIN_TRACK_GAIN` tags back to files.</b> When enabled, a `REPLAYGAIN_TRACK_GAIN` tag is written into each audio file after its loudness has been measured. This is the only situation in which Music Assistant ever modifies an audio file and by default this is off.

This is useful when other apps on the network read these tags for their own volume normalization. Write access to the file is required; read-only files are silently skipped.
