---
title: "AmpliPi"
---

# AmpliPi <img src="/assets/icons/amplipi-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for the <a href="https://www.amplipi.com/" target="_blank" rel="noopener noreferrer">AmpliPi</a> multi-zone audio controller from MicroNova. Each enabled zone of the controller is exposed as an individual Music Assistant player, with native AmpliPi zone grouping and source management.

> [!NOTE]
> This provider is currently considered **experimental**.

## Features

- Each enabled zone of the AmpliPi controller is exposed as a separate Music Assistant player
- Multiple AmpliPi controllers can be added (the provider supports multiple instances)
- Zones on the same controller can be grouped and will play in sync, using AmpliPi's native zone grouping
- Power, volume and mute control per zone
- The AmpliPi controller's own sources can be selected and routed to a zone (and any grouped zones), including its native streams (Spotify Connect, AirPlay, Pandora, DLNA, Internet Radio, Plexamp, Bluetooth, LMS) and its physical inputs (the RCA line inputs and the front-panel Aux input)

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Host.</b> The hostname or IP address of the AmpliPi controller (e.g. `amplipi.local` or `192.168.1.50`). A full URL may also be provided. This is required as AmpliPi controllers are not auto-discovered

The AmpliPi players use the standard [Individual Player Settings](/settings/individual-player/) only; they do not add any extra player-specific settings.

## Known Issues / Notes

- An AmpliPi controller has 4 audio sources shared across all of its zones (which can number 6 or more). This means a maximum of 4 independent streams (or groups) can play at the same time. If all sources are in use, additional playback will fail with an "All AmpliPi sources are currently in use" error
- AmpliPi has no native pause for streamed audio, so pause is emulated by stopping the stream. On resume, Music Assistant continues from the saved position
- AmpliPi does not report playback position and plays a single stream URL, so these players always use queue flow mode
- Selecting one of the controller's own sources (a native stream or a physical RCA/Aux input) is routing only — the wired input or the owning app drives the audio, so Music Assistant does not provide transport controls for those sources
- Announcement / text-to-speech playback to AmpliPi zones is not yet supported
