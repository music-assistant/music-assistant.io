---
title: Listenbrainz Scrobbler Plugin
description: Features and Notes for the Listenbrainz Scrobbler Plugin
---

# Listenbrainz Scrobbler ![Preview image](../assets/icons/listenbrainz-icon.png){ width=70 align=right }

Music Assistant has the ability to [scrobble](https://www.collinsdictionary.com/dictionary/english/scrobble) to [Listenbrainz](https://listenbrainz.org). Contributed and maintained by [Ian Campbell](https://github.com/ijc)

## Features

- Connect to Listenbrainz and scrobble the songs that are playing
- Now playing feature is supported

## Configuration

- Obtain your User Token from https://listenbrainz.org/settings/ 

### Settings

- <b>Suffix version to track names.</b> This adds the version, as stored in the Music Assistant database, to the end of the track name when it is sent to Last.fm. This may be useful if Musicbrainz IDs are not available to disambiguate same named tracks from an artist
- <b>Scrobble for users.</b> This allows selection of which logged-in user will be scrobbled by this provider. Multiple instances of this provider can be added

## Known Issues / Notes

- Currently songs will only get scrobbled when they're fully played (90+%)
- Be careful to avoid double scrobbling. This is possible if a music provider is used that also does scrobbling internally. A future improvement is to make it configurable which music providers will be scrobbled
