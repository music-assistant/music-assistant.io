# gPodder Provider ![Preview image](../assets/icons/gpodder-icon.png){ width=70 align=right }

Music Assistant has support for [gPodder](https://gpodder.github.io). Contributed and maintained by [Fabian Munkes](https://github.com/fmunkes)

## Features

- Progress reporting and acquiring
- Populates libraries with podcasts
- Updates playlog on regular provider syncs

## Configuration
### gpodder.net compatible webservice
A [mygpo](https://github.com/gpodder/mygpo) compatible web service is supported, and this provider is tested against
[opodsync](https://github.com/kd2org/opodsync)
To setup this functionality you need:

- the service URL, e.g. `http://192.168.1.20:14000` or `https://sync.yourdomain.com` 
- your username
- your password
- a device id

The device id can be any ascii string, but keep in mind, that this is used for syncing.
So another client must use the same device id.

!!! note
    `gpodder.net` is deliberately _not_ supported. The provider relies on frequent API calls, and the service hosted there is known to be either slow or fully unresponsive, which will slow down MA. Consider using a locally hosted alternative.

### nextcloud-gpodder
The provider supports [nextcloud-gpodder/gpoddersync](https://apps.nextcloud.com/apps/gpoddersync).
To setup this functionality, you need your nextcloud URL, and then click the "authenticate with nextcloud" button to start the authentication flow. Click save when you are done.

## Known Issues / Notes

- Nil
