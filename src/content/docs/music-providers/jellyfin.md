---
title: Music Assistant Jellyfin Provider
description: Documentation for using the Jellyfin music provider
---

# Jellyfin Provider <img src="/assets/icons/jellyfin-logo.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for music servers which work to the Jellyfin definition. This component was contributed by <a href="https://github.com/lokiberra" target="_blank" rel="noopener noreferrer">lokiberra</a>.

> [!CAUTION]
> Please be advised that this provider currently has no dedicated developer. Issues may take longer to resolve as this will be maintained on a best effort basis. Consider sharing your music directly with MA instead

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC (192 kHz, 24 bit) |
| Login Method | Password |

### Other

- Search from 'Music' libraries on the Jellyfin server

## Configuration:
You will need to provide the following to Music Assistant:

- <b>Server.</b> For example, https://music.domain.tld/ or http://192.168.1.4:8096/ (for a local server)
- <b>Username.</b> The username for the account to be used by Music Assistant to access the server
- <b>Password.</b> The password for the account

> [!NOTE]
> It is recommended that IP address is used instead of the domain name to avoid problems if IPv6 name resolution fails
### Settings

- <b>Advanced - Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default

## Not Yet Supported:
- Album types metadata

## Known Issues / Notes
- This provider makes use of the <a href="https://github.com/jellyfin/jellyfin-apiclient-python" target="_blank" rel="noopener noreferrer">Jellyfin ApiClient</a> for communicating with the server. If something is failing to work properly in Music Assistant, try to use that library to interact with your server (can you ping it?, fetch artist and albums?, can you search?)
