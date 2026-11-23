---
title: OpenAI Compatible
description: Use OpenAI, Groq, OpenRouter, Together or a local AI server such as Ollama or LM Studio for Music Assistant's AI features.
pluginGroup: other-systems
---

# OpenAI Compatible

Some Music Assistant features are powered by an AI model: **AI Radio**, the **Trivia** quiz type, the AI answer suggestions in **Music Quiz**, the AI-written descriptions for **Smart Playlists**, and the AI generated covers and descriptions of **Playlist Metadata**.

This plugin lets Music Assistant talk to an AI service directly, so those features work without Home Assistant as well.

Each model you pick here becomes an **AI engine**, offered to those features alongside anything the [Home Assistant plugin](/ha-plugin/) provides. Features use the default engines from [**Settings → AI**](/settings/ai/) unless they pick their own.

It works with any service that speaks the OpenAI API, which is nearly all of them:

- Hosted services such as **OpenAI**, **Groq**, **OpenRouter** and **Together AI**
- AI servers you run yourself, such as **Ollama**, **LM Studio**, **llama.cpp** and **vLLM**

:::caution[Beta]
This plugin is currently marked as **beta**. It works, but it has not been tested against every service yet.
:::

## Features

- One plugin for every service that speaks the OpenAI API, hosted or self-hosted
- Each model you select becomes a separate choice in the AI features, so a small, cheap model can handle simple jobs while a stronger one is used where it matters
- Multiple instances, so a local server and a hosted service can be used side by side

## Installation

Add the plugin in **Settings → Plugins → Add a plugin**, or with **Add an AI service** on [**Settings → AI**](/settings/ai/), and pick **OpenAI Compatible**.

### Choose a service

Pick your service from the list and its address is filled in for you. Choose **Something else** if your service is not listed.

### Connection details

- **API base URL** — the address of the service, including the version path, for example `https://api.openai.com/v1`. Change this if the service does not run where it normally would, for example when Ollama runs on a different machine than Music Assistant, or when Music Assistant runs in a container and cannot reach `localhost`.
- **API key** — the key from your service. Leave it empty for a local server that does not ask for one. With **Reconfigure** later, leave it empty to keep the saved key, or tick **Remove the saved API key** to clear it.

Music Assistant checks the address and key when you continue, by reading the list of models from the service, so a typo is caught here rather than later.

### Choose the models

The last step asks for the models to use. The list is read from your service. If your service does not publish a list of its models, the fields let you type the model names yourself.

- **Models** — the models for the AI features. Each model you select becomes its own AI engine, listed as `OpenAI Compatible | <model>` wherever an AI engine can be picked.
- **Image models** — the models that draw pictures, for example `google/gemini-2.5-flash-image` on OpenRouter or `gpt-image-1` on OpenAI. Each one becomes an **image engine**, used by features that create artwork such as the [AI generated covers of Playlist Metadata](/metadata-providers/playlist-metadata/#ai-generated-covers). Leave it empty if your service cannot generate images.

Both are optional. Without any model the plugin offers no engines, and [**Settings → AI**](/settings/ai/#ai-services) lists it with **Choose the models to use**.

To change the models later, open the plugin under **Settings → Plugins** and change **Models** or **Image models**, or go through the setup again with **Reconfigure**.

## Choosing a model

The AI features ask for different things, so it pays to select more than one model:

- **Trivia** and **AI answer suggestions** ask for a strict JSON answer. Use a capable model here — small local models often word their answer in a way Music Assistant cannot read, and the question or the suggestions are then dropped.
- **AI Radio** writes spoken presenter text. Any model that writes well in your language works, and this is where a larger model is most noticeable.
- **Smart Playlist descriptions** are one or two sentences. The cheapest, fastest model is fine.

## Known Issues / Notes

- **Costs.** Hosted services bill you per request. AI Radio in particular asks for text for every segment it announces, so keep an eye on your usage.
- **Speed.** A local model running without a graphics card can take a long time to answer. Requests are given up on after two minutes.
- **Reasoning models.** Models that think out loud before answering are supported, and the thinking is stripped from the answer. They are slower and, for the features that need strict JSON, not always more reliable.
- **Which models are offered.** The list comes straight from your service and can be long, and it may include models that cannot answer a chat request at all, such as image or speech models. Select only the ones you intend to use.
