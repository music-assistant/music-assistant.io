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
appears separately under Browse. Music Assistant's library synchronization refreshes
the station list; imported stations can be found through the library's search.

This is useful for a publisher managing many changing live feeds, such as sports
commentary, activity coverage or festival stages. The publisher updates one catalog
instead of asking listeners to maintain every station separately. Refreshing the
catalog updates the source's station names, stream addresses and, for JSON catalogs,
logos. Existing library entries still follow MA's standard update rules.

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
3. Optionally give this source a friendly name using the provider's name field.
4. Add the provider again for another catalog.

Manage each source's radio library synchronization through MA's background tasks.
The default schedule is every 12 hours; use MA's task controls to change its schedule
or run a synchronization immediately. There is no separate provider refresh timer
or minute-based refresh setting.

To change the catalog URL, use that source's reconfiguration flow.
Give sources distinct names to recognize where
stations come from, especially when two catalogs contain the same station.

## Catalog formats

Ask the catalog publisher for its station-list URL, not its website address.
Files must be no larger than 2 MiB. UTF-8 is recommended; invalid UTF-8 bytes are
replaced, so a damaged station title does not reject the whole list. URLs containing
a username and password are not supported.

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
- Catalog updates are not live now-playing updates. Title and artist information
  during playback depends on metadata provided by the stream and supported by MA.
  Additional JSON fields such as `artist` and `title` are not imported by this provider.
- Changes to station names and logos appear in the source's Browse listing after
  synchronization. Existing library station names are not automatically overwritten.
- Each source has its own catalog and provider mappings. Matching stations in the
  combined library follows MA's standard radio matching rules, which may combine
  identically named stations from different sources.
- Turning off library synchronization stops automatic catalog refreshes and imports.
  Browse and playback use the last loaded catalog (or fetch once if none is available).
- AirPlay and Google Cast playback use the corresponding Music Assistant player
  providers. Add those players separately; this source only supplies radio stations.
- Use catalogs and streams you are authorized to access. This provider cannot
  verify broadcasters' licenses or grant permission to use their content.
