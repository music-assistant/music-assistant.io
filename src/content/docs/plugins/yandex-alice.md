---
title: "Yandex Alice Plugin"
description: Features and Notes for the Yandex Alice Plugin
---

# Yandex Alice

Music Assistant can expose its players to [Yandex Alice](https://alice.yandex.ru/) as a [Yandex Dialogs](https://dialogs.yandex.ru/developer) custom skill ("aliceSkill" / *«Навык»*), so users can control playback by voice using free-form Russian phrases.

Activation phrase is **«Алиса, попроси \<skill name\> …»** — Yandex transcribes the rest of the phrase and POSTs it to a webhook on Music Assistant. The plugin parses the phrase server-side (Russian NLU: verb stripping, inflection-aware player matching, ordinal disambiguation), resolves the addressed player and the requested media, and dispatches the parsed intent to MA playback actions.

This is the **voice-skill side** of the Yandex integration, extracted from [Yandex Smart Home Plugin](/plugins/yandex-smarthome) into its own plugin so users who only want voice control don't have to deal with the Smart Home device-bridge configuration, and vice versa.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> Music Assistant must be reachable on a **public HTTPS URL** — Yandex POSTs voice phrases to your MA server directly. There is no cloud relay for Dialogs custom skills.

> [!NOTE]
> Full plugin documentation (RU/EN): **[trudenboy.github.io/ma-provider-yandex-alice](https://trudenboy.github.io/ma-provider-yandex-alice/)**
>
> For Smart Home device-bridge integration (volume, on/off, playlists as input sources via the Smart Home API) see [Yandex Smart Home Plugin](/plugins/yandex-smarthome). The two plugins can run side by side on the same MA instance.


## Features

- Free-form Russian voice playback: search-and-play artists / albums / tracks / playlists / genres, control transport (pause / next / previous / seek), control queue (shuffle / repeat / add-to-queue), control multi-room (transfer / play-on-other-player / list speakers), and ask now-playing
- **Automatic skill creation** — one click in the config form runs OAuth Device Flow at `ya.ru/device`, then drives the Yandex Dialogs API end-to-end (CSRF → create app → upload logo → update draft → request deploy). Skill ID is filled in automatically. No manual setup in the Yandex.Dialogs console required
- **Self-resuming flow** — the same auto-create button doubles as «Confirm and continue» / «Resume» / «Re-create» / «Retry» depending on persisted state. Partial failures resume from the last completed step on the next click
- **Rename action** — sync the current `Skill name` to Yandex (PATCH draft + re-deploy) using the cached x_token. Drift detection LABEL appears when MA-side name differs from what's in Yandex
- **Russian NLU** — handles inflected forms (*кухню* → kitchen, *спальни* → bedroom), case-insensitive partial matches, fuzzy player-name resolution
- **Voice-first disambiguation** — when a player name is ambiguous, the skill replies *«первая, вторая или третья?»* and resolves the user's spoken ordinal answer

### Supported voice commands

After «Алиса, попроси \<skill name\> …»:

| Voice command | Action |
|---|---|
| `включи Metallica` | search → first artist → start artist radio |
| `включи Metallica на кухне` | same, but on the player named *"Кухня"* |
| `включи песню Yesterday` | track search → first match → play that track |
| `включи альбом Black Album` | album search → first match → play that album |
| `включи группу Beatles` | artist radio explicitly |
| `включи плейлист утренний джаз` | playlist search → first match → play that playlist |
| `включи мою волну` | yandex_music personal radio (`user:onyourwave`) |
| `включи жанр джаз` / `включи радио рок` | genre rotor → fall back to artist radio |
| `что играет` | now-playing announcement |
| `поставь на паузу` / `продолжи` / `стоп` | pause / resume / stop |
| `следующий трек` / `предыдущий` | skip ±1 |
| `громче` / `тише` | volume ±10 |
| `громкость 50` | absolute volume |
| `выключи звук` / `включи звук` | mute / unmute |
| `перемешай` / `выключи перемешивание` | shuffle on/off |
| `повтор песни` / `повтор очереди` / `повторяй` / `выключи повтор` | repeat one / all / off |
| `перемотай вперёд на минуту` / `назад на 30 секунд` / `к началу` | seek |
| `добавь Iron Maiden` | search → enqueue at end of queue |
| `переведи на спальню` / `продолжи в спальне` | transfer queue to another player |
| `включи на кухне` / `что играет на кухне` | address a different player without transfer |
| `список колонок` | enumerate exposed players |
| `забудь колонку` | clear "preferred player" memory |

Player names are matched against MA's `player.name` (case-insensitive, with Russian inflections normalised — *«Кухня»* matches *«на кухне»*). Generic words like *колонка* / *плеер* / *проигрыватель* / *динамик* fall through to the previously-used player in the same conversation, or to the only exposed player.

Verbs the parser understands (Yandex's voice-to-text returns various forms, all are accepted): `включи / включите / включай / включайте / включить`, `поставь / поставьте / поставить`, `запусти / запустите / запустить`, `сыграй / сыграйте / сыграть`, `играй / играйте`, `послушай / послушайте / послушать`. The optional trailing `на <player>` suffix is stripped before kind classification, so word order is fixed to `<verb> <what> [на <where>]`.

Search prioritisation when no marker is given (`включи X`): **artist > album > track > playlist** with `radio_mode=True` — picking the artist matches the typical "play X music" intent and starts continuous playback. If you specifically want a playlist, say `плейлист X`; for an album, `альбом X`; for a single track, `песню X`.

## Configuration

### Automatic skill creation

The config form's **Create skill** button registers the skill in Yandex Dialogs for you — no copy-paste into the developer console required. The flow is **self-resuming across clicks**: each click advances the state machine by one external-IO step, so HTTP / proxy timeouts can't strand the flow. Stages and what each click does:

1. **First click — Create skill.** The plugin calls Yandex Passport's OAuth Device Flow. The form re-renders with a `user_code` (e.g. `ABCD-1234`) and a verification URL. Open `ya.ru/device` in your browser, enter the code, confirm.
2. **Second click — Confirm and continue.** The plugin polls the Device Flow once with a short window. If you've confirmed the code, it captures the `x_token`, refreshes Passport cookies, and runs the OAuth-free `aliceSkill` pipeline end-to-end (`fetch_csrf → create_app → upload_logo → update_draft → request_deploy`). On success **Skill ID** is filled in automatically.
3. If the underlying user_code expires or the pipeline fails partway (e.g. duplicate skill name), the button label flips to **Retry** and the LABEL above shows what went wrong. Fix the cause (change the skill name, retry) and click again — the pipeline resumes from the last completed step rather than starting from scratch.

The **Cancel** button appears next to **Create skill** while a Device Flow session is pending or after a failure. It drops the in-flight session and resets artifacts; the cached `x_token` is preserved so the next Create click can skip Passport login.

> [!NOTE]
> Yandex's deploy is asynchronous — for `aliceSkill` skills it usually takes 5-15 minutes under typical moderation queue conditions. The skill is unusable on Alice until the dev console shows *«На воздухе»* / `onAir: true`. The success message links the user to the skill's dev-console page so you can check on-air status at your convenience.

### Cached x_token reuse

The Yandex Passport `x_token` from the first successful Device Flow is cached in encrypted config. Subsequent `Re-create` and `Rename` clicks reuse it (no Passport re-login) within the token's lifetime — it's long-lived (months) and silently dropped on any 401 from Yandex.

### Rename action

Once a skill exists, a **Rename skill in Yandex** button appears in the form (visible only when both Skill ID and cached `x_token` are present). Click it to apply the current `Skill name` value to the existing skill in Yandex Dialogs (`PATCH /draft/update` + `request_deploy`). Uses the cached `x_token` — no re-authentication required.

A drift-detection LABEL appears above the button when the MA-side `Skill name` differs from `last_known_name` in the persisted artifacts (i.e. you changed the name in MA but haven't synced it yet). Click **Rename** to push the change.

> [!TIP]
> The `Skill name` is what users say to invoke the skill: *«Алиса, попроси \<this name\> …»*. Pick at least two words, globally unique across all Yandex skills (Yandex enforces both). Russian names work best for voice recognition: `Музыкальный Ассистент`, `Домашняя Музыка`, `Мой Плеер`, etc.

### Manual setup (fallback)

If the automatic skill creation breaks (Yandex changes their undocumented dev-console API), you can still set up the skill by hand:

1. Create a custom dialog skill at <https://dialogs.yandex.ru/developer>.
2. Set its **Backend URL** to `<external_base_url>/api/yandex_dialogs/webhook/<webhook-secret>` (the form pre-fills `<webhook-secret>` for you).
3. Save and request publication; wait for moderation to finish.
4. Copy the **Skill ID** (the UUID in the dev console URL) into the plugin's config form by hand. **Enable dialog skill** on. Save.

### Settings

- **Instance name** — internal display name for this plugin instance.
- **External base URL** — public HTTPS URL where Yandex can reach your MA webserver (e.g. `https://ma.example.com`). Leave empty to use MA's global Base URL setting. Required for auto-create.
- **Enable dialog skill** — turn this on once the skill is created (auto or manual) and the credentials below are populated.
- **Skill name** — display name pushed to Yandex Dialogs on auto-create / rename. Min 2, max 64 characters.
- **Skill ID** — UUID of the skill. Populated automatically after a successful auto-create, or paste manually if you set up the skill yourself.
- **Skill OAuth token** — optional; used for future state-callback push features (stored encrypted).
- **Webhook URL secret** — random secret embedded in the webhook URL. Pre-filled with a fresh value on first open; click 'Save' to commit. Stable across action clicks once generated.
- **Voice-controllable players** — multi-select of MA players the skill is allowed to control. Leave empty to expose all players.
- **Voice-addressable playlists** — optional curated list of playlists the user can ask for by name. Leave empty for full library search.

## Multi-room

Players are addressed by their MA name with Russian inflection support:

- *«Алиса, попроси \<skill name\> включи джаз на кухне»* — start playback on the player named *«Кухня»*
- *«… что играет на кухне»* — ask now-playing on a specific player
- *«… переведи на спальню»* — transfer the active queue to another player
- *«… продолжи в спальне»* — same, but with explicit "continue" semantics

Aliases set in the *Home with Alice* app **do not** propagate into the dialog skill payload — Yandex only forwards the raw phrase. To use a custom voice name, rename the player in MA itself.

## Disambiguation

When a phrase matches multiple players (e.g. you have *«Кухня»* and *«Кухня small»*), the skill responds *«первая, вторая или третья?»* and waits for the user's spoken ordinal. The conversation state survives across requests via Yandex's session/state envelopes — there is no in-process cache. The skill recognises a wide range of ordinal forms (`первая` / `первый` / `первое` / `первое из`, `вторая`, `третий`, …, both feminine and masculine, both nominative and genitive).

## Security notes

- The webhook URL embeds a **random URL-safe 24-byte secret** (`/api/yandex_dialogs/webhook/<secret>`); knowing the secret requires access to the skill's Backend URL field in the Yandex Dialogs dev console. The secret is stable across action clicks (regeneration only happens on first form open if the field is empty).
- The handler also checks `body.session.skill_id` against the configured skill ID before processing — a payload from a different skill returns `401`.
- The plugin uses MA's standard logging redaction; the secret is only logged as the last 4 characters of the path on startup.
- The cached `x_token` is stored in MA's encrypted config (SECURE_STRING entry) and is never logged in plaintext.
- If you publish MA via a reverse proxy, expose only the prefix `/api/yandex_dialogs/webhook/`. Block `/` to keep the rest of the MA API/UI off the public internet.

## Known Issues / Notes

- Direct mode requires a publicly reachable HTTPS endpoint for the MA webserver (port forwarding, reverse proxy or similar). There is no cloud-relay alternative for Dialogs custom skills.
- Automatic skill creation uses an **undocumented** Yandex Dialogs developer-console API. If Yandex changes the contract, manual setup at <https://dialogs.yandex.ru/developer> remains the supported fallback.
- After `request_deploy` Yandex moderation takes 5-15 minutes for `aliceSkill` skills. The dev-console link in the success message lets you check on-air status.
- This plugin uses `mode(input_source)` capability indirectly: free-form voice phrases are parsed server-side, so the Yandex Smart Home `play_media` limit does not apply here. For ordinal-only playlist triggering via the Smart Home API see [Yandex Smart Home Plugin](/plugins/yandex-smarthome).
- The skill name displayed to users is what they say to invoke it (*«Алиса, попроси \<this\> …»*) — Yandex enforces minimum 2 words and global uniqueness across all skills.
