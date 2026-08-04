---
title: "Podcast RSS Feed"
---

# Podcast RSS Feed <img src="/assets/icons/rss-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming podcasts from RSS feeds. Contributed and maintained by <a href="https://github.com/saeugetier" target="_blank" rel="noopener noreferrer">saeugetier</a>

Every podcast is published as an RSS feed, which is simply a web address listing the episodes and where the audio for each one sits. Podcast apps all work from these feeds, and most podcasts publish theirs openly.

This source follows one feed, which means one podcast. To follow several podcasts, add the source once for each of them, each with its own feed address. If you would rather search for podcasts than track down feed addresses yourself, [Podcast Index](/music-providers/podcast-index/) and [iTunes Podcast Search](/music-providers/itunes-podcast/) do that job instead.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |    
| Maximum Stream Quality | Lossy, Variable Quality |
| Login Method | None |

### Other

- Reads a standard podcast RSS feed from a web address you provide

## Configuration

In the Generic Settings add the full address of the podcast's RSS feed, including the `https://`.

Most podcasts publish their feed address somewhere on their own website, and podcast directories list it as well.

## Known Issues / Notes

- Feeds that do not follow the standard podcast feed format may not work
- Nothing stops the same feed being added twice, which will show the podcast twice
