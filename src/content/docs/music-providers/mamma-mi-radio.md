---
title: "Mamma Mi Radio"
---

# Mamma Mi Radio <img src="/assets/icons/mamma-mi-radio-icon.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for <a href="https://github.com/florianhorner/mammamiradio" target="_blank" rel="noopener noreferrer">Mamma Mi Radio</a> — a self-hosted Italian radio station that runs as a Home Assistant addon. Contributed and maintained by <a href="https://github.com/florianhorner" target="_blank" rel="noopener noreferrer">Florian Horner</a>.

Two Italian hosts. One very opinionated smart home. The addon generates a continuous radio program on your own hardware: music, host talk, news flashes, and gloriously fake ads. The hosts are Italian characters who broadcast mostly in English, slipping into Italian for greetings, asides, and the occasional dramatic moment. They notice your home (weather, moods, the small moments) and work them into the show between songs. You built the sensors; somebody finally comments on them. Out of the box the hosts speak with stock copy and fallback voices; add your own AI key and they become fully generative.

This provider exposes the station as a single Radio entry in Music Assistant with live typed now-playing metadata: the current track or segment, the hosts speaking, artwork, and what's coming up next.

> [!NOTE]
> Self-hosted and cloud-assisted: everything runs on your hardware with your own keys, and home context goes only to the AI provider you configure. The addon shows you the filtered context first; mute any entity, or turn home context off entirely. Music comes from the sources you configure (live charts by default, which need outbound network access, or Jamendo).

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (self-hosted) |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Artist Top Tracks Support | No |
| Similar Artists Support | No |
| Similar Tracks Support | No |
| Maximum Stream Quality | MP3 192 kbps, 48 kHz (reported by the addon) |
| Login Method | None |

### Live metadata

- The now-playing card alternates between the current segment and an "Up next" preview
- Music segments show title, artist, album, and artwork; host segments show the hosts by name
- Metadata is polled from the addon's versioned now-playing API with conditional requests (ETag/304), so the polling overhead is minimal

## Requirements

- A running <a href="https://github.com/florianhorner/mammamiradio" target="_blank" rel="noopener noreferrer">Mamma Mi Radio</a> addon, **version 2.13 or newer** (older addons do not expose the now-playing API this provider requires; the provider refuses to load and tells you to update the addon)

## Configuration

- Enter the base URL of your Mamma Mi Radio addon (default: `http://localhost:8000`)

Which URL is right depends on where Music Assistant runs relative to the addon:

- **Music Assistant addon and Mamma Mi Radio addon on the same Home Assistant host:** the default `http://localhost:8000` works, because the Mamma Mi Radio addon uses host networking and is reachable on the host's own interface.
- **Music Assistant on a different machine:** use the Home Assistant host's IP or DNS name, e.g. `http://192.168.1.10:8000`.
- **Behind a reverse proxy:** a path prefix is supported, e.g. `https://myhost.example/mammamiradio` (query strings and credentials in the URL are ignored).

The provider validates the URL and probes the addon once at startup; a wrong URL or an unreachable addon shows an actionable error in the provider settings and is retried automatically.

## Usage

- After setup, find **Mamma Mi Radio** via browse or search and add it to your library
- Press play — live now-playing metadata appears within one update interval (about 12 seconds)
