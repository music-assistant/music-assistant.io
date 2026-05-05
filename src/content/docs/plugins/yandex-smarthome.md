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
> «Alice, play music» on its own only resumes the current Music Assistant queue. As a workaround, you can pre-pick up to 10 playlists in the plugin settings — they map to fixed `mode(input_source)` slots `one`..`ten`, and Alice triggers them by ordinal: «Alice, switch \<player\> source to **five**». See [Playlists as voice-triggered input sources](#playlists-as-voice-triggered-input-sources).

> [!NOTE]
> Full plugin documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-smarthome](https://trudenboy.github.io/ma-provider-yandex-smarthome/)**


## Features

- Any MA player can be exposed to Yandex Alice for voice control as a smart home media device
- Automatic creation of the private Yandex Dialogs skill for `cloud_plus` and `direct` modes — no manual setup in the Yandex.Dialogs console
- Pre-picked MA library playlists exposed as `mode(input_source)` slots `one`..`ten`, so Alice can start a specific playlist by ordinal voice command (workaround for the lack of `play_media` in the Yandex Smart Home API)
- **Experimental** free-form voice playback via a separate Yandex Dialogs *custom skill* — say *«Алиса, попроси \<name\> включи Metallica на кухне»* and the plugin parses the phrase, searches MA, and starts playback (direct mode only — see [Experimental: Dialogs voice skill](#experimental-dialogs-voice-skill-free-form-playback))

### Supported voice commands

| Voice command | Action |
|---|---|
| «Alice, play music on \<name\>» | Play / resume the current queue |
| «Alice, power off \<name\>» | Stop playback |
| «Alice, turn up / turn down on \<name\>» | Volume up / down (±10) |
| «Alice, set volume to 50 on \<name\>» | Set volume to 50% |
| «Alice, pause on \<name\>» | Pause |
| «Alice, next / previous on \<name\>» | Next / previous track |
| «Alice, switch \<name\> source to \<one…ten\>» | Select input source by ordinal — covers both the player's native source list and pre-picked playlists (see [Playlists as voice-triggered input sources](#playlists-as-voice-triggered-input-sources)) |

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
- **Exposed Playlists** — multi-select of playlists from your MA library (any music provider), capped at 10. Each picked playlist becomes a `mode(input_source)` slot `one`..`ten` on every exposed player, in the order you select them. If your MA library is empty when the form opens, save and reopen once your music providers have finished syncing. See [Playlists as voice-triggered input sources](#playlists-as-voice-triggered-input-sources) for the full flow.
- **Skill ID** and **Skill OAuth Token** — required for `cloud_plus` and `direct` modes. **Skill ID** is filled in automatically after auto-create succeeds; **Skill OAuth Token** is obtained by opening the **OAuth URL** link the form shows next to the field (a pre-filled `oauth.yandex.ru/authorize?...` link tied to the Yandex.Dialogs skill-management OAuth app), approving access, and pasting the resulting `access_token` here. Once both are set, the plugin UI collapses them into a single **Open skill in Yandex.Dialogs** link to keep the default view clean; they remain editable under **Advanced**.

### Playlists as voice-triggered input sources

Because the Yandex Smart Home API has no `play_media` for third-party devices, the plugin uses the `mode(input_source)` capability as a workaround for voice-triggered playlist playback. The mechanism is **ordinal-only**: Alice recognises the fixed mode values `one`, `two`, …, `ten` and there is no way to assign a custom voice phrase to a specific slot — neither in the API nor in the *Home with Alice* app. You need to remember which playlist you put in which slot.

1. In the plugin settings, pick up to 10 playlists in **Exposed Playlists**. Native player sources keep priority and fill the first slots; playlists fill the remainder up to 10. The order you pick them in **is** the order Alice will address them by ordinal.
2. Say «Alice, switch \<player\> source to **five**» (or whichever ordinal corresponds to the playlist's slot). The plugin powers the player on if needed and starts the corresponding playlist via `mass.player_queues.play_media`.

> [!TIP]
> Keep your **Exposed Playlists** list short and stable, and use a memorable order (most-used playlist as `one`, second-most as `two`, …). If you reshuffle the multi-select, the ordinals shift with it.

> [!NOTE]
> Why ordinals only: the Yandex Smart Home API for `mode(input_source)` only accepts a fixed catalogue of values (`one`..`ten`) — `ModeValue` has no `display_name`/`alias`/`synonym` field, and the *Home with Alice* app does not let users rename mode values. This is a Yandex-side constraint, not a plugin limitation.

Arbitrary song or album requests by voice are still possible via the experimental **Dialogs voice skill** below — it bypasses the Smart Home `play_media` limit by registering a *separate* Yandex Dialogs skill that receives the user's raw voice phrase as a webhook call.

### Experimental: Dialogs voice skill (free-form playback)

A second, optional skill type — Yandex Dialogs *custom skill* («Навык») — adds free-form voice playback. Activation phrase: **«Алиса, попроси \<skill name\> …»**. The skill registers a webhook endpoint on MA's webserver; Yandex POSTs the user's transcribed phrase there, the plugin parses it server-side, searches MA, and starts playback.

> [!IMPORTANT]
> This feature is **direct-mode only** and **experimental**. The toggle and form fields appear only when `Connection Type = direct` and only after you've opted in via **Enable Dialogs voice skill (experimental)**. Cloud / Cloud Plus modes hide the section entirely.

Setup:

1. Pick **Connection Type = direct** and complete the Smart Home skill auto-create first (if you haven't already).
2. Toggle **Enable Dialogs voice skill (experimental)** on.
3. Choose a **Skill activation name** — at least two words, globally unique across all Yandex skills (Yandex enforces both). Russian names work best for voice recognition: `Музыкальный Ассистент`, `Домашняя Музыка`, `Мой Плеер` etc. Activation phrase becomes `«Алиса, попроси <name> …»`.
4. Press **Create Dialogs voice skill**. The plugin runs the same Device Flow login as Smart Home auto-create — first time you'll go through `ya.ru/device`, subsequent runs reuse the cached token. Pipeline: create app → upload logo → save draft (name, examples, category) → create OAuth app → request publish.
5. After the action returns, the form shows a **Skill in Yandex Dialogs dev console** link. Yandex's actual deploy is asynchronous — for private skills it usually completes in a few seconds, but under load can take up to ~10 minutes. The skill is unusable on Alice until the dev console shows «На воздухе» / `onAir: true`.

Once published, voice phrases work as follows:

| You say (after «Алиса, попроси \<name\> …»)              | What happens                                                |
|----------------------------------------------------------|-------------------------------------------------------------|
| `включи Metallica`                                       | search → first artist → start artist radio                  |
| `включи Metallica на кухне`                              | same, but on the player named "Кухня"                       |
| `включи песню Yesterday`                                 | track search → first match → play that track                |
| `включи альбом Black Album`                              | album search → first match → play that album                |
| `включи группу Beatles`                                  | artist radio explicitly                                     |
| `включи плейлист утренний джаз`                          | playlist search → first match → play that playlist          |
| `включи мою волну`                                       | yandex_music personal radio (`user:onyourwave`)             |
| `включи жанр джаз` / `включи радио рок`                  | genre rotor → fall back to artist radio                     |
| `включи Metallica на проигрывателе` / `на колонке` / …   | generic word for "speaker" → falls back to default player   |

Verbs the parser understands (Yandex's voice-to-text returns various forms, all are accepted): `включи / включите / включай / включайте / включить`, `поставь / поставьте / поставить`, `запусти / запустите / запустить`, `сыграй / сыграйте / сыграть`, `играй / играйте`, `послушай / послушайте / послушать`. The optional trailing `на <player>` suffix is stripped before kind classification, so word order is fixed to `<verb> <what> [на <where>]`.

Player names are matched against MA's `player.name` (case-insensitive, with Russian inflections normalised — *"Кухня"* matches *"на кухне"*). Aliases set in the *Home with Alice* app **do not** propagate into the dialog skill payload — Yandex only forwards the raw phrase. To use a custom voice name, rename the player in MA itself. Generic words like *колонка*, *плеер*, *проигрыватель*, *динамик* fall through to the previously-used player in the same conversation, or to the only exposed player.

Search prioritisation when no marker is given (`включи X`): **artist > album > track > playlist** with `radio_mode=True` — picking the artist matches the typical "play X music" intent and starts continuous playback. If you specifically want a playlist, say `плейлист X`; for an album, `альбом X`; for a single track, `песню X`.

If the parser cannot resolve to a player or a media item, Alice replies in Russian with a hint (`«Не нашёл такую музыку…»` / `«Не нашёл колонку …»`). For diagnostics, set log level for `music_assistant.providers.yandex_smarthome.dialogs_nlu` to `DEBUG` — every voice request will log the parsed kind, query, hint, candidate players, and the picked match tier.

Security:

- The webhook URL embeds a **random 32-character secret** (`/api/yandex_dialogs/webhook/<secret>`); knowing the secret requires access to the skill's Backend URL in the Yandex Dialogs dev console. Comparison is constant-time.
- The handler also checks `body.session.skill_id` against the configured skill ID before processing — a payload from a different skill returns `401`.
- The plugin uses MA's standard logging redaction; the secret is only logged as the last 4 characters of the path on startup.
- If you publish MA via a reverse proxy, expose only the prefixes `/api/yandex_smarthome/` (Smart Home) and `/api/yandex_dialogs/webhook/` (Dialogs). Block `/` to keep the rest of the MA API/UI off the public internet.

## Known Issues / Notes

- `play_media` is not supported by the Yandex Smart Home API for arbitrary songs or albums. The plugin works around this for **playlists** via `mode(input_source)`, but the trigger is ordinal only (`one`..`ten`) — the Yandex app has no UI to alias mode values, and `ModeValue` in the API has no `display_name`/`synonym` field. See [Playlists as voice-triggered input sources](#playlists-as-voice-triggered-input-sources).
- Seek is not supported by the Yandex Smart Home API for third-party media devices.
- Track name, artist and artwork cannot be pushed to Yandex — the API does not expose those fields for third-party devices.
- Direct mode requires a publicly reachable HTTPS endpoint for the MA webserver (via port forwarding, reverse proxy or similar); otherwise use one of the cloud modes.
- Automatic skill creation uses an undocumented Yandex.Dialogs API; manual fallback fields appear automatically if it breaks.
