---
title: Home Assistant Player Provider
description: The Home Assistant Player Provider allows MA to playback to HA media player entities
---
# Home Assistant Player Provider ![Preview image](assets/icons/ha-logo.png){ width=70 align=right }

The Home Assistant Player Provider allows MA to playback to HA media player entities

To achieve this functionality the [HA plugin](../ha-plugin.md) needs to be installed.

## Installation of the Home Assistant Player Provider

Before the Player Provider can be added the [Plugin](../ha-plugin.md) must be installed. The following image shows what a successful installation looks like

![screenshot](assets/screenshots/plugin-provider.png)

- In the MA SETTINGS select ADD PLAYER PROVIDER then HOME ASSISTANT MEDIA PLAYERS
- In the provider settings, select which players are desired to be utilised. These can be changed at any time.
- Only players that support "play_media" will be shown; other players will be filtered out
- MA players will also be filtered out

!!! note
    Features are most likely limited with these players. Always prefer a native player provider if it exists in MA as that is optimised
