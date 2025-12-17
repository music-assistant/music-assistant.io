# Google Cast ![Preview image](../assets/icons/chromecast-logo.png){ width=70 align=right }

Music Assistant has full support for Google Cast based devices. This includes Google's own hardware like the Google Nest speakers but also a wide range of other brands have "Chromecast builtin" support, like Harman Kardon, JBL, Canton and many others. 

## Features

- Cast speakers are auto detected by Music Assistant
- Music Assistant supports playing to cast groups which are created in the Google Home app
- When using Google cast groups then perfect sync across players in that group is possible
- Any physical control buttons on the device should be supported as well as voice control
- Cast speakers can be synchronised with other Sendspin clients (experimental)

## Settings

In addition to the [Individual Player Settings](../settings/individual-player.md) the Google Cast provider also has some unique settings as follows:

- <b>Enable experimental Sendspin mode</b>. When enabled, Music Assistant will use the Sendspin protocol for synchronized audio streaming instead of the standard Chromecast protocol. This allows grouping Chromecast devices with other Sendspin compatible players for multi-room synchronized playback. When enabled, a new player will appear named "PlayerName (Sendspin)" - use this Sendspin player when creating groups with other Sendspin clients, not the original Chromecast player
- <b>Sendspin sync delay.</b> Static delay in milliseconds to adjust audio synchronization. Positive values delay playback, negative values advance it. Use this to compensate for device specific audio latency
- <b>Sendspin codec.</b> Select the audio codec for Sendspin streaming. Options are FLAC (default), PCM, and Opus. Note that Opus doesn't work natively on Cast devices and requires software decoding, which may be too CPU intensive for Google Cast Audio devices.
- <b>Use Music Assistant Cast App.</b> On by default and enables the use of a special MA Cast Receiver app to play media on cast devices. It has been optimised to provide better metadata and for future expansion. If issues are experienced with playback then try disabling this option.

## Known Issues / Notes

- Cast speakers do not support crossfading of audio. If you want crossfade and/or full gapless support, enable the "[flow mode](../faq/tech-info.md/#track-queueing)" in the player's advanced settings. Enabling flow mode may solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- If your Chromecast speakers are not auto detected or randomly unavailable then make sure that your Cast enabled speakers are on the same network/subnet as your Music Assistant server. Additionally, ensure that multicast traffic (more specifically mDNS) can travel freely as that is used for the discovery of players
- After re-enabling a disabled speaker, it can take a while before the speaker is rediscovered, the process can be sped up by restarting Music Assistant
- It is possible to group cast players via a [Universal Group](../faq/groups.md#universal-groups) although they may not play in sync
- TV/Video devices (not the AV dongles) are disabled by default
- Cast Groups containing only a stereo pair will not work
- Problems have been reported with battery powered devices. The most likely working configuration in the individual player settings is, queue flow mode on (generic settings) and HTTP Profile 2 and Output Codec MP3 (advanced settings)
