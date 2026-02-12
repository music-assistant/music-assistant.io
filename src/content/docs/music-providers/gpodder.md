---
title: "gPodder"
---

# gPodder Provider <img src="/assets/icons/gpodder-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://gpodder.github.io" target="_blank" rel="noopener noreferrer">gPodder</a>. Contributed and maintained by <a href="https://github.com/fmunkes" target="_blank" rel="noopener noreferrer">Fabian Munkes</a>

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media  | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui#track-menu) | No |
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
user please refer to [user management](/settings/user-management.md/#filter-progress-multi-user).

### Settings

- <b>Maximum number of episodes.</b> Maximum number of episodes to sync per feed. Use 0 for unlimited
- <b>Advanced - Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default

## Known Issues / Notes

- Nil
