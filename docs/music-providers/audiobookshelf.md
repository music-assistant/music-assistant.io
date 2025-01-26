# audiobookshelf Provider ![Preview image](../assets/icons/audiobookshelf-icon.png){ width=70 align=right }

Music Assistant has support for [audiobookshelf](https://www.audiobookshelf.org/). Contributed and maintained by [Fabian Munkes](https://github.com/fmunkes)

## Features

- Populates Audiobooks from all libraries accessible by the supplied user
- Populates Podcasts from all libraries accessible by the supplied user
- Browse Feature shows the library names and podcasts/ books within
- Progress reporting both ways

## Configuration

- The following is needed to setup this provider:
  - the URL of an Audiobookshelf instance
  - the username of an Audiobookshelf user
  - the password of this user
- Optionally, SSL verification may be disabled

## Known Issues / Notes

- Restarting Audiobookshelf terminates all open sessions. Music Assistant has no way to know this, so you must reload the provider. Otherwise the stream of your audiobook will be not available
- In the first instance of any problems ensure the server is running the [latest version of the audiobookshelf software](https://github.com/advplyr/audiobookshelf/releases)

## Not Yet Supported

- Browsing by author
- Browsing by collection
- Browsing by series
- Browsing by playlists
