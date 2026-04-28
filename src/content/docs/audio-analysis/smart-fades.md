---
title: Smart Fades
---

# Smart Fades Provider  <img src="/assets/icons/smart-fades-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The **Smart Fades** provider analyses each track to find its beats, downbeats, musical key and energy curve, and uses that information to create beat-matched, EQ-aware crossfades between tracks — much smoother than a plain time-based fade.

Smart Fades is an optional plugin but is automatically added and enabled.

## What it adds to playback

When Smart Fades is enabled on a player, the transition between tracks is:

- **Beat-aligned** — the outgoing and incoming tracks line up on a downbeat instead of clipping mid-bar.
- **Energy-aware** — the crossfade is positioned where the outgoing track is winding down and the incoming one has settled in, rather than at a fixed offset.
- **EQ-blended** — high and low frequencies are blended separately to avoid the muddy sound that a straight volume crossfade produces.

The result is closer to what a DJ would do manually than to a stock crossfade.

## Enabling Smart Fades on a player

Smart Fades is configured **per player** under that player's settings:

| Mode | Behaviour |
| --- | --- |
| **Disabled** | No crossfade between tracks. |
| **Standard Crossfade** | A simple time-based crossfade of a configurable duration. Used as a fallback when Smart Fades cannot run. |
| **Smart Crossfade** | Uses the beat, key and energy data produced by this provider to build a beat-matched, EQ-aware transition. |

The duration used for Standard Crossfade (and as a fallback for Smart Crossfade) is set via "Fallback crossfade duration" in the same settings group.

Some players don't natively support gapless or crossfaded playback. For those, Music Assistant automatically switches into flow mode (a continuous re-encoded stream) so the crossfade can still happen.

## How analysis runs

Analysis runs in the background while a track is playing through the streaming pipeline. The first time a track is played:

- The analysis is performed and stored with the track.
- If the analysis hasn't finished by the time the next track begins, Music Assistant falls back to a Standard Crossfade for that transition.

Once a track has been analysed, the result is reused on every subsequent play — so the more a library is played, the more transitions become smart over time.

## Performance notes

Smart Fades performs real machine-learning inference on the audio stream and is more CPU-intensive than the rest of Music Assistant. On systems with **only one CPU core** the provider shows a warning at setup, because analysis can compete with normal playback. On a multi-core host (two or more cores) it runs comfortably alongside playback.

If a server feels sluggish after enabling Smart Fades, switching the affected players to Standard Crossfade (or Disabled) restores normal behaviour while leaving the provider installed.

## Same-album transitions

Tracks from the same album are typically mastered to flow together, so by default Music Assistant skips crossfading between tracks of the same album. This applies to both Standard and Smart Crossfade. The behaviour can be overridden with the "[Allow crossfade between tracks from the same album"](/settings/core/#queue-playback) setting if cross-fading album-internal tracks is preferred.
