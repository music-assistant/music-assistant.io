---
title: LIFX Lights Sync Plugin
description: Make your LIFX lights change colour in time with whatever is playing.
pluginGroup: visuals
---

# LIFX Lights Sync <img src="/assets/icons/lifx-icon.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

This plugin makes your <a href="https://www.lifx.com/" target="_blank" rel="noopener noreferrer">LIFX</a> lights react to whatever is playing, changing colour in time with the music. Contributed and maintained by <a href="https://github.com/sonic1200" target="_blank" rel="noopener noreferrer">sonic1200</a>

Music Assistant talks to the lights directly over your local network, so no LIFX cloud account or hub is needed. Your lights turn up in Music Assistant as if they were speakers, one per room by default, and you group them with the player the music is coming from.

> [!CAUTION]
> This plugin is marked experimental. Functionality may change and bugs may occur.

## Features

- Lights change with the music, quickly enough to keep up with it
- Four styles to choose from: Smooth, Ambient, Flashing and Energetic
- Colours change on the beat where Music Assistant can work out where the beat is, and follow the loud moments in the music where it cannot
- LIFX lights on your network are found on their own, and followed when their IP address changes
- Light strips (LIFX Z, Beam) are split into segments that each react on their own
- Lights can be grouped by the rooms set up in the LIFX app, all together, or one player per light
- When the music stops, each light returns to its original colour and power

## Configuration

- The lights can only follow a [Sendspin](/player-support/sendspin/) player, so you need at least one of those. Sendspin is built into Music Assistant, and the web player in your browser is one
- Make sure the lights are powered and on the same network as Music Assistant. They can be switched off in the LIFX app
- In Music Assistant, go to **Settings → Plugins → Add a plugin** and select **LIFX Lights Sync**
- Music Assistant searches the network for LIFX lights. If some are not found, enter your network's broadcast address (for example `192.168.1.255`) or the lights' IP addresses and search again
- Pick the lights that should react to music, and how to turn them into light players: one per LIFX room (default), one with all the lights, or one per light
- Click SAVE to complete configuration. Each player appears as a Light player
- Join a LIFX light player to any active Sendspin player or group and the lights will start reacting to the music

### Settings

- <b>Brightness.</b> Overall light brightness (0-100). Default `100`.
- <b>Mode.</b> Selects the visualization style:
    - <b>Smooth</b> (default) - gentle spectrum-driven brightness with a slowly drifting palette that cycles colour on the beat.
    - <b>Ambient</b> - colour cycling on the beat with saturation reacting to the bass, no brightness modulation. Best for relaxed listening.
    - <b>Flashing</b> - strong brightness pulse on every beat, stronger on downbeats.
    - <b>Energetic</b> - large brightness swings on the beat plus fast palette and hue rotation.
- <b>Light latency (ms).</b> Milliseconds to render light updates ahead of the audio, to offset the Wi-Fi and bulb delay (0-3000). Default `100`. Increase if the lights lag the music, decrease if they run ahead of it.
- <b>Transition (ms).</b> Advanced setting. Fade time the bulbs use to move to each new colour (0-1000). Default `50`. Higher is smoother, lower is snappier.
- <b>Switch on lights that are off.</b> Turn on lights that are off while music plays. Default on. They are switched off again when the music stops.

> [!CAUTION]
> The **Flashing** and **Energetic** modes produce rapid flashing. Avoid them if you or anyone present is sensitive to flashing lights.

## Known Issues / Notes

- LIFX light players are virtual `LIGHT` players that use the Sendspin visualizer stream; they can only be joined to Sendspin players or groups
- Beat effects use the track's beat analysis from the [Smart Fades](/audio-analysis/smart-fades) provider when available, otherwise the lights fall back to peak and onset detection. Beats may be unavailable when the analysis hasn't been computed yet, or on lower-powered devices that can't compute beats in time
- To add or remove lights, or change how they are grouped, open the plugin's settings and run its setup again
- A light that was offline when the plugin loaded does not join in until the plugin is reloaded
- Wi-Fi bulbs react with a short delay. If the lights feel out of step, adjust the light latency
- Matrix lights (Tile, Candle, Ceiling) have not been tested yet
- The setup search needs the lights and Music Assistant on the same network segment. Networks that block broadcasts can enter the lights' IP addresses instead
