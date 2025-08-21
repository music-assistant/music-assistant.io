# Music Assistant Companion

[![latest version](https://img.shields.io/github/release/music-assistant/music-assistant-desktop?display_name=tag&include_prereleases&label=Latest%20version)](https://github.com/music-assistant/companion/releases/latest)
[![discord](https://img.shields.io/discord/753947050995089438?label=Discord&logo=discord&color=5865F2)](https://discord.gg/kaVm8hGpne)
[![sponsor](https://img.shields.io/github/sponsors/music-assistant?label=sponsors)](https://github.com/sponsors/music-assistant)
[![sponsor](https://img.shields.io/static/v1?label=Licence&message=Apache-2.0&color=000)](https://github.com/music-assistant/companion/blob/main/LICENSE)
![sponsor](https://img.shields.io/static/v1?label=Bundled%20Size&message=25.1MB&color=0974B4)
[![sponsor](https://img.shields.io/static/v1?label=Stage&message=Alpha&color=2BB4AB)](https://github.com/music-assistant/companion/blob/main/LICENSE)

The desktop companion app for Music Assistant!

**Download for** macOS ([Apple Silicon](https://github.com/music-assistant/companion/releases/download/v0.0.73/Music.Assistant.Companion_0.0.73_aarch64.dmg) | [Intel](https://github.com/music-assistant/companion/releases/download/v0.0.73/Music.Assistant.Companion_0.0.73_x64.dmg)) · [Windows](https://github.com/music-assistant/companion/releases/download/v0.0.73/Music.Assistant.Companion_0.0.73_x64_en-US.msi) · Linux ([Debian](https://github.com/music-assistant/companion/releases/download/v0.0.73/Music.Assistant.Companion_0.0.73_amd64.deb) | [Other](https://github.com/music-assistant/companion/releases/download/v0.0.73/Music.Assistant.Companion_0.0.73_amd64.AppImage))

!!! tip "This is still in very early alpha. Bugs *will* be present."
    Please help finding them. You can report any bugs on the [Discord server](https://discord.gg/kaVm8hGpne) or in the [repo issues](https://github.com/music-assistant/companion/issues)

!!! note
    There aren't apps available yet for Android or iOS

## Setup

When starting the app for the first time you are asked for some information about the Music Assistant Server.

![image](assets/screenshots/companion-app-config.png)

!!! note "The app requires that the webserver is exposed. You can set that in the settings"
    ![How to fix](assets/screenshots/cant_connect_error.gif)

## Features

### [Squeezelite](https://en.wikipedia.org/wiki/Squeezelite)

Squeezelite comes embedded in the application. This allows playback of music to your computer. The player name will be the same as your computer name. You can change the name in Music Assistant settings. You can also toggle if you wish to enable squeezelite at all.

To allow playback to the companion app you have to enable the Squeezelite provider in the Music Assistant settings.

### [Discord Rich Presence](https://discord.com/developers/docs/rich-presence/how-to#so-what-is-it)

Like the Spotify app, the Music Assistant app can do Discord Rich Presence.

Example of Discord Rich Presence:

![Example of Discord Rich Presence](https://github.com/music-assistant/companion/assets/74015378/8de18bac-b963-4aba-bb61-5730b41759a9)

## Installation

### Windows

You can download the .msi installer from the [releases](https://github.com/music-assistant/companion/releases/latest/).

### macOS

You can download the .dmg from the [releases](https://github.com/music-assistant/companion/releases/latest/).

Or you can download it using homebrew: `brew install music-assistant/tap/companion`

### Arch Linux

This app is on the arch aur with the name `music-assistant-desktop` or `music-assistant-desktop-bin` for just the binary

You can install it with yay: `yay music-assistant-desktop-bin`

### Debian (and Debian based distributions)

You can download the .deb from the [releases](https://github.com/music-assistant/companion/releases/latest/).

### All the other Linux distros

You can download the AppImage from the [releases](https://github.com/music-assistant/companion/releases/latest/).

### From source

If you wish to build the app yourself you should first follow [the offical tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites)

Next, make sure you have the frontend submodule cloned. You can do this by running the following command:

```bash
git submodule --init --recursive
```

Then clone the repository and install the node dependencies

```bash
$ git clone https://github.com/music-assistant/music-assistant-desktop --recursive
$ cd music-assistant-desktop
$ yarn install
$ cd frontend
$ yarn install
$ cd ..
```

And then build the app

`$ npx tauri build`
