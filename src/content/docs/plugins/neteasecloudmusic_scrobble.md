---
title: NetEase Cloud Music Scrobbler
description: Report what you play through the NetEase Cloud Music source back to NetEase, so your NetEase play counts and listening history stay right.
pluginGroup: scrobbling
---

# NetEase Cloud Music Scrobbler <img src="/assets/icons/netease-cloud-music-icon.png" alt="NetEase Cloud Music icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has the ability to check in the tracks you fully play through the [NetEase Cloud Music source](/music-providers/netease-cloud-music/) back to your NetEase account. Contributed and maintained by <a href="https://github.com/Kiranwin" target="_blank" rel="noopener noreferrer">Kiranwin</a>.

## Features

- Checks in tracks played through the NetEase Cloud Music source to the account that source is signed in to
- Reports the real listen time of a fully played track
- Several instances of this plugin can be added, so plays from more than one NetEase Cloud Music account are each reported to the right one

## Configuration

- A [NetEase Cloud Music](/music-providers/netease-cloud-music/) source must be configured first

### Settings

- <b>Suffix version to track names.</b> Adds the version of the track, such as a remix or live version, to the end of its name when it is sent to NetEase. Worth turning on if an artist has several different tracks with the same name and they are being counted together
- <b>Scrobble for users.</b> This allows selection of which logged-in user will be scrobbled by this plugin
- <b>Scrobble for players.</b> This allows selection of which players will register scrobbles

## Known Issues / Notes

- A track is only checked in once it has been fully played (90+%)
- If a NetEase login expires, that source's plays are skipped until you sign in to the NetEase Cloud Music source again; other sources keep scrobbling and the plugin stays enabled
