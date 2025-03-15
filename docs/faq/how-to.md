---
title: Frequently Asked Questions - How Do I...?
description: Common Uses for Music Assistant
---

# Use Assist and AI to Play my Music?

The core HA voice intents support NEXT TRACK, (PREVIOUS TRACK is coming), PAUSE, UNPAUSE and VOLUME to a specific player or to an area. HA does not intend to add any more media player actions at this time so you will need to use custom sentences to cover any other of your requirements. See this [discussion for how](https://github.com/orgs/music-assistant/discussions/2176).

# Use volume normalization? How does it work?

After a track has been played by MA once then data is retained for volumes to be normalised across all tracks being played. The setting in MA is the target level for the volume normalisation. MA does not compress the dynamic range (because that is bad for quality) but just adjusts the gain of the entire track based on its overall loudness as measured by the EBU R128 standard. A greater negative value will typically make the track sound less loud but leaves a lot of headroom. However, for each individual track the gain could rise or fall to ensure that the overall loudness of all tracks played is at the selected level. It is recommended to use a value between -23 and -17 LUFS (and -17 is the default starting point). **Do not** set it too high (close to zero) because that can make your music sound distorted due to clipping.

More details [here](tech-info.md#volume-normalization)

# Have my music continue if I change rooms

There are two options.
1. Start streaming to any type of group that includes all the rooms you will move between. Mute all the rooms except the one you are in. When you move rooms just mute and unmute the required players.
2. Use a Sync Group with the dynamic members option turned on, or a Manual Sync group. As you change rooms then join the new room to the existing group. What to do with the other players in the group depends upon the group type and whether the player is the group leader (Sync Group) or holds the queue (Manual Sync). The options are unjoining the player from the group or muting it. For more information read up on [Groups](groups.md) 

# Shuffle Spotify/Playlist/YouTube etc

You don't shuffle the music providers you enable shuffle on the queue for the player and then whatever gets added to the queue gets shuffled. You enable shuffle on the queue from within MA by selecting the Shuffle Icon on the [Player Bar](../ui.md/#player-bar) or you can select the [NOW PLAYING View](../ui.md/#now-playing-view), then the context menu Top Right then ENABLE SHUFFLE or you can do it with yaml as follows:
``` yaml
action: media_player.shuffle_set
target:
  entity_id: media_player.mass_bath
data:
  shuffle: true
```

# Add items to the queue via a script or automation

``` yaml
action: media_player.play_media
target:
  entity_id: media_player.mass_player_entity_goes_here
data:
  media_content_id: NameOfTheAlbumArtistOrPlaylistHere
  media_content_type: music
```

See here for [enqueue options](https://www.home-assistant.io/integrations/media_player/)

See also [music_assistant.play_media action](./massplaymedia.md)

# Start a playlist with a script

Use the `media_player.play_media` action shown above or `music_assistant.play_media` action as described [here](./massplaymedia.md).

# Start a radio stream with an automation

Use the `music_assistant.play_media` action and set the `media_id` as the station name.

# Play a Random Item

Use get_library and an script/automation such as this:

``` yaml
sequence:
  - action: music_assistant.get_library
    data:
      media_type: track
      search: ARTISTNAME
      limit: 1
      order_by: random
    response_variable: random_track
  - action: music_assistant.play_media
    data:
      media_id: "{{ random_track['items'][0].uri }}"
      media_type: track
      enqueue: play
      radio_mode: true
    target:
      entity_id: media_player.ma_kitchen_speaker
```

If you want a queue of tracks then:

``` yaml
sequence:
  - action: music_assistant.get_library
    data:
      media_type: track
      search: ARTISTNAME
      limit: 10
      order_by: random
    response_variable: random_tracks
  - repeat:
      count: "{{ random_tracks | length + 1}}"
      sequence:
        - action: music_assistant.play_media
          data:
            media_id: "{{ random_tracks['items'][repeat.index - 1].uri }}"
            media_type: track
            enqueue: add
          target:
            entity_id: media_player.ma_kitchen_speaker
```

This could be modified for other item types (e.g. radio stations or playlists). 

# Clear the queue with a script or automation

Use the HA action of `media_player.clear_playlist` or the new `music_assistant.play_media` action and select the appropriate enqueue option if wanting to clear the queue and play something else.

# Add radio stations to MA

If you use the [TuneIn provider](../music-providers/tunein.md) then stations that are favourited in your account will appear.

If you use the [RadioBrowser provider](../music-providers/radio-browser.md) then BROWSE the provider and select ADD TO LIBRARY for the station desired.

Direct entry of stations can be done by navigating to the radio stations page and selecting the menu top right and ADD ITEM FROM URL
This will also work for locally hosted streams such as from Icecast. 

# Create playlists or use M3U files

You can create playlists from the MA UI. Adding items can also be done from the UI.

If wanting to create playlists manually acceptable formats are:
```
(file in same folder as playlist):
05 Blue Christmas.flac

and this (file is in subfolder relative to the playlist file):
Elvis Presley/Blue Christmas/05 Blue Christmas.flac

and this (file has an absolute path):
/Users/marcel/media/music/b05 Blue Christmas.flac

and this (full uri):
spotify://track/12345
or
filesystem_smb://track/blah
```

Relative paths to the playlist (e.g.` ../Mariah Carey/Merry Christmas/02 All I Want for Christmas Is You.flac` ) also work.

M3U, M3U8 and PLS playlists are supported. [VLC can be used to easily create playlists](https://www.iptvx.info/?p=1002) that MA can use.

# Go to next/previous radio station via a script

Create an `input_select` with the various radio stations as options. Now you can use next and previous actions to switch between the stations.

# Stop the music after a period of time aka Sleep Timer

``` yaml
sequence:
  - wait_for_trigger:
      - platform: state
        entity_id:
          - media_player.mass_all_rooms
        attribute: media_title
    continue_on_timeout: false
  - action: media_player.turn_off
    data: {}
    target:
      entity_id:
        - media_player.mass_all_rooms
mode: single
alias: Stop after current track
```

Thanks to [AAsikki](https://github.com/Aasikki) who showed us [here](https://github.com/orgs/music-assistant/discussions/830#discussioncomment-3355921)

# Use MA with Mopidy

See here https://github.com/music-assistant/hass-music-assistant/discussions/439

# Get the URI?

For playlists, artists, albums and radio you can simply use the name.

For tracks you can use the name but that may result in ambiguous responses so you can limit by artist name by using `Billy Joel - A Matter of Trust` if that is still ambiguous then the action has additional options which you can use to further restrict the search , for example:

``` yaml
data:
  media_type: track
  media_id: Running on Ice
  artist: Billy Joel
  album: The Bridge
```

Similarly, if the album name is ambiguous you can specify the artist name first (`Queen - Greatest Hits`)

You can also use the `music_assistant.search` or `music_assistant.get_library` actions and the URI will be shown in the results.

!!! note
    URIs which begin with `media-source://` are HA URIs and should not be used when targetting MA player entities. Doing so will result in inconsistent behaviour.

URIs for folders need to be constructed in the form `filesystem_id://folder/relative/path/to/folder` (e.g. `filesystem_smb--5iJ4npRi://folder/ABBA`), The filesystem_id can be obtained by reviewing the output of the `get_library` action. Scan for the key `tracks.provider_mappings.provider_instance` and find one that shows the filesystem_id. Having said that, if there is only one file system provider added to MA then `filesystem_smb` can be used as the filesystem_id.

# Run MA when I have SSL setup on my internal network?

Trying to run MA with SSL is not recommended. Having said that, whilst you can not run the stream service behind SSL you can configure the frontend entirely to your requirements. The default is that the frontend is protected by Ingress in HAOS. For those using docker, it is possible to host it on a desired port and then run a (Ingress) reverse proxy. No support will be provided for these setups, we recommend you use HAOS.

# Get the MA icon in the HA sidebar?

If you are running the addon within the HA host go to SETTINGS>>ADDONS>>MUSIC ASSISTANT and select "Show in sidebar".

If you are using docker then you can use an [iframe panel](https://www.home-assistant.io/dashboards/iframe/) or you can use another custom integration called [hass_ingress](https://github.com/lovelylain/hass_ingress) which allows you to add additional ingress panels to your Home Assistant frontend. 

# Add a rotary encoder with push button to a piCorePlayer

See [here](https://github.com/orgs/music-assistant/discussions/1123#discussioncomment-7945369)

# Access my music on Nextcloud?

The [Nextcloud Music App](https://apps.nextcloud.com/apps/music) supports [Subsonic](../music-providers/subsonic.md) so you can use that provider in MA to connect. 

# Access the MA Views directly via URL

You will need to expose the webserver port to enable this feature. See [here](../installation.md/#server-notes) for the instructions and considerations before doing so.

## Player Selection

A specific player (or the last known) can be selected when opening the view by adding `player=` to the home URL. You can use a MA player name or `true` to open the last known. Player names are not case sensitive.

Examples

- http://192.168.1.1:8095/#/home?player=true
- http://192.168.1.1:8095/#/home?player=Livingroom

## Frameless View

Display the relevant view without the [Player Bar](https://music-assistant.io/ui/#player-bar) or [Main Menu](https://music-assistant.io/ui/#main-menu)

Examples

- http://192.168.1.1:8095/#/albums?frameless=true
- http://192.168.1.1:8095/#/playlists?player=kitchen%20speaker&frameless=true

## Now Playing View

Display the Now Playing view 

Examples

- http://192.168.1.1:8095/#/home?player=true&showFullscreenPlayer=true
- http://192.168.1.1:8095/#?player=true&showFullscreenPlayer=true
- http://192.168.1.1:8095/#/home?player=Livingroom&showFullscreenPlayer=true

# Play a Playlist (or any item) in a Different Order

Playlists will be played in the order that they were created. Changing the displayed order has no impact on the played order. If playing in the displayed order is desired then select the multi-select button in the menu  bar and then use CTRL-A or manually select the tracks and then in the floating ACTIONS menu play the tracks.

# Create Multiple ShairportSync-Instances on the same Host

A tutorial is available [here](https://github.com/orgs/music-assistant/discussions/3562)
