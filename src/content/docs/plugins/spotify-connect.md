---
title: Spotify Connect Plugin
description: Features and Notes for the Spotify Connect Plugin
---

# Spotify Connect <img src="/assets/icons/spotify-connect-icon.png" alt="Preview image" style="float: right;"  loading="lazy" />

<a href="https://connect.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify Connect</a> lets you press play in the official Spotify app and have the sound come out of your Music Assistant players. With this plugin, any MA player (or group of players) appears in the Spotify app's device list, just like an official Spotify Connect speaker.

## Playback engines

The plugin can run on two different playback engines. You choose one while adding the plugin and can switch later by re-running the setup.

**Spotify Soloist (official, recommended)** — Spotify's own playback engine for devices without a screen. Setting it up requires a Spotify **Premium** account once, to create a personal API key on the Spotify developer website (the setup guides you through this). Anyone connecting afterwards can use a **Free** (with Spotify ads) or Premium account. Supported Premium accounts may receive lossless audio up to 24-bit/44.1 kHz.

> [!NOTE]
> Music Assistant may not distribute Soloist as part of its own installation, so it is downloaded from Spotify's servers on your behalf (after your consent in the setup) and updated automatically. Spotify's terms do not clearly allow using Soloist this way — using it through Music Assistant is at your own risk.

**go-librespot (community)** — a community-built, reverse-engineered engine. No API key or download is needed, but it is intended for Spotify Premium accounts created before December 2024 and may stop working whenever Spotify changes things on their end.

## Features

- Any MA player can be exposed as a Spotify Connect device, including groups
- The name shown in the Spotify app is configurable per player
- Playback can also be started from Music Assistant itself (browse to `Live Inputs`), which resumes your last Spotify session on the device
- Stopping playback in Music Assistant releases the device in the Spotify app; moving playback to another device in the Spotify app stops the MA player
- Crossfade and loudness normalization are configurable in the plugin settings
- With the Soloist engine you can choose how volume behaves: `Player volume only` (default, the audio always arrives untouched) or syncing the Spotify app's volume slider with the player volume

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLUGINS`, click `ADD A PLUGIN` and select `Spotify Connect`.
2. Choose the playback engine. For Soloist, the setup walks you through Spotify's terms and creating the API key.
3. Choose the Music Assistant player that should receive the Spotify audio, and the name to display in the Spotify app. Alternatively, set the player to `Auto` to send audio to whichever player is currently playing, or the first available player if none is playing.
4. Repeat for each player you want to appear in the Spotify app; a separate instance of the plugin is added per player.

> [!NOTE]
> It is inadvisable to try and configure a Home Assistant player. Use only native Music Assistant players

## Usage

1. Open the Spotify app on your phone, tablet or computer. The device must be on the same network as the Music Assistant server.
2. Start playing something, then open Spotify's device picker (the speaker icon).
3. Select the Music Assistant player by the name you configured. The audio will now play through that player.

## Known Issues / Notes

- To use Spotify Connect, all devices must be connected to the same network. Refer to the <a href="https://support.spotify.com/us/article/spotify-connect/" target="_blank" rel="noopener noreferrer">Spotify Connect Support Article</a> for more information (Note that any reference in that article to accessing devices from different WiFi networks isn't supported)
- Depending on the player's own buffering there can be a short delay between an action in the Spotify app and hearing the result, and the Spotify app's progress can run slightly ahead of the audio
- The exact audio quality Spotify delivers is not visible to Music Assistant: the audio arrives as decoded PCM (44.1 kHz/32-bit for Soloist), so that is what the signal path shows
- Using a HA Media Player as the `Connected Music Assistant Player` is not supported
- In complex network setups, if playback problems are experienced, the BIND TO option in the [Streams Settings](/settings/core/#generic) may need to be set
