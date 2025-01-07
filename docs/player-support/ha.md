---
title: Player Support - Home Assistant Players
description: Features of, and instructions for, the use of HA media player entitities in Music Assistant
---

# Home Assistant ![Preview image](../assets/icons/ha-logo.png){ width=70 align=right }

Music Assistant has support for playing to media player entities in Home Assistant.

The Home Assistant integration consists of 2 parts:

1. The Home Assistant Plug-in provider. This plugin currently does not provide any visible features (but it handles the connection to HA) but will in the future contain some additional features such as allowing the linking of HA player controls (for example an amplifier volume control) to a MA player

2. The Home Assistant Player Provider. This allows you to use your HA players within MA.

!!! warning "Be Aware"
This player provider relies on the upstream HA integrations which have not necessarily been written or optimised for music playback. Therefore, if there is any way to use a MA provider you need to do so. Problems with HA providers will be addressed as resources allow.

## Features

- All media player entities that are available in HA, for which there is no dedicated MA provider, will be available in MA
- All media player types that can be grouped in HA can be grouped in MA via the [Player List](../ui.md#player-list) or HA action

## Installation of the Home Assistant Player Provider

The Player Povider depends on the Home Assistant plugin, so that will need to be installed first.

- Navigate to MA SETTINGS>>PROVIDERS and add the plug-in provider
- If using the Music Assistant add-on (i.e. HAOS), you wont need any server details, it should auto connect to the local HA instance
- If using the docker version of the MA server, you will be required to enter the URL to your HA instance and then authenticate

Next install the Home Assistant Player Provider

- You need the HA plug-in first before you can use/install this provider
- In the provider settings, you can select which players you want to utilise
- You can only use players that support "play_media", other players will be filtered out
- MA players will also be filtered out

!!! note
Features are most likely limited with these players. Always prefer a native player provider if it exists in MA as that is optimised

## Known Issues / Notes

- This player provider is not enabled by default and must be added via MA settings however before it is available you must setup the Home Assistant Plug-in Provider
- In the provider settings, select which players you want to use
- Only players that support `play_media` can be used, other players will be filtered out
- MA players will be filtered out
- Synchronisation between this player type and any others is not possible
- In order to support a greater number of players, different streaming profiles are available. If the player doesn't work, stops mid stream or has other playback issues then change the player setting `HTTP Profile used for sending audio` and try each option until the player works
- If there is no metadata sent to the player then you can trying enabling the option `Try to ingest metadata into stream`
- ESPHome based Media Players are in general not recommended for playback of music. Short audio announcements or possibly webradio could work but it is really not suitable for playing music from MA. TIP: you may have to enable the "fixed content length" HTTP profile in the player's settings. Having said that, more powerful ESPHome based players such as the HA Voice PE work well, support FLAC and have some other optimisations.
