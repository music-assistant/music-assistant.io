---
title: "Yandex Smart Home Plugin"
description: Features and Notes for the Yandex Smart Home Plugin
---

# Yandex Smart Home

Music Assistant can expose its players to [Yandex Smart Home](https://alice.yandex.ru/smart-home), so they can be controlled by Alice voice assistant as smart home multimedia devices.

Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).
Cloud connection modes use the [yaha-cloud.ru](https://yaha-cloud.ru/) relay.
The implementation follows the [dext0r/yandex_smart_home](https://github.com/dext0r/yandex_smart_home) reference integration.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> The Yandex Smart Home API does not support `play_media` for third-party devices.
> Voice commands like «Алиса, включи музыку» will only resume the current Music Assistant queue — a specific track, album or playlist cannot be started by voice through this plugin.

> [!NOTE]
> Full plugin documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-smarthome](https://trudenboy.github.io/ma-provider-yandex-smarthome/)**


## Features

|     Function      |          Note           |
|:-----------------------|:---------------------:|
| Exposes MA players to Yandex SmartHome | Yes |
| Device type | Multimedia |
| Connection modes | Cloud, Cloud Plus, Direct |
| Automatic skill creation | Yes (Cloud Plus / Direct) |

### Supported voice commands

| Voice command | Action |
|---|---|
| «Alice, play music on \<name\>» | Play / resume the current queue |
| «Alice, power off \<name\>» | Stop playback |
| «Alice, turn up / turn down on \<name\>» | Volume up / down (±10) |
| «Alice, set volume to 50 on \<name\>» | Set volume to 50% |
| «Alice, pause on \<name\>» | Pause |
| «Alice, next / previous on \<name\>» | Next / previous track |
| «Alice, change input on \<source\> на \<name\>» | Select input source (if the player exposes a source list) |

### Yandex Smart Home capabilities

| Yandex capability | Mapped MA action | Notes |
|---|---|---|
| `on_off` | `play()` / `stop()` | "power on" resumes the current queue, "power off" stops |
| `range(volume)` | `volume_set()` | Absolute and relative (±) |
| `toggle(mute)` | `volume_mute()` | Only if the player supports mute |
| `toggle(pause)` | `play()` / `pause()` | |
| `range(channel)` | `next_track()` / `previous_track()` | Relative only: +1 = next, -1 = prev |
| `mode(input_source)` | `select_source()` | Uses the player's source list by index (up to 10) |

## Configuration

The plugin supports three connection modes — pick the one that matches your network setup:

- **Cloud** — uses the public [yaha-cloud.ru](https://yaha-cloud.ru/) skill as a relay. Easiest setup, no public URL required. Only one instance per Yandex account — if Yaha Cloud is already linked (e.g. from Home Assistant), use **Cloud Plus** instead.
- **Cloud Plus** — uses a private skill via the same relay. Required for multi-integration setups on the same account.
- **Direct** — Yandex calls your MA server directly over HTTPS. No relay required, but your Music Assistant webserver must be reachable on a public HTTPS URL.

### Automatic skill creation (Cloud Plus / Direct)

For `cloud_plus` and `direct` modes the plugin creates the private Yandex Dialogs skill for you — no copy-paste into the Yandex.Dialogs console is required. The flow:

1. The config form asks you to sign in at `ya.ru/device` via OAuth Device Flow (a short popup with a verification code).
2. The plugin then drives `dialogs.yandex.ru/developer/app-store-api` end-to-end: create the skill, upload the logo, update the draft, create and attach an OAuth app, and request deploy.
3. The skill UUID is written back into **Skill ID** automatically. You still need to paste the **Skill OAuth Token** yourself (that flow is separate).

Partial failures are resumable: the plugin persists step-level artifacts and a retry continues from the last completed step rather than starting over.

> [!NOTE]
> Automatic skill creation uses an undocumented Yandex.Dialogs API. If Yandex changes it and auto-create fails, the config form automatically unfolds copy-paste fields (Backend URL, Client ID, Client Secret, Auth/Token URLs, link to the Yandex.Dialogs console) so you can finish the setup by hand without leaving Music Assistant settings. All of these values also stay available under **Advanced** after a successful setup.

### Cloud setup

1. Add the **Yandex Smart Home** plugin in Music Assistant settings and select `cloud` as the connection type.
2. Click **Register with cloud** — the plugin creates an instance on the `yaha-cloud.ru` relay.
3. Click **Get OTP code** to receive a one-time linking code.
4. In the Yandex app on your phone: **Devices → Add device → Smart Home**, find **Yaha Cloud** and enter the OTP.

### Cloud Plus setup

The config form is split into three numbered steps:

1. **Register with cloud** — creates an instance on the `yaha-cloud.ru` relay.
2. **Create skill** — launches the automatic skill-creation flow described above (Device Flow login + skill creation). On success the Skill ID is filled in automatically; paste your Skill OAuth Token from [Yandex OAuth](https://oauth.yandex.ru/).
3. **Get OTP code + link in Yandex app** — click **Get OTP code**, then in the Yandex app: **Devices → Add device → Smart Home**, find your private skill and enter the OTP.

Each step only appears once the previous one is complete. Later steps are hidden until they're actually relevant.

### Direct setup

1. Add the **Yandex Smart Home** plugin and select `direct`. Ensure your MA **Base URL** (Settings → Core → Webserver → Base URL) is a publicly reachable HTTPS URL.
2. Click **Create skill** — the plugin runs the automatic skill-creation flow (Device Flow login + skill creation) against Yandex.Dialogs using your MA server as the backend.
3. Paste your Skill OAuth Token from [Yandex OAuth](https://oauth.yandex.ru/) and save.
4. Link the account in the Yandex app: **Devices → Add device → Smart Home** → select your published skill.

### Settings

- **Instance Name** — how this MA instance appears in the Yandex Smart Home app. Alice uses this name to address devices.
- **Connection Type** — `cloud`, `cloud_plus`, or `direct` (see above).
- **Exposed Players** — select which MA players to expose to Alice. Leave empty to expose all players.
- **Skill ID** and **Skill OAuth Token** — required for `cloud_plus` and `direct` modes. **Skill ID** is filled in automatically after auto-create succeeds; **Skill OAuth Token** is obtained from [Yandex OAuth](https://oauth.yandex.ru/) and pasted manually. Once both are set, the plugin UI collapses them into a single **Open skill in Yandex.Dialogs** link to keep the default view clean; they remain editable under **Advanced**.

## Known Issues / Notes

- `play_media` is not supported by the Yandex Smart Home API, so Alice cannot start a specific song/album/playlist on an MA player — "play music" only resumes the current queue.
- Seek is not supported by the Yandex Smart Home API for third-party media devices.
- Track name, artist and artwork cannot be pushed to Yandex — the API does not expose those fields for third-party devices.
- Direct mode requires a publicly reachable HTTPS endpoint for the MA webserver (via port forwarding, reverse proxy or similar); otherwise use one of the cloud modes.
- Automatic skill creation uses an undocumented Yandex.Dialogs API; manual fallback fields appear automatically if it breaks.
