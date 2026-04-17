---
title: "NTS Radio"
---

# NTS Radio <img src="/assets/icons/nts-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [NTS Radio](https://www.nts.live/). This component is contributed and maintained by <a href="https://github.com/mike-sheppard" target="_blank" rel="noopener noreferrer">Mike Sheppard</a>.

> [!CAUTION]
> **Disclaimer**
> This is an unofficial, best-effort implementation, NTS does not publish an API and are not affiliated with or endorse this provider. This mirrors endpoints used by their own clients, but may break if they change their tokens/api.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | AAC |
| Login Method | Optional password (NTS Supporters) |

### What's included

- **NTS 1 and NTS 2**: the two live channels with now-playing show metadata (show name, description, artwork, location) that updates every 60 seconds during playback
- **16 Infinite Mixtapes**: themed 24/7 music streams curated from the NTS archive (Poolside, Slow Focus, Low Key, 4 To The Floor, Expansions, etc.)

## Configuration

The provider works without a login. Live channels and Infinite Mixtapes stream fine and show-level metadata (show name, description, artwork) is displayed.

### Settings
Optional login with NTS Supporter credentials unlocks track info for live channels, but is not required to use the provider.

- **NTS Email**: optional - NTS Supporter account email address.
- **NTS Password**: optional - NTS Supporter account password.

## Usage

Browse stations at *Browse > NTS Radio*:

- **Live Channels**: play NTS 1 or NTS 2
- **Infinite Mixtapes**: pick any of the 16 themed streams

Stations can be added to your library from the station menu.

## Known Issues / Notes

- The NTS archive (past shows hosted on Mixcloud/SoundCloud) is not streamable via their API and is therefore not surfaced by this provider.
- Tracklist timestamps (a Supporter feature on the NTS web player) are not exposed by the Firebase backend this provider uses, so only the currently-playing track is available, not the history or upcoming.
