---
title: "Yandex Music"
---

# Yandex Music <img src="/assets/icons/yandex-music-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant has support for [Yandex Music](https://music.yandex.ru). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

Yandex Music is the streaming service of Yandex, the Russian internet company. It has a large Russian language catalogue alongside international releases, and its My Wave personalised radio is how a lot of people listen to it.

Connecting your account puts your Yandex Music library, the wider catalogue and My Wave itself inside Music Assistant.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> A Yandex Music Plus subscription is required for lossless (FLAC) quality and for everything here to work.
> Without one, some of what is described below will be unavailable.

> [!NOTE]
> Full source documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-music](https://trudenboy.github.io/ma-provider-yandex-music/)**


## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts, Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            Yes                     |
| Similar Tracks Support                          |            Yes                     |
| Maximum Stream Quality | FLAC |
| Login Method | Device Flow / QR Code / Token |

### Other

- Searching the Yandex Music catalogue is possible
- Items in a users Yandex Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Yandex Music
- Browse is available to explore the Yandex Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Wave, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- **My Wave** personalised radio. Likes, dislikes, skips and tracks you hear all the way through are sent back to Yandex, so the wave keeps learning from what you do in Music Assistant
- **Wave Modes** — 11 one-click presets for My Wave (Discover / Favorites / Popular, Calm / Active / Fun / Sad, Russian / Non-Russian / Without Words)
- **My Presets** — save your own named combinations of diversity, mood and language, re-launch them from Browse without fiddling with settings
- Similar tracks are available from the track context menu (used by Endless Mix); when a wave track plays, Endless Mix continues the same Yandex-curated session instead of branching into an unrelated similar-tracks stream
- **Podcasts** are synced from your Yandex library, browsable with episodes, and stream natively
- **Audiobooks** are synced, browsable with chapters, and stream natively. Playback position round-trips between Music Assistant and Yandex's own apps, so resume points stay in sync
- Multiple Yandex Music accounts can be added simultaneously

## Configuration

There are three ways to sign in. The first is the easiest and keeps working on its own, so use that one unless it fails.

### Option 1: Sign in with a code (recommended)

1. In Music Assistant, add the Yandex Music source and click **Login with device code**
2. A short web address and a code appear. Open that address on any device, such as your phone, and type in the code
3. Approve the request in your Yandex account
4. Music Assistant finishes the setup on its own. It will stay signed in, so there is nothing to renew later

### Option 2: QR Code

1. In Music Assistant, add the Yandex Music source and click **Login with QR code**
2. Scan the code with the Yandex app on your phone, signed in to the account you want to use
3. Approve it in the app and Music Assistant does the rest

### Option 3: Paste a token by hand (advanced)

Only needed if neither of the above works:

1. Open [this Yandex sign-in link](https://oauth.yandex.ru/authorize?response_type=token&client_id=23cabbbdc6cd418abb4b39c32c41195d) in your browser
2. Sign in to your Yandex account if asked
3. You will land on a page whose web address contains `access_token=` followed by a long run of characters
4. Copy that run of characters — everything after `access_token=` and before the next `&`
5. Paste it into the Yandex Music source in Music Assistant, under advanced settings

Note that a token pasted this way will expire and have to be replaced by hand.

### Settings

- **Audio quality**: Select preferred audio quality. Options: `Efficient (AAC ~64 kbps)`, `Balanced (AAC ~192 kbps)` (default), `High (MP3 320 kbps)`, `Lossless (FLAC)` (requires Yandex Music Plus subscription)
- **Remember session**: stays signed in and renews the connection on its own. On by default when you sign in with a code or a QR code
- **My Wave custom presets**: advanced-settings builder for saving named wave combinations (name + up to three dropdowns). Saved entries surface under **Radio → My Presets** in Browse

## Known Issues / Notes

- A token pasted in by hand expires and has to be replaced. Signing in with a code or a QR code avoids this
- Lossless FLAC requires an active Yandex Music Plus subscription. Without one, Yandex Music plays at the highest quality your account allows
- Tracks played through Music Assistant do **not** show up in your Yandex listening history. If you want them to, play through the Yandex app itself, or add the [Yandex Music Connect (Ynison)](/plugins/yandex-ynison/) plugin
