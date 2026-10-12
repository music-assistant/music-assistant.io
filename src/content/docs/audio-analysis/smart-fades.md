---
title: Smart Fades
---

# Smart Fades  <img src="/assets/icons/smart-fades-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

**Smart Fades** listens to each track to learn its tempo, where the beats fall, its musical key, its loud and quiet parts, where the kick drum plays and where someone sings. Music Assistant uses that information to choose a transition that suits each pair of tracks, instead of the same fade every time.

Smart Fades is optional and lives in the settings under Audio analysis. Music Assistant adds and enables it automatically on a server with at least 6 GB of RAM and 4 CPU cores. On a smaller server that meets the [minimum requirements](#performance-notes), you can add it yourself.

## What it adds to playback

At every change of track, Music Assistant looks at how the current track ends and how the next one starts, and picks one of these transitions.

| Transition | What you hear | When it is used |
| --- | --- | --- |
| Beatmatched blend | Both tracks play together for about 10 to 30 seconds (longer between two instrumental tracks) with their beats lined up, the way a DJ mixes them. The bass of one track hands over to the other. When both have a kick drum, the current track speeds up or slows down a little to match the tempo of the next one. | Two tracks with a steady beat, the same rhythm (a waltz and a pop song don't match) and tempos within about 8% of each other. |
| Segue | The tracks overlap only where they are quiet: the current track's fade-out or quiet ending and the next track's quiet intro. The song's own fade carries the change, for up to about 15 seconds. | Tracks whose beats can't be lined up, when the current one fades out or ends quietly, or the next one starts quietly. |
| Short fade | A quick fade of a few seconds. | Tracks whose beats can't be lined up, when neither ends or starts quietly enough for a segue. |
| Filter out | The bass and the kick drum of the current track are swept away over a few seconds while the next track comes in. | Instead of a short fade, when even that would play two kick drums out of step, and the tempos are within about 20%. |
| Echo out | The current track stops on the beat and its last beat echoes away, while the next track starts on its first beat. | Like filter out, when the tempos are further apart or the rhythms differ. |

Music Assistant also checks what would play on top of each other. It keeps the overlap short when both tracks would sing at the same time, or when two kick drums would play out of step. A voice or a beat on only one of the two tracks doesn't count as a clash. When neither track has vocals around the change and at least one has no kick drum, the overlap can run up to about 15 seconds, even through the loud parts.

A transition uses the standard crossfade when a track has no analysis yet, or when the current track ends in a long stretch of silence.

## Choosing the crossfade mode

Crossfade is a queue setting. Set it for all players in the [Player Queues settings](/settings/core/#player-queues), or for one player only in [that queue's own settings](/usage/#the-queue):

| Mode | Behaviour |
| --- | --- |
| **Standard Crossfade** | A simple time-based crossfade of a configurable duration. Used as a fallback when Smart Fades cannot run. |
| **Smart Crossfade** | Uses the Smart Fades analysis to choose a transition that suits each pair of tracks, as described above. |

The duration used for Standard Crossfade (and as a fallback for Smart Crossfade) is set with "Standard crossfade duration" in the Player Queues settings, which shows while Standard Crossfade is selected there.

Some players don't natively support gapless or crossfaded playback. For those, Music Assistant automatically switches into flow mode (one continuous stream) so the crossfade can still happen.

## How analysis runs

Scanning is done as a background task for tracks from [Local files](/music-providers/local-files/) sources, including those on a network share, and all in-library tracks are scanned during playback.
 
Analysis runs in the background while a track plays. The first time a track is played:

- The analysis is performed and stored with the track.
- If the analysis hasn't finished by the time the next track begins, Music Assistant falls back to a Standard Crossfade for that transition.

Once a track has been analysed, the result is reused on every subsequent play — so the more a library is played, the more transitions become smart over time.

## Performance notes

Smart Fades runs machine learning on the audio and is more CPU and memory intensive than the rest of Music Assistant. Thus, in order to preserve the user experience, the following are hard requirements:

- An [AVX2](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions) capable CPU on x86 (or use an ARM64 cpu). In virtualized environments, if the host CPU supports AVX2, pass the host CPU model through to the VM
- Minimum 4GB of RAM and 2 CPU cores

If a server feels sluggish after enabling Smart Fades, switching the affected players to Standard Crossfade (or Disabled) restores normal behaviour while leaving Smart Fades installed.

## Same-album transitions

Tracks from the same album are usually made to flow together, so by default Music Assistant skips crossfading between tracks of the same album. This applies to both Standard and Smart Crossfade. The behaviour can be overridden with the "[Allow crossfade between tracks from the same album"](/settings/core/#queue-playback) setting if cross-fading album-internal tracks is preferred.
