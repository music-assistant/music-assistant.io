---
title: LastFM Scrobbler Plugin
description: Features and Notes for the LastFM Scrobbler Plugin
---

# LastFM Scrobbler ![Preview image](../assets/icons/audioscrobbler-icon.svg){ width=126 align=right }

Music Assistant has the ability to [scrobble](https://www.collinsdictionary.com/dictionary/english/scrobble) to [LastFM](https://www.last.fm/) or [LibreFM](https://libre.fm/). Contributed and maintained by [Willem-Jan Zijderveld](https://github.com/wjzijderveld)

## Features

- Connect to either LastFM or LibreFM and scrobble the songs that are playing
- Now playing feature is supported

## Configuration

- First obtain the API credentials. For LastFM follow the first two steps from [here](https://www.last.fm/api/authentication)
- Enter your credentials and click `Authorize with LastFM`, this will open a new tab with LastFM where permission must be given by clicking "Yes, allow access"
- The UI will indicate a successful login. Ensure to click SAVE to complete the configuration

### Settings

- <b>Suffix version to track names.</b> This adds the version, as stored in the Music Assistant database, to the end of the track name when it is sent to Last.fm. This may be useful if Musicbrainz IDs are not available to disambiguate same named tracks from an artist
- <b>Scrobble for users.</b> This allows selection of which logged-in user will be scrobbled by this provider. Multiple instances of this provider can be added

## Known Issues / Notes

- Currently songs will only get scrobbled when they're fully played (90+%)
- Be careful to avoid double scrobbling. This is possible if a music provider is used that also does scrobbling internally. A future improvement is to make it configurable which music providers will be scrobbled
