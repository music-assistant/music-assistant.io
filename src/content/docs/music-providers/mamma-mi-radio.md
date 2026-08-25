---
title: "Mamma Mi Radio"
---

# Mamma Mi Radio <img src="/assets/icons/mamma-mi-radio-icon.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for <a href="https://github.com/florianhorner/mammamiradio" target="_blank" rel="noopener noreferrer">Mamma Mi Radio</a>, a self-hosted radio station whose hosts notice what is happening in your home and work it into the show. Contributed and maintained by <a href="https://github.com/florianhorner" target="_blank" rel="noopener noreferrer">Florian Horner</a>.

Two Italian hosts. One very opinionated smart home. The App runs on your own hardware and puts out a continuous station: music, host talk, news flashes, and gloriously fake ads. The hosts are Italian characters who broadcast mostly in English, slipping into Italian for greetings, asides, and the occasional dramatic moment.

Turn on home context and the house joins the broadcast. Between songs a host might work the coffee machine into the banter, or ground the otherwise-fictional weather report in your actual forecast. You built the sensors; somebody finally comments on them.

Out of the box the hosts speak with stock copy and fallback voices. Add your own AI provider key in the App and they become fully generative.

> [!NOTE]
> Self-hosted and cloud-assisted. There is no Mamma Mi Radio account and no middleman service, but writing the hosts' lines and synthesizing their voices call out to the providers you configure, so the station needs network access. Home context is optional and read-only, and only the filtered context goes to the provider you chose: the App shows you that context before anything uses it, you can mute any entity, and you can turn home context off entirely.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support | No |
| Similar Artists Support | No |
| Similar Tracks Support | No |
| Maximum Stream Quality | Lossy, MP3 (192kbps, 48 kHz) |
| Login Method | None |

### Live metadata

This source reads the station's live programme state, so Music Assistant can show what is actually on air:

- Music segments show title, artist, album, and artwork; host segments show the hosts by name
- The now-playing card alternates between the current segment and an "Up next" preview

## Requirements

- A running <a href="https://github.com/florianhorner/mammamiradio" target="_blank" rel="noopener noreferrer">Mamma Mi Radio</a> App, **version 2.13 or newer**, reachable from the Music Assistant host.
- A working music source configured in Mamma Mi Radio.
- No AI key is required. Without one, the hosts use stock copy and fallback voices.

## Configuration

- **Mamma Mi Radio URL:** the base URL of your App (default: `http://localhost:8000`).

Which URL is right depends on where Music Assistant runs relative to the App:

- **Music Assistant App and Mamma Mi Radio App on the same Home Assistant host:** the default `http://localhost:8000` works, because the Mamma Mi Radio App uses host networking and is reachable on the host's own interface
- **Music Assistant on a different machine:** use the Home Assistant host's IP or DNS name, e.g. `http://192.168.1.10:8000`
- **Behind a reverse proxy:** a path prefix is supported, e.g. `https://myhost.example/mammamiradio` (query strings and credentials in the URL are ignored)

## Usage

- After setup, Mamma Mi Radio is added to your library automatically
- Press play; live now-playing metadata appears within one update interval (about 12 seconds)

## Known Issues / Notes

- The App appears as a single station. There is no per-track search or browsing into the programme, and tracks heard on air are not added to the Music Assistant library individually
- As with all radio in Music Assistant, tracks cannot be skipped or seeked
- Metadata refreshes about every 12 seconds, so the now-playing card can trail the audio slightly
- Only one instance of this source can be configured
- Music sources, hosts, language mix, and home-context permissions are all configured in the App, not here; see the <a href="https://github.com/florianhorner/mammamiradio" target="_blank" rel="noopener noreferrer">App documentation</a>
- Mamma Mi Radio itself has no account or subscription. Fully generative hosts require an API key from an AI provider you choose, billed by that provider
