---
title: "ARD Sounds"
---

# ARD Sounds <img src="/assets/icons/ard-sounds.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming from <a href="https://www.ardsounds.de/" target="_blank" rel="noopener noreferrer">ARD Sounds</a>. Contributed and maintained by <a href="https://github.com/jfeil" target="_blank" rel="noopener noreferrer">Jan Feil</a>

ARD Sounds (previously ARD Audiothek) is the audio platform of ARD, the group of public broadcasters in Germany. It collects radio programmes, podcasts, radio plays and documentaries from the national and regional stations, all free to listen to.

This source makes that content available inside Music Assistant. An ARD account is optional and mainly useful if you want the podcasts you follow to come across with your listening position.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | No |
| Media Types Supported | Radio, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | Lossy variable bitrate |
| Login Method | Password |

### Other

- Progress reporting and acquiring
- Populates libraries with subscribed podcasts
- Updates playlog on regular provider syncs


## Configuration

- Login to the ARD Sounds app, if syncing is required

### Settings
- <b>E-Mail address of ARD account.</b>
- <b>Password of ARD account.</b>
- <b>Maximum bitrate for streams (0 for unlimited)</b> Define the maximum stream bitrate
- <b>Percentage required before podcast episode is marked as fully played</b> Configure how much of an episode playback must occur before the podcast is recorded as fully played (this is only used for visualization within Music Assistant) 

## Known Issues / Notes

- Nil

## Not Yet Supported

- Subscription management is not supported
- Podcast recommendations is not implemented
- For radio streams: Current played song is not displayed
