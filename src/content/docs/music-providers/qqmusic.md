---
title: "QQ Music"
---

# QQ Music <img src="/assets/icons/qqmusic-icon.svg" alt="QQ Music icon" style="width: 70px; float: right;"  loading="lazy" />

**Language:** **English** | [中文](/music-providers/qqmusic-zh/)

Music Assistant has support for <a href="https://y.qq.com/" target="_blank" rel="noopener noreferrer">QQ Music</a>.  
Contributed and maintained by <a href="https://github.com/xiasi0" target="_blank" rel="noopener noreferrer">xiasi0</a>.

QQ Music is one of the most widely used streaming music platforms in Mainland China, offering a large Chinese-language and international catalog, playlists, and personalized recommendations.

> [!NOTE]
> - A QQ Music account is required.
> - Subscription is required for subscription-only tracks/qualities.
> - This provider does not bypass entitlement checks.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view-home) Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](/ui/#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (up to 24-bit/192kHz) |
| Login Method | QQ App QR Code |

### Other

- Search support for tracks, artists, albums, and playlists
- Library sync for liked tracks, followed artists, liked albums, and playlists
- Library sync is currently one-way (QQ Music → Music Assistant)
- Quality fallback handling when selected quality is unavailable for a specific track

## Configuration

### QR Login Flow (QQ App Only)

1. Open **Settings → Music Sources → Add Music Source → QQ Music**.
2. Click **QR Login**. A new QR page will open.
3. Scan the QR code with the **QQ app** and tap **Login/Confirm** in the app.
4. Close the QR page.
5. Click **Save**.

### Settings

- <b>Preferred quality.</b> Options are `MP3 128kbps (most compatible)`, `MP3 320kbps [Default]`, `FLAC (fallback to MP3)`, and `Hi-Res (Master, fallback to FLAC/MP3)`.

## Known Issues / Notes

- Availability is region-dependent and may work best in Mainland China.
- Because QQ Music does not provide a public official API for this workflow, this provider relies on web-session based integration and may be affected by upstream changes.
- Some recommended or dynamic items can become unavailable between listing and playback.
- Some non-entitled tracks may only return preview/limited playback or be unplayable.
