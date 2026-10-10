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

1. In Music Assistant, go to **Settings → Player Providers** and check whether `DLNA` is already listed; it is added automatically on new installs. If it is missing, click **Add a player provider** and select `DLNA`.
2. Your DLNA devices will be discovered automatically and will appear in the player list. Note it can take up to 5 minutes for some devices to be discovered.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

### Manual IP addresses

In normal circumstances Music Assistant will automatically discover all players on the network using multicast discovery ([explained here](/faq/networking/)). If your players are on a different subnet or VLAN than the Music Assistant server (where multicast does not reach), or if a player is not being discovered, its IP address can be manually added in the DLNA provider settings under `ADVANCED SETTINGS >> Manual IP addresses for discovery`. Music Assistant will then contact each configured address directly, without needing multicast, mDNS/SSDP reflection or the network scan option.

- Only IPv4 addresses are accepted; invalid entries are skipped with a warning in the Music Assistant log
- Give the player a fixed IP address (e.g. a DHCP reservation), as Music Assistant will only contact the configured address
- Manually added players are discovered immediately after saving the setting and are then re-checked on the regular discovery cycle, so a player that was powered off appears automatically within 5 minutes of coming back online
- The player must also be able to reach the Music Assistant server for audio streaming and events; if the player is on another subnet/VLAN, ensure the [Stream server](/settings/core/#streams) port is reachable from the player's network (check any firewalls between the networks)

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages, including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols). Settings that differ or are specific to DLNA are:

- <b>[Enable queue flow mode](/settings/individual-player/#enable-queue-flow-mode).</b> On by default for DLNA, because most DLNA players cannot queue up the next track themselves
- <b>Replace Pause with Stop.</b> Some older uPnP players are unable to pause streamed music and ignore the command. Enable this if that occurs and a stop command will be issued for both pause and stop
- <b>[Sample rates supported by this player](/settings/individual-player/#sample-rates-supported-by-this-player).</b> Rates go up to 192 kHz / 24 bit
- <b>Allow crossfades between tracks of different sample rates.</b> Should be disabled if audio glitches occur during track transitions. Only shown for players that support gapless playback, and only while flow mode is switched off

## Known Issues / Notes

- Some devices need special workarounds to enable playback. If playback is not working, look at the Music Assistant logs for clues and report an issue with these logs provided. Unfortunately due to the difficulty in resolving these issues they are low priority. If your device supports a different protocol then use that instead of raising an issue
- If your device is not found then add its IP address manually (see [Manual IP addresses](#manual-ip-addresses)) or try turning on the option `allow network scan for discovery`. Note it can take up to 5 mins for players to be discovered (this also applies if a device is turned back on)
- DLNA speakers do not support crossfading of audio. If you want crossfade and/or full gapless support, [queue flow mode](/faq/tech-info/#track-queueing) must be enabled in the player's settings. Enabling flow mode may solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- It is possible to group DLNA players via a [Universal Group](/faq/groups/#universal-groups) although they may not play in sync
- Although Sonos devices are strictly also based on DLNA, they created their own extra layer on top of that such as crossfade support and many other goodies. It is therefore advised to use the Sonos Player provider with Music Assistant instead of the DLNA provider. MA disables any discovered Sonos DLNA devices by default
- In order to support a greater number of players, different streaming profiles are available. If the player doesn't work, stops mid stream or has other playback issues then change the player setting `HTTP Profile used for sending audio` and try each option until the player works
- Some players (e.g. JRiver Media Center, Naim NDX) do not support FLAC streams, or only support FLAC at certain quality settings (e.g. 44.1/16). If the play command fails, there is no sound, or you hear distortion, try changing `Output Codec to use for streaming audio to the player` (in the player settings under ADVANCED SETTINGS) to one of the other options
