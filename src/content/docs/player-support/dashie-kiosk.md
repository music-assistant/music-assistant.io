---
title: "Dashie"
---

# Dashie <img src="/assets/icons/dashie-kiosk.svg" alt="Dashie icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for streaming to Android tablets running the <a href="https://dashieapp.com" target="_blank" rel="noopener noreferrer">Dashie</a> or Dashie Lite kiosk app. Audio is played directly on the device via its REST API.

## Features

- Automatic discovery of Dashie devices via the <a href="https://github.com/jwlerch78/dashie-ha-integration" target="_blank" rel="noopener noreferrer">Dashie HA integration</a>
- Manual configuration by IP address (no Home Assistant required)
- Volume control, pause, resume, and seek support
- Flow mode for gapless audio streaming
- Automatic retry for devices that are offline at startup

## Requirements

**Option A — Via Home Assistant (recommended):**
1. The <a href="https://github.com/jwlerch78/dashie-ha-integration" target="_blank" rel="noopener noreferrer">Dashie HA integration</a> installed in Home Assistant
2. The Home Assistant Plugin enabled in Music Assistant

**Option B — Manual configuration:**
1. The IP address and port of your Dashie device (default port: 2323)

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- **Dashie devices (via Home Assistant)** — Select Dashie tablets discovered through the Dashie HA integration. Requires the Home Assistant Plugin.
- **Manual Dashie addresses** *(advanced)* — Manually add Dashie tablets by IP address and port (e.g. 192.168.1.100:2323). Use this if you don't have the Dashie HA integration installed.

In addition to the [Individual Player Settings](/settings/individual-player/) the Dashie players have the following settings:

- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC` or `WAV`.
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Please note some older (Generation 1) devices only support up to 48kHz/16bit. Content with unsupported sample rates will be resampled.
- <b>HTTP profile used for send audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues.
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all player support this correctly, therefore, if there are issues with playback try disabling this setting.

## Known Issues / Notes

- Devices that are offline when Music Assistant starts will be retried automatically every 60 seconds
- Crossfade is supported if [flow mode](/faq/tech-info/#track-queueing) is enabled in the individual player settings
- This player can be grouped via a [Universal Group](/faq/groups/#universal-groups) but perfect sync is not possible
