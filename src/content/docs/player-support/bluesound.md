---
title: "Bluesound"
---

# Bluesound <img src="/assets/icons/bluesound-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://www.bluesound.com/" target="_blank" rel="noopener noreferrer">Bluesound</a> (BlueOS) based devices. This component is contributed and maintained by <a href="https://github.com/Cyanogenbot" target="_blank" rel="noopener noreferrer">Cyanogenbot</a>.

## Features

- Bluesound devices are auto detected by Music Assistant

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS`, click `ADD A NEW PROVIDER` and select `Bluesound`.
2. Your Bluesound devices will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

Refer to the [Player Provider Settings](/settings/player-provider/) when setting up this provider as it has no unique settings at the provider level.

Bluesound players use the standard [Individual Player Settings](/settings/individual-player/), including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols). These differ on BluOS:

- <b>Sample rates supported by this player.</b> Everything up to 192 kHz / 24 bit is selected by default, rather than just the two safe rates. Remove the higher ones if your player cannot manage them
- <b>Try to inject metadata into stream (ICY).</b> Defaults to Profile 2 - full info, rather than being off as it is elsewhere

## Known Issues / Notes

- Alternative inputs might not be detected
- Album covers are not visible in the Bluesound app or on devices that have a screen due to limitations in the API
  
## Not Yet Supported

- Announcements
- Synchronised playback
