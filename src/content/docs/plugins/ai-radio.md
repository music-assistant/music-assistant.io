---
title: AI Radio Plugin
description: Turn a playlist into an AI-hosted radio show, either as a generated playlist or as a live dynamic queue.
---

# AI Radio Plugin

AI Radio turns one of your playlists into a radio-style show with spoken host segments between tracks. The host can introduce songs, bridge from one track to the next, add occasional weather or news breaks, and save the finished program as a playlist or play it live through a Music Assistant player.

:::caution[Beta]
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

- The **AI Radio** plugin must be enabled in **Settings → Plugins → Add a Plugin**.
- At least one playlist with playable tracks.
- A configured provider that supports AI queries, such as the [Home Assistant plugin](/ha-plugin/) with LLM access.
- A configured provider that supports TTS, such as the [Home Assistant plugin](/ha-plugin/) with a working text-to-speech service.
- For live playback, an enabled and available Music Assistant player.

:::note
AI Radio generates new speech each time a show is started. The exact wording can vary even when the same show and playlist are used.
:::

## Installation

1. Go to **Settings → Plugins → Add a Plugin**.
2. Add **AI Radio**.
3. Configure the optional plugin settings:

| Setting | Description |
|---|---|
| **Timezone** | Used for timestamp placeholders and local date formatting. Defaults to the server timezone. |
| **Weather city** | City used when a show segment contains weather placeholders. |
| **Weather country** | Country used together with the city for weather lookup. |

Weather is optional. Shows without weather segments do not need a weather location.

## Setting up AI and TTS with Home Assistant

AI Radio does not contain its own LLM or TTS engine. It asks Music Assistant for providers that expose AI-query and text-to-speech features. The most common setup is to use the [Home Assistant plugin](/ha-plugin/) as the bridge to Home Assistant's Assist/LLM and TTS services.

Before configuring AI Radio:

1. Install the [Home Assistant integration](/integration/installation/) if your Music Assistant server is not already connected to Home Assistant.
2. Add or verify the [Home Assistant plugin](/ha-plugin/) in Music Assistant.
3. In Home Assistant, configure the LLM/conversation agent you want Music Assistant to use.
4. In Home Assistant, configure a TTS service and test that it can speak a short message.
5. In the Music Assistant Home Assistant plugin settings, select the **Text-to-Speech entity** and **AI Task entity** under **Features**.
6. Return to Music Assistant and open AI Radio. If Music Assistant can see an AI-query provider and a TTS provider, the AI Radio page becomes usable.

:::tip
If AI Radio reports that an AI provider or TTS provider is missing, test the Home Assistant plugin first. AI Radio only sees capabilities that the plugin exposes to Music Assistant.
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

### AI Radio says an AI provider is needed

Configure a plugin that supports AI queries. The [Home Assistant plugin](/ha-plugin/) can provide this when it has access to an LLM/conversation service.

### No speech is generated

Check that a TTS-capable provider is configured and working. AI Radio needs both AI text generation and TTS synthesis. With Home Assistant, test the TTS service there first, then verify that the [Home Assistant plugin](/ha-plugin/) is connected in Music Assistant.

### Live playback will not start

Make sure the selected player is enabled, available, and not hidden. If the show has no default playback device, select one before pressing **Play**.

### Weather segments are empty or skipped

Confirm that **Weather city** and **Weather country** are configured in the AI Radio plugin settings. Weather is currently provided by Open-Meteo.

### A customized show warns that it will be simplified on save

Some advanced station configurations cannot be represented perfectly in the simple show editor. Saving rewrites the show into the simplified segment format used by the UI.


## Advanced configuration

Use the AI Radio editor for normal shows. It already supports common timing options, multiple between-song segments, and automatic merging into one natural host break.

Manual JSON editing is only useful when you need behavior the UI cannot describe, such as:

- Customizing the merge prompt used to combine several drafts into one spoken segment
- Combining timing rules in one section, such as "25% chance, max once per hour, and only after five songs"
- Weighted pick-one alternatives

Avoid manual edits for renaming, playlist changes, prompt tweaks, or normal timing. Saving from the UI may simplify advanced settings it cannot represent.

<details>
<summary>Show Advanced Configuration</summary>

:::caution
Manual edits can break a show. Make a backup first, keep the files valid JSON, and avoid saving the same show from the UI while you are editing it manually.
:::

To edit advanced configuration:

1. Find the AI Radio files in the Music Assistant storage directory:

```text
ai_radio/<plugin_instance_id>/stations.json
ai_radio/<plugin_instance_id>/sections.json
```

The exact parent directory depends on your installation. For Docker and Home Assistant App installs, it is inside the Music Assistant data/config volume. For a local development server, it is under the configured Music Assistant storage path.

2. Back up both files before changing them.
3. Edit them with a text editor that understands JSON.
4. Save the files and restart Music Assistant
5. Open AI Radio and check that the show still appears. If it is missing, restore the backup and check the JSON syntax.

### How the two JSON files work

Think of an AI Radio show as a set of reusable spoken building blocks plus one or more show plans.

`sections.json` contains the building blocks: things the host can say or AI prompts that help create what the host will say.

`stations.json` contains the show plans: which playlist to use, which section IDs belong to the show, and when AI Radio should try to use those sections.

This split matters because a station does not copy every prompt into its flow. Instead, the station points to section IDs from `sections.json`. That lets the same "weather", "news", or "song transition" section be reused in more than one station.

There are two section types:

| Type | Purpose |
|---|---|
| `ai_text` | A normal section that becomes spoken audio. AI Radio sends its prompt to the AI provider, then sends the generated text to TTS. |
| `ai_meta` | A helper section that rewrites or merges other generated drafts. This is how several separate ideas can become one coherent host break. |

The station field that controls timing is `section_order`. It has rules for:

- `start_of_playlist`: before the first song
- `between_songs`: between two source songs
- `end_of_playlist`: after the last song

The station field that controls merging is `merge_section_id`. It must point to an `ai_meta` section, and that section must also be listed in the station's `section_ids`.

### Use case: customize how several drafts are merged

The UI already creates a merge section for normal shows. Manual editing lets you change that merge section directly. This is useful when you want the final moderator break to follow a stricter structure or tone.

The idea is to let separate sections each focus on one job, then merge their drafts into one final host segment.

For example:

- `Song_Transition` looks at the previous and next song.
- `Weather_Short` looks at weather.
- `Global_News` looks at the current time and asks for a short news-style update.
- `Between_Songs_Smoother` receives all generated drafts and turns them into one spoken break.

In `sections.json`, define the spoken sections and the merge section:

```json
[
  {
    "id": "Song_Transition",
    "name": "Song Transition",
    "type": "ai_text",
    "prompt": "The previous track was <prev_songinfo>. The next track is <next_songinfo>. Create a short spoken transition into the next song."
  },
  {
    "id": "Weather_Short",
    "name": "Weather Short",
    "type": "ai_text",
    "prompt": "Use this weather data: <weather_hourly>. Create one short local weather update."
  },
  {
    "id": "Global_News",
    "name": "Global News",
    "type": "ai_text",
    "web_search_mode": "force",
    "prompt": "At <timestamp>, give one short, neutral news-style update suitable for a music radio break."
  },
  {
    "id": "Between_Songs_Smoother",
    "name": "Between Songs Smoother",
    "type": "ai_meta",
    "prompt": "Merge the drafts below into one coherent radio break. Preserve useful facts, remove repetition, and make the final segment sound like one host who knows the weather, any news item, and the next song.\n<section_drafts>"
  }
]
```

In `stations.json`, include all of those section IDs, set the merge section, and put the sections in the `between_songs` flow:

```json
{
  "id": "example_station",
  "name": "Example AI Radio Station",
  "source_playlist_id": "your_playlist_id",
  "source_playlist_provider": "library",
  "merge_section_id": "Between_Songs_Smoother",
  "section_ids": [
    "Song_Transition",
    "Weather_Short",
    "Global_News",
    "Between_Songs_Smoother"
  ],
  "section_order": [
    {
      "when": "between_songs",
      "flow": [
        { "MUST": "Song_Transition" },
        {
          "OPTIONAL": {
            "section": "Weather_Short",
            "chance": 0.2,
            "guards": {
              "min_gap_songs": 3,
              "max_per_60min": 1,
              "require_placeholders_present": ["<weather_hourly>"]
            }
          }
        },
        {
          "OPTIONAL": {
            "section": "Global_News",
            "chance": 0.12,
            "guards": {
              "min_gap_songs": 4,
              "max_per_60min": 1,
              "require_placeholders_present": ["<timestamp>"]
            }
          }
        }
      ]
    }
  ]
}
```

If only `Song_Transition` is selected for a slot, AI Radio can use it directly. If weather or news is also selected for the same between-song slot, AI Radio uses `Between_Songs_Smoother` to merge the drafts into one final section before TTS.

### Use case: combine timing rules

The UI already supports **Occasionally**, **Every ~N songs**, and **Every ~N min**. Manual JSON is useful when one segment needs a combination of those behaviors in the same rule.

Use `OPTIONAL` with `guards` when a section should be random and also rate-limited. The `chance` value can be written as `0.25` or `25` for 25%.

```json
{
  "OPTIONAL": {
    "section": "rare_news_break",
    "chance": 0.25,
    "guards": {
      "min_gap_songs": 5,
      "max_per_60min": 1
    }
  }
}
```

| Guard | What it means |
|---|---|
| `min_gap_songs` | Wait at least this many source songs before using the same section again. |
| `max_per_60min` | Do not use this section more than this many times per 60 minutes of source music. |
| `require_placeholders_present` | Only use the section if these placeholders have data. Useful for weather, where the section should be skipped if there is no weather result. |

### Use case: randomly choose one style of break

Use `ALTERNATIVE` when you want exactly one choice from a list. Each choice has a `weight`. Higher weight means more likely.

```json
{
  "ALTERNATIVE": {
    "choices": [
      { "section": "artist_fact", "weight": 70 },
      { "section": "song_transition", "weight": 30 }
    ]
  }
}
```

This does not mean exactly 70% and 30% forever. It means `artist_fact` is weighted more heavily than `song_transition` when AI Radio makes this choice.

### Use case: sometimes say nothing

Use `EMPTY_SECTION` inside `ALTERNATIVE` when you want a station that sometimes has a host break and sometimes goes straight into the next song. `EMPTY_SECTION` is a built-in no-op section ID.

```json
{
  "ALTERNATIVE": {
    "choices": [
      { "section": "song_transition", "weight": 40 },
      { "section": "EMPTY_SECTION", "weight": 60 }
    ]
  }
}
```

</details>
