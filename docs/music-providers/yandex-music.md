# Yandex Music Provider ![Preview image](../assets/icons/yandex-music-icon.svg){ width=50 align=right }

Music Assistant has support for [Yandex Music](https://music.yandex.ru). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

This provider is built on top of the [yandex-music-api](https://github.com/MarshalX/yandex-music-api) library.

!!! note
    A Yandex Music Plus subscription is required for lossless (FLAC) quality. Standard accounts can stream at high quality (320 kbps).

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (with limitations) |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC (with Plus subscription) |
| Login Method | Token |

### Other

- Searching the Yandex Music catalogue
- Items in your Yandex Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Yandex Music
- Browse feature to explore Yandex Music catalogue

## Configuration

Configuration requires obtaining an OAuth token from Yandex Music.

### Obtaining the Token

1. Open your browser and navigate to [Yandex OAuth](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d)
2. Log in with your Yandex account if prompted
3. After authorization, you will be redirected to a URL containing `access_token=YOUR_TOKEN`
4. Copy the token value (the part after `access_token=` and before `&`)
5. Paste this token into the Music Assistant Yandex Music provider configuration

### Settings

- **Audio quality**: Select preferred audio quality. The default is `High (320 kbps)` which is available for all accounts. The other option is `Lossless (FLAC)` which requires a Yandex Music Plus subscription

## Known Issues / Notes

- The token may expire and need to be refreshed periodically

## Not yet supported
- Multiple Yandex Music accounts cannot be added as yet
