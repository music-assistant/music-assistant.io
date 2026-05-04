---
title: "Yandex Smart Home Plugin"
description: Features and Notes for the Yandex Smart Home Plugin
---

# Yandex Smart Home

Music Assistant can expose its players to [Yandex Smart Home](https://alice.yandex.ru/smart-home), so they can be controlled by Alice voice assistant as smart home multimedia devices.

Cloud connection modes use the [yaha-cloud.ru](https://yaha-cloud.ru/) relay.
The implementation follows the [dext0r/yandex_smart_home](https://github.com/dext0r/yandex_smart_home) reference integration.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> The Yandex Smart Home API does not support `play_media` for third-party devices, so Alice cannot start an arbitrary song or album by voice through this plugin.
> «Alice, play music» on its own only resumes the current Music Assistant queue. As a workaround, you can pre-pick up to 10 playlists in the plugin settings — they appear as `mode(input_source)` slots that you can label in the Yandex app and trigger by name (e.g. «Alice, switch \<name\> to Rock»). See [Playlists as voice-triggered input sources](#playlists-as-voice-triggered-input-sources).

> [!NOTE]
> Full plugin documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-smarthome](https://trudenboy.github.io/ma-provider-yandex-smarthome/)**


## Features

- Any MA player can be exposed to Yandex Alice for voice control as a smart home media device
- Automatic creation of the private Yandex Dialogs skill for `cloud_plus` and `direct` modes — no manual setup in the Yandex.Dialogs console
- Pre-picked MA library playlists exposed as named `mode(input_source)` slots, so Alice can start a specific playlist by voice (workaround for the lack of `play_media` in the Yandex Smart Home API)

### Supported voice commands

| Voice command | Action |
|---|---|
| «Alice, play music on \<name\>» | Play / resume the current queue |
| «Alice, power off \<name\>» | Stop playback |
| «Alice, turn up / turn down on \<name\>» | Volume up / down (±10) |
| «Alice, set volume to 50 on \<name\>» | Set volume to 50% |
| «Alice, pause on \<name\>» | Pause |
| «Alice, next / previous on \<name\>» | Next / previous track |
| «Alice, change input on \<name\> to \<source\>» | Select input source (player source list and/or pre-picked playlist) |
| «Alice, switch \<name\> to Rock» (or any custom alias) | Start the playlist you mapped to that mode in the Yandex app — see [Playlists as voice-triggered input sources](#playlists-as-voice-triggered-input-sources) |

### Yandex Smart Home capabilities

| Yandex capability | Mapped MA action | Notes |
|---|---|---|
| `on_off` | `play()` / `stop()` | "power on" resumes the current queue, "power off" stops |
| `range(volume)` | `volume_set()` | Absolute and relative (±) |
| `toggle(mute)` | `volume_mute()` | Only if the player supports mute |
| `toggle(pause)` | `play()` / `pause()` | |
| `range(channel)` | `next_track()` / `previous_track()` | Relative only: +1 = next, -1 = prev |
| `mode(input_source)` | `select_source()` or `play_media()` (playlist) | Native player sources first, then pre-picked playlists fill the remaining slots up to 10 |

## Configuration

The plugin supports three connection modes — pick the one that matches your network setup:

- **Cloud** — uses the public [yaha-cloud.ru](https://yaha-cloud.ru/) skill as a relay. Easiest setup, no public URL required. Only one instance per Yandex account — if Yaha Cloud is already linked (e.g. from Home Assistant), use **Cloud Plus** instead. Follow [Cloud setup](#cloud-setup) below.
- **Cloud Plus** — uses a private skill via the same relay. Required for multi-integration setups on the same account. Follow [Automatic skill creation](#automatic-skill-creation-cloud-plus--direct) and then [Cloud Plus setup](#cloud-plus-setup) below.
- **Direct** — Yandex calls your MA server directly over HTTPS. No relay required, but your Music Assistant webserver must be reachable on a public HTTPS URL. Follow [Automatic skill creation](#automatic-skill-creation-cloud-plus--direct) and then [Direct setup](#direct-setup) below.

### Automatic skill creation (Cloud Plus / Direct)

For `cloud_plus` and `direct` modes the plugin creates the private Yandex Dialogs skill for you — no copy-paste into the Yandex.Dialogs console is required. The flow:

1. The config form asks you to sign in at `ya.ru/device` via OAuth Device Flow (a short popup with a verification code).
2. The plugin then drives `dialogs.yandex.ru/developer/app-store-api` end-to-end: create the skill, upload the logo, update the draft, create and attach an OAuth app, and request deploy.
3. The skill UUID is written back into **Skill ID** automatically. You still need to paste the **Skill OAuth Token** yourself (that flow is separate).

Partial failures are resumable: the plugin persists step-level artifacts and a retry continues from the last completed step rather than starting over.

> [!NOTE]
> Automatic skill creation uses an undocumented Yandex.Dialogs API. If Yandex changes it and auto-create fails, the config form automatically unfolds copy-paste fields (Backend URL, Client ID, Client Secret, Auth/Token URLs, link to the Yandex.Dialogs console) so you can finish the setup by hand without leaving Music Assistant settings. All of these values also stay available under **Advanced** after a successful setup.

### Cloud setup

The simplest mode — no skill creation, no public URL. You register your MA instance against the shared Yaha Cloud skill and link it in the Yandex app with a one-time code:

1. Add the **Yandex Smart Home** plugin in Music Assistant settings and select `cloud` as the connection type.
2. Click **Register with cloud** — the plugin creates an instance on the `yaha-cloud.ru` relay.
3. Click **Get OTP code** to receive a one-time linking code.
4. In the Yandex app on your phone: **Devices → Add device → Smart Home**, find **Yaha Cloud** and enter the OTP.

### Cloud Plus setup

Use this when Yaha Cloud is already linked on your Yandex account (e.g. from Home Assistant) or when you want a private skill on the relay. The config form is split into three numbered steps and walks you through creating a private skill, registering on the relay and linking it in the Yandex app:

1. **Register with cloud** — creates an instance on the `yaha-cloud.ru` relay.
2. **Create skill** — launches the automatic skill-creation flow described above (Device Flow login + skill creation). On success the Skill ID is filled in automatically and the form unfolds an **OAuth URL** field. Open exactly that URL in your browser, approve access, then copy the `access_token` value from the resulting URL into **Skill OAuth Token**.
3. **Get OTP code + link in Yandex app** — click **Get OTP code**, then in the Yandex app: **Devices → Add device → Smart Home**, find your private skill and enter the OTP.

Each step only appears once the previous one is complete. Later steps are hidden until they're actually relevant.

### Direct setup

No relay involved — Yandex calls your MA server directly, so you need a publicly reachable HTTPS URL. Your MA acts as the skill backend; the plugin still creates the private skill for you and you only need to link the account in the Yandex app at the end:

1. Add the **Yandex Smart Home** plugin and select `direct`. Ensure your MA **Base URL** (Settings → Core → Webserver → Base URL) is a publicly reachable HTTPS URL.
2. Click **Create skill** — the plugin runs the automatic skill-creation flow (Device Flow login + skill creation) against Yandex.Dialogs using your MA server as the backend. On success the form unfolds an **OAuth URL** field — open exactly that URL in your browser, approve access, then copy the `access_token` value from the resulting URL into **Skill OAuth Token** and save.
3. Link the account in the Yandex app: **Devices → Add device → Smart Home** → select your published skill.

### Settings

- **Instance Name** — how this MA instance appears in the Yandex Smart Home app. Alice uses this name to address devices.
- **Connection Type** — `cloud`, `cloud_plus`, or `direct` (see above).
- **Exposed Players** — select which MA players to expose to Alice. Leave empty to expose all players.
- **Exposed Playlists** — multi-select of playlists from your MA library (any music provider), capped at 10. Each picked playlist becomes a `mode(input_source)` slot on every exposed player. If your MA library is empty when the form opens, save and reopen once your music providers have finished syncing. See [Playlists as voice-triggered input sources](#playlists-as-voice-triggered-input-sources) for the full flow.
- **Skill ID** and **Skill OAuth Token** — required for `cloud_plus` and `direct` modes. **Skill ID** is filled in automatically after auto-create succeeds; **Skill OAuth Token** is obtained by opening the **OAuth URL** link the form shows next to the field (a pre-filled `oauth.yandex.ru/authorize?...` link tied to the Yandex.Dialogs skill-management OAuth app), approving access, and pasting the resulting `access_token` here. Once both are set, the plugin UI collapses them into a single **Open skill in Yandex.Dialogs** link to keep the default view clean; they remain editable under **Advanced**.

### Playlists as voice-triggered input sources

Because the Yandex Smart Home API has no `play_media` for third-party devices, the plugin uses the `mode(input_source)` capability as a workaround for voice-triggered playlist playback:

1. In the plugin settings, pick up to 10 playlists in **Exposed Playlists**. Native player sources keep priority — playlists fill the remaining slots up to 10.
2. After saving, open the device in the Yandex app and assign voice aliases to the mode values (`one`, `two`, …, `ten`) — e.g. label `one` "Rock", `two` "Jazz". The mode values themselves are fixed by the API; the human-readable names are an Yandex-app feature.
3. Say «Alice, switch \<player\> to Rock» (or whatever alias you set). The plugin powers the player on if needed and starts the corresponding playlist via `mass.player_queues.play_media`.

This is the only voice path for selecting specific content. Arbitrary song or album requests by voice are still not possible — the Yandex API doesn't expose them to third parties.

## Known Issues / Notes

- `play_media` is not supported by the Yandex Smart Home API for arbitrary songs or albums. The plugin works around this for **playlists** via `mode(input_source)` (see [Playlists as voice-triggered input sources](#playlists-as-voice-triggered-input-sources)), but ad-hoc track or album requests by voice are not possible.
- Seek is not supported by the Yandex Smart Home API for third-party media devices.
- Track name, artist and artwork cannot be pushed to Yandex — the API does not expose those fields for third-party devices.
- Direct mode requires a publicly reachable HTTPS endpoint for the MA webserver (via port forwarding, reverse proxy or similar); otherwise use one of the cloud modes.
- Automatic skill creation uses an undocumented Yandex.Dialogs API; manual fallback fields appear automatically if it breaks.
