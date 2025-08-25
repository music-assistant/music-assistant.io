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
Authentication with Apple Music happens through a Music User Token. Unfortunately, Apple does not officially support 'Login with Apple' for Apple Music, so you will need to obtain your own Music User Token. Instructions were written for Chrome:

1. Navigate to [https://music.apple.com/](https://music.apple.com/)
2. Go to View > Developer > Developer Tools. A new side window will open.
3. Click the 'Application' tab. You might need to expand your window or click the `>>` button
  [![Preview image](../assets/screenshots/apple-music-auth-1.jpg)](../assets/screenshots/apple-music-auth-1.jpg)
4. Under Storage > Cookies, click "https://music.apple.com" and find the entry called "media-user-token"
5. Click it and copy the cookie value and use this in Music Assistant as the 'Music user token'
  [![Preview image](../assets/screenshots/apple-music-auth-2.jpg)](../assets/screenshots/apple-music-auth-2.jpg)
6. Currently in order for the callback to work MA must be accessed via the exposed webserver port when setting up this provider. If MA has been installed as an add-on then the port must be manually exposed as described in the [core settings](../settings/core.md#webserver-frontend-and-api). Thus the URL when setting this provider up must be `http://<YOUR_MA_IP>:8095`. Once successfully configured the webserver port can be disabled again if desired.

!!! note 
    Take note of the "Expires / Max-Age" column. The token will expire on that date and Apple Music within Music Assistant will stop working. The above process must then be repeated to obtain a fresh token.

## Known Issues / Notes
- Due to Apple's proprietary encryption (FairPlay), Lossless and Dolby Atmos versions of songs are not supported
- MA can only play an uploaded track if Apple has linked it to an online version in the Apple Music catalog. If that link is not found, MA will not do the import

## Not yet supported
- Library interaction, such as adding and removing items to your Apple Music library from within Music Assistant
