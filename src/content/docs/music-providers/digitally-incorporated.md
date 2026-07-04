---
title: "DI.fm Network"
---

# DI.fm Network <img src="/assets/icons/difm-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for the DI.fm Radio Network which includes <a href="https://www.di.fm" target="_blank" rel="noopener noreferrer">DI.fm</a>, <a href="https://www.radiotunes.com" target="_blank" rel="noopener noreferrer">Radiotunes</a>, <a href="https://www.zenradio.com" target="_blank" rel="noopener noreferrer">Zen Radio</a>, <a href="https://www.jazzradio.com" target="_blank" rel="noopener noreferrer">Jazz Radio</a>, <a href="https://www.classicalradio.com" target="_blank" rel="noopener noreferrer">Classical Radio</a>, and <a href="https://www.rockradio.com" target="_blank" rel="noopener noreferrer">Rock Radio</a>. Contributed and maintained by <a href="https://github.com/benklop" target="_blank" rel="noopener noreferrer">Ben</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | Lossy MP3 (320kbps) |
| Login Method | API Key |

### Other

- All six networks are available with the one subscription and the provider allows selection of which network(s) are desired to be subscribed to
- Hundreds of curated radio streams from the six networks are available to browse and search
- Channel artwork, genre information, and detailed channel descriptions are available
- The library is populated with the favorite stations marked on the DI network websites. Favorites are **read-only** in Music Assistant — they are added or removed from the settings/favorites panel of any site in the network, and the change is synced into Music Assistant

### Managing Favorites

- Favorite stations are loaded from each selected network and added to the library
- Favorites are read-only within Music Assistant. The stations that appear are changed by adding or removing favorites on the website of any network in the DI.fm family
- Changes made on the website may take a few minutes to appear in Music Assistant, as favorites are cached for 5 minutes

## Configuration

- An API key must be added and the desired networks selected in the configuration

> [!NOTE]
> This provider requires a premium subscription and a "listen key" which is retrievable from the settings panel of any of the sites in the network. The key from all sites is identical and subscribing to one provides access to all. The listen key is used both for playback and for loading favorites.

## Known Issues / Notes

- Only one stream at a time from a network is supported. If an attempt is made to play a stream and it stops playing after 30 seconds, this indicates another stream is already playing from the network. Currently playing streaming clients can be found on the settings page of any member in the network

## Not Yet Supported

- More metadata is available in the API but is not yet exposed
