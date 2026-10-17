---
title: WLED Audio Sync Plugin
description: Make your WLED lights run their sound-reactive effects in time with whatever is playing.
pluginGroup: visuals
---

# WLED Audio Sync <img src="/assets/icons/wled-icon.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

This plugin makes your <a href="https://kno.wled.ge/" target="_blank" rel="noopener noreferrer">WLED</a> lights react to whatever Music Assistant is playing. WLED already has sound-reactive effects that normally listen to a microphone or line-in on the device. This plugin feeds them the music instead, over your network, so they follow exactly what is coming out of your speakers with no microphone needed.

Each sync zone you add shows up in Music Assistant as a light player, which you group with the player the music is coming from. Every WLED device set to that zone's port joins in, so one zone can light up a whole room. Add the plugin again for each extra zone.

> [!CAUTION]
> This plugin is marked experimental. Functionality may change and bugs may occur, and the default brightness response is still being tuned.

## Features

- Drives WLED's own built-in audio-reactive effects, so every sound-reactive effect on the device works as it would with a microphone
- Any number of WLED devices can follow the same zone
- More than one zone is supported. Add the plugin again for each, with a different port
- Every zone becomes its own light player in Music Assistant

## Configuration

- The lights can only follow a [Sendspin](/player-support/sendspin/) player, so you need at least one of those. Sendspin is built into Music Assistant, and the web player in your browser is one
- Your WLED devices need a build that includes the Audio Reactive usermod, which the standard ESP32 builds do. It is not available on ESP8266
- In Music Assistant, go to **Settings → Plugins → Add a plugin** and select **WLED Audio Sync**
- Pick a port for the zone. The next unused one is filled in for you, starting at `11988`. To change it later, run the plugin setup again
- On each WLED device you want in the zone, open `Config >> Usermods`, and in the `AudioReactive` section under `Sync` set `Port` to the same port and `Mode` to `Receive`
- Join the WLED light player to any active Sendspin player or group, pick a sound-reactive effect on your WLED devices, and the lights will start reacting to the music

### Settings

- <b>Zone port.</b> The port that identifies this zone. It is not the address of a device; every WLED device set to the same port joins the zone. Use a different port for each zone so they do not interfere with each other. Default `11988`.
- <b>Light timing (ms).</b> Makes the lights react slightly earlier so they stay in step with your speaker (0-3000). Default `100`. Increase if the lights lag the music, decrease if they run ahead of it.
- <b>Sensitivity.</b> How strongly the lights react to the music (-20 to 40). Default `6`. Increase if the effects look dim or flat and never reach their full range, decrease if they are stuck at maximum.
- <b>Light response.</b> How the lights react to quiet and loud parts of the music:
    - <b>Balanced</b> (default) - a good place to start.
    - <b>Punchy</b> - the most contrast between quiet and loud, but easily maxes out.
    - <b>Smooth</b> - the gentlest, lifting quiet passages the most.

> [!CAUTION]
> Many of WLED's sound-reactive effects produce rapid flashing. Avoid them if you or anyone present is sensitive to flashing lights.

## Known Issues / Notes

- WLED light players are virtual `LIGHT` players that use the Sendspin visualizer stream; they can only be joined to Sendspin players or groups
- The music information is sent as multicast on your local network. WLED devices on a different subnet or VLAN, or behind a router or access point that blocks multicast, will not receive it
- Only one source should send to a zone at a time. If another device, such as a second WLED with a microphone, is also sending audio sync on the same port, the lights will jump between the two
