# AirPlay ![Preview image](../assets/icons/airplay-logo.png){ width=70 align=right }

Music Assistant has support for AirPlay based devices which support [RAOP](https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol). This includes Apple devices such as the Homepod but also a very wide range of 3rd party devices such as receivers and smart speakers. Due to the fact that AirPlay uses lossless, timestamped streaming it is a very interesting protocol for lossless multi room playback.

## Features

- AirPlay devices are auto detected in Music Assistant, plug and play
- AirPlay devices will play in sync
- Audio quality is lossless 44.1 kHz/16bits PCM and optionally compressed as (lossless) ALAC
- The player settings allow configuration of stereo pairs of speakers

## Settings

In addition to the [Individual Player Settings](../settings/individual-player.md) the AirPlay provider also has a unique section called `AirPlay Specific Settings`. The available settings are:

- <b>Enable encryption.</b> Enable encrypted communication if required by the player 
- <b>Enable compression.</b> Enable to save some bandwidth by sending the audio as (lossless) ALAC
- <b>Device password.</b> If the device requires a password to play then it is added here
- <b>Audio buffer.</b> Amount of buffer (in milliseconds) the player should keep to absorb network throughput jitter. If audio dropouts are experienced, try increasing this value. The default is 1000
- <b>Ignore volume reports sent by the device itself.</b> The AirPlay protocol allows devices to report their own volume level. For some devices this is not reliable and can cause unexpected volume changes. Enable this option to ignore these reports

## Known Issues / Notes

- Music Assistant implements [RAOP](https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol) only, AirPlay 2 devices should be backwards compatible by default. If a device has a bad implementation of AirPlay 1 and/or only supports AirPlay 2 without RAOP then it won't work
- Whilst it is believed to have been fixed, issues have been reported when using Shairport and AirPlay 2. If problems are encountered they try disabling AirPlay 2
- Playback to Macbooks is not possible due to removal of RAOP support
- Because Apple TV's require authentication, they are not supported yet (but will be in the future if there's any demand)
- Samsung seems to have implemented AirPlay 2 in a way that it isn't fully backwards compatible. Everything seems to work, changing volume, song info is shown, and you can control the Samsung device as expected, however there is no sound. Users of similar applications such as Roon and anything based on slimproto have the same problem
- Some devices (such as Kodi or some 3rd party AirPlay receivers) require encryption. You can enable encryption in the advanced player settings if there is no sound
- Also try compression on and off in the advanced player settings if there is no sound
- A device password can be set for those devices which require it in the advanced settings
- If you find your player is going unavailable when still powered on then it may not be sending its keep alive message. A timeout can be configured for each player. Some users have reported they have needed to set it as long as one hour
- Apple Homekit has been reported to interfere with playback. If problems are enountered then remove the devices from Apple Homekit or try changing the setting in the preferences section of Homekit (iOS) for `AirPlay (Speaker & TV)`
- If the AirPlay device incorrectly responds to change volume commands or randomly changes volume, try selecting the option `Ignore volume reports sent by the device` in the player's AirPlay Specific Settings
