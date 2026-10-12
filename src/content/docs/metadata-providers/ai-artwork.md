---
title: AI Artwork
description: Generates playlist covers and short descriptions with an AI image and text engine, in one of several styles or with your own prompt.
---

# AI Artwork <img src="/assets/icons/ai-artwork-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant can give your playlists a generated cover and a short description, using an AI engine you already have connected. Contributed and maintained by <a href="https://github.com/ryanmac8" target="_blank" rel="noopener noreferrer">ryanmac8</a>

Covers are drawn by an [image engine](#requirements) and descriptions are written by an [AI engine](#requirements).

## Features

- A cover for each playlist, in one of several styles or from your own prompt
- Covers that reflect what the playlist is about: the seeds, era, artists and genres of a smart playlist, or the most played artists and genres of a regular one
- A short description for each playlist, inspired by its music and by what you play most
- A preview in the settings, to try styles on one of your playlists before anything changes
- Your own artwork is left alone unless you choose otherwise
- A limit on how many covers and descriptions are made per hour, to keep the cost of the AI service under control

## Styles

**Music Assistant** (default): a vibrant gradient in colors that match the playlist's mood, with a large white line-art illustration of its theme and a bold title.

![Music Assistant style](/assets/screenshots/ai_artwork/music_assistant.jpg)

**Neon**: the playlist's scene drawn in glowing neon lines on a dark background.

![Neon style](/assets/screenshots/ai_artwork/neon.jpg)

**Spotify**: one striking full-bleed image with a vivid color wash and a large, bold title.

![Spotify style](/assets/screenshots/ai_artwork/spotify.jpg)

**Apple Music**: a soft, blurred, vivid gradient with a small white title in the bottom-left corner.

![Apple Music style](/assets/screenshots/ai_artwork/apple_music.jpg)

**Risograph**: a two-color screen print illustration on off-white paper, with halftone dots and a chunky printed title.

![Risograph style](/assets/screenshots/ai_artwork/risograph.jpg)

**Gouache**: a warm, painted magazine-style illustration of the playlist's scene.

![Gouache style](/assets/screenshots/ai_artwork/gouache.jpg)

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

## Requirements

You need at least one image engine before you add the provider, and an AI engine as well for the descriptions.

- An **image engine** draws the covers. It is either a Home Assistant AI Task entity that can generate images, or an image model added to the [OpenAI Compatible plugin](/plugins/openai_compatible/)
- An **AI engine** writes the descriptions. Any AI engine will do

See [AI and text-to-speech engines](/ha-plugin/#ai-and-text-to-speech-engines) for how engines work.

## Configuration

Add the provider in **Settings → Metadata providers**.

## Settings

### Cover artwork

- **Image engine**: the engine that draws the covers
- **Style**: the look of the covers. See [Styles](#styles)
- **Custom prompt**: your own prompt, used when the style is **Custom**
- **Let Music Assistant add the playlist name** (default: off, advanced): when off, the image engine designs the playlist name into the picture, which looks the most natural. Some engines misspell it. When on, the engine makes the picture without any text and Music Assistant prints the name on top, so it is always spelled correctly

### Preview

You can preview what one of your playlists looks like before you change anything. Nothing is saved, and neither your settings nor the playlist change.

- **Preview with playlist**: the playlist to preview
- **Styles to preview**: the styles to try, every style except Custom by default. Each style is one image from your image engine
- **Custom prompt to preview**: the prompt to try when **Custom** is one of the styles to preview

Press **Generate preview** to see a cover for each style, together with the description the text engine would write.

### Playlists

- **Playlists** (default: smart playlists): which playlists get a cover. Either your smart playlists plus the ones you pick, or all of them
- **Also generate covers for**: regular playlists that get a cover as well
- **Keep existing artwork** (default: on): leaves playlists alone that already have a cover of their own, such as the artwork from a streaming service or an image you added. The automatic collage never counts as a cover of its own

### Descriptions

- **Write descriptions** (default: on): gives each playlist a short description, written once and put back if something else replaces it
- **Text engine**: the AI engine that writes the descriptions
- **Let the text engine write the visual concept** (default: off, advanced): the text engine first describes a scene for the playlist, and the image engine draws that. This costs one extra AI request per cover

### Usage

- **Maximum generations per hour** (default: 30, advanced): how many covers, and separately how many descriptions, are made per hour. The rest follow in the next hour
- **Regenerate covers and descriptions** (advanced): makes new covers and descriptions for all playlists. The current ones stay until their replacement is ready

## Known Issues / Notes

- Covers and descriptions are made in the background: a couple of minutes after the provider starts or its settings are saved, and then every hour. With many playlists, the first round takes a while because of the hourly limit
- A cover is only made again when the playlist name, the style, the prompt or the image engine changes. Renaming a playlist gives it a new cover
- Every cover and description is a request to your AI service, which may cost money. The hourly limit and **Keep existing artwork** help keep that down
