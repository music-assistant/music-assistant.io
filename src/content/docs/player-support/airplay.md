---
title: "AirPlay"
---

# AirPlay <img src="/assets/icons/airplay-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for AirPlay based devices which support <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> and <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay2</a>. This includes Apple devices such as the Homepod but also a very wide range of 3rd party devices such as receivers and smart speakers. Due to the fact that AirPlay uses lossless, timestamped streaming it is a very interesting protocol for lossless multi room playback.

## Features

- AirPlay devices are auto detected in Music Assistant, plug and play
- AirPlay devices will play in sync, even when there is a combination of AirPlay 1 (RAOP) and AirPlay 2 devices in the sync group
- Audio quality is lossless 44.1 kHz/16bits PCM and optionally compressed as (lossless) ALAC
- The player settings allow configuration of stereo pairs of speakers

## Protocol Settings

Support exists for devices which require pairing with a PIN before they can be used (e.g. Apple TV's). Select the `START AIRPLAY PAIRING` button to register the PIN and when successful, click the `SAVE` button to save the authorisation key.

Music Assistant has support for both versions of the AirPlay protocol. AirPlay 1 is also known as RAOP. Under normal circumstances, the AirPlay protocol version to use for streaming can be left as `Automatically select [default]`. The default for most devices is AirPlay 1 (RAOP). Devices which are known to have issues with AirPlay 1 (RAOP) and known to work with AirPlay 2 will automatically use AirPlay 2 for streaming.

### Advanced Protocol Settings

Advanced Protocol Settings applicable to both versions of the AirPlay protocol are:

- <b>Audio synchronization delay correction.</b> If this player is playing audio synced with other players and you always hear the audio too early or late on this player, you can shift the audio a bit.
- <b>Output Channel Mode.</b> You can configure this player to play only the left or right channel, for example to create a stereo pair with 2 players.


AirPlay 1 (RAOP) specific advanced settings are:

- <b>Enable encryption.</b> Enable encrypted communication if required by the player. AirPlay 1 only.
- <b>Enable compression.</b> Enable to save some bandwidth by sending the audio as (lossless) ALAC
- <b>Device password.</b> If the device requires a password to play then it is added here

AirPlay 2 specific advanced settings are:

- <b>Milliseconds of data to buffer.</b> The number of milliseconds of data to buffer in the cliap2 binary. Try increasing the value if playback is unreliable. <b>NOTE:</b> This adds to the latency experienced for commencement of playback.

## Known Issues / Notes

- Music Assistant implements <a href="https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol" target="_blank" rel="noopener noreferrer">RAOP</a> and <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay2</a>. Most devices will default to RAOP because AirPlay 2 devices should be backwards compatible by default. If a device has a bad implementation of AirPlay 1 and/or only supports AirPlay 2 without RAOP then it might work with AirPlay2.
- Shairport and AirPlay 2 are currently incompatible due to lack of NTP timing support for AirPlay 2 in Shairport and lack of PTP timing support for AirPlay 2 in Music Assistant.
- Playback to Macbooks is not possible due to removal of RAOP support
- Apple TVs will be discovered but require pairing. In the player settings there is a pair button which will display a code on the screen of the Apple TV
- Samsung seems to have implemented AirPlay 1 in a way that isn't fully backwards compatible. Everything seems to work, changing volume, song info is shown, and you can control the Samsung device as expected, however there is no sound. Users of similar applications such as Roon and anything based on slimproto have the same problem
- Some devices (such as Kodi or some 3rd party AirPlay receivers) require encryption. You can enable encryption in the advanced player settings if there is no sound
- Also try compression on and off in the advanced player settings if there is no sound
- A device password can be set for those devices which require it in the advanced settings
- If you find your player is going unavailable when still powered on then it may not be sending its keep alive message. A timeout can be configured for each player. Some users have reported they have needed to set it as long as one hour
- Apple Homekit has been reported to interfere with playback. If problems are enountered then remove the devices from Apple Homekit or try changing the setting in the preferences section of Homekit (iOS) for `AirPlay (Speaker & TV)`.
  - In this section specifically check if the `Only people in this home` is not selected. When this option is selected, MusicAssistant cannot play audio on the HomePod (without setting the proper password in the advanced settings of the provider). Select the option `Everyone on the same network` instead.
- If the AirPlay device incorrectly responds to change volume commands or randomly changes volume, try changing the `Volume Control` option in the `Player controls` section and set it to `None`
- AirPlay 2 implementation is new and has not yet been extensively tested. It is known that Password-based pairing and PTP timing is not yet supported. There may be additional issues that are not yet known. The AirPlay 2 protocol takes longer to establish initial connection than AirPlay 1 (RAOP) due to more RTSP exchanges. This adds to the delay experienced for commencement of playback.
