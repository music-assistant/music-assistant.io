---
title: "DLNA"
description: A description of the DLNA/UPnP Player Provider
---

# DLNA/UPnP <img src="/assets/icons/dlna-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for uPnP/DLNA based devices. This is a (somewhat) universal standard for streaming audio to supported devices. Due to the very inconsistent implementation of this protocol by manufacturers, some players will work great and others will simply not work at all or need workarounds. Other than that, if you have a device that works, you can enjoy fast local control, lossless audio support and in many cases metadata of your playing media.

> [!NOTE]
> Due to the patchy implementation of the DLNA protocol among manufacturers the most likely working configuration is with the QUEUE FLOW MODE on. If you still have problems after ensuring this is enabled then try each of the different streaming profiles

## Features

- DLNA devices are auto detected in Music Assistant

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS` and check whether `DLNA` is already listed; it is added automatically on new installs. If it is missing, click `ADD A NEW PROVIDER` and select `DLNA`.
2. Your DLNA devices will be discovered automatically and will appear in the player list. Note it can take up to 5 minutes for some devices to be discovered.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages. Specific settings available for this player in the Output Protocol(s) section are:

- <b>Enable queue flow mode.</b> Sends all tracks as one continuous audio stream. This is switched on by default for DLNA because most DLNA players cannot queue up the next track themselves. May have the side effect of losing metadata to the player
- <b>Flow Mode sample rate.</b> A flow mode stream uses a single sample rate from start to finish, and this decides which one. Smart (the default) starts at the first track's rate and only restarts the stream when a later track is higher. Other options are Bit-perfect, a fixed 48 kHz or 96 kHz, or Highest supported by player
- <b>Replace Pause with Stop.</b> Some older uPnP players are unable to pause streamed music and ignore the command. Enable this if that occurs and a stop command will be issued for both pause and stop
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. DLNA players are offered up to 192kHz / 24 bits. Content with unsupported sample rates will be resampled
- <b>Output channel mode.</b> The default is Stereo (both channels) but other options are Left channel only, Right channel only or Mono (both channels)
- <b>Output codec to use for streaming audio to the player.</b> The default is FLAC but other options are MP3, AAC or WAV
- <b>Prefer low-latency WAV for live sources.</b> Sends live sources such as Spotify Connect and AirPlay Receiver as uncompressed audio to reduce the delay before you hear them. Disable this if the player cannot play continuous WAV streams
- <b>HTTP Profile used for sending audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues. The default is Profile 2 - no content length
- <b>Try to inject metadata into stream (ICY).</b> Off by default. Enabling this attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Profile 1 - basic info sends title and artist only, Profile 2 - full info adds the album name and cover art. Not all players support this correctly, therefore, if there are issues with playback try a lower profile or disable it
- <b>Allow crossfades between tracks of different sample rates.</b> Should be disabled if audio glitches occur during track transitions. Only shown for players that can queue the next track themselves, and only while flow mode is switched off

## Known Issues / Notes

- Some devices need special workarounds to enable playback. If playback is not working, look at the Music Assistant logs for clues and report an issue with these logs provided. Unfortunately due to the difficulty in resolving these issues they are low priority. If your device supports a different protocol then use that instead of raising an issue
- If your device is not found then try turning on the option `allow network scan for discovery`. Note it can take up to 5 mins for players to be discovered (this also applies if a device is turned back on)
- DLNA speakers do not support crossfading of audio. If you want crossfade and/or full gapless support, [queue flow mode](/faq/tech-info/#track-queueing) must be enabled in the player's settings. Enabling flow mode may solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- It is possible to group DLNA players via a [Universal Group](/faq/groups/#universal-groups) although they may not play in sync
- Although Sonos devices are strictly also based on DLNA, they created their own extra layer on top of that such as crossfade support and many other goodies. It is therefore advised to use the Sonos Player provider with Music Assistant instead of the DLNA provider. MA disables any discovered Sonos DLNA devices by default
- In order to support a greater number of players, different streaming profiles are available. If the player doesn't work, stops mid stream or has other playback issues then change the player setting `HTTP Profile used for sending audio` and try each option until the player works
- Some players (e.g. JRiver Media Center, Naim NDX) do not support FLAC streams, or only support FLAC at certain quality settings (e.g. 44.1/16). If the play command fails, there is no sound, or you hear distortion, try changing `Output Codec to use for streaming audio to the player` (in the player settings under ADVANCED SETTINGS) to one of the other options
