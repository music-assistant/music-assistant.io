# Squeezelite ![Preview image](../assets/icons/slim-icon.svg){ width=70 align=right }

Music Assistant partly emulates an Logitech Media Server (which is now maintained as Lyrion Music Server, a.k.a. LMS) and has a full implementation of the Slim Protocol (also known as "SlimProto") in the form of player provider support for [Squeezelite](https://en.wikipedia.org/wiki/Squeezelite) clients.

This means it is possible to use Squeezelite client player software and hardware, directly with Music Assistant, as well as control Music Assistant from those Squeezelite client players (as well as other slimproto emulators such as SqueezeSlave, SoftSqueeze, and SqueezePlay).

Squeezelite clients are available for, and can run on, almost any hardware from desktop OS to ESP32-based devices. There is also some legacy support for [the original Logitech branded Squeezebox series of hardware players, (formerly known as SlimDevices)](https://lyrion.org/players-and-controllers/hardware-comparison/), such as the Squeezebox Duet and the Squeezebox Radio.

## Features

- Squeezelite client devices are automatically detected by Music Assistant
- Individual player [DSP settings](index.md/#dsp-settings) will be used for [group](../faq/groups.md) playback
- Squeezelite client device buttons support
  - Any physical control buttons on the device should be supported as long as [flow mode](../faq/tech-info.md/#track-queueing) is not enabled

## Known Issues / Notes

- The focus of this provider in MA is to support the use of software Squeezelite clients (e.g. [piCorePlayer](https://www.picoreplayer.org/)). Old original Squeezebox hardware is reported to work although there are reported issues with grouping. The MA core team cannot afford to expend resources on making these devices work any better than they do now. PRs to enhance support, however, are welcomed to the [aioslimproto library](https://github.com/home-assistant-libs/aioslimproto) and/or the squeezelite provider in MA
- Running LMS on the same server as MA with the MA Squeezelite provider enabled can have undesired effects
- Make sure that you do not have the "slimproto" (Squeezebox players) integration running in Home Assistant
- Ordinarily do not use queue flow mode unless using older Squeezebox hardware player that has issues transitioning. Enabling queue flow mode may solve playback issues, however, it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
