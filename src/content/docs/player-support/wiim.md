---
title: "WiiM"
---

# WiiM <img src="/assets/icons/wiim.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming music to [WiiM devices](https://www.wiimhome.com/). 

## Features

- WiiM devices are auto detected by Music Assistant
- WiiM devices can optionally be grouped with AirPlay devices
- Up to 192khz / 24 bit support

### AirPlay Functionality

Some WiiM devices support the AirPlay 1 <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> protocol and/or the Airplay 2 protocol and this enables very useful functionality within Music Assistant.

If the WiiM device is grouped with an AirPlay device, or if the default [output protocol](/settings/individual-player/#output-protocols) is changed to `AirPlay`, then the AirPlay protocol will be used for playback. Other WiiM players can be synced with this player (even if they themselves do not have AirPlay, as the native WiiM will be used for that connection). This means it is possible to play the same audio in perfect sync to a combination of AirPlay and WiiM speakers.

> [!NOTE]
> If, as a result of grouping, a switch is required to the AirPlay protocol then a small silence due to the stream restart is to be expected.

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a player provider** and select `WiiM`.
2. Your WiiM devices will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manual IP addresses for discovery.</b> Not recommended for normal use. Refer to the description in the MA UI

WiiM players use the standard [Individual Player Settings](/settings/individual-player/), including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols). One of those differs here:

- <b>[Sample rates supported by this player](/settings/individual-player/#sample-rates-supported-by-this-player).</b> Unusually, everything up to 192 kHz / 24 bit is selected by default. Older Generation 1 devices only support up to 48 kHz / 16 bit, so remove the higher rates on those
- <b>Allow crossfades between tracks of different sample rates.</b> Should be disabled if audio glitches occur during track transitions. Only applies while flow mode is off, so it is greyed out once flow mode is enabled

Generic LinkPlay speakers such as Edifier are handled differently to WiiM and Audio Pro devices. Music Assistant controls them but hands the audio to another output protocol, so their audio settings appear under that protocol's own section rather than the list above.

## Known Issues / Notes

- No sound during grouped playback: When multiple WiiM devices are part of an Airplay group, and one of those WiiM devices does not support Airplay, this could result in silence. For example, grouping a Sonos with a WiiM amp (Airplay) and a WiiM sound (no Airplay). Changing the Airplay protocol of the 'bridge device' (i.e. the device that does support Airplay) to 'Prefer Airplay 2' in the advanced settings fixes this
- Song restarted when grouping a WiiM device: A song is restarted the first time a WiiM device is grouped to another WiiM device. This looks like something in the WiiM firmware itself where it is (probably) changing to a 'group playback mode' ensuring compatible sample rate / bit depth. Any subsequent group/ungroup actions should not be affected. We are looking for a workaround for this
- Album art sometimes not visible in the WiiM app: Album art is sometimes not shown in the WiiM app because the WiiM firmware cannot handle long URLs sent out by our imageproxy. We are looking into a way to fix this.
