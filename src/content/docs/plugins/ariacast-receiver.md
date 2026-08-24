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
1. Add the **AriaCast Receiver** plugin via **Settings → Plugins → Add a plugin**.
2. Configure the playback settings:
   - **Connected Player**: Select a specific player or set to "Auto" to use the currently active player.
   - **AriaCast Device Name**: The name shown to AriaCast senders when they discover this receiver on the network. Defaults to "Music Assistant" if left empty.

## Usage
1. Install the [AriaCast Android app](https://github.com/AriaCast/AriaCast-app/releases/latest).
2. Open the app. It will automatically discover servers on the network that the Android device is connected to
3. Select the Music Assistant server desired and start playing content
4. Audio will be streamed to the configured Music Assistant player.


## Troubleshooting

- **Server Not Found**: Ensure the Android device and MA server are on the same network, and that UDP port `12888` isn't blocked by a firewall.
- **No Audio Playback**: If the app shows as connected but no audio is playing, try disconnecting and reconnecting from the Android app to reset the stream.
- **Only One Sender at a Time**: The receiver accepts a single AriaCast sender at once. A second device attempting to connect while one is already streaming will be rejected until the first one disconnects.
- **Startup Issues**: If the plugin fails to start (for example because port `12889` is already in use), check the Music Assistant logs for details.

