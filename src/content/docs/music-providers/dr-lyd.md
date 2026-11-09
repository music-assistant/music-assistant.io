---
title: "DR LYD"
---

# DR LYD <img src="/assets/icons/dr-lyd-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for <a href="https://www.dr.dk/lyd" target="_blank" rel="noopener noreferrer">DR LYD</a>, the audio service of the Danish public broadcaster DR. Contributed and maintained by <a href="https://github.com/mikkelke" target="_blank" rel="noopener noreferrer">Mikkel Eskildsen</a>

DR is Denmark's public broadcaster, and DR LYD is where it gathers its audio: the live radio channels, such as DR P1, DR P3, DR P6 Beat and DR P8 Jazz, and hundreds of podcasts. Most of it is in Danish. Listening is free and needs no account.

This source adds the live channels to Music Assistant as radio stations, and the podcasts as podcasts.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by DR. It talks to DR the way DR's own web player does, with the public API key of that player, and may stop working at any time.

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
| Maximum Stream Quality | Lossy variable bitrate |
| Login Method | None |

### Other

- While a channel plays, the player shows the song and artist on air, or the programme when DR lists no song. For classical music the composers are shown as the artist
- Podcasts can be browsed by latest episode or by title, and searched by title or description
- Podcasts you add to your library are kept up to date by the library sync

## Configuration

No account or setup is needed. In the configuration, you only need to click the save button

## Usage

Open *Browse > DR LYD*. *Live radio* lists the channels, *Recently updated* the podcasts with the newest episodes, and *All podcasts* every podcast by title. Search finds channels by name and podcasts by title or description.

There is no account to import a library from, so nothing is added to your library for you. Add the channels and podcasts you want from browse or search. The library sync only covers podcasts, so a radio channel is in your library only if you added it yourself.

## Known Issues / Notes

- Seeking is not supported on live radio
- Only the channels that play round the clock are listed, with P4 and P5 as their regional channels. Other channels, such as events and web feeds, are not listed
- The song shown is matched to the stream by timing, so it can change a little before or after you hear it
- A podcast that DR stops offering is removed from your library at the next sync
- Podcast transcripts are not available
