---
title: MusicCast Player Provider
description: A Description of the MusicCast Player Provider
---

# MusicCast ![Preview image](../assets/icons/musiccast-icon.svg){ width=70 align=right }

Music Assistant has support for [MusicCast](https://au.yamaha.com/en/products/contents/audio_visual/musiccast/index.html) devices. Contributed and maintained by [Fabian Munkes](https://github.com/fmunkes)

## Features

- MusicCast devices are auto detected by Music Assistant
- MusicCast devices will play in perfect sync when grouped
- Crossfading and metadata is supported
- A source can be specified to switch to when a player leaves a group
- MA will show metadata if the player is playing non-MA content
- Source selection of the MusicCast device is possible

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](../settings/player-provider.md) and [Individual Player Settings](../settings/individual-player.md) pages.

## Known Issues / Notes

- Supported devices are those from circa 2015 and later
- If a device has multiple zones (i.e. main + max 3 others) only one of these zones can be streamed to. However, if streaming to main, the other zones can be grouped to that player
- If a non-main zone is either a group member or a group leader, the main zone cannot join that group
- The HA integration and MA integration can be used alongside each other but is not advisable to do so as duplicate player entities will get created unnecessarily
