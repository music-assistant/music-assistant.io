---
title: Plex Connect Plugin
description: Features and Notes for the Plex Connect Plugin
---

# Plex Connect <img src="/assets/icons/plex-connect-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has the ability to expose MA players to Plex clients like Plexamp for discovery and control.

> [!NOTE]
> This plugin requires the Plex music source to be configured.

## Features

- Any MA player can be exposed as a Plex Connect target, including groups
- Players are automatically discovered by Plex clients via GDM (Good Day Mate) broadcasts on the local network
- Players can optionally be linked with your Plex account (plex.tv), which helps them show up in the Plexamp mobile apps (iOS/Android) on networks where local discovery does not reach them
- Standard playback controls: play, pause, skip, seek
- Queue management: add tracks, reorder, clear queue
- Access to Plex features: Sonic Adventures, Radio, DJs, Mixes
- Playback state, current track, progress, and queue are synchronized in real-time
- Volume control works on groups and sync groups, adjusting the members together while keeping their balance
- If a player already has a queue when the plugin starts, that queue is sent to Plex so you can see and control it straight away
- Playback activity is reported to the Plex server
- Listening history and scrobbles are visible in Plex dashboard
- Supports Plex features like "Continue Listening"

## Configuration

To make each player appear as a Plex Connect target in Plex clients, the Plex Connect plugin needs to be added individually for each player. The plugin is added by navigating to the MA Settings then selecting Plugins and then clicking on ADD A PLUGIN.

### Configuration Options

- **Plex Music Provider**: the Plex music source this instance connects to (required).
- **Music Assistant Player**: the MA player to expose as a Plex remote client.
- **Player Name in Plex**: the name shown for this player in Plex apps. Leave empty to use the player's name.
- **Device Class**: how the player shows up in Plex apps. Choose from Speaker, Phone, Tablet, Set-Top Box, TV, PC or Cloud.
- **Network Port** (advanced): the TCP port this player is reachable on. Leave it empty to have Music Assistant pick a free port and remember it, so the instance keeps the same port after a restart.

### Linking with your Plex account (if players don't show up on mobile)

On most networks the Plexamp mobile apps (iOS/Android) discover Plex Connect players on the local network, just like the desktop and web clients. On some networks, though, the mobile apps only list players registered on plex.tv. If your player does not appear in the mobile cast menu, link it with your Plex account:

1. In the plugin instance settings, click **Get plex.tv link code**.
2. Open [plex.tv/link](https://plex.tv/link) (signed in to your Plex account) and enter the 4-character code shown in the settings dialog.
3. Back in Music Assistant, click **I have entered the code** and save the configuration.

The player then appears in the cast menu of Plexamp on your phone within seconds. Linking is a one-time step per plugin instance: Music Assistant stores a device token and refreshes the registration automatically on startup. Use **Unlink from plex.tv** in the settings to undo it. Unlinking or removing the plugin instance does not remove the device entry from your Plex account - remove it under [Authorized Devices](https://app.plex.tv/desktop/#!/settings/devices/all) if desired.

## Known Issues / Notes

- To use Plex Connect, all devices (including phones casting to the player) must be connected to the same network. Linking a player with plex.tv only affects whether the mobile apps *see* it; playback control always happens over the local network
- On some networks the Plexamp mobile apps do not pick up players via local (GDM) discovery. Linking with a Plex account is the workaround for those setups; it is not needed where local discovery already works
- Timeline reporting to the Plex server is done on a per-player basis
- A queue loaded from Plex is capped at 100 tracks to keep loading and syncing responsive
- Each plugin instance keeps the same network port across restarts. If you run several instances, give each one a different port, or leave the port empty and let Music Assistant pick and remember a free one for each
- Plex does not offer a public protocol for controlling Plex players, so this plugin builds on the reverse-engineering work done by others. A Plex update could stop it from working overnight, and there is no guarantee it can be fixed
- Playback is driven by Music Assistant, not by Plex, so features are mirrored by MA and are not exactly the same as playing on a real Plex client. The sweet fades and the shuffling, for example, are handled on the MA side
