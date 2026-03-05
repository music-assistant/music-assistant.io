---
title: "Dashie Kiosk"
---

# Dashie Kiosk <img src="/assets/icons/dashie-kiosk.svg" alt="Dashie Kiosk icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for streaming to Android tablets running the <a href="https://dashieapp.com" target="_blank" rel="noopener noreferrer">Dashie</a> or Dashie Lite kiosk app. Audio is played directly on the device via its REST API.

## Features

- Automatic discovery of Dashie devices via the <a href="https://github.com/jwlerch78/dashie-ha-integration" target="_blank" rel="noopener noreferrer">Dashie HA integration</a>
- Manual configuration by IP address (no Home Assistant required)
- Volume control, pause, resume, and seek support
- Flow mode for gapless audio streaming
- Automatic retry for devices that are offline at startup

## Requirements

**Option A — Via Home Assistant (recommended):**
1. The <a href="https://github.com/jwlerch78/dashie-ha-integration" target="_blank" rel="noopener noreferrer">Dashie HA integration</a> installed in Home Assistant
2. The Home Assistant Plugin enabled in Music Assistant

**Option B — Manual configuration:**
1. The IP address and port of your Dashie Kiosk device (default port: 2323)

## Settings

In addition to the [Individual Player Settings](/settings/individual-player/) the Dashie Kiosk provider has the following settings:

- **Dashie Kiosk devices (via Home Assistant)** — Select Dashie Kiosk tablets discovered through the Dashie HA integration. Requires the Home Assistant Plugin.
- **Manual Dashie Kiosk addresses** *(advanced)* — Manually add Dashie Kiosk tablets by IP address and port (e.g. 192.168.1.100:2323). Use this if you don't have the Dashie HA integration installed.

## Known Issues / Notes

- Devices that are offline when Music Assistant starts will be retried automatically every 60 seconds
- Crossfade is supported if [flow mode](/faq/tech-info/#track-queueing) is enabled in the individual player settings
- This player can be grouped via a [Universal Group](/faq/groups/#universal-groups) but perfect sync is not possible
