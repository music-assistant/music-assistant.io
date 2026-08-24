---
title: "Voice Control"
---

# Voice Control <img src="/assets/icons/voice-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Voice control means asking Home Assistant Assist to play something, out loud, instead of picking it in the Music Assistant app. You say "play Rumours in the kitchen", Assist works out what you meant, and the music starts on a Music Assistant player.

Starting playback by voice is now built into Home Assistant. It arrived in HA 2025.6 as the Search and Play intent, which was created with Music Assistant in mind, and it needs no blueprints, no custom sentences and no LLM. Music Assistant players work with it out of the box.

The community blueprints described further down are still worth having, but they are no longer the starting point. Reach for them when you want something the built-in sentences cannot express.

> [!NOTE]
> Queue behaviour when adding items by Assist will follow the settings in [**Settings → System → Player Queues**](/settings/core/#player-queues).

## What you need

- **Home Assistant 2025.6 or later.** Later versions understand more sentences.
- **The Music Assistant integration**, which is part of Home Assistant. See the [integration page](/integration/).
- **Your Music Assistant players exposed to Assist**, in HA SETTINGS >> VOICE ASSISTANTS >> EXPOSE. Assist only targets entities you have exposed to it, so a player that is not exposed cannot be asked to play anything.

## Starting playback by voice

Say something like "play Rumours", or name where you want it — "play Rumours in the kitchen", "play Rumours on the kitchen speaker". You can narrow the search by naming the type of item, as in "play the album Rumours", which is worth doing because it stops a track winning when you wanted the album.

If you do not name a player or an area, Home Assistant plays on a player in the area of the device you spoke to. So a voice satellite in the kitchen plays in the kitchen without being told.

Two things are specific to Music Assistant here. The search covers your Music Assistant library **and** every streaming provider you have connected, so you are not limited to what you have already added. And playback starts on the first result: Assist does not read out a list and ask which one you meant, it commits to its best match, so a more specific request gets you a better match.

Home Assistant handles the rest of the playback controls too — next and previous track, pause and resume, volume, and mute. For the current list of what Assist understands, and the exact phrasings in your language, see the Home Assistant documentation on <a href="https://www.home-assistant.io/voice_control/builtin_sentences/" target="_blank" rel="noopener noreferrer">what can Assist do</a>. That list is the authoritative one and it grows with each release, so we do not repeat it here.

## Going further with blueprints

The built-in sentences cover the common request well, but they are deliberately simple. They cannot express "play the album Rumours **by Fleetwood Mac**", they have no way to turn shuffle on as part of the request, and they have no Endless Mix.

For those, the community maintains a set of blueprints in the <a href="https://github.com/music-assistant/voice-support" target="_blank" rel="noopener noreferrer">MA Voice Support repository</a>. They build on the `music_assistant.play_media` action and give you a good deal more control over the request. There are three options: a fully local one using custom sentences, one that adds an LLM to interpret looser phrasing, and one that exposes playback as a tool your LLM conversation agent can call. The repository has the setup steps, the sentences each option accepts, and translations for several languages.

If you are new to blueprints, read the Home Assistant documentation on <a href="https://www.home-assistant.io/docs/automation/using_blueprints/" target="_blank" rel="noopener noreferrer">Using Automation Blueprints</a> first.

> [!NOTE]
> The repository's own README still describes Home Assistant as having no way to start playback by voice. That was written before HA 2025.6 and is now out of date. The blueprints themselves work as documented.

## Custom sentences

Home Assistant does not intend to add further media player actions beyond the ones above, so anything else — shuffle, repeat, clearing the queue, stopping a player, grouping players — needs a sentence you write yourself, wired to a Music Assistant action. See this <a href="https://github.com/orgs/music-assistant/discussions/2176" target="_blank" rel="noopener noreferrer">discussion for how</a>.
