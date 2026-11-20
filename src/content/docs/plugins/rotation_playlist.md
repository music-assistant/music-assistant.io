---
title: Rotations
description: Playlists you build from a few simple steps, that play endlessly in rounds.
pluginGroup: discover
---

# Rotations <img src="/assets/icons/rotation-playlist-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant can build Rotations. Contributed and maintained by <a href="https://github.com/jordiboehme" target="_blank" rel="noopener noreferrer">jordiboehme</a>

A Rotation is a playlist that describes what you want to hear instead of listing tracks. You build it from a few steps, read from top to bottom, like "take albums from my library, keep those of this artist, order them randomly, play each album's tracks". It plays endlessly in rounds: when everything has played once, a new round starts in a new order.

An example: every evening a different audiobook for the kids, picked at random, but each audiobook in the right order and without the intro, the summary and the outro.

:::caution[Beta]
This plugin is currently marked as **BETA**. Behaviour may change before the final release.
:::

## Installation

Enable the **Rotations** plugin via **Settings → Plugins → Add a plugin**. No additional configuration is required.

## Creating a Rotation

In the Playlists view, open the ⋮ menu in the top right and choose **Create new playlist on** → **New Rotation**. To change a Rotation later, open it and use the edit button.

![New Rotation in the playlists menu](/assets/screenshots/rotation_playlist/menu.png)

The editor shows the steps on the left and a preview on the right. Every step reads as a sentence. Click a part of it to change it. The preview shows the first tracks and how many items are left after each step. You can also start from a recipe with **Start from a recipe**.

![The Rotation editor with a preview](/assets/screenshots/rotation_playlist/editor.png)

## Steps

- **Take**: where the items come from. Artists, albums or tracks from your library.
- **Keep** / **Leave out**: keep or remove items by a condition, for example "Artist is ..." or "Title contains ...".
- **Order**: sort by one or more fields, or randomly.
- **Only the first**: a number of items or minutes.
- **Play each album's tracks** / **Play each artist's albums**: turns albums into their tracks, or artists into their albums or tracks. The steps after it work inside each album or artist.
- **Mix all together**: ends the grouping, so the next steps work on one list again.

Conditions can use the name, version, artist, album, genre, year, album type, number of tracks, audio quality, mood, style, label, language, popularity, favorite, date added, date favorited, play count, last played and more. Text conditions can be "is", "contains", "starts with" and "ends with".

When you move a step to a place where it does not fit, the part that no longer works turns red, and the step says how to fix it.

![A condition that no longer fits after a step was moved](/assets/screenshots/rotation_playlist/invalid.png)

## Albums from your music services

A Rotation takes its items from your library. With a music service like Apple Music, the library often holds only some albums of an artist. When a step keeps an artist that has more albums on a music service than in your library, the step says so, for example "Daft Punk: 3 of 12 albums are in your library." The link opens the artist's albums on that service. There you can select them and add them to your library.

## Rounds

- A round plays every item of the first list once, in the order the steps give. A random order is drawn new for every round.
- A track counts as played once it started, also when you skip it.
- Every user has their own progress. Without a user, the progress is shared by the household.
- The editor shows how far the current round is, and **Start a new round** starts over.

## AI assistants

A Rotation is a plain list of steps, so an AI assistant can build one for you. Through Music Assistant's built-in MCP server, it can look up the steps and fields, preview a Rotation and save it. Ask it for something like "every evening a different audiobook of this series, without the summary".

## Known Issues / Notes

- A Rotation plays in its own order only when it is the only thing in the queue. When you add other music to the queue, the queue mixes them as usual.
- Ordering a very large list by a field that needs every item at once (for example play count across albums) asks for a limit first.
