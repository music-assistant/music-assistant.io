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

- <b>Fully Kiosk devices.</b> The devices to connect to, entered one per line as host or host:port. The port defaults to 2323 when it is left off. Each device becomes its own player. After saving, open each player's settings page to set its password and any HTTPS options

In addition to the [Individual Player Settings](/settings/individual-player/) the Fully Kiosk players have the following settings:

- <b>Password.</b> The password set for the Fully Kiosk REST API on that device. A player stays unavailable until it has one, so press <b>Setup</b> on the player and enter it
- <b>Use HTTPS when connecting to the Fully Kiosk API.</b> This is off by default
- <b>Verify HTTPS certificates (recommended).</b> This is on by default. Turning it off trusts any certificate without validation
- <b>TLS certificate fingerprint.</b> Optional SHA-256 hex fingerprint. When provided it must match the device certificate and overrides the Verify HTTPS certificates setting
- <b>Output codec to use for streaming audio to the player.</b> The default is MP3 but other options are FLAC, AAC or WAV. Many tablets struggle with lossless, so stay on MP3 unless you have a reason to change
- <b>Output channel mode.</b> The default is Stereo (both channels) but other options are Left channel only, Right channel only or Mono (both channels)
- <b>HTTP Profile used for sending audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues. The default is Profile 2 - no content length
- <b>Try to inject metadata into stream (ICY).</b> Off by default. Enabling this attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Profile 1 - basic info sends title and artist only, Profile 2 - full info adds the album name and cover art. Not all players support this correctly, therefore, if there are issues with playback try a lower profile or disable it
- <b>Prefer low-latency WAV for live sources.</b> Sends live sources such as Spotify Connect and AirPlay Receiver as uncompressed audio to reduce the delay before you hear them. Disable this if the player cannot play continuous WAV streams
- <b>Sample rates supported by this player.</b> Defaults to 44.1kHz / 16 bits and 48kHz / 16 bits, which suits most tablets. Add higher rates only if the device genuinely handles them. Content with unsupported sample rates will be resampled
- <b>Flow Mode sample rate.</b> Fully Kiosk players always play the queue as one continuous stream, which uses a single sample rate throughout. Smart (the default) starts at the first track's rate and only restarts the stream when a later track is higher. Other options are Bit-perfect, a fixed 48 kHz or 96 kHz, or Highest supported by player
  
## Known Issues / Notes

- A <a href="https://www.fully-kiosk.com/#pricing" target="_blank" rel="noopener noreferrer">paid license</a> for Fully Kiosk is required
- These players are never found automatically, so each tablet has to be added by hand with its IP address and Fully Kiosk password
- Once added the device name can be changed, if required, in the specific player configuration
- Crossfade is supported if [flow mode](/faq/tech-info/#track-queueing) is enabled in the individual player settings. Enabling flow mode may also solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- This player can be grouped via a [Universal Group](/faq/groups/#universal-groups) but perfect sync is not possible.
