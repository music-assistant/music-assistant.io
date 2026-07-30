---
title: Spotify Connect Plugin
description: Features and Notes for the Spotify Connect Plugin
---

# Spotify Connect <img src="/assets/icons/spotify-connect-icon.png" alt="Preview image" style="float: right;"  loading="lazy" />

<a href="https://connect.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify Connect</a> lets you press play in the official Spotify app and have the sound come out of your Music Assistant players. With this plugin, any MA player (or group of players) appears in the Spotify app's device list, just like an official Spotify Connect speaker.

> [!NOTE]
> This plugin is still in an early stage of development. Functionality is limited and bugs may occur

> [!NOTE]
> A Spotify Premium account is required to use Spotify Connect. Free accounts will not work
    
## Features

- Any MA player can be exposed as a Spotify Connect device, including groups
- The name shown in the Spotify app is configurable per player

## Configuration

1. In Music Assistant, go to `Settings >> Providers`, click `ADD A NEW PROVIDER` and select `Spotify Connect`.
2. Choose the Music Assistant player that should receive the Spotify audio, and the name to display in the Spotify app. Alternatively, set the player to `Auto` to send audio to whichever player is currently playing, or the first available player if none is playing.
3. Repeat for each player you want to appear in the Spotify app; a separate instance of the plugin is added per player.

> [!NOTE]
> It is inadvisable to try and configure a Home Assistant player. Use only native Music Assistant players

## Usage

1. Open the Spotify app on your phone, tablet or computer. The device must be on the same network as the Music Assistant server.
2. Start playing something, then open Spotify's device picker (the speaker icon).
3. Select the Music Assistant player by the name you configured. The audio will now play through that player.

## Known Issues / Notes

- To use Spotify Connect, all devices must be connected to the same network. Refer to the <a href="https://support.spotify.com/us/article/spotify-connect/" target="_blank" rel="noopener noreferrer">Spotify Connect Support Article</a> for more information (Note that any reference in that article to accessing devices from different WiFi networks isn't supported)
- If the device does not natively support announcements then playback will be interrupted if an announcement is sent to a player that is being streamed to via Spotify Connect. Currently this means that, announcements will only work on the Voice PE devices (and derivatives) and Sonos S2 devices
- Due to the universal, <a href="https://github.com/orgs/music-assistant/discussions/419#discussioncomment-12237246" target="_blank" rel="noopener noreferrer">buffered nature of forwarding the Spotify Connect audio stream</a> to MA players, there will be a delay (between 0.5 and 5 seconds) in sending a command from the Spotify app. Metadata can also be ahead of time
- Using a HA Media Player as the `Connected Music Assistant Player` is not supported
- In complex network setups, if playback problems are experienced, the BIND TO option in the [Streams Settings](/settings/core/#generic) may need to be set
