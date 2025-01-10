# Podcast RSS Feed Provider ![Preview image](../assets/icons/rss-icon.png){ width=70 align=right }

Music Assistant has support for streaming podcasts from RSS feeds. Contributed and maintained by [sauegetier](https://github.com/saeugetier)

!!! note
    Both the free and paid subscription options are supported

The Podcast RSS Provider allows subscribing to podcast feeds. The RSS Feed only provides a single podcast. No aggregated feeds are possible. For multiple podcasts, multiple providers with each a unique feed must be configured.

## Features

- Allows parsing a standardized RSS podcast feed retrieved by a configured URL

## Configuration

A URL to the RSS feed must be configured.

## Known Issues / Notes

- Only feeds strictly following the standardized podcast feed format are supported
- No checking is done to identify two or more providers configured with the same feed

## Not Yet Supported

- Automatic synchronization at a given interval. Podcast feed information must be refreshed manually
