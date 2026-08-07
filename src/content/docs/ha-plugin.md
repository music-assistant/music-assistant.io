---
title: Home Assistant Plugin Provider
description: The Home Assistant Plugin provides a connection from HA to MA
---
# Home Assistant Plugin Provider <img src="/assets/icons/ha-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The Home Assistant Plugin provides a connection from HA to MA. It is the bridge Music Assistant uses to reach into Home Assistant.

It does not add any players by itself. To play to Home Assistant media players you also need the [Home Assistant Media Players](/player-support/home-assistant/) provider, which builds on this plugin. The plugin is still worth having on its own, though, for the entity-linked player controls and the AI and text-to-speech features described below.

If you are not sure how this fits with the Home Assistant integration, see [how the pieces fit together](/integration/#how-the-pieces-fit-together).

## Features

- Allows HA entities to be linked to power, mute or volume controls of any player available in MA. This can be useful if the player doesn't support the feature natively or in advanced use cases
- Makes the AI and text-to-speech entities you already have in Home Assistant available to Music Assistant features that need them
- Is a prerequisite for the [Home Assistant Media Players](/player-support/home-assistant/) provider, which is what allows HA media players to be players in the MA User Interface
 
## Configuration

Before the Plugin can be added the HA Integration must be [installed](/integration/installation/). 

- Navigate to MA SETTINGS >> PLUGINS and add the plug-in
- If using the Music Assistant App (i.e. HAOS), you wont need any server details, it should auto connect to the local HA instance
- If using the docker version of the MA server, you will be required to enter the URL to your HA instance and then authenticate

Once it is added, the only settings here are the three player control lists described under [Linking Home Assistant entities to player controls](#linking-home-assistant-entities-to-player-controls).

## AI and text-to-speech engines

Some Music Assistant features need to write text with AI, or to speak it out loud. [AI Radio](/plugins/ai-radio/) needs both. [Music Quiz](/plugins/music-quiz/) and [Smart Playlists](/plugins/smart_playlist/) need AI only.

This plugin does neither job itself. It offers up what Home Assistant can already do: every AI task entity becomes an **AI engine** and every text-to-speech entity becomes a **text-to-speech engine**. Nothing is chosen here. Each feature picks what it wants from its own settings.

Other plugins provide engines too. The [OpenAI Compatible plugin](/plugins/openai_compatible/) provides AI engines with no Home Assistant involved at all.

### What you need in Home Assistant

- For an **AI engine**, an <a href="https://www.home-assistant.io/integrations/ai_task/" target="_blank" rel="noopener noreferrer">AI Task</a> entity. These come from an AI integration you add, such as <a href="https://www.home-assistant.io/integrations/openai_conversation/" target="_blank" rel="noopener noreferrer">OpenAI Conversation</a>. Not all AI integrations offer one, so check the page for whichever you prefer
- For a **text-to-speech engine**, a <a href="https://www.home-assistant.io/integrations/tts/" target="_blank" rel="noopener noreferrer">text-to-speech</a> entity. Home Assistant lists the integrations that provide these. Test yours there first and make sure it will speak a short message

The engines only decide which Home Assistant entity gets called. The model, the voice, the language, the speaking speed and the audio quality are all set in Home Assistant.

### Choosing an engine for a feature

Each feature has its own drop-down labelled **AI engine** or **Text-to-speech engine**. Options are named after the plugin and then the entity, so two similar engines can be told apart:

```text
Home Assistant | Google Translate (tts.google_translate_en_com)
```

| Feature | What it needs | Where to change it |
|---|---|---|
| [AI Radio](/plugins/ai-radio/) | AI **and** text-to-speech | **Reconfigure** on the provider's menu, not its normal settings. See [changing the engines later](/plugins/ai-radio/#changing-the-ai-or-text-to-speech-engine-later) |
| [Music Quiz](/plugins/music-quiz/) | AI | Provider settings, under **Features** |
| [Smart Playlists](/plugins/smart_playlist/) | AI | Provider settings, once **AI descriptions** is switched on |

> [!TIP]
> With only one engine of each kind there is nothing to do. A feature takes the only one available and remembers it. The picker matters when you have more than one.

If a feature needs an engine you do not have, its drop-down is greyed out with a message telling you to set up a plugin that provides one. Some features will not finish setting up at all until it exists.

If an engine you chose later disappears, because the entity was removed or renamed in Home Assistant for example, Music Assistant reports it as missing rather than quietly switching to a different one.

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
