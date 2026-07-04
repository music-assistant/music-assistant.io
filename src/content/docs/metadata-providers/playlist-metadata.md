---
title: Playlist Metadata Provider
description: Features and configuration for the Playlist Metadata Provider
---

# Playlist Metadata Provider

Music Assistant includes a built-in metadata provider that generates custom artwork for library playlists. This provider creates unique, visually appealing playlist covers using images from the tracks' artists and albums, with support for multiple configurable layout templates.

> [!NOTE]
> This provider is built-in and cannot be disabled. It runs automatically during the metadata refresh cycle for playlists.

## Features

The Playlist Metadata Provider generates artwork for library playlists using seven different layout templates. Each template uses images from the playlist's content to create a unique visual representation.

### Available Templates

**Album-Based Templates**

- **Album Grid** (default) — Classic album-cover grid layout. Shows up to 4 album covers in a 2×2 grid

![Album Grid Example](/assets/screenshots/playlist_metadata/album_grid.png)

- **Album Fan** — Up to three album covers displayed as framed photo-print cards in a rotated, stacked arrangement

![Album Fan Example](/assets/screenshots/playlist_metadata/album_fan.png)

- **Album Grid Tilted** — Album covers in a grid with white gaps between tiles, with the entire composition rotated approximately 15° for a dynamic look

![Album Grid Tilted Example](/assets/screenshots/playlist_metadata/album_grid_tilted.png)

**Artist-Based Templates**

- **Artist Mosaic** — Dominant artist image large in the center, with other artists displayed as smaller tiles around it

![Artist Mosaic Example](/assets/screenshots/playlist_metadata/artist_mosaic.png)

- **Artist Grid** — Equal-sized grid of unique artist images (up to 4)

![Artist Grid Example](/assets/screenshots/playlist_metadata/artist_grid.png)

- **Artist Radio** — Artist-focused layout with the main artist centered on a solid background, overlapping circles of secondary artists around the edges

![Artist Radio Example](/assets/screenshots/playlist_metadata/artist_radio.png)

- **Artist Banner** — Full-bleed artist image with playlist name as text overlay

![Artist Banner Example](/assets/screenshots/playlist_metadata/artist_banner.png)

### How It Works

When a playlist is refreshed, this provider:

1. **For Smart Playlists**: Uses images from the playlist rules (artist/album seeds, genre filters) if available
2. **Otherwise**: Analyzes tracks to identify the most prominent artists and albums
3. Generates artwork using the selected template

Image cleanup runs automatically every 2 hours.

## Configuration

### Settings

- **Template** — Select which layout template to use for generating playlist artwork
  - Options: `album_grid` (default), `album_fan`, `album_grid_tilted`, `artist_mosaic`, `artist_grid`, `artist_radio`, `artist_banner`
  
- **Skip Provider Playlists** (default: enabled) — When enabled, skips artwork generation for playlists that already have provider-supplied images (e.g., playlists synced from Spotify or Tidal). This avoids overwriting official artwork from streaming services

## Notes

- Artwork is generated automatically during playlist metadata refresh
- Smart Playlists with artist or album seed filters will use those images directly for more relevant artwork
- Artist templates work best with diverse-artist playlists; album templates work better for compilation-style playlists
