---
title: Music Assistant Jellyfin Provider
description: Documentation for using the Jellyfin music provider
---

# Jellyfin Provider ![Preview image](../assets/icons/jellyfin-logo.svg){ width=70 align=right }

Music Assistant has support for music servers which work to the Jellyfin definition. This component was contributed by [lokiberra](https://github.com/lokiberra) and maintained by lokiberra and [jc2k](https://github.com/jc2k)

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

- Search from 'Music' libraries on the Jellyfin server

## Configuration:
You will need to provide the following to Music Assistant:

- <b>Server.</b> For example, https://music.domain.tld/ or http://192.168.1.4:8096/ (for a local server)
- <b>Username.</b> The username for the account to be used by Music Assistant to access the server
- <b>Password.</b> The password for the account

!!! note
    It is recommended that IP address is used instead of the domain name to avoid problems if IPv6 name resolution fails 
### Settings

- <b>Advanced - Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default

## Not Yet Supported:
- Album types metadata

## Known Issues / Notes
- This provider makes use of the [Jellyfin ApiClient](https://github.com/jellyfin/jellyfin-apiclient-python) for communicating with the server. If something is failing to work properly in Music Assistant, try to use that library to interact with your server (can you ping it?, fetch artist and albums?, can you search?)
