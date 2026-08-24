---
title: "MusicCast"
description: A Description of the MusicCast Player Provider
---

# MusicCast <img src="/assets/icons/musiccast-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://au.yamaha.com/en/products/contents/audio_visual/musiccast/index.html" target="_blank" rel="noopener noreferrer">MusicCast</a> devices. Contributed and maintained by <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a>

## Features

- MusicCast devices are auto detected by Music Assistant
- MusicCast devices will play in perfect sync when grouped
- Crossfading and metadata is supported
- A source can be specified to switch to when a player leaves a group
- MA will show metadata if the player is playing non-MA content
- Source selection of the MusicCast device is possible

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS`, click `ADD A NEW PROVIDER` and select `MusicCast`.
2. Your MusicCast devices will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Individual Player Settings](/settings/individual-player/) the MusicCast provider also some unique settings in the `Output Protocol(s)` section for the player:

- <b>Disable zone handling completely.</b> This disables the automatic source change if playback is switched to another source. It is recommended to first try using the provider with this toggle disabled. However, should issues be encountered during playback then toggle this on, which makes the other two zone settings below inactive. This setting is only available on multi-zone players
- <b>Switch to this non-net source when leaving a group.</b> Players have to switch inputs when leaving a group. This option defines which input is selected. It must be an input that does not need a network connection, and it is recommended to select a source that is unused so that unexpected sound output does not occur upon input switching. This setting is only available on multi-zone players
- <b>Turn off the zone when it leaves a group.</b> Toggle defines the power behaviour when the player leaves a group. This setting is only available on multi-zone players
- <b>Auto-advance queue when the device stops at end of track.</b> On by default. Yamaha receivers occasionally drop the queued next track and stop playing, and this lets Music Assistant notice that and move the queue on. The side effect is that stopping playback yourself in the last few seconds of a track also advances to the next item, so turn it off if you would rather the device's own stop always be respected
- <b>HTTP Profile used for sending audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues. The default is Profile 2 - no content length
- <b>Sample rates supported by this player.</b> Defaults to 44.1kHz / 16 bits and 48kHz / 16 bits, with options offered up to 192kHz / 24 bits. Set these to match what your device handles. Content with unsupported sample rates will be resampled
- <b>Output channel mode.</b> The default is Stereo (both channels) but other options are Left channel only, Right channel only or Mono (both channels)
- <b>Output codec to use for streaming audio to the player.</b> The default is FLAC but other options are MP3, AAC or WAV
- <b>Prefer low-latency WAV for live sources.</b> Sends live sources such as Spotify Connect and AirPlay Receiver as uncompressed audio to reduce the delay before you hear them. Disable this if the player cannot play continuous WAV streams
- <b>Enable queue flow mode.</b> Off by default. Sends all tracks as one continuous audio stream. Use for players that do not natively support gapless or crossfading, or that have difficulty transitioning between tracks. May have the side effect of losing metadata to the player
- <b>Flow Mode sample rate.</b> Only applies while flow mode is enabled. A flow mode stream uses a single sample rate from start to finish, and this decides which one

## Player Options

MusicCast has support for [player options](/player-support/#player-options). Refer to the MA UI and the device's manual for information about the options available

## Known Issues / Notes

- Supported devices are those from circa 2015 and later
- If a device has multiple zones (i.e. main + max 3 others) only one of these zones can be streamed to. However, if streaming to main, the other zones can be joined to that player. This is a limitation of the Yamaha devices. Only one network connection is possible at a time and therefore only one network input can be active at a time. This means a different non-network source must be selected by MA when the device leaves a group. It also means that attempting to use the `Select Source` option to set two different network sources will result in unexpected behaviour 
- The main zone cannot be successfuly joined to a non-main zone. Attempting to do so will result in unexpected behaviour
- When grouping multiple devices which have multiple zones and it is desired that two or more of the device's zones will be joined, the main zone of the joining device must be added first and then the non-main zones can be joined. If only a single zone of another device is to be grouped then that can be done at any time
- The HA integration and MA integration can be used alongside each other but is not advisable to do so as duplicate player entities will get created unnecessarily
- If the receiver switches input source while skipping, then try disabling the zone handling in the player settings
