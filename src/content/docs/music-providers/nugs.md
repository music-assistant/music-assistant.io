---
title: "Nugs.net"
---

# Nugs.net <img src="/assets/icons/nugsnet-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming your music from <a href="https://www.nugs.net" target="_blank" rel="noopener noreferrer">Nugsnet</a>. Contributed and maintained by <a href="https://github.com/brian10048" target="_blank" rel="noopener noreferrer">Brian</a>

Nugs.net is a subscription service for live concert recordings, run with the artists themselves. Its catalogue leans towards acts with a long history of taped shows, and many concerts appear soon after they are played.

This source signs Music Assistant in to your account, so the shows you have access to appear in your library.

> [!NOTE]
> A paid subscription is required to use this source
    
## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media   | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | FLAC 44.1kHz 16 bit |
| Login Method | Password |

### Other

Search by artist, song title, album title, or venue name. You can also find shows by year or by date in `YYYY-MM-DD` format. Combine a recognized artist and venue with a year or date, for example `Billy Strings Red Rocks 2023`. With a complete artist name, a whole word or phrase from a venue name also works, for example `Billy Strings Oakland`. This is venue-name matching, not a general city search. Song results are individual concert or studio recordings, so you can choose a performance to play.

## Configuration

To configure, input a username and password. Optionally, if your Nugs.net account has a plan that includes HiFi streaming, you can select the stream quality you want to use.

### Settings

- <b>Stream quality.</b> Default is `Lossless`. Options are `Lossless` or `Lossy`. Lossless needs a Nugs.net plan that includes HiFi streaming; other plans get the lossy stream.

## Known Issues / Notes

Not every show is available in every quality. When a show isn't offered in the quality you picked, Music Assistant plays the lossy version of it instead.

Nugs does not support favorite tracks.

Combined show searches require recognizable artist and venue names. If a query cannot be matched to those names, search returns general catalog matches instead. Date and venue filters apply to shows, not individual song recordings. Playlist search is not supported. Show lookups read at most three release pages per search, so results may be incomplete when those pages contain unavailable or duplicate releases.

## Not Yet Supported

- Nugs.net has a radio stream but this is not available
