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

For LastFM, Music Assistant includes the required API credentials. You do not need to create a LastFM API application.

- Leave the Provider set to `Last.FM`
- Click `Authorize with lastfm`, this will open a new tab with LastFM where permission must be given by clicking "Yes, allow access"
- The UI will indicate a successful login. Ensure to click SAVE to complete the configuration

> [!NOTE]
> The LastFM authorization callback uses the Music Assistant Base URL from Settings > System > Webserver. If authorization does not return to Music Assistant, set the Base URL to the same URL that you use to open Music Assistant in your browser.

For LibreFM, or to use your own LastFM API application, open the advanced settings and enter the API Key and Shared secret before authorizing. LibreFM always requires custom API credentials.

### Settings

- <b>Provider.</b> Select `Last.FM` for LastFM scrobbling or `LibreFM` for LibreFM scrobbling
- <b>API Key.</b> Advanced setting, only needed for LibreFM or if you would rather use your own Last.fm application
- <b>Shared secret.</b> As above, and required for LibreFM
- <b>Suffix version to track names.</b> Adds the version of the track, such as a remix or live version, to the end of its name when it is sent to Last.fm. Worth turning on if an artist has several different tracks with the same name and they are being counted together
- <b>Scrobble for users.</b> This allows selection of which logged-in user will be scrobbled by this plugin. Multiple instances of this plugin can be added
- <b>Scrobble for players.</b> This allows selection of which players will register scrobbles

## Known Issues / Notes

- Currently songs will only get scrobbled when they're fully played (90+%)
- Be careful to avoid double scrobbling. This is possible if a music source is used that also does scrobbling internally. A future improvement is to make it configurable which music sources will be scrobbled
