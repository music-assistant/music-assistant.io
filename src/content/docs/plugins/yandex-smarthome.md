---
title: "Yandex Smart Home Plugin"
description: Features and Notes for the Yandex Smart Home Plugin
---

# Yandex Smart Home

Music Assistant can expose its players to [Yandex Alice](https://alice.yandex.ru/) via the [Yandex Smart Home API](https://yandex.ru/dev/dialogs/smart-home/), so they can be controlled by voice as smart home media devices. Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

Cloud connection modes use the [yaha-cloud.ru](https://yaha-cloud.ru/) relay. The protocol implementation follows the [dext0r/yandex_smart_home](https://github.com/dext0r/yandex_smart_home) reference integration.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> The Yandex Smart Home API does not support `play_media` for third-party devices.
> Voice commands like «Алиса, включи музыку» will only resume the current Music Assistant queue — a specific track, album or playlist cannot be started by voice through this plugin.

> [!NOTE]
> Full plugin documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-smarthome](https://trudenboy.github.io/ma-provider-yandex-smarthome/)**


## Features

|           |                     |
|:-----------------------|:---------------------:|
| Exposes MA players to Yandex Alice | Yes |
| Device type | `devices.types.media_device.receiver` |
| Connection modes | Cloud, Cloud Plus, Direct |
| Multiple instances | No |
| Player filter (expose a subset) | Yes |
| State reporting to Yandex | Yes (debounced + heartbeat) |

### Supported voice commands

| Voice command | Action |
|---|---|
| «Алиса, включи музыку на \<name\>» | Play / resume the current queue |
| «Алиса, выключи \<name\>» | Stop playback |
| «Алиса, сделай громче / тише на \<name\>» | Volume up / down (±10) |
| «Алиса, поставь громкость 50 на \<name\>» | Set volume to 50% |
| «Алиса, пауза на \<name\>» | Pause |
| «Алиса, дальше / назад на \<name\>» | Next / previous track |
| «Алиса, переключи на \<source\> на \<name\>» | Select input source (if the player exposes a source list) |

### Yandex Smart Home capabilities

| Yandex capability | Mapped MA action | Notes |
|---|---|---|
| `on_off` | `play()` / `stop()` | "включи" resumes the current queue, "выключи" stops |
| `range(volume)` | `volume_set()` | Absolute and relative (±) |
| `toggle(mute)` | `volume_mute()` | Only if the player supports mute |
| `toggle(pause)` | `play()` / `pause()` | |
| `range(channel)` | `next_track()` / `previous_track()` | Relative only: +1 = next, -1 = prev |
| `mode(input_source)` | `select_source()` | Uses the player's source list by index (up to 10) |

## Configuration

The plugin supports three connection modes — pick the one that matches your network setup:

- **Cloud** — uses the public [yaha-cloud.ru](https://yaha-cloud.ru/) skill as a relay. Easiest setup, no public URL required.
- **Cloud Plus** — uses a private skill via the same relay. Required if Yaha Cloud is already linked to another integration (e.g. Home Assistant) on the same Yandex account.
- **Direct** — Yandex calls your MA server directly over HTTPS. No relay required, but your Music Assistant webserver must be reachable on a public HTTPS URL.

### Cloud / Cloud Plus setup

1. Add the **Yandex Smart Home** plugin in Music Assistant settings and select `cloud` or `cloud_plus` as the connection type.
2. Click **Register with cloud** — the plugin creates an instance on the `yaha-cloud.ru` relay and returns an OTP code.
3. In the Yandex app on your phone: **Devices → Add device → Smart Home**, find the skill and enter the OTP.
4. (Cloud Plus only) Create a private skill in [Yandex.Dialogs](https://dialogs.yandex.ru/developer/smart-home). The plugin's config flow shows every required value to paste into the skill settings.

### Direct setup

1. Create a private skill in [Yandex.Dialogs](https://dialogs.yandex.ru/developer/smart-home).
2. Copy the Backend URL and Account Linking URLs shown by the plugin config flow into the skill settings, then publish the skill.
3. Link the account in the Yandex app: **Devices → Add device → Smart Home** → select your published skill.

### Settings

- **Instance Name** — how this MA instance appears in the Yandex Smart Home app. Alice uses this name to address devices.
- **Connection Type** — `cloud`, `cloud_plus`, or `direct` (see above).
- **Exposed Players** — select which MA players to expose to Alice. Leave empty to expose all players.
- **Skill ID** and **Skill OAuth Token** — required for `cloud_plus` and `direct` modes, obtained from the [Yandex.Dialogs](https://dialogs.yandex.ru/developer/smart-home) developer console.

## Known Issues / Notes

- `play_media` is not supported by the Yandex Smart Home API, so Alice cannot start a specific song/album/playlist on an MA player — "включи музыку" only resumes the current queue.
- The `mode` capability supports up to 10 values, so only the first 10 entries of a player's source list are exposed to Alice.
- Seek is not supported by the Yandex Smart Home API for third-party media devices.
- Track name, artist and artwork cannot be pushed to Yandex — the API does not expose those fields for third-party devices.
- Direct mode requires a publicly reachable HTTPS endpoint for the MA webserver (via port forwarding, reverse proxy or similar); otherwise use one of the cloud modes.
