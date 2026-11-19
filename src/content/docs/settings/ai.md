---
title: "AI"
description: The default AI engines, what uses AI, your AI services and access for AI assistants
---

# AI

**Settings → AI** holds the default AI engines, what uses AI, your AI services and access for AI assistants. Only administrators see it.

Some features need an engine to do their work: an **AI engine** writes text, a **text-to-speech engine** speaks it and an **image engine** draws pictures. Engines come from AI services, which are plugins. The [OpenAI Compatible](/plugins/openai_compatible/) plugin provides AI and image engines, the [OpenAI Text-to-speech](/plugins/openai_tts/) plugin provides text-to-speech engines, and the [Home Assistant plugin](/ha-plugin/#ai-and-text-to-speech-engines) turns the AI task and text-to-speech entities of your Home Assistant into engines.

## Default engines

- <b>Default AI engine.</b> The AI engine every feature uses unless it picks one of its own, for example to write playlist descriptions or AI Radio breaks
- <b>Default text-to-speech engine.</b> The text-to-speech engine every feature uses unless it picks one of its own, for example to speak announcements or AI Radio breaks
- <b>Default image engine.</b> The image engine every feature uses unless it picks one of its own, for example to draw playlist covers

Only a kind that has engines gets a picker. A kind without one shows a message instead, which says what kind of plugin to set up. The first engine available of a kind becomes its default, so with one engine of each kind there is nothing to choose.

Engines are named after the AI service and then the engine, as `<service> | <engine>`, so two similar engines can be told apart. If the engine of a default disappears, for example because its plugin was removed, Music Assistant reports it rather than switching to a different one. Choose another one, or bring back the plugin that provides it.

With no engines at all, the page shows **No AI engines yet** instead, with **Add an AI service**, which lists the services that can provide engines, such as [OpenAI Compatible](/plugins/openai_compatible/) and Home Assistant, and sets up the one you pick right on the page.

## What uses AI

This list shows every feature that is set up and uses an engine, with the kind of engine it needs. Pick the engine right on its row, with the same options as the feature's own picker, and the choice is saved straight away. A row shows **Not available** when there is no engine for it. AI Radio keeps its engines in its setup, so its rows show the engine it uses, with **Default ·** followed by the engine's name when it follows the default, and open its **Reconfigure**.

| Feature | Kind | Where else to change it |
|---|---|---|
| [Playback](/settings/playback/#announcements) | Text-to-speech, for announcements | **Announcement text-to-speech engine** on **Settings → Players → Playback** |
| [AI Radio](/plugins/ai-radio/) | AI **and** text-to-speech | **Reconfigure** on the plugin's menu, not its normal settings. See [changing the engines later](/plugins/ai-radio/#changing-the-ai-or-text-to-speech-engine-later) |
| [Music Quiz](/plugins/music-quiz/) | AI | Its settings, under **Features** |
| [Smart Playlists](/plugins/smart_playlist/) | AI | Its settings, once **AI descriptions** is switched on |
| [Playlist Metadata](/metadata-providers/playlist-metadata/#ai-generated-covers) | Image for covers, AI for descriptions | Its settings: **Image engine** appears once **Artwork template** is **AI generated**, and **Text engine** is under **AI covers and descriptions** |

A feature's own picker starts on its first option, which follows the default engine and carries that engine's name. Pick another engine there to give that feature its own.

## AI services

This list holds the AI services that are set up, each with what it provides, such as `2 text · 1 image`. A service that provides nothing shows **Choose the models to use**, for example an [OpenAI Compatible](/plugins/openai_compatible/) plugin without models. The Home Assistant plugin is listed while Home Assistant has an AI task or text-to-speech entity.

Select a service to open its settings, which for Home Assistant are on [**Settings → System → Home Assistant**](/settings/core/#home-assistant). **Add an AI service** adds another one, right on this page.

## Access for AI assistants

- <b>Enable the built-in MCP server.</b> Switches the MCP server built into Music Assistant on or off. It is on by default. With it on, AI assistants such as Home Assistant Assist, Claude and ChatGPT can search your music and control playback through the <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">Model Context Protocol (MCP)</a>

For more control, such as a connect wizard for AI clients and token policies, see the community [MCP server plugin](/plugins/fastmcp-server/), listed in the Marketplace as **MCP Server (Community)**.
