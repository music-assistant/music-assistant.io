---
title: "M3U Radio"
---

# M3U Radio <img src="/assets/icons/m3uradio-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for importing radio stations from a self-hosted M3U / IPTV playlist. Point the provider at your playlist URL and every station in it becomes a native radio source: stations sync into the library, can be browsed by group, searched, and played.

This is useful if you maintain your station list in an M3U editor or receive a playlist from an IPTV service and want Music Assistant to follow that list automatically instead of adding stations one by one.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Artist Top Tracks Support | No |
| Similar Artists Support | No |
| Similar Tracks Support | No |
| Maximum Stream Quality | Varies by station |
| Login Method | None |

### Other

- Multiple playlists supported (add one provider instance per playlist)
- Browse stations by their `group-title`
- Station logos are read from `tvg-logo`
- Live ICY (now playing) metadata is shown while a station plays

## Configuration

| Setting | Required | Description |
|:--------|:---------|:------------|
| M3U / IPTV playlist URL | Yes | Direct URL to your M3U playlist. Must be reachable from the Music Assistant server. |
| Group filter | No | Comma-separated list of `group-title` values to include (case-insensitive). Useful for mixed IPTV playlists, e.g. `Radio,Music` keeps only the radio groups and skips TV channels. Leave blank to import everything. |

## Usage

1. Add the provider under Settings → Music sources → Add a new provider → M3U Radio
2. Enter the playlist URL (and optionally a group filter), then save
3. The library sync runs automatically; stations appear in the Radio view
4. Browse → M3U Radio shows the stations organized by group

The playlist is fetched again on every scheduled library sync, so stations you add to, rename in, or remove from the playlist are picked up automatically.

## Known Issues / Notes

- Stations are identified by their `tvg-id` when the playlist provides one, so favourites and play history survive playlist refreshes. Stations without a `tvg-id` are identified by a hash of their name and stream URL — renaming such a station (or changing its URL) in the playlist makes Music Assistant treat it as a new station.
- Live radio streams cannot be paused or seeked.
- The playlist URL is fetched by the Music Assistant server, not by your browser — make sure it is reachable from where Music Assistant runs.
