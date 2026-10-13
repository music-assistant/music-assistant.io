---
title: "TeddyCloud"
---

# TeddyCloud <img src="/assets/icons/teddycloud-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for <a href="https://github.com/toniebox-reverse-engineering/teddycloud" target="_blank" rel="noopener noreferrer">TeddyCloud</a>, the self-hosted, open-source server behind the Toniebox family of children's audio players. Each Tonie in a TeddyCloud library appears in Music Assistant as an audiobook, complete with chapters. Contributed and maintained by <a href="https://github.com/yoyixms" target="_blank" rel="noopener noreferrer">yoyixms</a>

A Toniebox is an audio player made for children. It is a soft cube with no screen, and it is controlled by standing a small figurine called a Tonie on top of it, with each figurine standing for one story or album.

The audio is not held in the figurine. It sits on a server, and TeddyCloud is that server, run by you instead of by the manufacturer. Music Assistant connects to the server rather than to the box, so the stories your children already have can be played through your speakers with no Toniebox involved.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Maximum Stream Quality | Opus 96kbps |
| Login Method | None |

### Other

- Each Tonie is imported into the Music Assistant library as an audiobook, with the series as the author and the episode as the title
- Chapters are taken from the Tonie's track marks and story names, so it is possible to skip between stories and seek within them
- Audio is streamed on demand directly from TeddyCloud in its original Opus quality, with no re-encoding
- Tonies are searchable and browsable alongside the rest of the Music Assistant content
- It is possible to add multiple TeddyCloud sources

## Configuration

The following is needed to setup this provider:

- <b>Server.</b> A server URL (e.g. `http://teddycloud.local` or `http://192.168.1.50:8080` for a local server) of a TeddyCloud instance. Include the port if it is not on 80

## Known Issues / Notes

- Series, episode and artwork come from TeddyCloud's tonies.json data — custom or unrecognised Tonies are still playable but show a generic title and no cover
- Tonies configured to stream from an external live source are skipped, as there is no stored file to serve
- Your place in a story is not shared with the Toniebox. Music Assistant keeps its own position and the box keeps its own, so a story started on one does not resume where it left off on the other. Nothing is written back to TeddyCloud
- A Tonie's chapter marks and its story names come from two different places. Where they cannot be lined up with confidence the chapters are numbered instead of named, rather than risk a name landing on the wrong story
