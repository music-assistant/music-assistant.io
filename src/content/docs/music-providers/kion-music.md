---
title: "KION Music"
---

# KION Music <img src="/assets/icons/kion-music-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant has support for [KION Music](https://music.mts.ru) (MTS Music). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

KION Music is a music streaming service by MTS (Mobile TeleSystems), one of the largest telecom operators in Russia and CIS countries. The provider uses the [yandex-music-api](https://github.com/MarshalX/yandex-music-api) library adapted for the KION API endpoint.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by MTS or KION.

> [!WARNING]
> A KION Music subscription is required for full functionality of the provider and lossless (FLAC) quality.
> Without a subscription, the provider's full-fledged operation is not guaranteed.

> [!NOTE]
> Full provider documentation (RU/EN): **[trudenboy.github.io/ma-provider-kion-music](https://trudenboy.github.io/ma-provider-kion-music/)**

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view-home) Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](/ui/#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (with subscription) |
| Login Method | Token |

### Other

- Searching the KION Music catalogue
- Items in your KION Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to KION Music
- Browse is available to explore the KION Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Mix, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Radio Mode)
- Multiple KION Music accounts can be added simultaneously

## Configuration

Configuration requires obtaining a token from KION Music.

### Obtaining the Token

1. Open your browser and navigate to [music.mts.ru](https://music.mts.ru)
2. Log in to your account
3. Open Developer Tools (Ctrl+Shift+I)
4. Go to the **Storage** (Firefox) or **Application** (Chrome) tab
5. Under **Local Storage**, find the entry for `https://music.mts.ru`
6. Copy the value of the `ya_token` key
7. Paste this token into the Music Assistant KION Music provider configuration

### Settings

- **Audio quality**: Select preferred audio quality. Options: `Efficient (AAC ~64 kbps)`, `Balanced (AAC ~192 kbps)` (default), `High (MP3 320 kbps)`, `Lossless (FLAC)` (requires KION Music subscription)

## Known Issues / Notes

- The token may expire and need to be refreshed periodically
- Lossless FLAC quality requires an active KION Music subscription; without it the provider falls back to the highest available quality
- KION Music is primarily available in Russia and CIS countries

