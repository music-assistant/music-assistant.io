---
title: "AirPlay"
---

# AirPlay <img src="/assets/icons/airplay-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for AirPlay devices. This includes Apple devices such as the HomePod and Apple TV, but also a very wide range of 3rd party devices such as receivers and smart speakers. AirPlay streams losslessly and keeps players in time with each other, which makes it particularly well suited to playing music in multiple rooms in perfect sync. (Technically, MA supports both versions of the protocol: <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">AirPlay 1, also known as RAOP</a>, and <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay 2</a>. See [Protocol Settings](#protocol-settings) below.)

## Features

- AirPlay devices are auto detected in Music Assistant, plug and play
- AirPlay devices will play in sync, even when there is a combination of AirPlay 1 (RAOP) and AirPlay 2 devices in the sync group
- Audio quality is lossless 44.1 kHz/16bits PCM and optionally compressed as (lossless) ALAC
- The player settings allow configuration of [stereo pairs](/faq/how-to/#create-a-stereo-pair) of speakers

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS` and check whether `AirPlay` is already listed; it is added automatically on new installs. If it is missing, click `ADD A NEW PROVIDER` and select `AirPlay`.
2. Your AirPlay devices will be discovered automatically and will appear in the player list, usually within a minute.
3. Apple TVs additionally require pairing before they can be used; see [Protocol Settings](#protocol-settings) below.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Protocol Settings

Support exists for devices which require pairing with a PIN before they can be used (e.g. Apple TV's). Select the `START AIRPLAY PAIRING` button to register the PIN and when successful, click the `SAVE` button to save the authorisation key.

Music Assistant has support for both versions of the AirPlay protocol. AirPlay 1 is also known as RAOP. Under normal circumstances, the AirPlay protocol version to use for streaming can be left as `Automatically select [default]`. The default for most devices is AirPlay 1 (RAOP). Devices which are known to have issues with AirPlay 1 (RAOP) and known to work with AirPlay 2 will automatically use AirPlay 2 for streaming.

### Advanced Protocol Settings

Advanced Protocol Settings applicable to both versions of the AirPlay protocol are:

- <b>Audio synchronization delay correction.</b> If audio played by this player is synchronized with other players and is found to be slightly out of sync, a fixed delay of up to ±500 ms can be adjusted using this setting.
- <b>Output Channel Mode.</b> You can configure this player to play only the left or right channel, for example to create a stereo pair with 2 players.


AirPlay 1 (RAOP) specific advanced settings are:

- <b>Enable encryption.</b> Enable encrypted communication if required by the player. AirPlay 1 only.
- <b>Enable compression.</b> Enable to save some bandwidth by sending the audio as (lossless) ALAC
- <b>Device password.</b> If the device requires a password to play then it is added here
- <b>Milliseconds of data to buffer.</b> Try increasing this value if playback is unreliable. This adds to the latency experienced for the commencement of playback.

AirPlay 2 specific advanced settings are:

- <b>Expected milliseconds to establish streaming session with the AirPlay device.</b> How much audio MA buffers while the connection to the player is established. Try increasing the value if playback is unreliable (out of sync or not working). <b>NOTE:</b> This adds to the latency experienced for the commencement of playback.

## Known Issues / Notes

### If there is no sound

Everything can appear to work (volume changes, song info shows, the device responds) and yet no sound comes out. Try these in order:

- Enable encryption in the advanced player settings. Some devices (such as Kodi or some 3rd party AirPlay receivers) require it
- Try compression on and off in the advanced player settings
- HomePod owners: check Apple HomeKit. In the HomeKit (iOS) preferences for `AirPlay (Speaker & TV)`, make sure `Only people in this home` is NOT selected; when it is, Music Assistant cannot play audio on the HomePod (without setting the proper password in the advanced settings of the provider). Select the option `Everyone on the same network` instead. More generally, Apple HomeKit has been reported to interfere with playback; if problems are encountered, try removing the devices from HomeKit
- If the device requires a password, set it in the advanced settings
- Samsung devices seem to have implemented AirPlay 1 in a way that isn't fully backwards compatible and produce exactly this symptom. Users of similar applications such as Roon and anything based on slimproto have the same problem

### Other playback problems

- Apple TVs will be discovered but require pairing. In the player settings there is a pair button which will display a code on the screen of the Apple TV
- If your player is going unavailable while still powered on then it may not be sending its keep alive message. A timeout can be configured for each player. Some users have reported they have needed to set it as long as one hour
- If the AirPlay device incorrectly responds to change volume commands or randomly changes volume, try changing the `Volume Control` option in the `Player controls` section and set it to `None`

### Technical notes

- Music Assistant implements <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> and <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay2</a>. Most devices will default to RAOP because AirPlay 2 devices should be backwards compatible by default. If a device has a bad implementation of AirPlay 1 and/or only supports AirPlay 2 without RAOP then select AirPlay2 as the protocol version.
- Shairport and AirPlay 2 are currently incompatible due to lack of NTP timing support for AirPlay 2 in Shairport and lack of PTP timing support for AirPlay 2 in Music Assistant.
- Playback to Macbooks is not possible due to removal of RAOP support
- AirPlay 2 implementation is new and has not yet been extensively tested. It is known that Password-based pairing and PTP timing is not yet supported. There may be additional issues that are not yet known. The AirPlay 2 protocol takes longer to establish initial connection than AirPlay 1 (RAOP) due to more RTSP exchanges. This adds to the delay experienced for commencement of playback.
