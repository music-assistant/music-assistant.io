---
title: Bose SoundTouch
---


# Bose SoundTouch <img src="/assets/icons/bose-soundtouch-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [Bose SoundTouch](https://www.bose.com/) speakers. Following Bose's end of life of the SoundTouch platform, this provider keeps the speakers usable within Music Assistant by exposing native control and mapping their physical preset buttons to Music Assistant content. Contributed and maintained by [Odn0](https://github.com/Odn0).

!!! note
    This provider is currently in `alpha`. It does not stream audio itself: Music Assistant controls the speaker natively while audio playback is delegated to a linked playback protocol (see [Audio playback](#audio-playback) below).

## Features

- SoundTouch speakers are auto detected by Music Assistant
- Native control of power, volume, mute, play/pause, next/previous track and source selection
- The physical preset buttons (1-6) on the speaker can be mapped to any Music Assistant media item
- SoundTouch speakers play in multiroom sync when grouped, using the native SoundTouch zone API
- MA follows multiroom groups being created/updated/removed from the SoundTouch app
- MA will show metadata when the speaker is playing non-MA content (e.g. Bluetooth, AUX or a built-in streaming service)
- Optional native announcements that play as an overlay, ducking and resuming the current playback

## Audio playback

SoundTouch has no usable API to play an arbitrary stream, so Music Assistant does not send audio to the speaker directly. Instead, the SoundTouch provider handles control and discovery while audio is routed through a **linked playback protocol** on the same device, typically [DLNA](/player-support/dlna/). Thus, the SoundTouch provider depends on the DLNA provider and will enable it automatically.

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manually defined IP addresses.</b> SoundTouch speakers are normally discovered automatically. Use this setting to add speakers by IP address when auto discovery does not work on your network.
- <b>Bose SoundTouch app key.</b> Optional. A Bose SoundTouch developer app key enables sending announcements to the speaker as an overlay that ducks the current music and resumes it afterwards. Leave this empty to disable native announcements (they then play through the linked playback protocol instead).

In addition to the [Individual Player Settings](/settings/individual-player/) the SoundTouch players have the following settings:

- <b>Preset button mappings (1-6).</b> Each of the six physical preset buttons on the speaker can be mapped to a Music Assistant media item. For each preset, choose a media type, type a search term and press <b>Search</b>, then pick a result and press <b>Select</b> to copy its URI into the preset. Pressing that preset button on the speaker will then start the mapped content in Music Assistant. A media URI can also be entered manually instead of using the search flow.

## Known Issues / Notes

- The provider is in an early (`alpha`) stage. The Bose SoundTouch platform has reached end of life and is no longer maintained by Bose, so behaviour can vary between firmware versions and models.
- Native announcements require a Bose SoundTouch developer app key. Without one, announcements are played through the linked playback protocol instead.
