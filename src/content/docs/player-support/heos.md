---
title: HEOS
---


# HEOS <img src="/assets/icons/heos-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for Denon & Marantz devices with [HEOS](https://www.denon.com/en-us/denon-heos.html). Contributed and maintained by [Tommatheussen](https://github.com/Tommatheussen).

## Features

- HEOS devices are auto detected by Music Assistant
- HEOS devices will play in perfect sync when grouped
- MA will follow group being created/updated/removed from the HEOS app
- MA will show metadata if the player is playing non-MA content

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Main controller hostname or IP address.</b> This is the HEOS device that will be act as the main controller, it is not mandatory. This setting can be used to force MA to use a specific device as the controller.

In addition to the [Individual Player Settings](/settings/individual-player/) the HEOS players have the following settings:

- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC` or `WAV`.
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Please note some older (Generation 1) devices only support up to 48kHz/16bit. Content with unsupported sample rates will be resampled.
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>HTTP profile used for send audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues.
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all player support this correctly, therefore, if there are issues with playback try disabling this setting.
  
## Known Issues / Notes

- Metadata on built-in displays on devices and the HEOS app will show 'URL stream' when playing anything from Music Assistant due to limitations with the HEOS API.
- HEOS-enabled AVRs with multiple zones are represented as 1 player in Music Assistant, similar to how they show on the HEOS app. Playing any content to that player will internally forward the playback to any active zone that has its source set to HEOS. Managing these zones, such as turning them on/off, changing source and managing volume needs to be done externally, e.g. via Home Assistant or the Denon app (if supported), this is a limitation of the HEOS protocol. Changing the volume on the AVR speaker adjusts the volume on all active zones.
