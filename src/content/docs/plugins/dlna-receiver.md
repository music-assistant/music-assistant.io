---
title: "DLNA Receiver Plugin"
description: Features and Notes for the DLNA Receiver Plugin
pluginGroup: incoming
---

# DLNA Receiver

Music Assistant can act as a UPnP/DLNA MediaRenderer on the local network. External DLNA-aware apps discover it on the network and can cast audio to any MA player. Contributed and maintained by <a href="https://github.com/trudenboy" target="_blank" rel="noopener noreferrer">Mikhail Nevskiy</a>

Once an external app sends a stream URL via the standard DLNA protocol, Music Assistant proxies the audio through its streaming pipeline to the selected target player — DLNA speakers, AirPlay receivers, Chromecast, Yandex Station, Squeezebox, etc.

## Features

- Exposes Music Assistant players as DLNA MediaRenderers on the local network
- Exposes a separate virtual renderer for every available MA player by default
- Reports playback progress and volume back to the controlling app

## Configuration

After adding it to Music Assistant, configure the following:

### Settings

- **Friendly name prefix** — name shown to DLNA apps on the network. When multiple players are exposed, the MA player name is appended automatically (e.g. `Music Assistant — Kitchen`). Default: `Music Assistant`.
- **Target players** — select the Music Assistant players to expose as DLNA devices. Leave this empty to expose every eligible player, including players added later. Each player appears as a separate DLNA device.
- **Bind IP address** — IP address the plugin listens on. Leave empty to auto-detect.
- **HTTP base port** — TCP port used by the plugin. When multiple players are exposed, the next ports are used as well (e.g. `8298`, `8299`, `8300`, …). Default: `8298`.

## Known Issues / Notes

- Select the desired Music Assistant player in the sending app and start playback there.
- A small delay between *Play* in the controlling app and audio on the target player is normal — it depends on the target player's buffering.
- The sender's stream URL must use `http://` or `https://`. Loopback, link-local, and other special-purpose destinations are rejected; ordinary private network addresses remain available for local media servers.
