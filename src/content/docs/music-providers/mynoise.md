---
title: "myNoise"
---


# myNoise <img src="/assets/icons/mynoise-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for [myNoise](https://mynoise.net). This component is contributed and maintained by [eyecreate](https://github.com/eyecreate).

This source streams the noise machines from [mynoise.net](https://mynoise.net) as endless, looping soundscapes. myNoise machines are interactive soundscapes built from a set of short, seamlessly loopable audio samples (one per frequency band). The myNoise website plays them through the browser's WebAudio API with a mixer per band; this provider recreates that model server-side, so each machine plays forever, just like in the browser, without any download or login. Donors can optionally unlock the patron-only *Magic* machines with their donation email.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by myNoise.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio (endless soundscapes) |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |
| Maximum Stream Quality | MP3 source layers, mixed to PCM 44.1kHz 16 bit |
| Login Method | None (optional patron email) |

### What is available

myNoise has no public API, so the catalog of machines is read from the public index page of mynoise.net and refreshed automatically every 30 days. The machines are grouped into their categories from the website, for example:

| Category | Examples |
|:---------|:---------|
| Natural Noises | Distant Thunder, Rain on a Tent, Fireplace |
| Synthetic Noises | White Noise & Co, Brownish White, Grey Noise |
| Experimental | Binaural Beats, Isochronic Tones, Solfeggio Tones |
| Landscapes | Japanese Garden, Irish Coast, Icelandic Shores |
| Ambiences | Autumn Walk, Underwater, Cosy Rain |
| Fantasy | Medieval Library, Zen Garden, Dark Forest |
| Spaces | Cafe Restaurant, Calm Office, Church |
| Transports | Railroads, Spaceship, Aircraft Cabin |
| Urban | Wet Asphalt, City Rain, Port Town |
| Tonal Drones | Singing Bowls, Tibetan Choir, Ice World |

The exact set of categories and machines follows whatever mynoise.net publishes, so new machines appear automatically. The provider also ships a bundled fallback catalog (100 machines), so known machines still work if the website is unreachable at startup.

### How it works

- Each machine's audio layer files are fetched from the myNoise CDN and cached locally on first play
- The layers are looped and mixed into one endless stream on the fly by ffmpeg, using the machine's default band mix as designed by the author
- Because the looping happens on cached local files, playback does not repeatedly hit the CDN and stays smooth without re-downloading

## Configuration:
- Go to **Settings → Music Sources → Add a music source** and select `myNoise`
- There is nothing to configure, no account is needed

In the provider's settings there are a few options:

- **Refresh machine catalog** — re-download the list of noise machines from mynoise.net. Normally refreshed automatically every 30 days
- **Patron email** (optional) — myNoise grants lifetime privileged access to donors. If you donated, enter the email address of your donation: the provider logs in with it (no password needed) and the patron-only *Magic* machines are unlocked
- **Master gain (dB)** (advanced) — extra gain applied to the final mix of every machine. Use this if machines play too loud or too quiet (start with -6)
- **Use alternate sample takes** (advanced) — myNoise ships two takes of every layer and the website picks one at random. Enable to always use the B-variant

## Usage

The machines are not added to the library and do not sync, but they do show up in search. They can also be found by browsing:

1. Go to **Browse** in the main menu
2. Open **myNoise**
3. Pick a category, then a machine

From there a machine can be played directly on any player, just like a radio station, and will loop endlessly.

## Known Issues / Notes

- Support for myNoise is still experimental, please report if you experience any issues or unexpected behaviour
- An internet connection to mynoise.net and mynoise.world is required, the machines are not available offline
- A machine plays endlessly and is handled like a live stream: it has no duration and cannot be seeked
- The patron-only *Magic* category on mynoise.net is excluded from the catalog unless you configure a **Patron email** that matches a donation. If the site rejects the configured email, the Magic machines simply stay locked
- Layer audio is stored in Music Assistant's cache directory and reused from then on; removing the cache directory is harmless — the files are simply downloaded again on next use
- myNoise content is (c) Stephane Pigeon / myNoise BV and licensed "FOR PERSONAL USE ONLY". This provider streams the same public files the website serves and is intended for personal use. Consider [donating to myNoise](https://mynoise.net)
