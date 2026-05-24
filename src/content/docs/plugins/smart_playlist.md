---
title: Smart Playlists
description: Create dynamic or fixed playlists based on rules like genres, artists, albums, favorites and similar tracks.
---

import { Aside } from '@astrojs/starlight/components';

# Smart Playlists

The Smart Playlists plugin lets you create rule-based playlists from your Music Assistant library. Playlists can be **Dynamic** — tracks are re-evaluated fresh every time you play them — or **Fixed (one-time)**, generating a regular editable playlist once from your current library.

<Aside type="caution" title="Experimental">
This plugin is currently marked as **experimental**. Behaviour may change before the final release.
</Aside>

## Installation

Enable the **Smart Playlists** plugin in **Settings → Providers → Add Provider → Plugins**. No additional configuration is required.

![Smart Playlists plugin entry](/assets/screenshots/smart_playlist/add_plugin.png)

## Creating a Smart Playlist

In the Playlists view, select the **⊕** menu in the top right and choose **Create Smart Playlist**.

![Create Smart Playlist menu](/assets/screenshots/smart_playlist/menu_entry.png)

![Create Smart Playlist dialog](/assets/screenshots/smart_playlist/create_smart_playlist.png)

Enter a name and choose a mode:

- **Dynamic** — Rules are re-evaluated every time the playlist is played. The playlist always reflects your current library.
- **Fixed (one-time)** — Rules are evaluated once at creation time. The result is saved as a normal editable playlist. When **Fixed** is selected, a **Number of tracks** stepper appears to set the exact track count.

![Fixed (one-time) playlist dialog](/assets/screenshots/smart_playlist/create_fixed_playlist.png)

The dialog is divided into four collapsible sections.

## Source

![Source section expanded](/assets/screenshots/smart_playlist/show_source.png)

| Option | Description |
|--------|-------------|
| **Genres** | Pick one or more genres from your library. Only tracks tagged with those genres are included. |
| **Exclude genres** | Pick genres to exclude. Tracks tagged with any of these genres are removed from the results. Mutually exclusive with the include list — a genre can only be in one. |
| **Similar to track** | Pick a track. The playlist is filled with library tracks that are similar to it. Requires a provider that supports similar-track recommendations (e.g. Apple Music). |
| **Similar to artist** | Pick an artist. The playlist is filled with library tracks that are similar to that artist. Requires a provider that supports similar-artist recommendations. |

**Note:** Only one of *Similar to track* or *Similar to artist* can be active at the same time. Both fields require a music provider that supports similar-track or similar-artist recommendations; if no such provider is configured, the fields are disabled.

## Artists & Albums

![Artists & Albums section expanded](/assets/screenshots/smart_playlist/show_artists_albums.png)

| Option | Description |
|--------|-------------|
| **Artists** | Limit tracks to those by the selected artists. |
| **Albums** | Limit tracks to those from the selected albums. |
| **Exclude artists** | Remove all tracks by the selected artists from the results. |
| **Exclude albums** | Remove all tracks from the selected albums from the results. |

## Filters

![Filters section expanded](/assets/screenshots/smart_playlist/show_filters.png)

| Option | Description |
|--------|-------------|
| **Favorites only** | When enabled, only tracks marked as favorites are included. |
| **Minimum popularity** | Slider from 0–100. Only tracks with a popularity score at or above the threshold are included. Requires a provider that supplies popularity data (e.g. Spotify, Tidal). Set to *Any* to disable. |
| **Year range** | Enter a *From year* and/or *To year* to limit tracks by release year. |

## Advanced

![Advanced section expanded](/assets/screenshots/smart_playlist/show_advanced.png)

| Option | Description |
|--------|-------------|
| **No repeat within** | Slider in hours (1–8760). Tracks played within this time window are excluded from the next evaluation, preventing repeats. Set to *Off* to disable. Best-effort: if the filtered library is too small to fill the playlist without repeats, the least-recently-played tracks are used to top it up; if all tracks were played recently, the dedup constraint is dropped entirely so the playlist never goes empty. |
| **Rule combination** | **Match ALL rules (AND)** — a track must satisfy every active rule. **Match ANY rule (OR)** — a track only needs to satisfy one rule. |

## Track count indicator

While configuring rules, the dialog shows the approximate number of matching tracks at the bottom (e.g. *~2501 Titel*). This updates live as you change the rules so you can tune the playlist before saving.

![Track count indicator](/assets/screenshots/smart_playlist/track_count.png)

## Notes

- Smart playlists only exist as long as the Smart Playlists plugin is installed. Removing the plugin also removes all associated smart playlists from the MA library.
- Renaming a smart playlist in the MA library is automatically reflected in the stored rules.
- *Similar to track* and *Similar to artist* are mutually exclusive — only one can be set per playlist.
- The **Minimum popularity** filter only works if at least one of your music providers supplies popularity metadata.
