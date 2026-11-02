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
- A speaker's **station buttons** are offered as sources too, each named after its number and the station, album or playlist it is set to in the Raumfeld app. A button pressed on the speaker itself shows as that button
- Rooms can be switched off (standby) and on again from Music Assistant
- Volume and mute are set per room, also for rooms in a group
- Hi-res audio up to 192 kHz / 24 bit, chosen per room (up to 96 kHz by default, see Settings)
- Rooms are matched to the same speaker's Chromecast or DLNA representation, so they do not show up twice

## Playback started outside Music Assistant

Music Assistant also shows what a room plays when the music was started somewhere else: Spotify Connect, or music and radio from the Raumfeld app. You see the source and the track, and get the controls the Raumfeld host allows for it. For an album or Spotify that is pause, next/previous and seek; for radio only stop.

- A source you stop is shown as paused and can be resumed for about a minute. After that Music Assistant shows its own queue again
- Playing something from Music Assistant takes over the room
- Music from another app that plays through the speaker's built-in Chromecast, such as the Tidal app, is not shown
- Pausing a track within the first few seconds restarts it when you resume. The Raumfeld app does the same

## Configuration

1. In Music Assistant, go to **Settings → Player providers**, click **Add a player provider** and select `Teufel Raumfeld`.
2. Check the host's **IP address**, which is filled in when the host is found on the network, or enter it.
3. Your rooms appear in the player list within a few seconds of the host being reached.

If the host is unreachable when you set it up, or goes away later, the provider keeps retrying rather than failing. Players are shown as unavailable until it returns.

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages, including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols). Settings that differ or are specific to Raumfeld are:

- <b>Raumfeld host.</b> The IP address of the device running the Raumfeld host service
- <b>Raumfeld host port.</b> Only change this if the host runs on a non-default port
- <b>Flow mode.</b> On by default, and it is what makes playback gapless, grouped rooms included. The trade off is that the Raumfeld app cannot show each track's elapsed time and duration (see Known Issues). Switch it off to play each track on its own. There is then a short gap between tracks, but the Raumfeld app shows each track's time and duration. In a group only the leader's setting counts, that is the room the others were added to. If crossfade is enabled, flow mode is used regardless of this setting
- <b>Sample rates.</b> The sample rates a room accepts. Every Raumfeld speaker tested so far has worked with rates up to 96 kHz / 24 bit so these are on by default. Select 176.4 and 192 kHz for the rooms that can accept them. In testing, several 2nd and 3rd generation speakers played ok, while a 1st generation speaker did not, and some 2nd generation speakers dropped out. A group plays at a rate every room in it can accept. When a room joins a group that plays a rate the room cannot play, playback starts again where it was, at a rate acceptable to the whole group
- <b>Restart playback when a room joins.</b> Off by default. A room added to a group that is already playing can play slightly behind the others, until the next pause or seek. With this on, playback starts again where it is as soon as the room that joined commences playback, so every room is in step, at the cost of a short pause. Switch it on for the room that lags behind, or for the room that leads the group

## Known Issues / Notes

- **Pause is handled as stop for music played from Music Assistant.** Resuming picks up where you paused, but the Raumfeld app shows the room as stopped rather than paused
- **With flow mode on, the Raumfeld app shows the track title but not its elapsed time or duration.** The time it shows runs on across the whole queue rather than starting again for each track. Music Assistant's own progress bar is correct. If you rely on the Raumfeld app's time display, switch flow mode off (see Settings)
- **Only a room that was switched off is shown as off.** A room that went into standby by itself after a while without music is shown as on, because it wakes up by itself for the next play. Switching a room off removes it from its group
- **Stopping the Line-in switches the room off**, along with any rooms grouped with it, because a Raumfeld Line-in would otherwise keep playing. The next play from Music Assistant wakes them again
- **Raumfeld rooms only play in sync with other Raumfeld rooms.** They can be added to a universal group with speakers of another brand, but they won't play in sync with those
- Using the Raumfeld integration in Home Assistant at the same time may result in both sending commands to the same speakers
