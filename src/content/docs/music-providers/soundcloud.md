---
title: "SoundCloud"
---

# SoundCloud Provider <img src="/assets/icons/soundcloud-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Soundcloud. Contributed by <a href="https://github.com/gieljnssns" target="_blank" rel="noopener noreferrer">gieljnssns</a>. Maintained by <a href="https://github.com/robsonke" target="_blank" rel="noopener noreferrer">robsonke</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](../ui#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui#track-menu) | No |
| Maximum Stream Quality | Lossy AAC (256kbps) |
| Login Method | Cookie |

## Configuration

Two fields need to be completed to use this provider, Client id and Authorization. To obtain these proceed as follows:

1. Delete your cookies for Soundcloud.
2. Go to <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">Soundcloud</a>.
3. Open the `Inspect` tool (F12 on most browsers).
4. Go to the page `Network` on the inspect terminal.
5. Login.
6. Search for `auth`.
7. In one of the requests you will find the `client_id`
8. And for the OAuth token we need the `oauth_token` cookie on the soundcloud.com domain prepended with "OAuth "

`client_id`: string of 32 bytes alphanumeric
`oauth_token`: string inside the cookie value

### Client id
<img src="/assets/screenshots/soundcloud-clientid.jpg" alt="screenshot" style="width: 1005px; float: center;"  loading="lazy" />

### OAuth token
<img src="/assets/screenshots/soundcloud-token.jpg" alt="screenshot" style="width: 1005px; float: center;"  loading="lazy" />

Example snippet for the Music Provider configuration step (OAuth and client_id are NOT real, use yours):

```
client_id = 5Hvc9wa0Ejf092wj3f3920w3F920asuL
Authorization = OAuth 2-26432-21446-asdif2309fQ
```
## Known Issues / Notes

- Artists synced from Soundcloud are actually Soundcloud users.
- If a song by artist X is uploaded by user Y, this song belongs to the artist Y in Music Assistant
