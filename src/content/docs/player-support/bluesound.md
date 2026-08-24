---
title: "Bluesound"
---

# Bluesound <img src="/assets/icons/bluesound-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://www.bluesound.com/" target="_blank" rel="noopener noreferrer">Bluesound</a> (BlueOS) based devices. This component is contributed and maintained by <a href="https://github.com/Cyanogenbot" target="_blank" rel="noopener noreferrer">Cyanogenbot</a>.

## Features

- Bluesound devices are auto detected by Music Assistant

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS`, click `ADD A NEW PROVIDER` and select `Bluesound`.
2. Your Bluesound devices will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

Refer to the [Player Provider Settings](/settings/player-provider/) when setting up this provider as it has no unique settings at the provider level.

In addition to the [Individual Player Settings](/settings/individual-player/) the Bluesound players have the following settings:

- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Content with unsupported sample rates will be resampled
- <b>Try to inject metadata into stream (ICY).</b> Default is "full" (Profile 2 - full info including images). This option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all players support this correctly, therefore, if there are issues with playback try disabling this setting
- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC` or `WAV`
- <b>Prefer low-latency WAV for live sources.</b> Sends live sources such as Spotify Connect and AirPlay Receiver as uncompressed audio to reduce the delay before you hear them. Disable this if the player cannot play continuous WAV streams
- <b>Flow Mode sample rate.</b> Bluesound players always play the queue as one continuous stream, which uses a single sample rate throughout. Smart (the default) upsamples lower-rate tracks to match the first track and only restarts the stream for a higher-rate track. Other options are Bit-perfect, a fixed 48 kHz or 96 kHz, or Highest supported by player
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`

## Known Issues / Notes

- Alternative inputs might not be detected
- Album covers are not visible in the Bluesound app or on devices that have a screen due to limitations in the API
  
## Not Yet Supported

- Announcements
- Synchronised playback
