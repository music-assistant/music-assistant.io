---
title: AudioMuse-AI
description: Similar Tracks, Endless Mix, an "Inspired by recently played" discover row and free-text search, answered by your own AudioMuse-AI server.
pluginGroup: discover
---

# AudioMuse-AI

Music Assistant has support for <a href="https://github.com/NeptuneHub/AudioMuse-AI" target="_blank" rel="noopener noreferrer">AudioMuse-AI</a>. Contributed and maintained by <a href="https://github.com/NeptuneHub" target="_blank" rel="noopener noreferrer">NeptuneHub</a>

AudioMuse-AI is a self-hosted server that analyses the music on your Jellyfin, Navidrome or Plex server and works out which tracks sound alike. It runs on your own hardware, next to the media server it reads from.

The plugin connects Music Assistant to that server. Similar tracks, the discover row and free-text search then come from AudioMuse-AI's analysis of your library, without Music Assistant analysing anything itself. If you would rather do the analysis inside Music Assistant, the [Sonic Similarity](/plugins/sonic-similarity/) plugin does the same job locally.

:::caution[Experimental]
This plugin is experimental. Its settings and behaviour may change between Music Assistant releases.
:::

## Features

- **Similar Tracks for your media server library.** Every track AudioMuse-AI has analysed gets a **Similar tracks** list on its details page, including tracks from servers that have no similar tracks of their own. Where the media server does have its own, AudioMuse-AI's suggestions are used first.
- **Endless Mix and Autoplay.** The same results are used when [Endless Mix](/usage/#endless-mix) or Autoplay needs more tracks similar to what you started from.
- **An "Inspired by recently played" row** on the [Discover page](/ui/#view---discover), built from the last five tracks you played.
- **Free-text search.** Optional. Type a description such as *"calm acoustic guitar"* or a line about what a song is about into the [search pop-up](/ui/#global-search), and AudioMuse-AI returns matching tracks. It searches on sound (CLAP) and on lyrics at the same time.

## Requirements

- A running AudioMuse-AI server that Music Assistant can reach over the network. Its <a href="https://github.com/NeptuneHub/AudioMuse-AI" target="_blank" rel="noopener noreferrer">README</a> covers installing it.
- AudioMuse-AI must be pointed at **the same media server** that Music Assistant uses: [Jellyfin](/music-providers/jellyfin/), Navidrome (added through the [Open Subsonic](/music-providers/subsonic/) source) or [Plex](/music-providers/plex/). That media server also has to be added to Music Assistant as a music source.
- AudioMuse-AI must have finished analysing your library. A track it has not analysed yet gets no similar tracks from AudioMuse-AI.
- Free-text search uses AudioMuse-AI's CLAP and lyrics indexes. It works with either one built and combines the two when both are there.

## Configuration

Add the plugin from **Settings → Plugins → Add a plugin**. A **Connect to AudioMuse-AI** form opens with three fields:

| Setting | Description |
|---|---|
| **AudioMuse-AI server URL** | The root address of your AudioMuse-AI server, for example `http://192.168.1.10:8000`. |
| **API token** | Only needed if you turned on authentication in AudioMuse-AI. Leave it empty otherwise. |
| **Media provider to map against** | The Music Assistant music source that points at the same media server AudioMuse-AI analysed. Pick your Jellyfin, Open Subsonic (Navidrome) or Plex source here. |

Music Assistant connects to the server before saving. If it cannot reach it, or AudioMuse-AI does not accept the token, the form stays open with the error so you can correct it.

These three fields belong to the setup, so **Configure** does not show them later. To change the address, the token or the media provider, choose **Reconfigure** from the plugin's menu. The form opens again with your current values filled in.

### Options

**Configure** on the plugin shows these:

| Setting | Description |
|---|---|
| **Enable free-text search** | Adds AudioMuse-AI's sound and lyrics search to the search pop-up. Off by default. |
| **Show 'Inspired by recently played' row** | Shows the row on the Discover page. On by default. Turn it off to hide the row and keep the rest of the plugin. |
| **Status** | Shows whether Music Assistant can reach the server, for example *Connected to http://192.168.1.10:8000 · 48,210 CLAP embeddings*. The number is the size of AudioMuse-AI's sound search index. If the server is down it shows *Cannot reach AudioMuse-AI server at* followed by the address instead. |

## Known Issues / Notes

- Results only show up for tracks that are also on the media provider you picked during setup. A track that only exists on Spotify, or only in a different Jellyfin or Plex source, gets no similar tracks from AudioMuse-AI. The discover row works the same way: of your last five played tracks, only the ones also on that media provider count as a starting point. If none of them are, the row is not shown until you play something from that source.
- A track AudioMuse-AI suggests is dropped if Music Assistant cannot find it on the mapped media server, for example when it was removed after AudioMuse-AI analysed it. Lists can then be shorter than expected.
- Only one AudioMuse-AI server can be connected at a time.
- Install either this plugin or [Sonic Similarity](/plugins/sonic-similarity/), not both. With both installed, whichever answers first supplies the similar tracks, and you cannot choose which one that is.

## Credits

- <a href="https://github.com/NeptuneHub/AudioMuse-AI" target="_blank" rel="noopener noreferrer">AudioMuse-AI</a> does the analysis, similarity and search behind this plugin.
