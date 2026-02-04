# Zvuk Music ![Preview image](../assets/icons/zvuk-icon.svg){ width=50 align=right }

Music Assistant has support for [Zvuk Music](https://zvuk.com). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

This provider is built on top of the [zvuk-music](https://github.com/trudenboy/zvuk-music) library.

!!! note
    A Zvuk Music subscription is required for lossless (FLAC) quality. Free accounts can stream at high quality (320 kbps) with limitations.

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

- Searching the Zvuk Music catalogue is possible
- Items in a users Zvuk Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Zvuk Music
- Playlist creation and editing is supported

## Configuration

Configuration requires obtaining an X-Auth-Token from Zvuk Music.

### Obtaining the Token

1. Log in to [zvuk.com](https://zvuk.com) in your web browser
2. Navigate to [https://zvuk.com/api/tiny/profile](https://zvuk.com/api/tiny/profile)
3. Copy the `token` value from the JSON response
4. Paste this token into the Music Assistant Zvuk Music provider configuration

### Settings

- **Audio quality**: Select preferred audio quality
    - `High (320 kbps)` - Available for all accounts (default)
    - `Lossless (FLAC)` - Requires a Zvuk Music subscription

## Known Issues / Notes

- The token may expire and need to be refreshed periodically
- If lossless quality is unavailable (no subscription), the provider will automatically fall back to the highest available quality

## Not yet supported

- Recommendations and personalized content
- Lyrics display
- Radio mode
