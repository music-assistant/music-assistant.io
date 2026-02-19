---
title: "Podcast RSS Feed"
---

# Podcast RSS Feed Provider <img src="/assets/icons/rss-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming podcasts from RSS feeds. Contributed and maintained by <a href="https://github.com/saeugetier" target="_blank" rel="noopener noreferrer">saeugetier</a>

The Podcast RSS Provider allows subscribing to podcast feeds. The RSS Feed only provides a single podcast. No aggregated feeds are possible. For multiple podcasts, multiple providers with each a unique feed must be configured.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Lossy, Variable Quality |
| Login Method | None |

### Other

- Allows parsing a standardized RSS podcast feed retrieved by a configured URL

## Configuration

In the Generic Settings add the full RSS feed URL.

## Known Issues / Notes

- Only feeds strictly following the standardized podcast feed format are supported
- No checking is done to identify two or more providers configured with the same feed

## Not Yet Supported

- Automatic synchronization at a given interval. Podcast feed information must be refreshed manually
