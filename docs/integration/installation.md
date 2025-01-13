!!! note
    Ensure the MA server is up and running properly with music and player providers added before trying to link it to HA via the integration

## Installation of the HA Integration

The Integration to connect Music Assistant to Home Assistant is available as an official component in HA core.

- The MA server will normally be discovered automatically by HA and is installed by clicking on CONFIGURE.
- If for some reason you need to add the integration manually then go to HA SETTINGS >> DEVICES & SERVICES >> INTEGRATIONS and click the big `+ ADD INTEGRATION` button. Search for Music Assistant and click to add it. You will need to add the server IP and port (usually 8095). Search for the relevant line in the server logs. For example, `Starting server on 172.30.32.1:8095`.
- Click SUBMIT and the Music Assistant integration is ready for use.

!!! note
    The HA integration will create new media_player entities for those player types which are supported natively by MA. To see the names of those players go to `HA SETTINGS >>  DEVICES & SERVICES >> INTEGRATIONS >> MUSIC ASSISTANT` and view the entities. It is these players that need to be targeted in automations and scripts

## Installation of the Home Assistant Player Provider

Once the HA Integration is installed it is possible to stream to HA media player entities. In order to do so the HA Player Provider needs to be installed.  However, before that can be done the Home Assistant Plug-in provider needs to be installed.

- Navigate to MA SETTINGS>>PROVIDERS and add the plug-in provider
- If using the Music Assistant add-on (i.e. HAOS), you wont need any server details, it should auto connect to the local HA instance
- If using the docker version of the MA server, you will be required to enter the URL to your HA instance and then authenticate
  
Next install the Home Assistant Player Provider

- You need the HA plug-in first before you can use/install this provider
- In the provider settings, you can select which players you want to utilise
- You can only use players that support "play_media", other players will be filtered out
- MA players will also be filtered out

!!! note
    Features are most likely limited with these players. Always prefer a native player provider if it exists in MA as that is optimised
  
## Actions

Music Assistant provides (next to the standard media player actions), several custom actions to allow control over the players and media. See the [Home Assistant documentation](https://www.home-assistant.io/integrations/music_assistant/#additional-actions) for information.

FAQ / Extra Info

- [music_assistant.play_media](../faq/massplaymedia.md)
- [music_assistant.play_annnouncement](../faq/massannounce.md)
- [music_assistant.transfer_queue](../faq/masstransfer.md)
- [music_assistant.search](../faq/masssearch.md)
- [music_assistant.get_library](../faq/get_library.md)
- [music_assistant.get_queue](../faq/get_queue.md)
