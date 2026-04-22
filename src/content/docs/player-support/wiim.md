---
title: "WiiM"
---

# Sonos <img src="/assets/icons/wiim.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

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

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manual IP addresses for discovery.</b> Not recommended for normal use. Refer to the description in the MA UI

In addition to the [Individual Player Settings](/settings/individual-player/) the HEOS players have the following settings:

- <b>HTTP profile used for send audio.</b> This is considered to be an advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Please note some older (Generation 1) devices only support up to 48kHz/16bit. Content with unsupported sample rates will be resampled
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC` or `WAV`
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all player support this correctly, therefore, if there are issues with playback try disabling this setting. Some devices have this setting disabled
- <b>Enforce gapless playback with queue flow mode streaming.</b> Enabling this option will send all tracks as a contnuous audio stream. Use for players that dont natively support gapless or crossfading. Can also help with players that have difficulty transitioning between tracks. May have the side effect of losing metadata to the player

## Known Issues / Notes

- No sound during grouped playback: When multiple WiiM devices are part of an Airplay group, and one of those WiiM devices does not support Airplay, this could result in silence. For example, grouping a Sonos with a WiiM amp (Airplay) and a WiiM sound (no Airplay). Changing the Airplay protocol of the 'bridge device' (i.e. the device that does support Airplay) to 'Prefer Airplay 2' in the advanced settings fixes this
- Song restarted when grouping a WiiM device: A song is restarted the first time a WiiM device is grouped to another WiiM device. This looks like something in the WiiM firmware itself where it is (probably) changing to a 'group playback mode' ensuring compatible sample rate / bit depth. Any subsequent group/ungroup actions should not be affected. We are looking for a workaround for this
- Album art sometimes not visible in the WiiM app: Album arts are sometimes not shown in the WiiM app, because the WiiM firmware cannot handle long URLs sent out by our imageproxy. We are looking into a way to fix this.
