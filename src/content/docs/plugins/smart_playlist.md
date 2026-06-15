---
title: Smart Playlists
description: Create dynamic playlists based on rules from your library or from music discovered via seed tracks, artists, albums, or playlists.
---

# Smart Playlists

The Smart Playlists plugin lets you create rule-based playlists from your Music Assistant library.

Smart playlists are **dynamic**: the tracks are re-evaluated whenever you play the playlist, based on your saved rules and current library/provider state.

:::caution[Experimental]
This plugin is currently marked as **experimental**. Behaviour may change before the final release.
:::

## Installation

Enable the **Smart Playlists** plugin in **Settings → Providers → Add Provider → Plugins**. No additional configuration is required.

![Smart Playlists plugin entry](/assets/screenshots/smart_playlist/add_plugin.png)

## Creating a Smart Playlist

In the Playlists view, select the <img src="/assets/screenshots/smart_playlist/create_button.png" alt="Create Smart Playlist button" style="height: 1.4em; vertical-align: middle;" loading="lazy" /> button in the top right and choose **Create Smart Playlist**.

![Create Smart Playlist menu](/assets/screenshots/smart_playlist/menu_entry.png)

![Create Smart Playlist dialog (Discover mode)](/assets/screenshots/smart_playlist/create_smart_playlist_discover.png)

The screenshot above shows a **Discover mode** setup.

![Create Smart Playlist dialog (From my library / rule-based mode)](/assets/screenshots/smart_playlist/create_smart_playlist_rulebased.png)

The screenshot above shows **From my library** mode (rule-based setup).

Enter a name and choose a source mode:

- **From my library**: build from tracks already in your MA library.
- **Discover mode**: use one or more seed items (tracks, artists, albums, or playlists) and fetch similar content from supported streaming providers.

## Rule model

Smart playlists use include/exclude style rules:

- **Genre**: is / is not (one or more genres)
- **Artist**: is / is not (library mode, one or more artists)
- **Album**: is / is not (library mode, one or more albums)
- **Album type**: is / is not (filter by album type: album, single, EP, compilation, etc.)
- **Explicit**: filter tracks by explicit content marker (three options: allowed, explicit only, not allowed; provider-dependent)
- **Favorite**: yes (library mode)
- **Year**: between from/to (you can also use only `from` or only `to`).

Year examples:

- `from: 1969` means 1969 or newer.
- `to: 1980` means 1980 or older.

Album type examples:

- **Album type is "Album"**: only full-length albums (excludes singles, EPs, compilations)
- **Album type is not "Single"**: excludes all single releases
- **Album type is "Album" or "EP"**: includes full albums and EPs (excludes singles and compilations)
- **Album type is "Live"**: only live recordings/concerts

Available album types: **Album**, **Single**, **EP**, **Compilation**, **Live**, **Soundtrack**, **Audiobook**, **Podcast**, **Unknown album type** (albums without a specific type classification or where the music provider does not provide type information).

Explicit content filter options:

- **Allowed**: include both explicit and non-explicit tracks (no filtering)
- **Explicit only**: include only tracks marked as explicit content
- **Not allowed**: exclude all tracks marked as explicit content

Note: Explicit content filtering depends on your music provider supplying explicit markers in their metadata. Not all music providers include this information, and availability varies by provider and region. If your provider does not supply explicit markers, this filter will have no effect.

In **From my library** mode you can choose whether tracks must match **all** rules or **any** rule.

In **Discover mode**, filters are applied to the provider result after similar content is fetched.

![Rule examples in From my library mode](/assets/screenshots/smart_playlist/rules_example.png)

## Discover mode

:::note[Best Effort Service]
Discover mode relies on external music provider APIs for content recommendations. Results depend on:
- Provider availability and API limits
- Seed track/artist/album recognition by the provider
- Provider-specific recommendation algorithms

Quality and availability of results may vary between providers and over time.
:::

When using **Discover mode**:

- Add one or more seeds from tracks, artists, albums, or playlists.
- Seed lookups depend on provider support for the selected seed types.
- Results are sampled from provider output and refreshed on each play.

## De-duplication

Use **Do not repeat the same song for X hours** to prevent recently played tracks from being selected again.

Set it to **Off** to disable de-duplication.

## Track count and duration hint

The dialog shows a live estimate while you edit rules:

- **From my library mode**: live matching track count + duration estimate, updated as rules change.
- **Discover mode**: no live matching-count calculation; the UI only shows guidance that up to 50 tracks are fetched from your streaming provider.

The screenshot below shows **From my library** mode (rule-based smart playlist).

![Track count indicator (From my library mode)](/assets/screenshots/smart_playlist/track_count.png)

The screenshot below shows the Track Count hint for **Discover mode**.

![Track count indicator (Discover mode)](/assets/screenshots/smart_playlist/track_count_discover.png)

## Playlist detail

After saving, open the smart playlist to view a current sample output based on your rules.

![Smart Playlist detail view](/assets/screenshots/smart_playlist/playlist_detail.png)

## Notes

- Smart playlists only exist as long as the Smart Playlists plugin is installed. Removing the plugin also removes associated smart playlists from the MA library.
