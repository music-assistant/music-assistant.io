---
title: "DI.fm Network"
---

# DI.fm Network Provider <img src="/assets/icons/difm-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for the DI.fm Radio Network which includes <a href="https://www.di.fm" target="_blank" rel="noopener noreferrer">DI.fm</a>, <a href="https://www.radiotunes.com" target="_blank" rel="noopener noreferrer">Radiotunes</a>, <a href="https://www.zenradio.com" target="_blank" rel="noopener noreferrer">Zen Radio</a>, <a href="https://www.jazzradio.com" target="_blank" rel="noopener noreferrer">Jazz Radio</a>, <a href="https://www.classicalradio.com" target="_blank" rel="noopener noreferrer">Classical Radio</a>, and <a href="https://www.rockradio.com" target="_blank" rel="noopener noreferrer">Rock Radio</a>. Contributed and maintained by <a href="https://github.com/benklop" target="_blank" rel="noopener noreferrer">Ben</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio |
| [Recommendations](../ui#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui#track-menu) | No |
| Maximum Stream Quality | Lossy MP3 (320kbps) |
| Login Method | API Key |

### Other

- All six networks are available with the one subscription and the provider allows selection of which network(s) are desired to be subscribed to
- Hundreds of curated radio streams from the six networks are available
- Channel artwork, genre information, and detailed channel descriptions are available

## Configuration

- In the configuration, you need to add an API key and select the desired networks

> [!NOTE]
> This provider requires a premium subscription and a "listen key" which is retrievable from the settings panel of any of the sites in the network. The key from all sites is identical and subscribing to one provides access to all.

> [!CAUTION]
> Consider the Sync / Import options for this provider. Leaving the MA default of `Import into the library and mark as favorite` will result in all stations from all selected networks being added to the MA library which may not be desirable.

## Known Issues / Notes

- Only one stream at a time from a network is supported. If an attempt is made to play a stream and it stops playing after 30 seconds, this indicates another stream is already playing from the network. Currently playing streaming clients can be found on the settings page of any member in the network

## Not Yet Supported

More metadata is available in the API but is not yet exposed.
