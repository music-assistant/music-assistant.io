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

SoundCloud has no sign-in for outside apps, so three values have to be copied out of your browser while you log in. You need a **Client id**, an **Authorization** and a **Refresh token**.

Do this in a private (incognito) browser window, and close the window once you are done. Music Assistant takes over that sign-in session, and keeps it alive by itself from then on. A window you keep using would get in its way.

1. Open a private browser window and go to <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">SoundCloud</a>, but do not log in yet
2. Press F12 to open your browser's developer tools, and go to the **Network** tab
3. Now log in. A long list of entries will appear
4. Type `auth` in the filter box to narrow the list down
5. Look through those entries for `client_id`. It is a run of 32 letters and numbers. Copy it into the **Client id** field
6. Go to the **Application** tab (in Firefox: **Storage**), open **Cookies** and select `https://soundcloud.com`
7. Type `oauth` in the filter box. Two cookies are left
8. Copy the value of `oauth_token` into the **Authorization** field
9. Copy the value of `oauth_refresh_token` into the **Refresh token** field
10. Save, then close the private window

The screenshots below show where each of these appears.

### Client id
<img src="/assets/screenshots/soundcloud-clientid.jpg" alt="screenshot" style="width: 1005px; float: center;"  loading="lazy" />

### Cookies
<img src="/assets/screenshots/soundcloud-cookies.png" alt="screenshot" style="width: 1005px; float: center;"  loading="lazy" />

Filled in, the fields should look like this. These values are made up — use your own:

```
Client id = 5Hvc9wa0Ejf092wj3f3920w3F920asuL
Authorization = eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0In0.c2lnbmF0dXJl
Refresh token = Hx0eR4kq2N8wZpT6vLmY3s
```

## Known Issues / Notes

- What SoundCloud calls an artist is really whoever holds the account, so that is what appears as the artist in Music Assistant. If someone else uploads a track by an artist, it will be filed under the uploader rather than under the artist
