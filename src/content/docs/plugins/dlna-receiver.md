---
title: "DLNA Receiver Plugin"
description: Features and Notes for the DLNA Receiver Plugin
pluginGroup: incoming
---

# DLNA Receiver

Music Assistant can act as a UPnP/DLNA MediaRenderer on the local network. External DLNA-aware apps discover it on the network and can cast audio to any MA player. Contributed and maintained by <a href="https://github.com/trudenboy" target="_blank" rel="noopener noreferrer">Mikhail Nevskiy</a>

Once an external app sends a stream URL via the standard DLNA protocol, Music Assistant proxies the audio through its streaming pipeline to the connected player — DLNA speakers, AirPlay receivers, Chromecast, Yandex Station, Squeezebox, etc.

## Features

- Exposes every connected Music Assistant player as its own DLNA MediaRenderer
- Reports playback progress, volume and mute state back to the controlling app
- Handles `SetAVTransportURI`, `Play`, `Pause`, `Stop`, `Seek`, `GetPositionInfo` and RenderingControl volume/mute
- Sends GENA event notifications with the standard UPnP metadata namespaces
- Rejects unsafe outbound stream destinations while keeping local media servers usable
- Keeps a stable UDN per player, so control-point bookmarks survive restarts

## Configuration

Add **DLNA Receiver** under **Settings → Plugins**, then configure:

### Settings

- **Friendly name** — prefix shown to DLNA apps on the network. When multiple players are exposed, the MA player name is appended automatically (e.g. `Music Assistant — Kitchen`). Default: `Music Assistant`.
- **Connected players** — playback-capable Music Assistant players that get a renderer. Leave this empty to expose every eligible player, including players added later. Display, light, visualizer and source clients are not offered.
- **Bind IP** — IPv4 address the plugin listens on. Leave empty to auto-detect. A concrete address is required; `0.0.0.0` and loopback are rejected.
- **HTTP port** — base TCP port for the UPnP HTTP servers. When multiple players are exposed, the next ports are used as well (e.g. `8298`, `8299`, `8300`, …). Default: `8298`.

> **Upgrading from 1.2.x:** the old **Target players** setting is replaced by
> **Connected players** and is not migrated. Select the players once after
> upgrading to 1.3.0.

### Network requirements

- Run Music Assistant with `network_mode: host` in Docker; bridge networking does not pass SSDP multicast.
- The control point and Music Assistant must be on the same L2 network, with UDP `1900` and the configured HTTP ports reachable.
- IPv4 is required. IPv6-only hosts are not supported by the SSDP discovery path.
- Multiple renderers share SSDP port `1900` via `SO_REUSEPORT`; use a platform that supports it.

## Known Issues / Notes

- Select the desired Music Assistant player in the sending app and start playback there. Playback starts on the connected player; the sender does not stream directly to the speaker.
- A small delay between *Play* in the controlling app and audio on the target player is normal — it depends on the target player's buffering.
- Pause is forwarded to the connected player and requires that player to support `PAUSE`; otherwise the sender receives a UPnP error. Pausing the live source from the Music Assistant UI is intentionally not offered.
- The sender's stream URL must use `http://` or `https://`. Loopback, link-local, multicast and other special-purpose destinations are rejected; ordinary private network addresses remain available for local media servers.
- With the separate DLNA **player** provider enabled, the virtual renderers may be discovered as additional Music Assistant players until the player provider learns to skip devices manufactured by Music Assistant. Do not select those virtual players as receiver targets.
