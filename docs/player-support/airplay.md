# AirPlay ![Preview image](../assets/icons/airplay-logo.png){ width=70 align=right }

Music Assistant has support for AirPlay based devices which support [RAOP](https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol) and [AirPlay2](https://en.wikipedia.org/wiki/AirPlay). This includes Apple devices such as the Homepod but also a very wide range of 3rd party devices such as receivers and smart speakers. Due to the fact that AirPlay uses lossless, timestamped streaming it is a very interesting protocol for lossless multi room playback.

## Features

- AirPlay devices are auto detected in Music Assistant, plug and play
- AirPlay devices will play in sync.
- Audio quality is lossless 44.1 kHz/16bits PCM and optionally compressed as (lossless) ALAC
- The player settings allow configuration of stereo pairs of speakers

## Settings

The Airplay provider has a setting `Enable late joining` which can be used to allow players to join an existing AirPlay stream instead of restarting the whole stream. This may not work in all conditions so if issues such as unsynced playback occurs, disable this option. Also note that late joining players may take a few seconds to catch up. 

Support exists for devices which require pairing with a PIN before they can be used (e.g. Apple TV's) for the AirPlay 1 (RAOP) protocol. Select the `START THE AIRPLAY PAIRING PROCESS` button to register the PIN and when successful, click the `SAVE` button to save the authorisation key.

In addition to the [Individual Player Settings](../settings/individual-player.md) the AirPlay provider's indivudal players also have a unique section called `AirPlay Specific Settings`. The available settings are:

- <b>AirPlay version to use for streaming.</b> Most devices will default to AirPlay 1 (RAOP). Devices known to have a bad implementation of AirPlay 1 or are known to only support AirPlay 2 will default to AirPlay 2.
- <b>Device password.</b> If the device requires a password to play then it is added here

AirPlay 1 (RAOP) specific settings are:

- <b>Enable encryption.</b> Enable encrypted communication if required by the player. AirPlay 1 only.
- <b>Enable compression.</b> Enable to save some bandwidth by sending the audio as (lossless) ALAC
- <b>Audio buffer.</b> Amount of buffer (in milliseconds) the player should keep to absorb network throughput jitter. If audio dropouts are experienced, try increasing this value. The default is 1000
- <b>Ignore volume reports sent by the device itself.</b> The AirPlay protocol allows devices to report their own volume level. For some devices this is not reliable and can cause unexpected volume changes. Enable this option to ignore these reports

## Known Issues / Notes

- Music Assistant implements [RAOP](https://en.wikipedia.org/wiki/Remote_Audio_Output_Protocol) and [AirPlay2](https://en.wikipedia.org/wiki/AirPlay). Most devices will default to RAOP because AirPlay 2 devices should be backwards compatible by default. If a device has a bad implementation of AirPlay 1 and/or only supports AirPlay 2 without RAOP then it might work with AirPlay2.
- Whilst it is believed to have been fixed, issues have been reported when using Shairport and AirPlay 2. If problems are encountered they try disabling AirPlay 2
- Playback to Macbooks is not possible due to removal of RAOP support
- Apple TVs will be discovered but require pairing. In the player settings there is a pair button which will display a code on the screen of the Apple TV
- Samsung seems to have implemented AirPlay 2 in a way that it isn't fully backwards compatible. Everything seems to work, changing volume, song info is shown, and you can control the Samsung device as expected, however there is no sound. Users of similar applications such as Roon and anything based on slimproto have the same problem
- Some devices (such as Kodi or some 3rd party AirPlay receivers) require encryption. You can enable encryption in the advanced player settings if there is no sound
- Also try compression on and off in the advanced player settings if there is no sound
- A device password can be set for those devices which require it in the advanced settings
- If you find your player is going unavailable when still powered on then it may not be sending its keep alive message. A timeout can be configured for each player. Some users have reported they have needed to set it as long as one hour
- Apple Homekit has been reported to interfere with playback. If problems are enountered then remove the devices from Apple Homekit or try changing the setting in the preferences section of Homekit (iOS) for `AirPlay (Speaker & TV)`.
  - In this section specifically check if the `Only people in this home` is not selected. When this option is selected, MusicAssistant cannot play audio on the HomePod (without setting the proper password in the advanced settings of the provider). Select the option `Everyone on the same network` instead.
- If the AirPlay device incorrectly responds to change volume commands or randomly changes volume, try selecting the option `Ignore volume reports sent by the device` in the player's AirPlay Specific Settings
- AirPlay 2 implementation is new and has not yet been extensively tested. It is known that PIN-based pairing is not yet supported. There may be additional issues that are not yet known.
