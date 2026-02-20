---
title: AriaCast Receiver Plugin
description: Features and Notes for the AriaCast Receiver Plugin
---

# AriaCast Receiver ![AriaCast Icon](https://raw.githubusercontent.com/music-assistant/music-assistant.io/refs/heads/main/public/assets/icons/ariacast-icon.svg){ width=70 align=right }

The **AriaCast Receiver** plugin allows you to stream high-quality audio wirelessly from Android devices to any Music Assistant player.

!!! info "Status: Active Development"
    This plugin is under active development.

--- 

### Configuration
1. Enable **AriaCast Receiver** in Music Assistant settings.
2. The plugin will automatically start the helper binary.
3. Configure the playback settings:
   - **Connected Player**: Select a specific player or set to "Auto" to use the currently active player.
   - **Allow manual player switching**: If enabled, allows you to move the stream to a different player within Music Assistant.

### Usage
1. Install the [AriaCast Android app](https://github.com/AirPlr/AriaCast-app).
2. Open the app — it will automatically discover servers on your network (ensure your device is on the same network).
3. Select your Music Assistant server and start playing content.
4. The audio will be streamed to the configured Music Assistant player.


## Troubleshooting

- **Server Not Found**: Ensure both devices are on the same network. The plugin uses a helper binary that listens for discovery broadcasts.
- **No Audio Playback**: If the app shows as connected but no audio is playing, try disconnecting and reconnecting from the Android app to reset the stream.
- **Binary Issues**: If the plugin fails to start, check the Music Assistant logs for errors related to the AriaCast binary execution.

## Internal Architecture

This plugin acts as a bridge between Music Assistant and the standalone AriaCast binary.
- The binary handles the protocol emulation and audio decoding.
- Audio is piped from the binary to Music Assistant via standard output (stdout).
- Metadata and playback state are synchronized via a local WebSocket connection.
