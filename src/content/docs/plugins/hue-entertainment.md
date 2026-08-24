---
title: Hue Lights Sync Plugin
---

# Hue Lights Sync <img src="/assets/icons/hue-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

This plugin makes your <a href="https://www.philips-hue.com/" target="_blank" rel="noopener noreferrer">Philips Hue</a> lights react to whatever is playing, changing colour in time with the music. Each entertainment area you have set up on your Hue bridge turns up in Music Assistant as if it were a speaker, and you group it with the player the music is coming from.

> [!CAUTION]
> This plugin is marked experimental. It has been tested on Hue Bridge V2 and Hue Bridge Pro, but functionality may change and bugs may occur.

## Features

- Lights change with the music, quickly enough to keep up with it
- Four styles to choose from: Smooth, Ambient, Flashing and Energetic
- Colours change on the beat where Music Assistant can work out where the beat is, and follow the loud moments in the music where it cannot
- Hue bridges on your network are found on their own
- More than one bridge is supported. Add the plugin again for each
- Every entertainment area on a bridge becomes its own light player in Music Assistant

## Configuration

- The lights can only follow a [Sendspin](/player-support/sendspin/) player, so you need at least one of those. Sendspin is built into Music Assistant, and the web player in your browser is one
- Create an Entertainment Area in the Philips Hue app (`SETTINGS >> ENTERTAINMENT AREAS`) before adding the plugin
- In Music Assistant, go to **Settings → Plugins → Add a plugin** and select **Hue Lights Sync**
- Enter the IP address of the Hue bridge, or leave it for Music Assistant to find
- Press the physical link button on the Hue bridge, then click `Pair` in the MA UI
- Click SAVE to complete configuration. Each entertainment area on the bridge will appear as a Light player
- Join a Hue light player to any active Sendspin player or group and the lights will start reacting to the music

### Settings

- <b>Brightness.</b> Overall light brightness (0-100). Default `100`.
- <b>Mode.</b> Selects the visualization style:
    - <b>Smooth</b> (default) - gentle spectrum-driven brightness with a slowly drifting palette that cycles colour on the beat.
    - <b>Ambient</b> - colour cycling on the beat with saturation reacting to the bass, no brightness modulation. Best for relaxed listening.
    - <b>Flashing</b> - strong brightness pulse on every beat, stronger on downbeats.
    - <b>Energetic</b> - large brightness swings on the beat plus fast palette and hue rotation.
- <b>Light latency (ms).</b> Milliseconds to render light updates ahead of the audio, to offset the Hue bridge and network delay (0-3000). Default `20`. Increase if the lights lag the music, decrease if they run ahead of it.

> [!CAUTION]
> The **Flashing** and **Energetic** modes produce rapid flashing. Avoid them if you or anyone present is sensitive to flashing lights.

## Known Issues / Notes

- Hue light players are virtual `LIGHT` players that use the Sendspin visualizer stream; they can only be joined to Sendspin players or groups
- Beat effects use the track's beat analysis from the [Smart Fades](/audio-analysis/smart-fades) provider when available, otherwise the lights fall back to peak and onset detection. Beats may be unavailable when the analysis hasn't been computed yet, or on lower-powered devices that can't compute beats in time
- Entertainment areas are discovered when the plugin (re)loads, so adding a new entertainment area in the Hue app requires reloading the plugin before it will appear as an MA player
- The Hue bridge only allows one entertainment area to stream at a time, so only one Hue light player per bridge can be active at any given moment
