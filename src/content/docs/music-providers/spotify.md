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
> Spotify has made it clear to third party products that lossless support is not to be pursued.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | Lossy, OGG Vorbis (320kbps) |
| Login Method | OAuth |

### Other

- Searching the Spotify catalogue is possible
- Items in your Spotify library (including the Liked Songs playlist) will be added to the Library in Music Assistant
- Adding an item from Spotify to the Music Assistant Library will also add it to "Your Library" in Spotify
- Marking an item as a favourite in Music Assistant will also add it to the MA Library and "Your Library" in Spotify
- Multiple Spotify accounts can be added. All playlists from all accounts will be shown. If a playlist is selected for playback the source Spotify account will be used

## Configuration

### Basic setup

1. Add the Spotify source via `SETTINGS >> MUSIC SOURCES >> ADD A MUSIC SOURCE`.
2. Click the `AUTHENTICATE WITH SPOTIFY` button. A new tab opens on Spotify's own website where you give Music Assistant permission to access your account, so make sure your browser allows pop-ups. Use a device that is on the same home network as your MA server and is not connected to a VPN (see [Networking Basics](/faq/networking/)); if the button appears to do nothing, this is the most likely cause.

3. Click `AUTHORISE PLAYBACK`. Using your mobile device which is on the same network as the MA server, open the Spotify App. Start playing a track. Find the icon that allows you to transfer the music to another device, press it and then select 'Music Assistant Pairing'. Return to the Music Assistant UI and you should find the source is authorized. If this fails for any reason try the `AUTHORIZE IN BROWSER' option.

4. If you use the `AUTHORIZE IN BROWSER` option be aware that it is normal to get a failed to load page during the setup process. When on that page you need to copy the entire URL and paste that into the field in the MA UI that asks for it. You might need to wait for some time before the UI changes to allow entry of the URL.

4. Click `SAVE` on the Spotify settings page. The setup will fail if you skip this step. If your device closes the MA page before you can click `SAVE` (this can happen on mobile devices), retry from a laptop or PC.

Spotify will now work, but consider the optional step below.

### Optional: add a personal Client ID (recommended)

Spotify limits how quickly third party apps can make requests on its shared access. Adding your own free Client ID gives Music Assistant a dedicated allowance, which speeds up access and should eliminate rate limiting. Without it, you may see rate limiting and streaming errors in the log.

1. Complete the basic setup above, then reopen the Spotify settings. A new option titled `Developer Token` appears towards the bottom of the view.
2. Create an app on Spotify's <a href="https://developer.spotify.com/documentation/web-api/concepts/apps" target="_blank" rel="noopener noreferrer">developer dashboard</a>. When filling in the app details, the only field that matters is the `Redirect URL`. Set it exactly to `https://music-assistant.io/callback`.
3. Enter the Client ID from your new app in the `Developer Token` section, then click the large `AUTHENTICATE DEVELOPER SESSION` button.
4. Click `SAVE` again.

### Settings

Refer to the [Library Import Control](/music-providers/#library-import-control) settings.

## Known Issues / Notes

- Spotify has blocked accounts created around 2024 and later, and some older accounts are also affected. If you see `Key Error` messages in the log, your account is affected. There is currently no remedy; consider changing to [another streaming source that we support](/music-providers/)
- Due to restrictions with Spotify's API, only Spotify Premium accounts are supported (including Duo and Family). Free accounts will not work
- When you first save the source, MA checks whether the account supports audiobooks. If it does, additional audiobook related options appear when you revisit the source's settings
- After you add the developer token, MA maintains two sessions to a single Spotify source and routes requests appropriately. For example, MA requests playlists via its global token (which is rate limited but allows playlist retrieval) while it retrieves other items via the dev token. Search uses the dev token by default as it is otherwise very slow. Playing and browsing playlists is routed through the global token to the originating source (useful when multiple Spotify accounts are added)
- The Spotify API does not support the provision of recommendations
- The Spotify API does not return genre information
- Spotify has curtailed the usability of Client IDs for recently created accounts. If you see 403 errors in the log, remove the Client ID
