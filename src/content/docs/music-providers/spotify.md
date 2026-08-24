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

1. Add the Spotify source via **Settings → Music Sources → Add a music source**.
2. Follow the on screen instructions which should take you through the initial flow shown here
<a href="/assets/screenshots/spotify-phase1.png"><img src="/assets/screenshots/spotify-phase1.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>

<details>
<summary>I clicked - Use the Spotify App</summary>
<div>

> [!NOTE]
> Your mobile device must be on the same network as the MA server for this to work

<a href="/assets/screenshots/spotify-phase2a.png"><img src="/assets/screenshots/spotify-phase2a.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>
</div>
</details>

<details>
<summary>I clicked - Use a web browser instead</summary>
<div>

> [!NOTE]
> The webpage error is shown in step 3 is normal. You then need to copy the entire URL from that browser tab and paste it into the dialog shown in the MA UI

<a href="/assets/screenshots/spotify-phase2b.png"><img src="/assets/screenshots/spotify-phase2b.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>
</div>
</details>

Spotify will now work, but consider the optional step below or click `Finish` and then `Done`.

### Optional: add a personal Client ID

Music Assistant shares one allowance from Spotify with everybody else using it, and Spotify limits how fast that allowance can be used. Registering your own free Client ID gives you an allowance of your own, which may make everything quicker but it does have some potential problems detailed in the known issues section.

1. Complete the basic setup above, then check `Use my own Spotify developer key` and click finish.
2. A new dialog will open where you must add your own Client ID. 
3. Create an app on Spotify's <a href="https://developer.spotify.com/documentation/web-api/concepts/apps" target="_blank" rel="noopener noreferrer">developer dashboard</a>. When filling in the app details, the only field that matters is the `Redirect URL`. Set it exactly to `https://music-assistant.io/callback`.
4. Enter the Client ID from your new app in the dialog you saw after completing step 2, then click `Finish` and then `Done`.

### Settings

Refer to the [Library Import Control](/music-providers/#library-import-control) settings.

## Known Issues / Notes

- Premium is required, including Duo and Family. Free accounts will not work
- When you first save the source, Music Assistant checks whether your account has audiobooks. If it does, audiobook options appear the next time you open the settings
- Spotify does not give Music Assistant any recommendations, so the Discover view will have nothing from Spotify in it
- Spotify does not tell Music Assistant what genre anything is
- Spotify has limited what Client IDs can do on recently created accounts. If you see 403 errors in the log after adding one, take the Client ID back out by selecting `Reconfigure` and going through the setup process again
