# HEOS ![Preview image](../assets/icons/heos-icon.svg){ width=70 align=right }

Music Assistant has support for Denon & Marantz devices with [HEOS](https://www.denon.com/en-us/denon-heos.html). Contributed and maintained by [Tommatheussen](https://github.com/Tommatheussen).

## Features

- HEOS devices will play in perfect sync when grouped
- MA will follow group being created/updated/removed from the HEOS app
- MA will show metadata if the player is playing non-MA content

## Settings

In addition to the [Individual Player Settings](../settings/individual-player.md) the HEOS provider also some unique settings in the `Generic settings` section.

- <b>Main controller hostname or IP address.</b> This is the device that will be used as the connection point. It is recommended to use a wired device as the connection point.
- <b>Username and password.</b> Login credentials to log in to the HEOS system. This is not needed for basic playback, only to retrieve favorites and music sources which might be directly supported in the future.
  
## Known Issues / Notes

- The HEOS app does not show any metadata when playing from MA due to API limitations

## Not Yet Supported

- Auto device discovery
- Browsing native sources
