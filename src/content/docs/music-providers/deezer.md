---
title: "Deezer"
---

# Deezer <img src="/assets/icons/deezer-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://www.deezer.com/" target="_blank" rel="noopener noreferrer">Deezer</a>. Contributed originally by <a href="https://github.com/arctixdev" target="_blank" rel="noopener noreferrer">arctixdev</a> and <a href="https://github.com/micha91" target="_blank" rel="noopener noreferrer">micha91</a>. Now maintained by <a href="https://github.com/jdaberkow" target="_blank" rel="noopener noreferrer">Julian</a>.

Deezer is a French subscription streaming service with a catalogue of around 100 million tracks, plus podcasts and audiobooks. It is available in most countries and streams lossless on its higher tiers.

Connecting your account puts your Deezer favourites and playlists alongside the rest of your music in Music Assistant, with the whole catalogue there to search. Podcasts and audiobooks come across as well, and your place in them is kept in sync with Deezer's own apps.

> [!NOTE]
> Deezer's terms of service mean only HiFi, Premium and Family accounts can be used here. Free accounts will not work.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media  | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks, Radio |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                     | 
| Maximum Stream Quality | FLAC 44.1kHz 16 bit |
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
- Paste a Deezer share link into the search box and it will take you straight to that album, track or playlist
- Podcasts, radio and audiobooks depend on availability in your country (audiobooks are currently limited to Germany, the Netherlands and Austria)
- Logging of played tracks in Deezer

## Configuration

Deezer has no sign-in for outside apps, so a value called an ARL token has to be copied out of your browser. These instructions are for Chrome:

1. In Music Assistant, go to **Settings → Music Sources → Add a music source** and select `Deezer`.
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

### Settings

Refer to the [Library Import Control](/music-providers/#library-import-control) settings.
