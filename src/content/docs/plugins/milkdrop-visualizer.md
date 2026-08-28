---
title: MilkDrop Visualizer
description: Render a MilkDrop (Butterchurn) music visualizer behind the now-playing views, reacting live to the audio.
---

# MilkDrop Visualizer

This plugin renders a <a href="https://github.com/jberg/butterchurn" target="_blank" rel="noopener noreferrer">Butterchurn</a> (MilkDrop 2) music visualizer behind the now-playing views in the Music Assistant web interface, reacting live to whatever is playing. It replaces the usual gradient background with animated visuals driven by the actual audio.

> [!CAUTION]
> This plugin is marked experimental. Functionality may change and bugs may occur.

## Features

- A full-screen visualizer behind the fullscreen player, the now-playing dashboard, and the party screen
- The complete Butterchurn preset library, with favourites and random or fixed preset selection
- Optional preset switching on the beat, using Music Assistant's beat analysis
- Per-user controls for blur, opacity and render quality
- Reacts to the audio of whichever player you are viewing, in time with playback

## Configuration

- The visualizer works with any player: it reads the waveform from the audio Music Assistant is already decoding for playback, whatever protocol the player renders over
- In Music Assistant, go to **Settings → Plugins → Add a plugin** and select **Milkdrop Visualizer**
- Once enabled, a `MilkDrop` entry appears in the sidebar leading to its settings page, and a droplet toggle appears in the fullscreen player menu
- Turn the visualizer on from the player menu (or the party screen), play something, and the visuals appear behind the now-playing view

### Settings

- <b>Render quality.</b> Low / Medium / High / Native. Higher tiers render sharper visuals at more GPU and CPU cost. Use a lower tier on tablets and TVs. Default `High`.
- <b>Preset selection.</b> How the visualizer chooses a preset:
    - <b>Random from all presets</b> - picks from the whole library.
    - <b>Random from favourites</b> - picks only from presets you have starred.
    - <b>Fixed preset</b> - always shows the one you choose.
- <b>Switch preset on downbeat.</b> Automatically change preset on a downbeat, using Music Assistant's beat analysis. Takes precedence over a fixed preset.
- <b>Minimum time between switches.</b> How long a preset stays on screen before a downbeat may switch it.
- <b>Blur</b> and <b>opacity</b> are adjusted per user from the visualizer menu in the fullscreen player.
- <b>Colour tint.</b> The visuals are tinted toward the current track's artwork colour. This is on by default and can be turned off in the plugin's advanced configuration settings.

Favourite the preset currently showing with the star next to the preset picker in the fullscreen player.

## Known Issues / Notes

- If the normal background still shows after enabling this plugin, your browser is likely too old to run the visualizer; try a current one. (You can check yours at <a href="https://get.webgl.org/webgl2/" target="_blank" rel="noopener noreferrer">get.webgl.org/webgl2</a>.)
- Google Cast receivers do not support this plugin, so casting a dashboard to a Chromecast keeps the normal background. To run the visualizer on a TV, open a now-playing dashboard in the TV's own browser or a kiosk browser app
- Beat-driven preset switching uses the track's beat analysis from the [Smart Fades](/audio-analysis/smart-fades) provider when available; it may be unavailable until the analysis has been computed, or on lower-powered devices
- Audio that a provider streams directly to the device (an external source) is not decoded by Music Assistant, so the visualizer has nothing to react to while such a source plays
