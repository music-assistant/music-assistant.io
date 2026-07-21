---
title: "AirPlay"
---

# AirPlay <img src="/assets/icons/airplay-logo.png" alt="AirPlay logo" style="width: 70px; float: right;" loading="lazy" />

Music Assistant supports devices that receive [AirPlay 1 (RAOP)](https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol) or [AirPlay 2](https://en.wikipedia.org/wiki/AirPlay). This includes Apple devices such as HomePod, Apple TV, and Macs, as well as many third-party receivers and smart speakers.

## Features

- AirPlay devices are detected automatically.
- Music Assistant automatically uses AirPlay 2 when a device supports it and RAOP for legacy receivers.
- Timestamped playback keeps AirPlay 1 and AirPlay 2 players synchronized in multi-room groups.
- Audio is streamed losslessly as ALAC. Playback defaults to 44.1 kHz/16-bit; supported AirPlay 2 devices can opt into 24-bit playback at 44.1 or 48 kHz.
- The player settings support [stereo pairs](/faq/how-to/#create-a-stereo-pair).

## Protocol selection

AirPlay 1 is also known as RAOP. Music Assistant automatically uses AirPlay 2 for capable devices and RAOP for legacy receivers.

Some AirPlay 2-capable non-Apple receivers that also support RAOP expose the advanced **Force RAOP protocol** setting. This is an escape hatch for devices whose AirPlay 2 implementation causes dropouts, silence, or failed playback. Leave it disabled unless the receiver works better with RAOP.

## Pairing and passwords

Devices that advertise authentication requirements, including many Apple TVs and macOS AirPlay receivers, must be paired before playback. Start pairing from the player's settings and follow the prompts. Depending on the device, Music Assistant asks for either the PIN displayed by the device or its pairing password, then stores the resulting credentials.

A pairing password is not the same as the RAOP-only **Device password** setting. Pairing establishes trusted access to a device; **Device password** supplies a password required by some receivers when connecting or playing over RAOP.

Apple Home app access restrictions are supported through the same pairing flow. If speaker and TV access is limited to people in the home, pair the device in Music Assistant. If that restriction is not required, you can instead change the Home access setting to allow devices on the same network.

## Player settings

Settings are shown only when they apply to the selected device and protocol.

- **Audio synchronization delay correction.** Adjusts this player from `-500 ms` to `+500 ms` relative to the other players in a synchronized group. Negative values make it play earlier and positive values make it play later. For example, use `-100 ms` when downstream processing by a TV or AV receiver makes this player lag by about 100 ms.
- **Output Channel Mode.** Plays both channels or only the left or right channel, for example when creating a stereo pair from two players.
- **Ignore volume reports sent by the device itself.** Ignores unreliable device volume feedback that can otherwise cause unexpected volume changes.
- **Enable encryption.** Controls encrypted communication when RAOP applies. If RAOP playback fails, try toggling this setting.
- **Device password.** Supplies the playback password required by some RAOP receivers. This is separate from pairing credentials.
- **Enable hi-res (24-bit) playback.** Enables 24-bit audio at 44.1 or 48 kHz for supported AirPlay 2 devices. Leave it disabled unless the device supports 24-bit rendering; some receivers accept the stream but play silence.

## AirPlay 2 group synchronization

AirPlay 2 devices that use PTP timing require Music Assistant to bind UDP ports `319` and `320` for synchronized group playback. Custom containers that run Music Assistant as a non-root user need the `NET_BIND_SERVICE` capability. This is a local bind-permission requirement; the ports do not need to be published.

If Music Assistant cannot bind these ports, playback continues using NTP timing, but these groups may drift out of sync.

## Troubleshooting and known issues

- If an AirPlay 2 receiver that also supports RAOP has dropouts, remains silent, or fails to play, try **Force RAOP protocol**.
- If RAOP playback fails, try toggling **Enable encryption** and verify **Device password** against the receiver's requirements.
- If 24-bit playback is silent, disable **Enable hi-res (24-bit) playback**.
- If volume changes unexpectedly, enable **Ignore volume reports sent by the device itself**. If volume control remains unreliable, set **Volume Control** to **None** in the **Player controls** settings.
