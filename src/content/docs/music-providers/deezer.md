---
title: "Deezer"
---

# Deezer <img src="/assets/icons/deezer-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://www.deezer.com/" target="_blank" rel="noopener noreferrer">Deezer</a>. Contributed and maintained by <a href="https://github.com/arctixdev" target="_blank" rel="noopener noreferrer">arctixdev</a>, <a href="https://github.com/micha91" target="_blank" rel="noopener noreferrer">micha91</a> and <a href="https://github.com/jdaberkow" target="_blank" rel="noopener noreferrer">jdaberkow</a>

> [!TIP]
> **Note**
>
> - Because of Deezer's TOS only HiFi/Premium/Family accounts are supported

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media  | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks, Radio |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                     | 
| Maximum Stream Quality | Lossless FLAC (44.1 kHz / 16 bit) |
| Login Method | Cookie (ARL) |

### Other

- Searching the Deezer catalogue
- Items in your Deezer Favourites will be imported into the MA Library and automatically marked as a "Favorite" in MA
- If you add an item from Deezer to the MA library then nothing will happen in Deezer unless you also mark it as a favourite (at which time the item will be added to the Deezer favourites)
- Artist, Album, Track, Playlist, Podcast and Audiobook metadata is fully supported
- Playlist creation is possible as well as adding and removing tracks from existing playlists
- Synchronized (LRC) and plain text lyrics
- Podcast and audiobook progress (bookmark/resume) is synced both ways
- Personal (user-uploaded) songs are available via the "My Uploads" playlist
- Recommendations: Made For You, Explore (charts, new releases, editorial playlists), Recently Played, Music Together and dynamic Flow/mood/genre mixes
- Pasting or searching a Deezer share URL (`deezer.com/{type}/{id}`) resolves the item directly
- Podcasts, radio and audiobooks depend on availability in your country (audiobooks are currently limited to Germany, the Netherlands and Austria)
- Logging of played tracks in Deezer

## Configuration

Authentication with Deezer happens through an ARL cookie token. Unfortunately, Deezer does not officially support third party logins, so you will need to obtain your own ARL Token. Instructions were written for Chrome:

1. In the MA SETTINGS select MUSIC SOURCES, then ADD A MUSIC SOURCE and then DEEZER.
2. Navigate in another browser tab to <a href="https://deezer.com/" target="_blank" rel="noopener noreferrer">https://deezer.com/</a> and log in.
3. Right click on the browser window and select INSPECT. A new window will open
4. Click the 'Application' tab. You might need to expand your window or click the `>>` button
5. Under Storage > Cookies, click "https://www.deezer.com" and find the entry labelled "arl"
  [![Preview image](/assets/screenshots/deezer-arl.png)](/assets/screenshots/deezer-arl.png)
6. Copy the cookie value and paste it into Music Assistant as the 'ARL TOKEN'

**If this does not work ensure that you:**

- Are on the same network as Music Assistant
- Can access Music Assistant using its IP address
- Have a Hifi/Premium/Family account
- Are on the latest Music Assistant version
- Try different browsers

Big thanks to <a href="https://github.com/music-assistant/deezer-python-gql" target="_blank" rel="noopener noreferrer">deezer-python-gql</a>, the typed async GraphQL client that powers this provider.
