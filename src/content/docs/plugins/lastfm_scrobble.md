---
title: LastFM Scrobbler Plugin
description: Features and Notes for the LastFM Scrobbler Plugin
---

# LastFM Scrobbler <img src="/assets/icons/audioscrobbler-icon.svg" alt="Preview image" style="width: 126px; float: right;"  loading="lazy" />

Music Assistant has the ability to <a href="https://www.collinsdictionary.com/dictionary/english/scrobble" target="_blank" rel="noopener noreferrer">scrobble</a> to <a href="https://www.last.fm/" target="_blank" rel="noopener noreferrer">LastFM</a> or <a href="https://libre.fm/" target="_blank" rel="noopener noreferrer">LibreFM</a>. Contributed and maintained by <a href="https://github.com/wjzijderveld" target="_blank" rel="noopener noreferrer">Willem-Jan Zijderveld</a>

## Features

- Connect to either LastFM or LibreFM and scrobble the songs that are playing
- Now playing feature is supported

## Configuration

- First obtain the API credentials. For LastFM follow the first two steps from <a href="https://www.last.fm/api/authentication" target="_blank" rel="noopener noreferrer">here</a>
- Enter your credentials and click `Authorize with LastFM`, this will open a new tab with LastFM where permission must be given by clicking "Yes, allow access"
- The UI will indicate a successful login. Ensure to click SAVE to complete the configuration

### Settings

- <b>Suffix version to track names.</b> This adds the version, as stored in the Music Assistant database, to the end of the track name when it is sent to Last.fm. This may be useful if Musicbrainz IDs are not available to disambiguate same named tracks from an artist
- <b>Scrobble for users.</b> This allows selection of which logged-in user will be scrobbled by this provider. Multiple instances of this provider can be added

## Known Issues / Notes

- Currently songs will only get scrobbled when they're fully played (90+%)
- Be careful to avoid double scrobbling. This is possible if a music provider is used that also does scrobbling internally. A future improvement is to make it configurable which music providers will be scrobbled
