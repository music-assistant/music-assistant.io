# Tidal Provider ![Preview image](../assets/icons/tidal-icon.svg){ width=70 align=right }

Music Assistant has support for [Tidal](https://tidal.com). Contributed and maintained by [jozefKruszynski](https://github.com/jozefKruszynski)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Local Streaming   | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| Recommendations Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](https://www.music-assistant.io/ui/#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (24 bit, 192 kHz) |
| Login Method | OAuth |

### Other

- Searching the Tidal catalogue
- Items in your Tidal library will be marked as "Favourites" in Music Assistant
- Marking an item as a "Favourite" from the Music Assistant interface will also mark it as favourite in Tidal
- On playback, the highest quality FLAC HiFi version will be selected

## Configuration

In the configuration, there are a series of steps that must be completed in order. Start at the top of the page and work down. 

[![Tidal Config](../assets/screenshots/tidal-config.png){ width=800 }](../assets/screenshots/tidal-config.png)

1. Click on the first button and you will be redirected to the Tidal login page and after logging in you will be taken to an error page which is normal.

    [![Oops Page](../assets/screenshots/oops-page.png){ width=800 }](../assets/screenshots/oops-page.png)

2. Take the full URL in the address bar of the Oops error page and insert it into the configuration screen  

3. Click on the last button to complete the setup

## Known Issues / Notes

- If the authorisation process gets stuck then try a different browser. It is likely the authorisation pop up window is being blocked
- If login is normally accomplished with "Proceed with Google" then a workaround is required as this option is not shown on the login page used my MA for authentication. In this case login to Tidal normally using a browser. In the same browser start the authentication process via MA. A prompt should be observed to use the existing login. Accepting that should result in the error page mentioned in step 1 above. From that point proceed with steps 2 and 3 above.

## Not yet supported

- Multiple accounts (this is being worked on and available soon)
