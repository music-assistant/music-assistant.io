![HACS only](../assets/HACS-only.png)

# Voice Control

This section describes what is required to add a PLAY command which will be understood by Assist and will start playback to a specific player or an area. 

The core HA voice intents support NEXT TRACK, PREVIOUS TRACK, PAUSE, UNPAUSE and VOLUME to a specific player or to an area. HA does not intend to add any more media player service calls at this time so you will need to use custom sentences to cover any other of your requirements. See this [discussion for how](https://github.com/orgs/music-assistant/discussions/2176).

!!! note
    Queue behaviour when adding items by Assist will follow the settings in MA SETTINGS>>CORE>>PLAYER QUEUES CONTROLLER.

Any combination of the following options may be used.

## HA Assist
![easiest label](../assets/label-easiest.png)

The Music Assistant Integration allows the use of custom intents for initiating playback that are kept completely local. As with all HA intents the structure of the request is strict.  

**Installation Requirements**

- You need to be running the latest version of the HA Integration
- You need a voice assistant configured (even if you want to just type in the query) (Examples: [Cloud Pipeline](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) or [Local Pipeline](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/))
- Add a directory to your Home Assistant `config` directory named `custom_sentences/en`
- Add the intents file found [here](https://github.com/music-assistant/intents/blob/main/custom_sentences/en/music_assistant_PlayMediaAssist.yaml), to that directory.
- Also add the responses file found [here](https://github.com/music-assistant/intents/blob/main/custom_sentences/en/responses.yaml), to that directory. 
- Restart HA or navigate to Developer Tools>> YAML>> YAML Configuration reloading and reload CONVERSATION and INTENT SCRIPT

### Usage

All sentences must:

- start with the words `Play` or `Listen to` followed by the item type `artist/track/album/playlist/radio station` and then the name of the item
- for album and track be optionally followed by `by (the) artist` and then the artist's name
- then be optionally followed by an area name or device name
- then, for artist, track, album or playlist, be optionally followed by the phrase `using radio mode`

#### Acceptable variations

There are acceptable variations to some words and inclusion of the word `the` is optional.

#### Examples

```
Play the artist Pink Floyd in the kitchen
Listen to album Jagged Little Pill in the study
Listen to the album Greatest Hits by the artist James Taylor in the kitchen
Play track New Year's Day in the bedroom
Play track New Year's Day in the bedroom using radio mode
Play the song A Hard Day's Night by Billy Joel in the bedroom
Listen to the playlist Classic Rock in the study
Listen to the radio station BBC Radio 1 in the bedroom
```
```
Play the album Classical Nights on the Bedroom Sonos Speaker
Listen to the record Classical Nights on the Bedroom Sonos Speaker
```
```
Play the band U2
```
You can also use the words `speaker` or `player` or `media player` in conjunction with the area name:
```
Play the artist Pink Floyd on the kitchen media player
```

## MA Specific Conversation Agent
![intermediate label](../assets/label-intermediate.png)

During [Chapter 5 of "Year of the Voice"](https://www.youtube.com/live/djEkgoS5dDQ?si=pt8-qYH3PTpsnOq9&t=3699), [JLo](https://blog.jlpouffier.fr/chatgpt-powered-music-search-engine-on-a-local-voice-assistant/) showed something he had been working on to use the OpenAI integration along with Music Assistant. Note that this originally worked by using custom intents and it was difficult to reliably specify a player or an area for the music to be sent to. For this reason the functionality is built into the MA Integration. This method does not require you to expose your entities to the AI LLM, however, media player entities MUST still be exposed internally to Assist. This Integration only sends to openAI part of the request you make and openAI only responds with a JSON formatted response which is then used locally to initiate playback. There is a [small cost](https://openai.com/api/pricing/) (estimated at 0.25 cents per request) associated with the use of ChatGPT.

The reason why you might want to use this option instead of the HA Assist option is that you can use very general requests that will still work such as `Play music by the guy who wrote the score for the lion king in the study`. Thus this option allows for more natural requests. 

**Installation Requirements**

- You need to be running the latest version of the HA Integration
- You need a voice assistant configured (even if you want to just type in the query) (Examples: [Cloud Pipeline](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/) or [Local Pipeline](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/))
- You need to create/add another OpenAI integration that is purely for Music Assistant.
Add the prompt found [here](https://github.com/music-assistant/intents/blob/main/prompt.txt) when completing the configuration. For the ChatGPT version `gpt-4o-mini` has been found to work well.
- Add a directory to your Home Assistant `config` directory named `custom_sentences/en`
- Add the file found [here](https://github.com/music-assistant/intents/blob/main/custom_sentences/en/music_assistant_PlayMediaOnMediaPlayer.yaml), to that directory.
- Navigate to Music Assistant in the Integration view of the HA settings. Click on CONFIGURE in the `Integration entries` section.
- Ensure the correct Conversation Agent is selected and preferably allow the auto-exposure of MA media players to Assist (otherwise you will have to do that manually)

![Preview image](../assets/screenshots/screen6.png)

### Usage

!!! note
    This functionality has only been tested with `Home Assistant` selected as the `Conversation Agent` in the voice assistant configuration.

All sentences must:

- commence with the words `Play` or `Listen to`
- then must have some sort of query for what is desired to be played
- then be optionally followed by or started with an area name or device name
- then, for artist, track, album or playlist, be optionally followed by the phrase `using radio mode`

#### Examples

There are two main formats which differ by where the playing location appears in the sentence. 
```
Play Nirvana in the Study
Listen to Nirvana in the Study
In the Study play Nirvana
In the Study listen to Nirvana
```
!!! note
    You cannot ask to play to an area if there is more than one media player in that area.

You can do exactly the same as the above but use the friendly names or any assist aliases of the media player instead of the area name:

```
Play Nirvana on the Google Home
Play Nirvana on the Google Home using radio mode
Play the Dixie Chicks First Album on Karen's Speaker
```

You can also use the words `speaker` or `player` or `media player` in conjunction with the area name:
```
Play Beds are burning by Midnight Oil on the Kitchen speaker
Play Journey Don’t stop believing on the Study media player
On Karen's Bedroom player listen to Journey Don’t Stop Believing
```

## LLM Conversation Agent
![expert label](../assets/label-expert.png)

**Installation Requirements**

- You need to be running HA 2024.6.0 or later
- You need to be running the latest version of the HA Integration
- You need a voice assistant which uses a LLM AI conversation agent configured (even if you want to just type in the query)
- Preferably allow the auto-exposure of MA media players to Assist (otherwise you will have to do that manually)

### Usage

Any reasonable request to play on a device should be understood by the LLM thus there are no mandatory sentences that must be used. 

In some cases it is still advantageous to also setup the `MA Specific Conversation Agent` described above as it provides a more specific prompt for the AI model to use and the LLM will be made aware of and can use this additional functionality. For example, in testing the LLM did not return a good response for `play a list of 5 classic 80's rock tracks` if the `MA Specific Conversation Agent` described in the previous section was not configured.

!!! warning "Important"
    If you choose not to setup the MA Specific Conversation Agent then you may encounter errors unless you tell the LLM via the prompt to not use the query argument for the MassPlayMediaOnMediaPlayer intent

## Troubleshooting

- Refer to the HA Documentation [Troubleshooting Assist](https://www.home-assistant.io/voice_control/troubleshooting/) and the following
- A response of "Sorry I couldn't understand that" indicates a failure in the pipeline before it reaches the HA integration. In this case consider doing the following.
    - Ensure media players and areas are exposed to Assist
    - Try typing the command
    - Look carefully for differences at the ASCII level for punctuation variation between devices. This ’ and this ' are different
    - Try adding an alias to the MA media player entity (which can be identical to the friendly name)
    - Add the following to your `configuration.yaml` so you can see more detail about the intent failure
```
    logger:
      default: warning
      logs:
        homeassistant.components.conversation: debug
        homeassistant.components.intent: debug
```

- If when trying to play to an area you receive “An unexpected error occurred while handling the intent” then:
    - Check the log for errors related to `No entities matched`. If found then make sure you don't have any entities named identically to your area
    - Ensure you aren't trying to play to an AREA and that area has multiple media players

![HACS only](../assets/HACS-only.png)
