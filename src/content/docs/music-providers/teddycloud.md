---
title: "TeddyCloud"
---

# TeddyCloud <img src="/assets/icons/teddycloud-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for <a href="https://github.com/toniebox-reverse-engineering/teddycloud" target="_blank" rel="noopener noreferrer">TeddyCloud</a>, the self-hosted, open-source server behind the Toniebox family of children's audio players. Each Tonie in a TeddyCloud library appears in Music Assistant as an audiobook, complete with chapters, that can be played to any MA players. Contributed and maintained by <a href="https://github.com/yoyixms" target="_blank" rel="noopener noreferrer">yoyixms</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Opus, 96 kbps VBR (48 kHz) |
| Login Method | None |

### Other

- Each Tonie is imported into the Music Assistant library as an audiobook, with the series as the author and the episode as the title
- Chapters are taken from the Tonie's track marks and story names, so you can skip between stories and seek within them
- Audio is streamed on demand directly from TeddyCloud in its original Opus quality, with no re-encoding
- Tonies are searchable and browsable alongside the rest of the Music Assistant content
- It is possible to add multiple TeddyCloud sources

## Configuration

The following is needed to setup this provider:

- <b>Server.</b> A server URL (e.g. `http://teddycloud.local` or `http://192.168.1.50:8080` for a local server) of a TeddyCloud instance. Include the port if it is not on 80

## Known Issues / Notes

- Series, episode and artwork come from TeddyCloud's tonies.json data — custom or unrecognised Tonies are still playable but show a generic title and no cover
- Tonies configured to stream from an external live source are skipped, as there is no stored file to serve
