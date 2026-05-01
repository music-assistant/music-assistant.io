---
title: "Yandex Music Connect (Ynison) Plugin"
description: Features and Notes for the Yandex Music Connect (Ynison) Plugin
---

# Yandex Music Connect (Ynison)

Music Assistant can expose its players as playback devices in the official [Yandex Music](https://music.yandex.ru) app via the **Ynison** protocol (Yandex's equivalent of Spotify Connect). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

This plugin depends on the [Yandex Music](/music-providers/yandex-music/) source, which must be configured first — Ynison only handles the player/device side, while audio streaming and quality are driven by the linked Yandex Music provider.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> A Yandex Music Plus subscription is required for lossless (FLAC) quality.
> Without a subscription, playback falls back to the highest quality available for the account.

> [!NOTE]
> Full plugin documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-ynison](https://trudenboy.github.io/ma-provider-yandex-ynison/)**


## Features

|           |                     |
|:-----------------------|:---------------------:|
| Exposes MA players to the Yandex Music app | Yes |
| Protocol | Ynison (JSON over WebSocket) |
| Maximum Stream Quality | Lossless FLAC (inherited from Yandex Music source) |
| Transport controls | play / pause / seek / next / previous |
| Radio / My Wave queues | Yes |
| Multiple instances | Yes |
| Login Method | QR code (recommended) or manual token |

### Supported actions from the Yandex Music app

| Action in Yandex Music app | Result |
|---|---|
| Select MA device from the playback-target list | Playback switches to the configured MA player |
| Play / pause / stop | Forwarded to the MA player |
| Seek within current track | Forwarded to the MA player |
| Next / previous / skip | Advances the Yandex queue, MA plays the new track |
| Start radio / My Wave | MA plays the radio stream and replenishes the queue as it runs out |

## Configuration

> [!NOTE]
> Configure the [Yandex Music](/music-providers/yandex-music/) source **before** adding this plugin — the plugin can borrow its credentials automatically, which is the recommended setup.

### Setup

1. In Music Assistant, add the **Yandex Music Connect (Ynison)** plugin from the providers list.
2. For **Yandex Music source**, either:
   - select an existing **Yandex Music** instance to borrow its OAuth token (recommended — token refresh stays automatic), or
   - select **Use own token (manual entry)** and paste a Yandex Music token obtained from [Yandex OAuth](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d).
3. Select the **Connected Music Assistant Player** that should receive audio when the device is picked in the Yandex Music app. Use `Auto` to prefer a currently playing player.
4. Save the configuration — the device name from **Device name in Yandex Music** will then appear in the Yandex Music app's playback-target list.

Multiple plugin instances may be added (one per target player) — each needs its own `mass_player_id`.

### Settings

- **Yandex Music source** — borrow the OAuth token from an existing Yandex Music provider instance, or switch to manual-token entry.
- **Yandex Music Token** — only shown when not borrowing. Paste an OAuth token manually; note that token refresh is **not** automatic in this mode.
- **Connected Music Assistant Player** — the MA player that acts as the playback target for this device. `Auto` picks a currently playing player, falling back to the first available one.
- **Allow manual player switching** — when enabled, selecting this plugin as a source on any MA player switches playback to that player. When disabled, playback is fixed to the configured default player.
- **Output sample rate** (advanced) — PCM sample rate sent to the MA player. `Auto` selects 44.1 kHz for lossy sources and 48 kHz for lossless. Options: `Auto`, `44100`, `48000`, `96000`.
- **Output bit depth** (advanced) — PCM bit depth. `Auto` selects 16-bit for lossy sources and 24-bit for lossless. Options: `Auto`, `16`, `24`.
- **Device name in Yandex Music** (advanced) — how this device appears in the Yandex Music app's playback-target list.

## Known Issues / Notes

- The plugin requires a configured [Yandex Music](/music-providers/yandex-music/) source — it cannot stream audio on its own.
- Manually entered OAuth tokens do not auto-refresh; borrow credentials from a Yandex Music instance to keep tokens refreshed automatically.
- Playback quality is controlled by the linked Yandex Music source — change the **Audio quality** setting there to switch between lossy and lossless.
- Yandex controls the queue (passive-player model): Music Assistant signals track completion and waits for the Yandex Music app or Ynison backend to push the next track. The only exception is Radio / My Wave, where the plugin replenishes the queue via the Yandex Music REST API.
- Ynison connections are long-lived WebSockets; brief reconnects (with exponential backoff) may occur and are handled transparently.
- Announcements will interrupt the Ynison stream; playback resumes afterwards where supported by the MA player.
- Only one Yandex account is used per plugin instance; add more instances to target additional players, but each instance still maps to a single Yandex account.
