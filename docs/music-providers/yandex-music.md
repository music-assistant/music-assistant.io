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
| [Recommendations](../ui.md#view-home) Supported | Yes (My Wave) |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC (with Plus subscription) |
| Login Method | Token |

### Other

- Searching the Yandex Music catalogue is possible
- Items in a users Yandex Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Yandex Music
- Browse is available to explore the Yandex Music catalogue

## Configuration

Configuration requires obtaining an OAuth token from Yandex Music.

### Obtaining the Token

1. Open your browser and navigate to [Yandex OAuth](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d)
2. Log in with your Yandex account if prompted
3. After authorization, you will be redirected to a URL containing `access_token=YOUR_TOKEN`
4. Copy the token value (the part after `access_token=` and before `&`)
5. Paste this token into the Music Assistant Yandex Music provider configuration

### Settings

#### Audio Quality
- **Audio quality**: Select preferred audio quality. The default is `High (320 kbps)` which is available for all accounts. The other option is `Lossless (FLAC)` which requires a Yandex Music Plus subscription

#### My Wave Configuration

My Wave (Моя волна) is Yandex Music's personalized radio station. The following settings control its behavior and visibility:

##### Feature Toggles

- **Enable Discover (Recommendations)** (default: true): Toggle to show/hide My Wave recommendations on the home page. When enabled, recommendations refresh each time you reload the page for fresh discoveries.

- **Enable My Wave in Browse** (default: true): Show or hide the My Wave folder in the Browse section. When disabled, My Wave will not appear in the provider's Browse view.

- **Enable My Wave Playlist** (default: true): Show or hide My Wave as a virtual playlist in the library. When disabled, My Wave will not appear in the playlists section.

- **Enable My Wave Radio Mode** (default: true): Enable or disable radio mode features for My Wave, including track feedback to Yandex for improved recommendations and radio station format. When disabled, My Wave tracks are treated as regular playlist tracks without sending listening feedback to Yandex.

##### Performance & Display Settings (Advanced)

- **My Wave maximum tracks** (default: 150): Maximum number of tracks to fetch for My Wave playlist. Lower values load faster but provide fewer tracks. Useful for limiting data usage or improving performance on slower connections.

- **My Wave batch count** (default: 3): Number of API calls to make when initially loading My Wave in Browse and Discover sections. Each call returns approximately 20-30 tracks from Yandex. The 'Load more' button always makes 1 additional call. Higher values provide more initial content but take longer to load.

- **Discovery initial tracks** (default: 5): Number of tracks to show initially in the Discover section on the home page. This affects only the first display - all fetched tracks remain available for playback.

- **Browse initial tracks** (default: 15): Number of tracks to show initially when browsing My Wave. Additional tracks can be loaded using the 'Load more' button.

- **Track details batch size** (default: 50): Number of tracks to fetch in one API request when loading track details. This affects the loading speed of playlists and library content. Higher values are faster but may timeout on slow connections. Lower values are more reliable but require more API requests.

##### Performance Tuning Recommendations

**Recommended settings for slow connections:**
```
Track details batch size: 25-30
My Wave batch count: 1-2
My Wave maximum tracks: 50-100
```

**Recommended settings for fast connections with large libraries:**
```
Track details batch size: 75-100
My Wave batch count: 5-10
My Wave maximum tracks: 300-500
```

## Known Issues / Notes

- The token may expire and need to be refreshed periodically

## Not yet supported
- Multiple Yandex Music accounts cannot be added as yet
