# KION Music ![Preview image](../assets/icons/kion-music-icon.svg){ width=50 align=right }

Music Assistant has support for [KION Music](https://music.mts.ru) (MTS Music). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

KION Music is a music streaming service by MTS (Mobile TeleSystems), one of the largest telecom operators in Russia and CIS countries. The provider uses the [yandex-music-api](https://github.com/MarshalX/yandex-music-api) library adapted for the KION API endpoint.

!!! note
    A KION Music subscription may be required for lossless (FLAC) quality. Standard accounts can stream at high quality (320 kbps).

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (with limitations) |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC (with subscription) |
| Login Method | Token |

### Other

- Searching the KION Music catalogue
- Items in your KION Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to KION Music
- Browse feature to explore the KION Music catalogue

## Configuration

Configuration requires obtaining an OAuth token from KION Music.

### Obtaining the Token

1. Open your browser and navigate to [music.mts.ru](https://music.mts.ru)
2. Log in to your account
3. Open Developer Tools (Ctrl+Shift+I)
4. Go to the **Storage** (Firefox) or **Application** (Chrome) tab
5. Under **Local Storage**, find the entry for `https://music.mts.ru`
6. Copy the value of the `ya_token` key
7. Paste this token into the Music Assistant KION Music provider configuration

### Settings

- **Audio quality**: Select preferred audio quality:
    - `High (320 kbps)` - Default, available for all accounts
    - `Lossless (FLAC)` - May require a KION Music subscription

## Known Issues / Notes

- The token may expire and need to be refreshed periodically
- If lossless quality is unavailable, the provider will automatically fall back to the highest available quality
- KION Music is primarily available in Russia and CIS countries

## Not yet supported

- Recommendations and personalized content
- Lyrics display
- Radio mode
