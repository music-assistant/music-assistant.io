---
title: Technical Information
description: Indepth Information Regarding Certain MA Functions
---

# Technical Information

This section contains more indepth technical information regarding Music Assistant's workings for those interested.

## Volume Normalization

The normalization value to totally avoid clipping should be -23 LUFS based on this official documentation https://tech.ebu.ch/docs/r/r128.pdf but values differ per plattform so it is complicated to get the right value.

Here is a good document from the mastering plugin developer izotope comparing different plattforms like YouTube, Spotify, Deezer, Tidal and many more. [This page explains the whole topic very well](https://www.izotope.com/en/learn/mastering-for-streaming-platforms.html#loudness-specifications-by-streaming-platform)

Noting the above, the default value is -17 which should be a good compromise in 99% of cases. MA originally had it set the to EBU's standard value of -23 but then there were complaints from people finding the music too silent.

In general, it is not recommended to turn off the volume normalization because there are so many different loudness levels, especially if music is played from different sources. MA uses an integrated loudness level based on the EBU-R128 standard and only adjusts gain of the entire track up or down so there is no compression of dynamic range as long as you use a value low enough to keep headroom. MA's limiter is set to -1.5dB to prevent clipping. It's the user's responsibility to use sane values for the target level of the volume normalization, we recommend a value somewhere between -23 and -12 LUFS. The default value is set to -17 LUFS.

If audio is only played from one single source (e.g. Deezer) and that audio source already has normalized its audio files, then its safe to disable normalization in MA. If audio is played from different sources or audio is not normalized at the source, it is highly recommended to leave normalization enabled for the best experience.

NOTE that all audio is analyzed at playback time. If no Integrated loudness measurement is available for an audio source, MA will fallback to a dynamic normalizer which is less accurate but will at least prevent a sudden drop or spike in the volume level. See the settings we provide to finetune the behavior in the settings of the Streamserver, which you can find in the settings menu under the core controller section.

**More technical details**

All tracks are processed internally as raw pcm by Music Assistant. So everything that is played will be first decoded to raw pcm of 32 bits floating point in the sample rate of the origin (unless explicit resampling is enabled/needed, such as when flow mode is enabled), and the gain adjustment is done while extracting the raw source media so the pcm chunks passed into the streaming engine have the gain adjustment applied. In this way there should be enough headroom within the (final) 16 or 24 bits bit depth. If a playback target does not support bit depths higher than 16 bits, dithering will be applied to bring the signal down again to 16 bits without quality loss.

All further processing in MA is done at PCM raw audio level, such as the DSP Settings - if "flow mode" is enabled crossfading is also done on the raw pcm chunks but that will resample all audio into one static sample rate and bit depth to create one "flow" of audio to send to the player.

The final part in the chain is that MA needs to send the audio to the player. By default we encode the raw PCM into FLAC because it is lossless while still providing a descent amount of compression. For players that can not handle FLAC very well, or simply to save bandwidth, we provide an option (per player) to encode to MP3 instead.

## Track Queueing

MA has 2 ways of enqueuing tracks to players:

**NATIVE ENQUEUE SUPPORT**
The player has native enqueue support so we tell it what the next track will be right before the current one ends. This is a special feature that not all players support. Its supported (and by default enabled) for example on Squeezelite, Google Cast and Sonos players. Some DLNA players support it but others don't so we offer a player setting to enable it so a user can try and see if the player accepts it. The benefit of this is full support gapless playback and, in the case of Squeezelite and Sonos, also crossfade. Full metadata will also be sent to the player which is currently playing.

**FLOW MODE**
As an alternative to native enqueuing we can also send one stream of audio to the player and let Music Assistant stitch the songs together (with gapless or crossfade). This mode is used by default for AirPlay, Snapcast and any mediaplayers you import from Home Assistant, and flow mode will also be used by DLNA and Cast if crossfade gets enabled. The downside of this approach is that most players lose metadata display (on the speaker itself). Some DLNA players however support "icy metadata" which is what we send to inform what is playing. 

NOTE on player support: Always prefer a native Player provider within Music Assistant over a generic imported player from Home Assistant!
The media players within Home Assistant are designed with automation of the player/music in mind, not to provide an optimal streaming experience itself.
Native player providers in Music Assistant have been tweaked optimally to give the best (audio) quality and experience as well as supporting imported features such as grouping and enqueuing.

## Player Perfect Sync

Audio sync between speakers is only possible if there is accurate knowledge of the exact (millisecond-precise) timestamp a player played each audio frame. In practice there are 2 common strategies used to sync audio:

1) Sending timestamped frames to each player - there is one master clock and audio frames are sent to each receiving device in a sync group including the timestamp. So each player will have knowledge when it should play each frame and it can drop or inject frames to keep in sync. This strategy is often used in the proprietary protocols such as Google Cast, Sonos, Roon RAAT, BluOS and even Apple AirPlay (RAOP).
This is by far the best (most precise) sync method because each player is responsible for sending the correct audio frames to the DAC (or digital transport).

2) Server-side corrected sync. Each player is sent the audio stream from the centralized source and then the server keeps track of each player's latency and corrects it by pausing/forwarding, playing faster/slower or injecting frames. This is easier to implement because the only thing needed client-side is accurate progress reporting of the client (how many milliseconds it played) and the server contains all the centralized logic to keep the sync. This is used by, for example, Squeezelite and Snapcast.

How well the time synchronisation works depends on multiple factors but often you will find that strategy 1 is superior to strategy 2 and/or strategy 2 needs tweaking to get it right. For instance on Snapcast you may hear skipping (small disturbances to the sound while its adjusting) and Squeezelite works less optimally with WiFi based devices due to changing player latency.

RECOMMENDATION: To have the best synced audio experiences of players, try to stick with one ecosystem and, if possible, choose one of the options that implement strategy 1 (proprietary protocol). 

AirPlay is favoured because it a very good sync protocol that originally was proprietary but has been reverse engineered. You can now have AirPlay targets in both commercially available audio gear (even high end equipment) and DIY devices. It outperforms all the strategy 2 stream protocols by a wide margin. The same applies to a $35 chromecast audio puck with the google cast protocol. It works really well out of the box.
