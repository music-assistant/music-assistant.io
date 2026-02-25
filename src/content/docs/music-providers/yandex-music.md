---
title: "Yandex Music"
---

# Yandex Music Provider <img src="/assets/icons/yandex-music-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant has support for [Yandex Music](https://music.yandex.ru). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

This provider is built on top of the [yandex-music-api](https://github.com/MarshalX/yandex-music-api) library.

> [!WARNING]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!NOTE]
> Full provider documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-music](https://trudenboy.github.io/ma-provider-yandex-music/)**

> [!NOTE]
> A Yandex Music Plus subscription is required for lossless (FLAC) quality. Standard accounts can stream at up to 320 kbps.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (with limitations) |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view-home) Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](/ui/#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (with Plus subscription) |
| Login Method | Token |

### Other

- Searching the Yandex Music catalogue is possible
- Items in a users Yandex Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Yandex Music
- Browse is available to explore the Yandex Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Wave, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Radio Mode)
- Multiple Yandex Music accounts can be added simultaneously

## Configuration

Configuration requires obtaining an OAuth token from Yandex Music.

### Obtaining the Token

1. Open your browser and navigate to [Yandex OAuth](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d)
2. Log in with your Yandex account if prompted
3. After authorization, you will be redirected to a URL containing `access_token=YOUR_TOKEN`
4. Copy the token value (the part after `access_token=` and before `&`)
5. Paste this token into the Music Assistant Yandex Music provider configuration

### Settings

- **Audio quality**: Select preferred audio quality. Options: `Efficient (AAC ~64 kbps)`, `Balanced (AAC ~192 kbps)` (default), `High (MP3 320 kbps)`, `Lossless (FLAC)` (requires Yandex Music Plus subscription)

## Known Issues / Notes

- The token may expire and need to be refreshed periodically
- Lossless FLAC quality requires an active Yandex Music Plus subscription; without it the provider falls back to the highest available quality
