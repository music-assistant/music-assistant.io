---
title: "Home Assistant Media Players"
description: Features of, and instructions for, the use of HA media player entities in Music Assistant
---

# Home Assistant Media Players<img src="/assets/icons/ha-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for playing to media player entities in Home Assistant.

This is the last of the three Home Assistant pieces; it needs the [Home Assistant Plugin](/ha-plugin/), which in turn needs the integration. See [how the pieces fit together](/integration/#how-the-pieces-fit-together) if you are not sure which you need.

> [!CAUTION]
> This player provider relies on the upstream HA integrations which have not necessarily been written or optimised for music playback. Therefore, if there is any way to use a MA provider you need to do so. Problems with HA providers will be addressed as resources allow.

## Features

- All media player entities that are available in HA, for which there is no dedicated MA provider, will be available in MA
- All media player types that can be grouped in HA can be grouped in MA via the [Player List](/ui/#player-list) or <a href="https://www.home-assistant.io/integrations/media_player/#action-media_playerjoin" target="_blank" rel="noopener noreferrer">HA action</a>

## Configuration

Before the Player Provider can be added the [Plugin](/ha-plugin/) must be installed. The following image shows what a successful installation looks like

![screenshot](/assets/screenshots/plugin-provider.png)

- In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS`, click `ADD A NEW PROVIDER` and select `Home Assistant Media Players`
- In the provider settings, select which players are desired to be utilised. These can be changed at any time.

> [!CAUTION]
> Features are most likely limited with these players. Always prefer a native player provider, if it exists in MA, as that is optimised

## Settings

In addition to the [Individual Player Settings](/settings/individual-player/) the following audio and streaming related settings are available for Home Assistant Media Players:

- <b>Output codec to use for streaming audio to the player.</b> Selects the audio codec for the stream sent to the player. Options are FLAC (lossless, compressed), MP3 (lossy), AAC (lossy), or WAV (lossless, uncompressed). The default for HA media players is MP3 as it has the broadest compatibility across HA player integrations
- <b>Output channel mode.</b> The default is Stereo (both channels) but other options are Left channel only, Right channel only or Mono (both channels)
- <b>HTTP Profile used for sending audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues. The default is Profile 2 - no content length
- <b>Prefer low-latency WAV for live sources.</b> Sends live sources such as Spotify Connect and AirPlay Receiver as uncompressed audio to reduce the delay before you hear them. Disable this if the player cannot play continuous WAV streams
- <b>Sample rates supported by this player.</b> Defaults to 44.1kHz / 16 bits and 48kHz / 16 bits, which suits the widest range of HA players. Higher rates and 24 bit options are offered if the device handles them. Content with unsupported sample rates will be resampled

Flow mode streams audio as a continuous flow rather than individual tracks, which avoids gaps between tracks. For HA media players flow mode is always used and there is no setting to turn it off, because the wide variation in HA player capabilities makes it the most reliable playback method.

### ESPHome Media Players

Newer ESPHome based players such as the Voice PE are configured from the capabilities they report, so several of the settings above are set for you and do not appear. The output codec and the HTTP profile are fixed to what the device asks for, metadata injection is switched off, and the sample rates come from the device rather than the list above. Output channel mode and the low latency WAV setting are still available.

### MA Natively Supported Media Players

If the player you imported also has a native Music Assistant provider, a notice appears at the top of its settings. Using the native provider is strongly recommended over the generic Home Assistant one, as it gives better control and playback.

## Known Issues / Notes

- This player provider is not enabled by default and must be added via MA settings however before it is available you must setup the Home Assistant Plug-in Provider
- Only players that support `play_media` can be used, other players will be filtered out
- MA players will be filtered out
- Synchronisation between this player type and any others is not possible
- In order to support a greater number of players, different streaming profiles are available. If the player doesn't work, stops mid stream or has other playback issues then change the player setting `HTTP Profile used for sending audio` and try each option until the player works
- There are regular reports of issues with the HA integrations `VLC Telnet` and `MPD`. If possible, avoid the use of players supplied by those integrations
