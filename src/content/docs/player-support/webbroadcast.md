---
title: "Web Broadcast"
description: Details for the Web Broadcast Player Provider
---

# Web Broadcast <img src="/assets/icons/web-broadcast-icon.svg" alt="Web Broadcast icon" style="width: 70px; float: right;" loading="lazy" />

Web Broadcast turns Music Assistant into your own little radio station. Each station you create gets a web address, and anything that can play an internet radio station can tune in to it: a web radio, an old hi-fi with a radio stream feature, VLC on a computer, or simply a web browser. It is the way to reach a device that Music Assistant cannot otherwise talk to, as long as that device lets you type in or save a stream address.

Each station also appears in Music Assistant as a player with its own queue. You choose what plays on it in the usual way, and every device tuned in to that station hears the same thing.

> [!CAUTION]
> **Beta**
>
> This provider is currently in beta. While functional, some features may change.

## Features

- Play to any device that accepts a radio stream address
- Create as many stations as you like, each with its own queue and its own address
- Several devices can listen to the same station at once
- Song titles appear on the listening device's display, and cover art too where the device can show it
- Skip forwards and back from Music Assistant
- Stations can be removed from the player list in Music Assistant

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a player provider** and select `Web Broadcast`
2. In **Stations** type a name for a station, for example `Kitchen` or `Party Mix`, and press Enter or click outside the box. The name appears as a pill in the box. Add as many as you like in the same way, then save
3. Each station now appears in the player list. Open the station's player settings to find its **Stream URL**
4. Enter that address on the device you want to listen on. On a web radio this is usually called something like "add station", "my stations" or "custom URL". In VLC use **Open Network Stream**, and in a browser just paste it into the address bar
5. Pick the station as the player in Music Assistant and play something

The device must be on the same network as Music Assistant.

## Settings

### Provider

In addition to the [Player Provider Settings](/settings/player-provider/) the following is available:

- <b>Stations.</b> The names of your stations, each shown as a pill in the box. Click the cross on a pill to remove that station. Each one becomes a player with its own queue and its own address. The address is made from the station name, so renaming a station changes its address and any device using the old one will need the new one. If two names would end up with the same address, the second is given a number, for example `Kitchen (2)`

### Player

Each station has its own settings page. Most of the standard [Individual Player Settings](/settings/individual-player/) apply, and a few are worth knowing about here:

- <b>Stream URL.</b> The address to enter on your listening device. It is shown here for you to copy and cannot be changed directly
- <b>[Output codec to use for streaming audio to the player](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player).</b> MP3 (the default) or AAC. MP3 works on almost everything. AAC sounds a little better for the same amount of data, but older radios may not play it. The end of the address changes to match, so after changing this you will need to give your device the new address
- <b>[Try to inject metadata into stream (ICY)](/settings/individual-player/#try-to-inject-metadata-into-stream-icy).</b> Sends the song title and artist to the listening device so it can show them on its display. On by default here, set to Profile 1. Profile 2 adds cover art, but it makes skipping feel slower, so only choose it if your device actually shows the artwork
- <b>[HTTP Profile used for sending audio](/settings/individual-player/#http-profile-used-for-sending-audio).</b> Leave this alone unless a particular device will not play the station, then try the other profiles

## How It Works

A station behaves like a radio station that only switches its transmitter on when someone is listening. Pressing play sets the station going, and the music is sent out as soon as a device tunes in. A device that tunes in while the station is already playing joins part way through the current song, just like switching on a real radio.

When the last device stops listening, the station stays on the song it had reached but does not move on to the next one. The next device to tune in carries on with that song, part way through as if it had been playing all along, or from the start if it would already have finished.

The broadcast ends when you press stop or when the queue runs out. A device that tries to tune in then will report that the station is unavailable, until you play something on it again.

## Known Issues / Notes

- There is no pause button and you cannot jump to a point within a song, because a broadcast is live in the same way a radio station is. Use stop instead, and skip forwards or back to change songs
- Volume is set on the listening device. Music Assistant has no volume control for a station
- Devices listening to the same station are not kept in time with each other, so they may be a second or more apart. For speakers in the same room that need to play in step, use one of the other [player providers](/player-support/) instead
- Stations cannot be grouped with other players
- The sound is compressed (MP3 or AAC), so it is not lossless. Lossless formats are not offered because a device joining part way through could not play them
- Skipping a song takes a few seconds to be heard, as the listening device holds a little music in reserve
- If the address shown in the player settings uses the wrong IP address, check the [Stream server settings](/settings/core/#streams), as the address is built from those
- Anyone on your network who knows a station's address can listen to it
