---
title: "Fully Kiosk"
---

# Fully Kiosk Browser <img src="/assets/icons/fully-kiosk.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming to devices running the Fully Kiosk Browser Android application

## Features

- Play music through an Android tablet running Fully Kiosk, typically a wall-mounted dashboard
- Multiple Fully Kiosk browser players can be added
- Basic playback only. There is no synchronised multi-room playback with other players
  
## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS`, click `ADD A NEW PROVIDER` and select `Fully Kiosk Browser` (Fully Kiosk players are not discovered automatically).
2. Enter the IP address (or hostname) and the password of the device running Fully Kiosk. See Settings below for the remaining options.
3. To add more Fully Kiosk devices, add the provider again for each one.

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>IP Address (or hostname) of the device running Fully Kiosk.</b>
- <b>Password to use to connect to the Fully Kiosk API.</b>
- <b>Port to use to connect to the Fully Kiosk API.</b> Default is 2323
- <b>Use HTTPS when connecting to the Fully Kiosk API.</b> This is off by default
- <b>Verify HTTPS certificates.</b> This is on by default
- <b>TLS certificate fingerprint.</b> Optional SHA-256 HEX fingerprint. When provided it must match the device certificate and overrides the `Verify HTTPS certificates` setting

In addition to the [Individual Player Settings](/settings/individual-player/) the Fully Kiosk players have the following settings:

- <b>Output codec to use for streaming audio to the player.</b> The default is `MP3` but other options are `FLAC`, `AAC` or `WAV`. Many tablets struggle with lossless, so stay on MP3 unless you have a reason to change
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>HTTP profile used for send audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all players support this correctly, therefore, if there are issues with playback try disabling this setting
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Content with unsupported sample rates will be resampled
  
## Known Issues / Notes

- A <a href="https://www.fully-kiosk.com/#pricing" target="_blank" rel="noopener noreferrer">paid license</a> for Fully Kiosk is required
- These players are never found automatically, so each tablet has to be added by hand with its IP address and Fully Kiosk password
- Once added the device name can be changed, if required, in the specific player configuration
- Crossfade is supported if [flow mode](/faq/tech-info/#track-queueing) is enabled in the individual player settings. Enabling flow mode may also solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- This player can be grouped via a [Universal Group](/faq/groups/#universal-groups) but perfect sync is not possible.
