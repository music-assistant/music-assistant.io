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

- <b>HTTP Server Port.</b> The port for the MSX HTTP server. The default is 8099
- <b>Audio Output Format.</b> The audio format used for streaming to the TV. Enter mp3 (the default), aac or flac. FLAC gives lossless quality but some TVs cannot play it
- <b>Player Idle Timeout (minutes).</b> Unregisters an MSX player after this many minutes without activity. The default is 30
- <b>Show notification before closing player.</b> Shows a confirmation dialog on the TV when playback is stopped from Music Assistant. Off by default
- <b>Enable player grouping (experimental).</b> Allows several MSX TVs to be grouped so they play the same track together. Off by default. Disable it again if you run into problems with multi TV setups
- <b>Sendspin bridge (experimental).</b> On by default. Registers each TV as a Sendspin client so it can join sample synchronised playback groups with any other Music Assistant player. The TV opens the web kiosk in Sendspin mode when a synchronised stream starts. It needs a TV browser capable of running the Sendspin web client, and falls back to the regular HTTP player if the TV cannot connect
- <b>Stream Delivery Mode.</b> How the audio reaches the TVs. MA Streamserver (the default) points each TV straight at the Music Assistant stream server, which uses the least CPU and applies the per player codec and audio processing, falling back to Independent if the address cannot be worked out. Independent gives each TV its own separate stream, which uses more CPU and does not keep them in step. Shared Buffer prepares the audio once and feeds it to every group member, which is easier on your server and keeps grouped TVs better in step. Note that MA Streamserver mode has each grouped TV fetch its own stream, so they are not kept in step

MSX players use the standard [Individual Player Settings](/settings/individual-player/), including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols). Two of those are worth knowing about on a TV:

- <b>[Output codec to use for streaming audio to the player](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player).</b> Set per TV, and defaults to MP3 here rather than FLAC
- <b>[Enable queue flow mode](/settings/individual-player/#enable-queue-flow-mode).</b> Turning this on stops the TV reporting track progress correctly, so leave it off unless you have a reason to change it

## How It Works

Music Assistant runs a small web server of its own on port 8099. The MSX app on your TV connects to it, and that is what draws the browsing screens you see on the TV. When you play something, the TV asks for the audio and Music Assistant converts it to a format the TV can handle as it sends it.

The connection stays open both ways, so buttons pressed in Music Assistant reach the TV and the TV keeps Music Assistant up to date with where it has got to in the track.

You can check on all of this at `http://<ma-ip>:8099/`.

## Known Issues / Notes

- **Audio format**: MP3 works on every TV, which is why it is the default. AAC sounds slightly better for the same file size. FLAC is lossless, but with it Music Assistant cannot tell the TV up front how much audio is coming, and some TVs will not play without that
- **Player grouping**: This is experimental. `Shared Buffer` keeps the TVs better in step, but every TV in the group has to be set to the same audio format
- **Network**: The TV and Music Assistant have to be on the same network. There is no way to reach a TV from outside your home
- **Idle timeout**: If a TV is switched off or the MSX app is closed, it disappears from the player list after the idle timeout, 30 minutes by default. It comes back as soon as the TV connects again
- Crossfade is not supported, because the TV does its own playing and cannot fade one track into the next
