---
title: "Voice Control"
---

# Voice Control <img src="/assets/icons/voice-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Home Assistant has very limited (intent) support for music/media control and there is no support for initiating playback of music by voice. While this is on the horizon to be added, there is still a lot to investigate about how to create a universal way to provide that support natively which works with all media player integrations. 

Currently, there is no built-in support in Home Assistant or the Music Assistant integration for initiating music playback by voice. But don't give up hope because in the interim a (community driven) repository has been created with all of the building blocks needed to add that support. The repository can be found at https://github.com/music-assistant/voice-support

:::note
Queue behaviour when adding items by Assist will follow the settings in MA SETTINGS>>CORE>>PLAYER QUEUES CONTROLLER.
:::

## Play Media Action

The Music Assistant Integration allows the use of custom intents for initiating playback that are kept completely local. Blueprints have been developed to make it easy to get going. If new to Blueprints then review the HA documentation <a href="https://www.home-assistant.io/docs/automation/using_blueprints/" target="_blank" rel="noopener noreferrer">Using Automation Blueprints</a> 

Instructions are in the <a href="https://github.com/music-assistant/voice-support" target="_blank" rel="noopener noreferrer">MA Voice Support Repository</a>. There are options for completely local or LLM based request recognition.

## Other Media Player Actions

The core HA voice intents support NEXT TRACK, PREVIOUS TRACK, PAUSE, UNPAUSE and VOLUME to a specific player or to an area. HA does not intend to add any more media player actions at this time so you will need to use custom sentences to cover any other of your requirements. See this <a href="https://github.com/orgs/music-assistant/discussions/2176" target="_blank" rel="noopener noreferrer">discussion for how</a>.
