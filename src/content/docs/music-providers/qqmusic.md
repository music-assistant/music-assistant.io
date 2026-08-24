---
title: "QQ Music"
---

# QQ Music <img src="/assets/icons/qqmusic-icon.svg" alt="QQ Music icon" style="width: 70px; float: right;"  loading="lazy" />

**Language:** **English** | [中文](/music-providers/qqmusic-zh/)

Music Assistant has support for <a href="https://y.qq.com/" target="_blank" rel="noopener noreferrer">QQ Music</a>.  
Contributed and maintained by <a href="https://github.com/xiasi0" target="_blank" rel="noopener noreferrer">xiasi0</a>.

QQ Music is one of the most widely used streaming music platforms in Mainland China, offering a large Chinese-language and international catalog, playlists, and personalized recommendations.

This source signs Music Assistant in to your QQ Music account, so the tracks, albums, artists and playlists you have saved there appear in Music Assistant and the catalogue can be searched.

> [!NOTE]
> - A QQ Music account is required.
> - Tracks and audio qualities that need a subscription still need one here.
> - This source plays only what your account is entitled to. It does not get around any of QQ Music's restrictions.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | FLAC up to 192kHz 24 bit |
| Login Method | QQ or WeChat App QR Code |

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked tracks, followed artists, liked albums, and playlists
- Library sync is currently one-way (QQ Music → Music Assistant)
- If a track is not available at the quality you asked for, the next best is played instead

## Configuration

### QR Login Flow

1. Open **Settings → Music Sources → Add a music source → QQ Music**.
2. Click **QQ Login** or **WeChat Login**. A new QR page will open.
3. Scan the QR code with the matching **QQ** or **WeChat** app and tap **Login/Confirm** in the app.
4. Close the QR page.
5. Click **Save**.

> [!NOTE]
> Use the same app as the login button you selected. A WeChat QR code must be scanned with WeChat, and a QQ QR code must be scanned with QQ.

### Settings

- <b>Preferred quality.</b> Options are `MP3 128kbps (most compatible)`, `MP3 320kbps [Default]`, `FLAC (fallback to MP3)`, and `Hi-Res (Master, fallback to FLAC/MP3)`.

## Known Issues / Notes

- Availability depends on where you are, and it works best in Mainland China.
- QQ Music offers no proper way in for other apps, so this source signs in the way a web browser does. That means a change at QQ Music's end can break it without warning.
- Something that appeared in a recommendation or a radio list may have gone by the time you try to play it.
- A track your account is not entitled to may play only a preview, or not at all.
