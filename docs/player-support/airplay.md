# AirPlay ![Preview image](../assets/icons/airplay-logo.png){ width=70 align=right }

Music Assistant has support for AirPlay based devices. This includes Apple devices such as the Homepod but also a very wide range of 3rd party devices such as receivers and smart speakers. Due to the fact that AirPlay uses lossless, timestamped streaming it is a very interesting protocol for lossless multi room playback.

## Features

- AirPlay devices are auto detected in Music Assistant, plug and play
- AirPlay devices will play in sync
- Audio quality is lossless 44.1/16bits PCM and optionally compressed as (lossless) ALAC
- The player settings include some basic equaliser settings
- The player settings allow configuration of stereo pairs of speakers

## Known Issues / Notes

- Music Assistant implements RAOP (AirPlay 1) only, AirPlay 2 devices should be backwards compatible by default. If a device has a bad implementation of AirPlay 1 and/or only supports AirPlay 2 then it won't work
- Whilst it is believed to have been fixed, issues have been reported when using Shairport and AirPlay 2. If problems are encountered they try disabling AirPlay V2
- Playback to Macbooks is not possible due to removal of AirPlay 1 support
- Because Apple TV's require authentication, they are not supported yet (but will be in the future if there's any demand)
- Samsung seems to have implemented AirPlay 2 in a way that it isn't fully backwards compatible. Everything seems to work, changing volume, song info is shown, and you can control the Samsung device as expected, however there is no sound. Users of similar applications such as Roon and anything based on slimproto have the same problem
- Some devices (such as Kodi or some 3rd party AirPlay receivers) require encryption. You can enable encryption in the advanced player settings if there is no sound
- Also try compression on and off in the advanced player settings if there is no sound
- A device password can be set for those devices which require it in the advanced settings
- If you find your player is going unavailable when still powered on then it may not be sending its keep alive message. A timeout can be configured for each player. Some users have reported they have needed to set it as long as one hour
- Apple Homekit has been reported to interfere with playback. If problems are enountered then remove the devices from Apple Homekit or try changing the setting in the preferences section of Homekit (iOS) for `AirPlay (Speaker & TV)`
- If the AirPlay device incorrectly responds to change volume commands or randomly changes volume, try selecting the option "Ignore volume reports sent by the device" in the player's AirPlay Specific settings
