---
title: Playlist Metadata Provider
description: Features and configuration for the Playlist Metadata Provider
---

# Playlist Metadata Provider

Music Assistant includes a built-in metadata provider that generates custom artwork for library playlists. This provider creates unique, visually appealing playlist covers using images from the tracks' artists and albums, with support for multiple configurable layout templates.

> [!NOTE]
> This provider is built-in and cannot be disabled. It runs automatically during the metadata refresh cycle for playlists.

## Features

The Playlist Metadata Provider generates artwork for your library playlists using seven different layout templates. Each template uses images from the playlist's content to create a unique visual representation:

### Available Templates

**Album-Based Templates**

- **Album Grid** (default) — Classic album-cover grid layout, similar to Spotify's default playlist covers. Shows up to 4 album covers in a 2×2 grid

![Album Grid Example](/assets/screenshots/playlist_metadata/album_grid.png)

- **Album Fan** — Up to three album covers displayed as framed photo-print cards in a rotated, stacked arrangement (Apple Music collage style)

![Album Fan Example](/assets/screenshots/playlist_metadata/album_fan.png)

- **Album Grid Tilted** — Album covers in a grid with white gaps between tiles, with the entire composition rotated approximately 15° for a dynamic look (Apple Music tilted collage style)

![Album Grid Tilted Example](/assets/screenshots/playlist_metadata/album_grid_tilted.png)

**Artist-Based Templates**

- **Artist Mosaic** — Dominant artist image large in the center, with other artists displayed as smaller tiles around it

![Artist Mosaic Example](/assets/screenshots/playlist_metadata/artist_mosaic.png)

- **Artist Grid** — Equal-sized grid of unique artist images (up to 4)

![Artist Grid Example](/assets/screenshots/playlist_metadata/artist_grid.png)

- **Artist Radio** — Artist-focused layout with the main artist centered on a solid background, overlapping circles of secondary artists around the edges

![Artist Radio Example](/assets/screenshots/playlist_metadata/artist_radio.png)

- **Artist Banner** — Full-bleed artist image with playlist name as text overlay (Tidal / Apple Music Essentials style)

![Artist Banner Example](/assets/screenshots/playlist_metadata/artist_banner.png)

### How It Works

When the metadata controller refreshes a playlist, this provider:

1. **For Smart Playlists**: First attempts to collect images from the Smart Playlist rules (artist seeds, album seeds, genre filters). If the rules contain sufficient image data (at least 4 unique images), those are used directly
2. **Fallback**: If not a Smart Playlist, or if the rules don't provide enough images, the provider analyzes the playlist's tracks to identify the most prominent artists and albums based on track frequency
3. Fetches high-quality images for these artists/albums
4. Generates a custom cover image using the selected template
5. Stores the generated image and makes it available to the playlist

The provider automatically handles:
- Image caching and cleanup of stale images (runs every 2 hours)
- Fallback for playlists with insufficient artwork
- Support for library playlists, built-in playlists, and **Smart Playlists** (with intelligent rule-based image selection)

## Configuration

### Settings

- **Template** — Select which layout template to use for generating playlist artwork
  - Options: `album_grid` (default), `album_fan`, `album_grid_tilted`, `artist_mosaic`, `artist_grid`, `artist_radio`, `artist_banner`
  
- **Skip Provider Playlists** (default: enabled) — When enabled, skips artwork generation for playlists that already have provider-supplied images (e.g., playlists synced from Spotify or Tidal). This avoids overwriting official artwork from streaming services

## Known Issues / Notes

- The provider runs automatically during playlist metadata refresh — there is no manual refresh button
- Generated images are stored in the Music Assistant cache directory under `playlist_metadata_images/`
- Old playlist images are automatically cleaned up when a playlist is refreshed with new artwork, and orphaned files are removed every 2 hours
- If a playlist has very few tracks or tracks with missing artwork, the generated cover may be simple or use fallback patterns
- The provider generates artwork for **library playlists**, **built-in playlists**, and **Smart Playlists**. Provider playlists (e.g., from Spotify) are skipped by default to preserve official artwork (configurable via "Skip Provider Playlists" setting)
- Smart Playlists benefit from rule-based image selection: if your Smart Playlist uses artist or album seed filters, the provider will use those images directly instead of analyzing tracks, resulting in more relevant artwork
- Artist-based templates work best with playlists that have diverse artists; album-based templates work better for compilation-style playlists
