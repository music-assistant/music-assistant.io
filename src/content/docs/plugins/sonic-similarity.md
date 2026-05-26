---
title: Sonic Similarity
description: Local similarity search powering library-wide Similar Tracks, radio mode, an "Inspired by recently played" discover row, and natural-language search.
---

# Sonic Similarity

The **Sonic Similarity** plugin turns the audio features already produced by the [Sonic Analysis](../audio-analysis/sonic-analysis) provider into useful discovery surfaces across your library, with everything running locally on the server.

What it powers:

- **Library-wide Similar Tracks** — works even on filesystem libraries and on providers that do not supply their own similar-tracks feed
- **Radio mode** — the same data is consumed when Music Assistant needs to extend a queue with similar tracks but no streaming-side radio is available
- **An "Inspired by recently played" row** on the discover page
- **Natural-language search** — optionally lets you search for tracks by typing things like *"super dancy disco"* or *"calm acoustic morning"*

No audio is sent anywhere; all similarity and search runs against indexes stored under the Music Assistant data directory.

:::caution[Experimental]
This plugin is in early development. The configuration options and behaviour may change before the final release.
:::

## Requirements

The plugin builds on top of the [Sonic Analysis](../audio-analysis/sonic-analysis) provider, which must be configured and have analysed at least a few tracks. The discover row and Similar Tracks results appear once Sonic Similarity finishes building its index from the available analyses.

## How it works

Three engines run inside the plugin, each independently toggleable from the configuration page.

### Weighted similarity (always on)

Builds a small per-track signature from the measurable features Sonic Analysis produces — BPM, energy, loudness, brightness, key/mode, dynamics, and so on — and ranks neighbours with a configurable weight preset. Cheap to build, cheap to query, fits comfortably in memory for libraries of tens of thousands of tracks.

This engine powers the Similar Tracks menu, radio mode, and the discover row by default.

### CLAP semantic similarity (opt-in)

Builds a second index over the 1024-dimensional CLAP audio embeddings that Sonic Analysis already stores for every track. Track-to-track similarity here is closer to "this *feels* like that" than to "these have similar BPM" — useful when a song's mood or texture matters more than its measurable properties.

No extra downloads are required; the embeddings are already on disk.

### Free-text search (opt-in)

Encodes a natural-language phrase ("super dancy disco track") through the CLAP text encoder and returns the tracks whose audio embedding is closest. Enabling this implicitly enables the CLAP index above, since the two share the same embedding space.

The first time free-text search is used, about 500 MB of GPT2 weights download into the local HuggingFace cache. The first query may take tens of seconds; subsequent queries are fast.

## Configuration

The plugin appears in **Settings → Providers → Add Provider → Plugins** once installed. All settings live on a single configuration page.

### General

| Setting | Description |
|---|---|
| **Analysis Provider** | Which audio analysis provider supplies the features that drive similarity. Defaults to `sonic_analysis`. Change this only if another audio analysis provider is installed and you want to source signatures from it instead. |

### Weighted similarity engine

This engine is always on; the configuration page shows its current health and a manual rebuild button.

| Element | Meaning |
|---|---|
| **Status row** | Shows tracks indexed, signatures cached, whether corpus statistics are ready, and (when available) the coverage percentage versus the upstream analysis provider's analysed / pending counts. If the last background rebuild failed, the error message is appended to this line. |
| **Rebuild index** | Re-scans all stored signatures and rebuilds the search index. Runs in the background; refresh the page to see updated counts. |

### CLAP engine

| Setting | Description |
|---|---|
| **Enable CLAP embedding index** | Builds a second on-disk index over the CLAP audio embeddings already produced by Sonic Analysis. Off by default. |
| **CLAP status row** | Shows the number of embeddings indexed and the current coverage when the engine is on. |
| **Rebuild CLAP index** | Incrementally adds any new embeddings to the index. Runs in the background. |

### Free-text search

| Setting | Description |
|---|---|
| **Enable free-text search** | Enables natural-language track search via the CLAP text encoder. First use lazily downloads about 500 MB of GPT2 weights into the local HuggingFace cache. Implicitly turns on the CLAP embedding index above. Off by default. |
| **Text encoder status row** | Shows whether the encoder is loaded (warm) or cold (will download on first query). |

### Discover row

| Setting | Description |
|---|---|
| **Show 'Inspired by recently played' on the discover page** | Adds a discover-page row seeded by your recently-played tracks. On by default. Disable this to suppress the row without uninstalling the plugin. |
| **Discover row preset** | Similarity weight preset used to rank candidates for the row. **Discover (novelty-leaning)** favours novelty (low genre/era weighting); **Balanced** is uniform; **Vibe** weights mood + timbre; **Party** weights rhythm + regularity; **Genre + Era** stays close to the seed's genre and decade. |
| **Discover row diversity** | 0.0 keeps results closest to the seeds; 1.0 maximises variety (some results may be less similar but more distinct from each other). |

## Similarity presets

The weighted-similarity engine groups its features and applies a per-group weight when ranking. The five built-in presets bias those weights toward different listening intents:

| Preset | What it favours |
|---|---|
| **Balanced** | All groups weighted equally. A reasonable default for "more like this". |
| **Vibe** | Mood, timbre and dynamics dominate; rhythm and key matter less. |
| **Party** | Rhythm, regularity and energy dominate; mood and key matter less. |
| **Genre + Era** | Tonal features plus genre and era bonuses dominate. Stays close to the seed's genre and decade. |
| **Discover (novelty-leaning)** | Timbre and mood matter most; genre and era are deliberately downweighted so the row is allowed to drift outside the seed's neighbourhood. |

The discover row's preset is configurable independently of the preset used by the Similar Tracks menu and radio mode.

## Known Issues / Notes

- The CLAP engine and free-text search require Sonic Analysis to have produced CLAP embeddings for the tracks in question. Older analyses from before CLAP was introduced will not appear in these indexes until re-analysed.
- First-time free-text search blocks for tens of seconds while ~500 MB of GPT2 weights download. Subsequent queries are fast.
- Index files live under the Music Assistant data directory and are derived caches. They can be safely deleted; the next plugin start (or manual rebuild) will recreate them from the underlying analysis rows.
- Toggling the CLAP or free-text search options requires a plugin reload to take effect, since the supported-feature set is determined at provider setup time.

## Credits

- [Microsoft CLAP](https://github.com/microsoft/CLAP) — joint audio/text embedding model used by the optional CLAP and free-text search engines.
- [unum-cloud/usearch](https://github.com/unum-cloud/usearch) — HNSW similarity index backing both engines.
