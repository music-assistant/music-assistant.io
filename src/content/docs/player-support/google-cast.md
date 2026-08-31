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
- Cast speakers can be synchronised with other Sendspin clients. This is experimental and off by default, see [Sendspin on Cast devices](#sendspin-on-cast-devices)

## Configuration

1. In Music Assistant, go to **Settings → Player Providers** and check whether `Google Cast` is already listed; it is added automatically on new installs. If it is missing, click **Add a player provider** and select `Google Cast`.
2. Your Cast devices, and any speaker groups created in the Google Home app, will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available when the advanced toggle is enabled:

- <b>Manual IP addresses for discovery.</b> Normally Music Assistant will automatically discover all players on the network, using multicast discovery on the (L2) local network, such as mDNS or UPNP (see [Networking Basics](/faq/networking/) for what these terms mean). In the case of special network setups or when issues are encountered with one or more players not being discovered, IP addresses can be manually added. Note that this setting is not recommended for normal use and should only be used by those with advanced networking knowledge. Also, if players are not on the same subnet as the Music Assistant server, issues may be experienced with streaming. In that case, ensure the players can reach the server on the network and double check the base URL configuration of the [Stream server in the settings](/settings/core/#streams)

In addition to the [Individual Player Settings](/settings/individual-player/) and the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols), the Google Cast provider has the following:

- <b>[HTTP Profile used for sending audio](/settings/individual-player/#http-profile-used-for-sending-audio).</b> Defaults to `Profile 3 - forced content length` on Cast devices. If playback stops part way through a track, see [playback stops part way through a track](#playback-stops-part-way-through-a-track) below
- <b>Use Music Assistant Cast App.</b> On by default and enables the use of a special MA Cast Receiver app to play media on cast devices. It has been optimised to provide better metadata and for future expansion. If issues are experienced with playback then try disabling this option.
- <b>[Sample rates supported by this player](/settings/individual-player/#sample-rates-supported-by-this-player).</b> Rates go up to 192 kHz / 24 bit for a single player, and up to 96 kHz for a Cast group. Only 44.1 kHz / 16 bit and 48 kHz / 16 bit are selected by default, because the higher ones are unreliable on some devices despite being officially supported. Add them and test rather than assume
- <b>[Prefer low-latency WAV for live sources](/settings/individual-player/#prefer-low-latency-wav-for-live-sources).</b> On by default for Cast devices. Turn it off if the device cannot play continuous WAV streams
- <b>[Enable queue flow mode](/settings/individual-player/#enable-queue-flow-mode).</b> On by default, as these devices handle one continuous stream more reliably than being fed tracks one at a time

## Sendspin on Cast devices

A Cast speaker can also be driven over [Sendspin](/player-support/sendspin/), which lets it play in sync alongside Sendspin, AirPlay and Sonos players in one group. This is experimental and switched off by default, so there is nothing to do here unless you want a Cast speaker in a mixed group.

To turn it on, open the player's settings, find Sendspin in the **Output Protocols** section and tick **Enable this protocol on this player (experimental)**.

Expect to do some tuning afterwards. Playback is rarely in sync straight away, so you will probably have to set **Static playback delay (ms)** for that speaker by hand until it lines up with the others. Some recent Cast firmwares cannot run Sendspin at all and there is no way to tell in advance, so you only find out the first time you play something. When that happens Music Assistant says so and stops offering Sendspin for that speaker. The standard Cast protocol is unaffected and keeps working.

## Known Issues / Notes

- Cast speakers do not support crossfading of audio. If you want crossfade and/or full gapless support, enable the "[flow mode](/faq/tech-info/#track-queueing)" in the player's advanced settings. Enabling flow mode may solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- If your Chromecast speakers are not auto detected or randomly unavailable then make sure that your Cast enabled speakers are on the same network as your Music Assistant server; guest Wi-Fi networks and VPNs are common causes of this. Additionally, ensure your router is not blocking the announcement messages (mDNS/multicast) that speakers use to be discovered. See the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered) for what to check in plain language
- After re-enabling a disabled speaker, it can take a while before the speaker is rediscovered, the process can be sped up by restarting Music Assistant
- It is possible to group cast players via a [Universal Group](/faq/groups/#universal-groups) although they may not play in sync
- TV/Video devices (not the AV dongles) are disabled by default
- Cast Groups containing only a stereo pair will not work
- Problems have been reported with battery powered devices. The most likely working configuration in the individual player settings is queue flow mode on (generic settings), with `Profile 2 - no content length`, Output Codec MP3, and sample rates set to 44.1 kHz and 48 kHz at 16 bit (advanced settings)
- MA serves all audio streams over a plain HTTP URL. Any device or software that requires HTTPS URLs will not work. For example, the Android app Castreceiver does not work
- Google has removed functionality that Sendspin needs on some devices. If a message says Sendspin does not work with the device, Music Assistant stops offering Sendspin for that speaker and will not offer it again. There is nothing to do, playback continues over the standard Cast protocol

## Troubleshooting playback problems

### Start by putting the sample rates back to default

Whatever the symptom, if you have changed **Sample rates supported by this player**, set it back to 44.1 kHz and 48 kHz at 16 bit in the individual player settings and try again.

Two things to know before you judge the result:

- **Test for longer than you think you need to.** If the problem is the one described below, a lower sample rate does not fix it, it only makes it take longer to appear. If playback used to fail after 30 seconds, listen for at least two or three minutes before deciding the change worked.
- **If it still fails at the default rates, leave them there and move on.** Sample rates by themselves are not the problem, but they may be contributing, so leave them at their default values until you have found a working configuration.

### Playback stops part way through a track

You may see any of these:

- Playback stops mid-track, and Music Assistant shows the player as paused a few seconds later
- The song starts itself again from the beginning
- The player briefly goes unavailable and comes back about 15 seconds later

In the individual player settings:

1. Set **Output codec to use for streaming audio to the player** to `MP3`.
2. If changing to MP3 makes playback last longer but it still fails eventually, set **HTTP Profile used for sending audio** to `Profile 1 - chunked`.

Once playback is reliable you can try putting the output codec back to `FLAC`, and raising the sample rates again, if you want the higher quality. Change one at a time, as more than one setting may be contributing.

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
