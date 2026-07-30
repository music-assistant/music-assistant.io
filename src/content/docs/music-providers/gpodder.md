---
title: "gPodder"
description: "Sync podcast subscriptions and listening progress between Music Assistant and other podcast apps, such as AntennaPod, using a gPodder compatible server."
---

# gPodder <img src="/assets/icons/gpodder-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://gpodder.github.io" target="_blank" rel="noopener noreferrer">gPodder</a>. Contributed and maintained by <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a>

gPodder is a synchronisation service for podcast apps rather than a place to discover podcasts. It keeps a
shared record of the podcasts you subscribe to and how far through each episode you are, so that several apps
can stay in step with one another.

This provider connects Music Assistant to that shared record. Your existing subscriptions turn up as podcasts
you can play, and your listening progress is written back as you go, so an episode started elsewhere can be
finished on a speaker, or the other way round.

Music Assistant does not host the shared record itself. You run a gPodder compatible server and point this
provider at it, as described under [Configuration](#configuration).

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media  | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | Lossy, Variable Quality |
| Login Method | Password or Nextcloud Login |

### Other
- Progress reporting and acquiring
- Populates libraries with podcasts
- Updates playlog on regular provider syncs

## Configuration
### gpodder.net compatible webservice
A <a href="https://github.com/gpodder/mygpo" target="_blank" rel="noopener noreferrer">mygpo</a> compatible web service is supported, and this provider is tested against
<a href="https://github.com/kd2org/opodsync" target="_blank" rel="noopener noreferrer">opodsync</a>
To setup this functionality you need:

- <b>gPodder Service URL.</b> For example, `http://192.168.1.20:14000` or `https://sync.yourdomain.com`
- <b>Username.</b>
- <b>Password.</b>
- <b>Device ID.</b>

> [!NOTE]
> The Device ID can be any ASCII string, but keep in mind, that this is used for syncing. Other clients must use the same Device ID

> [!NOTE]
> `gpodder.net` is deliberately _not_ supported. The provider relies on frequent API calls, and the service hosted there is known to be either slow or fully unresponsive, which will slow down MA. Consider using a locally hosted alternative.

### nextcloud-gpodder
The provider supports <a href="https://apps.nextcloud.com/apps/gpoddersync" target="_blank" rel="noopener noreferrer">nextcloud-gpodder/gpoddersync</a>.

To setup this functionality, you need the `Nextcloud URL`, and then click the AUTHENTICATE WITH NEXTCLOUD button to start the authentication flow. Click save when finished

### Multi-user environment

The gpodder provider can be set up multiple times for individual users.
To achieve correct syncing of the progress of individual media items with an MA
user please refer to [user management](/settings/user-management/#filter-progress-multi-user).

### Settings

- <b>Maximum number of episodes.</b> Maximum number of episodes to sync per feed. Use 0 for unlimited
- <b>Advanced - Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default

## Known Issues / Notes

- Nil

## Syncing with other podcast apps

Music Assistant does not talk to other podcast apps directly. Every app reads from and writes to the same
gPodder compatible server, and picks up whatever the others have left there, so anything that supports
gPodder sync can share a set of subscriptions and a listening position with Music Assistant.

What travels in each direction:

|           |                     |
|:-----------------------|:---------------------:|
| Subscriptions | From the server only |
| Playback progress and resume position | Both ways |
| Mark as unplayed | Both ways |
| Episode deleted in another app | From the server only |

> [!IMPORTANT]
> Subscriptions are only read from the server. Adding or removing a podcast inside Music Assistant is not
> sent back, so subscribe and unsubscribe from another app or on the server itself.

Podcast audio does not pass through the sync server. Music Assistant reads the podcast's RSS feed and streams
the episode from the feed's own address, so the server only ever holds feed addresses and listening progress.

On a mygpo compatible server, every app must use the same Device ID, as noted above. Progress is returned per
device, so a mismatch leaves each app seeing only what it recorded itself. Nextcloud has no Device ID, and
needs nothing matched up.

Apps that support gPodder sync include <a href="https://antennapod.org" target="_blank" rel="noopener noreferrer">AntennaPod</a> (Android),
<a href="https://gpodder.github.io" target="_blank" rel="noopener noreferrer">gPodder</a> (desktop),
<a href="https://apps.kde.org/kasts/" target="_blank" rel="noopener noreferrer">Kasts</a> (Linux, Android and Windows) and
<a href="https://github.com/madeofpendletonwool/PinePods" target="_blank" rel="noopener noreferrer">PinePods</a> (self-hosted). This list is not exhaustive.
