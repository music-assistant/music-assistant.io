---
title: "Yandex Station"
description: Features and Notes for the Yandex Station Player Provider
---

# Yandex Station

Music Assistant can play music on [Yandex Station](https://station.yandex.ru/) smart speakers over the local [Glagol](https://yandex.ru/dev/dialogs/smart-home/doc/concepts/quasar-devices-overview.html) WebSocket protocol — no cloud roundtrip for audio. Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

The Glagol protocol implementation and authentication flow are based on the [AlexxIT/YandexStation](https://github.com/AlexxIT/YandexStation) Home Assistant integration.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> Stations must be on the **same local network** as the Music Assistant server. The Glagol WebSocket endpoint is only exposed on the LAN and streams are served over plain HTTP from the MA stream server — stations reject HTTPS URLs on the local network.

> [!NOTE]
> Full provider documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-station](https://trudenboy.github.io/ma-provider-yandex-station/)**


## Features

|           |                     |
|:-----------------------|:---------------------:|
| Auto-discovery (mDNS `_yandexio._tcp.local.`) | Yes |
| Transport control (play / pause / stop / seek / next / prev) | Yes |
| Volume control | Yes (0–100, mapped to Glagol 0.0–1.0) |
| Real-time state updates | Yes (Glagol WebSocket push) |
| Lossless audio | Yes (FLAC via MA stream server) |
| TTS announcements | Yes (spoken by Alice) |
| Power control (on/off) | Yes (via Yandex scenarios) |
| Voice-control integration | Yes *(experimental, opt-in)* |
| Multiple instances | No |
| Login Method | QR / Device Flow / Cookies |

### Supported station models

Any Yandex Station that exposes the local Glagol API is supported, including Station Mini, Station Mini 2, Station Midi, Station Max, Station 2, Station Lite, Station Light and Duo Max. Third-party speakers with Alice built in (YandexModule, IRBIS A, DEXP Smartbox, etc.) that expose `_yandexio._tcp.local.` should also work.

## Configuration

Setup requires logging in with a Yandex account that owns the stations. The provider supports three authentication methods, all of which yield the tokens needed for the local Glagol connection.

### Authentication

- **Device Flow** *(recommended)* — Music Assistant shows a short code; confirm it at [yandex.com/device](https://yandex.com/device) in a browser signed in to your Yandex account. Yields a refresh token so the session renews silently in the background.
- **QR code** — Scan the QR shown during setup with the Yandex app (or phone camera) and confirm the login. No refresh token: the session must be renewed manually when it expires.
- **Cookies (advanced fallback)** — Paste Yandex session cookies as a JSON array exported from browser dev tools. Use when the other two methods are blocked by your network or account.

After login, stations on the same network are auto-discovered via mDNS and registered as players.

### Settings

- **Remember session** — store the refresh token / tokens so the provider survives MA restarts without re-authentication. On by default.
- **Voice control integration** *(per-player, advanced)* — off by default. When enabled, the provider detects when you talk to Alice during MA playback and reacts accordingly (see below).

### Voice control integration (experimental)

When enabled in **Settings → Players → \<Your Station\> → Show advanced → Voice control integration**, the provider watches the Glagol state stream and reacts to Alice activity:

| Voice command | Behaviour |
|---|---|
| «Алиса, стоп» | Pauses the Music Assistant queue (resume via the UI). |
| «Алиса, какая погода?» *(or any query)* | Pauses MA while Alice speaks, then auto-resumes playback. |
| «Алиса, громче / тише» | Adjusts volume during playback and auto-resumes the queue. |

## Known Issues / Notes

- Stations must reach the Music Assistant stream server over plain **HTTP** — HTTPS URLs for local addresses are rejected by the station. Make sure the [Stream server base URL](/settings/core/#streams) is an `http://` URL on the LAN.
- The MA stream server must serve a valid `Content-Length` header. Chunked transfer encoding is not accepted by the station and results in silence.
- Stream URLs must carry a file extension the station recognises (`.flac`, `.mp3`). MA's `resolve_stream_url()` already provides this.
- Voice commands «дальше» / «назад» cannot advance the MA queue — Alice does not see the external stream bypass Music Assistant uses, so the station's own "next / previous" targets Alice's content, not the MA queue. Use the MA UI or other voice assistants for queue navigation.
- Seek via voice is not supported for the same reason.
- The Glagol "stop" command behaves as "pause" on the station (the station keeps the current track loaded). The provider treats both MA `pause()` and `stop()` as a Glagol pause.
- Power on/off relies on Yandex scenarios created in the Yandex app; if scenarios are unavailable for a given station model, the power button in MA will be a no-op.
