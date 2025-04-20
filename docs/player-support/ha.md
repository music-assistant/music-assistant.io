---
title: Player Support - Home Assistant Players
description: Features of, and instructions for, the use of HA media player entitities in Music Assistant
---

# Home Assistant ![Preview image](../assets/icons/ha-logo.png){ width=70 align=right }

Music Assistant has support for playing to media player entities in Home Assistant.

!!! warning "Be Aware"
    This player provider relies on the upstream HA integrations which have not necessarily been written or optimised for music playback. Therefore, if there is any way to use a MA provider you need to do so. Problems with HA providers will be addressed as resources allow.

## Features

- All media player entities that are available in HA, for which there is no dedicated MA provider, will be available in MA
- All media player types that can be grouped in HA can be grouped in MA via the [Player List](../ui.md#player-list) or [HA action](https://www.home-assistant.io/integrations/media_player/#action-media_playerjoin)

## Configuration

Before the Player Provider can be added the [Plugin](../ha-plugin.md) must be installed. The following image shows what a successful installation looks like

![screenshot](../assets/screenshots/plugin-provider.png)

- In the MA SETTINGS select ADD PLAYER PROVIDER then HOME ASSISTANT MEDIA PLAYERS
- In the provider settings, select which players are desired to be utilised. These can be changed at any time.

!!! note
    Features are most likely limited with these players. Always prefer a native player provider if it exists in MA as that is optimised

## Known Issues / Notes

- This player provider is not enabled by default and must be added via MA settings however before it is available you must setup the Home Assistant Plug-in Provider
- Only players that support `play_media` can be used, other players will be filtered out
- MA players will be filtered out
- Synchronisation between this player type and any others is not possible
- In order to support a greater number of players, different streaming profiles are available. If the player doesn't work, stops mid stream or has other playback issues then change the player setting `HTTP Profile used for sending audio` and try each option until the player works
- If there is no metadata sent to the player then you can trying enabling the option `Try to inject metadata into stream`
- ESPHome based Media Players are in general not recommended for playback of music. Short audio announcements or possibly webradio could work but it is really not suitable for playing music from MA. TIP: you may have to enable the "fixed content length" HTTP profile in the player's settings. Having said that, more powerful ESPHome based players such as the HA Voice PE work well, support FLAC and have some other optimisations.
