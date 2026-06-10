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

- **Dynamic player registration**: Each TV is automatically registered as a player when it connects — no manual setup required
- **Multi-TV support**: Multiple TVs can play simultaneously, each with independent control
- **Library browsing on TV**: Browse albums, artists, playlists, and tracks directly on the TV screen via MSX native UI
- **Search**: Full-text search through the Music Assistant library from the TV
- **WebSocket push notifications**: Bidirectional real-time communication between MA and the TV (play, pause, resume, stop, seek, position reporting)
- **Player grouping** *(experimental)*: Group multiple MSX TVs to play the same track simultaneously
- **Browser web player**: Access the provider via any web browser at `http://<ma-ip>:8099/web`
- **Idle timeout cleanup**: Inactive players are automatically unregistered after a configurable timeout
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
- **Group Stream Mode**. How to stream audio to grouped players. `Independent` (default) creates a separate stream per TV. `Shared Buffer` uses one ffmpeg process for all group members (less CPU, better sync)

## How It Works

1. The provider runs an embedded HTTP server (default port 8099) inside Music Assistant
2. The MSX app on the TV connects to this server and loads a native JSON-based UI for browsing the MA library
3. When a track is played, the TV requests the audio stream from the provider, which fetches audio from MA, encodes it via ffmpeg, and streams it to the TV
4. A WebSocket connection provides real-time bidirectional control: MA can send play/pause/stop/seek commands to the TV, and the TV reports playback position back to MA
5. The status dashboard is available at `http://<ma-ip>:8099/`

## Known Issues / Notes

- **Audio format**: MP3 is the most compatible format across all TV platforms. AAC offers slightly better quality at the same bitrate. FLAC is lossless but Content-Length cannot be determined in advance, which may cause issues on some TVs
- **Player grouping**: This is experimental. The `Shared Buffer` mode provides better synchronization between TVs but requires all grouped TVs to use the same audio format
- **Network**: The TV and MA server must be on the same local network. There is no remote/cloud access support
- **Idle timeout**: If a TV is powered off or the MSX app is closed, the player will be automatically removed after the configured idle timeout (default 30 minutes). It will reappear when the TV reconnects
- Crossfade is not supported — MSX uses its native media player which does not support crossfading between tracks
