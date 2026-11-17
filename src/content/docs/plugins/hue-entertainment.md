---
title: Hue Lights Sync Plugin
description: Make your Philips Hue lights change colour in time with whatever is playing.
pluginGroup: visuals
---

# Hue Lights Sync <img src="/assets/icons/hue-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

This plugin makes your <a href="https://www.philips-hue.com/" target="_blank" rel="noopener noreferrer">Philips Hue</a> lights react to whatever is playing, changing colour in time with the music. The lights turn up in Music Assistant as if they were a speaker, and you group them with the player the music is coming from.

It reaches the lights in one of two ways. Through a Hue bridge, where each entertainment area you have set up becomes a light player. Or without a Hue bridge, straight to Hue lamps connected to Home Assistant's <a href="https://www.home-assistant.io/integrations/zha/" target="_blank" rel="noopener noreferrer">Zigbee integration (ZHA)</a> running on Ziggurat, where the lamps you choose together become a light player.

> [!CAUTION]
> This plugin is marked experimental. It has been tested on Hue Bridge V2, Hue Bridge Pro and Hue lamps in ZHA, but functionality may change and bugs may occur.

## Features

- Lights change with the music, quickly enough to keep up with it
- Four styles to choose from: Smooth, Ambient, Flashing and Energetic
- Colours change on the beat where Music Assistant can work out where the beat is, and follow the loud moments in the music where it cannot
- Hue bridges on your network are found on their own
- More than one bridge is supported. Add the plugin again for each
- Every entertainment area on a bridge becomes its own light player in Music Assistant
- No Hue bridge needed for Hue lamps in ZHA. Add the plugin again for each set of lamps you want to sync separately, such as one per room

## Configuration

- The lights can only follow a [Sendspin](/player-support/sendspin/) player, so you need at least one of those. Sendspin is built into Music Assistant, and the web player in your browser is one
- In Music Assistant, go to **Settings → Plugins → Add a plugin** and select **Hue Lights Sync**
- Choose where your Hue lights are connected: **Hue Bridge**, or **ZHA via Ziggurat (experimental)**, then follow the steps for that choice below
- Join a Hue light player to any active Sendspin player or group and the lights will start reacting to the music

### With a Hue bridge

- Create an Entertainment Area in the Philips Hue app (`SETTINGS >> ENTERTAINMENT AREAS`) before adding the plugin
- Enter the IP address of the Hue bridge. When Music Assistant found the bridge on your network, it is filled in already
- Press the round link button on top of the Hue bridge, then continue within 30 seconds
- Each entertainment area on the bridge appears as a light player

### With ZHA via Ziggurat

Before you start, check that:

- The [Home Assistant plugin](/ha-plugin/) is set up and connected
- ZHA runs on Ziggurat
- When Music Assistant does not run as a Home Assistant App, it can reach port `9999` on your Home Assistant machine, where Ziggurat listens

Until the first two are in place, the ZHA option is greyed out.

Then:

- Tick the lamps to sync. Only the Hue lamps in ZHA that support light sync are listed. Choose lamps within radio range of each other, such as the lamps in one room: Music Assistant sends the colours to one of them, which passes them on to the others
- Give the light player a name, or leave it empty to name it after the rooms of the lamps
- Music Assistant checks the lamps, and they appear together as one light player
- A gradient lamp, such as a Signe or a gradient lightstrip, shows up to three colours at once

### Settings

- <b>Brightness.</b> Overall light brightness (0-100). Default `100`.
- <b>Mode.</b> Selects the visualization style:
    - <b>Smooth</b> (default) - gentle spectrum-driven brightness with a slowly drifting palette that cycles colour on the beat.
    - <b>Ambient</b> - colour cycling on the beat with saturation reacting to the bass, no brightness modulation. Best for relaxed listening.
    - <b>Flashing</b> - strong brightness pulse on every beat, stronger on downbeats.
    - <b>Energetic</b> - large brightness swings on the beat plus fast palette and hue rotation.
- <b>Light latency (ms).</b> Milliseconds to render light updates ahead of the audio, to offset the delay of the Hue bridge or the Zigbee network (0-3000). Default `20`. Increase if the lights lag the music, decrease if they run ahead of it.

> [!CAUTION]
> The **Flashing** and **Energetic** modes produce rapid flashing. Avoid them if you or anyone present is sensitive to flashing lights.

## Known Issues / Notes

- Hue light players are virtual `LIGHT` players that use the Sendspin visualizer stream; they can only be joined to Sendspin players or groups
- Beat effects use the track's beat analysis from the [Smart Fades](/audio-analysis/smart-fades) provider when available, otherwise the lights fall back to peak and onset detection. Beats may be unavailable when the analysis hasn't been computed yet, or on lower-powered devices that can't compute beats in time
- Entertainment areas are discovered when the plugin (re)loads, so adding a new entertainment area in the Hue app requires reloading the plugin before it will appear as an MA player
- The Hue bridge only allows one entertainment area to stream at a time, so only one Hue light player per bridge can be active at any given moment
- With ZHA, one Hue light player syncs at a time. Starting music on a second one moves the sync to it, and the first stops syncing until its own music is stopped and started again
- With ZHA, a lamp follows one light sync at a time. While another app syncs one of the chosen lamps, the light player waits until the lamp is free, then starts on its own
- With ZHA, the lamps go back to how they were when the music stops
