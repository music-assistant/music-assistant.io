---
title: "Yandex Alice Plugin"
description: Features and Notes for the Yandex Alice Plugin
---

# Yandex Alice

Music Assistant has the ability to be controlled by voice through [Yandex Alice](https://alice.yandex.ru/) by registering a custom skill in [Yandex Dialogs](https://dialogs.yandex.ru/developer). Users speak free-form phrases like "Alice, ask &lt;skill name&gt; to play jazz" and Music Assistant resolves the player and the requested media server-side.

> [!CAUTION]
> This is an unofficial integration and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> Music Assistant must be reachable on a **public HTTPS URL** — Yandex sends voice phrases directly to your MA server. There is no cloud relay for Dialogs custom skills.

## Features

- Free-form voice playback: search and play artists, albums, tracks, playlists and genres
- Transport and queue control: pause / resume / next / previous / seek, shuffle, repeat, add to queue, what's playing
- Multi-room: address a specific player by name, transfer the queue to another player, list players
- Voice-first disambiguation when a player name is ambiguous (the skill asks "first, second, or third?")
- Morphologically aware natural language understanding with fuzzy player-name matching
- One-click skill registration in the config form via Yandex Passport sign-in (no manual setup in the Yandex Dialogs developer console required)

## Configuration

The plugin is added by navigating to MA Settings then selecting Plugins and clicking on ADD A PLUGIN.

The settings form walks through three steps: sign in to Yandex with the Passport device-code flow, create the skill in Yandex Dialogs (one click — the plugin handles registration and deployment), and select the players you want voice control to reach. After Yandex moderation completes (typically 5-15 minutes) the skill is on the air.

Full step-by-step setup, troubleshooting and FAQ: **[trudenboy.github.io/ma-provider-yandex-alice](https://trudenboy.github.io/ma-provider-yandex-alice/)**.

## Known Issues / Notes

- Yandex Dialogs custom skills require a publicly reachable HTTPS endpoint for the MA webserver. Reverse proxy, port forwarding or similar is needed; a private LAN address will not work.
- After the skill is created, Yandex moderation takes 5-15 minutes before voice commands actually reach Alice. The plugin shows live moderation status in the settings form.
- Player aliases set in the *Home with Alice* app are not forwarded to the skill — players are addressed by their Music Assistant name. Rename the player in MA if you want a different voice name.
- The skill is registered against your Yandex account; only one Yandex account per MA instance.
