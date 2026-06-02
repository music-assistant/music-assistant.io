---
title: Sonic Similarity
description: Local similarity search powering library-wide Similar Tracks, radio mode, an "Inspired by recently played" discover row, and natural-language search.
---

# Sonic Similarity

The **Sonic Similarity** plugin turns the audio fingerprints already produced by the [Sonic Analysis](/audio-analysis/sonic-analysis) provider into useful discovery surfaces across your library — all running locally on the server.

What it powers:

- **Library-wide Similar Tracks** — works even on filesystem libraries and on providers that do not supply their own similar-tracks feed
- **Radio mode** — the same data is used when Music Assistant needs to extend a queue with similar tracks and no streaming-side radio is available
- **An "Inspired by recently played" row** on the discover page
- **Natural-language search** — optionally lets you search for tracks by typing things like *"super dancy disco"* or *"calm acoustic morning"*

No audio is sent anywhere; all similarity and search runs against local indexes stored under the Music Assistant data directory.

:::caution[Experimental]
This plugin is in early development. The configuration options and behaviour may change before the final release.
:::

## Requirements

The plugin builds on top of the [Sonic Analysis](/audio-analysis/sonic-analysis) provider and the [Smart Fades](/audio-analysis/smart-fades) provider, both of which must be configured and have analysed at least a few tracks. Similar Tracks results and the discover row appear once Sonic Similarity has built its index from the available analyses.

## What you'll see in Music Assistant

Once the plugin has built its index, a **Similar tracks** section appears on every track's details page:

![Similar tracks on a track details page](/assets/screenshots/sonic-similarity/track-details-similar.png)

And — unless it is disabled in the settings — an **Inspired by recently played** row appears on the discover page, seeded by the tracks you have played most recently:

![Inspired by recently played row on the discover page](/assets/screenshots/sonic-similarity/discover-inspired-by.png)

## How it works

Three engines run inside the plugin. The 18-dim engine is always on; the CLAP and free-text engines are independently toggleable from the configuration page.

### 18-dim engine (always on)

Builds a small per-track signature from the measurable features that Sonic Analysis produces — BPM, energy, loudness, brightness, key/mode, dynamics, and so on — and ranks neighbours using one of the configurable weight presets. The name reflects how many features feed into each signature. Cheap to build, cheap to query, and fits comfortably in memory for libraries of tens of thousands of tracks.

This engine powers the Similar Tracks menu, radio mode, and the discover row by default.

### CLAP semantic similarity (opt-in)

Builds a second search index over the audio fingerprints that Sonic Analysis already stores for every track. Track-to-track similarity here is closer to *"this feels like that"* than to *"these have similar BPM"* — useful when a song's mood or texture matters more than its measurable properties.

No extra downloads are required; the fingerprints are already on disk from Sonic Analysis.

### Free-text search (opt-in)

Turns a natural-language phrase like *"super dancy disco track"* into the same kind of fingerprint used for tracks, then returns the tracks whose sound is closest. Enabling this implicitly turns on the CLAP index above, since both features share the same model.

The first time free-text search is loaded, about 500 MB of language model files download to the server. 

![Free-text search returning matching tracks for "bright female vocal performance"](/assets/screenshots/sonic-similarity/free-text-search.png)

## Configuration

The plugin appears in **Settings → Providers → Add Provider → Plugins** once installed. All settings live on a single configuration page made up of three panels: **Generic**, **Status**, and **Discover**.

### Generic

![Sonic Similarity Generic panel](/assets/screenshots/sonic-similarity/setup-screen-generic.png)

| Setting | Description |
|---|---|
| **Enable CLAP embedding index** | Builds a second on-disk index over the CLAP audio fingerprints already produced by Sonic Analysis. Off by default. |
| **Similar Tracks engine** | Which engine powers library-wide Similar Tracks. The **18-dim weighted** option ranks by measurable features (BPM, energy, loudness, key, etc.); the **CLAP 1024-dim semantic** option ranks by the audio fingerprint and returns no results for tracks that do not yet have one. Only appears when the CLAP index is enabled. Defaults to 18-dim. |
| **Similar Tracks preset** | Weight preset applied when the 18-dim engine is in use. See [Similarity presets](#similarity-presets) below for what each preset favours. Only appears when the 18-dim engine is selected. Defaults to Balanced. |
| **Similar Tracks diversity** | A value from 0 to 1. `0.0` keeps results closest to the seed; `1.0` maximises variety. Only appears when the 18-dim engine is selected. Defaults to `0.0`. |
| **Enable free-text search** | Enables natural-language track search. The first use lazily downloads about 500 MB of language model files to the server. Turning this on implicitly enables the CLAP index above, since both features share the same model. Off by default. |

Toggling **Enable CLAP embedding index** or **Enable free-text search** requires the plugin to reload before the new feature set takes effect.

### Status

The Status panel shows the current health of each engine and gives you a manual rebuild button. Both engines build their indexes in the background — refresh the page after starting a rebuild to see updated counts.

![Sonic Similarity Status panel](/assets/screenshots/sonic-similarity/setup-screen-status.png)

| Element | Meaning |
|---|---|
| **18-dim engine status row** | Shows how many tracks are indexed, how many signatures are cached, whether the engine is ready to serve queries (shown in the UI as *corpus stats ready*), and — when available — how its coverage compares to Sonic Analysis' analysed / pending counts. If a background rebuild fails, the error message is appended to this line. |
| **Rebuild 18-dim index** | Re-scans all stored signatures and rebuilds the 18-dim search index. Runs in the background. |
| **CLAP engine status row** | Shows the number of CLAP fingerprints indexed and the current coverage. Only present when the CLAP engine is enabled. |
| **Rebuild CLAP index** | Incrementally adds any new fingerprints to the CLAP index. Runs in the background. Only present when the CLAP engine is enabled. |
| **Text encoder status row** | Shows whether the text encoder is loaded (*warm*) or *cold* — i.e. whether the language model files will be downloaded on the next query. Only present when free-text search is enabled. |

### Discover

![Discover row settings: enable toggle, preset and diversity](/assets/screenshots/sonic-similarity/setup-discover.png)

| Setting | Description |
|---|---|
| **Show 'Inspired by recently played' on the discover page** | Adds a discover-page row seeded by your recently-played tracks. On by default. Disable this to suppress the row without uninstalling the plugin. |
| **Discover row preset** | Similarity weight preset used to rank candidates for the row. See [Similarity presets](#similarity-presets) below for what each preset favours. |
| **Discover row diversity** | A value from 0 to 1. `0.0` keeps results closest to the seeds; `1.0` maximises variety — some results may be less similar individually, but the row as a whole will be more varied. |

## Similarity presets

The 18-dim engine groups its features and applies a per-group weight when ranking. The five built-in presets bias those weights toward different listening intents:

| Preset | What it favours |
|---|---|
| **Balanced** | All groups weighted equally. A reasonable default for "more like this". |
| **Vibe** | Mood, timbre and dynamics dominate; rhythm and key matter less. |
| **Party** | Rhythm, regularity and energy dominate; mood and key matter less. |
| **Genre + Era** | Key and harmonic features, plus genre and era bonuses, dominate. Stays close to the seed's genre and decade. |
| **Discover (novelty-leaning)** | Timbre and mood matter most; genre and era are deliberately downweighted so the row is allowed to drift outside the seed's neighbourhood. |

The **Similar Tracks** action (configured in the Generic panel) and the **Inspired by recently played** discover row (configured in the Discover panel) select a preset and diversity independently, so they can lean different ways — for instance, Similar Tracks can stay close to the seed while the discover row drifts toward novelty.

## Known Issues / Notes

- The search indexes live under the Music Assistant data directory as derived caches. They are safe to delete — the next plugin start (or a manual rebuild) will recreate them from the existing track analyses.
- Toggling the CLAP or free-text search options or changing the options for the Discovery Page requires the plugin to reload before the new feature set takes effect.

## Credits

- [Microsoft CLAP](https://github.com/microsoft/CLAP) — the joint audio + text model behind the optional CLAP similarity and free-text search engines.
- [unum-cloud/usearch](https://github.com/unum-cloud/usearch) — the fast similarity search library used by both engines.
