---
title: Hue Lights Sync Plugin
---

# Hue Lights Sync <img src="/assets/icons/hue-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant can sync <a href="https://www.philips-hue.com/" target="_blank" rel="noopener noreferrer">Philips Hue</a> lights to music in real time using the <a href="https://developers.meethue.com/develop/hue-entertainment/" target="_blank" rel="noopener noreferrer">Hue Entertainment API</a>. Each entertainment area on a paired Hue bridge appears as a Music Assistant light player and reacts to whatever is playing when joined to a Sendspin player or group.

> [!CAUTION]
> This plugin is marked experimental. It has been tested on Hue Bridge V2 and Hue Bridge Pro, but functionality may change and bugs may occur.

## Features

- Sync Philips Hue lights to playing music with low latency using the Hue Entertainment API
- Three selectable effect modes: Spectrum, Bass Boost and Ambient
- Bass-driven beat detection with energy-adaptive color cycling and white strobe on peaks
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
- <b>Intensity.</b> Beat reactivity and flash intensity (0–100). Default `70`. Higher values produce more pronounced flashes on detected beats.
- <b>Color mode.</b> Selects the effect:
    - <b>Spectrum</b> — frequency bands are spread across the lights with a vibrant rotating palette. Channel assignments and colors rotate on detected beats. White strobes are triggered on high-energy peaks.
    - <b>Bass Boost</b> — all lights pulse together with bass energy in warm tones. Beats flash with cycling palette colors, with a white strobe on peaks.
    - <b>Ambient</b> — slow hue rotation with gentle energy modulation and a per-channel hue offset for depth. Best for relaxed listening.

## Known Issues / Notes

- Hue light players are virtual `LIGHT` players that use the Sendspin visualizer stream — they can only be joined to Sendspin players or groups
- Beat detection is driven by bass energy from the visualizer spectrum data — it works well for beat-heavy music but is less precise for acoustic or vocal-only tracks
- Entertainment areas are discovered when the plugin (re)loads — adding a new entertainment area in the Hue app requires reloading the plugin before it will appear as an MA player
- The Hue bridge only allows one entertainment area to stream at a time, so only one Hue light player per bridge can be active at any given moment
