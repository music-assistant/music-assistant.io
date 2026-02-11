---
title: "Open Subsonic Provider"
---

# Open Subsonic Provider <img src="/assets/icons/subsonic_icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for music servers which work to the <a href="https://opensubsonic.netlify.app/" target="_blank" rel="noopener noreferrer">Open Subsonic API definition</a>. The implementation has been tested against Gonic and Navidrome but should work with any implementation. This component is contributed and maintained by <a href="https://github.com/khers" target="_blank" rel="noopener noreferrer">khers</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts |
| [Recommendations](../ui#view-home) Supported | Yes |
| Lyrics Supported | No |
| [Radio Mode](../ui#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (24 bit, 192 kHz) |
| Login Method | Password |

### Other

- Searching the Subsonic catalogue
- All music tracks will be imported into MA

## Configuration:
You will need to provide the following to Music Assistant:

- <b>Username.</b> The account you want Music Assistant to use to access your server
- <b>Password.</b> For the account specified
- <b>Base URL.</b> The server URL starting with http:// or https:// (e.g. https://music.domain.tld)
- <b>Port.</b> Typically, 80 for plain http, or 443 for https, but can be any port where your server can be reached
- <b>Server Path.</b> Path to append to the Base URL which is used to get to the Rest API (e.g. mypathroute/ if you are path routing. (Leave this blank unless you know you need it))

### Settings

- <b>Enable Podcasts.</b> This toggle controls podcast availability in Music Assistant
- <b>Enable Legacy Auth.</b> Some Subsonic implementations require this to be enabled to authenticate
- <b>Force Player Provider Seek.</b> Some Subsonic implementations advertise that seeking is supported when it isn't. If seeking does not work then enable this option
- <b>Recommend Favorites.</b> Should favorited (starred) items be included as recommendations?
- <b>Recommend New Albums.</b> Should new albums be included as recommendations?
- <b>Recommend Most Played.</b> Should most played albums be included as recommendations?
- <b>Recommendation Limit.</b> How many recommendations from each enabled type should be included?
- <b>Number of items included per server request.</b> Page size per server request, default is 200. Low bandwidth connections should consider lowering. Can be raised up to 500.

## Known Issues / Notes

- Not all server implementations accept an empty string as a search query, however this is considered valid input per the API documentation. If search or track enumeration fails, ask the authors of your server implementation about handling empty query strings
- This provider makes use of https://github.com/khers/py-opensonic for communicating with the server, if something is failing to work properly in Music Assistant, try to use that library to interact with your server (can you ping it?, fetch artist and albums?, can you search?)
- This provider only supports servers implementing the Open Subsonic API definition. To verify that your server is compatible, use the same setup you used to test connectivity above to hit the getOpenSubsonicExtensions() endpoint. If this endpoint is not implemented, MA cannot talk to your server
- If you find a mismatch between what is displayed by your Subsonic compatible server and Music Assistant then refer to and contribute <a href="https://github.com/music-assistant/support/issues/2192" target="_blank" rel="noopener noreferrer">here to help find a solution</a>
- Not all Open Subsonic implementations handle tracks/albums with multiple contributing artists particularly well. If you see strange artists listed in Music Assistant, please verify that your implementation has an artist ID for all artists listed on a track or album. See the discussion <a href="https://github.com/music-assistant/support/issues/2965" target="_blank" rel="noopener noreferrer">here</a>
- If problems are encountered seeking within tracks try the `Force player provider seek` option in the subsonic provider settings 
- It may not be possible to playback m4a files. Options to workaround this are
    - Don't use this format
    - Force the subsonic server to transcode all m4a files before serving to a format that works
    - Don't serve these files from a subsonic server
    - It may be possible to force an encoder to place the moov atom at the beginning of the file. This would make the files playable, but MA provides no support for this
- Don't Stop the Music mode (<a href="https://www.music-assistant.io/usage/#the-queue" target="_blank" rel="noopener noreferrer">described here</a>) relies on your subsonic servers implementation of the <a href="https://opensubsonic.netlify.app/docs/endpoints/getsimilarsongs/" target="_blank" rel="noopener noreferrer">getSimilarSongs</a> end point. Please ensure that you have configured your server for this to work. Both Gonic and Navidrome require the addition of a Last.fm API key to provide similar songs. Please see your subsonic server's documentation.
- Note that this provider is for server implementations that use the Open Subsonic API definitions _only_. This means that it will not work with the original Subsonic or any of its forks (like Airsonic or Airsonic-Advanced) unless those forks have also moved to using the Open Subsonic API specification.
