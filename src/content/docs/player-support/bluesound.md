---
title: "Bluesound"
---

# Bluesound <img src="/assets/icons/bluesound-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://www.bluesound.com/" target="_blank" rel="noopener noreferrer">Bluesound</a> (BlueOS) based devices. This component is contributed and maintained by <a href="https://github.com/Cyanogenbot" target="_blank" rel="noopener noreferrer">Cyanogenbot</a>.

## Features

- Bluesound devices are auto detected by Music Assistant

## Settings

Refer to the [Player Provider Settings](/settings/player-provider/) when setting up this provider as it has no unique settings at the provider level.

In addition to the [Individual Player Settings](/settings/individual-player/) the Bluesound players have the following settings:

- <b>HTTP profile used for send audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues.
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Content with unsupported sample rates will be resampled.
- <b>Try to inject metadata into stream (ICY).</b> Default is "full" (Profile 2 - full info including images). This option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all players support this correctly, therefore, if there are issues with playback try disabling this setting.
- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC` or `WAV`.
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Enforce gapless playback with queue flow mode streaming.</b> Enabling this option will send all tracks as a contnuous audio stream. Use for players that dont natively support gapless or crossfading. Can also help with players that have difficulty transitioning between tracks. May have the side effect of losing metadata to the player

## Known Issues / Notes

- Alternative inputs might not be detected
- Album covers are not visible in the Bluesound app or on devices that have a screen due to limitations in the API
  
## Not Yet Supported

- Announcements
- Synchronised playback
