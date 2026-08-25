---
title: "NetEase Cloud Music"
---

# NetEase Cloud Music <img src="/assets/icons/netease-cloud-music-icon.png" alt="NetEase Cloud Music icon" style="width: 70px; float: right;" loading="lazy" />

**Language:** **English** | [中文](/music-providers/netease-cloud-music-zh/)

Music Assistant has support for <a href="https://music.163.com/" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a>.  NetEase Cloud Music is a major streaming platform in Mainland China with a large Chinese catalog, recommendations, and lyrics support.
Contributed and maintained by <a href="https://github.com/xiasi0" target="_blank" rel="noopener noreferrer">xiasi0</a>.

This source signs Music Assistant in to your NetEase account, so the music and playlists you have saved there appear in Music Assistant and the catalogue can be searched. It does need a separate API service running on your own network, as described below.

> [!NOTE]
> - A NetEase Cloud Music account is required
> - You also have to run a small piece of software of your own alongside Music Assistant, described under [Configuration](#configuration)
> - This source plays only what your account is entitled to. It does not get around any of NetEase's restrictions

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Radio |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                     | 
| Maximum Stream Quality | Hi-Res FLAC |
| Login Method | NetEase App QR Code |

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked/favorited content and user playlists
- Dynamic recommendation/radio entries include Daily songs, Daily playlists, Private FM, and Heart Mode
- Library sync is currently one-way (NetEase Cloud Music -> Music Assistant)

## Configuration

### The extra service you need to run

NetEase provides no proper way in for other apps, so this source talks to NetEase through a separate piece of software called NeteaseCloudMusicApi, which you run yourself. Music Assistant expects to find it at `http://127.0.0.1:3000` unless you tell it otherwise.

If you run Music Assistant under Home Assistant, there is a companion App in progress:  
<a href="https://github.com/music-assistant/home-assistant-addon/pull/16" target="_blank" rel="noopener noreferrer">home-assistant-addon#16</a>

### QR Login Flow (NetEase App)

1. Open **Settings → Music Sources → Add a music source → NetEase Cloud Music**
2. Set **API base URL** to your local API service
3. Click **QR Login**. A new QR page will open
4. Scan with the **NetEase Cloud Music app** and confirm login in the app
5. Close the QR page
6. Click **Save**

## Compliance / Notes

- You can play whatever your NetEase account allows you to play, and nothing more
- A track your account is not entitled to may play only a preview, or not at all
- Nothing here gets around subscription restrictions
