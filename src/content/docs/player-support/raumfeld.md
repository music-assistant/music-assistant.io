---
title: "Teufel Raumfeld"
description: A description of the Teufel Raumfeld Player Provider
---

# Teufel Raumfeld <img src="/assets/icons/raumfeld-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Teufel Raumfeld (Smart Speaker) multiroom devices. Unlike most providers, Raumfeld systems are not a collection of independent speakers: one device (or the Raumfeld app) acts as the **host**, and every other speaker is registered with it. The host owns the system's *rooms* and its *zones* — the groups a room can be part of.

Music Assistant follows that model. Each Raumfeld **room** becomes a player, and each Raumfeld **zone** becomes a sync group. Grouping players in Music Assistant creates and changes zones on the host, so a group made here is a real Raumfeld group and shows up as one in the Raumfeld app.

> [!NOTE]
> This provider is not auto-discovered. You need the IP address of the device running the Raumfeld host service. The Raumfeld app shows which device that is.

## Features

- Each Raumfeld room appears as a player, and Raumfeld zones map to sync groups
- Grouped rooms play in sync, handled by the Raumfeld host itself
- A room's analog **Line-in** input is offered as a selectable source, where the device has one
- Hi-res audio up to 24 bit / 192 kHz
- Optional gapless playback between tracks (off by default, see Settings)
- Rooms are matched to the same speaker's Chromecast or DLNA representation, so they do not show up twice

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a player provider** and select `Teufel Raumfeld`.
2. Enter the **IP address** of the device running the Raumfeld host service. The default port is correct unless you run the host somewhere unusual.
3. Your rooms appear in the player list within a few seconds of the host being reached.

If the host is unreachable when you set it up, or goes away later, the provider keeps retrying rather than failing. Players are shown as unavailable until it returns.

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages, including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols). Settings that differ or are specific to Raumfeld are:

- <b>Raumfeld host.</b> The IP address of the device running the Raumfeld host service
- <b>Raumfeld host port.</b> Only change this if the host runs on a non-default port
- <b>Gapless playback.</b> Off by default. Hands the next track to the speaker itself so it crosses the track boundary without a gap. See the note below on what it costs

## Known Issues / Notes

- **Pause is handled as stop.** Raumfeld renderers drop the HTTP connection when paused, and they restart the track from the beginning on play. Therefore, Music Assistant stops instead and re-streams from the stored position when you resume. In practice, pause and resume work as expected
- **Gapless playback only applies to rooms that are not grouped.** In a zone, the Raumfeld host feeds all members one shared stream and coordinates their timing; handing an individual speaker its own next track would break that. Grouped rooms always use the normal transition, with a short gap between tracks
- **With gapless playback on, the Raumfeld app shows the wrong elapsed time.** The track name follows along, but the time and duration keep those of the finished track. This is because the hand-over happens directly on the speaker, outside the host's view, and no other mechanism can correct it without restarting playback — which is exactly what gapless avoids. Leave the setting off if you use the Raumfeld app alongside Music Assistant
- **Crossfade is not available.** It would require queue flow mode, which Raumfeld cannot use: the flow stream is served to the Raumfeld host, whose internal relay re-requests it on its own, and because a flow URL is tied to the queue position it was created at, each re-request restarts playback from that point
- Player settings follow the speaker itself, not the room it is in, so moving a speaker to another room takes its settings along with it
- Using the Raumfeld integration in Home Assistant at the same time may result in both sending commands to the same speakers
