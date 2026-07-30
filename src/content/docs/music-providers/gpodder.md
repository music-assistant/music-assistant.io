---
title: "gPodder"
description: "Sync podcast subscriptions and playback progress with Music Assistant using a gPodder compatible server, such as nextcloud-gpodder or opodsync. Also covers syncing with AntennaPod and other gPodder podcast apps."
---

# gPodder <img src="/assets/icons/gpodder-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://gpodder.github.io" target="_blank" rel="noopener noreferrer">gPodder</a>. Contributed and maintained by <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a>

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

## What syncs, and in which direction

Music Assistant is a gPodder *client*, in the same way that AntennaPod is. It does not sync with other
apps directly; everything passes through the gPodder compatible server that both apps are pointed at.

|                     |                     |
|:-----------------------|:---------------------:|
| Subscriptions | Server → Music Assistant only |
| Playback progress / resume position | Both ways |
| Mark as unplayed | Both ways |
| Episode deleted in another client | Server → Music Assistant |

> [!IMPORTANT]
> Subscriptions are only read from the server. Adding or removing a podcast **inside Music Assistant is
> not sent back**, so manage your subscriptions in AntennaPod, in another gPodder client, or on the
> server itself.

Audio is never fetched through the sync server. Music Assistant reads the podcast's RSS feed and streams
the episode directly from the feed's own URL, so the server only ever carries feed URLs and progress.

## Configuration
### gpodder.net compatible webservice
A <a href="https://github.com/gpodder/mygpo" target="_blank" rel="noopener noreferrer">mygpo</a> compatible web service is supported, and this provider is tested against
<a href="https://github.com/kd2org/opodsync" target="_blank" rel="noopener noreferrer">opodsync</a>

Several self-hosted servers implement this API:

|                     |                     |
|:-----------------------|:---------------------:|
| <a href="https://github.com/kd2org/opodsync" target="_blank" rel="noopener noreferrer">opodsync</a> (PHP) | Tested with Music Assistant |
| <a href="https://github.com/thrillfall/nextcloud-gpodder" target="_blank" rel="noopener noreferrer">nextcloud-gpodder</a> (PHP) | Tested with Music Assistant |
| <a href="https://github.com/bobrippling/podsync" target="_blank" rel="noopener noreferrer">podsync</a> (Rust) | Implements the required endpoints, untested here |
| <a href="https://github.com/eliassoares/malipod-selfhosted" target="_blank" rel="noopener noreferrer">malipod</a> (Python) | Implements the required endpoints, untested here |
| <a href="https://github.com/cbrgm/gopodder" target="_blank" rel="noopener noreferrer">goPodder</a> (Go) | Not verified against this provider |

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

### Syncing with AntennaPod and other podcast apps

<a href="https://antennapod.org" target="_blank" rel="noopener noreferrer">AntennaPod</a> has no server of its own, so
there is no AntennaPod source to add to Music Assistant. Instead, point AntennaPod and Music Assistant at the
same gPodder compatible server and they will share subscriptions and listening progress through it. The same
approach works for any other app that supports gPodder sync.

Using Nextcloud is the simpler of the two routes:

- Install the <a href="https://apps.nextcloud.com/apps/gpoddersync" target="_blank" rel="noopener noreferrer">gPodder Sync</a> app on your Nextcloud
- In AntennaPod, go to `Settings` » `Synchronization` and choose Nextcloud
- In Music Assistant, set this provider up with the `nextcloud-gpodder` method described above

There is no Device ID in this setup, so nothing further needs to be matched up.

If you instead use opodsync or another mygpo compatible server, both apps must be configured with the
**same Device ID**:

- Create the device on the server first. AntennaPod expects the device to already exist and lets you pick
  it from a list at the end of login, rather than typing one in
- Enter that same value in the `Device ID` field in Music Assistant

> [!IMPORTANT]
> If the Device IDs do not match, each app will only ever see its own listening progress. The server
> returns episode actions filtered by device, so a mismatch looks like syncing silently doing nothing.

> [!NOTE]
> `gpodder.net` cannot be used as the shared server, even though AntennaPod supports it. Music Assistant
> rejects that URL during setup, for the reasons given above. Use a self-hosted server instead.

### Multi-user environment

The gpodder provider can be set up multiple times for individual users.
To achieve correct syncing of the progress of individual media items with an MA
user please refer to [user management](/settings/user-management/#filter-progress-multi-user).

### Settings

- <b>Maximum number of episodes.</b> Maximum number of episodes to sync per feed. Use 0 for unlimited
- <b>Advanced - Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default

## Known Issues / Notes

- Nil
