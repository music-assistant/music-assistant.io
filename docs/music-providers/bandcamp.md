# Bandcamp Music Provider ![Preview image](../assets/icons/bandcamp.svg){ width=70 align=right }

Music Assistant has support for Bandcamp. Contributed and maintained by [ALERTua](https://github.com/ALERTua)

!!! danger "DISCLAIMER"
    Please note that Bandcamp does not offer an official API to retrieve data and streams. This means that everything is built on a best-effort basis.

!!! note
    Identity token cookie needed for Bandcamp Account Collection access. Without it, library syncing options won't work. 

## Features

|                                                 |                         |
|:------------------------------------------------|:-----------------------:|
| Subscription FREE                               |           Yes           |
| Self-Hosted Local Media                         |           No            |
| Media Types Supported                           | Artists, Albums, Tracks |
| [Recommendations](../ui.md#view-home) Supported |           No            |
| Lyrics Supported                                |           Yes           |
| [Radio Mode](../ui.md#track-menu)               |           No            |
| Maximum Stream Quality                          |  Lossy, MP3 (128kbps)   |
| Login Method                                    |    Cookie (optional)    |

### Other
- Searching the Bandcamp catalogue
- The highest available stream from Bandcamp will be selected for playback

## Configuration

- Providing an identity cookie is optional, but allows importing owned albums as library items.
- Tweak Top Tracks Limit to balance search speed and quantity of search results.

!!! note
    Cookies may expire after some time. This means that you may have to replace the identity cookie in the provider configuration if library synchronization begins to fail. 

### Obtaining the Identity Cookie

- Open <a href="https://bandcamp.com/" target="_blank">Bandcamp</a> in your browser.
- Open the cookies storage via View -> Developer -> Developer Tools -> (Application) -> Storage -> Cookies -> `https://bandcamp.com`. Note that this might be named differently based on your browser. It should open a window similar to this:
[![Dev tools](../assets/screenshots/bandcamp_storage.png)](../assets/screenshots/ytmusic-developer-tools.png)

- Find `identity` cookie
- Double-click its value and copy its contents

### Configuring the provider 
- Navigate to 'Settings'
- Under Music Providers, click 'Add new', select 'Bandcamp', and fill in the identity cookie if needed
- Change optional values
- Click 'Save'

## Known Issues / Notes

- This provider mimics Bandcamp. Do not expect to see the same search results as you would when using Bandcamp itself
- Some low quality artwork can be expected when using this provider
- Tracks lack album art