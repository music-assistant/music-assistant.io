---
title: "Squeezelite"
---

# Squeezelite <img src="/assets/icons/slim-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://github.com/ralph-irving/squeezelite" target="_blank" rel="noopener noreferrer">Squeezelite</a> players: software and hardware ranging from desktop apps to <a href="https://www.picoreplayer.org">Raspberry Pis</a> and <a href="https://github.com/sle118/squeezelite-esp32" target="_blank" rel="noopener noreferrer">ESP32-based devices</a>. There is also some legacy support for <a href="https://lyrion.org/players-and-controllers/hardware-comparison/" target="_blank" rel="noopener noreferrer">the original Logitech branded Squeezebox series of hardware players (formerly known as SlimDevices)</a>, such as the Squeezebox Duet and the Squeezebox Radio.

These players normally expect to talk to a Logitech Media Server, now known as <a href="https://lyrion.org" target="_blank" rel="noopener noreferrer">Lyrion Music Server</a>. Music Assistant presents itself as one, so your players connect to it as they would to any other server and you need nothing else in between. Control works both ways: the buttons on the player drive Music Assistant, just as they would drive Lyrion. The same applies to other software of this kind, such as SqueezeSlave, SoftSqueeze and SqueezePlay.

## Features

- Squeezelite client devices are automatically detected by Music Assistant
- Individual player [DSP settings](/dsp/) will be used for [group](/faq/groups/) playback
- Squeezelite client device buttons support
  - Any physical control buttons on the device should be supported as long as [flow mode](/faq/tech-info/#track-queueing) is not enabled

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a player provider** and select `Squeezelite`.
2. Your Squeezelite players will be discovered automatically and will appear in the player list, usually within a minute.

If a player does not appear, first check that it is not connected to a different server. These devices can often only connect to one server at a time, so a player bound to another server (for example an existing LMS/Lyrion installation) will not be seen by MA. Otherwise, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Slimproto port.</b> The TCP and UDP port the slimproto server runs on. The default is 3483 and hardware Squeezebox players do not support anything else. Only change it if you want to run another slimproto server alongside this one for software players
- <b>Classic Squeezebox CLI Port.</b> Some slimproto players use the telnet CLI to request extra information. It runs on port 9090 by default. Set it to 0 to switch it off, which is safe if no player of yours relies on it
- <b>JSON-RPC CLI/API Port.</b> Some slimproto players use the LMS style JSON-RPC API to fetch album art and other metadata. It runs on port 9000 by default. Set it to 0 to switch it off
- <b>Enable Discovery server.</b> On by default. Broadcasts discovery packets so slimproto clients find and connect to this server on their own. Turn it off if you run more than one slimproto server on your network, or you do not want clients connecting automatically

In addition to the [Individual Player Settings](/settings/individual-player/) and the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols), the Squeezelite provider has these settings of its own:

- <b>Presets.</b> Real Squeezebox hardware or jive(lite) based emulators support presets. This section lets you assign a Playlist or Radio Station from your library to each of the ten presets
- <b>Audio synchronization delay correction.</b> Shifts this player's audio by up to ±500 ms to keep it in step with the others. Refer to the Player Summary Table to identify which types support sync correction
- <b>Enable display support.</b> Some Squeezelite hardware has a display and this setting enables support for it
- <b>Visualization type.</b> The visualisation shown on the display during playback. It only becomes available once display support is enabled
- <b>[Prefer low-latency WAV for live sources](/settings/individual-player/#prefer-low-latency-wav-for-live-sources).</b> On by default for Squeezelite. Turn it off if the player cannot play continuous WAV streams
- <b>Allow crossfades between tracks of different sample rates.</b> Only enable this if the player supports it. It applies while flow mode is off, so it is greyed out once flow mode is enabled

There is no sample rates setting for Squeezelite players, as each one reports the highest rate it can take and Music Assistant works from that. There is also no HTTP profile setting, as it is fixed at Profile 2 for slimproto.

## Known Issues / Notes

- The focus of this provider in MA is to support the use of software Squeezelite clients (e.g. <a href="https://www.picoreplayer.org/" target="_blank" rel="noopener noreferrer">piCorePlayer</a>). Old original Squeezebox hardware is reported to work although there are reported issues with grouping. The MA core team cannot afford to expend resources on making these devices work any better than they do now. PRs to enhance support, however, are welcomed to the <a href="https://github.com/home-assistant-libs/aioslimproto" target="_blank" rel="noopener noreferrer">aioslimproto library</a> and/or the squeezelite provider in MA
- Running LMS on the same server as MA with the MA Squeezelite provider enabled can have undesired effects. The default setting for the port used by Slimproto is 3483. This can be changed in the settings for this provider, but non-default ports will not work with older hardware squeezebox players. 
- Make sure that you do not have the "slimproto" (Squeezebox players) integration running in Home Assistant
- Ordinarily do not use queue flow mode unless using older Squeezebox hardware player that has issues transitioning. Enabling queue flow mode may solve playback issues, however, it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- Squeezelite devices have no native mute functionality. If desired the "fake mute" control option can be used and this is found in the `Player Controls` section for each individual player
- Squeezelite sync groups send a flow stream to all members. The master format is chosen from the leader player's Flow Mode sample rate setting (bounded by the leader's supported rates); each member then receives that rate, or its own maximum supported rate if lower
