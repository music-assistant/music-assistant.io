# Subsonic Provider ![Preview image](../assets/icons/subsonic_icon.png){ width=70 align=right }

Music Assistant has support for music servers which work to the Open Subsonic API definition. The implementation has been tested against Gonic and Navidrome but should work with any implementation. This component is contributed and maintained by [khers](https://github.com/khers)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | Yes |
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
- <b>Enable legacy auth.</b> Some Subsonic implementations require this to be enabled to authenticate
- <b>Force player provider seek.</b> Some Subsonic implementations advertise that seeking is supported when it isn't. If seeking does not work then enable this option

## Known Issues / Notes

- Not all server implementations accept an empty string as a search query, however this is considered valid input per the API documentation. If search or track enumeration fails, ask the authors of your server implementation about handling empty query strings
- This provider makes use of https://github.com/khers/py-opensonic for communicating with the server, if something is failing to work properly in Music Assistant, try to use that library to interact with your server (can you ping it?, fetch artist and albums?, can you search?)
- This provider only supports servers implementing the Open Subsonic API definition. To verify that your server is compatible, use the same setup you used to test connectivity above to hit the getOpenSubsonicExtensions() endpoint. If this endpoint is not implemented, MA cannot talk to your server
- If you find a mismatch between what is displayed by your Subsonic compatible server and Music Assistant then refer to and contribute [here to help find a solution](https://github.com/music-assistant/support/issues/2192)
- Not all Open Subsonic implementations handle tracks/albums with multiple contributing artists particularly well. If you see strange artists listed in Music Assistant, please verify that your implementation has an artist ID for all artists listed on a track or album. See the discussion [here](https://github.com/music-assistant/hass-music-assistant/issues/2965)
- If problems are encountered seeking within tracks try the `Force player provider seek` option in the subsonic provider settings 
- It is not possible to playback m4a files. Options to workaround this are
    - Don't use this format
    - Force the subsonic server to transcode all m4a files before serving to a format that works
    - Don't serve these files from a subsonic server
    - It may be possible to force an encoder to place the moov atom at the beginning of the file. This would make the files playable, but MA provides no support for this
