---
title: AirPlay Receiver Plugin
description: Features and Notes for the AirPlay Receiver Plugin
---

# AirPlay Receiver <img src="/assets/icons/airplay-receiver-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has the ability to add <a href="https://www.apple.com/au/airplay/" target="_blank" rel="noopener noreferrer">AirPlay Receiver</a> audio support to any MA player.

> [!NOTE]
> This plugin is still in an early stage of development. Functionality is limited and bugs may occur
    
## Features

- Allows any MA player to appear as an AirPlay device in other applications which support AirPlay
- Any MA player can be exposed including groups

## Configuration

1. Add the plugin via **Settings → Plugins → Add a plugin**. The plugin is added once and serves all your players.
2. Under **Connected players**, select every player that should appear as an AirPlay device. Each selected player is advertised as its own AirPlay receiver, and the audio always plays on the player whose receiver you picked in the sending app. The selection can be changed later in the plugin settings.
3. Optionally change **Advertised device name**, which controls how the receivers are named after their player: `Player name | Music Assistant` (the default), `Player name only`, or `Music Assistant | Player name`. Renaming a player renames its receiver.

## Known Issues / Notes

- To use AirPlay, all devices must be connected to the same network
- Due to buffering a delay of approximately 5 seconds is normal when playing, pausing and resuming
- Using a HA Media Player as a connected player is not supported
- When upgrading from an earlier version (where the plugin was added once per player), the per-player copies are merged into a single configuration automatically
