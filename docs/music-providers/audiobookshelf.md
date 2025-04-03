# audiobookshelf Provider ![Preview image](../assets/icons/audiobookshelf-icon.png){ width=70 align=right }

Music Assistant has support for [audiobookshelf](https://www.audiobookshelf.org/). Contributed and maintained by [Fabian Munkes](https://github.com/fmunkes)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Local Streaming   | Yes |
| Media Types Supported | Audiobooks, Podcasts |
| [Recommendations](../ui.md#view-home) Supported | Yes |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | 192kHz 24 bit |
| Login Method | Password or Token |

### Other

- Populates Audiobooks from all libraries accessible by the supplied user
- Populates Podcasts from all libraries accessible by the supplied user
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
            Audiobooks
                Audiobook_1
                Audiobook_2
        Library_Name_B (Podcasts)
            Podcast_1
            Podcast_2
```

- The Audiobook search function supports searching for Authors and Narrators
- Progress is synced both ways and obtained just ahead of playing
- Event driven updates of podcast/ audiobook metadata in **known** libraries:
    - A change is immediately reflected to the MA database if MA is running
    - Newly added and just deleted items are immediately reflected as well
    - BUT: if MA was down while changes in the ABS database occured, those will only be synced if a normal provider sync is triggered
- Single and multi-file audiobooks are supported
- Supports recommendations on the [Home View](../ui.md/#view-home)

## Configuration

The following is needed to setup this provider:

- A server URL (e.g. `https://abs.domain.tld/` or `http://192.168.1.4:13378/` for a local server) of an Audiobookshelf instance. 
- Authentication without [OIDC](https://www.audiobookshelf.org/guides/oidc_authentication/):
    - the username of an Audiobookshelf user
    - the password of this user
- If [OIDC](https://www.audiobookshelf.org/guides/oidc_authentication/) is configured:
    - Add the token in the specified field. This token can be obtained by an admin user for any user within the ABS settings -> users
- Optionally podcasts with no episodes yet downloaded may be skipped when syncing
- Optionally, SSL verification may be disabled

The user must be of type user, admin or root. Guest users are neither tested nor supported. 

## Known Issues / Notes

- Multi-file Audiobooks: The UI will show PCM as the source file format (as that is what is used internally) instead of the actual file format of the audiobook
- Tested currently against ABS >= 2.19.0
- In the first instance of any problems ensure the server is running the [latest version of the audiobookshelf software](https://github.com/advplyr/audiobookshelf/releases)

## Not Yet Supported

- Playlists
- Edit provider feature
- Creation/deletion of a new library (i.e. not media items in a known library) is not reflected in an event driven way. Instead, use a normal sync
