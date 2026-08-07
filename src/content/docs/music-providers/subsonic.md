---
title: "Subsonic"
---

# Open Subsonic <img src="/assets/icons/subsonic_icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for music servers which work to the <a href="https://opensubsonic.netlify.app/" target="_blank" rel="noopener noreferrer">Open Subsonic API definition</a>. The implementation has been tested against Gonic and Navidrome but should work with any implementation. This component is contributed and maintained by <a href="https://github.com/khers" target="_blank" rel="noopener noreferrer">khers</a>

Subsonic started life as a music server you install on your own hardware and point at your own music files, with an API that other apps use to browse and stream that collection. Open Subsonic is a newer, community-maintained version of that API, looked after by the people who write the servers and the apps that use them.

This source connects to any server that supports the Open Subsonic specification, so music already indexed there is available without cataloguing it again. Note that Open Subsonic is a separate specification from the original Subsonic one, and a server that only implements the original will not work.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | FLAC 192kHz 24 bit |
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
- <b>Server Path.</b> Anything that comes after the address, if your server sits at something like `music.domain.tld/mypathroute/` rather than at the top level. Leave this blank unless you know you need it

### Settings

- <b>Enable Podcasts.</b> This toggle controls podcast availability in Music Assistant
- <b>Enable Legacy Auth.</b> Some Subsonic implementations require this to be enabled to authenticate
- <b>Recommend Favorites.</b> Should favorited (starred) items be included as recommendations?
- <b>Recommend New Albums.</b> Should new albums be included as recommendations?
- <b>Recommend Most Played.</b> Should most played albums be included as recommendations?
- <b>Recommendation Limit.</b> How many recommendations from each enabled type should be included?
- <b>Number of items included per server request.</b> Page size per server request, default is 200. Low bandwidth connections should consider lowering. Can be raised up to 500.

## Known Issues / Notes

- Searching with nothing typed in is allowed by the specification, but some servers refuse it. If search or the track list fails, that is worth raising with whoever makes your server
- This source only works with servers that follow the Open Subsonic specification. If your server does not support the newer specification, Music Assistant cannot talk to it. Your server's own documentation should say which one it follows
- If you find a mismatch between what is displayed by your Subsonic compatible server and Music Assistant then refer to and contribute <a href="https://github.com/music-assistant/support/issues/2192" target="_blank" rel="noopener noreferrer">here to help find a solution</a>
- Not all servers handle tracks or albums with several contributing artists well. If you see odd artists appearing in Music Assistant, this is usually the cause. See the discussion <a href="https://github.com/music-assistant/support/issues/2965" target="_blank" rel="noopener noreferrer">here</a>
- Some files may not play at all, most often m4a and opus, and anything encoded at a variable bitrate. These formats can hold information part way through the file rather than all of it at the start, which Music Assistant cannot work with over a Subsonic connection. Your options are to avoid these formats, to set your server to convert them to something else before sending them, or to keep those files out of your Subsonic library and reach them another way
- Autoplay (<a href="https://www.music-assistant.io/usage/#the-queue" target="_blank" rel="noopener noreferrer">described here</a>) needs your server to be able to suggest similar songs, which not every server does out of the box. Gonic and Navidrome both need a Last.fm API key added before they can. Check your server's documentation
- To be clear, this will not work with the original Subsonic or with anything built on it, such as Airsonic or Airsonic-Advanced, unless that software has since moved over to the Open Subsonic specification.
