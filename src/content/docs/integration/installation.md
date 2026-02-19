---
title: "Installation"
---

# Installation <img src="/assets/icons/installation-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

> [!NOTE]
> Ensure the MA server is up and running properly with music and player providers added before trying to link it to HA via the integration

## Installation of the HA Integration

The Integration to connect Music Assistant to Home Assistant is available as an official component in HA core.

- The MA server will normally be discovered automatically by HA and is installed by clicking on CONFIGURE.
- If for some reason you need to add the integration manually then go to HA SETTINGS >> DEVICES & SERVICES >> INTEGRATIONS and click the big `+ ADD INTEGRATION` button. Search for Music Assistant and click to add it. You will need to add the server IP and port (usually 8095). Search for the relevant line in the server logs. For example, `Starting server on 172.30.32.1:8095`.
- Click SUBMIT and the Music Assistant integration is ready for use.

> [!NOTE]
> The HA integration will create new media_player entities for those player types which are supported natively by MA. To see the names of those players go to `HA SETTINGS >>  DEVICES & SERVICES >> INTEGRATIONS >> MUSIC ASSISTANT` and view the entities. It is these players that need to be targeted in automations and scripts

## Actions

Music Assistant provides (next to the standard media player actions), several custom actions to allow control over the players and media. See the <a href="https://www.home-assistant.io/integrations/music_assistant/#additional-actions" target="_blank" rel="noopener noreferrer">Home Assistant documentation</a> for information.

FAQ / Extra Info

- [music_assistant.play_media](/faq/massplaymedia/)
- [music_assistant.play_annnouncement](/faq/massannounce/)
- [music_assistant.transfer_queue](/faq/masstransfer/)
- [music_assistant.search](/faq/masssearch/)
- [music_assistant.get_library](/faq/get_library/)
- [music_assistant.get_queue](/faq/get_queue/)
