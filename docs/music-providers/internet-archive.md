
# Internet Archive Provider ![Preview image](../assets/icons/internet-archive-logo.png){ width=70 align=right }

Music Assistant has support for the Internet Archive. This component is contributed and maintained by [Gavin](https://github.com/ozgav)

This provider gives Music Assistant users free access to millions of audio recordings including live concerts, historical content, LibriVox audiobooks, and rare archival material from the Internet Archive.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Audiobooks |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | MP3 (16 bit, 44.1 kHz) |
| Login Method | None |

### Other

- Search across all Internet Archive audio content
- Artist browsing with albums and top tracks
- Full album track listings with individual track playback
- Audiobook streaming with chapter navigation
- LibriVox audiobook library browsing

## Configuration:
- In the configuration, you only need to click the save button.

## Known Issues / Notes

- The huge amount of audio files with sub-optimal categorisation means narrow search terms will often be needed to find the item of interest
- Internet Archive "items" will generally be created as albums. For example, live concerts will be created as an album under the artist
- Individual files with Internet Archive's "items" will generally be mapped as tracks
- Internet Archive "creators" will be mapped as artists
- Metadata heuristics are used to classify content so that items are correctly categorised as music or audiobooks
- Results are capped. Searches return a maximum of 200 items per query (Internet Archive API limit)
- Searches are optimized for music and audiobooks, however, other audio content may appear in results
- "Tracks" searches actually return the most downloaded recordings/concerts
- The provider attempts to filter this out but full concerts may be shown as individual "tracks"
- Audiobooks are supported however users can only jump between chapters and cannot seek within a chapter
- This free service does not have optimised API calls and delays can be experienced when browsing and searching. Long time caching is used to speed subsequent viewing
