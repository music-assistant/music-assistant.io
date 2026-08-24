---
title: "Yandex Station"
description: Features and Notes for the Yandex Station Player Provider
---

# Yandex Station <img src="/assets/icons/yandex-station-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant can play music on <a href="https://station.yandex.ru/" target="_blank" rel="noopener noreferrer">Yandex Station</a> smart speakers. The audio goes straight from your Music Assistant server to the speaker without passing through Yandex. Contributed and maintained by <a href="https://github.com/trudenboy" target="_blank" rel="noopener noreferrer">Mikhail Nevskiy</a>

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> Your speakers must be on the **same network** as the Music Assistant server. There is no way to reach them from outside your home.

## Features

- Stations are auto-detected by Music Assistant once they are on the same network
- Play, pause, stop, seek, next and previous, with volume control
- Lossless FLAC playback, streamed from the Music Assistant server
- Audio announcements
- Power on and off, via Yandex scenarios
- Playback state updates in real time
- Voice control integration, so talking to Alice during playback pauses and resumes the queue (experimental, off by default)
- Intercept native Station playback and move it to another Music Assistant player (experimental, off by default)
- Login with Device Flow, a QR code or cookies
- Only one instance of this provider can be configured

### Supported station models

Any Yandex Station that exposes the local Glagol API is supported, including Station Mini, Station Mini 2, Station Midi, Station Max, Station 2, Station Lite, Station Light and Duo Max. Third-party speakers with Alice built in (YandexModule, IRBIS A, DEXP Smartbox, etc.) that expose `_yandexio._tcp.local.` should also work.

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a player provider** and select Yandex Station.
2. If you already have a Yandex Music provider set up, choose the <b>Yandex account source</b>. Borrow that provider's account to keep a single login shared between the two, or use this provider's own credentials and sign in as below.
3. Choose a <b>Login method</b>, decide whether to keep the session with <b>Remember session</b>, then sign in with the Yandex account that owns the stations.
4. Your stations will be discovered automatically and will appear in the player list.

If a station does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

### Authentication

- <b>Device Flow</b> (recommended). Music Assistant shows a short code along with the address to enter it at. Open that address in a browser signed in to your Yandex account and confirm. A fresh code appears on its own if the first one expires. This yields a refresh token, so the session renews silently in the background
- <b>QR code</b>. Scan the QR code shown during setup with the Yandex app and confirm the login. A fresh code is shown on its own if it expires. This also yields a refresh token
- <b>Cookies</b> (advanced fallback). Open passport.yandex.ru/profile, copy your session cookies with a "Copy Cookies" browser extension and paste them in. Both JSON arrays and raw cookie strings are accepted. There is no refresh token with this method, so the session has to be renewed by hand when it expires. Use it when the other two methods are blocked by your network or account
- <b>Remember session</b>. On by default. Stores the tokens so the provider survives a Music Assistant restart without signing in again. With it off, nothing is kept and you sign in again after each restart

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Experimental: Enable intercept feature.</b> Off by default. The master switch for the intercept feature described below. While it is off, the per-player intercept settings have no effect. The yandex_music music provider must also be configured, as that is what resolves the tracks

In addition to the [Individual Player Settings](/settings/individual-player/) and the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols), the Yandex Station players have the following settings:

- <b>Experimental: Intercept native Station playback.</b> Off by default. When the Station starts playing Yandex Music on its own, usually from an Alice voice command but also from a touch on the Station itself, this silences the Station and plays the same track on the target player chosen below. The Station keeps its own queue running quietly in the background so Music Assistant can follow each next track. It needs the provider level switch above turned on
- <b>Intercept target player.</b> The Music Assistant player that receives intercepted playback. Every registered player except this Station is listed, including ones that are currently offline so you can pick a target before it is switched on. Pause, volume and seek are mirrored where the target supports them and are quietly skipped where it does not
- <b>Experimental: Voice control integration.</b> Off by default. Resumes the Music Assistant queue automatically after voice commands such as "Алиса, стоп" or "Алиса, дальше". Experimental, so it may behave unexpectedly
- <b>[HTTP Profile used for sending audio](/settings/individual-player/#http-profile-used-for-sending-audio).</b> Defaults to Profile 3 - forced content length here, because Yandex Stations need a content length and cannot handle chunked streams

### Voice control integration (experimental)

When enabled in **Settings → Players → \<Your Station\> → Show advanced → Voice control integration**, the provider watches the Glagol state stream and reacts to Alice activity:

| Voice command | Behaviour |
|---|---|
| «Alice, stop» | Pauses the Music Assistant queue (resume via the UI). |
| «Alice, what's the weather?» *(or any query)* | Pauses MA while Alice speaks, then auto-resumes playback. |
| «Alice, turn up / turn down» | Adjusts volume during playback and auto-resumes the queue. |

### Intercept native playback (experimental)

When the Station starts native Yandex Music playback (typically via an Alice voice command, but also via a touch on the Station UI), the provider can:

1. Resolve the track via the **`yandex_music`** Music Assistant music provider.
2. Stop the Station's native player.
3. Start the same track on the chosen **target player** (any MA player you pick — a Chromecast, an AirPlay receiver, another Station, etc.).
4. Mirror volume / seek / pause / Alice-speech changes from the Station to the target while the intercept session is active.

Use it to keep Alice as a voice frontend while the audio plays on better speakers managed by Music Assistant.

#### Two-level enable model

Both switches are off by default and **both must be on** for any intercept action to happen:

1. Provider-level master switch, at **Settings → Player Providers → Yandex Station → Show advanced → Enable intercept feature**.
2. Per-player switch, at **Settings → Players → \<Your Station\> → Show advanced → Intercept native Station playback** plus **Intercept target player**.

#### Requirements

- The **`yandex_music`** music provider must be configured in Music Assistant. Without it, intercept is silently skipped (a warning is logged).
- The chosen target player must support `play_media`, `pause`, `volume_set` and `seek` (the dropdown filters by feature).

#### Behaviour notes

- The session ends when a new intercepted track arrives (success or clean failure) or the provider unloads. Lingering `playing=False` updates from the silenced Station do **not** end the session — so Alice queries / quiet periods between songs are tolerated.
- Failed lookups (missing `yandex_music`, unknown track, no URI, unavailable target) are debounced for 5 seconds per track ID, so logs aren't spammed once per WebSocket tick.
- A track ID arriving in the same tick as Alice activity does **not** trigger a new handoff over Alice's speech — the next handoff waits until Alice goes idle.

## Known Issues / Notes

- Stations must reach Music Assistant on the same local LAN.
- Voice commands «next» / «previous» cannot advance the MA queue — Alice does not see the external-stream bypass Music Assistant uses, so the station's own *next / previous* targets Alice's content, not the MA queue. Use the MA UI or other voice assistants for queue navigation.
- Seek via voice is not supported for the same reason.
- The Glagol "stop" command behaves as "pause" on the station (the station keeps the current track loaded).
- Intercept is best-effort and tied to whatever the Station receives via Alice — Yandex Smart Home API has no `play_media` for third-party devices, so commands like *«Алиса, включи песню X на колонке Y»* (where Y is a Music Assistant player) are not possible. Configure intercept per Station to route any native playback to a chosen target.
