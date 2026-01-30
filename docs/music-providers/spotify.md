# Spotify Provider ![Preview image](../assets/icons/spotify-icon.svg){ width=70 align=right }

Music Assistant has full support for Spotify media listing and playback.

!!! note 
    A Spotify Premium account is required for this music provider. Free accounts will not work.

!!! note 
    Spotify has made it clear to third party products that lossless support is not to be persued.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | Yes |
| Maximum Stream Quality | Lossy, OGG Vorbis (320kbps) |
| Login Method | OAuth |

### Other

- Searching the Spotify catalogue is possible
- Items in your Spotify library (including the Liked Songs playlist) will be added to the Library in Music Assistant
- Adding an item from Spotify to the Music Assistant Library will also add it to "Your Library" in Spotify
- Marking an item as a favourite in Music Assistant will also add it to the MA Library and "Your Library" in Spotify
- Multiple Spotify accounts can be added. All playlists from all accounts will be shown. If a playlist is selected for playback the source Spotify account will be used

## Configuration
- The Spotify provider can only be configured from a device which is on the same subnet as the MA server (and not via a VPN)
- Configuration is done with an OAuth callback. Clicking on the AUTHENTICATE WITH SPOTIFY button will open a new tab where permission can be given for MA to access the logged in account
- Once the intial authentication is done a new option will appear towards the bottom of the view titled `Developer Token`. It is advantageous to add a personal Client ID as this will speed up access to the Spotify API and should eliminate rate limiting. How to obtain a Client ID is explained [here](https://developer.spotify.com/documentation/web-api/concepts/apps). When entering the information in the various fields the only mandatory item is the REDIRECT URL which must be set to `https://music-assistant.io/callback`. Using a personal Client ID is optional but rate limiting and streaming errors may be seen in the log if it is not supplied
- If a personal Client ID is added then click on the large button AUTHENTICATE DEVELOPER SESSION
- Finally the SAVE button must be pressed on the Spotify settings page. If the device being used kills the MA frontend before this is done then the provider setup will fail (Use a different, typically non-mobile, device if this happens)

### Settings

- <b>Sync Library Artists/Albums/Tracks/Playlists/Audiobooks/Podcasts from this provider to Music Assistant.</b> Whether to synchronize all artists/albums/tracks/playlists/audiobooks/podcasts from the local provider. 
- <b>Import album tracks.</b> By default, adding albums to the Music Assistant library imports only the album entry rather than the associated tracks. This approach allows for the manual selection of specific tracks to include. To override this behavior, this configuration option can be enabled. Users should note that some streaming providers may already automate this process by adding all tracks to their favorites by default.
- <b>Import playlist tracks.</b> By default, importing a playlist into Music Assistant adds only the playlist itself to the library. This allows the playlist to be streamed and individual tracks can be added manually as desired. This configuration option overrides that behavior for specific playlists by importing all associated tracks. Entries can be made using either the case-sensitive playlist name or the playlist URI.
- <b>Automatic sync interval for Artists/Albums/Tracks/Playlists/Podcasts/Audiobooks.</b> Various time periods are selectable or it can be disabled
- <b>Sync back library additions/removals (2-way sync).</b> This setting determines the behavior when an item is manually added to or removed from the Music Assistant library. Enabling this option ensures that these actions are synchronized back to the original provider. Without synchronization, items removed from the library may reappear during the next automatic sync if they remain present on the provider's side.
- <b>Sync Podcast Progress from Spotify.</b> Automatically sync episode played status from Spotify to Music Assistant. Episodes marked as played in Spotify will be marked as played in MA. Only enable this if you use both the Spotify app and Music Assistant for podcast playback.
- <b>Sync Audiobook Progress from Spotify.</b> Automatically sync audiobook progress from Spotify to Music Assistant. Progress from Spotify app will sync to MA when audiobooks are accessed. Only enable this if you use both the Spotify app and Music Assistant for audiobook playback.

## Known Issues / Notes

- Due to restrictions with Spotify's API, only Spotify Premium accounts are supported (including Duo and Family). Free accounts will not work
- Upon first saving of the provider a check is done for Audiobook support within the account. If the check is successful then additional Audiobook related options will be seen when revisiting the provider settings
- After adding the developer token there is then two sessions created to a single spotify provider and MA routes the requests appropriately. For example, playlists are requested via the MA global token (which is rate limited but allows playlist retrieval) while other items are retrieved via the dev token. Search is done using the dev token by default as otherwise it is very slow. Playing and browsing playlists is routed through the global token to the originating provider (useful when multiple Spotify accounts are added)
- The Spotify API does not support the provision of recommendations
