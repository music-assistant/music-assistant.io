---
title: OpenAI Text-to-speech
description: Turn text into speech for announcements and AI Radio using the OpenAI speech API, or a self-hosted server such as Kokoro-FastAPI, LocalAI or Speaches.
pluginGroup: other-systems
---

# OpenAI Text-to-speech

Some Music Assistant features need to speak: **announcements** that are sent as a text message instead of an audio link, and the presenter in **AI Radio**. Both need a text-to-speech (TTS) engine to turn the text into audio.

Those features used to need Home Assistant, because a TTS entity there was the only thing that could speak for them. This plugin lets Music Assistant talk to a speech service directly, so they work without Home Assistant as well.

Each voice the plugin finds becomes a **TTS engine**, offered to those features alongside anything the [Home Assistant plugin](/ha-plugin/) provides. Each feature then chooses which engine it wants from its own settings.

It works with the OpenAI speech API and any service that implements the same endpoint:

- The **OpenAI** cloud API
- Speech servers you run yourself, such as **Kokoro-FastAPI**, **LocalAI** and **Speaches**
- Other services with an OpenAI-compatible speech endpoint, such as **Gemini**

:::caution[Alpha]
This plugin is currently marked as **alpha**. It works, but it has not been tested against every service yet, and its settings may still change.
:::

## Features

- One plugin for the OpenAI speech API and every server that implements the same endpoint, hosted or self-hosted
- Each voice becomes a separate choice in the features that speak, so announcements and AI Radio can each use a different voice
- Voices are found automatically on servers that publish a list of them
- Rendered speech is cached, so a repeated announcement plays straight away without being rendered again
- Multiple instances, so a local server and a hosted service can be used side by side

## Installation

Add the plugin in **Settings → Plugins → Add a plugin** and pick **OpenAI Text-to-speech**.

### Connection details

- **API endpoint** — the address of the speech API, including the version path. Use `https://api.openai.com/v1` for the OpenAI cloud API, or the address of your own server, for example `http://localhost:8880/v1` for Kokoro-FastAPI. Change this if the server does not run where it normally would, for example when it runs on a different machine than Music Assistant, or when Music Assistant runs in a container and cannot reach `localhost`
- **API key** — the key from your service. Required for the OpenAI cloud API; leave it empty for a local server that does not ask for one
- **Model** — the speech model to use, for example `tts-1` or the higher quality `gpt-4o-mini-tts` on the OpenAI cloud API. Self-hosted servers use their own model names
- **Audio format** — the format the speech is requested in: MP3, Opus, AAC, FLAC or WAV. MP3 works with almost every server, so leave it as is unless yours does not support it

Music Assistant renders a short test phrase before finishing, so a wrong address, key, model or audio format is caught here rather than on the first announcement.

### Voices

The plugin finds its voices by itself:

- If your server publishes a list of its voices, as Kokoro-FastAPI does, those voices are offered.
- Otherwise the standard OpenAI voices are offered: `alloy`, `echo`, `fable`, `nova`, `onyx` and `shimmer`.

If your server has voices that are not found this way, open the plugin under **Settings → Plugins** and enter them under **Voices**, one voice per value. This replaces the voices that would otherwise be offered.

Each voice becomes its own TTS engine, listed as `OpenAI Text-to-speech | <voice>` wherever a TTS engine can be picked.

## Choosing a voice

- **Announcements** use the engine set under **Announcement text-to-speech engine** in [**Settings → System → Players**](/settings/core/#players)
- **AI Radio** picks its engine with **Reconfigure** on the provider's menu, not in its normal settings. See [changing the engines later](/plugins/ai-radio/#changing-the-ai-or-text-to-speech-engine-later). This is where a natural-sounding voice is most noticeable, so it pays to try a few

See [choosing an engine for a feature](/ha-plugin/#choosing-an-engine-for-a-feature) for how engines are picked across Music Assistant.

## Known Issues / Notes

- **Language.** The speech API has no language setting. The server works out the language from the text itself, so pick a voice that suits the language of your announcements
- **Costs.** The OpenAI cloud API bills you per character rendered. Repeated text is served from the cache for 24 hours instead of being rendered again, but AI Radio writes new text for every segment it announces, so keep an eye on your usage
- **Speed.** A self-hosted server running without a graphics card can take a while to render longer text. Requests are given up on after two minutes
- **Changing the audio format.** The format is part of the setup, so to change it later, run the plugin's setup again
