# DI.fm Network Provider ![Preview image](../assets/icons/difm-icon.png){ width=70 align=right }

Music Assistant has support for the DI.fm Radio Network which includes [DI.fm](https://www.di.fm), [Radiotunes](https://www.radiotunes.com), [Zen Radio](https://www.zenradio.com), [Jazz Radio](https://www.jazzradio.com), [Classical Radio](https://www.classicalradio.com), and [Rock Radio](https://www.rockradio.com). Contributed and maintained by [Ben](https://github.com/benklop)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossy MP3 (320kbps) |
| Login Method | API Key |

### Other

- All six networks are available with the one subscription and the provider allows selection of which network(s) are desired to be subscribed to
- Hundreds of curated radio streams from the six networks are available
- Channel artwork, genre information, and detailed channel descriptions are available

## Configuration

- In the configuration, you need to add an API key and select the desired networks

!!! note
    This provider requires a premium subscription and a "listen key" which is retrievable from the settings panel of any of the sites in the network. The key from all sites is identical and subscribing to one provides access to all.

## Usage

The DI.fm provider doesn't add stations to the 'Radio' tab by default. The browse view must be used to find andnadd a station to the MA library.

After adding to the library, the station will become available in the Radio view

## Known Issues / Notes

- Only one stream at a time from a network is supported. If an attempt is made to play a stream and it stops playing after 30 seconds, this indicates another stream is already playing from the network. Currently playing streaming clients can be found on the settings page of any member in the network

## NOT YET SUPPORTED:

More metadata is available in the API but is not yet exposed.
