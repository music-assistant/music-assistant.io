---
title: Metadata Providers
description: A Description of the Metadata providers available
---

# Metadata Providers - General

The metadata providers available in Music Assistant are used to supplement metadata which is missing from the items obtained from the music providers. They do NOT change anything (e.g. ID3 tags) obtained from the original item therefore they should not normally be disabled.

## Lyrics

Lyrics can be obtained from a variety of sources depending on the music provider.

For <a href="https://www.music-assistant.io/music-providers/filesystem/#known-issues-notes" target="_blank" rel="noopener noreferrer">local file providers</a>, lyrics can be embedded in tags or in `.lrc` files. This is the most reliable way to have lyrics shown.

For all providers, if one or more lyric metadata providers are available then lyrics will be attempted to be obtained according to the following rules (note that it is possible that matching lyrics can't be found)

- When a track is first played, a task will be queued to fetch the lyrics which should then mean they are available the next time the track is played (these tasks take some time to complete)
- A metadata update will occur when the track is played at least 90 days after the previous update
- If a specific track is viewed and UPDATE METADATA is selected from the top right menu then this will trigger a lyrics update request

Tidal has native lyrics support. Due to a convoluted API lookup process, lyrics are only fetched during a full track lookup, which only happens when viewing the info of a track or when the track is played. You also have to refresh the item at this point and then you might still have to hit play again in order to get lyrics to show.

> [!NOTE]
> The lrclib provider requires matching track name, artist, album and duration within 2 secs in order to return a result
