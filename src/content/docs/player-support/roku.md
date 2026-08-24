---
title: "Roku Media Assistant"
---

# Roku Media Assistant <img src="/assets/icons/roku-media-assistant-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Media Assistant is a utility that allows you to stream/play local and hosted media on your Roku device through Deeplinks. More information including examples and documentation can be found on the <a href="https://medievalapple.net/Media-Assistant" target="_blank" rel="noopener noreferrer">Media Assistant website</a>. This provider is contributed and maintained by [Medieval Apple](https://github.com/MedievalApple).

## Features

- Roku's are auto-detected by Music Assistant
- Play/pause using physical buttons is supported
- Audio quality is lossless 48 kHz/16-bit

## Configuration

> [!NOTE]
> Your Roku must be on Roku OS V9.1 or higher to install the Media Assistant App (The app has only been tested on a minimum of OS V13.0).

1.	Install the Media Assistant app from the Roku Channel Store or sideload it on your Roku.
- Roku Channel Store Link (https://channelstore.roku.com/details/625f8ef7740dff93df7d85fc510303b4/media-assistant)
- Sideload Link (https://github.com/MedievalApple/Media-Assistant)
2.	If you sideloaded the app, you will need to change the Player Provider Setting in Advanced >> `App ID of Media Assistant` to `dev`.
3.	On newer Roku OS versions, in order for Music Assistant to communicate with the Roku, you must ensure mobile app control is enabled. To check this, go to the Roku's settings and navigate to (Settings >> System >> Advanced system settings >> Control by mobile apps >> Network access) and check if `Network access` is set to `Enabled`

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Allow automatic Roku discovery.</b> This is on by default and enables the automatic discovery of Roku devices
- <b>Manual IP addresses for discovery.</b> Add Roku devices by IP address when automatic discovery does not find them on your network
- <b>App ID of Media Assistant.</b> Defaults to the Roku Channel Store version of Media Assistant, ID 782875. Set it to dev if you sideloaded the app onto your Roku

In addition to the [Individual Player Settings](/settings/individual-player/) the Roku players have the following settings:

- <b>Enable queue flow mode.</b> Off by default. Enabling this option will send all tracks as a continuous audio stream. This allows for support of gapless or crossfading. This can also help if your Roku is having difficulty transitioning between tracks. This does have the side effect of losing some displayed metadata
- <b>Output channel mode.</b> The default is Stereo (both channels) but other options are Left channel only, Right channel only or Mono (both channels)
- <b>Sample rates supported by this player.</b> This setting defaults to Roku's stated support of 44.1kHz / 16 bits and 48kHz / 16 bits, but the sample rates and bit depths can be manually set. Unsupported sample rates may work depending on the Roku device
- <b>Output codec to use for streaming audio to the player.</b> The default is FLAC but other options are MP3, AAC or WAV. Some codecs may load faster than others depending on the Roku device
- <b>HTTP Profile used for sending audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues. The default is Profile 2 - no content length
- <b>Prefer low-latency WAV for live sources.</b> Sends live sources such as Spotify Connect and AirPlay Receiver as uncompressed audio to reduce the delay before you hear them. Disable this if the Roku cannot play continuous WAV streams
- <b>Try to inject metadata into stream (ICY).</b> Only applies while flow mode is enabled, so it is greyed out with the default settings. It attempts to provide metadata to the player so it can show track info during a flow stream
- <b>Flow Mode sample rate.</b> Only applies while flow mode is enabled. A flow mode stream uses a single sample rate from start to finish, and this decides which one

## Known Issues / Notes

- Physical buttons for skipping do not work
- Roku's do not support crossfading of audio. If crossfade and/or full gapless support IS DESIRED, enable `Flow mode` in the player's advanced settings. Enabling `Flow mode` may solve playback issues however the displayed time remaining will be lost


## Not Yet Supported
- Volume currently has to be controlled on the device
