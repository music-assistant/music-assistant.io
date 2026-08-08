---
title: "Tidal"
---

# Tidal <img src="/assets/icons/tidal-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://tidal.com" target="_blank" rel="noopener noreferrer">Tidal</a>. Contributed and maintained by <a href="https://github.com/jozefKruszynski" target="_blank" rel="noopener noreferrer">jozefKruszynski</a>

Tidal is a subscription streaming service that streams everything in lossless quality, with hi-res and immersive versions of many albums.

Sign in and your Tidal favourites and playlists appear in Music Assistant, with the rest of the catalogue there to search.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | FLAC 192kHz 24 bit |
| Login Method | OAuth |

### Other

- Searching the Tidal catalogue
- Items in your Tidal library will be marked as "Favourites" in Music Assistant
- Marking an item as a "Favourite" from the Music Assistant interface will also mark it as favourite in Tidal
- On playback, the highest quality FLAC HiFi version will be selected
- Multiple Tidal accounts can be added. 

## Configuration

Tidal is linked with the OAuth device flow, so there is nothing to copy or paste.

1. Add the Tidal provider. Music Assistant shows your code and an `Open` button, and waits.

   [![Preview image](/assets/screenshots/tidal-device-login.png)](/assets/screenshots/tidal-device-login.png)

2. Click `Open` to go to `link.tidal.com` with the code already filled in, and approve the request while signed in to Tidal. To approve from a phone instead, go to `link.tidal.com` there and type the code shown in Music Assistant.

   [![Preview image](/assets/screenshots/tidal-approve.png)](/assets/screenshots/tidal-approve.png)

3. Setup completes on its own as soon as Tidal reports the approval. Codes are short-lived, so if yours expires before you approve it, start the setup again.

### Settings

- <b>Quality setting for Tidal.</b> Options are `Max [default]` or `High`. Max is up to 24-bit, 192 kHz and High is up to 16-bit, 44.1 kHz.

See also the [Library Import Control](/music-providers/#library-import-control) settings.

## Known Issues / Notes

- If nothing opens when you add the provider, the window was most likely blocked by the browser. Use the `Click here if the window did not open` link on the setup screen.
- The approval link can be opened on any device, not just the one running Music Assistant.
