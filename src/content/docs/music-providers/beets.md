---
title: "beets"
description: Play the music library you manage with beets in Music Assistant
---

# beets <img src="/assets/icons/beets-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://beets.io/" target="_blank" rel="noopener noreferrer">beets</a>. Contributed and maintained by <a href="https://github.com/stellar-aria" target="_blank" rel="noopener noreferrer">stellar-aria</a>

beets is a powerful open-source music collection management and organization tool. It tags your files against MusicBrainz (or other providers), renames and files them into a tidy folder structure, and using plugins can also fetch cover art and lyrics, calculate ReplayGain, manage album extras, chromaprint your files, populate genres from Last.fm, and check for file corruption. All metadata and information it processes is kept in its own SQLite library database.

This source reads that database, so your music arrives in Music Assistant with the tags, cover art, genres, lyrics, and loudness beets has already worked out, rather than being scanned again from the files. Music Assistant only reads from beets and never changes your library.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes with Sonic Similarity Plugin                      |
| Maximum Stream Quality | FLAC, Unlimited |
| Login Method | None |

### Other

- Everything in your beets library is added to the Music Assistant library
- Cover art comes from the album art beets has saved, for example with its `fetchart` plugin
- Lyrics come from beets' `lyrics` plugin, where you have used it
- Volume normalisation uses the ReplayGain or R128 values from beets' `replaygain` plugin, so tracks beets has analysed play at the right level straight away
- Changes you make in beets, such as new imports, edited tags and removed albums, are picked up on the next library sync
- It is possible to add more than one beets source, for example for two separate beets libraries

## Configuration

Music Assistant needs to see two things from the machine beets runs on: the beets library database, and the music directory beets keeps your files in. If beets runs on the same machine as Music Assistant these are already there. If not, share or mount them so Music Assistant can read them.

You will need to provide the following to Music Assistant:

- <b>beets library database.</b> The path to beets' `library.db` file, as Music Assistant sees it. For example `/media/beets/library.db`
- <b>Music directory.</b> The path to beets' music directory, as Music Assistant sees it. For example `/media/music`
- <b>beets music directory on its own host.</b> Optional. The `directory` setting from your beets config, for example `/home/you/Music`. Only needed when the music directory is mounted at a different path for Music Assistant than it has for beets, so Music Assistant can find the files beets recorded with their full path

> [!NOTE]
> The database and the music directory both need to be inside one of your [storage locations](/settings/storage/). On the Home Assistant App that is the media folder or a network share added on the [Storage](/settings/storage/#adding-a-network-share) page. On Docker it is any folder mapped into the container, as described under [Your music files](/installation/#your-music-files).

### Settings

- <b>Advanced - ReplayGain target level (dB).</b> The `targetlevel` from the `replaygain` section of your beets config. Only change this if you changed it in beets. The default is 89
- <b>Advanced - R128 target level (dB).</b> The `r128_targetlevel` from the `replaygain` section of your beets config. Only change this if you changed it in beets. The default is 84

## Known Issues / Notes

- Playlists are not imported, because beets does not keep them in its library database
- With the [Sonic Similarity](/plugins/sonic-similarity/) plugin, beets tracks are analysed by [Sonic Analysis](/audio-analysis/sonic-analysis/) as they are played, but not in the overnight scan that covers Local Files. Similar tracks will only include beets tracks you have already played at least once
- If a sync finds the beets library empty when it was not before, Music Assistant leaves your library as it is rather than removing everything. This is almost always a mount that has gone missing, so check the database path can still be reached
- If tracks show up but will not play, check the music directory setting, and the beets music directory setting if beets runs on another machine. The files need to be reachable inside the music directory. Settings such as permissions and SELinux labels can prevent this.
