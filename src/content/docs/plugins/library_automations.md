---
title: Library Automations
description: Automatically react to library events - such as adding an unfavorited track to a playlist - using generic trigger, condition and action rules.
---

# Library Automations

The Library Automations plugin lets you define rules that react automatically to library events, for example: **when a track is unfavorited, add it to a playlist**.

Rules are generic and not limited to that one example: you choose a trigger, optionally one or more conditions, and an action, for tracks, albums, or artists.

:::caution[Experimental]
This plugin is currently marked as **experimental**. Behaviour may change before the final release.
:::

## Installation

Enable the **Library Automations** plugin via `SETTINGS >> PLUGINS >> ADD A PLUGIN`. No additional configuration is required to get started; two optional settings are available on the provider's settings page:

- **Maximum number of rules**: a safety cap on how many rules can be created (default 50).
- **Log every rule match**: when enabled, logs an info-level line every time a rule fires - useful while setting rules up.

Once enabled, a new **Library Automations** entry appears in the sidebar.

## Creating a rule

Select **New rule** and fill in:

- **Name**: a label for the rule.
- **When** (trigger): the library event that arms the rule.
- **Applies to**: which media types the trigger reacts to (tracks, albums, artists - any combination).
- **Then** (action): what happens when the trigger fires and all conditions match.
- **Only if** (conditions, optional): narrow down when the rule should fire.

## Trigger types

- **Item unfavorited**: fires the moment a track, album or artist is removed from favorites.
- **Item favorited**: fires the moment a track, album or artist is marked as favorite.
- **Item added to library**: fires when a track, album or artist is newly added to the library.

## Action types

- **Add to playlist**: adds the triggering track (or, for a triggering album/artist, all of its tracks) to a playlist. The playlist is created automatically the first time a rule matches if it doesn't exist yet.
- **Remove from playlist**: removes the triggering track(s) from a playlist, if present.
- **Remove from library**: removes the triggering item from the library entirely.

## Conditions

Conditions are optional and combine with **AND** (all must match) or **OR** (any must match) logic when a rule has more than one.

- **Name**: matches against the title/name of the triggering track, album or artist itself (for example, not the album name when the trigger is a track).
- **Genre**: matches if any of the item's genres contains the given text.
- **Provider**: pick one of your configured music providers (e.g. a specific streaming service or local folder) from a dropdown; matches items that come from that provider.
- **Explicit**: yes/no, matches the item's explicit flag.
- **Playlist**: pick one or more of your existing library playlists; matches if the triggering item is currently a member of at least one of the selected playlists.

## Example

A rule reproducing the motivating example - "move unfavorited tracks out of the way" - looks like:

- **When**: Item unfavorited
- **Applies to**: Tracks
- **Then**: Add to playlist → playlist name `Sorted Out`

Unfavoriting a track then automatically adds it to the `Sorted Out` playlist, creating the playlist on the first match.

## Notes

- Music Assistant has no dedicated favorite/unfavorite event; the plugin detects the transition itself and only fires on an actual change, not on unrelated metadata updates to an already-unfavorited item. Because of this, the very first update seen for a given item right after a server restart is used only to learn its current favorite state and does not fire a rule - a genuine unfavorite action performed immediately after that first sighting is not missed, only the state right at startup is not retroactively evaluated.
- Rules and their conditions are stored per-server and are not synced between multiple Music Assistant instances.
