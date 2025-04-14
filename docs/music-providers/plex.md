# Plex Provider ![Preview image](../assets/icons/plex-icon.svg){ width=70 align=right }

Music Assistant has support for using Plex (MusicLibrary). Contributed by [micha91](https://github.com/micha91)

!!! note 
    Please be advised that this provider currently has no dedicated developer. Issues may take longer to resolve as this will be maintained on a best effort basis. Consider sharing your music directly with MA instead

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC (192 kHz, 24 bit) |
| Login Method | Password |

### Other

- Search the Plex server

## Configuration

[![Preview image](../assets/screenshots/plex/plex-config-opts.png)](../assets/screenshots/plex/plex-config-opts.png)

- Click the `Use Plex GDM to discover local servers` button, this **should** discover your local server and prefill the `local_server_ip` and `local_server_port` fields.
- If GDM discovery fails, the 2 fields mentioned above will be filled with **"Discovery failed.... "**. In this case, please add the IP address of your server, and the port that you are exposing it on (usually 32400).
- If you login to Plex via MYPLEX.TV, click the `Authenticate on MYPLEX.TV` button, this may trigger your browser `pop-up` detection, so watch out for that, authenticate as you normally would for Plex.
- If you have configured Plex to allow local connection without authentication (see below), click the `Authenticate Locally` button.
- Select the Music library that you would like to use.
- Save the settings.

## Plex Configuration

- If you want to allow Music Assistant to connect to Plex without authentication, go to your Plex configuration, Settings / Network. In the field labeled `List of IP addresses and networks that are allowed without auth` enter the IP address of the computer running Music Assistant, and `Save Changes`.

## Known Issues / Notes

- A Plex provider is always bound to a user account and a library. 
- If you have multiple libraries, you need to add the Plex provider multiple times.
- If you have multiple Plex accounts, which have their own playlists, you can also add them as separate provider instances.
