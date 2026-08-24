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

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a new provider** and select `HEOS`.
2. Your HEOS devices will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Main controller hostname or IP address.</b> This is the HEOS device that will be act as the main controller, it is not mandatory. This setting can be used to force MA to use a specific device as the controller
- <b>Command timeout value.</b> How long Music Assistant waits for a HEOS device to answer a command, in seconds. The default is 25 and it can be set between 10 and 60. Increase it if you see command timeout messages in the log

HEOS players use the standard [Individual Player Settings](/settings/individual-player/), including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols).

HEOS players always play the queue as one continuous stream, so there is no flow mode setting to change. There is also no sample rates setting because HEOS players report their own capability. First generation HEOS hardware is limited to 48kHz / 16 bits, while HS2 and newer models handle up to 192kHz / 24 bits.

## Known Issues / Notes

- Metadata on built-in displays on devices and the HEOS app will show 'URL stream' when playing anything from Music Assistant due to limitations with the HEOS API.
- HEOS-enabled AVRs with multiple zones are represented as 1 player in Music Assistant, similar to how they show on the HEOS app. Playing any content to that player will internally forward the playback to any active zone that has its source set to HEOS. Managing these zones, such as turning them on/off, changing source and managing zone volume needs to be done externally, e.g. via Home Assistant or the Denon app (if supported), this is a limitation of the HEOS protocol. You can map a Home Assistant entity as the power control for the player in the [Individual Player Settings](/settings/individual-player/#player-controls), then use Home Assistant to turn the zones on and switch them to the correct input when that entity changes state. The AVR will behave in the following manner by default:
  - Changing the volume on the Music Assistant player adjusts the volume on all active HEOS zones.
  - Starting a stream on the Music Assistant player when at least 1 HEOS zone is active, will start playing the stream on those active zones.
  - Starting a stream on the Music Assistant player when no HEOS zones are active, will turn on the main zone, set it's source to HEOS and start playing on the main zone.
