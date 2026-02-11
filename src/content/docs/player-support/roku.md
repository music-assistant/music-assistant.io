---
title: "Roku Media Assistant"
---

# Roku Media Assistant <img src="/assets/icons/roku-media-assistant-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Media Assistant is a utility that allows you to stream/play local and hosted media on your Roku device through Deeplinks. More information including examples and documentation can be found on the <a href="https://medievalapple.net/Media-Assistant" target="_blank" rel="noopener noreferrer">Media Assistant website</a>.

## Features

- Roku's are auto-detected by Music Assistant
- Play/pause using physical buttons is supported
- Audio quality is lossless 48 kHz/16-bit

## Settings

In addition to the [Individual Player Settings](../settings/individual-player) the Roku Media Assistant provider also has the following Advanced settings.

<b>Allow automatic Roku discovery</b> is on by default and enables the automatic discovery of Roku devices.

<b>App ID of Media Assistant</b> is only used if the Media Assistant app was sideloaded onto the device. 

## Configuration

:::note
Your Roku must be on Roku OS V9.1 or higher to install the Media Assistant App (The app has only been tested on a minimum of OS V13.0).

1.	Install the Media Assistant app from the Roku Channel Store or sideload it on your Roku.
- Roku Channel Store Link (https://channelstore.roku.com/details/625f8ef7740dff93df7d85fc510303b4/media-assistant)
- Sideload Link (https://github.com/MedievalApple/Media-Assistant)
2.	If you sideloaded the app, you will need to change the Player Provider Setting in Advanced >> `App ID of Media Assistant` to `dev`.
3.	On newer Roku OS versions, in order for Music Assistant to communicate with the Roku, you must ensure mobile app control is enabled. To check this, go to the Roku's settings and navigate to (Settings >> System >> Advanced system settings >> Control by mobile apps >> Network access) and check if `Network access` is set to `Enabled`.

## Known Issues / Notes

- Physical buttons for skipping do not work
- Roku's do not support crossfading of audio. If crossfade and/or full gapless support IS DESIRED, enable `Flow mode` in the player's advanced settings. Enabling `Flow mode` may solve playback issues however the displayed time remaining will be lost


## Not Yet Supported
- Volume currently has to be controlled on the device.
