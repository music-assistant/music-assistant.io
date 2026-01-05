---
title: AirPlay Receiver Plugin
description: Features and Notes for the AirPlay Receiver Plugin
---

# AirPlay Receiver ![Preview image](../assets/icons/airplay-receiver-icon.svg){ width=70 align=right }

Music Assistant has the ability to add [AirPlay Receiver]([https://connect.spotify.com/](https://www.apple.com/au/airplay/)) audio support to any MA player.

!!! note
    This plugin is still in an early stage of development. Functionality is limited and bugs may occur
    
## Features

- Allows any MA player to appear as an AirPlay device in other applications which support AirPlay
- Any MA player can be exposed including groups

## Configuration

To make each player appear as an AirPlay target, this plugin needs to be added individually for each player in the MA Provider Settings

## Known Issues / Notes

- To use AirPlay, all devices must be connected to the same network
- Due to buffering a delay of approximately 5 seconds is normal when playing, pausing and resuming
- Using a HA Media Player as the `Connected Music Assistant Player` is not supported
