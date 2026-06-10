---
title: "Yandex Music"
---

# Yandex Music <img src="/assets/icons/yandex-music-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant has support for [Yandex Music](https://music.yandex.ru). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

This source is built on top of the [yandex-music-api](https://github.com/MarshalX/yandex-music-api) library.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> A Yandex Music Plus subscription is required for full functional of source and lossless (FLAC) quality.
> Without a subscription, the source's's full-fledged operation is not guaranteed.

> [!NOTE]
> Full source documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-music](https://trudenboy.github.io/ma-provider-yandex-music/)**


## Features

|           |                     |
|:-----------------------|:---------------------:|
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](/ui/#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (with Plus subscription) |
| Login Method | Device Flow / QR Code / Token |

### Other

- Searching the Yandex Music catalogue is possible
- Items in a users Yandex Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Yandex Music
- Browse is available to explore the Yandex Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Wave, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- **My Wave** personalised radio with Yandex's long-lived rotor session (signals like/dislike, skips and full plays back to the recommendation algorithm)
- **Wave Modes** — 11 one-click presets for My Wave (Discover / Favorites / Popular, Calm / Active / Fun / Sad, Russian / Non-Russian / Without Words)
- **My Presets** — save your own named combinations of diversity, mood and language, re-launch them from Browse without fiddling with settings
- Similar tracks are available from the track context menu (used by Radio Mode); when a wave track plays, Radio Mode continues the same Yandex-curated session instead of branching into an unrelated similar-tracks stream
- **Podcasts** are synced from your Yandex library, browsable with episodes, and stream natively
- **Audiobooks** are synced, browsable with chapters, and stream natively. Playback position round-trips between Music Assistant and Yandex's own apps, so resume points stay in sync
- Multiple Yandex Music accounts can be added simultaneously

## Configuration

The source supports three authentication methods. Device Flow is the recommended path — it's non-interactive, works on headless setups, and produces refreshable credentials.

### Option 1: Device Flow (recommended)

1. In Music Assistant, add the Yandex Music source and click **Login with device code**
2. A short verification URL and user code appear — open the URL on any device (phone, another computer) and enter the code
3. Approve the request in your Yandex account
4. Music Assistant receives the tokens automatically and finishes setup. Session tokens auto-refresh — no periodic re-login required.

### Option 2: QR Code

1. In Music Assistant, add the Yandex Music source and click **Login with QR code**
2. Scan the QR with the Yandex app on your phone (signed into the account you want)
3. Approve in the app — Music Assistant picks up the credentials

### Option 3: Manual OAuth Token (advanced)

For headless setups where neither device flow nor QR works:

1. Open your browser and navigate to [Yandex OAuth](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d)
2. Log in with your Yandex account if prompted
3. After authorization, you will be redirected to a URL containing `access_token=YOUR_TOKEN`
4. Copy the token value (the part after `access_token=` and before `&`)
5. Paste this token into the Music Assistant Yandex Music source configuration (under advanced settings)

### Settings

- **Audio quality**: Select preferred audio quality. Options: `Efficient (AAC ~64 kbps)`, `Balanced (AAC ~192 kbps)` (default), `High (MP3 320 kbps)`, `Lossless (FLAC)` (requires Yandex Music Plus subscription)
- **Remember session**: keeps the refresh token so tokens renew automatically (on by default for Device Flow / QR)
- **My Wave custom presets**: advanced-settings builder for saving named wave combinations (name + up to three dropdowns). Saved entries surface under **Radio → My Presets** in Browse

## Known Issues / Notes

- Manually-obtained OAuth tokens expire and need to be refreshed periodically; Device Flow / QR setups auto-refresh
- Lossless FLAC quality requires an active Yandex Music Plus subscription; without it the source falls back to the highest available quality
- Lossless FLAC streams are fetched in 4 MB windows to work around Yandex CDN per-connection limits, ensuring uninterrupted playback for tracks of any length
- Tracks played through Music Assistant currently **do not** appear in the Yandex Listening History feed — that feed is only written from an active Ynison WebSocket session. If you need Yandex-side history, play through the native Yandex app (or the companion [Yandex Music Connect (Ynison)](https://music-assistant.io/plugins/yandex-ynison/) plugin)
