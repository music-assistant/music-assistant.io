---
title: Playlist Metadata Provider
description: Features and configuration for the Playlist Metadata Provider
---

# Playlist Metadata Provider

Music Assistant includes a built-in metadata provider that generates custom artwork and metadata for library playlists. This provider creates unique, visually appealing playlist covers using images from the tracks' artists and albums, with support for multiple configurable layout templates. It can also generate covers and short descriptions with AI, and automatically detect and assign genres based on the playlist's track content. This provider is built-in and cannot be disabled. It runs automatically during the metadata refresh cycle for playlists.

## Features

### Playlist Artwork

The Playlist Metadata Provider generates artwork for library playlists using seven different collage templates, or an [AI generated cover](#ai-generated-covers). Each collage template uses images from the playlist's content to create a unique visual representation:

#### Available Templates

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

#### How Artwork Generation Works

When a playlist is refreshed, this provider:

1. **For Smart Playlists**: Uses images from the playlist rules (artist/album seeds, genre filters) if available
2. **Otherwise**: Analyzes tracks to identify the most prominent artists and albums
3. Generates artwork using the selected template

Image cleanup runs automatically every 2 hours.

### AI Generated Covers

With the **AI generated** template, playlists get a cover drawn by an AI image engine you already have connected, in one of several styles or from your own prompt. AI generated covers were contributed by <a href="https://github.com/ryanmac8" target="_blank" rel="noopener noreferrer">ryanmac8</a>.

- Covers reflect what the playlist is about: the seeds, era, artists and genres of a smart playlist, or the most played artists and genres of a regular one
- By default only smart playlists get one, plus any regular playlists you pick. You can also include all playlists
- The other playlists get a collage made with the **Fallback template**. So does any playlist until its cover is ready, for example while the hourly limit is reached or the image engine is unavailable
- A cover a playlist has of its own, such as the artwork from a streaming service or an image you added, is never replaced
- A preview in the settings lets you try styles on one of your playlists before anything changes
- A limit on how many covers are made per hour keeps the cost of the AI service under control

#### Styles

**Music Assistant** (default): a vibrant gradient in colors that match the playlist's mood, with a large white line-art illustration of its theme and a bold title.

![Music Assistant style](/assets/screenshots/playlist_metadata/ai_music_assistant.jpg)

**Neon**: the playlist's scene drawn in glowing neon lines on a dark background.

![Neon style](/assets/screenshots/playlist_metadata/ai_neon.jpg)

**Spotify**: one striking full-bleed image with a vivid color wash and a large, bold title.

![Spotify style](/assets/screenshots/playlist_metadata/ai_spotify.jpg)

**Apple Music**: a soft, blurred, vivid gradient with a small white title in the bottom-left corner.

![Apple Music style](/assets/screenshots/playlist_metadata/ai_apple_music.jpg)

**Risograph**: a two-color screen print illustration on off-white paper, with halftone dots and a chunky printed title.

![Risograph style](/assets/screenshots/playlist_metadata/ai_risograph.jpg)

**Gouache**: a warm, painted magazine-style illustration of the playlist's scene.

![Gouache style](/assets/screenshots/playlist_metadata/ai_gouache.jpg)

**Custom**: your own prompt. It can use these placeholders, which are filled in for each playlist:

| Placeholder | Filled in with |
|---|---|
| `{name}` or `{title}` | The playlist name |
| `{context}` | The seeds, era, artists and genres, written as sentences |
| `{concept}` | The visual concept |
| `{artists}` | The main artists |
| `{genres}` | The main genres |
| `{era}` | The era, such as `2000-2012` |

The same playlist will look different every time a cover is made, because the image engine invents a new picture each time. How good the covers are depends mostly on the image model you use.

#### Requirements

- An **image engine** draws the covers. It is either a Home Assistant AI Task entity that can generate images, or an image model added to the [OpenAI Compatible plugin](/plugins/openai_compatible/)
- An **AI engine** writes the [descriptions](#ai-descriptions) and, if you want, the visual concept of the covers. Any AI engine will do

See [AI and text-to-speech engines](/ha-plugin/#ai-and-text-to-speech-engines) for how engines work.

### AI Descriptions

When switched on, the playlists picked for AI get a short, Spotify-style description written by an AI engine, inspired by their music and by what you play most. This works with any artwork template. A description is written once per playlist and put back if something else replaces it, such as the Smart Playlists provider when you edit a playlist's rules.

### Genre Detection

When enabled, the provider automatically detects genres for playlists by analyzing the genre tags of all tracks in the playlist. This helps categorize and discover playlists based on musical style.

#### How Genre Detection Works

1. **Collects genres** from all tracks in the playlist
2. **Calculates percentages** based on how frequently each genre appears
3. **Filters genres** that meet the minimum threshold (default: 10% of tracks)
4. **Returns top genres** up to the maximum count (default: 3 genres)

For example, a 26-track playlist with 15 Rock tracks (57.7%), 5 Pop tracks (19.2%), and 3 Jazz tracks (11.5%) would be assigned genres: Rock, Pop, Jazz.

> [!NOTE]
> Genre detection requires tracks to have genre metadata. Tracks from streaming providers typically include genre information; for local files, ensure genre tags are populated.

## Configuration

### Settings

**Artwork**

- **Template** — Select which layout template to use for generating playlist artwork
  - Options: `album_grid` (default), `album_fan`, `album_grid_tilted`, `artist_mosaic`, `artist_grid`, `artist_radio`, `artist_banner`, or `ai_generated` for [AI generated covers](#ai-generated-covers)

- **Fallback template** (default: `album_grid`, shown with **AI generated**) — The collage for playlists that get no AI generated cover, and for any playlist until its generated cover is ready
- **Image engine** (shown with **AI generated**) — The engine that draws the covers
- **Style** (shown with **AI generated**) — The look of the covers. See [Styles](#styles)
- **Custom prompt** — Your own prompt, used when the style is **Custom**
- **Let Music Assistant add the playlist name** (default: off, advanced) — When off, the image engine designs the playlist name into the picture, which looks the most natural. Some engines misspell it. When on, the engine makes the picture without any text and Music Assistant prints the name on top, so it is always spelled correctly
  
- **Skip Provider Playlists** (default: enabled) — When enabled, skips artwork generation and genre detection for playlists that already have provider-supplied metadata (e.g., playlists synced from Spotify or Tidal). This preserves official artwork and genres from streaming services

**Genre Detection**

- **Enable Genre Detection** (default: disabled) — When enabled, automatically detects and assigns genres to playlists based on their track content

- **Genre Minimum Threshold** (default: 10%, range: 5-50%, advanced) — Minimum percentage of tracks that must share a genre for it to be included. For example, with a 10% threshold, a 20-track playlist needs at least 2 tracks of a genre for it to be assigned

- **Genre Maximum Count** (default: 3, range: 1-10, advanced) — Maximum number of genres to assign to each playlist. Only the most common genres (above the threshold) are kept

**AI Cover Preview**

You can preview what one of your playlists looks like before you change anything. Nothing is saved, and neither your settings nor the playlist change.

- **Preview playlist** — The playlist to preview
- **Styles to preview** — The styles to try, every style except Custom by default. Each style is one image from your image engine
- **Custom prompt to preview** — The prompt to try when **Custom** is one of the styles to preview

Press **Generate preview** to see a cover for each style, together with the description the text engine would write.

**AI Covers and Descriptions**

- **Write descriptions with AI** (default: off) — Gives the playlists for AI a short description. See [AI Descriptions](#ai-descriptions)
- **Playlists for AI** (default: smart playlists) — Which playlists get an AI generated cover and description. Either your smart playlists plus the ones you pick, or all of them
- **Also use AI for** — Regular playlists that get an AI generated cover and description as well
- **Text engine** — The AI engine that writes the descriptions and, when switched on, the visual concept of the covers
- **Let the text engine write the visual concept** (default: off, advanced) — The text engine first describes a scene for the playlist, and the image engine draws that. This costs one extra AI request per cover
- **Maximum generations per hour** (default: 30, advanced) — How many covers, and separately how many descriptions, are made per hour. The rest follow in the next hour
- **Regenerate covers and descriptions** (advanced) — Makes new AI covers and descriptions for all playlists. The current ones stay until their replacement is ready

> [!TIP]
> The advanced genre settings (threshold and maximum count) are hidden by default. Enable "Show advanced options" in the provider settings to adjust these values.

## Notes

- Artwork is generated automatically during playlist metadata refresh
- Smart Playlists with artist or album seed filters will use those images directly for more relevant artwork
- Artist templates work best with diverse-artist playlists; album templates work better for compilation-style playlists
- AI generated covers and descriptions are made in the background: a couple of minutes after Music Assistant starts or the settings are saved, and then every hour. With many playlists, the first round takes a while because of the hourly limit
- An AI generated cover is only made again when the playlist name, the style, the prompt or the image engine changes. Renaming a playlist gives it a new cover
- Every AI generated cover and description is a request to your AI service, which may cost money. The hourly limit and the choice of playlists for AI help keep that down
