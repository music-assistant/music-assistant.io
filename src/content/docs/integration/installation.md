---
title: "Installing the HA Integration"
---

# Installing the HA Integration <img src="/assets/icons/installation-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The Home Assistant integration is the piece that makes your Music Assistant players appear in Home Assistant, ready to use from the dashboard, in automations and scripts, and by voice. It is also the first step for the reverse direction, since the Home Assistant plugin cannot be added until the integration is in place.

If you are not sure whether this is the piece you need, or how it differs from the Home Assistant plugin or Home Assistant Media Players, start with [how the pieces fit together](/integration/#how-the-pieces-fit-together) and then come back here.

> [!NOTE]
> Ensure the MA server is up and running properly with music and player providers added before trying to link it to HA via the integration

## Adding the integration

The Integration to connect Music Assistant to Home Assistant is available as an official component in HA core.

- The MA server will normally be discovered automatically by HA and is installed by clicking on CONFIGURE.
- If for some reason you need to add the integration manually then go to HA SETTINGS >> DEVICES & SERVICES >> INTEGRATIONS and click the big `+ ADD INTEGRATION` button. Search for Music Assistant and click to add it. You will need to add the server IP and port (usually 8095). This is the local network address of the machine running Music Assistant, for example `192.168.1.27`. If unsure, search for the `Starting server on ...` line in the server logs. Note: if MA is running as a Home Assistant App, the logs may show an internal address such as `172.30.32.1`. In that case use the normal network IP address of your Home Assistant machine instead.
- Click SUBMIT and the Music Assistant integration is ready for use.

> [!NOTE]
> The HA integration will create new media_player entities for those player types which are supported natively by MA. To see the names of those players go to `HA SETTINGS >>  DEVICES & SERVICES >> INTEGRATIONS >> MUSIC ASSISTANT` and view the entities. It is these players that need to be targeted in automations and scripts

## Actions

Music Assistant players respond to Home Assistant's standard <a href="https://www.home-assistant.io/integrations/media_player/#list-of-actions" target="_blank" rel="noopener noreferrer">media player actions</a>. On top of those, the integration adds several actions of its own for finer control over the players and the queue.

All of them are listed in the <a href="https://www.home-assistant.io/integrations/music_assistant/#additional-actions" target="_blank" rel="noopener noreferrer">Home Assistant documentation</a>, which is the reference for their parameters. The pages below go further, with worked examples and the details that the HA documentation does not cover.

- [music_assistant.play_media](/faq/massplaymedia/) — play something specific, chosen in as much detail as you like
- [music_assistant.play_announcement](/faq/massannounce/) — send an audio announcement to a player from a URL
- [music_assistant.transfer_queue](/faq/masstransfer/) — move a queue from one player to another
- [music_assistant.search](/faq/masssearch/) — search across all your music sources at once
- [music_assistant.get_library](/faq/get_library/) — retrieve the full details of items in your library
- [music_assistant.get_queue](/faq/get_queue/) — retrieve the details of a queue
