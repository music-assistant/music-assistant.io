---
title: Player Support - Home Assistant Media Players
description: Features of, and instructions for, the use of HA media player entitities in Music Assistant
---

# Home Assistant Media Players<img src="/assets/icons/ha-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for playing to media player entities in Home Assistant.

> [!CAUTION]
> This player provider relies on the upstream HA integrations which have not necessarily been written or optimised for music playback. Therefore, if there is any way to use a MA provider you need to do so. Problems with HA providers will be addressed as resources allow.

## Features

- All media player entities that are available in HA, for which there is no dedicated MA provider, will be available in MA
- All media player types that can be grouped in HA can be grouped in MA via the [Player List](/ui/#player-list) or <a href="https://www.home-assistant.io/integrations/media_player/#action-media_playerjoin" target="_blank" rel="noopener noreferrer">HA action</a>

## Configuration

Before the Player Provider can be added the [Plugin](/ha-plugin/) must be installed. The following image shows what a successful installation looks like

![screenshot](/assets/screenshots/plugin-provider.png)

- In the MA SETTINGS select PLAYER PROVIDERS then ADD A PLAYER PROVIDER then HOME ASSISTANT MEDIA PLAYERS
- In the provider settings, select which players are desired to be utilised. These can be changed at any time.

> [!CAUTION]
> Features are most likely limited with these players. Always prefer a native player provider, if it exists in MA, as that is optimised

## Settings

In addition to the [Individual Player Settings](/settings/individual-player/) the following audio and streaming related settings are available for Home Assistant Media Players. Note that for newer ESPHome-based players (see below), some of these settings are automatically configured based on the device’s reported capabilities and will not be visible:

- <b>Output codec to use for streaming audio to the player.</b> Selects the audio codec for the stream sent to the player. Options are `FLAC` (lossless, compressed), `MP3` (lossy), `AAC` (lossy), or `WAV` (lossless, uncompressed). The default for most HA media players is `MP3` as it has the broadest compatibility across HA player integrations
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery. For most HA players this is user-configurable; for newer ESPHome players it is automatically set from the device’s reported capabilities and hidden. Content with unsupported sample rates will be resampled
- <b>HTTP profile used for send audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues. The default differs between player types
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all player support this correctly, therefore, if there are issues with playback try disabling this setting
- <b>Enforce gapless playback with queue flow mode streaming.</b> Flow mode streams audio as a continuous flow rather than individual tracks, which avoids gaps between tracks. For HA media players, flow mode is always enforced and this setting is not shown, because the wide variation in HA player capabilities makes flow mode the most reliable playback method

### ESPHome Media Players

Newer ESPHome-based media players (such as the HA Voice PE) that report their supported audio formats receive an optimised configuration. The output codec, sample rates, HTTP profile, and ICY metadata settings are automatically configured based on what the device reports and are hidden from the user. These devices generally work well with Music Assistant.

Older or less capable ESPHome-based media players that do not report their audio format capabilities will show the standard settings described above. These devices are generally not recommended for music playback — short audio announcements or web radio may work but full music playback can be unreliable. TIP: you may need to enable the “forced content length” HTTP profile in the player settings.

## Known Issues / Notes

- This player provider is not enabled by default and must be added via MA settings however before it is available you must setup the Home Assistant Plug-in Provider
- Only players that support `play_media` can be used, other players will be filtered out
- MA players will be filtered out
- Synchronisation between this player type and any others is not possible
- In order to support a greater number of players, different streaming profiles are available. If the player doesn't work, stops mid stream or has other playback issues then change the player setting `HTTP Profile used for sending audio` and try each option until the player works
- There are regular reports of issues with the HA integrations `VLC Telnet` and `MPD`. If possible, avoid the use of players supplied by those integrations
