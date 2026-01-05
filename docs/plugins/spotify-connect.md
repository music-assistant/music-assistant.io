---
title: Spotify Connect Plugin
description: Features and Notes for the Spotify Connect Plugin
---

# Spotify Connect ![Preview image](../assets/icons/spotify-connect-icon.png){ align=right }

Music Assistant has the ability to add [Spotify Connect](https://connect.spotify.com/) support to any MA player.

!!! note
    This plugin is still in an early stage of development. Functionality is limited and bugs may occur
    
## Features

- Any MA player can be exposed including groups

## Configuration

To make each player appear as a Spotify Connect target in the Spotify app, the Spotify Connect provider needs to be added individually for each player in the MA Provider Settings

!!! note
    It is inadvisable to try and configure a Home Assistant player. Use only native Music Assistant players

## Known Issues / Notes

- To use Spotify Connect, all devices must be connected to the same network. Refer to the [Spotify Connect Support Article](https://support.spotify.com/us/article/spotify-connect/) for more information (Note that any reference in that article to accessing devices from different WiFi networks isn't supported)
- If the device does not natively support announcements then playback will be interrupted if an announcement is sent to a player that is being streamed to via Spotify Connect. Currently this means that, announcements will only work on the Voice PE devices (and derivatives) and Sonos S2 devices
- Due to the universal, [buffered nature of forwarding the Spotify Connect audio stream](https://github.com/orgs/music-assistant/discussions/419#discussioncomment-12237246) to MA players, there will be a delay (between 0.5 and 5 seconds) in sending a command from the Spotify app. Metadata can also be ahead of time
- Using a HA Media Player as the `Connected Music Assistant Player` is not supported
