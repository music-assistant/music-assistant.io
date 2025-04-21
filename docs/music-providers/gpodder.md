# gPodder Provider ![Preview image](../assets/icons/gpodder-icon.png){ width=70 align=right }

Music Assistant has support for [gPodder](https://gpodder.github.io). Contributed and maintained by [Fabian Munkes](https://github.com/fmunkes)

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media  | No |
| Media Types Supported | Podcasts |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | Lossy, Variable Quality |
| Login Method | Password or Nextcloud Login |

### Other
- Progress reporting and acquiring
- Populates libraries with podcasts
- Updates playlog on regular provider syncs

## Configuration
### gpodder.net compatible webservice
A [mygpo](https://github.com/gpodder/mygpo) compatible web service is supported, and this provider is tested against
[opodsync](https://github.com/kd2org/opodsync)
To setup this functionality you need:

- <b>gPodder Service URL.</b> For example, `http://192.168.1.20:14000` or `https://sync.yourdomain.com` 
- <b>Username.</b>
- <b>Password.</b>
- <b>Device ID.</b>

!!! note 
    The Device ID can be any ASCII string, but keep in mind, that this is used for syncing. Other clients must use the same Device ID

!!! note
    `gpodder.net` is deliberately _not_ supported. The provider relies on frequent API calls, and the service hosted there is known to be either slow or fully unresponsive, which will slow down MA. Consider using a locally hosted alternative.

### nextcloud-gpodder
The provider supports [nextcloud-gpodder/gpoddersync](https://apps.nextcloud.com/apps/gpoddersync).

To setup this functionality, you need the `Nextcloud URL`, and then click the AUTHENTICATE WITH NEXTCLOUD button to start the authentication flow. Click save when finished

### Settings

- <b>Maximum number of episodes.</b> Maximum number of episodes to sync per feed. Use 0 for unlimited
- <b>Advanced - Verify SSL.</b> Enable to verify the certificate of SSL/TLS connections. This is on by default

## Known Issues / Notes

- Nil
