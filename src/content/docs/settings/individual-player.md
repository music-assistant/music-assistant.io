---
title: "Individual Player Settings"
---

# Individual Player Settings <img src="/assets/icons/settings-individual-player-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Individual Player Settings are usually quite extensive. The typical headings of the various sections are shown in the following image and subsections below will expand on them. Some items are hidden unless the `Show advanced settings` toggle is on. Groups have the same sections but less settings available. Not all players have all the settings listed. Reference can be made to the [Player Summary Table](/player-support/) to identify some of the functionality that should be available for a given player type otherwise visit the settings page for the player. 

![image](/assets/screenshots/individual-player-settings.png)

A powerful feature of Music Assistant is that it will combine all of the available protocols from a device into one player. The available protocols can be seen in the chips at the top of the page and in the Output Protocols section of the settings.

The `Reconfigure` button launches the configuration wizard for the player and for those with multiple protocols the one to be reconfigured will need to be selected from a drop down box. 

## Queue Settings

This is a link to the respective [Queue Settings](/usage/#the-queue). It should be noted that these can be set globally in the [Player Queues Settings](/settings/core/#player-queues)

## DSP Settings

All providers have the option to apply <a href="https://en.wikipedia.org/wiki/Digital_signal_processing" target="_blank" rel="noopener noreferrer">Digital Signal Processing</a> (DSP) filters to the audio stream. This section is where the DSP is configured for each player, which means that each player has its own independently configurable DSP settings.

Full details of the DSP capabilities and the filters that are available can be found in the [Digital Signal Processing](/dsp/) section of the documentation.

## Player Options

Some players (e.g. [MusicCast](../player-support/musiccast/) have [unique control features](../player-support/#player-options) which are fully described in the documentation for the relevant player provider 

## Generic Settings

- <b>Hide this player in the UI.</b> This setting determines when the player will not be shown in the [Player List](/ui/#player-list) and other areas of the UI
- <b>Expose this player to Home Assistant</b>. If disabled the player will not be imported into HA
- <b>Icon.</b> A material design icon is used in some parts of the UI and this can be configured on a per player basis
- <b>Play Media overrides active group.</b> When this player is currently captured by an active group or sync session, an explicit Play Media command (e.g. starting a new playlist or track from Home Assistant) will release this player from the group/sync and play the new media directly on this player. Disable this to keep the legacy behaviour where Play Media is redirected to the group leader. Other commands (next/prev/pause/resume) are always forwarded to the group leader as they act on the existing playback

## Output Protocols

- <b>Preferred Output Protocol.</b> Choose from the list of available protocols

Each available protocol then has its own configuration section. Protocols can be disabled except for the native protocol of the device. Refer to the relevant Player provider for settings which are available for each.

One setting appears in the protocol sections of many player types and is described here once:

- <b>Try to inject metadata into stream (ICY).</b> ICY is a way of slipping the track name and artist into the audio stream so the player can display them (<a href="https://liquidsoap.readthedocs.io/en/latest/content/icy_metadata.html" target="_blank" rel="noopener noreferrer">more about ICY metadata</a>, written for developers). Not all players handle it correctly, so if there are issues with playback, try disabling this setting

For group players the following settings will be seen:

- <b>Group members.</b> For Group player types the members of the group are configured in this field
- <b>Enable dynamic members</b> toggle. This setting is available for [Sync and Universal Groups](/faq/groups/). When enabled, it is then possible to add and remove members from these group types
- <b>Allowed members</b>. Limit which players can join this group. Leave empty to allow any sync-compatible player. This can be used to reduce the list of players that show up for joining in case you have a lot of players. Only shown when the advanced toggle is on
- <b>Allow crossfades between tracks of different sample rates</b>. Enable this option to allow crossfades between tracks that have different sample rates (e.g. 44.1kHz to 48kHz). Disable this option if you experience audio glitches during transitions between tracks. Only shown when the advanced toggle is on

## Announcements Configuration

There are a number of configurable options for controlling the volume of announcements sent to the MA players. These are well described by the help available by selecting this icon ![image](/assets/icons/question-mark.png) beside each field. The `Maximum` and `Minimum Volume` level boxes do not apply when the `Absolute volume` option is selected.

![image](/assets/screenshots/announcements-settings.png)

## Player Controls

Each player has a number of options available to control the behaviour of the power, volume and mute controls in the MA UI. By default, if a device supports these controls then that native behaviour will be used or if the control is not supported then it will be disabled in the UI (the setting will indicate NONE). It is also possible to manually disable the controls by changing the setting to NONE. Some of the options require the advanced toggle to be enabled before they can be seen.

It is possible to map other HA entities to the MA player controls. in order for this to be an option the HA entities need to be first exposed to MA via the settings in the [HA Plugin](/ha-plugin/).

**Power** If a player does not support power but it is desired that the player has an on and off state then a FAKE option is available which will simulate the on/off functionality. Power controls assume the underlying device is in a standby mode and not physically powered off.

**Volume** This allows the volume control to be defined or disabled.

**Mute** There is a FAKE option that will set the volume to zero and restore it when mute and unmute is commanded.

**Minimum and Maximum Volume** Two sliders allow the application of limits to the maximum and minimum values that are sent to the player. The volume sliders in the UI are rescaled so the full 0-100 range will still be seen. (Only shown when the advanced toggle is on)

**Automatically play/resume on power on** If the player supports power control then this option will cause the player to immediately start playing any items in the queue on power on.
