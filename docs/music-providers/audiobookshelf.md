# audiobookshelf Provider ![Preview image](../assets/icons/audiobookshelf-icon.png){ width=70 align=right }

Music Assistant has support for [audiobookshelf](https://www.audiobookshelf.org/). Contributed and maintained by [Fabian Munkes](https://github.com/fmunkes)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | Yes |
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

- <b>Server.</b> A server URL (e.g. `https://abs.domain.tld/` or `http://192.168.1.4:13378/` for a local server) of an Audiobookshelf instance.
- Authentication without [OIDC](https://www.audiobookshelf.org/guides/oidc_authentication/):
    - <b>Username.</b> The username of an Audiobookshelf user
    - <b>Password.</b> The password of this user

!!! note
    The user must be of type user, admin or root. Guest users are neither tested nor supported

- If [OIDC](https://www.audiobookshelf.org/guides/oidc_authentication/) is configured:
    - Pre version 2.26, <b>Token instead of user/password.</b> Add the token in the specified field. This token can be obtained by an admin user for any user within the ABS settings -> users
    - From version 2.26 audiobookshelf uses the JWT token system internally. It is possible to create permanent API keys for an external application. Please follow the audiobookshelf docs at https://www.audiobookshelf.org/guides/api-keys/ to create such an API key

!!! note
    Should you insert an old legacy token, your provider will not work anymore once these are removed from ABS.

### Multi-user environment

The audiobookshelf provider can be set up multiple times for individual users.
To achieve correct syncing of the progress of individual media items with an MA
user please refer to [user management](../settings/user-management.md/#filter-progress-multi-user).

### Advanced Settings

- <b>Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default
- <b>Hide empty podcasts.</b> Podcasts with no episodes yet downloaded may be skipped when syncing

## Known Issues / Notes

- Multi-file Audiobooks: The UI will show PCM as the source file format (as that is what is used internally) instead of the actual file format of the audiobook
- Tested currently against ABS >= 2.19.0
- In the first instance of any problems ensure the server is running the [latest version of the audiobookshelf software](https://github.com/advplyr/audiobookshelf/releases)

## Not Yet Supported

- Playlists
- Edit provider feature
- Creation/deletion of a new library (i.e. not media items in a known library) is not reflected in an event driven way. Instead, use a normal sync
