---
title: "CBC Listen"
---

# CBC Listen <img src="/assets/icons/cbc-listen-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for <a href="https://www.cbc.ca/listen" target="_blank" rel="noopener noreferrer">CBC Listen</a>, the audio service of Canada's public broadcaster CBC. Contributed and maintained by <a href="https://github.com/iwismer" target="_blank" rel="noopener noreferrer">Isaac Wismer</a>

CBC is Canada's national public broadcaster, and CBC Listen gathers its English-language audio in one place: live regional streams for CBC Radio One and CBC Music, original CBC Podcasts, and on-demand episodes from CBC radio shows. Listening is free and needs no account.

This source adds the live CBC Radio One and CBC Music regional feeds to Music Assistant as radio stations, and the CBC Podcasts and on-demand radio shows as podcasts.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by CBC/Radio-Canada. It talks to CBC Listen the way the CBC Listen web player does, and may stop working at any time.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |
| Maximum Stream Quality | AAC 192kbps |
| Login Method | None |

### Other

- All 38 regional CBC Radio One stations and 5 time-zone CBC Music streams are available
- While a live radio station plays, the player shows the track and artist on air (with the composer shown as the artist when no performer is listed), or the current radio program and host during talk segments

## Configuration

No account or setup is needed. In the configuration, you only need to click the save button

## Usage

Open *Browse > CBC Listen*. *Radio* lists all regional feeds for CBC Radio One and CBC Music, *Podcasts* lists original CBC Podcasts by title, and *Radio Shows* lists on-demand CBC radio programs by title.

There is no account to import a library from, so nothing is added to your library for you. Add the stations, podcasts, and radio shows you want from browse or search.

## Known Issues / Notes

- Seeking is not supported on live radio
- CBC Listen Music Playlists are not supported, as they are geo-restricted to Canada and enforce skip limits
- The song shown on live radio is matched to the stream by timing, so it can change a little before or after you hear it
- Podcast transcripts are not available
