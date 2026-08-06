---
title: "Apple Music"
---

# Apple Music <img src="/assets/icons/apple-music.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://music.apple.com/" target="_blank" rel="noopener noreferrer">Apple Music</a>! Contributed and maintained by <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener noreferrer">MarvinSchenkel</a>

Apple Music is Apple's subscription streaming service, with a catalogue of around 100 million songs plus curated playlists and stations. It is the same library you get in the Music app on an iPhone, iPad or Mac.

This source signs Music Assistant in to your Apple Music account, so your saved artists, albums and playlists sit alongside the rest of your music, with the full catalogue there to search and browse.

> [!NOTE]
> - A paid subscription is required to add this Music Source. 
> - Audio playback is not officially supported by Apple, use at your own risk

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media   | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Radio |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                     | 
| Maximum Stream Quality | AAC 256kbps |
| Login Method | OAuth or Cookie |

### Other

- Searching the Apple Music catalogue
- Browsing playlists organised in folders
- Artist radio stations available via Browse and the [Discover view](/ui/#view---discover); live broadcast stations are not supported
- Similar tracks are supported, shown in the track detail view and available for Endless Mix
- Similar artists are supported and shown in the artist detail view


## Configuration

Click the **Authenticate with Apple Music** button, then in the pop-up window sign in with your Apple ID and give Music Assistant access to your Apple Music library. Everything needed is collected for you.

> [!IMPORTANT]
> For Apple to hand you back to Music Assistant afterwards, you have to be on Music Assistant's own web address while you do this — that is `http://<YOUR_MA_IP>:8095`. If you have installed Music Assistant as an app, that port has to be opened first, as described in the [core settings](/settings/core/#webserver). You can close it again once Apple Music is working.

[![Preview image](/assets/screenshots/apple-music-auth-0.png)](/assets/screenshots/apple-music-auth-0.png)

> [!NOTE]
> This token will expire and needs to be re-authenticated manually after 180 days.
    
### Settings

- <b>Manual Music User Token.</b> If the normal authentication flow is unavailable then the token can be added manually here

<details>
<summary>Instructions for Manual Token Retrieval</summary>
<div>

The token needs to be retrieved through your browser. Instructions were written for Chrome:

1. Navigate to <a href="https://music.apple.com/" target="_blank" rel="noopener noreferrer">https://music.apple.com/</a>
2. Go to View > Developer > Developer Tools. A new side window will open.
3. Click the 'Application' tab. You might need to expand your window or click the `>>` button

   [![Preview image](/assets/screenshots/apple-music-auth-1.jpg)](/assets/screenshots/apple-music-auth-1.jpg)

4. Under Storage > Cookies, click "https://music.apple.com" and find the entry called "media-user-token"
5. Click it and copy the cookie value and use this in Music Assistant as the 'Music user token'

   [![Preview image](/assets/screenshots/apple-music-auth-2.jpg)](/assets/screenshots/apple-music-auth-2.jpg)

**Note:** Look at the "Expires / Max-Age" column while you are there. Apple Music will stop working in Music Assistant on that date, and you will need to come back and do this again.

</div>
</details>

See also the [Library Import Control](/music-providers/#library-import-control) settings.

    
## Known Issues / Notes
- Lossless and Dolby Atmos versions are not available here. Apple protects those with its own encryption, which Music Assistant cannot open
- Marking something as a favourite is only sent back to Apple Music for albums, playlists and tracks. Doing it to an artist stays in Music Assistant
- There can be a gap of up to five seconds between tracks, because Apple provides no proper way in for other apps
- Only playlists you made yourself can be edited. Apple's own playlists and ones shared with you are read-only
