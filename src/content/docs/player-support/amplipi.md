---
title: "AmpliPi"
---

# AmpliPi <img src="/assets/icons/amplipi-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for the <a href="https://www.amplipi.com/" target="_blank" rel="noopener noreferrer">AmpliPi</a> multi-zone audio controller from MicroNova. Each enabled zone of the controller is exposed as an individual Music Assistant player, with native AmpliPi zone grouping and source management. This provider is contributed and maintained by [Nathaniel McAuliffe](https://github.com/mcaulifn)

> [!NOTE]
> This provider is currently considered **experimental**.

## Features

- Each enabled zone of the AmpliPi controller is exposed as a separate Music Assistant player
- Multiple AmpliPi controllers can be added (the provider supports multiple instances)
- Zones on the same controller can be grouped and will play in sync, using AmpliPi's native zone grouping
- Power, volume and mute control per zone
- The AmpliPi controller's own sources can be selected and routed to a zone (and any grouped zones), including its native streams (Spotify Connect, AirPlay, Pandora, DLNA, Internet Radio, Plexamp, Bluetooth, LMS) and its physical inputs (the RCA line inputs and the front-panel Aux input)

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS`, click `ADD A NEW PROVIDER` and select `AmpliPi`.
2. Enter the hostname or IP address of your AmpliPi controller in the `Host` setting (AmpliPi controllers are not discovered automatically). See Settings below for the details.

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Host.</b> The hostname or IP address of the AmpliPi controller (e.g. `amplipi.local` or `192.168.1.50`). A full URL may also be provided. This is asked when you add the provider and is required, as AmpliPi controllers are not auto-discovered

Each zone on the controller becomes its own player. In addition to the [Individual Player Settings](/settings/individual-player/) the AmpliPi players have the following settings:

- <b>Output codec to use for streaming audio to the player.</b> The default is FLAC but other options are MP3, AAC or WAV
- <b>Output channel mode.</b> The default is Stereo (both channels) but other options are Left channel only, Right channel only or Mono (both channels)
- <b>HTTP Profile used for sending audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues. The default is Profile 2 - no content length
- <b>Prefer low-latency WAV for live sources.</b> Sends live sources such as Spotify Connect and AirPlay Receiver as uncompressed audio to reduce the delay before you hear them. Disable this if playback of those sources is unreliable
- <b>Sample rates supported by this player.</b> Defaults to 44.1kHz / 16 bits and 48kHz / 16 bits. Higher rates and 24 bit options are offered if your setup handles them. Content with unsupported sample rates will be resampled

AmpliPi zones always play the queue as one continuous stream, so there is no flow mode setting to change.

## Known Issues / Notes

- An AmpliPi controller has 4 audio sources shared across all of its zones (which can number 6 or more). This means a maximum of 4 independent streams (or groups) can play at the same time. If all sources are in use, additional playback will fail with an "All AmpliPi sources are currently in use" error
- AmpliPi has no native pause for streamed audio, so pause is emulated by stopping the stream. On resume, Music Assistant continues from the saved position
- AmpliPi does not report playback position and plays a single stream URL, so these players always use queue flow mode
- Selecting one of the controller's own sources (a native stream or a physical RCA/Aux input) is routing only — the wired input or the owning app drives the audio, so Music Assistant does not provide transport controls for those sources
- Announcement / text-to-speech playback to AmpliPi zones is not yet supported
