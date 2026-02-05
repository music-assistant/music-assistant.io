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
2. Log in with your MTS account
3. Open Developer Tools (F12) → **Network** tab
4. In the filter box type `music.mts.ru` or leave all. Trigger a request (e.g. play a track, open Search, or refresh the page)
5. Click any request to `music.mts.ru` in the list → **Headers** → **Request Headers**
6. Find **Authorization**. The value is like `OAuth y0_AgAAAAA...` — the token is the part after `OAuth ` (e.g. `y0_AgAAAAA...`)
7. Copy the token and paste it into the Music Assistant KION Music provider configuration

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
