---
title: "Yandex Disk"
description: Play personal music, audiobooks, podcasts, and sound effects stored on Yandex Disk
---

# Yandex Disk <img src="/assets/icons/yandex-disk-icon.svg" alt="Yandex Disk" style="width: 50px; float: right;" loading="lazy" />

Music Assistant can browse, sync, and play audio files stored in your personal
Yandex Disk. Contributed and maintained by
[TrudenBoy](https://github.com/TrudenBoy).

> [!CAUTION]
> This is an unofficial integration and is not affiliated with or endorsed by
> Yandex.

## Features

| | |
|:--|:--:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks, Sound Effects |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | No |
| Maximum Stream Quality | Varies by source file |
| Login Method | OAuth Device Flow |

### Other

- Streams files without downloading the complete library to Music Assistant
- Supports seeking in tracks and long audiobook files
- Can scan the complete disk or one selected folder
- Uses read-only Yandex Disk access and supports multiple provider instances

## Configuration

### Create a Yandex OAuth application

1. Open [Yandex OAuth](https://oauth.yandex.ru/), select **Create app**, and choose
   **For API access or debugging**.
2. Under **Data access**, add the **`cloud_api:disk.read`** permission.
3. Copy the application's **Client ID** and **Client Secret**.

### Add Yandex Disk to Music Assistant

1. In Music Assistant, open
   **Settings → Music sources → Add a music source → Yandex Disk**.
2. Enter the Client ID and Client Secret from your OAuth application.
3. Select whether this instance contains music, audiobooks, podcasts, or sound
   effects.
4. Keep **Root folder to scan** set to `root` for the complete disk, or enter a
   path such as `disk:/Music`.
5. Continue, open the displayed verification URL, enter the short code, and
   approve read-only access. Music Assistant completes setup automatically.

Create a separate provider instance for each content type you want to use.

### Settings

After setup, the provider settings control which items are imported into the
Music Assistant library, how missing album artists are handled, whether album
playlists are ignored, and whether track genres are propagated to albums and
artists.

## Known Issues / Notes

- The provider is read-only and cannot upload, rename, or delete Yandex Disk files.
- Access tokens refresh automatically. Reauthorization is required if access is
  revoked or the OAuth application is deleted.
- Changes made on Yandex Disk are discovered during the next library sync.
- Correct embedded tags and a consistent artist/album folder structure produce
  the best library matches.
