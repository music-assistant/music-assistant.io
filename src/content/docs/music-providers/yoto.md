---
title: "Yoto"
---

# Yoto <img src="/assets/icons/yoto-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming from <a href="https://yotoplay.com/" target="_blank" rel="noopener noreferrer">Yoto</a>. Contributed and maintained by <a href="https://github.com/pantsman0" target="_blank" rel="noopener noreferrer">Pantsman0</a>

Yoto is a smart audio player for kids. It uses physical cards that slot into the player to play audiobooks, music, podcasts, radio, and more! These cards can be downloaded or streamed to the player from the Yoto cloud service, and now to Music Assistant too.

Connecting your Yoto account puts that library inside Music Assistant, where you can play them on any compatible device. Currently only standard cards are supported; cards using dynamic features have not been tested.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yoto.

## Features

|                                                   |                                            |
| :------------------------------------------------ | :----------------------------------------: |
| Subscription FREE                                 |                    Yes                     |
| Self-Hosted Local Media                           |                     No                     |
| Media Types Supported                             | Albums, Tracks, Audiobooks, Podcasts,Radio |
| [Recommendations](/ui/#view---discover) Supported |                     No                     |
| Lyrics Supported                                  |                     No                     |
| [Endless Mix](/ui/#track-menu)                    |                     No                     |
| Artist Top Tracks Support                         |                     No                     |
| Similar Artists Support                           |                     No                     |
| Similar Tracks Support                            |                     No                     |
| Maximum Stream Quality                            |            AAC variable bitrate            |
| Login Method                                      |                   OAuth                    |

### Other

- The Yoto library can be listed
- Metadata for cards will be populated
- Multiple Yoto accounts can be added.

## Configuration

To set up the Yoto provider, follow these steps:

1. Log in to the [Yoto Developer Dashboard](https://dashboard.yoto.dev/). If you have not accessed the dashboard before, you will be prompted to accept terms of use for the official Yoto API.
2. Click on the "Create New Application" button.
3. Create an application with the following options selected:
   - Application Type: Public Client
   - Allowed Callback URLs: https://music-assistant.io/callback
   - scopes:
     - family:library:view
     - offline_access
4. Once the application is created, you will be shown the Client ID. Paste the Client ID into the setup form.

## Not Yet Supported

- Browsing capabilities - Album/Podcast/Audiobook/Radio view is supported for each card, discovery and browsing outside of the existing library is not supported. Finding cards by other criteria requires Music Assistant's Search feature.
