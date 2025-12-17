---
title: VBAN Receiver Plugin
description: Features and Notes for the VBAN Receiver Plugin
---

# VBAN Receiver ![Preview image](../assets/icons/vban-icon.svg){ width=126 align=right }

Music Assistant has the ability to act as a VBAN protocol (PCM audio over UDP) receiver. Contributed and maintained by [sprocket-9](https://github.com/sprocket-9)

VBAN is commonly used to route audio between devices on a local network. In Music Assistant, the VBAN Receiver plugin functions as a network-based auxiliary input, allowing external audio sources to be ingested as a standard MA streaming source. Typical use cases include transmitting system audio, audio from individual applications, or audio captured from soundcard inputs such as microphones or line-in devices on a remote machine. See the [VBAN Senders section below](#vban-senders)for examples of compatible sender implementations.

## Features

VBAN is an audio-over-IP protocol from [VB-Audio](https://vb-audio.com/Voicemeeter/vban.htm) that uses UDP to transmit high-quality, native PCM audio over a local network.

## Configuration

The plugin is multi-instance, so ensure each instance of the plugin is listening on its own unique UDP port and configured to match the stream parameters as set by the VBAN Sender.

### Settings

The VBAN Receiver plugin provides several configuration options that define how it connects to and receives audio from a remote VBAN sender. These settings ensure proper communication, format compatibility, and reliable playback performance.

The available settings are:

- <b>Receiver: UDP Port.</b> Defines the UDP port that the VBAN receiver listens on for incoming connections. Ensure that the server is reachable at the specified IP address and UDP port by remote VBAN senders
- <b>Sender: VBAN Stream Name.</b> Specifies the VBAN stream name to expect from the remote VBAN sender. This value must match the session name configured on the sender; otherwise, audio streaming will fail. The name is limited to a maximum of 16 ASCII characters
- <b>Sender: VBAN Sender hostname/IP address.</b> Sets the hostname or IP address of the remote VBAN sender device
- <b>PCM audio format.</b> Defines the VBAN PCM audio format expected from the remote sender. This must exactly match the format configured on the sender to ensure successful audio streaming
- <b>PCM sample rate.</b> Sets the VBAN PCM sample rate expected from the sender. This must match the sender’s configuration to maintain proper synchronization and playback
- <b>Channels.</b> Specifies the number of audio channels to be received (i.e. 1 or 2)

In the ADVANCED section:

- <b>Receiver: Bind to IP/interface.</b> Determines which network interface or IP address the VBAN receiver should bind to. Use `0.0.0.0` to listen on all available interfaces (default). This is an advanced option and typically does not require adjustment in standard setups
- <b>Receiver: VBAN queue strategy.</b> Configures the behavior when the receiver’s internal packet queue becomes full. This setting defines how packet overflow is handled during high-load conditions. The options are `Clear entire queue`, `Clear the oldest half of the queue` and `Remove single oldest queue entry`
- <b>Receiver: VBAN packets queue size.</b> Defines the maximum number of packets that can be queued before processing. This setting may be increased on systems with limited processing power but generally should not require modification

## Known Issues / Notes

- To listen to the plugin audio, navigate to the desired player’s NOW PLAYING view and then in the menu in the top right, select Source, and choose the desired VBAN Receiver
- Although VBAN is designed for real-time audio transmission, this plugin’s primary objective is to route remote system audio into MA rather than to achieve real-time playback. The plugin functions as an intermediary, forwarding incoming packets from the VBAN Sender directly to MA for processing as they are received. Since MA is optimized to process audio from plugins with minimal delay, overall latency should remain low. However, the audio buffering mechanisms employed by the various Players supported by MA also contribute to the total delay, resulting in a slight but unavoidable latency in the final audio output.
- The plugin transmits audio using connectionless UDP packets, making network quality a significant factor in performance. Factors such as the use of wired versus wireless connections, packet loss, network latency, and jitter can all affect audio reliability. Because UDP does not support retransmission of lost packets, degraded network conditions may cause interruptions or artifacts in playback.
- Performance may also be impacted if the VBAN Sender device operates under limited processing power or high system load, as this can delay packet transmission and lead to choppy or inconsistent audio.
- This plugin exclusively supports the VBAN AUDIO subprotocol type and does not accommodate any other VBAN subprotocols.

## VBAN Senders

### VB-Audio Windows Apps
Most of the [Voicemeeter apps](https://vb-audio.com/index.htm) (from the creator of the VBAN protocol) have VBAN Sender functionality, the "simplest" one being Voicemeeter Banana.  These audio mixer apps are full-featured, fairly complex and configuration highly system dependent.  The documentation and Youtube videos are far better sources of information on how to configure them than can be supplied here. At a basic level the apps will install many Voicemeeter system audio devices.  The Voicemeeter Input device is selected as the default output device to route whole system audio over VBAN, or selected as the output for an application in the Volume Mixer.

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

# Pipewire
Pipewire systems have the [vban-send](https://docs.pipewire.org/page_module_vban_send.html) module which creates a system audio sink.  Any audio sent to the sink is converted to VBAN packets and sent to the VBAN Receiver at the destination ip:port which needs set to the IP address of the MA server and listener port in the VBAN Receiver plugin.

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

In a headless environment the [pw-link](https://docs.pipewire.org/page_man_pw-link_1.html) command will link audio output ports to the vban-sender-ma input ports by port ID.  The links are only temporary and need recreated on reboot or pipewire restart, where the port IDs will likely have changed.  Dynamic linking using node properties rather than port IDs is achievable using the Wireplumber session manager and a lua script:

See [this guide](https://bennett.dev/auto-link-pipewire-ports-wireplumber/), [this GitHub script](https://github.com/bennetthardwick/dotfiles/blob/master/.config/wireplumber/scripts/auto-connect-ports.lua), and [this article](https://franks-reich.net/posts/creating_pipewire_links_with_wireplumber/) for examples.
