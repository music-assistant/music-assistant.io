---
title: "Google Cast"
---

# Google Cast <img src="/assets/icons/chromecast-logo.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has full support for Google Cast based devices. This includes Google's own hardware like the Google Nest speakers but also a wide range of other brands have "Chromecast builtin" support, like Harman Kardon, JBL, Canton and many others. 

## Features

- Cast speakers are auto detected by Music Assistant
- Music Assistant supports playing to cast groups which are created in the Google Home app
- When using Google cast groups then perfect sync across players in that group is possible
- Any physical control buttons on the device should be supported as well as voice control
- Cast speakers can be synchronised with other Sendspin clients (experimental)

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available when the advanced toggle is enabled:

- <b>Manual IP addresses for discovery.</b> Normally Music Assistant will automatically discover all players on the network, using multicast discovery on the (L2) local network, such as mDNS or UPNP. In the case of special network setups or when issues are encountered with one or more players not being discovered, IP addresses can be manually added. Note that this setting is not recommended for normal use and should only be used by those with advanced networking knowledge. Also, if players are not on the same subnet as the Music Assistant server, issues may be experienced with streaming. In that case, ensure the players can reach the server on the network and double check the base URL configuration of the [Stream server in the settings](/settings/core/#streams)

In addition to the [Individual Player Settings](/settings/individual-player/) the Google Cast provider also has some unique settings as follows:

- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC` or `WAV`.
- <b>HTTP profile used for send audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues. The default differs between player types
- <b>Use Music Assistant Cast App.</b> On by default and enables the use of a special MA Cast Receiver app to play media on cast devices. It has been optimised to provide better metadata and for future expansion. If issues are experienced with playback then try disabling this option.
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Content with unsupported sample rates will be resampled
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all player support this correctly, therefore, if there are issues with playback try disabling this setting.
- <b>Enforce gapless playback with queue flow mode streaming.</b> Enabling this option will send all tracks as a contnuous audio stream. Use for players that dont natively support gapless or crossfading. Can also help with players that have difficulty transitioning between tracks. May have the side effect of losing metadata to the player

## Known Issues / Notes

- Cast speakers do not support crossfading of audio. If you want crossfade and/or full gapless support, enable the "[flow mode](/faq/tech-info/#track-queueing)" in the player's advanced settings. Enabling flow mode may solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- If your Chromecast speakers are not auto detected or randomly unavailable then make sure that your Cast enabled speakers are on the same network/subnet as your Music Assistant server. Additionally, ensure that multicast traffic (more specifically mDNS) can travel freely as that is used for the discovery of players
- After re-enabling a disabled speaker, it can take a while before the speaker is rediscovered, the process can be sped up by restarting Music Assistant
- It is possible to group cast players via a [Universal Group](/faq/groups/#universal-groups) although they may not play in sync
- TV/Video devices (not the AV dongles) are disabled by default
- Cast Groups containing only a stereo pair will not work
- Problems have been reported with battery powered devices. The most likely working configuration in the individual player settings is, queue flow mode on (generic settings) and HTTP Profile 2 and Output Codec MP3 (advanced settings)
