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

In addition to the [Individual Player Settings](/settings/individual-player/) the HEOS provider also some unique settings in the `Generic settings` section.

- <b>Main controller hostname or IP address.</b> This is the HEOS device that will be act as the main controller, it is not mandatory. This setting can be used to force MA to use a specific device as the controller.
  
## Known Issues / Notes

- The HEOS app does not show any metadata when playing from MA due to API limitations
- Playback to additional zones is supported, but they cannot be turned on/source selected from MA. This needs to be done externally (via Home Assistant for example)
