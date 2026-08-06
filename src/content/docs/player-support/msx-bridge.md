---
title: "MSX Bridge"
---

# MSX Bridge <img src="/assets/icons/msx-bridge-icon.svg" alt="MSX Bridge icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for streaming music to Smart TVs via the <a href="https://msx.benzac.de" target="_blank" rel="noopener noreferrer">Media Station X (MSX)</a> app. MSX is available on Samsung (Tizen), LG (webOS), Amazon Fire TV, Android TV, Apple TV, Xbox, and any modern web browser. This provider is contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

> [!CAUTION]
> **Beta**
>
> This provider is currently in beta. While functional, some features may change.

> [!NOTE]
> Full provider documentation: **[github.com/trudenboy/ma-provider-msx-bridge](https://github.com/trudenboy/ma-provider-msx-bridge)**

## Features

- **Nothing to set up**: each TV appears as a player as soon as it connects
- **More than one TV**: several can play at once, each controlled separately
- **Browse on the TV**: albums, artists, playlists and tracks, on the screen
- **Search**: search your whole Music Assistant library from the TV
- **Control from either end**: play, pause, stop and skip work from Music Assistant or from the TV, and each keeps up with what the other is doing
- **Player grouping** *(experimental)*: play the same track on several TVs at once
- **In a browser too**: open `http://<ma-ip>:8099/web` on any computer
- **Tidies up after itself**: a TV that has been left alone for a while drops off the player list, and comes back when you use it again
- **Player removal**: Players can be manually removed from the MA UI

## Requirements

1. A Smart TV (or device) with the <a href="https://msx.benzac.de" target="_blank" rel="noopener noreferrer">Media Station X</a> app installed
2. The TV and Music Assistant must be on the same network

### Supported Platforms

| Platform | App Store |
|----------|-----------|
| Samsung (Tizen) | Samsung App Store |
| LG (webOS) | LG Content Store |
| Amazon Fire TV | Amazon Appstore |
| Android TV | Google Play Store |
| Apple TV | App Store |
| Xbox | Microsoft Store |
| Web Browser | Open `http://<ma-ip>:8099` |

## Configuration

### Setting Up the TV

1. Install the **Media Station X** app on your Smart TV from the platform's app store
2. Open the MSX app on the TV
3. Enter the start URL: `http://<ma-ip>:8099/msx/start.json` (replace `<ma-ip>` with your Music Assistant server IP)
4. The TV will connect and automatically appear as a player in Music Assistant

### Provider Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- **HTTP Server Port**. The port for the MSX HTTP server. Default: `8099`
- **Audio Output Format**. Audio format for streaming to the TV. Options: `MP3` (default), `AAC`, `FLAC`. Note: FLAC provides lossless quality but some TVs may not support it
- **Player Idle Timeout (minutes)**. Automatically unregister MSX players after this many minutes of inactivity. Default: `30`
- **Show notification before closing player**. Show a confirmation dialog on the TV when stopping playback from MA. Default: off
- **Enable player grouping (experimental)**. Allow grouping multiple MSX TVs to play the same track simultaneously. Default: off
- **Group Stream Mode**. How audio is sent to grouped TVs. `Independent` (default) sends each TV its own copy. `Shared Buffer` prepares the audio once and sends the same thing to all of them, which is easier on your server and keeps the TVs better in step

## How It Works

Music Assistant runs a small web server of its own on port 8099. The MSX app on your TV connects to it, and that is what draws the browsing screens you see on the TV. When you play something, the TV asks for the audio and Music Assistant converts it to a format the TV can handle as it sends it.

The connection stays open both ways, so buttons pressed in Music Assistant reach the TV and the TV keeps Music Assistant up to date with where it has got to in the track.

You can check on all of this at `http://<ma-ip>:8099/`.

## Known Issues / Notes

- **Audio format**: MP3 works on every TV, which is why it is the default. AAC sounds slightly better for the same file size. FLAC is lossless, but Music Assistant cannot tell the TV in advance how long the audio will be, and some TVs do not cope with that
- **Player grouping**: This is experimental. `Shared Buffer` keeps the TVs better in step, but every TV in the group has to be set to the same audio format
- **Network**: The TV and Music Assistant have to be on the same network. There is no way to reach a TV from outside your home
- **Idle timeout**: If a TV is switched off or the MSX app is closed, it disappears from the player list after the idle timeout, 30 minutes by default. It comes back as soon as the TV connects again
- Crossfade is not supported, because the TV does its own playing and cannot fade one track into the next
