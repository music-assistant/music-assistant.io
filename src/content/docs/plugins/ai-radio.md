---
title: AI Radio Plugin
description: Turn a playlist into an AI-hosted radio show, either as a generated playlist or as a live dynamic queue.
---

# AI Radio Plugin

AI Radio turns one of your playlists into a radio-style show with spoken host segments between tracks. The host can introduce songs, bridge from one track to the next, add occasional weather or news breaks, and save the finished program as a playlist or play it live through a Music Assistant player.

:::note
AI Radio is currently in beta. The show editor, prompt presets, generated output, and advanced station format may change between Music Assistant releases.
:::

## Features

- Create reusable **shows** from Music Assistant playlists
- Pick a bundled host style such as **Morning show**, **Minimal DJ**, **Music nerd**, or **Party host**
- Choose how often the host speaks with the talkativeness setting
- Generate spoken sections with an AI provider and synthesize them with a TTS provider
- Play a show live through a Music Assistant player
- Generate a completed show and save it as a Music Assistant playlist
- Customize each segment's prompt, timing, web-search behavior, and character limit
- Use placeholders such as `<prev_songinfo>`, `<next_songinfo>`, `<timestamp>`, and `<weather_hourly>`
- Add optional weather updates through Open-Meteo when a weather location is configured
- Duplicate existing shows to create variations without starting from scratch

## Requirements

- The **AI Radio** plugin must be enabled in **Settings → Plugins → Add a plugin**.
- At least one playlist with playable tracks.
- An **AI engine**, to write what the host says, and a **text-to-speech engine**, to speak it. Both come from other plugins. See [AI and text-to-speech engines](/ha-plugin/#ai-and-text-to-speech-engines).
- For live playback, an enabled and available Music Assistant player.

> [!IMPORTANT]
> Both engines have to exist **before** you add AI Radio. Its setup will not let you continue without them, and will tell you to set up a plugin that provides the missing one first.

:::note
AI Radio generates new speech each time a show is started. The exact wording can vary even when the same show and playlist are used.
:::

## Installation

### Configure the Plugin

1. Go to **Settings → Plugins → Add a plugin**.
2. Add **AI Radio**.
3. Setup opens at a step called **Choose the AI Radio engines**. Pick the AI engine that will write the host's lines and the text-to-speech engine that will voice them.
4. Configure the optional plugin settings:

| Setting | Description |
|---|---|
| **Timezone** | Used for timestamp placeholders and local date formatting. Defaults to the server timezone. |
| **Weather city** | City used when a show segment contains weather placeholders. |
| **Weather country** | Country used together with the city for weather lookup. |

Weather is optional. Shows without weather segments do not need a weather location.

### Changing the AI or text-to-speech engine later

:::caution[The engine pickers are not in AI Radio's settings]
AI Radio stores its two engine choices with its setup rather than its settings. **Configure** shows only the timezone and weather options above.

To change either engine, choose **Reconfigure** from the AI Radio provider's menu. This reopens the **Choose the AI Radio engines** step with your current selections filled in, so you can change one and leave the other. Nothing else is affected and your shows are unchanged.
:::

## Creating a show

1. Open **AI Radio** from the Music Assistant sidebar.
2. Select **Create show**.
3. Choose a **Source playlist**.
4. Select a **Host style**.
5. Choose a **Talkativeness** level.
6. Give the show a name.
7. Select **Create** or **Create & play**.

The create dialog is meant to get a useful show running quickly. You can fine-tune the show later with **Customize**.

## Playing a show

Each show card has two main run options.

| Action | What it does |
|---|---|
| **Play** | Starts a live AI Radio run on the selected player. Music Assistant prepares the first batch of tracks and host segments, queues them, then continues preparing more while playback is running. |
| **Generate and save as playlist** | Builds the complete show in the background and saves it as a Music Assistant playlist. Use this when you want a reusable generated episode instead of live generation. |

Only one AI Radio run can be active at a time. If another show is already on air, Music Assistant asks whether to stop it and switch to the selected show.

## Customizing a show

Select **Customize** on a show card to edit its basics, segments, and advanced settings.

### Basics

| Field | Description |
|---|---|
| **Show name** | Display name for the show. |
| **Source playlist** | Playlist used as the music source. |
| **Default playback device** | Player used by the **Play** action. This can be left empty and selected later. |

### Segments

A segment is one spoken part of the show. A segment has:

| Field | Description |
|---|---|
| **Segment name** | Name shown in the editor and in generated playlist entries. |
| **Prompt** | Instructions sent to the AI for this spoken section. |
| **Web Search Mode** | Whether the AI may use web search for this segment. |
| **Character Limit** | Soft maximum length for the generated text before TTS. |
| **Plays** | When and how often the segment should be inserted. |

The simple editor supports these timing choices:

- **Once at start**
- **Once at end**
- **Every song**
- **Every ~N songs**
- **Every ~N min**
- **Occasionally**, with a percentage

If more than one between-song segment is due at the same point, AI Radio can draft those segments separately and merge them into one spoken host break. For example, a song transition and a weather segment can become one moderator line that knows both the next song and the weather.

### Web search modes

| Mode | Description |
|---|---|
| **disabled** | The AI should rely on the prompt and track metadata only. |
| **allow** | The AI may use web search if the AI provider supports it. |
| **force** | The segment requires web search. This is useful for current-news style segments. |

Use web search sparingly. It can improve current or factual segments, but it can also make generation slower and depends on the capabilities of the configured AI provider.

### Prompt placeholders

AI Radio replaces placeholders in prompts before sending them to the AI.

| Placeholder | Meaning |
|---|---|
| `<prev_songinfo>` | Artist/title information for the previous track, when available. |
| `<next_songinfo>` | Artist/title information for the next track, when available. |
| `<very_next_songinfo>` | Artist/title information for the track after the next track, when available. |
| `<timestamp>` | Current local time based on the AI Radio timezone setting. |
| `<weather_hourly>` | Current and near-future weather summary, when weather is configured. |
| `<weather_daily>` | Daily weather summary, when weather is configured. |

Example prompt:

```text
The previous track was <prev_songinfo> and the next track is <next_songinfo>.
Create a natural radio transition that connects both songs and keeps it concise.
```

## Advanced settings

| Setting | Default | Description |
|---|---:|---|
| **Host and Program Instructions** | Preset-specific | Overall host personality and writing style. This is sent with every generated segment. |
| **Source Playtime Cap (minutes)** | 0 | Limits the total source music used for a run. Set to `0` for no limit. Tracks are sampled randomly until the cap is reached. |
| **Dynamic Batch Size** | 3 | Number of source tracks prepared at a time in live mode. Larger batches reduce mid-show waiting but can increase startup time and token usage. |
| **Clear Queue on Dynamic Start** | On | Clears the selected player's queue before live playback. Turn it off to append the show after the current queue instead. |

## Weather segments

AI Radio uses Open-Meteo for weather placeholders. To use weather:

1. Configure **Weather city** and **Weather country** in the AI Radio plugin settings.
2. Add or keep a segment whose prompt contains `<weather_hourly>` or `<weather_daily>`.
3. Use a timing rule such as **Every ~60 min** or **Occasionally** so weather does not appear too often.

If weather lookup fails or the location is missing, AI Radio skips weather placeholder content rather than stopping the whole show.

## Generated playlists

When you select **Generate and save as playlist**, Music Assistant creates a new playlist containing:

- The generated TTS host sections
- The selected source tracks
- Stable metadata for the AI Radio sections

Generated playlists are useful for testing a show format, saving an episode, or playing the result later without waiting for live generation.

## Live mode

When you select **Play**, AI Radio runs in dynamic mode:

1. It samples source tracks from the selected playlist.
2. It plans the first batch of host segments.
3. It generates AI text and TTS audio.
4. It queues the generated host audio and music.
5. While playback continues, it prepares later batches before the queue reaches them.

If **Clear Queue on Dynamic Start** is enabled, the selected queue is replaced. If disabled, AI Radio appends the show after the current queue and waits for the correct playback position before adding later batches.

## Tips

- Start with **Minimal DJ** if you want fewer interruptions.
- Use **Music nerd** with web search allowed for artist facts and context.
- Use **Morning show** if you want weather and news-style breaks.
- Keep segment prompts short and direct. The best prompts describe the exact role of the segment and mention that the text is for spoken delivery.
- Use character limits to keep TTS sections from becoming too long.
- Generate a playlist first when experimenting with new prompts. It is easier to review the complete result before using live playback.

## Troubleshooting

### Setup will not let me past the engines step

AI Radio needs both an AI engine and a text-to-speech engine, and neither can be created from here. Set up a plugin that provides the missing one first, as described under [AI and text-to-speech engines](/ha-plugin/#ai-and-text-to-speech-engines), then add AI Radio again.

### I cannot find the engine pickers in the plugin's settings

They are not there. Use **Reconfigure** on the AI Radio provider's menu instead, as described under [changing the AI or text-to-speech engine later](#changing-the-ai-or-text-to-speech-engine-later).

### AI Radio says an AI or text-to-speech engine is not available

The engine it was using has gone. This usually means the entity behind it was removed or renamed in Home Assistant, or the plugin providing it is no longer loaded. Music Assistant will not quietly move you to a different engine, so put the original back or choose another one through **Reconfigure**.

### No speech is generated

Check the text-to-speech engine works at its source. With Home Assistant, test the entity there first, then check that the [Home Assistant plugin](/ha-plugin/) is still connected in Music Assistant.

### Live playback will not start

Make sure the selected player is enabled, available, and not hidden. If the show has no default playback device, select one before pressing **Play**.

### Weather segments are empty or skipped

Confirm that **Weather city** and **Weather country** are configured in the AI Radio plugin settings. Weather is currently provided by Open-Meteo.

### A customized show warns that it will be simplified on save

Some advanced station configurations cannot be represented perfectly in the simple show editor. Saving rewrites the show into the simplified segment format used by the UI.


</details>
