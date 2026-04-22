---
title: "DLNA Receiver Plugin"
description: Features and Notes for the DLNA Receiver Plugin
---

# DLNA Receiver

Music Assistant can act as a [UPnP/DLNA MediaRenderer](https://openconnectivity.org/developer/specifications/upnp-resources/upnp/) on the local network, so that external DLNA-aware apps can discover it over SSDP and cast audio to any MA player. Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

External apps send a stream URL via the standard DLNA protocol (`SetAVTransportURI` / `Play`) and Music Assistant proxies the audio through its streaming pipeline to the selected target player — DLNA speakers, AirPlay receivers, Chromecast, Yandex Station, Squeezebox, etc.

> [!CAUTION]
> This is an unofficial implementation of the UPnP/DLNA MediaRenderer server side and is not certified by the UPnP Forum / Open Connectivity Foundation.

> [!WARNING]
> SSDP relies on IPv4 multicast on `239.255.255.250:1900`. When running Music Assistant in Docker, `network_mode: host` is required — bridge networking will prevent control points from discovering the renderer.

> [!NOTE]
> Full plugin documentation: **[trudenboy.github.io/ma-provider-dlna-receiver](https://trudenboy.github.io/ma-provider-dlna-receiver/)**


## Features

|           |                     |
|:-----------------------|:---------------------:|
| Exposes MA players as DLNA MediaRenderers | Yes |
| Device type | `urn:schemas-upnp-org:device:MediaRenderer:1` |
| Multi-player mode (one renderer per MA player) | Yes |
| Stable device identity across restarts | Yes (UUID5-derived UDN) |
| Multiple plugin instances | No |
| UPnP eventing (GENA SUBSCRIBE/NOTIFY) | Yes |

### Supported UPnP services and actions

| UPnP service | Supported actions |
|---|---|
| `AVTransport:1` | `SetAVTransportURI`, `Play`, `Pause`, `Stop`, `Seek`, `GetTransportInfo`, `GetPositionInfo`, `GetMediaInfo` |
| `RenderingControl:1` | `GetVolume`, `SetVolume`, `GetMute`, `SetMute` |
| `ConnectionManager:1` | `GetProtocolInfo`, `GetCurrentConnectionIDs`, `GetCurrentConnectionInfo` |

### Tested DLNA control points

- [BubbleUPnP](https://bubblesoftapps.com/bubbleupnp/) (Android)
- [mconnect Player](https://www.mconnect.cc/) (iOS / Android)
- [foobar2000](https://www.foobar2000.org/) with UPnP/DLNA Renderer, Server, Control Point component
- [Kodi](https://kodi.tv/) (as UPnP control point)
- [Qobuz](https://www.qobuz.com/) (Android — "Cast to" menu)

## Configuration

The plugin is single-instance. After adding it in Music Assistant, configure the following settings:

### Settings

- **Friendly name prefix** — prefix shown to DLNA control points on the network. In multi-player mode the MA player name is appended automatically (e.g. `Music Assistant — Kitchen`). Default: `Music Assistant`.
- **Target players** — how MA players are exposed on the network:
  - *empty* — a single unbound renderer is advertised; playback can be routed to any player via the MA UI after receiving the stream.
  - *comma-separated player IDs* — one dedicated renderer per listed player (e.g. `kitchen,living_room`).
  - `*` — automatically create one renderer per MA player, including players that come online after startup.
- **Bind IP address** — IP address on which the UPnP HTTP server and SSDP listener bind. Leave empty to auto-detect the primary interface.
- **HTTP base port** — base TCP port for the UPnP HTTP servers. In multi-player mode each additional renderer uses the next port (e.g. `8298`, `8299`, `8300`, …). Default: `8298`.

### Multi-player mode

In multi-player mode every MA player is advertised as its own DLNA device with:

- a unique friendly name (`<prefix> — <player name>`);
- a stable UDN derived from the MA player ID via UUID5, so BubbleUPnP / mconnect bookmarks survive restarts;
- its own HTTP port for the UPnP description and SOAP control endpoints.

Control points see them as independent devices — e.g. *Music Assistant — Kitchen*, *Music Assistant — Living Room*, *Music Assistant — Yandex Station*.

## Known Issues / Notes

- Docker: `network_mode: host` is required for SSDP multicast. Without it, SSDP `NOTIFY` / `M-SEARCH` packets cannot leave the container and control points will not discover any renderer.
- Only `http://` and `https://` stream URLs are accepted. `SetAVTransportURI` requests with `file://`, `ftp://` or other schemes, or URIs resolving to loopback / private addresses via redirects, are rejected with SOAP fault `716 (Illegal MIME-Type)` to protect against SSRF.
- MA's audio pipeline may introduce a small delay between the control point's `Play` command and audio output on the target player, depending on the player's buffering.
- The SCPD (service description XML) documents ship as minimal stubs — a handful of strict control points that parse the full state variable table may flag warnings, but all tested apps above work correctly.
- DIDL-Lite metadata from control points is parsed for title / artist / album / artwork / duration and displayed in the MA UI. Input is size-bounded and DOCTYPE/ENTITY declarations are rejected to guard against XML-expansion DoS.
- The renderer participates in SSDP `M-SEARCH` and advertises `alive` / `byebye` on start / stop. If renderers linger in a control point after MA is killed with `SIGKILL`, wait up to 30 minutes (SSDP cache timeout) or re-open the control point to force re-discovery.
