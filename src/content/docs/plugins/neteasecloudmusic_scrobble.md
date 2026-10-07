---
title: NetEase Cloud Music Scrobbler
description: Report what you play through the NetEase Cloud Music source back to NetEase, so your NetEase play counts and listening history stay right.
pluginGroup: scrobbling
---

# NetEase Cloud Music Scrobbler <img src="/assets/icons/netease-cloud-music-icon.png" alt="NetEase Cloud Music icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has the ability to check in the tracks you fully play through the [NetEase Cloud Music source](/music-providers/netease-cloud-music/) back to your NetEase account. Contributed and maintained by <a href="https://github.com/Kiranwin" target="_blank" rel="noopener noreferrer">Kiranwin</a>.

The check-in is what NetEase uses to build play counts and listening history, so the music you play in Music Assistant shows up in your NetEase listening stats.

## Features

- Checks in tracks played through the NetEase Cloud Music source to the account that source is signed in to
- Reports the real listen time of a fully played track rather than a bare minimum
- Only reports plays that actually streamed from the NetEase source, even when the queue item is a library track linked to NetEase

## Configuration

- A [NetEase Cloud Music](/music-providers/netease-cloud-music/) source must be configured first; the plugin reuses its API backend and login, so no additional service or account is needed
- No source has to be picked: each play is reported to whichever NetEase Cloud Music source it actually streamed from, so plays from several accounts each land on the right one

### Settings

- <b>Suffix version to track names.</b> Adds the version of the track, such as a remix or live version, to the end of its name when it is sent to NetEase. Worth turning on if an artist has several different tracks with the same name and they are being counted together
- <b>Scrobble for users.</b> This allows selection of which logged-in user will be scrobbled by this plugin. Multiple instances of this plugin can be added
- <b>Scrobble for players.</b> This allows selection of which players will register scrobbles

## Known Issues / Notes

- A track is only checked in once it has been fully played (90+%)
- If a NetEase login expires, that source's plays are skipped until you sign in to the NetEase Cloud Music source again; other sources keep scrobbling and the plugin stays enabled
