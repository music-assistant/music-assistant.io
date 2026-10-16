---
title: "Teufel Raumfeld"
description: A description of the Teufel Raumfeld Player Provider
---

# Teufel Raumfeld <img src="/assets/icons/raumfeld-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Teufel Raumfeld (Smart Speaker) multiroom devices. Contributed and maintained by [Simanias](https://github.com/Simanias).

Unlike most providers, Raumfeld systems are not a collection of independent speakers: one device (or the Raumfeld app) acts as the **host**, and every other speaker is registered with it. The host owns the system's *rooms* and its *zones* — the groups a room can be part of.

Music Assistant follows that model. Each Raumfeld **room** becomes a player, and each Raumfeld **zone** becomes a sync group. Grouping players in Music Assistant creates and changes zones on the host, so a group made here is a real Raumfeld group and shows up as one in the Raumfeld app.

> [!NOTE]
> Music Assistant looks for the device running the Raumfeld host service when you add the provider, and fills in its IP address. If it is not found, for example because it is on another network, enter the address yourself. The Raumfeld app shows which device is the host.

## Features

- Grouped rooms play in sync, handled by the Raumfeld host itself
- Gapless playback between tracks, including across grouped rooms (with flow mode on, the default)
- A room's analog **Line-in** input is offered as a selectable source, where the device has one
- Rooms can be switched off (standby) and on again from Music Assistant
- Volume and mute are set per room, also for rooms in a group
- Hi-res audio up to 192 kHz / 24 bit
- Rooms are matched to the same speaker's Chromecast or DLNA representation, so they do not show up twice

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a player provider** and select `Teufel Raumfeld`.
2. Check the host's **IP address**, which is filled in when the host is found on the network, or enter it.
3. Your rooms appear in the player list within a few seconds of the host being reached.

If the host is unreachable when you set it up, or goes away later, the provider keeps retrying rather than failing. Players are shown as unavailable until it returns.

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages, including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols). Settings that differ or are specific to Raumfeld are:

- <b>Raumfeld host.</b> The IP address of the device running the Raumfeld host service
- <b>Raumfeld host port.</b> Only change this if the host runs on a non-default port
- <b>Flow mode.</b> On by default, and it is what makes playback gapless, grouped rooms included. The trade off is that the Raumfeld app cannot show each track's elapsed time and duration (see Known Issues). Switch it off to play each track on its own. There is then a short gap between tracks, but the Raumfeld app shows each track's time and duration. In a group only the leader's setting counts, that is the room the others were added to. If crossfade is enabled, flow mode is used regardless of this setting

## Known Issues / Notes

- **Pause is handled as stop.** Resuming picks up where you paused, but the Raumfeld app shows the room as stopped rather than paused
- **With flow mode on, the Raumfeld app shows the track title but not its elapsed time or duration.** The time it shows runs on across the whole queue rather than starting again for each track. Music Assistant's own progress bar is correct. If you rely on the Raumfeld app's time display, switch flow mode off (see Settings)
- **Only a room that was switched off is shown as off.** A room that went into standby by itself after a while without music is shown as on, because it wakes up by itself for the next play. Switching a room off removes it from its group
- **Stopping the Line-in switches the room off**, along with any rooms grouped with it, because a Raumfeld Line-in would otherwise keep playing. The next play from Music Assistant wakes them again
- Using the Raumfeld integration in Home Assistant at the same time may result in both sending commands to the same speakers
