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

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS` and check whether `Google Cast` is already listed; it is added automatically on new installs. If it is missing, click `ADD A NEW PROVIDER` and select `Google Cast`.
2. Your Cast devices, and any speaker groups created in the Google Home app, will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available when the advanced toggle is enabled:

- <b>Manual IP addresses for discovery.</b> Normally Music Assistant will automatically discover all players on the network, using multicast discovery on the (L2) local network, such as mDNS or UPNP (see [Networking Basics](/faq/networking/) for what these terms mean). In the case of special network setups or when issues are encountered with one or more players not being discovered, IP addresses can be manually added. Note that this setting is not recommended for normal use and should only be used by those with advanced networking knowledge. Also, if players are not on the same subnet as the Music Assistant server, issues may be experienced with streaming. In that case, ensure the players can reach the server on the network and double check the base URL configuration of the [Stream server in the settings](/settings/core/#streams)

In addition to the [Individual Player Settings](/settings/individual-player/) the Google Cast provider also has some unique settings as follows:

- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC` or `WAV`.
- <b>HTTP Profile used for sending audio.</b> An advanced setting that changes how the audio is sent to the player. Cast devices use `Profile 3 - forced content length` by default. If playback stops part way through a track, see [playback stops part way through a track](#playback-stops-part-way-through-a-track) below
- <b>Use Music Assistant Cast App.</b> On by default and enables the use of a special MA Cast Receiver app to play media on cast devices. It has been optimised to provide better metadata and for future expansion. If issues are experienced with playback then try disabling this option.
- <b>Sample rates supported by this player.</b> Defaults to 44.1 kHz and 48 kHz at 16 bit. This is a deliberately safe setting rather than something detected from your device, and higher rates are offered for you to try. Cast officially supports FLAC up to 96 kHz 24 bit, which works on most of Google's own hardware, but other brands vary and some handle it badly, so test rather than assume. Content above what is selected here is resampled
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all players support this correctly, therefore, if there are issues with playback try disabling this setting.
- <b>Enforce gapless playback with queue flow mode streaming.</b> Enabling this option will send all tracks as a continuous audio stream. Use for players that do not natively support gapless or crossfading. Can also help with players that have difficulty transitioning between tracks. May have the side effect of losing metadata to the player

## Known Issues / Notes

- Cast speakers do not support crossfading of audio. If you want crossfade and/or full gapless support, enable the "[flow mode](/faq/tech-info/#track-queueing)" in the player's advanced settings. Enabling flow mode may solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- If your Chromecast speakers are not auto detected or randomly unavailable then make sure that your Cast enabled speakers are on the same network as your Music Assistant server; guest Wi-Fi networks and VPNs are common causes of this. Additionally, ensure your router is not blocking the announcement messages (mDNS/multicast) that speakers use to be discovered. See the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered) for what to check in plain language
- After re-enabling a disabled speaker, it can take a while before the speaker is rediscovered, the process can be sped up by restarting Music Assistant
- It is possible to group cast players via a [Universal Group](/faq/groups/#universal-groups) although they may not play in sync
- TV/Video devices (not the AV dongles) are disabled by default
- Cast Groups containing only a stereo pair will not work
- Problems have been reported with battery powered devices. The most likely working configuration in the individual player settings is queue flow mode on (generic settings), with `Profile 2 - no content length`, Output Codec MP3, and sample rates set to 44.1 kHz and 48 kHz at 16 bit (advanced settings)

## Troubleshooting playback problems

### Start by putting the sample rates back to default

Whatever the symptom, set **Sample rates supported by this player** back to 44.1 kHz and 48 kHz at 16 bit in the individual player settings, and try again.

Two things to know before you judge the result:

- **Test for longer than you think you need to.** If the problem is the one described below, a lower sample rate does not fix it, it only makes it take longer to appear. If playback used to fail after 30 seconds, listen for at least two or three minutes before deciding the change worked.
- **If it still fails at the default rates, leave them there and move on.** Sample rates are then ruled out. Carrying on adjusting them only changes how long the failure takes to arrive.

### Playback stops part way through a track

You may see any of these, and they are all the same fault:

- Playback stops mid-track, and Music Assistant shows the player as paused a few seconds later
- The song starts itself again from the beginning
- The player briefly goes unavailable and comes back about 15 seconds later

**What identifies it:** playback stops after the same length of time every time, and that time gets shorter the better the audio quality, from minutes on MP3 down to under a minute on high resolution FLAC. The device keeps everything it downloads and runs out of room, so better quality fills it sooner. If that is what you are seeing, your network is not the problem and no amount of Wi-Fi tuning will help.

**The fix:** in the individual player settings, set **HTTP Profile used for sending audio** to `Profile 1 - chunked`.

> [!IMPORTANT]
> **For Cast groups, change it everywhere.** One member of a group does the actual playing, the group picks which one, and that choice can change when devices are restarted. Set the profile on the group and on every speaker in it. Changing only one looks like it worked until the next restart.

### Speakers not found, or dropping off at random

That is a different problem. Work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered), or the [dropout checklist](/faq/networking/#checklist-my-players-drop-out-or-stop-after-a-while) if they are found but unreliable.

### Collecting logs that will actually help

If none of the above solves it, these are the settings that make a Cast problem diagnosable. Both are needed, and they are in different places.

1. Set the Google Cast provider's log level to **verbose**. This records the conversation with the device, including any error it reports back.
2. Set the Streams controller log level to **debug** in [System Settings](/settings/core/). This logs every request for audio along with which device asked, which is how you tell that a device has restarted the stream rather than simply stopped.
3. Restart Music Assistant, which starts a fresh log.
4. Reproduce the problem, and note the time of day the audio stopped.
5. Download the log from [Diagnostics](/settings/core/#diagnostics) before restarting again.

Keep the recording short, ideally under five minutes, because verbose logging is very noisy.

It is also worth running a [continuous ping](/faq/networking/#checklist-my-players-drop-out-or-stop-after-a-while) to the device while you reproduce the problem. If the audio stops while the ping stays perfect, that rules the network out.
