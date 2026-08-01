---
title: "Pocket Casts"
---

# Pocket Casts <img src="/assets/icons/pocketcasts-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://pocketcasts.com" target="_blank" rel="noopener noreferrer">Pocket Casts</a>, giving access to a user's subscribed podcasts, playback progress, and library, with changes synced back to the Pocket Casts account. Contributed and maintained by <a href="https://github.com/yfhyou" target="_blank" rel="noopener noreferrer">yfhyou</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | Varies (podcast source) |
| Login Method | Email & Password |

### Other

- Subscribed podcasts and their episodes are available to browse and search
- Five special folders are exposed: Up Next, New Releases, In Progress, Starred, and History
- Podcasts can be subscribed to and unsubscribed from within Music Assistant, with changes synced back to Pocket Casts
- Playback progress is synced bidirectionally with Pocket Casts, and playback resumes from the saved position
- Seeking within episodes is supported

## Configuration

- A Pocket Casts email address and password must be provided in the configuration

> [!NOTE]
> A free Pocket Casts account is sufficient; a paid subscription is not required. Authentication uses a bearer token that is valid for several months, after which re-authentication may be required.

## Known Issues / Notes

- This provider uses an unofficial, undocumented Pocket Casts API and may break if the service changes
- Playback progress is synced approximately every 30 seconds during playback. Completing an episode marks it as played, removes it from Up Next, and archives it. Starting an episode adds it to the Up Next queue and History
- Stream quality is determined by the podcast publisher's source feed and is not controlled by Pocket Casts or Music Assistant
