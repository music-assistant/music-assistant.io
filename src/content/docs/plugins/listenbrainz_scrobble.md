---
title: Listenbrainz Scrobbler Plugin
description: Features and Notes for the Listenbrainz Scrobbler Plugin
---

# Listenbrainz Scrobbler <img src="/assets/icons/listenbrainz-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has the ability to <a href="https://www.collinsdictionary.com/dictionary/english/scrobble" target="_blank" rel="noopener noreferrer">scrobble</a> to <a href="https://listenbrainz.org" target="_blank" rel="noopener noreferrer">Listenbrainz</a>. Contributed and maintained by <a href="https://github.com/ijc" target="_blank" rel="noopener noreferrer">Ian Campbell</a>

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
