---
title: Hue Lights Sync Plugin
---

# Hue Lights Sync <img src="/assets/icons/hue-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant can sync <a href="https://www.philips-hue.com/" target="_blank" rel="noopener noreferrer">Philips Hue</a> lights to music in real time using the <a href="https://developers.meethue.com/develop/hue-entertainment/" target="_blank" rel="noopener noreferrer">Hue Entertainment API</a>. Each entertainment area on a paired Hue bridge appears as a Music Assistant light player and reacts to whatever is playing when joined to a Sendspin player or group.

> [!CAUTION]
> This plugin is marked experimental. It has been tested on Hue Bridge V2 and Hue Bridge Pro, but functionality may change and bugs may occur.

## Features

- Sync Philips Hue lights to playing music with low latency using the Hue Entertainment API
- Four selectable visualization modes: Smooth, Ambient, Flashing and Energetic
- Beat-synced colour cycling driven by the Sendspin visualizer role, falling back to peak and onset detection when beat data isn't available
- Auto-discovery of Hue bridges on the local network via mDNS
- Multiple bridges supported — add the plugin once per bridge
- Each entertainment area on a bridge is exposed as its own MA light player

## Configuration

- The Sendspin plugin must be installed and at least one Sendspin player or group available — Hue light players can only be joined to Sendspin players
- Create an Entertainment Area in the Philips Hue app (SETTINGS >> ENTERTAINMENT AREAS) before adding the plugin
- In Music Assistant, go to MA SETTINGS >> PLUGINS >> ADD A PLUGIN >> HUE LIGHTS SYNC
- Enter the IP address of the Hue bridge, or let mDNS auto-discover it
- Press the physical link button on the Hue bridge, then click `Pair` in the MA UI
- Click SAVE to complete configuration — each entertainment area on the bridge will appear as a Light player
- Join a Hue light player to any active Sendspin player or group — the lights will start reacting to the music

### Settings

- <b>Brightness.</b> Overall light brightness (0–100). Default `100`.
- <b>Mode.</b> Selects the visualization style:
    - <b>Smooth</b> (default) — gentle spectrum-driven brightness with a slowly drifting palette that cycles colour on the beat.
    - <b>Ambient</b> — colour cycling on the beat with saturation reacting to the bass, no brightness modulation. Best for relaxed listening.
    - <b>Flashing</b> — strong brightness pulse on every beat, stronger on downbeats.
    - <b>Energetic</b> — large brightness swings on the beat plus fast palette and hue rotation.
- <b>Light latency (ms).</b> Milliseconds to render light updates ahead of the audio, to offset the Hue bridge and network delay (0–3000). Default `20`. Increase if the lights lag the music, decrease if they run ahead of it.

> [!CAUTION]
> The **Flashing** and **Energetic** modes produce rapid flashing. Avoid them if you or anyone present is sensitive to flashing lights.

## Known Issues / Notes

- Hue light players are virtual `LIGHT` players that use the Sendspin visualizer stream — they can only be joined to Sendspin players or groups
- Beat effects use the track's beat analysis from the [Smart Fades](/audio-analysis/smart-fades) provider when available, otherwise the lights fall back to peak and onset detection. Beats may be unavailable when the analysis hasn't been computed yet, or on lower-powered devices that can't compute beats in time
- Entertainment areas are discovered when the plugin (re)loads — adding a new entertainment area in the Hue app requires reloading the plugin before it will appear as an MA player
- The Hue bridge only allows one entertainment area to stream at a time, so only one Hue light player per bridge can be active at any given moment
