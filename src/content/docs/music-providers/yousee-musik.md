---
title: "YouSee Musik"
---

# YouSee Musik Music Provider <img src="/assets/icons/yousee.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [YouSee Musik](https://musik.yousee.dk). Contributed and maintained by [math625f](https://github.com/math625f)

> [!NOTE]
> A paid subscription is required to add this Music Provider.

## Features

|                                                 |                                    |
| :---------------------------------------------- | :--------------------------------: |
| Subscription FREE                               |                 No                 |
| Self-Hosted Local Media                         |                 No                 |
| Media Types Supported                           | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view-home) Supported |                Yes                 |
| Lyrics Supported                                |                Yes                 |
| [Radio Mode](/ui/#track-menu)               |                Yes                 |
| Maximum Stream Quality                          |        Lossy, MP4 (320kbps)        |
| Login Method                                    |         Password          |

### Other

- Searching the YouSee Musik catalogue is possible
- Two-way syncing of items added to library between MA and YouSee Musik is possible
- Playlist creation is possible as well as adding and removing tracks from existing playlists
- Played tracks are logged in YouSee Musik, which is especially useful for generating appropriate recommendations
- Any track that YouSee Musik has lyrics for is automatically fetched in MA. If timestamps are available for a track, proper "karaoke style" lyrics are used, otherwise it falls back to raw text-only lyrics

### Configuring the provider

- Navigate to 'Settings'
- Under Music Providers, click 'Add new', select 'YouSee Musik', and fill in a `Username` and `Password`
- Adjust the settings described below as necessary
- Click 'Save'

### Settings

In addition to `Username` and `Password` there is also:

- <b>Stream Quality.</b> Default is `High` (MP4 320kbps). The other option is `Normal` (MP4 192kbps). This only needs to be changed if operating with a slow internet connection

Refer also to the [Library Import Control](index.md#library-import-control) settings.

## Known Issues / Notes

Support for YouSee Musik is still experimental, please report if you experience any issues or unexpected behaviour.
