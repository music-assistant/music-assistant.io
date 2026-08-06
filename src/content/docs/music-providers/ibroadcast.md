---
title: "iBroadcast"
---

# iBroadcast <img src="/assets/icons/ibroadcast-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming your music from <a href="https://www.ibroadcast.com/" target="_blank" rel="noopener noreferrer">iBroadcast</a>. Contributed and maintained by <a href="https://github.com/robsonke" target="_blank" rel="noopener noreferrer">robsonke</a>

iBroadcast is a cloud music locker. You upload your own music collection to their servers and it streams back to you on any device, with no storage limit even on the free tier.

This source signs Music Assistant in to your account and imports that collection, so music you uploaded there sits alongside your other sources.

> [!NOTE]
> Both the free and paid subscription options are supported
    
## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | FLAC 192kHz 24 bit |
| Login Method | Password |

## Configuration

Use your account username and password to authenticate. This will automatically start importing your full library.

## Known Issues / Notes

- The initial sync can take some time in case of a large library. The API of iBroadcast is not so refined, so it downloads all content at once

## Not Yet Supported

- Folders and tags
