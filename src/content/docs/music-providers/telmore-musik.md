---
title: "Telmore Musik"
---

# Telmore Musik Music <img src="/assets/icons/telmore.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [Telmore Musik](https://musik.telmore.dk). Contributed and maintained by [math625f](https://github.com/math625f)

Telmore Musik is a streaming service from Telmore, the Danish telecoms company, included with some of its mobile and broadband subscriptions. It carries the usual international catalogue with a good deal of Danish music alongside it.

Sign in and your Telmore library and playlists show up in Music Assistant, with the catalogue open to search.

> [!NOTE]
> A paid subscription is required to add this music source.

## Features

|                                                 |                                    |
| :---------------------------------------------- | :--------------------------------: |
| Subscription FREE                               |                 No                 |
| Self-Hosted Local Media                         |                 No                 |
| Media Types Supported                           | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported |                Yes               |
| Lyrics Supported                                |                Yes                 |
| [Endless Mix](/ui/#track-menu)                  |                Yes                 |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality                          | MP4 320kbps |
| Login Method                                    |         Password                   |

### Other

- Searching the Telmore Musik catalogue is possible
- Two-way syncing of items added to library between MA and Telmore Musik is possible
- Playlist creation is possible as well as adding and removing tracks from existing playlists
- Played tracks are logged in Telmore Musik, which is especially useful for generating appropriate recommendations
- Any track that Telmore Musik has lyrics for is automatically fetched in MA. If timestamps are available for a track, proper "karaoke style" lyrics are used, otherwise it falls back to raw text-only lyrics

### Configuring the source

- Navigate to 'Settings'
- Under Music Sources, click 'Add a music source', select 'Telmore Musik', and fill in a `Username` and `Password`
- Adjust the settings described below as necessary
- Click 'Save'

### Settings

In addition to `Username` and `Password` there is also:

- <b>Stream Quality.</b> Default is `High` (MP4 320kbps). The other option is `Normal` (MP4 192kbps). This only needs to be changed if operating with a slow internet connection

Refer also to the [Library Import Control](/music-providers/#library-import-control) settings.

## Known Issues / Notes

Support for Telmore Musik is still experimental, please report if you experience any issues or unexpected behaviour.
