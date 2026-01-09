# Apple Music Provider ![Preview image](../assets/icons/apple-music.svg){ width=70 align=right }

Music Assistant has support for [Apple Music](https://music.apple.com/)! Contributed and maintained by [MarvinSchenkel](https://github.com/MarvinSchenkel)

!!! note
    - A paid subscription is required to add this Music Provider. 
    - Audio playback is not officially supported by Apple, use at your own risk

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media   | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | Yes |
| Maximum Stream Quality | [Lossy AAC (256kbps)](#known-issues-notes) |
| Login Method | Cookie |

### Other

- Searching the Apple Music catalogue


## Configuration
Click **Authenticate with Apple Music**
[![Preview image](../assets/screenshots/apple-music-auth-0.png)](../assets/screenshots/apple-music-auth-0.png)

### Settings

- <b>Manual Music User Token.</b> If the normal authentication flow is unavailable then the token can be added manually here.

## Known Issues / Notes
- Due to Apple's proprietary encryption (FairPlay), Lossless and Dolby Atmos versions of songs are not supported
- Due to limitations in the API favouriting an item will only sync back to Apple Music for albums, playlists and tracks.

## Not yet supported
- Library interaction, such as adding and removing items to your Apple Music library from within Music Assistant
