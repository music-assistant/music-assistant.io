---
title: "Spotify"
---

# Spotify <img src="/assets/icons/spotify-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has full support for Spotify media listing and playback.

Spotify is the largest of the music streaming services, with a catalogue of around 100 million tracks alongside podcasts and audiobooks.

Connecting your account puts your saved music and playlists into Music Assistant and makes the catalogue searchable. Your players do not need to support Spotify Connect.

> [!WARNING]
> Spotify has blocked accounts created around 2024 and later from working with third party apps like Music Assistant, and some older accounts are also affected. If the provider does not work and you see `Key Error` messages in the log, your account is affected. There is currently no remedy; consider using [another streaming source that we support](/music-providers/) instead

> [!NOTE]
> A Spotify Premium account is required for this music source. Free accounts will not work.

> [!NOTE]
> Spotify has told third party products not to pursue lossless support, so do not expect it here.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | OGG Vorbis 320kbps |
| Login Method | OAuth |

### Other

- Searching the Spotify catalogue is possible
- "New Releases" and "Genres and Moods" folders are available in the Browse view
- Items in your Spotify library (including the Liked Songs playlist) will be added to the Library in Music Assistant
- Adding an item from Spotify to the Music Assistant Library will also add it to "Your Library" in Spotify
- Marking an item as a favourite in Music Assistant will also add it to the MA Library and "Your Library" in Spotify
- Multiple Spotify accounts can be added. All playlists from all accounts will be shown. If a playlist is selected for playback the source Spotify account will be used

## Configuration

### Basic setup

1. Add the Spotify source via `SETTINGS >> MUSIC SOURCES >> ADD A MUSIC SOURCE`.
2. Click the `AUTHENTICATE WITH SPOTIFY` button. A new tab opens on Spotify's own website where you give Music Assistant permission to access your account, so make sure your browser allows pop-ups. Use a device that is on the same home network as your MA server and is not connected to a VPN (see [Networking Basics](/faq/networking/)); if the button appears to do nothing, this is the most likely cause.
3. Click `SAVE` on the Spotify settings page. The setup will fail if you skip this step. If your device closes the MA page before you can click `SAVE` (this can happen on mobile devices), retry from a laptop or PC.

Spotify will now work, but consider the optional step below.

### Optional: add a personal Client ID (recommended)

Music Assistant shares one allowance from Spotify with everybody else using it, and Spotify limits how fast that allowance can be used. Registering your own free Client ID gives you an allowance of your own, which makes everything quicker. Without it you may find things slow to load, and see errors in the log.

1. Complete the basic setup above, then reopen the Spotify settings. A new option titled `Developer Token` appears towards the bottom of the view.
2. Create an app on Spotify's <a href="https://developer.spotify.com/documentation/web-api/concepts/apps" target="_blank" rel="noopener noreferrer">developer dashboard</a>. When filling in the app details, the only field that matters is the `Redirect URL`. Set it exactly to `https://music-assistant.io/callback`.
3. Enter the Client ID from your new app in the `Developer Token` section, then click the large `AUTHENTICATE DEVELOPER SESSION` button.
4. Click `SAVE` again.

### Settings

Refer to the [Library Import Control](/music-providers/#library-import-control) settings.

## Known Issues / Notes

- Premium is required, including Duo and Family. Free accounts will not work
- When you first save the source, Music Assistant checks whether your account has audiobooks. If it does, audiobook options appear the next time you open the settings
- Spotify does not give Music Assistant any recommendations, so the Discover view will have nothing from Spotify in it
- Spotify does not tell Music Assistant what genre anything is
- Spotify has also limited what Client IDs can do on recently created accounts. If you see 403 errors in the log after adding one, take the Client ID back out
