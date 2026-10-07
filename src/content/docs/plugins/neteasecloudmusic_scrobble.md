---
title: NetEase Cloud Music Scrobbler
description: Report what you play through the NetEase Cloud Music source back to NetEase, so play counts, listening stats and daily recommendations stay right.
pluginGroup: scrobbling
---

# NetEase Cloud Music Scrobbler <img src="/assets/icons/netease-cloud-music-icon.png" alt="NetEase Cloud Music icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has the ability to check in the tracks you fully play through the [NetEase Cloud Music source](/music-providers/netease-cloud-music/) back to your NetEase account. Contributed and maintained by <a href="https://github.com/Kiranwin" target="_blank" rel="noopener noreferrer">Kiranwin</a>.

The check-in is what NetEase uses to build play counts, listening stats and its personalized daily recommendations, so the music you play in Music Assistant keeps those in sync with the NetEase app.

## Features

- Checks in tracks played through the NetEase Cloud Music source to the account that source is signed in to
- Reports the real listen time of a fully played track rather than a bare minimum
- Only reports plays that actually streamed from the NetEase source, even when the queue item is a library track linked to NetEase

## Configuration

- A [NetEase Cloud Music](/music-providers/netease-cloud-music/) source must be configured first; the plugin reuses its API backend and login, so no additional service or account is needed
- With exactly one NetEase Cloud Music source configured it is picked automatically. With several, choose the one whose plays should be reported

### Settings

- <b>NetEase Cloud Music source.</b> The provider instance whose plays are reported to NetEase
- <b>Suffix version to track names.</b> Adds the version of the track, such as a remix or live version, to the end of its name when it is sent to NetEase. Worth turning on if an artist has several different tracks with the same name and they are being counted together
- <b>Scrobble for users.</b> This allows selection of which logged-in user will be scrobbled by this plugin. Multiple instances of this plugin can be added
- <b>Scrobble for players.</b> This allows selection of which players will register scrobbles

## Known Issues / Notes

- A track is only checked in once it has been fully played (90+%)
- When the NetEase login expires, the plugin stops with an error. Sign in to the NetEase Cloud Music source again and re-enable the plugin to resume scrobbling
