---
title: "NetEase Cloud Music"
---

# NetEase Cloud Music <img src="/assets/icons/netease-cloud-music-icon.png" alt="NetEase Cloud Music icon" style="width: 70px; float: right;" loading="lazy" />

**Language:** **English** | [中文](/music-providers/netease-cloud-music-zh/)

Music Assistant has support for <a href="https://music.163.com/" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a>.  
Contributed and maintained by <a href="https://github.com/xiasi0" target="_blank" rel="noopener noreferrer">xiasi0</a>.

NetEase Cloud Music is a major streaming platform in Mainland China with a large Chinese catalog, recommendations, and lyrics support.

> [!NOTE]
> - A NetEase Cloud Music account is required.
> - This provider currently requires a local NeteaseCloudMusicApi-compatible backend service.
> - This provider does not bypass entitlement checks.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Radio |
| [Recommendations](/ui/#view-home) Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](/ui/#track-menu) | Yes |
| Maximum Stream Quality | Hi-Res FLAC (upstream response dependent) |
| Login Method | NetEase App QR Code |

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked/favorited content and user playlists
- Dynamic recommendation/radio entries include Daily songs, Daily playlists, Private FM, and Heart Mode
- Library sync is currently one-way (NetEase Cloud Music -> Music Assistant)

## Configuration

### Backend API Service

This provider requires a running NeteaseCloudMusicApi-compatible HTTP service (default: `http://127.0.0.1:3000`).

For Home Assistant users, see the companion add-on PR:  
<a href="https://github.com/music-assistant/home-assistant-addon/pull/16" target="_blank" rel="noopener noreferrer">home-assistant-addon#16</a>

### QR Login Flow (NetEase App)

1. Open **Settings -> Music Sources -> Add Music Source -> NetEase Cloud Music**.
2. Set **API base URL** to your local API service.
3. Click **QR Login**. A new QR page will open.
4. Scan with the **NetEase Cloud Music app** and confirm login in the app.
5. Close the QR page.
6. Click **Save**.

## Compliance / Notes

- Playback strictly follows upstream account and track entitlement.
- Non-entitled tracks may return preview/limited playback or no playable URL.
- No unlock/crack/bypass logic is used for subscription-locked content.

