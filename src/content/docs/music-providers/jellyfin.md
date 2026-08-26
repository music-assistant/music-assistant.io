---
title: "Jellyfin"
description: Documentation for using the Jellyfin music source
---

# Jellyfin <img src="/assets/icons/jellyfin-logo.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Jellyfin servers. This component was contributed by <a href="https://github.com/lokiberra" target="_blank" rel="noopener noreferrer">lokiberra</a>.

Jellyfin is a free, open source media server you run on your own hardware. It catalogues the music, films and other media you already have and streams them to apps on your devices, with nothing held on someone else's servers.

This source connects Music Assistant to the music libraries on your Jellyfin server, so what you have organised there becomes part of your Music Assistant library.

> [!CAUTION]
> Please be advised that this source currently has no dedicated developer. Issues may take longer to resolve as this will be maintained on a best effort basis. Consider sharing your music directly with MA instead

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                     |
| Maximum Stream Quality | FLAC 192kHz 24 bit |
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
- If something is not working, check first that the account you gave Music Assistant can reach your music through Jellyfin's own web interface. Problems there will show up here too
