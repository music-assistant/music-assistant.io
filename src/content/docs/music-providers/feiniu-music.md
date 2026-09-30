---
title: "FeiNiu Music"
description: Documentation for using the FeiNiu Music music source
---

# FeiNiu Music <img src="/assets/icons/feiniu-music-icon.svg" alt="FeiNiu Music icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for FeiNiu Music. This component was contributed and is maintained by <a href="https://github.com/neqq3" target="_blank" rel="noopener noreferrer">neqq3</a>.

FeiNiu Music is the personal music library application included with fnOS. It organises music stored on your NAS and makes the library available through its web and mobile applications.

This source connects that library to Music Assistant, allowing the music available to the configured FeiNiu Music account to be browsed, searched and played through players supported by Music Assistant.

> [!NOTE]
> This source is currently experimental and has been tested with FeiNiu Music 1.0.1 (0.8.41).

## Features

|                                                   |                                    |
| :------------------------------------------------ | :--------------------------------: |
| Subscription FREE                                 |                 Yes                |
| Self-Hosted Local Media                           |                 Yes                |
| Media Types Supported                             | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported |                 No                 |
| Lyrics Supported                                  |                 Yes                |
| [Endless Mix](/ui/#track-menu)                    |                 No                 |
| Artist Top Tracks Support                         |                 No                 |
| Similar Artists Support                           |                 No                 |
| Similar Tracks Support                            |                 No                 |
| Maximum Stream Quality                            |        Varies by source file       |
| Login Method                                      |              Password              |

### Other

- Search artists, albums, tracks and playlists in the FeiNiu Music library
- Use artwork and plain or synchronized lyrics provided by FeiNiu Music
- Configure multiple FeiNiu Music accounts as separate Music Assistant source instances

## Configuration

Before adding the source, make sure FeiNiu Music is running on your NAS and that the account you intend to use can sign in to the FeiNiu Music web application and play the required music.

The device running Music Assistant Server must also be able to reach the FeiNiu Music address directly.

In **Settings → Music Sources**, add **FeiNiu Music** and provide:

- **Music web address.** The HTTP or HTTPS address of the FeiNiu Music web application. The default fnOS HTTP port is `5666`, so a typical local address is `http://192.168.1.10:5666/music/`. If you have changed the port or use HTTPS, enter the address you actually use.
- **Music username.** A FeiNiu Music account with access to the library you want to use.
- **Music password.** The password for that account.

Use a complete HTTP or HTTPS URL rather than an FN ID, and do not include query parameters or URL fragments.

> [!NOTE]
> The standard `/music/` web path is supported. An additional reverse-proxy path prefix, such as `/nas/music/`, is not currently supported.

### Changing the connection

The password can be changed by reconfiguring the source.

Leaving the password field blank keeps the currently saved password. Saved passwords are not displayed.

The server address and username cannot be changed on an existing source. To use a different server or account, remove the source and add it again.

## Known Issues / Notes

- This source is read-only. Library and playlist changes must be made in FeiNiu Music and are not written back from Music Assistant.
- Available music follows the permissions of the configured FeiNiu Music account. If an item is missing or cannot be played, first check that the same account can access it in FeiNiu Music.
- Audio is read from FeiNiu Music at the source file's original quality. The final format and quality sent to a player depend on Music Assistant's audio pipeline and the capabilities of the target player.
