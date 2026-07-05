---
title: Local Audio Out Provider
description: A description of the Local Audio Out Player Provider
---

# Local Audio Out <img src="/assets/icons/loudness-analysis-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant can play audio directly through soundcards attached to the machine the server runs on, such as USB DACs, built-in audio outputs and HDMI audio. Each detected output device is added as its own player. This is useful for turning the server into a player, for example a small computer connected to an amplifier or a pair of powered speakers.

> [!NOTE]
> This provider is in an early (alpha) stage of development. Basic playback works but some features are still limited and behaviour may change between releases.

## Features

- Attached soundcards are auto detected when the provider is loaded
- Each output device is added as a separate player
- Playback between multiple Local Audio players is synchronized, so they can be grouped together
- On Linux with PulseAudio or PipeWire, each output (sink) is added as a player at its native sample rate and bit depth, so no unnecessary resampling takes place
- On Linux with PulseAudio or PipeWire, multi-channel soundcards (5.1/7.1) are automatically split into separate stereo players per speaker pair (front, rear, side, center/subwoofer), plus a "multichannel stereo" player that plays to all outputs at once. Each of these players has its own independent volume control

## Requirements

- The soundcard must be attached to, and usable from, the environment where the Music Assistant server runs. When the server runs in a container, the audio devices must be made available to that container (for a manual Docker install this means passing through /dev/snd)
- This provider uses the Sendspin provider under the hood for timing and synchronization, so Sendspin must remain enabled
- The PulseAudio/PipeWire backend requires pactl (from pulseaudio-utils) and the PulseAudio client libraries to be installed on the host

## Settings

For information about the settings seen in the MA UI refer to the [Player Provider Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages. Specific settings available for this provider are:

- <b>Audio backend</b> *(Linux only)*. The default is Auto (PulseAudio/PipeWire if available, else ALSA). PulseAudio / PipeWire plays through the system sound server and supports virtual sinks and multi-channel soundcards. ALSA (direct) talks to the hardware directly and can be used for devices that PulseAudio or PipeWire cannot handle correctly

## Known Issues / Notes

- Devices that cannot be opened, for example because another program or sound server is using them, are skipped during discovery. If an expected player is missing, make sure the device is not in use elsewhere and reload the provider
- On Linux, plugging in or removing a USB audio device reloads the provider automatically. Any playback on local audio players is briefly interrupted while this happens
- On the PulseAudio/PipeWire backend, the sample rate and bit depth of each player follow the sound server configuration and the device's native capabilities; they cannot be set per player in MA. On the ALSA direct backend and macOS, audio is played in stereo at 44.1 kHz / 16 bit
- On the ALSA direct backend, the hardware mixer is not controlled by MA and volume is applied in software. Set the card's mixer controls to 100% once using alsamixer and save them with alsactl store so they persist across reboots
- On the ALSA direct backend only real hardware devices are listed; virtual ALSA devices (such as dmix and surround) are excluded
- The volume slider uses an audio taper curve, meaning each step changes the loudness by the same amount instead of the volume being overly sensitive at the bottom of the range
- A player never starts up muted: the volume level is remembered across restarts, but the mute state is intentionally not
- While the provider is active, its PulseAudio sinks stay in the RUNNING state. This is intentional: the audio streams are kept open so that grouped players start perfectly in sync
