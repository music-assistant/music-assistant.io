# Squeezelite ![Preview image](../assets/icons/slim-icon.svg){ width=70 align=right }

Music Assistant (partly) emulates a Logitech Media Server and has a full implementation of the Slim Protocol (aka slimproto) in the form of support for [Squeezelite](https://en.wikipedia.org/wiki/Squeezelite) clients.
This means you can use squeezelite software players, which run on almost any hardware, including your own desktop OS and even ESP32 boards, directly with Music Assistant. There is some support for the original Logitech branded Squeezebox hardware players like the Radio and the Duet.

## Features

- Squeezelite devices are auto detected in Music Assistant
- Squeezelite devices will play in sync
- Any physical control buttons on the device should be supported as long as [flow mode](../faq/tech-info.md/#track-queueing) is not enabled
- The player settings allow configuration of stereo pairs of speakers

## Known Issues / Notes

- The focus of this provider in MA is to support the use of software Squeezelite clients (e.g. [piCorePlayer](https://www.picoreplayer.org/)). Old Squeezebox hardware is reported to work although there are reported issues with grouping. The MA core team cannot afford to expend resources on making these devices work any better than they do now. PRs to enhance support, however, are welcomed to the [aioslimproto library](https://github.com/home-assistant-libs/aioslimproto) and/or the squeezelite provider in MA
- Running LMS on the same server as MA with the MA Squeezelite provider enabled can have undesired effects
- Make sure that you do not have the "slimproto" integration running in Home Assistant
- Ordinarily do not use queue flow mode unless using older Squeezebox hardware player that has issues transitioning. Enabling queue flow mode may solve playback issues however it might come with the side effect of disabling actual physical buttons and/or display of metadata on the device itself
