# Fully Kiosk Browser ![Preview image](../assets/icons/fully-kiosk.png){ width=70 align=right }

Music Assistant has support for streaming to devices running the Fully Kiosk Browser Android application

## Features

- This is a basic player
- Multiple Fully Kiosk browser players can be added
  
## Known Issues / Notes

- The Fully Kiosk player must be manually added
- A [paid license](https://www.fully-kiosk.com/#pricing) for Fully Kiosk is required
- When configuring you must add the device IP address and the Fully Kiosk password
- Once added the device name can be changed, if required, in the specific player configuration
- Some devices cannot handle the FLAC stream so an option in the settings allows for changing to the lossy MP3 codec
- Crossfade is supported if [flow mode](../faq/tech-info.md/#track-queueing) is enabled in the settings. Enabling flow mode may also solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- This player can be grouped via a [Universal Group](../faq/groups.md#universal-groups) but perfect sync is not possible.
