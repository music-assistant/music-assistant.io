---
title: VBAN Receiver Plugin
description: Features and Notes for the VBAN Receiver Plugin
---

# VBAN Receiver <img src="/assets/icons/vban-icon.svg" alt="Preview image" style="width: 126px; float: right;"  loading="lazy" />

This plugin lets another computer on your network send its audio to Music Assistant, which then plays it on any of your speakers. It behaves like an aux input: whatever the other machine is playing turns up in Music Assistant as something you can choose to listen to. Contributed and maintained by <a href="https://github.com/sprocket-9" target="_blank" rel="noopener noreferrer">sprocket-9</a>

That can be everything coming out of the other computer, the sound from one particular application, or something plugged into it such as a microphone or a turntable on a line-in.

VBAN is the method used to carry the audio across the network. It comes from <a href="https://vb-audio.com/Voicemeeter/vban.htm" target="_blank" rel="noopener noreferrer">VB-Audio</a> and sends the sound uncompressed, so nothing is lost on the way. The sending computer needs software that can speak it — see [VBAN Senders](#vban-senders) below for the usual choices.

## Features

- Take in audio from any VBAN sender on your network and play it like any other source
- Send everything from another computer, or just one application, a microphone or a line-in
- Add the plugin more than once, one for each incoming feed

## Configuration

Most of these settings have to match what you set on the sending computer, or no sound will come through. Fill in the sender's side first, then copy the same values here.

If you add the plugin more than once, give each one its own port number.

### Settings

- <b>Receiver: UDP Port.</b> The port Music Assistant listens on. The sending computer needs to be able to reach your Music Assistant server on this port
- <b>Sender: VBAN Stream Name.</b> The name given to the feed on the sending computer. It has to match exactly or nothing will come through. Up to 16 characters, letters and numbers only
- <b>Sender: VBAN Sender hostname/IP address.</b> The address of the computer sending the audio
- <b>PCM audio format.</b> Match this to the sending computer
- <b>PCM sample rate.</b> Match this to the sending computer
- <b>Channels.</b> `1` for mono or `2` for stereo

In the ADVANCED section:

- <b>Receiver: Bind to IP/interface.</b> Which of your server's network connections to listen on. The default `0.0.0.0` means all of them, which is almost always what you want
- <b>Receiver: VBAN queue strategy.</b> What to do when audio arrives faster than it can be dealt with. The options are `Clear entire queue`, `Clear the oldest half of the queue` and `Remove single oldest queue entry`
- <b>Receiver: VBAN packets queue size.</b> How much audio can wait to be dealt with. Raising it may help on a slower server, but most people never need to touch it

## Known Issues / Notes

- To listen to the plugin audio, navigate to Browse in the sidebar and choose the desired VBAN Receiver stream
- Expect a small delay between the sound leaving the other computer and coming out of your speakers. Most of it comes from the player at the end rather than from this plugin, so how much you get depends on which speakers you are using. This is not meant for anything where the sound has to line up with a picture
- Audio sent this way is not resent if any of it goes missing on the way, so the quality of your network matters. A wired connection is far more reliable than wi-fi. On a congested or weak network you may hear dropouts or crackling
- A sending computer that is slow or busy can also cause the sound to break up
- Only the audio part of VBAN is supported, not its other functions

## VBAN Senders

### VB-Audio Windows Apps
Most of the <a href="https://vb-audio.com/index.htm" target="_blank" rel="noopener noreferrer">Voicemeeter apps</a> (from the creator of the VBAN protocol) have VBAN Sender functionality, the "simplest" one being Voicemeeter Banana.  These audio mixer apps are full-featured, fairly complex and configuration highly system dependent.  The documentation and Youtube videos are far better sources of information on how to configure them than can be supplied here. At a basic level the apps will install many Voicemeeter system audio devices.  The Voicemeeter Input device is selected as the default output device to route whole system audio over VBAN, or selected as the output for an application in the Volume Mixer.

Basic tips:

* Make sure to run the install program as Administrator.
* In the Hardware Out section, configure the A1 Output Device as a MME device.
* In some cases, disabling power saving on network cards may be necessary.

Press the VBAN button to configure an Outgoing Stream:
* IP Address to:  MA Server IP
* Stream name, sample rate and audio format - mirror these in the VBAN Receiver plugin settings
* UDP Port - Help documentation shows the app used to allow setting the VBAN Receiver's UDP port here, but that's no longer the case and defaults to port 6980 so use this port in the VBAN Receiver plugin settings.
* Press "On" to start the stream.

If error numbers/red lights appear next to the outgoing VBAN stream in the Voicemeeter VBAN section this is a **sender-side issue, NOT receiver/MA side**.  Something in the mixer configuration is likely wrong.

## Pipewire
Pipewire systems have the <a href="https://docs.pipewire.org/page_module_vban_send.html" target="_blank" rel="noopener noreferrer">vban-send</a> module which creates a system audio sink.  Any audio sent to the sink is converted to VBAN packets and sent to the VBAN Receiver at the destination ip:port which needs set to the IP address of the MA server and listener port in the VBAN Receiver plugin.

`~/.config/pipewire/pipewire.conf.d/01-vban.conf`

```
{
	name = libpipewire-module-vban-send
	args = {
		source.ip = 0.0.0.0
		destination.ip = 127.0.0.1 # MA Server IP
		destination.port = 6980 # VBAN Receiver plugin listener port
		sess.name = "Network AUX" # Match in VBAN Receiver plugin
		audio.format = "S16LE" # Match in VBAN Receiver plugin
		audio.rate = 44100 # Match in VBAN Receiver plugin
		audio.channels = 2 # Match in VBAN Receiver plugin
		stream.props = {
			media.class = "Audio/Sink"
			node.name = "vban-sender-ma"
			node.description = "VBAN sender for MA"
		}
	}
}
```

In a desktop environment, the sink is available as an audio output in the sound manager UI for routing whole system or per-app audio to.

In a headless environment the <a href="https://docs.pipewire.org/page_man_pw-link_1.html" target="_blank" rel="noopener noreferrer">pw-link</a> command will link audio output ports to the vban-sender-ma input ports by port ID.  The links are only temporary and need recreated on reboot or pipewire restart, where the port IDs will likely have changed.  Dynamic linking using node properties rather than port IDs is achievable using the Wireplumber session manager and a lua script:

See <a href="https://bennett.dev/auto-link-pipewire-ports-wireplumber/" target="_blank" rel="noopener noreferrer">this guide</a>, <a href="https://github.com/bennetthardwick/dotfiles/blob/master/.config/wireplumber/scripts/auto-connect-ports.lua" target="_blank" rel="noopener noreferrer">this GitHub script</a>, and <a href="https://franks-reich.net/posts/creating_pipewire_links_with_wireplumber/" target="_blank" rel="noopener noreferrer">this article</a> for examples.
