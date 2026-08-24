---
title: "Sonos"
---

# Sonos <img src="/assets/icons/sonos-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Sonos devices. There are two providers available: "Sonos" for modern (S2) devices and "Sonos S1" for the older S1 generation. If your speakers use the current Sonos app they are S2.

## Features

- Sonos devices are auto detected by Music Assistant
- Sonos devices from the same series (S1 or S2) will play in sync when grouped
- Sonos devices can optionally be grouped with AirPlay devices

### AirPlay Functionality

Many Sonos devices support the AirPlay 1 <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> protocol and this enables very useful functionality within Music Assistant. <a href="https://support.sonos.com/en-au/article/stream-airplay-audio-to-sonos" target="_blank" rel="noopener noreferrer">Sonos's AirPlay guide</a> lists which devices are AirPlay capable.

If the Sonos device is grouped with an AirPlay device, or if the default [output protocol](/settings/individual-player/#output-protocols) is changed to `AirPlay`, then the AirPlay protocol will be used for playback. Other Sonos players can be synced with this player (even if they themselves do not have AirPlay, as the native Sonos protocol will be used for that connection). This means it is possible to play the same audio in perfect sync to a combination of AirPlay and Sonos speakers.

> [!NOTE]
> If, as a result of grouping, a switch is required to the AirPlay protocol then a small silence due to the stream restart is to be expected.

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS` and check whether `Sonos` is already listed; it is added automatically on new installs. If it is missing, click `ADD A NEW PROVIDER` and select `Sonos`.
2. If you have devices from the older S1 generation, the `Sonos S1` provider is never added automatically. Click `ADD A NEW PROVIDER` and select `Sonos S1`.
3. Your Sonos devices will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manual IP addresses for discovery.</b> In normal circumstances Music Assistant will automatically discover all players on the network using multicast discovery (mDNS/UPnP, [explained here](/faq/networking/)). In the case of special network setups, or when issues are encountered with one or more players not being discovered, IP addresses can be manually added here. This setting is not recommended for normal use. Also, if players are not on the same subnet as the Music Assistant server, issues may be experienced with streaming; in that case ensure the players can reach the server on the network and double check the base URL configuration of the [Stream server in the settings](/settings/core/#streams)

The Sonos S1 provider has two further settings:

- <b>Enable network scan for discovery.</b> Off by default. Scans the network for players instead of waiting for them to announce themselves. Try it if some of your S1 players are not found automatically, though it should not normally be needed
- <b>Household ID.</b> The ID of your Sonos S1 system. It is detected automatically when left empty, so only fill it in if you have a reason to

In addition to the [Individual Player Settings](/settings/individual-player/) and the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols), the Sonos players have the following settings:

- <b>Prefer low-latency WAV for live sources.</b> On by default for Sonos and Sonos S1. Turn it off if the speaker cannot play continuous WAV streams
- <b>Allow crossfades between tracks of different sample rates.</b> Should be disabled if audio glitches occur during track transitions. It applies while flow mode is off, so it is greyed out once flow mode is enabled

There is no sample rates setting for Sonos players, as each speaker's capability is known already. Current Sonos models take 44.1kHz and 48kHz at 16 or 24 bits, while older models are limited to 16 bits. Sonos S1 players are 44.1kHz and 48kHz at 16 bits.

A Sonos speaker that Music Assistant can also reach another way, over AirPlay for example, shows a section for each protocol under Output Protocol(s). The settings above are the ones in the Sonos section, and the other protocol carries its own separate set, which is why the available settings can look different from one speaker to the next.

## Known Issues / Notes

- Issues have been reported with the Sonos Arc and Unifi networking equipment. If you have problems, ensure `Multicast DNS` and `IGMP snooping` are turned ON in your UniFi network settings. These are router settings that control the announcement messages speakers use to be discovered; see [Networking Basics](/faq/networking/) for an explanation and a full checklist
- Issues have been reported with playback not starting on the `Sonos Connect Amp` and `Play:1`. If this is encountered then set `Enable Queue Flow Mode` to ON in the [individual player settings](/settings/individual-player/)
- S1 and S2 devices cannot be grouped together in the same Sync Group. S1 and S2 devices can be grouped via a Universal Group but will not play in sync
- Using the Sonos HA Integration at the same time as the MA Sonos S1 player provider may cause problems. It is not possible to run the HA provider and Sonos S1 provider on the same host and additionally these speakers do not like too many requests from too many sources. It is therefore recommended to only use the MA Sonos S1 player provider
- Sonos firmware changes has resulted in crossfade not working when the output codec is lossless (i.e. FLAC or WAV). Users can either disable crossfade, switch to the MP3 codec or use AirPlay mode
