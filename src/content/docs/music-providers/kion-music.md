---
title: "KION Music"
---

# KION Music <img src="/assets/icons/kion-music-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant has support for [KION Music](https://music.mts.ru) (MTS Music). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

KION Music is a music streaming service run by MTS (Mobile TeleSystems), one of the largest telecoms companies in Russia and the CIS.

Connecting your account puts your KION library and the wider catalogue inside Music Assistant.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by MTS or KION.

> [!WARNING]
> A KION Music subscription is required for full functionality of the source and lossless (FLAC) quality.
> Without a subscription, the source's full-fledged operation is not guaranteed.

> [!NOTE]
> Full source documentation (RU/EN): **[trudenboy.github.io/ma-provider-kion-music](https://trudenboy.github.io/ma-provider-kion-music/)**

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
| Similar Tracks Support                          |            Yes                     |
| Maximum Stream Quality | FLAC |
| Login Method | Token |

### Other

- Searching the KION Music catalogue
- Items in your KION Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to KION Music
- Browse is available to explore the KION Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized recommendations (My Mix, Made for You, Chart, New Releases and more) appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Endless Mix)
- Multiple KION Music accounts can be added simultaneously

## Configuration

KION has no sign-in for outside apps, so a token has to be copied out of your browser.

1. Sign in to your account at [music.mts.ru](https://music.mts.ru)
2. Press Ctrl+Shift+I to open the browser's developer tools
3. Open the **Storage** tab in Firefox, or the **Application** tab in Chrome
4. Under **Local Storage**, select the entry for `https://music.mts.ru`
5. Find the row named `ya_token` and copy its value
6. Paste it into the KION Music source in Music Assistant and save

> [!WARNING]
> **Keep your token private**
>
> Anyone who has it can get into your KION account, so do not share it or paste it anywhere when asking for help.

### Settings

- **Audio quality**: Select preferred audio quality. Options: `Efficient (AAC ~64 kbps)`, `Balanced (AAC ~192 kbps)` (default), `High (MP3 320 kbps)`, `Lossless (FLAC)` (requires KION Music subscription)

## Known Issues / Notes

- The token may expire and need to be refreshed periodically
- Lossless FLAC quality requires an active KION Music subscription; without it the source falls back to the highest available quality
- KION Music is primarily available in Russia and CIS countries

