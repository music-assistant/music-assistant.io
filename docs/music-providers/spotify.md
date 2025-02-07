# Spotify Provider ![Preview image](../assets/icons/spotify-icon.svg){ width=70 align=right }

Music Assistant has full support for Spotify media listing and playback.

!!! note 
    A Spotify Premium account is required for this music provider. Free accounts will not work.

## Features

- Support for Artists, Albums, Tracks and Playlists
- Items in your Spotify library (including the Liked Songs playlist) will be added to the Library in Music Assistant
- Adding an item from Spotify to the Music Assistant Library will also add it to "Your Library" in Spotify
- Marking an item as a favourite in Music Assistant will also add it to the MA Library and "Your Library" in Spotify
- Multiple Spotify accounts can be added. All playlists from all accounts will be shown. If a playlist is selected for playback the source Spotify account will be used
- Radio mode is supported

## Configuration
- You can only configure the Spotify provider from a device which is on the same subnet as the MA server (and not via a VPN)
- It is strongly recommended that a personal ClientID is used as this will speed up access to the Spotify API and should eliminate rate limiting. How to obtain a ClientID is explained [here](https://developer.spotify.com/documentation/web-api/concepts/apps). When entering the information in the various fields the only mandatory item is the REDIRECT URL which must be set to `https://music-assistant.io/callback`. Using a personal ClientID is optional but rate limiting and streaming errors will likely be seen in the log if it is not supplied
- After deciding whether to use a personal ClientID, click on the large button AUTHENTICATE WITH SPOTIFY
- A new window will open where you must allow Spotify to connect to Music Assistant
- You must then come back to MA and press SAVE in the Spotify settings page. If the device you are on kills the MA frontend before this is done then the provider setup will fail (Use a different, typically non-mobile, device if this happens)

## Known Issues / Notes

- Due to restrictions with Spotify's API, only Spotify Premium accounts are supported (including Duo and Family). Free accounts will not work
- When using a personal ClientID, automatically generated playlists such as "Discover Weekly" and radio mode will no longer work

## Not yet supported

- Podcasts support ([see this feature request](https://github.com/music-assistant/hass-music-assistant/discussions/429))
- Recommendations ([see this feature request](https://github.com/music-assistant/hass-music-assistant/discussions/535))
