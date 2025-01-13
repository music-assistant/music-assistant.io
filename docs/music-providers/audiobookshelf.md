# audiobookshelf Provider ![Preview image](../assets/icons/audiobookshelf-icon.png){ width=70 align=right }

Music Assistant has support for [audiobookshelf](https://www.audiobookshelf.org/). Contributed and maintained by [Fabian Munkes](https://github.com/fmunkes)

## Features

- Populates Audiobooks from all libraries accessible by the supplied user
- Populates Podcasts from all libraries accessible by the supplied user
- Browse Feature shows the library names and podcasts/ books within
- Progress reporting both ways

## Configuration

- For setup you need
  - the URL of an Audiobookshelf instance
  - username of an Audiobookshelf user
  - password of this user
- You may optionally disable ssl verification

## Known Issues / Notes

- Audiobookshelf supports multiple files (e.g. one file per chapter) per Audiobook. Music Assistant however expects a single file. To workaround this limitation the multiple files need to be merged into a single file. This can be achieved in Audiobookshelf by selecting the Audiobook, clicking EDIT, then TOOLS and then OPEN MANAGER. The merge option will then be found. Do not forget to take a backup of your initial files

## Not Yet Supported

- Browsing by author
- Browsing by collection
- Browsing by series
- Browsing by playlists
