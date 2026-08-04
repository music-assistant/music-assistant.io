---
title: "Home Assistant Integration"
---

# Home Assistant Integration <img src="/assets/icons/ha-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The Music Assistant integration for Home Assistant provides a connection from MA to HA. This means that MA players are visible in HA and can be controlled via the HA UI or via automations or scripts.

## How the pieces fit together

Music Assistant and Home Assistant can be joined in both directions, and there are three separate pieces involved. Which ones you need depends on which direction you want.

<a href="/assets/ha-connection-diagram.png"><img src="/assets/ha-connection-diagram.png" alt="Home Assistant Integration, installed in Home Assistant, makes Music Assistant players appear in Home Assistant. The Home Assistant Plugin and Home Assistant Media Players, both installed in Music Assistant, make Home Assistant players appear in Music Assistant. The plugin requires the integration to be installed first." style="width: 800px;" loading="lazy" /></a>

| Piece | You install it in | What it gives you |
|:--|:--|:--|
| [Home Assistant Integration](/integration/installation/) | Home Assistant | Your **MA players appear in HA**, ready for the HA UI, automations, scripts, announcements and voice |
| [Home Assistant Plugin](/ha-plugin/) | Music Assistant | The connection back the other way. On its own it does not add any players; it is the bridge the next row needs |
| [Home Assistant Media Players](/player-support/ha/) | Music Assistant | Your **HA media players appear in MA** as places you can play music to |

Most people only want the first row. Install the integration and your Music Assistant speakers show up in Home Assistant — that is the whole job.

Add the second and third rows only if you also want the reverse: a speaker that Home Assistant knows about, but Music Assistant has no provider for, made available inside Music Assistant. They must be added in that order, because the media players build on the plugin, and the plugin needs the integration.

- [Announcements](/integration/announcements/) from HA in the form of Text to Speech or audio files are fully supported.

- With some additional setup [voice control of MA](/integration/voice/) via HA is also possible

- The integration can connect to the MA server which is running either as an HA addon or as a docker container on the same or another host system

- The integration is an official part of Home Assistant, there is no need to install custom components

See also the <a href="https://www.home-assistant.io/integrations/music_assistant/" target="_blank" rel="noopener noreferrer">documentation from Home Assistant about the Music Assistant integration</a>

