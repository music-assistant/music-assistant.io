---
title: Local Audio Source Plugin
description: Capture live audio from a line-in, USB or Bluetooth input on the server and play it on any Music Assistant player
---

# Local Audio Source <img src="/assets/icons/local-audio-source.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Local Audio Source captures live audio from a device connected to the machine running the Music Assistant server — a Bluetooth receiver, a line-in jack, a USB sound card — and turns it into a source you can play on any Music Assistant player.

:::note
This provider is in an early (alpha) stage of development.
:::

## Features

- Captures from any audio input on the host: line-in, USB audio interfaces, Bluetooth receivers, or (optionally) monitor sources
- Add multiple instances to capture from several sources at once, each shown as its own source
- Pick a bundled icon (Bluetooth, Line-in/Cable, Turntable/Vinyl, Stereo, Chromecast) or a custom thumbnail image URL
- Optional auto-start on signal: watches the input's level and automatically starts/stops playback on a chosen player, for sources that are always connected rather than selected on demand
- The auto-start target player can be a fixed player or "Auto", which prefers whichever player is currently playing and otherwise picks the first available one

## Use cases

- **Bluetooth receiver.** Pair a Bluetooth audio receiver to the server and let guests quick-connect their phone to play music through the whole house
- **Announcement/paging microphone.** Plug in a USB microphone for announcements or a simple intercom
- **Turntable.** Connect a phono preamp's line-out and stream vinyl playback to any player

## Docker installs

The container needs access to the host's sound system. Add the following to the `music-assistant-server` service in your compose file:

```yaml
volumes:
  - /run/user/1000/pulse:/run/pulse:ro # adjust the uid to your user session
environment:
  - PULSE_SERVER=unix:/run/pulse/native
group_add:
  - "audio"
```

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](/settings/player-provider) page. Specific settings available for this provider are:

- **Include monitor sources**. Off by default. When enabled, the Audio Input Device list also shows monitor sources, which are special inputs that capture whatever is currently playing on one of the host's audio outputs
- **Audio Input Device**. The capture source this instance uses, picked from the capture sources detected on the host
- **Thumbnail**. A bundled icon, or a custom image URL
- **Auto-start on signal**. Off by default. When enabled, also set an **Auto-start target player** and, optionally, a **Signal threshold (dBFS)** — the volume level above which the input counts as active audio. The default (-50.0) suits most hardware; raise it if quiet background noise causes false starts, lower it if quiet material fails to trigger playback. Playback starts after a fraction of a second of continuous signal and stops about 5 seconds after the input goes silent.
