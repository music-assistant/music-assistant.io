---
title: Home Assistant Plugin Provider
description: The Home Assistant Plugin provides a connection from HA to MA
---
# Home Assistant Plugin Provider <img src="/assets/icons/ha-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The Home Assistant Plugin provides a connection from HA to MA. It is the bridge Music Assistant uses to reach into Home Assistant.

It does not add any players by itself. To play to Home Assistant media players you also need the [Home Assistant Media Players](/player-support/ha/) provider, which builds on this plugin. The plugin is still worth having on its own, though, for the entity-linked player controls and the AI and text-to-speech features described below.

If you are not sure how this fits with the Home Assistant integration, see [how the pieces fit together](/integration/#how-the-pieces-fit-together).

## Features

- Allows HA entities to be linked to power, mute or volume controls of any player available in MA. This can be useful if the player doesn't support the feature natively or in advanced use cases
- Exposes supported Home Assistant AI-query and text-to-speech capabilities to Music Assistant plugins that need them
- Is a prerequisite for the [Home Assistant Media Players](/player-support/ha/) provider, which is what allows HA media players to be players in the MA User Interface
 
## Configuration

Before the Plugin can be added the HA Integration must be [installed](/integration/installation/). 

- Navigate to MA SETTINGS >> PLUGINS and add the plug-in
- If using the Music Assistant App (i.e. HAOS), you wont need any server details, it should auto connect to the local HA instance
- If using the docker version of the MA server, you will be required to enter the URL to your HA instance and then authenticate

## AI and text-to-speech features

Some Music Assistant plugins, such as [AI Radio](/plugins/ai-radio/), use the Home Assistant plugin as a bridge to Home Assistant's AI/conversation and text-to-speech services.

To use these features:

1. Configure an LLM/conversation integration in Home Assistant. Examples include OpenAI Conversation, Google Generative AI, or a local conversation agent.
2. Configure a text-to-speech entity in Home Assistant and test that it can speak a short message.
3. In Music Assistant, open the Home Assistant plugin settings.
4. Under **Features**, select the Home Assistant **Text-to-Speech entity** Music Assistant should use.
5. Under **Features**, select the Home Assistant **AI Task entity** Music Assistant should use for AI queries.
6. Open the Music Assistant plugin that needs AI or TTS and retry its setup.

The exact LLM model, TTS voice, language, speed, and audio quality are controlled by the configured Home Assistant services. The Home Assistant plugin only selects which Home Assistant `tts` and `ai_task` entities Music Assistant should call.

## Linking Home Assistant entities to player controls

The Home Assistant Plugin can expose HA entities to MA that can then be mapped to the power, volume or mute functions of the MA player. This works for any player in Music Assistant, not just Home Assistant ones, so it is useful where a player has no native support for the function. A power entity might wake an amplifier from standby when playback starts, or switch on the active speakers a player feeds into; a volume or mute entity might drive an amplifier that the player has no direct control over. There are three drop down lists which contain a filtered list of HA entities:

- For power controls, entities that can be turned on/off and have a boolean state will be shown. (i.e. switch, input_boolean and media_player)

- For mute controls, entities that can be turned on/off and have a boolean state will be shown. (i.e. switch, input_boolean and also media_player (where mute state will be mapped))

- For volume controls, entities that can have a numeric value/state will be shown. (i.e. number, input_number and media_player (where volume_level will be mapped))

When an entity is selected it will then appear as an option in an individual player's [Player Controls](/settings/individual-player/#player-controls) settings.

> [!NOTE]
> For power controls, this cannot be used to switch the player itself on and off. If a player is switched off at the mains it drops off the network, Music Assistant marks it unavailable, and the power control is disabled along with everything else. Switch whatever the player feeds into, not the player.

## Known Issues / Notes

This plugin will be automatically installed (and cannot be disabled) if the MA server is running as a Home Assistant App.
