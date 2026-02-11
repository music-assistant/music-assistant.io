---
title: "iTunes Podcast Search Provider"
---

# iTunes Podcast Search Provider <img src="/assets/icons/itunes-podcast-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://podcasts.apple.com/us/browse" target="_blank" rel="noopener noreferrer">iTunes Podcast Searching</a>. Contributed and maintained by <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Podcasts |
| [Recommendations](../ui#view-home) Supported | Yes |
| Lyrics Supported | No |
| [Radio Mode](../ui#track-menu) | No |
| Maximum Stream Quality | Lossy, Variable Quality |
| Login Method | None |

### Other

- Search for podcasts via the iTunes API

## Configuration

- Configure your country
- Specify the Maximum number of episodes to be retrieved (use 0 for all)
- Optionally disable explicit results

## Known Issues / Notes

- The search results may contain video podcasts due to the inability to filter them out
- If a podcast is desired to be part of the MA library, you have to add it, or mark it as a favorite. The provider is search only
- If a podcast does not appear in the search results, but is known to be freely available on Apple Podcast, this may be because content creators are permitted to hide the RSS feed within the Apple Podcast's source. Without the feed URL the provider is unable to access the media information (an INFO log message will appear in the MA log if this is the case). One solution is to try and search the web for an RSS feed URL for your specific podcast(s). If it exists, use the <a href="https://www.music-assistant.io/music-providers/podcastfeed/" target="_blank" rel="noopener noreferrer">Podcast RSS Feed</a> to add it to MA manually. The other option is to try and find it on one of the other podcast providers.
