---
title: Home Assistant Plugin Provider
description: The Home Assistant Plugin provides a connection from HA to MA
---
# Home Assistant Plugin Provider

The Home Assistant Plugin provides a connection from HA to MA. This will allow HA players to be visible in MA and be streamed to.

To achieve this functionality both the HA plugin and the HA Player Provider need to be installed.

## Installation of the Home Assistant Plugin

Before the Plugin can be added the HA Integration must be [installed](integration/installation.md). 

- Navigate to MA SETTINGS>>PROVIDERS and add the plug-in provider
- If using the Music Assistant add-on (i.e. HAOS), you wont need any server details, it should auto connect to the local HA instance
- If using the docker version of the MA server, you will be required to enter the URL to your HA instance and then authenticate

## Installation of the Home Assistant Player Provider

Before the Player Provider can be added the Plugin must be installed. The following image shows what a successful installation looks like

![screenshot](assets/screenshots/plugin-provider.png)

- In the MA SETTINGS select ADD PLAYER PROVIDER then HOME ASSISTANT MEDIA PLAYERS
- In the provider settings, select which players are desired to be utilised. These can be changed at any time.
- Only players that support "play_media" will be shown; other players will be filtered out
- MA players will also be filtered out

!!! note
    Features are most likely limited with these players. Always prefer a native player provider if it exists in MA as that is optimised
