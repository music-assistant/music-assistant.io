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

## Known Issues / Notes

- Currently songs will only get scrobbled when they're fully played (90+%)
- Be careful to avoid double scrobbling. This is possible if a music provider is used that also does scrobbling internally. A future improvement is to make it configurable which music providers will be scrobbled
