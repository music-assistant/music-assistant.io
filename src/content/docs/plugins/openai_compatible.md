---
title: OpenAI Compatible
description: Use OpenAI, Groq, OpenRouter, Together or a local AI server such as Ollama or LM Studio for Music Assistant's AI features.
---

# OpenAI Compatible

Some Music Assistant features are powered by an AI model: **AI Radio**, the **Trivia** quiz type, the AI answer suggestions in **Music Quiz**, and the AI-written descriptions for **Smart Playlists**.

Those features used to need Home Assistant, because an AI task entity there was the only thing that could answer them. This plugin lets Music Assistant talk to an AI service directly, so they work without Home Assistant as well.

Each model you pick here becomes an **AI engine**, offered to those features alongside anything the [Home Assistant plugin](/ha-plugin/) provides. Each feature then chooses which engine it wants from its own settings. See [choosing an engine for a feature](/ha-plugin/#choosing-an-engine-for-a-feature).

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

Add the plugin in **Settings → Plugins → Add a Plugin** and pick **OpenAI Compatible**.

### Choose a service

Pick your service from the list and its address is filled in for you. Choose **Something else** if your service is not listed.

### Connection details

- **API base URL** — the address of the service, including the version path, for example `https://api.openai.com/v1`. Change this if the service does not run where it normally would, for example when Ollama runs on a different machine than Music Assistant, or when Music Assistant runs in a container and cannot reach `localhost`.
- **API key** — the key from your service. Leave it empty for a local server that does not ask for one.

Music Assistant checks the address and key before finishing, so a typo is caught here rather than later.

### Choose your models

The plugin does not offer any models until you pick them. Open the plugin under **Settings → Plugins**, and select the models you want under **Models**.

The list is read from your service. If your service does not publish a list of its models, the field lets you type the model names yourself.

Each model you select becomes its own AI engine, listed as `OpenAI Compatible | <model>` wherever an AI engine can be picked.

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
