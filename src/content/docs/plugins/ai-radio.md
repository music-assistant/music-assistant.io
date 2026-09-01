---
title: AI Radio Plugin
description: Turn a playlist into a radio show with an AI host, or let an AI DJ talk over the queue you are already playing.
---

# AI Radio Plugin

AI Radio puts a spoken host between your tracks. The host can open the show, introduce songs, link one track to the next, and add weather, news or artist facts along the way.

There are two ways to use it:

- A **show** turns one of your playlists into a radio programme and plays it on a player you choose
- The **AI DJ** adds the same spoken breaks to a queue you are already listening to, without setting up a show at all

:::note
AI Radio is in alpha. The show and host editors, the bundled hosts and the generated output may all change between Music Assistant releases.
:::

## Features

- Build reusable **shows** from your playlists
- Start from a bundled host such as **Morning show**, **Minimal DJ**, **Music nerd** or **Party host**
- Give a host its own voice, language and personality, and reuse it across shows
- Decide when the host speaks, from every song to once an hour
- Let the host look things up on the web for segments that need current information
- Add weather to any segment through Open-Meteo
- Turn on an AI DJ for any queue straight from the queue menu
- Duplicate a show to make a variation without starting again

## Before you start

- An **AI engine** to write what the host says, and a **text-to-speech engine** to speak it. Both come from other plugins, so set these up first. AI Radio will not get past its own first step without them. See [AI and text-to-speech engines](/ha-plugin/#ai-and-text-to-speech-engines)
- A player to listen on, enabled and available
- A playlist with playable tracks, if you want to build a show. The AI DJ works on whatever is already in the queue

## Setting it up

1. Go to **Settings → Plugins → Add a plugin**.
2. Add **AI Radio**.
3. Setup opens at **Set up AI Radio**. Choose the AI engine that writes the host's lines and the text-to-speech engine that voices them.
4. If you want weather in your shows, fill in the weather city and country on the same screen. You can leave them empty and add them later.
5. **AI Radio** then appears in the main navigation.

### Changing the AI or text-to-speech engine later

:::caution[The engine pickers are not in AI Radio's settings]
AI Radio stores its two engine choices with its setup rather than its settings, so **Configure** does not show them.

To change either engine, choose **Reconfigure** from the AI Radio provider's menu. This reopens **Set up AI Radio** with your current choices filled in, so you can change one and leave the other. Your shows and hosts are not affected.
:::

## Shows and hosts

AI Radio keeps these two things separate, and it is worth knowing which is which before you start.

A **show** is the short part. It is a playlist, a host, and a name.

A **host** is where the character lives. It holds the voice, the language, the personality, and the segments that decide what gets said and when. Because the host is separate, one host can front several shows, and changing the host changes all of them.

The AI Radio page has a gallery for each, **Shows** and **Hosts**.

## Creating a show

1. Open **AI Radio** from the navigation.
2. Select **Create show**.
3. Choose a **Source playlist**.
4. Choose a **Host**.
5. Give the show a **Show name**.
6. Select **Create**, or **Create & play** to start it straight away.

There is a shortcut if you are already looking at the playlist you want. Open its menu and choose **Play as AI Radio**, which opens the AI Radio page with that playlist already filled in.

## Playing a show

Each show card has **Play**, which starts it on the show's player. While it runs the card shows **On air**, and **Stop** ends it.

Music Assistant prepares the first few tracks and host segments, queues them, and keeps preparing more while the show plays.

Only one show can be on air at a time. If another is already running, Music Assistant asks whether to stop it and switch.

The host is written fresh every time, so the same show will not say the same thing twice.

> [!NOTE]
> Starting a show clears the target queue and turns off shuffle on it, so the segments stay with the tracks they were written for. Anything already queued is replaced.

## The AI DJ on a queue

The AI DJ is the quick way in. Instead of building a show, you point a host at a queue and it starts talking between the tracks already playing there.

Open the queue menu and choose **Enable AI Radio DJ**, then pick a host. Choose **Off** in the same menu to stop it.

The choice sticks to that queue and survives a Music Assistant restart, so the DJ carries on until you turn it off. Switching to a different host removes anything the previous host had lined up.

A queue has one host at a time. If you start a show on the queue, the show takes it over and the menu shows **On air** with that show's host instead.

The difference from a show is that a show has a beginning and an end, while a queue just keeps going. The DJ only ever fills the gaps between songs, so a host's **Once at start** and **Once at end** segments never play. If you want the opening greeting and the sign-off, run it as a show.

## Customizing a show

Select **Customize** on a show card.

| Field | Description |
|---|---|
| **Show name** | The name on the card |
| **Source playlist** | The playlist the music comes from |
| **Host** | The host that fronts this show |

<details>
<summary>Advanced show settings</summary>

| Setting | Default | Description |
|---|---:|---|
| **Default Playback Device (optional)** | Empty | The player **Play** uses. **Use current player** fills in the one you are listening on |
| **Source Playtime Cap (minutes)** | 0 | The most source music the show will use, in minutes. Tracks are taken in the order the show plays them until the cap is reached. Leave it at 0 for no limit |
| **Shuffle Playlist Tracks** | On | Plays the source playlist in random order. Turn it off to follow the playlist's own order |

</details>

## Customizing a host

Select **Edit** on a host card, or **Add host** to build one from scratch. You can also start from **Blank host**.

### Personality

| Field | Description |
|---|---|
| **Host name** | The name shown wherever you pick a host |
| **Voice** | The text-to-speech voice this host speaks with. **Default** uses the engine chosen during setup |
| **Language** | The language the host speaks. **Follow server language** uses the **Preferred language** from [**Settings → System → Metadata**](/settings/core/#metadata) |
| **Host and Program Instructions** | The personality and writing style. This goes to the AI with every segment |

### Segments

A segment is one spoken part. **Add segment** offers ready-made ones for **Intro**, **Transition**, **Weather**, **News**, **Artist fact** and **Sign-off**, or a **Blank segment**.

| Field | Description |
|---|---|
| **Segment name** | The name shown in the editor |
| **Prompt** | What you want the AI to say in this segment |
| **Web Search Mode** | Whether the host may look things up for this segment |
| **Character Limit** | Roughly how long the spoken text may get |
| **Plays** | When and how often the segment is used |

**Plays** offers **Once at start**, **Once at end**, **Every song**, **Every ~N songs**, **Every ~N min** and **Occasionally**, the last with a percentage.

If two between-song segments fall at the same point, AI Radio writes them separately and merges them into a single break, so a song transition and the weather arrive as one piece of speech rather than two.

### Web search modes

| Mode | What it does |
|---|---|
| **disabled (no web tool)** | The host uses the prompt and the track information only |
| **allow (model may use web)** | The host may search if the AI engine supports it |
| **force (web search required)** | The segment always searches. Use this for news |

Music Assistant does not search the web itself. These settings add a line to the prompt asking the AI to use current information, and it is up to your AI engine whether it acts on it. Engines with their own built-in search will but local models and models without search will not, and may answer from what they were trained on instead, which can be out of date or wrong.
Use it sparingly. Searching makes a segment slower to prepare, and what it can do depends on your AI engine.

### Placeholders

Anything below is filled in before the prompt goes to the AI. In the editor you can tap a placeholder to copy it.

| Placeholder | Meaning |
|---|---|
| `<prev_songinfo>` | The track just played |
| `<next_songinfo>` | The track coming up |
| `<very_next_songinfo>` | The track after that |
| `<timestamp>` | The current local time |
| `<weather_hourly>` | The weather now and over the next few hours |
| `<weather_daily>` | The weather for the day |

An example prompt:

```text
The previous track was <prev_songinfo> and the next track is <next_songinfo>.
Create a natural radio transition that connects both songs and keeps it concise.
```

<details>
<summary>Advanced text-to-speech options</summary>

A host can pass extra options straight to its text-to-speech engine as key and value pairs, for example a `voice` key with a value of `en_US-lessac-medium`.

Only add keys your chosen engine understands. An unsupported key can make the engine reject the whole clip, so the host says nothing at all.

</details>

## Weather

Weather comes from Open-Meteo. To use it, set the weather city and country in the plugin settings, then give a segment a prompt containing `<weather_hourly>` or `<weather_daily>`.

A timing such as **Every ~60 min** or **Occasionally** keeps it from coming round too often.

If the weather cannot be fetched, the host leaves the weather out and carries on rather than stopping the show. A segment that exists only to read the forecast is skipped instead.

## Plugin settings

Found under **Configure** on the AI Radio provider.

| Setting | Default | Description |
|---|---|---|
| **Weather City** | From setup | The city used to look up the forecast |
| **Weather Country** | From setup | The country that goes with it |

<details>
<summary>Advanced plugin settings</summary>

These appear only when the `Show advanced settings` toggle is on.

| Setting | Default | Description |
|---|---|---|
| **Timezone** | The server's | The timezone used to work out the current time for `<timestamp>` |
| **Weather Provider** | Open-Meteo | Where the forecast comes from. Set it to Disabled to stop looking one up |
| **Weather Request Timeout** | 20 | How long to wait for the forecast, in seconds, before giving up |
| **Spoken Clip Loudness Boost** | 3 | How many decibels above the music the spoken sections sit. Peaks are always limited so the audio cannot clip, so the last few decibels arrive mostly as compression rather than loudness. Set it to 0 to keep speech at the same level as the music |

</details>

## Tips

- Start with **Minimal DJ** if you want the music mostly left alone
- **Music nerd** with web search allowed is the one for artist facts
- **Morning show** is the busiest, with weather and news built in
- Keep prompts short and specific. Say what the segment is for, and that it will be read aloud
- Use the character limit to stop a segment turning into a monologue
- Try a new host on a queue with the AI DJ first. It is quicker than building a show to hear how it sounds

## Troubleshooting

### Setup will not let me past the first step

AI Radio needs both an AI engine and a text-to-speech engine, and neither can be created here. Set up a plugin that provides the missing one first, as described under [AI and text-to-speech engines](/ha-plugin/#ai-and-text-to-speech-engines), then add AI Radio again.

### I cannot find the engine pickers in the plugin's settings

They are not there. Use **Reconfigure** on the AI Radio provider's menu instead, as described under [changing the AI or text-to-speech engine later](#changing-the-ai-or-text-to-speech-engine-later).

### AI Radio says an AI or text-to-speech engine is not available

The engine it was using has gone. This usually means the entity behind it was removed or renamed in Home Assistant, or the plugin providing it is no longer loaded. Music Assistant will not quietly move you to a different engine, so put the original back or choose another one through **Reconfigure**.

### No speech is generated

Check the text-to-speech engine works at its source. With Home Assistant, test the entity there first, then check that the [Home Assistant plugin](/ha-plugin/) is still connected in Music Assistant.

If the host has **Advanced text-to-speech options** set, try removing them. A key the engine does not understand can make it reject the clip.

### A show will not start

The show needs a player, and that player has to be enabled and available. If the show has no default playback device, pick one before pressing **Play**.

### The AI DJ is on but never speaks

Check the queue is actually playing. The DJ fills the gaps between tracks, so it has nothing to do while the queue is stopped. If a show is on air on that queue, the show has taken it over and the menu will say so.

### Weather segments are empty or skipped

Check the weather city and country are set in the plugin settings, and that **Weather Provider** has not been set to Disabled.

### Web search seems to do nothing (or hallucinates)

Web search is just a hint appended to the prompt, not a separate tool call from Music Assistant. Whether the model actually searches depends on your AI engine — only providers that integrate their own built-in web search into the model will honour this hint. Local models or models without a built-in search solution will not query the web; they may still try to answer from their training data, which can produce inaccurate results. If your engine does not provide search tooling, leave `web_search` at **disabled** for all segments.
