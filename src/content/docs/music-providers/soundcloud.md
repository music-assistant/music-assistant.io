---
title: "SoundCloud"
---

# SoundCloud <img src="/assets/icons/soundcloud-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Soundcloud. Contributed by <a href="https://github.com/gieljnssns" target="_blank" rel="noopener noreferrer">gieljnssns</a>. Maintained by <a href="https://github.com/robsonke" target="_blank" rel="noopener noreferrer">robsonke</a>

SoundCloud is a site where anyone can upload and share audio, so a great deal of what is on it comes straight from the artist. It is where DJ mixes, remixes, demos and music that has not been released anywhere else tend to turn up.

Connecting your account puts what you have liked and followed on SoundCloud into Music Assistant, with the wider catalogue there to search.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | AAC 256kbps |
| Login Method | Cookie |

## Configuration

SoundCloud has no sign-in for outside apps, so two values have to be copied out of your browser while you log in. You need a **Client id** and an **Authorization**.

1. Clear your SoundCloud cookies, so that logging in again produces the requests you need to see
2. Go to <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">SoundCloud</a> but do not log in yet
3. Press F12 to open your browser's developer tools, and go to the **Network** tab
4. Now log in. A long list of entries will appear
5. Type `auth` in the filter box to narrow the list down
6. Look through those entries for `client_id`. It is a run of 32 letters and numbers. Copy it
7. Now find the `oauth_token` cookie for soundcloud.com and copy its value. In Music Assistant this goes in the **Authorization** field with `OAuth ` typed in front of it, including the space

The screenshots below show where each of these appears.

### Client id
<img src="/assets/screenshots/soundcloud-clientid.jpg" alt="screenshot" style="width: 1005px; float: center;"  loading="lazy" />

### OAuth token
<img src="/assets/screenshots/soundcloud-token.jpg" alt="screenshot" style="width: 1005px; float: center;"  loading="lazy" />

Filled in, the two fields should look like this. These values are made up — use your own:

```
client_id = 5Hvc9wa0Ejf092wj3f3920w3F920asuL
Authorization = OAuth 2-26432-21446-asdif2309fQ
```
## Known Issues / Notes

- What SoundCloud calls an artist is really whoever holds the account, so that is what appears as the artist in Music Assistant. If someone else uploads a track by an artist, it will be filed under the uploader rather than under the artist
