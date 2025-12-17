---
title: Home Assistant Plugin Provider
description: The Home Assistant Plugin provides a connection from HA to MA
---
# Home Assistant Plugin Provider ![Preview image](assets/icons/ha-logo.png){ width=70 align=right }

The Home Assistant Plugin provides a connection from HA to MA. This will allow HA players to be visible in MA and be streamed to.

To achieve this functionality both the HA plugin and the [HA Player Provider](player-support/ha.md) need to be installed.

## Features

- Allows HA media players to be players in the MA User Interface
- Allows HA entities to be linked to power, mute or volume controls of any player available in MA. This can be useful if the player doesn't support the feature natively or in advanced use cases
 
## Configuration

Before the Plugin can be added the HA Integration must be [installed](integration/installation.md). 

- Navigate to MA SETTINGS>>PROVIDERS and add the plug-in provider
- If using the Music Assistant add-on (i.e. HAOS), you wont need any server details, it should auto connect to the local HA instance
- If using the docker version of the MA server, you will be required to enter the URL to your HA instance and then authenticate

## Known Issues / Notes

This plugin will be automatically installed (and cannot be disabled) if the MA server is running as an add-on to Home Assistant.
 
The Home Assistant Plugin can expose HA entities to MA that can then be mapped to the power, volume or mute functions of the MA player. There are three drop down lists which contain a filtered list of HA entities:

- For power controls, entities that can be turned on/off and have a boolean state will be shown. (i.e. switch, input_boolean and media_player)

- For mute controls, entities that can be turned on/off and have a boolean state will be shown. (i.e. switch, input_boolean and also media_player (where mute state will be mapped))

- For volume controls, entities that can have a numeric value/state will be shown. (i.e. number, input_number and media_player (where volume_level will be mapped))

When an entity is selected it will then appear as an option in an individual player's [Player Controls](https://www.music-assistant.io/player-support/#player-controls) settings.
