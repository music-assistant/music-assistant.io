---
title: "Sonos"
---

# Sonos <img src="/assets/icons/sonos-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Sonos devices. There are two providers available. "Sonos S1" for the S1 devices and "Sonos" for S2.

## Features

- Sonos devices are auto detected by Music Assistant
- Sonos devices from the same series (S1 or S2) will play in sync when grouped
- Sonos devices can optionally be grouped with AirPlay devices

### AirPlay Functionality

In the settings for the Sonos player there is an option to `Enable AirPlay`.

If the feature is disabled (normal Sonos playback) then the Sonos API will be used to stream audio to the Sonos speaker. The audio will be played on that speaker and any speakers that are linked to it.

However, many Sonos devices support the AirPlay 1 <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> protocol and this enables very useful functionality within Music Assistant.

In order to use the AirPlay functionality of Sonos devices the AirPlay provider must also be added via the MA settings. This will result in AirPlay versions of the Sonos devices being created. These can then be hidden (not disabled) to remove duplicates of what will be the same player (Set `Hide this player in the User Interface` to `Always` in the AirPlay player settings).

If the `Enable AirPlay` option is then selected, the playback command(s) will be redirected to the AirPlay player, meaning that the AirPlay protocol will be used to play the audio on that Sonos speaker. Other Sonos players can be synced with this player and additionally it is possible to group any AirPlay capable speakers/players with the AirPlay-player of the Sonos speaker. This means it is possible to play the same audio in perfect sync to a combination of AirPlay and Sonos speakers.

> [!NOTE]
> **Note**
>
> You can also accomplish this by bypassing the whole Sonos integration and only use the AirPlay-equivalent of all the Sonos speakers but this is not preferable as not all Sonos speakers have AirPlay capabilities and syncing a player with the AirPlay protocol introduces a small silence due to the stream restart.

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](../settings/player-provider) and [Individual Player Settings](../settings/individual-player) pages.

## Known Issues / Notes

- Issues have been reported with the Sonos Arc and Unifi networking equipment. Ensure Multicast DNS and IGMP snooping are turned on if you have problems
- Issues have been reported with playback not starting on the `Sonos Connect Amp` and `Play:1`. If this is encountered then set `Enable Queue Flow Mode` to ON in the [individual player settings](../settings/individual-player)
- S1 and S2 devices cannot be grouped together in the same Sync Group. S1 and S2 devices can be grouped via a Universal Group but will not play in sync
- Using the Sonos HA Integration at the same time as the MA Sonos S1 player provider may cause problems. It is not possible to run the HA provider and Sonos S1 provider on the same host and additionally these speakers do not like too many requests from too many sources. It is therefore recommended to only use the MA Sonos S1 player provider
- Syncing Sonos devices with AirPlay devices requires the enabling of an option on the Sonos player
- Sonos has removed RAOP support from the following models: ERA 100, ERA 300, Move 2 and Arc Ultra. As such, AirPlay streaming (from Music Assistant) to these devices is not possible
- Sonos firmware changes has resulted in crossfade not working when the output codec is lossless (i.e. FLAC or WAV). Users can either disable crossfade, switch to the MP3 codec or use AirPlay mode
