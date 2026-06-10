---
title: "MusicMe"
---

# MusicMe <img src="/assets/icons/musicme-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [MusicMe](https://www.musicme.com). Contributed and maintained by [Julien Deveaux](https://github.com/JulienDeveaux).

MusicMe is a French music streaming service operated by ApachNetwork with a catalogue of 13M+ tracks from major and independent labels.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by MusicMe.

> [!NOTE]
> A MusicMe subscription is required for full streaming functionality.
> MusicMe is primarily available in France.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view-home) Supported | Yes |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | AAC in MP4 (44.1 kHz) |
| Login Method | Email + Password |

### Other

- Searching the MusicMe catalogue is possible, with a fallback to the MusicMe web search for niche queries
- Browse is available to explore new releases (by genre), top artists, and thematic radios
- Personalized recommendations (featured content, new releases, top artists, radios) appear in the Recommendations section on the Home screen
- Top tracks per artist are derived from their most recent albums

## Configuration

- In the configuration, you need to enter your MusicMe account email and password

## Known Issues / Notes

- MusicMe does not allow simultaneous playback from multiple devices; playing from the MusicMe website while using Music Assistant will interrupt one of the sessions
- MusicMe's search API is an autocomplete that only returns popular/exact matches; niche artists may not appear in search results but can be found by browsing
- Artist cover art is not always available from MusicMe; missing covers will show a 404 warning in MA logs (cosmetic only)
- Library sync (favorites) is not available — MusicMe does not expose this through their service
