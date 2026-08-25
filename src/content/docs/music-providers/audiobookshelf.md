---
title: "Audiobookshelf"
---

# audiobookshelf <img src="/assets/icons/audiobookshelf-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://www.audiobookshelf.org/" target="_blank" rel="noopener noreferrer">audiobookshelf</a>. Contributed and maintained by <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a>

Audiobookshelf is a free, self-hosted server for your own audiobooks and podcasts. You run it on your own hardware, it organises the files and remembers where you are in each one, and its apps let you listen from anywhere.

This source points Music Assistant at that server so the same collection is available to play. Progress travels in both directions, which means a book started in the Audiobookshelf app can be picked up again in Music Assistant, or the other way round.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | Yes |
| Media Types Supported | Audiobooks, Podcasts, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | 192kHz 24 bit |
| Login Method | Password or Token |

### Other

- Populates Audiobooks from all libraries accessible by the supplied user
- Populates Podcasts from all libraries accessible by the supplied user
- Populates Playlists from all libraries accessible by the supplied user
- Has support for dedicated author and narrator tabs in the audiobooks view
- Syncs audiobooks series enabling "collapse collections" in the audiobooks view. Note that the provider *does not sync* native audiobookshelf collections, only book series. These are then mapped to Music Assistant's collections.
- Browse Feature has the following structure:

```
        Library_Name_A (Audiobooks)
            Authors
                Author_1
                    Series_1
                    Audiobook_1
                    Audiobook_2
                Author_2
                    Audiobook_3
            Narrators
                Narrator_1
                    Audiobook_1
                    Audiobook_2
            Series
                Series_1
                    Audiobook_1
                    Audiobook_2
                Series_2
                    Audiobook_3
                    Audiobook_4
            Collections
                Collection_1
                    Audiobook_1
                    Audiobook_2
                Collection_2
                    Audiobook_3
                    Audiobook_4
            Playlists
                Playlist_1
                Playlist_2
            Audiobooks
                Audiobook_1
                Audiobook_2
        Library_Name_B (Podcasts)
            Playlists
                Playlist_1
                Playlist_2
            Podcasts
                Podcast_1
                Podcast_2
```

- The Audiobook search function supports searching for Authors and Narrators
- Progress is synced both ways and obtained just ahead of playing
- Changes you make in Audiobookshelf show up in Music Assistant straight away, including anything you add or delete. If Music Assistant was switched off at the time, run a sync to pick those changes up
- Single and multi-file audiobooks are supported
- Supports recommendations on the [Discover view](/ui/#view---discover)
- Playlists can only be created and edited if Audiobookshelf has just one audiobook library and one podcast library. With more than one, Music Assistant has no way of knowing which library a new playlist belongs in

## Configuration

The following is needed to setup this provider:

- <b>Server.</b> A server URL (e.g. `https://abs.domain.tld/` or `http://192.168.1.4:13378/` for a local server) of an Audiobookshelf instance.
- Authentication without <a href="https://www.audiobookshelf.org/guides/oidc_authentication/" target="_blank" rel="noopener noreferrer">OIDC</a>:
    - <b>Username.</b> The username of an Audiobookshelf user
    - <b>Password.</b> The password of this user

> [!NOTE]
> The user must be of type user, admin or root. Guest users are neither tested nor supported

- If <a href="https://www.audiobookshelf.org/guides/oidc_authentication/" target="_blank" rel="noopener noreferrer">OIDC</a> is configured, use a token instead of a username and password:
    - On Audiobookshelf 2.26 or newer, create an API key by following the <a href="https://www.audiobookshelf.org/guides/api-keys/" target="_blank" rel="noopener noreferrer">Audiobookshelf guide</a>, and put that in the token field
    - On older versions, an admin can get a token for any user from the Audiobookshelf settings under Users

> [!NOTE]
> Do not use one of the older tokens if you are on 2.26 or newer. They still work for now, but Audiobookshelf will drop them eventually and this source will stop working when it does.

### Multi-user environment

The audiobookshelf provider can be set up multiple times for individual users.
To achieve correct syncing of the progress of individual media items with an MA
user please refer to [user management](/settings/user-management/#filter-progress-multi-user).

### Advanced Settings

- <b>Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default
- <b>Hide empty podcasts.</b> Podcasts with no episodes yet downloaded may be skipped when syncing

## Known Issues / Notes

- For audiobooks made up of several files, Music Assistant shows the format as PCM rather than the format the files are actually in. The audio itself is unaffected
- Tested currently against ABS >= 2.19.0
- In the first instance of any problems ensure the server is running the <a href="https://github.com/advplyr/audiobookshelf/releases" target="_blank" rel="noopener noreferrer">latest version of the audiobookshelf software</a>

## Not Yet Supported

- Editing from within Music Assistant works for playlists only, and only under the restriction described above
- Adding or removing a whole library in Audiobookshelf does not show up on its own. Run a sync afterwards and it will appear. Changes to the contents of a library you already have are picked up straight away
