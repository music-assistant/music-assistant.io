---
title: "iHeartRadio"
---


# iHeartRadio <img src="/assets/icons/iheartradio-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for <a href="https://www.iheart.com/" target="_blank" rel="noopener noreferrer">iHeartRadio</a>. This component is contributed and maintained by [Gavin](https://github.com/ozgav)

iHeartRadio is a free radio and podcast service with thousands of live stations, a large podcast catalogue, and personalised stations built around an artist. It is available in Australia, Canada, Mexico, New Zealand and the United States.

This source brings live stations, podcasts and artist radio into Music Assistant. Signing in is optional. With an account, the stations, artists and podcasts you follow are synced with your library.

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
| Maximum Stream Quality | AAC 96kbps |
| Login Method | Password (optional) |

## Configuration:
- Select the country whose stations and podcasts you want to listen to
- Optionally enter the email address and password of your iHeartRadio account
- Click the save button.

## Settings
- <b>Country.</b> The catalogue to use. Each country has its own stations and podcasts
- <b>Email and Password.</b> Optional. Signing in syncs the stations, artists and podcasts you follow. Without an account the source works as a guest
- [Standard sync options](../#library-import-control) are available when signed in

## Known Issues / Notes

- A radio station whose name ends in "Radio", such as "Tom Petty Radio", is an artist radio. It is not a live broadcast but a personalised station that plays songs by that artist and similar artists
- Artist radios are found by searching for an artist, or by following an artist in the iHeartRadio app or website and syncing. They do not appear when browsing
- Tracks on an artist radio can be skipped. Live stations cannot be skipped
- A station paused for more than about four hours has to be started again
- Browsing covers live stations by city and by genre, and podcasts by category
- Adding or removing a station, artist radio or podcast in Music Assistant follows or unfollows it on iHeartRadio. This only happens when signed in
- Live stations and podcasts include the adverts iHeartRadio and the broadcaster serve
- Album pages show the album's tracks, but they cannot be played on demand. Playing individual tracks and albums needs a paid iHeartRadio All Access subscription and is not supported
- Thumbs up and thumbs down are not supported
- Live station and podcast quality is set by the broadcaster or publisher and is often lower than artist radio

## Not Yet Supported

- Playlists
- The For You recommendations
- Syncing podcast listening progress
