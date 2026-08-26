---
title: "Yandex Music Connect (Ynison) Plugin"
description: Features and Notes for the Yandex Music Connect (Ynison) Plugin
---

# Yandex Music Connect (Ynison)

This plugin makes your Music Assistant players show up inside the official [Yandex Music](https://music.yandex.ru) app, in the same list you would pick a speaker from. Choose one there and the music plays on it, the way Spotify Connect works. Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

Set up the [Yandex Music](/music-providers/yandex-music/) source first. This plugin only handles the player side of things — the music itself comes from that source, and so does the sound quality.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!NOTE]
> A Yandex Music Plus subscription is required for lossless (FLAC) quality.
> Without a subscription, playback falls back to the highest quality available for the account.

> [!NOTE]
> Full plugin documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-ynison](https://trudenboy.github.io/ma-provider-yandex-ynison/)**


## Features

|           |                     |
|:-----------------------|:---------------------:|
| Exposes MA players to the Yandex Music app | Yes |
| Maximum Stream Quality | Lossless FLAC (set on the Yandex Music source) |
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
   - pick your existing **Yandex Music** source, so the plugin can use the sign-in you already have (recommended, and it stays signed in on its own), or
   - pick **Use own token (manual entry)** and paste a token from [Yandex](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d).
3. Choose the **Connected Music Assistant Player** that should play the music when this device is picked in the Yandex Music app.
4. Save. The player now shows up in the Yandex Music app, under its own name, when you go to choose a speaker.

You can add the plugin more than once, one for each player you want to appear in the app.

### Settings

- **Yandex Music source** — use the sign-in from an existing Yandex Music source, or paste your own token instead.
- **Yandex Music Token** — only appears if you chose to paste your own. A token entered here will expire and have to be replaced by hand.
- **Connected Music Assistant Player** — the player that music will come out of. Its name is also what the device is called in the Yandex Music app; renaming the player renames the device.
- **Allow manual player switching** — with this on, picking this plugin as the source on any Music Assistant player moves playback to that player. With it off, playback stays on the player set above.
- **Output sample rate** (advanced) — `Auto` uses 44.1 kHz for compressed music and 48 kHz for lossless, which suits almost everyone. Options: `Auto`, `44100`, `48000`, `96000`.
- **Output bit depth** (advanced) — `Auto` uses 16 bit for compressed music and 24 bit for lossless. Options: `Auto`, `16`, `24`.

## Known Issues / Notes

- A [Yandex Music](/music-providers/yandex-music/) source has to be set up first. This plugin cannot play anything by itself.
- A token you pasted in yourself will expire. Using the sign-in from a Yandex Music source avoids this.
- Sound quality is set on the Yandex Music source, under its **Audio quality** setting.
- The Yandex Music app decides what plays next, not Music Assistant, so the queue lives on the Yandex side. My Wave and radio are the exception, where this plugin keeps the queue topped up itself.
- The connection to Yandex is a long-lived one and will drop and re-establish itself from time to time. This is normal and handled for you.
- Announcements interrupt playback. It picks up again afterwards on players that support it.
- Each copy of the plugin uses one Yandex account. Add more copies for more players, but they each still use a single account.
- After upgrading from a version that offered `Auto` for the connected player, the plugin asks you to pick a player once — hit **Reconfigure** and select one.
