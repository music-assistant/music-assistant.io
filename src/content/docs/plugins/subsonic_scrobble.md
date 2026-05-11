---
title: Subsonic Scrobbler Plugin
description: Scrobbles playback to a Subsonic media server
---

# Subsonic Scrobbler <img src="/assets/icons/subsonic_icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has the ability to report played tracks to a [Subsonic media server](/music-providers/subsonic/). Contributed and maintained by <a href="https://github.com/clusters" target="_blank" rel="noopener noreferrer">Clusters</a>

## Features

- Scrobble music playback to a Subsonic media server. This is useful for keeping track of play count or play history
- Now playing feature is supported

## Configuration

- No plugin specific configuration is necessary, but a Subsonic music source must be configured for the plugin to work

### Settings

- <b>Suffix version to track names.</b> This adds the version, as stored in the Music Assistant database, to the end of the track name when it is sent to Last.fm. This may be useful if Musicbrainz IDs are not available to disambiguate same named tracks from an artist
- <b>Scrobble for users.</b> This allows selection of which logged-in user will be scrobbled by this plugin. Multiple instances of this plugin can be added
- <b>Scrobble for players.</b> This allows selection of which players will register scrobbles

## Known Issues / Notes

- Songs will only get reported as played when they are fully played (90+%)
