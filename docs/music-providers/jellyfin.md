# Jellyfin Provider ![Preview image](../assets/icons/jellyfin-logo.svg){ width=70 align=right }

Music Assistant has support for music servers which work to the Jellyfin definition. This component was contributed by [lokiberra](https://github.com/lokiberra) and maintained by lokiberra and [jc2k](https://github.com/jc2k)

## Features

- Support for Albums, Artists, Tracks Playlists 
- Search from 'Music' libraries on the Jellyfin server
- Max Quality: Lossless FLAC (24 bit, 192 kHz)

## Configuration:
You will need to provide the following to Music Assistant:

- A server url (e.g. https://music.domain.tld/ or http://192.168.1.4:8096/ for a local server)
- A user name for the account you want Music Assistant to use to access your server
- The password for this account

## Not Yet Supported:
- Album types metadata

## Known Issues / Notes
- This provider makes use of the [Jellyfin ApiClient](https://github.com/jellyfin/jellyfin-apiclient-python) for communicating with the server. If something is failing to work properly in Music Assistant, try to use that library to interact with your server (can you ping it?, fetch artist and albums?, can you search?).
