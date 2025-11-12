# ARD Audiothek Provider ![Preview image](../assets/icons/ard-audiothek.png){ width=70 align=right }

Music Assistant has support for streaming from [ARD Audiothek](https://www.ardaudiothek.de/). Contributed and maintained by [Jan Feil](https://github.com/jfeil)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | No |
| Media Types Supported | Radio, Podcasts |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossy, Variable Quality |
| Login Method | Password |

### Other

- Progress reporting and acquiring
- Populates libraries with subscribed podcasts
- Updates playlog on regular provider syncs


## Configuration

- Login to the ARD Audiothek app, if syncing is required

### Settings
- <b>E-Mail address of ARD account.</b>
- <b>Password of ARD account.</b>
- <b>Maximum bitrate for streams (0 for unlimited)</b> Define the maximum stream bitrate
- <b>Percentage required before podcast episode is marked as fully played</b> Configure how much of an episode playback must occur before the podcast is recorded as fully played (this is only used for visualization within Music Assistant) 

## Known Issues / Notes

- Nil

## Not Yet Supported

- Subscription management is not supported
- Podcast recommendations is not implemented
- For radio streams: Current played song is not displayed
