---
title: "ARD Audiothek"
---

# ARD Audiothek Provider <img src="/assets/icons/ard-audiothek.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming from <a href="https://www.ardaudiothek.de/" target="_blank" rel="noopener noreferrer">ARD Audiothek</a>. Contributed and maintained by <a href="https://github.com/jfeil" target="_blank" rel="noopener noreferrer">Jan Feil</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | No |
| Media Types Supported | Radio, Podcasts |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Lossy, Variable Quality |
| Login Method | Password |

### Other

- Progress reporting and acquiring
- Populates libraries with subscribed podcasts
- Updates playlog on regular provider syncs


## Configuration

- Login to the ARD Audiothek app, if syncing is required

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
