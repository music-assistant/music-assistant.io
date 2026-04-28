---
title: "DLNA Receiver Plugin"
description: Features and Notes for the DLNA Receiver Plugin
---

# DLNA Receiver

Music Assistant can act as a UPnP/DLNA MediaRenderer on the local network. External DLNA-aware apps discover it on the network and can cast audio to any MA player.

Once an external app sends a stream URL via the standard DLNA protocol, Music Assistant proxies the audio through its streaming pipeline to the selected target player — DLNA speakers, AirPlay receivers, Chromecast, Yandex Station, Squeezebox, etc.

## Features

- Exposes Music Assistant players as DLNA MediaRenderers on the local network
- Works as either a single virtual renderer or one renderer per MA player
- Reports playback progress and volume back to the controlling app

## Configuration

After adding it to Music Assistant, configure the following:

### Settings

- **Friendly name prefix** — name shown to DLNA apps on the network. When multiple players are exposed, the MA player name is appended automatically (e.g. `Music Assistant — Kitchen`). Default: `Music Assistant`.
- **Target players** — controls which Music Assistant players appear as DLNA devices:
  - *empty* — a single virtual renderer is advertised; you can route the incoming stream to any player from the MA UI after it starts.
  - *comma-separated player IDs* — one DLNA device per listed player (e.g. `kitchen,living_room`).
  - `*` — automatically expose every MA player, including ones that come online later.
- **Bind IP address** — IP address the plugin listens on. Leave empty to auto-detect.
- **HTTP base port** — TCP port used by the plugin. When multiple players are exposed, the next ports are used as well (e.g. `8298`, `8299`, `8300`, …). Default: `8298`.

## Known Issues / Notes

- To listen to the plugin audio, navigate to the desired player's NOW PLAYING view and then in the menu in the top right, select Source, and choose the desired DLNA Receiver.
- **Docker:** `network_mode: host` is required. Bridge networking blocks DLNA discovery and control points will not see any renderer.
- A small delay between *Play* in the controlling app and audio on the target player is normal — it depends on the target player's buffering.
- For security, only `http://` and `https://` stream URLs are accepted. Other schemes and URLs that resolve to private or loopback addresses are rejected.
