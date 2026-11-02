---
title: "BookOrbit"
---

# BookOrbit <img src="/assets/icons/bookorbit-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://github.com/bookorbit/bookorbit" target="_blank" rel="noopener noreferrer">BookOrbit</a>. Contributed and maintained by <a href="https://github.com/justinwoodland" target="_blank" rel="noopener noreferrer">justinwoodland</a>

BookOrbit is a free, self-hosted server for your own audiobooks. You run it on your own hardware, it organises the library and remembers where you are in each book, and you can listen from its own apps.

This source points Music Assistant at that server so the same audiobooks are available to play. Progress travels in both directions, which means a book started in BookOrbit can be picked up again in Music Assistant, or the other way round.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | Yes |
| Media Types Supported | Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |
| Maximum Stream Quality | 192kHz 24 bit |
| Login Method | Password |

### Other

- Populates audiobooks from all libraries accessible by the supplied user
- Has support for dedicated author and narrator tabs in the audiobooks view
- Syncs audiobook series enabling "collapse collections" in the audiobooks view
- Browse Feature has the following structure:

```
        Library_Name_A (Audiobooks library)
            Authors
                Author_1
                    Audiobook_1
            Narrators
                Narrator_1
                    Audiobook_1
            Series
                Series_1
                    Audiobook_1
            Audiobooks
                Audiobook_1
                Audiobook_2
```

- Search covers audiobooks, authors and narrators
- Progress is synced both ways and obtained just ahead of playing
- Single and multi-file audiobooks are supported

## Configuration

The following is needed to set up this provider:

- <b>Server.</b> A server URL (e.g. `https://bookorbit.domain.tld/` or `http://192.168.1.4:3000/` for a local server) of a BookOrbit instance
- <b>Username.</b> The username of a BookOrbit user
- <b>Password.</b> The password of this user

### Multi-user environment

BookOrbit keeps listening progress separately for each of its own users, so each Music Assistant user needs a source of their own, signed in to their own BookOrbit account. A user can add one themselves, or an administrator can add it for them and set them as the owner. See [audiobook and podcast progress](/settings/user-management/#audiobook-and-podcast-progress).

### Advanced Settings

- <b>Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default

## Known Issues / Notes

- In the first instance of any problems ensure the server is running a recent <a href="https://github.com/bookorbit/bookorbit/releases" target="_blank" rel="noopener noreferrer">BookOrbit release</a>
- Changes made to a book in BookOrbit after it has already been added to Music Assistant (for example a new title) may not come through on a normal sync. Refresh the item in Music Assistant to pull the latest details.

## Not Yet Supported

- Podcasts
- Recommendations on the Discover view
