---
title: "Remote Radio Catalog"
description: "Subscribe to independently configured online radio station catalogs."
---

# Remote Radio Catalog <img src="/assets/icons/remote-radio-catalog.svg" alt="Radio catalog icon" style="width: 70px; float: right;" loading="lazy" />

Contributed and maintained by <a href="https://github.com/Laav" target="_blank" rel="noopener noreferrer">Laav</a>.

A remote radio catalog is an online list of stations and their stream addresses.
You provide the list's URL; this source does not include a station directory or
recommend particular catalog hosts.

Add one source for each catalog you want to follow. Each has its own name and
refresh interval, and appears separately under Browse. Stations can also be
imported into the Music Assistant library.

> [!NOTE]
> This source requires a Music Assistant Server version containing the Remote Radio
> Catalog provider. Documentation alone does not make it available in older versions.

## Features

| | |
|:--|:--:|
| Subscription FREE | Yes (catalog and station access depend on their publisher) |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support | No |
| Similar Artists Support | No |
| Similar Tracks Support | No |
| Maximum Stream Quality | Varies by station |
| Login Method | None |

## Configuration

1. Add **Remote Radio Catalog** in Music Assistant's music provider settings.
2. Enter the full HTTP or HTTPS URL of an M3U, M3U8 or JSON station catalog.
3. Set the refresh interval in minutes. The default is 30; the allowed range is 1–1440.
4. Optionally give this source a friendly name using the provider's name field.
5. Add the provider again for another catalog.

For example, you can refresh **My Icecast Stations** every 5 minutes,
**Community Radio** every 30 minutes, and **Personal Radio Collection** every 60
minutes. Updating or removing one source does not change the others.

Change an interval in that source's options. To change the catalog URL, use that
source's reconfiguration flow. Give sources distinct names to recognize where
stations come from, especially when two catalogs contain the same station.

## Catalog formats

Ask the catalog publisher for its station-list URL, not its website address.
Files must be UTF-8 and no larger than 2 MiB. URLs containing a username and
password are not supported.

An extended M3U or M3U8 station list looks like this:

```text
#EXTM3U
#EXTINF:-1,Example Radio
https://radio.example.org/live.mp3
```

JSON may be a station array or an object containing `stations`:

```json
{
  "stations": [
    {
      "id": "example-radio",
      "name": "Example Radio",
      "url": "https://radio.example.org/live.mp3",
      "logo": "https://radio.example.org/logo.png"
    }
  ]
}
```

Only `url` is required. Publishers should provide stable IDs if stream URLs may
change. Relative stream and logo URLs resolve against the catalog's final URL.
Icecast status JSON with `icestats.source`, `listenurl` and `server_name` is also
supported, including a single source object or an array of sources.

## Known Issues / Notes

- M3U8 must list stations, not HLS audio segments or variants. An individual station
  may link to an HLS stream.
- A failed or malformed download leaves the last valid catalog available, including
  after restart. Its streams must still be reachable to play. Without a previous
  valid catalog, the source reports a temporary error.
- A valid empty catalog is allowed. Music Assistant's configured library deletion
  behavior applies to stations removed from a successfully refreshed catalog.
- Conflicting duplicate IDs inside one catalog invalidate the download. Identical
  IDs in different source instances are allowed.
- Turning off library synchronization leaves the catalog available under Browse
  but stops automatic library imports.
- AirPlay and Google Cast playback use the corresponding Music Assistant player
  providers. Add those players separately; this source only supplies radio stations.
- Use catalogs and streams you are authorized to access. This provider cannot
  verify broadcasters' licenses or grant permission to use their content.
