---
title: "Zvuk Music"
---

# Zvuk Music <img src="/assets/icons/zvuk-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant has support for [Zvuk Music](https://zvuk.com). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

Zvuk is a Russian music streaming service with a large Russian language catalogue alongside international releases, and lossless audio for subscribers.

Connecting your account brings your Zvuk library and playlists into Music Assistant, and the catalogue can be searched from there.

> [!CAUTION]
> This is an **unofficial** implementation with no affiliation to [Zvuk](https://zvuk.com) or its owners.

> [!WARNING]
> A Zvuk Prime subscription is required for full functionality of this source and for lossless (FLAC) quality.
> Without a subscription, this source's full-fledged operation is not guaranteed.

> [!NOTE]
> Full source documentation (RU/EN): **[trudenboy.github.io/ma-provider-zvuk-music](https://trudenboy.github.io/ma-provider-zvuk-music/)**

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (with limitations) |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | Yes |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | FLAC |
| Login Method | Token |

### Other

- Searching the Zvuk Music catalogue is possible
- Items in a users Zvuk Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Zvuk Music
- Playlist creation and editing is supported
- Browse is available to explore the Zvuk Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized playlists ("Плейлисты для вас") appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Endless Mix)

## Configuration

Zvuk has no sign-in for outside apps, so a token has to be copied out of your browser.

1. Sign in to your account at [zvuk.com](https://zvuk.com)
2. In the same browser, open [zvuk.com/api/tiny/profile](https://zvuk.com/api/tiny/profile). A page of text about your account appears
3. Find `"token":` in that text and copy the long run of letters and numbers between the quotation marks that follow it, leaving the quotation marks themselves out
4. In Music Assistant, go to Settings → Music sources → Add a music source → Zvuk Music, paste it into the **X-Auth-Token** field and save

> [!TIP]
> If your browser downloads a file rather than showing the text, open the file in any text editor and look for `"token":` in there.

> [!WARNING]
> **Keep your token private**
>
> Anyone who has it can get into your Zvuk account, so do not share it or paste it anywhere when asking for help.

### Settings

- **Audio quality**: Select preferred audio quality
    - `High (320 kbps)` - Available for all accounts (default)
    - `Lossless (FLAC)` - Requires a Zvuk Music subscription

## Known Issues / Notes

- The token expires after a while and has to be replaced. If Zvuk stops working, go through the steps above again to get a fresh one
- If step 2 shows an error or an empty page, you are probably not signed in to zvuk.com. Sign in first, then try again
- If the token is rejected, check you copied all of it and nothing else, with no stray spaces, quotation marks or line breaks
- Without a subscription, lossless is unavailable and Zvuk plays at the highest quality your account allows (320 kbps)

