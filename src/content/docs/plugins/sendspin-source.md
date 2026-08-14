---
title: Sendspin Source Plugin
description: Use Sendspin source devices as Live Inputs in Music Assistant
---

# Sendspin Source <img src="/assets/icons/sendspin-icon.svg" alt="Sendspin logo" style="width: 70px; float: right;" loading="lazy" />

The Sendspin Source plugin brings audio from compatible devices into Music Assistant as Live Inputs. A line-in or AUX connection, turntable preamp, or microphone can then play on any available Music Assistant player, stereo pair, or group.

Sendspin calls incoming audio the `source` role. The built-in [Sendspin player provider](/player-support/sendspin/) handles audio sent from Music Assistant to devices, while the companion Sendspin Source plugin handles audio coming into Music Assistant. Both use the same secure, paired client connection.

> [!NOTE]
> Sendspin Live Inputs require a paired device. Allowing unpaired access does not enable the Sendspin source role.

## Features

- Discovers connected Sendspin clients that support `source@v1`
- Adds every paired source as a Live Input
- Plays an input on any Music Assistant player, stereo pair, or group
- Supports several different source devices streaming at the same time
- Can start and stop a line-in automatically on devices that report signal detection

## Setup and discovery

Sendspin Source is built in and starts automatically.

Connect a compatible Sendspin source client to Music Assistant and complete the pairing request. Once paired, it appears as one Live Input.

## Playing a Live Input

Select the player, stereo pair, or group where you want to hear the input, then open **Browse**. A single available Sendspin input appears directly in Browse; when several are available, open **Sendspin Source** and choose one. Press **Play** to start it on the selected playback target.

Each source can play on only one target at a time. Selecting the same source on another target moves it there. Different source clients can play on different targets concurrently.

Live Inputs play as 48 kHz, 16-bit stereo audio. Music Assistant adjusts for small timing and network variations to keep playback stable.

## Start playing automatically when a line-in becomes active

If your source device can detect an input signal, Music Assistant can start playing it on a chosen player as soon as the input becomes active. For example, lowering the needle onto a turntable can start playback in the room you selected.

Choose the destination with the source device's **Automatically play line-in on** player setting. You can select any available player, stereo pair, or group. The destination does not need to use Sendspin. A device that is both a source and a player defaults to **This device**; a capture-only device defaults to **Off**.

Playback starts after a short delay, which prevents brief signal changes from triggering it by accident. It stops after the signal has been absent for one minute.

Restarting Music Assistant or reconnecting a device does not start an input that was already active. Automatic playback also does not move a source that is already playing somewhere else.

Devices without signal detection remain available for manual playback and do not show this setting. The selected destination plays in its usual way; automatic playback does not make it switch to Sendspin.

## Latency

The advanced provider setting **Target latency** controls how much audio Music Assistant buffers to keep playback stable. A larger value can help an unreliable network, but increases the delay between the input and the speakers. The setting applies to all Sendspin sources. Individual sources cannot have separate latency values.

## Interruptions and reconnecting

Brief gaps in audio do not immediately stop playback. A manually started input waits for audio to return and stops only when its source times out. An automatically started input stops after one minute without a signal, as described above.

If a client disconnects while playing, Music Assistant keeps playback open with silence. When the client reconnects before the timeout, live audio resumes after its buffer has been rebuilt. Audio captured while the client was disconnected cannot be recovered.

If a client only becomes unavailable and does not reconnect, its source stream does not restart automatically.
