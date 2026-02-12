---
title: Music Assistant
description: Music Assistant is a music library manager for local and streaming providers
---

# Music Assistant

![Music Assistant Add-on For Home Assistant](/assets/banner.png)

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
- Rich User interface (Progressive Web App) powered by <img src="/assets/icons/vue-js-logo.png" alt="logo" style="width: 20px;"  loading="lazy" /> VueJS 3

[![Music Assistant Add-on For Home Assistant](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=d5369777_music_assistant&repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon)

## Architecture

Music Assistant consists of multiple building blocks:

- Music Assistant Server ([Installation Instructions](/installation/))
- Home Assistant Integration ([Installation Instructions](/integration/installation/))
- [Music Providers](/music-providers/): Import your music from various sources into Music Assistant.
- [Player Providers](/player-support/): Play your music on a wide collection of player ecosystems.
- Plugins: These extend the functionality of Music Assistant. Importantly, the [Home Assistant Plugin](/ha-plugin/) allows the importing of Home Assistant media players into the Music Assistant engine to use as targets for playback

## Music Assistant Server

The Music Assistant server is a free, opensource Media library manager that connects to your streaming services and a wide range of connected speakers. The server is the beating heart, the core of Music Assistant and it keeps track of your music sources. It must run on an always-on device like a Raspberry Pi, a NAS or an Intel NUC or alike. The server can access multiple music providers and stream to multiple player types.

![MA Banner](/assets/MA_banner.png)

## Home Assistant Integration

Connects Home Assistant to your Music Assistant Server to allow control from your HA instance, allow you to automate your music and allows voice control! The Integration also allows the exposure of HA media players to MA furthering the options you have for playback.

## Preview

<a href="assets/screenshots/screen2.png"><img src="/assets/screenshots/screen2.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>

> [!NOTE]
> **More screenshots**
>
> <a href="assets/screenshots/screen3.png"><img src="/assets/screenshots/screen3.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>
> 
> <a href="assets/screenshots/screen1.png"><img src="/assets/screenshots/screen1.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>

## The Core Team

<a href="https://github.com/marcelveldt" title="Marcel. Creator of Music Assistant" target="_blank" rel="noopener noreferrer"><img src="/assets/team/marcel.png" alt="Marcel" style="width: 100px;" loading="lazy" /></a>
<a href="https://github.com/marvinschenkel" title="Marvin. Project Lead. Author of the YouTube and Apple Music providers" target="_blank" rel="noopener noreferrer"><img src="/assets/team/marvin.png" alt="Marvin" style="width: 100px;" loading="lazy" /></a>
<a href="https://github.com/maximmaxim345" title="Maxim. DSP Guru and Core Developer" target="_blank" rel="noopener noreferrer"><img src="/assets/team/maxim.png" alt="maxim" style="width: 100px;" loading="lazy" /></a>

<a href="https://github.com/OzGav" title="Gavin. Community Support, Documentation and Core Developer" target="_blank" rel="noopener noreferrer"><img src="/assets/team/gavin.png" alt="Gavin" style="width: 100px;" loading="lazy" /></a>
<a href="https://github.com/jozefKruszynski" title="Jozef. Author of the Tidal provider and Core Developer" target="_blank" rel="noopener noreferrer"><img src="/assets/team/jozef.png" alt="Jozef" style="width: 100px;" loading="lazy" /></a>
<a href="https://github.com/fmunkes" title="Fabian. Author of the Audiobookshelf, iTunes Podcast Search and gPodder providers and Core Developer" target="_blank" rel="noopener noreferrer"><img src="/assets/team/fabian.png" alt="fabian" style="width: 100px;" loading="lazy" /></a>
<a href="https://github.com/khers" title="Eric. Author of the Subsonic provider" target="_blank" rel="noopener noreferrer"><img src="/assets/team/khers.png" alt="khers" style="width: 100px;" loading="lazy" /></a>

<a href="https://github.com/santiagosotoc" title="Santiago. Author of the Snapcast provider" target="_blank" rel="noopener noreferrer"><img src="/assets/team/santiago.png" alt="Santiago" style="width: 100px;" loading="lazy" /></a>
<a href="https://github.com/robsonke" title="Rob. Author of the iBroadcast provider and maintainer of Soundcloud" target="_blank" rel="noopener noreferrer"><img src="/assets/team/robsonke.png" alt="robsonke" style="width: 100px;" loading="lazy" /></a>
<a href="https://github.com/arctixdev" title="Jonathan. Author of the Deezer provider and the Companion App" target="_blank" rel="noopener noreferrer"><img src="/assets/team/jonathan.png" alt="Jonathan" style="width: 100px;" loading="lazy" /></a>
<a href="https://github.com/jc2k" title="John. Jellyfin Maintainer and Core Developer" target="_blank" rel="noopener noreferrer"><img src="/assets/team/jc2k.png" alt="jc2k" style="width: 100px;" loading="lazy" /></a>

We also give THANKS to all the other contributors to the <a href="https://github.com/music-assistant/server/graphs/contributors" target="_blank" rel="noopener noreferrer">Server</a>, <a href="https://github.com/music-assistant/frontend/graphs/contributors" target="_blank" rel="noopener noreferrer">Frontend</a>, <a href="https://github.com/music-assistant/voice-support/graphs/contributors" target="_blank" rel="noopener noreferrer">Voice Support</a> and all of the <a href="https://github.com/orgs/music-assistant/repositories?type=all" target="_blank" rel="noopener noreferrer">Repositories</a> that make up this project!

[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon

[![A project from the Open Home Foundation](https://www.openhomefoundation.org/badges/ohf-project.png)](https://www.openhomefoundation.org/)
