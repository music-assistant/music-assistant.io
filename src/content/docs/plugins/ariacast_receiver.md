---
title: AriaCast Receiver Plugin
description: Features and Notes for the AriaCast Receiver Plugin
---

# AriaCast Receiver <img src="/assets/icons/ariacast_icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />
The **AriaCast Receiver** plugin allows for streaming of high-quality audio wirelessly from Android devices to any Music Assistant player. This plugin was contributed and is maintained by [Lorenzo](https://github.com/AirPlr)

> [!NOTE]
> This plugin is still in an early stage of development. Functionality is limited and bugs may occur

--- 

## Configuration
1. Enable **AriaCast Receiver** in Music Assistant settings.
2. The plugin will automatically start the helper binary.
3. Configure the playback settings:
   - **Connected Player**: Select a specific player or set to "Auto" to use the currently active player.
   - **Allow manual player switching**: If enabled, allows the stream to be moved to a different player within Music Assistant

## Usage
1. Install the [AriaCast Android app](https://github.com/AirPlr/AriaCast-app).
2. Open the app — it will automatically discover servers on the network that the Android device is connected to`
3. Select the Music Assistant server desired and start playing content
4. Audio will be streamed to the configured Music Assistant player.


## Troubleshooting

- **Server Not Found**: Ensure both devices are on the same network. The plugin uses a helper binary that listens for discovery broadcasts.
- **No Audio Playback**: If the app shows as connected but no audio is playing, try disconnecting and reconnecting from the Android app to reset the stream.
- **Binary Issues**: If the plugin fails to start, check the Music Assistant logs for errors related to the AriaCast binary execution.

## Internal Architecture

This plugin acts as a bridge between Music Assistant and the standalone AriaCast binary.
- The binary handles the protocol emulation and audio decoding.
- Audio is piped from the binary to Music Assistant via standard output (stdout).
- Metadata and playback state are synchronized via a local WebSocket connection.
