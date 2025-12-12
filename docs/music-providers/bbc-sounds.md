# BBC Sounds Provider ![Preview image](../assets/icons/bbcsounds-logo.png){ width=70 align=right }

Music Assistant has support for streaming from BBC Sounds. Contributed and maintained by [Kieran Hogg](https://github.com/kieranhogg)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | No |
| Media Types Supported | Tracks, Radio, Podcasts |
| [Recommendations](../ui.md#view-home) Supported | Yes |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossy, AAC-LC(320kbps) |
| Login Method | None or Password |

### Other

- Stream live BBC radio shows, podcast series and on-demand audio
- Access your personalised BBC Sounds content*
- Keeps your My Sounds listen history up to date with your Music Assistant activity*

*Requires a logged in BBC account

## Configuration

The provider works without a login, but you will be restricted to a basic version of the Sounds content.

### Settings
- <b>Username and Password.</b> A BBC Sounds account is optional, but some UK-only content may not work without being logged in
- <b>Advanced - Show local radio stations</b>. By default, only national radio stations are listed. Enabling this option will also show local stations.
- <b>Advanced - Preferred Stream Format</b> Options are `HLS [default]` or `MPEG-DASH`

## Known Issues / Notes

The full functionality is enabled when you are a UK-based listener, and signed in to your BBC account. The BBC has slowly been moving towards excluding non-UK listeners from using its Sounds platform, more details [here](https://www.bbc.co.uk/sounds/help/questions/listening-outside-the-uk/outside-uk-changes). This provider currently allows access to live and catch up radio to International listeners via the Sounds API, but this could be restricted in the future.

## Not Yet Supported

- Pausing and seeking live radio
- International accounts may work, but are not currently supported
- The international menu should show available podcasts, this has not been implemented yet
- Showing the currently playing song for stations and catch-up is implemented but not yet released
- For signed-in users, accessing your subscribed content through the library is not yet supported, but is planned
