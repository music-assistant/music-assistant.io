# Nico Nico Provider ![Preview image](../assets/icons/niconico-icon.svg){ width=70 align=right }

Music Assistant has support for [Nico Nico Video](nicovideo.jp), a Japanese video-sharing website similar to YouTube, famous for its on-screen scrolling comments that overlay the video. Contributed and maintained by [柴田 Shi-553](https://github.com/Shi-553)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](../ui.md#view-home) Supported | Yes |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | Yes |
| Maximum Stream Quality | Lossy, MP3 (320kbps) |
| Login Method | Cookie or Password+MFA |

### Other

- Allows searching, playback, and library integration
- Keyword search for Tracks, Playlists (Mylist), and Albums (Series)
- Recommendations based on history and follow activity
- Library support
    - Playlists: your own Mylist (read/write)
    - Artists: your following artists
## Configuration
- There are two methods available to authenticate
    - Prefer user_session (cookie)
    - If the cookie is invalid or otherwise fails then there is fall back to Email/Password (+MFA)

## Known Issues / Notes

- If you assign an album to a track, the track-specific thumbnail will not be used

## Not yet supported

- Nil
