---
title: MilkDrop Visualizer
description: Render a MilkDrop (Butterchurn) music visualizer behind the now-playing views, reacting live to the audio.
pluginGroup: visuals
---

# MilkDrop Visualizer

This plugin renders a <a href="https://github.com/jberg/butterchurn" target="_blank" rel="noopener noreferrer">Butterchurn</a> (MilkDrop 2) music visualizer behind the now-playing views in the Music Assistant web interface, reacting live to whatever is playing. It replaces the usual gradient background with animated visuals driven by the actual audio.

> [!CAUTION]
> This plugin is marked experimental. Functionality may change and bugs may occur.

## Features

- A full-screen visualizer behind the fullscreen player, the now-playing dashboard, and the party screen
- The complete Butterchurn preset library, with favourites and random or fixed preset selection
- Optional preset switching on the beat, using Music Assistant's beat analysis
- Per-user controls for render quality, opacity, blur and artwork colours
- Reacts to the audio of whichever player you are viewing, in time with playback

## Configuration

- The visualizer works with any player: it reads the waveform from the audio Music Assistant is already decoding for playback, whatever protocol the player renders over
- In Music Assistant, go to **Settings → Plugins → Add a plugin** and select **Milkdrop Visualizer**
- Once enabled, a `MilkDrop` entry appears in the sidebar leading to its settings page, and a droplet toggle appears in the fullscreen player menu
- Turn the visualizer on from the player menu (or the party screen), play something, and the visuals appear behind the now-playing view

### Visualizer settings

The `MilkDrop` page in the sidebar holds the visualizer settings. They are stored per user, so everyone tunes their own.

- <b>MilkDrop visualizer.</b> Shows the visualizer behind the fullscreen player. Each player can override this from its fullscreen menu. Off by default, unless you have Expert mode turned on.
- <b>Render quality.</b> Low / Medium / High / Native. Higher tiers render sharper visuals at more GPU and CPU cost. Use a lower tier on tablets and TVs. Default `High`.
- <b>Visualizer opacity.</b> From 10% to 100%. Lower values let the album colours show through. Above 50% the view switches to a dark look with light text. Default `40%`.
- <b>Visualizer blur.</b> From 0 to 30 px, for a calmer background. Default `0`, no blur.
- <b>Recolor everything to the artwork.</b> Remaps the whole picture into the current track's artwork colours while keeping the preset's own brightness, so motion and detail survive. From 0% (off) to 100%, in steps of 25. Default `75%`.
- <b>Color elements from the artwork.</b> Colours the preset's waveform and borders with the artwork palette. Only presets that draw those elements are affected. Many presets fade their waveform with the loudness of the music, and some only show it during loud passages, so this effect can come and go within a track. On by default.
- <b>Preset selection.</b> How the visualizer chooses a preset:
    - <b>Random from all presets</b> - picks from the whole library.
    - <b>Random from favourites</b> - picks only from presets you have starred.
    - <b>Fixed preset</b> - always shows the one you choose.
- <b>Switch preset on downbeat.</b> Automatically change preset on a downbeat, using Music Assistant's beat analysis. Takes precedence over a fixed preset.
- <b>Minimum time between switches.</b> Shown while switching on the downbeat is on. How long a preset stays on screen before a downbeat may switch it. From 5 to 120 seconds. Default `30` seconds.
- <b>Favorite presets.</b> The presets you have starred, where you can also remove them.

The two artwork options replace the colour tint setting of earlier versions. They are on for every user, including anyone who had turned the old setting off.

### Fullscreen player menu

The droplet entry in the fullscreen player menu has quick controls for the player you are viewing:

- A switch that turns the visualizer on or off for this player only
- Blur, opacity and recolour sliders, which change the same settings as the settings page
- While the visualizer is on, the preset currently showing, with a star to add it to your favourites, and a list to pick another preset

## Known Issues / Notes

- If the normal background still shows after enabling this plugin, your browser is likely too old to run the visualizer; try a current one. (You can check yours at <a href="https://get.webgl.org/webgl2/" target="_blank" rel="noopener noreferrer">get.webgl.org/webgl2</a>.)
- Google Cast receivers do not support this plugin, so casting a [dashboard](/dashboards/) to a Chromecast keeps the normal background. To run the visualizer on a TV, open a now-playing dashboard in the TV's own browser or a kiosk browser app
- Beat-driven preset switching uses the track's beat analysis from the [Smart Fades](/audio-analysis/smart-fades) provider when available; it may be unavailable until the analysis has been computed, or on lower-powered devices
- Audio that a provider streams directly to the device (an external source) is not decoded by Music Assistant, so the visualizer has nothing to react to while such a source plays
