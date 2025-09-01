# iTunes Podcast Search Provider ![Preview image](../assets/icons/itunes-podcast-icon.png){ width=70 align=right }

Music Assistant has support for [iTunes Podcast Searching](https://podcasts.apple.com/us/browse). Contributed and maintained by [Fabian Munkes](https://github.com/fmunkes)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Podcasts |
| [Recommendations](../ui.md#view-home) Supported | Yes |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
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
- If a podcast does not appear in the search results, but is known to be freely available on Apple Podcast, this may be because content creators are permitted to hide the RSS feed within the Apple Podcast's source. Without the feed URL the provider is unable to access the media information (an INFO log message will appear in the MA log if this is the case). One solution is to try and search the web for an RSS feed URL for your specific podcast(s). If it exists, use the [Podcast RSS Feed](https://www.music-assistant.io/music-providers/podcastfeed/) to add it to MA manually. The other option is to try and find it on one of the other podcast providers.
