---
title: Music Assistant Emby Provider
description: Documentation for using the Emby music provider
---

# Emby Provider ![Preview image](../assets/icons/emby-icon.svg){ width=70 align=right }

Music Assistant has support for accessing music hosted on an [Emby Server](https://emby.media/). This component was contributed and is maintained by [hatharry](https://github.com/hatharry).

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC (192 kHz, 24 bit) |
| Login Method | Password |

### Other

- Searching the 'Music' libraries on an Emby server is possible

## Configuration:
The following information must be supplied to configure this provider:

- <b>Server.</b> For example, https://music.domain.tld/ or http://192.168.1.4:8096/ (for a local server)
- <b>Username.</b> The username for the account to be used by Music Assistant to access the server
- <b>Password.</b> The password for the account

!!! note
    It is recommended that IP address is used instead of the domain name to avoid problems if IPv6 name resolution fails 
### Settings

- <b>Advanced - Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default


## Known Issues / Notes
- Emby server must be accessible from the Music Assistant instance for library scanning and playback to function correctly.
