---
title: Music Assistant Emby Provider
description: Documentation for using the Emby music source
---

# Emby <img src="/assets/icons/emby-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for accessing music hosted on an [Emby Server](https://emby.media/). This component was contributed and is maintained by [hatharry](https://github.com/hatharry).

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC (192 kHz, 24 bit) |
| Login Method | Password |

### Other

- Searching the 'Music' libraries on an Emby server is possible
- Scrobbling is sent back to the Emby server

## Configuration:
The following information must be supplied to configure this provider:

- <b>Server.</b> For example, https://music.domain.tld/ or http://192.168.1.4:8096/ (for a local server)
- <b>Username.</b> The username for the account to be used by Music Assistant to access the server
- <b>Password.</b> The password for the account

## Known Issues / Notes
- Emby server must be accessible from the Music Assistant instance for library scanning and playback to function correctly.
