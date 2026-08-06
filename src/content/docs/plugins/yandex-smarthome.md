---
title: "Yandex Smart Home Plugin"
description: Features and Notes for the Yandex Smart Home Plugin
---

# Yandex Smart Home

This plugin adds your Music Assistant players to <a href="https://alice.yandex.ru/smart-home" target="_blank" rel="noopener noreferrer">Yandex Smart Home</a> so you can control them by voice with Alice, the same way you would a lamp or a socket. Contributed and maintained by <a href="https://github.com/trudenboy" target="_blank" rel="noopener noreferrer">Mikhail Nevskiy</a>

Once set up, you can say things like «Alice, pause in the kitchen» or «Alice, set volume to 50 in the kitchen» and Music Assistant will do it. No audio goes through Yandex — this only carries the commands.

> [!CAUTION]
> This is an unofficial implementation and is not affiliated with or endorsed by Yandex.

> [!WARNING]
> **Alice cannot pick a song for you**
>
> Yandex does not let outside devices be asked for a particular song or album, so «Alice, play music» only resumes whatever is already queued in Music Assistant.
>
> There is a way round it for playlists: choose up to ten of them in the plugin settings and Alice can start any of them by number — «Alice, switch \<player\> source to **five**». See [Starting a playlist by voice](#starting-a-playlist-by-voice).

## Features

- Any Music Assistant player can be controlled by voice through Alice
- For the Cloud Plus and Direct modes, the plugin sets up your private Yandex skill for you, so there is nothing to do by hand on the Yandex developer site
- Up to ten of your playlists can be started by voice, by number
- If setting up the skill fails part way through, clicking the button again picks up where it left off rather than starting over

### Supported voice commands

| Voice command | Action |
|---|---|
| «Alice, play music on \<name\>» | Play / resume the current queue |
| «Alice, power off \<name\>» | Stop playback |
| «Alice, turn up / turn down on \<name\>» | Volume up / down (±10) |
| «Alice, set volume to 50 on \<name\>» | Set volume to 50% |
| «Alice, pause on \<name\>» | Pause |
| «Alice, next / previous on \<name\>» | Next / previous track |
| «Alice, switch \<name\> source to \<one…ten\>» | Switch to a source by number. This covers both the player's own sources and any playlists you have set up (see [Starting a playlist by voice](#starting-a-playlist-by-voice)) |

Muting only works on players that support it.

## Configuration

Go to **Settings → Plugins → Add a Plugin** and add **Yandex Smart Home**. The rest of the setup happens in the plugin's own settings dialog, described below.

There are three ways the plugin can connect. Pick the one that suits your setup:

- **Cloud** — the simplest. Everything goes through the shared <a href="https://yaha-cloud.ru/" target="_blank" rel="noopener noreferrer">Yaha Cloud</a> service, so your Music Assistant does not need to be reachable from the internet. Only one thing per Yandex account can use it, so if you already have Yaha Cloud linked to something else such as Home Assistant, use Cloud Plus instead. See [Cloud setup](#cloud-setup).
- **Cloud Plus** — the same service, but with your own private skill rather than the shared one. Use this if Yaha Cloud is already taken on your account. See [Setting up your skill](#setting-up-your-skill) and then [Cloud Plus setup](#cloud-plus-setup).
- **Direct** — Yandex talks to your Music Assistant server itself, with nothing in between. Nothing shared, but your server has to be reachable from the internet over HTTPS. See [Setting up your skill](#setting-up-your-skill) and then [Direct setup](#direct-setup).

### Setting up your skill

Cloud Plus and Direct both need a private skill on Yandex. The plugin creates it for you, so you do not have to go anywhere near the Yandex developer site:

1. The plugin asks you to sign in at `ya.ru/device`. A small window opens with a code to confirm.
2. It then creates the skill on Yandex and sets everything up.
3. The **Skill ID** field fills in on its own. You still have to fetch the **Skill OAuth Token** yourself, which is a separate step described below.

If any of that fails part way through, just click the button again — it carries on from where it stopped rather than starting over, and you only have to confirm the sign-in code once.

> [!NOTE]
> This relies on part of Yandex that they do not publish or promise to keep stable. If it ever stops working, the Skill ID, Skill OAuth Token and Backend URL fields are still there in the settings so you can fill them in yourself, and a link to the Yandex developer site is shown alongside them.

### Cloud setup

Nothing to create, nothing to expose to the internet. You sign your Music Assistant up to the shared Yaha Cloud service and then link it in the Yandex app with a one-off code:

1. Add the **Yandex Smart Home** plugin in Music Assistant settings and set the connection type to `cloud`.
2. Click **Register with cloud**.
3. Click **Get OTP code** to get a one-off linking code.
4. In the Yandex app on your phone go to **Devices → Add device → Smart Home**, find **Yaha Cloud** and type in the code.

### Cloud Plus setup

Use this if Yaha Cloud is already linked to something else on your Yandex account, or if you would rather have your own private skill. The settings form takes you through three steps, and each one only appears once you have finished the one before it:

1. **Register with cloud** — signs your Music Assistant up to the service.
2. **Auto-create Smart Home skill** — creates your private skill, as described above. The **Skill ID** fills in on its own. The form then shows a Yandex link — open it, approve access, and copy the long value that comes back into **Skill OAuth Token**.
3. **Get OTP code + link in Yandex app** — click **Get OTP code**, then in the Yandex app go to **Devices → Add device → Smart Home**, find your own skill and type in the code.

### Direct setup

Yandex talks to your Music Assistant server itself, so your server has to be reachable from the internet over HTTPS. The plugin still creates the skill for you:

1. Add the **Yandex Smart Home** plugin and set the connection type to `direct`. Your **Base URL** (Settings → Core → Webserver → Base URL) needs to be an address reachable from the internet over HTTPS. If you would rather keep that pointing at your local address, put the public one in the plugin's own **External Base URL** setting instead — only Yandex will use it.
2. Click **Auto-create Smart Home skill**. When it finishes, the form shows a Yandex link — open it, approve access, copy the long value that comes back into **Skill OAuth Token** and save.
3. In the Yandex app go to **Devices → Add device → Smart Home** and pick your skill.

### Settings

- **Instance Name** — the name this Music Assistant is given in the Yandex Smart Home app.
- **Connection Type** — `cloud`, `cloud_plus`, or `direct` (see above).
- **External Base URL** — for `direct` only. A public HTTPS address for Yandex to use, so your normal Base URL can stay pointing at your local address and your Home Assistant and local web interface keep working as they are.
- **Exposed Players** — which players Alice can control. Leave it empty for all of them.
- **Exposed Playlists** — up to ten playlists from your library, from any music source, that Alice can start by number. If the list comes up empty, save and open the settings again once your music sources have finished syncing. See [Starting a playlist by voice](#starting-a-playlist-by-voice).
- **Skill ID** and **Skill OAuth Token** — needed for `cloud_plus` and `direct`. The Skill ID fills in on its own once the skill has been created. For the token, open the Yandex link shown in the form, approve access, and paste the long value that comes back in here.

### Starting a playlist by voice

Alice cannot be asked for a playlist by name, because Yandex only lets outside devices offer a fixed set of sources numbered `one` to `ten`. There is no way to give those numbers your own names, either in the Yandex app or anywhere else. So you pick the playlists in advance and remember which is which.

1. In the plugin settings, choose up to ten playlists under **Exposed Playlists**. If the player has sources of its own those come first, and your playlists fill whatever is left up to ten. The order you pick them in is the order Alice will know them by.
2. Say «Alice, switch \<player\> source to **five**», using whichever number that playlist ended up as. The player switches on if it needs to and the playlist starts.

> [!TIP]
> Keep the list short and leave it alone once you are happy with it. Put the playlist you use most first, the next most second, and so on. Reordering the list changes all the numbers.

## Known Issues / Notes

- Alice cannot be asked for a particular song or album, only for a playlist by number. If you want to ask for music by name, use the <a href="https://github.com/trudenboy/ma-provider-yandex-alice" target="_blank" rel="noopener noreferrer">Yandex Alice plugin</a> instead.
- Alice cannot skip to a point within a track.
- The track name, artist and artwork are not passed to Yandex, so they will not show up there.
- Direct mode needs your Music Assistant server to be reachable from the internet over HTTPS. If it is not, use one of the cloud options.
- Creating the skill relies on part of Yandex that they do not publish. If it breaks, the settings still let you fill everything in yourself.
