---
title: "Squeezelite"
---

# Squeezelite <img src="/assets/icons/slim-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant partly emulates a Logitech Media Server (which is now maintained as <a href="https://lyrion.org" target="_blank" rel="noopener noreferrer">Lyrion Music Server</a>, a.k.a. LMS) and has a full implementation of the <a href="https://lyrion.org/reference/slimproto-protocol/"  target="_blank" rel="noopener noreferrer">SlimProto Protocol</a> in the form of player provider support for <a href="https://github.com/ralph-irving/squeezelite" target="_blank" rel="noopener noreferrer">Squeezelite</a> clients.

This means it is possible to use Squeezelite client player software and hardware, directly with Music Assistant, as well as control Music Assistant from those Squeezelite client players (as well as other slimproto emulators such as SqueezeSlave, SoftSqueeze, and SqueezePlay).

Squeezelite clients are available for hardware from desktop OS to <a href="https://www.picoreplayer.org">Raspberry Pis</a> and <a href="https://github.com/sle118/squeezelite-esp32" target="_blank" rel="noopener noreferrer">ESP32-based devices</a>. There is also some legacy support for <a href="https://lyrion.org/players-and-controllers/hardware-comparison/" target="_blank" rel="noopener noreferrer">the original Logitech branded Squeezebox series of hardware players, (formerly known as SlimDevices)</a>, such as the Squeezebox Duet and the Squeezebox Radio.

## Features

- Squeezelite client devices are automatically detected by Music Assistant
- Individual player [DSP settings](/settings/individual-player/#dsp-settings) will be used for [group](/faq/groups/) playback
- Squeezelite client device buttons support
  - Any physical control buttons on the device should be supported as long as [flow mode](/faq/tech-info/#track-queueing) is not enabled

## Settings

In addition to the [Individual Player Settings](/settings/individual-player/) the Squeezelite provider also has a unique setting in the Advanced section and a unique Presets section

- <b>Presets.</b> Real Squeezebox hardware or jive(lite) based emulators support presets. This section allows the assignment of [Playlists](/usage/#playlists) or Radio Stations to those presets
- <b>Audio synchronisation delay correction</b>. Refer to the [Player Summary Table](/player-support/) to identify which types support sync correction
- <b>Enable Display Support.</b> Some Squeezelite hardware have a display and this setting enables support. When enabled, a second option is then used to select the `Visualization type`
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Content with unsupported sample rates will be resampled
- <b>Allow gapless playback (and crossfades) between tracks of different sample rates.</b> Only enable this if the player supports this option
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC` or `WAV`.
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all player support this correctly, therefore, if there are issues with playback try disabling this setting.
- <b>Enforce gapless playback with queue flow mode streaming.</b> Enabling this option will send all tracks as a contnuous audio stream. Use for players that dont natively support gapless or crossfading. Can also help with players that have difficulty transitioning between tracks. May have the side effect of losing metadata to the player

## Known Issues / Notes

- The focus of this provider in MA is to support the use of software Squeezelite clients (e.g. <a href="https://www.picoreplayer.org/" target="_blank" rel="noopener noreferrer">piCorePlayer</a>). Old original Squeezebox hardware is reported to work although there are reported issues with grouping. The MA core team cannot afford to expend resources on making these devices work any better than they do now. PRs to enhance support, however, are welcomed to the <a href="https://github.com/home-assistant-libs/aioslimproto" target="_blank" rel="noopener noreferrer">aioslimproto library</a> and/or the squeezelite provider in MA
- Running LMS on the same server as MA with the MA Squeezelite provider enabled can have undesired effects. The default setting for the port used by Slimproto is 3483. This can be changed in the settings for this provider, but non-default ports will not work with older hardware squeezebox players. 
- Make sure that you do not have the "slimproto" (Squeezebox players) integration running in Home Assistant
- Ordinarily do not use queue flow mode unless using older Squeezebox hardware player that has issues transitioning. Enabling queue flow mode may solve playback issues, however, it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- Squeezelite devices have no native mute functionality. If desired the "fake mute" control option can be used and this is found in the `Player Controls` section for each individual player
- Squeezelite groups use a fixed output format of 96 kHz / 24 bit
