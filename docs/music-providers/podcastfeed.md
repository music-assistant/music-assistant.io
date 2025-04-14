# Podcast RSS Feed Provider ![Preview image](../assets/icons/rss-icon.png){ width=70 align=right }

Music Assistant has support for streaming podcasts from RSS feeds. Contributed and maintained by [saeugetier](https://github.com/saeugetier)

The Podcast RSS Provider allows subscribing to podcast feeds. The RSS Feed only provides a single podcast. No aggregated feeds are possible. For multiple podcasts, multiple providers with each a unique feed must be configured.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Podcasts |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossy, Variable Quality |
| Login Method | None |

### Other

- Allows parsing a standardized RSS podcast feed retrieved by a configured URL

## Configuration

A URL to the RSS feed must be configured.

## Known Issues / Notes

- Only feeds strictly following the standardized podcast feed format are supported
- No checking is done to identify two or more providers configured with the same feed

## Not Yet Supported

- Automatic synchronization at a given interval. Podcast feed information must be refreshed manually
