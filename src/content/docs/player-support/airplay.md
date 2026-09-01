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

1. In Music Assistant, go to **Settings → Player Providers** and check whether `AirPlay` is already listed; it is added automatically on new installs. If it is missing, click **Add a player provider** and select `AirPlay`.
2. Your AirPlay devices will be discovered automatically and will appear in the player list, usually within a minute.
3. Apple TVs additionally require pairing before they can be used; see [Protocol Settings](#protocol-settings) below.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Protocol Settings

AirPlay does not stream over HTTP, so of the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols) these players show only **Output Channel Mode**. The settings below are specific to AirPlay.

Some devices (Apple TVs, HomePods and other AirPlay 2 speakers) must be paired before Music Assistant can use them. These show a Setup button in the player settings — press it and follow the steps, entering the PIN shown on the device's screen. Devices protected with a password ask for the password instead.

Apple TVs offer two extra pairing steps after the main one. Both are optional and can be added later by running Setup again:

- <b>Remote control.</b> Lets Music Assistant see whether the device is on, wake it before playback, and control what it is playing and its volume.
- <b>Playback monitoring.</b> Shows the app and media playing on the device outside of Music Assistant.

Music Assistant chooses how to stream to each device automatically, so under normal circumstances nothing here needs changing.

- <b>Audio synchronization delay correction.</b> Shifts when audio is heard on this device compared to the other players it is synced with, up to ±500 ms. Negative values make it play earlier, positive values later. Use a negative value for a device connected to a TV, AV receiver or amplifier that adds its own delay — if it lags the group by about 100 ms, set it to -100.

### Advanced Protocol Settings

- <b>Streaming mode.</b> Pins this device to one way of streaming. Leave on Automatic (recommended) unless the device misbehaves — only the modes the device actually supports are offered: AirPlay 2 - PTP timing, AirPlay 2 - NTP timing, AirPlay 2 - compatibility mode and AirPlay 1 (RAOP). Music Assistant also switches to a safer mode by itself after a device repeatedly fails; set it back to Automatic to try the original mode again.
- <b>Audio buffer depth.</b> How much audio the speaker keeps queued ahead of playback. Increase this if the speaker stays silent or drops out while Music Assistant shows it playing — at the cost of slower skipping and pausing. Automatic picks a value suited to the device.
- <b>Ignore volume reports sent by the device itself.</b> Some devices report their own volume level unreliably, which can cause unexpected volume changes. Enable this to ignore those reports.
- <b>Enable encryption.</b> Only shown for devices streaming with AirPlay 1 (RAOP). Some third party players require this to be turned off.

### AirPlay Provider Settings

- <b>Verbose PTP daemon logging.</b> Adds detailed multi-room clock timing to the log. Only enable when asked to for troubleshooting sync problems — it writes around 10 lines per second.

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
- Shairport and AirPlay 2 are currently incompatible due to lack of NTP timing support for AirPlay 2 in Shairport. To resolve, navigate to the advanced settings of Shairport device in MA and change the Output Protocol to `Airplay 1 RAOP` or `Airplay 2 - compatibility mode`. Additionally, it is not possible to use Airplay 2 if Music Assistant and Shairport are on the same host. 
- Playback to Macbooks is not possible due to removal of RAOP support
- AirPlay 2 implementation is new and has not yet been extensively tested. It is known that Password-based pairing and PTP timing is not yet supported. There may be additional issues that are not yet known. The AirPlay 2 protocol takes longer to establish initial connection than AirPlay 1 (RAOP) due to more RTSP exchanges. This adds to the delay experienced for commencement of playback.
