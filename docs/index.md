---
title: Music Assistant
description: Music Assistant is a music library manager for local and streaming providers
---

# Music Assistant

![Banner](assets/banner.png)

Music Assistant is a music library manager for your offline and online music sources which can easily stream your favourite music to a wide range of supported players and be combined with the power of Home Assistant!

## Features

- Supports multiple music sources through a provider implementation
- Many popular streaming services are supported, as well as local files
- Automatically matches music on different providers (track linking)
- Fetches metadata for extended artist information
- Keeps track of the entire music library in a compact database
- Gapless, crossfade and volume normalization support for all players
- Playback synchronisation is possible for supported players
- Announcements during playback supported
- Transfer of playback between players supported
- Truly hassle free streaming of your favourite music to players, no advanced knowledge required
- Rich User interface (Progressive Web App) powered by ![logo](assets/icons/vue-js-logo.png){width=20 }VueJS 3

[![Music Assistant Add-on For Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=d5369777_music_assistant&repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon)

## Architecture

Music Assistant consists of multiple building blocks:

- Music Assistant Server ([Installation Instructions](installation.md))
- Home Assistant Integration ([Installation Instructions](integration/installation.md))
- [Music Providers](music-providers/index.md): Import your music from various sources into Music Assistant.
- [Player Providers](player-support/index.md): Play your music on a wide collection of player ecosystems.
- Plugins: These extend the functionality of Music Assistant. Importantly, the [Home Assistant Plugin](ha-plugin.md) allows the importing of Home Assistant media players into the Music Assistant engine to use as targets for playback

## Music Assistant Server

The Music Assistant server is a free, opensource Media library manager that connects to your streaming services and a wide range of connected speakers. The server is the beating heart, the core of Music Assistant and it keeps track of your music sources. It must run on an always-on device like a Raspberry Pi, a NAS or an Intel NUC or alike. The server can access multiple music providers and stream to multiple player types.

![MA Banner](assets/MA_banner.png)

## Home Assistant Integration

Connects Home Assistant to your Music Assistant Server to allow control from your HA instance, allow you to automate your music and allows voice control! The Integration also allows the exposure of HA media players to MA furthering the options you have for playback.

## Preview

![Preview image](assets/screenshots/screen2.png){width=800 }

??? note "Click to show more screenshots"

    ![Preview image](assets/screenshots/screen3.png){width=800 }

    ![Preview image](assets/screenshots/screen1.png){width=800 }

## The Team

[![Marcel](assets/team/marcel.png){ width=100 }](https://github.com/marcelveldt "Marcel. Creator of Music Assistant")
[![Jozef](assets/team/jozef.png){ width=100 }](https://github.com/jozefKruszynski "Jozef. Author of the Tidal provider and Voice Search")
[![Jonathan](assets/team/jonathan.png){ width=100 }](https://github.com/arctixdev "Jonathan. Author of the Deezer provider and the Companion App")
[![Gavin](assets/team/gavin.png){ width=100 }](https://github.com/OzGav "Gavin. Community Support and Documentation")
[![Marvin](assets/team/marvin.png){ width=100 }](https://github.com/marvinschenkel "Marvin. Author of the YouTube and Apple Music providers")
[![jc2k](assets/team/jc2k.png){ width=100 }](https://github.com/jc2k "John. Jellyfin Maintainer and Core Developer")
[![Santiago](assets/team/santiago.png){ width=100 }](https://github.com/santiagosotoc "Santiago. Author of the Snapcast provider")
[![khers](assets/team/khers.png){ width=100 }](https://github.com/khers "Eric. Author of the Subsonic provider")
[![robsonke](assets/team/robsonke.png){ width=100 }](https://github.com/robsonke "Rob. Author of the iBroadcast provider and maintainer of Soundcloud")
[![maxim](assets/team/maxim.png){ width=100 }](https://github.com/maximmaxim345 "Maxim. DSP Guru and Core Developer")
[![Lokiberra](assets/team/lokiberra.png){ width=100 }](https://github.com/lokiberra "Kevin. Author of the Jellyfin provider")
[![Mel](assets/team/melharbour.png){ width=100 }](https://github.com/melharbour "Mel. Core developer team")
[![Giel](assets/team/gieljnssns.png){ width=100 }](https://github.com/gieljnssns "Giel. Author of the Soundcloud provider")
[![diede](assets/team/diede.png){ width=100 }](https://github.com/Cyanogenbot "Diede. Author of the Bluesound provider")
[![btoconnor](assets/team/btoconnor.png){ width=100 }](https://github.com/btoconnor "Brian. Author of the SiriusXM provider")
[![fabian](assets/team/fabian.png){ width=100 }](https://github.com/fmunkes "Fabian. Author of the Audiobookshelf provider")
[![ztripez](assets/team/ztripez.png){ width=100 }](https://github.com/ztripez "Ztripez. Author of the Audible provider")

[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon
