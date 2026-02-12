---
title: "Tidal"
---

# Tidal Provider <img src="/assets/icons/tidal-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://tidal.com" target="_blank" rel="noopener noreferrer">Tidal</a>. Contributed and maintained by <a href="https://github.com/jozefKruszynski" target="_blank" rel="noopener noreferrer">jozefKruszynski</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui#view-home) Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](/ui#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (24 bit, 192 kHz) |
| Login Method | OAuth |

### Other

- Searching the Tidal catalogue
- Items in your Tidal library will be marked as "Favourites" in Music Assistant
- Marking an item as a "Favourite" from the Music Assistant interface will also mark it as favourite in Tidal
- On playback, the highest quality FLAC HiFi version will be selected
- Multiple Tidal accounts can be added. 

## Configuration

In the configuration, there are a series of steps that must be completed in order. Start at the top of the page and work down. 

<a href="/assets/screenshots/tidal-config.png"><img src="/assets/screenshots/tidal-config.png" alt="Tidal Config" style="width: 800px;"  loading="lazy" /></a>

1. Click on the first button and you will be redirected to the Tidal login page and after logging in you will be taken to an error page which is normal.

    <a href="/assets/screenshots/oops-page.png"><img src="/assets/screenshots/oops-page.png" alt="Oops Page" style="width: 800px;"  loading="lazy" /></a>

2. Take the full URL in the address bar of the Oops error page and insert it into the configuration screen  

3. Click on the last button to complete the setup

### Settings

- <b>Quality setting for Tidal.</b> Options are `Max [default]` or `High`. Max is up to 24-bit, 192 kHz and High is up to 16-bit, 44.1 kHz.

## Known Issues / Notes

- If the authorisation process gets stuck then try a different browser. It is likely the authorisation pop up window is being blocked
- If login is normally accomplished with "Proceed with Google" then a workaround is required as this option is not shown on the login page used my MA for authentication. In this case login to Tidal normally using a browser. In the same browser start the authentication process via MA. A prompt should be observed to use the existing login. Accepting that should result in the error page mentioned in step 1 above. From that point proceed with steps 2 and 3 above.
