---
title: Local Audio Out Provider
description: A description of the Local Audio Out Player Provider
---

# Local Audio Out <img src="/assets/icons/local-audio-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant can play audio directly through soundcards attached to the machine the server runs on, such as USB DACs, built-in audio outputs and HDMI audio. Each detected output device is added as its own player. This is useful for turning the server into a player, for example a small computer connected to an amplifier or a pair of powered speakers.

> [!NOTE]
> This provider is in an early (alpha) stage of development. Basic playback works but some features are still limited and behaviour may change between releases.

## Features

- Attached soundcards are auto detected when the provider is loaded
- Each output device is added as a separate player
- Playback between multiple Local Audio players is synchronized, so they can be grouped together

## Requirements

- The soundcard must be attached to, and usable from, the environment where the Music Assistant server runs. When the server runs in a container, the audio devices must be made available to that container (for a manual Docker install this means passing through `/dev/snd`)
- This provider uses the Sendspin provider under the hood for timing and synchronization, so Sendspin must remain enabled

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages. Specific settings available for this provider are:

- <b>Volume control mode.</b> The default is `Hardware (preferred)` which controls the volume of the soundcard itself via the operating system. If hardware volume control is not available for a device, software volume is used automatically instead. `Software` applies the volume to the audio stream before it is sent to the soundcard. `Disabled` always passes the audio at full volume, which is useful when the volume is controlled on an external amplifier or DAC

## Known Issues / Notes

- Devices that cannot be opened, for example because another program or sound server is using them, are skipped during discovery. If an expected player is missing, make sure the device is not in use elsewhere and reload the provider
- Devices plugged in or removed after startup are not always picked up straight away. Reload the provider (Settings → Player Providers → Local Audio Out) to refresh the list of players
- Audio is played in stereo at 44.1 kHz / 16 bit. Content in other formats is converted automatically. Devices with less than 2 output channels are not added
- Hardware volume control on Linux uses the card's `Master` mixer control. Cards without such a control automatically fall back to software volume
