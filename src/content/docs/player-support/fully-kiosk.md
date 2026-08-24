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

In addition to the [Individual Player Settings](/settings/individual-player/) and the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols), the Fully Kiosk players have the following settings:

- <b>Password.</b> The password set for the Fully Kiosk REST API on that device. A player stays unavailable until it has one, so press <b>Setup</b> on the player and enter it
- <b>Use HTTPS when connecting to the Fully Kiosk API.</b> This is off by default
- <b>Verify HTTPS certificates (recommended).</b> This is on by default. Turning it off trusts any certificate without validation
- <b>TLS certificate fingerprint.</b> Optional SHA-256 hex fingerprint. When provided it must match the device certificate and overrides the Verify HTTPS certificates setting
- <b>[Output codec to use for streaming audio to the player](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player).</b> Defaults to MP3 here rather than FLAC, because many tablets struggle with lossless. Stay on MP3 unless you have a reason to change
  
## Known Issues / Notes

- A <a href="https://www.fully-kiosk.com/#pricing" target="_blank" rel="noopener noreferrer">paid license</a> for Fully Kiosk is required
- These players are never found automatically, so each tablet has to be added by hand with its IP address and Fully Kiosk password
- Once added the device name can be changed, if required, in the specific player configuration
- Fully Kiosk players always stream the queue as one continuous [flow mode](/faq/tech-info/#track-queueing) stream, so there is no setting to turn it on or off. Crossfade works as a result, but the device may not show track metadata and its physical buttons may not respond
- This player can be grouped via a [Universal Group](/faq/groups/#universal-groups) but perfect sync is not possible.
