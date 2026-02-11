---
title: Plex Connect Plugin
description: Features and Notes for the Plex Connect Plugin
---

# Plex Connect <img src="/assets/icons/plex-connect-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has the ability to expose MA players to Plex clients like Plexamp for discovery and control.

:::note
This plugin requires the Plex music provider to be configured.
:::

## Features

- Any MA player can be exposed as a Plex Connect target, including groups
- Players are automatically discovered by Plex clients via GDM (Good Day Mate) broadcasts on the local network
- Standard playback controls: play, pause, skip, seek
- Queue management: add tracks, reorder, clear queue
- Access to Plex features: Sonic Adventures, Radio, DJs, Mixes
- Playback state, current track, progress, and queue are synchronized in real-time
- Playback activity is reported to the Plex server
- Listening history and scrobbles are visible in Plex dashboard
- Supports Plex features like "Continue Listening"

## Configuration

To make each player appear as a Plex Connect target in Plex clients, the Plex Connect plugin needs to be added individually for each player. The plugin is added by navigating to the MA Settings then selecting Providers and then clicking on ADD A NEW PROVIDER.

## Known Issues / Notes

- To use Plex Connect, all devices must be connected to the same network
- Timeline reporting to the Plex server is done on a per-player basis
