!!! note
Ensure the MA server is up and running properly with music and player providers added before trying to link it to HA via the integration

## Installation of the HA Integration

The Integration to connect Music Assistant to Home Assistant is available as an official component in HA core.

- The MA server will normally be discovered automatically by HA and is installed by clicking on CONFIGURE.
- If for some reason you need to add the integration manually then go to HA SETTINGS >> DEVICES & SERVICES >> INTEGRATIONS and click the big `+ ADD INTEGRATION` button. Search for Music Assistant and click to add it. You will need to add the server IP and port (usually 8095). Search for the relevant line in the server logs. For example, `Starting server on 172.30.32.1:8095`.
- Click SUBMIT and the Music Assistant integration is ready for use.

!!! note
The HA integration will create new media_player entities for those player types which are supported natively by MA. To see the names of those players go to `HA SETTINGS >>  DEVICES & SERVICES >> INTEGRATIONS >> MUSIC ASSISTANT` and view the entities. It is these players that need to be targeted in automations and scripts

## Actions

Music Assistant provides (next to the standard media player actions), several custom actions to have control over your players and media. See the [Home Assistant documentation](https://www.home-assistant.io/integrations/music_assistant/#additional-actions) for all information.

### FAQ / extra info

- [music_assistant.play_media](../faq/massplaymedia.md)
- [music_assistant.play_annnouncement](../faq/massannounce.md)
- [music_assistant.transfer_queue](../faq/masstransfer.md)
- [music_assistant.search](../faq/masssearch.md) (Coming in HA 2025.1.0)
- [music_assistant.get_library](../faq/get_library.md) (Coming in HA 2025.1.0)
- [music_assistant.get_queue](../faq/get_queue.md) (Coming in HA 2025.1.0)
