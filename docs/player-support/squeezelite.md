# Squeezelite ![Preview image](../assets/icons/slim-icon.svg){ width=70 align=right }

Music Assistant partly emulates a Logitech Media Server (which is now maintained as Lyrion Music Server, a.k.a. LMS) and has a full implementation of the Slim Protocol (also known as "SlimProto") in the form of player provider support for [Squeezelite](https://en.wikipedia.org/wiki/Squeezelite) clients.

This means it is possible to use Squeezelite client player software and hardware, directly with Music Assistant, as well as control Music Assistant from those Squeezelite client players (as well as other slimproto emulators such as SqueezeSlave, SoftSqueeze, and SqueezePlay).

Squeezelite clients are available for, and can run on, almost any hardware from desktop OS to ESP32-based devices. There is also some legacy support for [the original Logitech branded Squeezebox series of hardware players, (formerly known as SlimDevices)](https://lyrion.org/players-and-controllers/hardware-comparison/), such as the Squeezebox Duet and the Squeezebox Radio.

## Features

- Squeezelite client devices are automatically detected by Music Assistant
- Individual player [DSP settings](../settings/individual-player.md/#dsp-settings) will be used for [group](../faq/groups.md) playback
- Squeezelite client device buttons support
  - Any physical control buttons on the device should be supported as long as [flow mode](../faq/tech-info.md/#track-queueing) is not enabled

## Settings

In addition to the [Individual Player Settings](../settings/individual-player.md) the Squeezelite provider also has a unique setting in the Advanced section and a unique Presets section

- <b>Advanced - Enable Display Support.</b> Some Squeezelite hardware have a display and this setting enables support. When enabled, a second option is made available to select the `Visualization type`
- <b>Presets.</b> Real Squeezebox hardware or jive(lite) based emulators support presets. This section allows the assignment of [Playlists](../usage.md/#playlists) or Radio Stations to those presets

## Known Issues / Notes

- The focus of this provider in MA is to support the use of software Squeezelite clients (e.g. [piCorePlayer](https://www.picoreplayer.org/)). Old original Squeezebox hardware is reported to work although there are reported issues with grouping. The MA core team cannot afford to expend resources on making these devices work any better than they do now. PRs to enhance support, however, are welcomed to the [aioslimproto library](https://github.com/home-assistant-libs/aioslimproto) and/or the squeezelite provider in MA
- Running LMS on the same server as MA with the MA Squeezelite provider enabled can have undesired effects
- Make sure that you do not have the "slimproto" (Squeezebox players) integration running in Home Assistant
- Ordinarily do not use queue flow mode unless using older Squeezebox hardware player that has issues transitioning. Enabling queue flow mode may solve playback issues, however, it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
- Squeezelite devices have no native mute functionality. If desired the "fake mute" control option can be used and this is found in the `Player Controls` section for each individual player
- Squeezelite groups use a fixed output format of 96 kHz / 24 bit
