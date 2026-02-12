---
title: "Fully Kiosk"
---

# Fully Kiosk Browser <img src="/assets/icons/fully-kiosk.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming to devices running the Fully Kiosk Browser Android application

## Features

- This is a basic player
- Multiple Fully Kiosk browser players can be added
  
## Settings

In addition to the [Individual Player Settings](/settings/individual-player/) the Fully Kiosk provider has the following settings:

- <b>IP Address (or hostname) of the device running Fully Kiosk.</b>
- <b>Password to use to connect to the Fully Kiosk API.</b>
- <b>Port to use to connect to the Fully Kiosk API.</b> Default is 2323
- <b>Use HTTPS when connecting to the Fully Kiosk API.</b> This is off by default
- <b>Verify HTTPS certificates.</b> This is on by default
- <b>TLS certificate fingerprint.</b> Optional SHA-256 HEX fingerprint. When provided it must match the device certificate and overrides the `Verify HTTPS certificates` setting

## Known Issues / Notes

- The Fully Kiosk player must be manually added
- A <a href="https://www.fully-kiosk.com/#pricing" target="_blank" rel="noopener noreferrer">paid license</a> for Fully Kiosk is required
- When configuring you must add the device IP address and the Fully Kiosk password
- Once added the device name can be changed, if required, in the specific player configuration
- Some devices cannot handle the FLAC stream so an option in the individual player settings allows for changing to the lossy MP3 codec
- Crossfade is supported if [flow mode](/faq/tech-info/#track-queueing) is enabled in the individual player settings. Enabling flow mode may also solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- This player can be grouped via a [Universal Group](/faq/groups/#universal-groups) but perfect sync is not possible.
