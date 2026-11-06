---
title: "Sendspin"
---

# Sendspin <img src="/assets/icons/sendspin-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

<a href="https://www.sendspin-audio.com/" target="_blank" rel="noopener noreferrer">Sendspin</a> is Music Assistant's own way of sending audio to a player. It keeps several devices playing in sync with each other, closely enough that the same track can play in more than one room without any echo between them.

It is built into Music Assistant and switched on from the start, so there is nothing to install. The web player you use in your browser is a Sendspin player, and Sendspin speakers and apps appear on their own once they are on your network.

Sendspin was developed by the <a href="https://www.openhomefoundation.org/" target="_blank" rel="noopener noreferrer">Open Home Foundation</a> and is free for anyone to build on, so the range of devices and apps that support it is growing.

To bring audio from a compatible Sendspin line-in, microphone, or other input into Music Assistant, see the [Sendspin Source plugin](/plugins/sendspin-source/).

> [!CAUTION]
> **Technical Preview**
>
> Sendspin is still in technical preview. It works, but expect it to change.
    
## Features

- **Synchronised multi-room audio**: every connected device stays in step
- **Automatic discovery**: Sendspin devices on your network are found on their own
- **Per-player audio settings**: each device gets its own equaliser and volume
- **Control from the device**: play, pause and skip can be driven from the player as well as from Music Assistant
- **Track information**: title, artwork and progress appear on every device

## Configuration

The Sendspin provider is **built-in and always enabled**. There are no configuration options required to get started.

Individual Sendspin players will appear automatically when clients connect

## Setting Up a Device

A device that allows guest access, which means connecting without pairing, is ready to play to as soon as it is found. A device that only accepts pairing, a device with an audio input, and a device that another server is using show <b>Setup required</b> until you set them up here. Select the player, or press <b>Start setup</b> in its settings:

- <b>Connect unpaired.</b> Only offered when the device allows guest access. Quick, but the connection is not verified. A device with an audio input offers <b>Connect unpaired with audio input</b> instead, and <b>Connect unpaired without audio input</b> if it can also play
- <b>Pair device.</b> Sets up a permanent, verified connection using the pairing code the device gives you. A device without a pairing code gives you a pairing token instead

To pair a device you connected unpaired, use <b>Reconfigure player</b>. Bridged players and the built-in web player have nothing to set up.

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manual IP addresses for discovery.</b> Sendspin players are normally found on their own. If yours is not, add its IP address or network name here, for example 192.168.1.50 or speaker.local. Music Assistant will then connect to it directly, and keep trying if the device is switched off when MA starts

Sendspin does not stream over HTTP, so of the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols) these players show only **Output Channel Mode**, plus their own version of the sample rate setting described below. In addition to the standard [Individual Player Settings](/settings/individual-player/), Sendspin players have the following:

- <b>Security status.</b> The Sendspin settings of each device start with its security state: paired, connected through guest access, connected without encryption (see [Older Devices](#older-devices)), or pairing lost. A device that lost its pairing cannot play until you pair it again with <b>Reconfigure player</b> or remove the old pairing with <b>Unpair</b>
- <b>Unpair.</b> Removes the pairing with this device. Both sides forget the stored credential
- <b>Turn on audio input / Turn off audio input.</b> Shown for a device with an audio input that is connected through guest access. Starts or stops sending its audio to Music Assistant through the [Sendspin Source plugin](/plugins/sendspin-source/)
- <b>Automatically play line-in on.</b> Only shown for devices with a line-in that can report when a signal is present. Chooses where that line-in plays automatically, either This device, another player, or Off
- <b>Static playback delay (ms).</b> Only shown for devices that support it. Shifts this player's audio to keep it in sync with the others, from 0 up to 5000 ms. Increase it if audio on this player is heard too late, for example to make up for delay added by an amplifier, active speakers or the device's own operating system
- <b>Preferred audio format.</b> The audio format used for playback on this player. Automatic (player's preferred codec) is the default, and the other options are read from the device itself. On Automatic the player keeps the codec it prefers, and <b>Sample rate selection</b> decides the sample rate. Choosing a specific format here sets both
- <b>Sample rate selection.</b> Decides the sample rate of the audio sent to this player, and can only be changed while the preferred audio format is Automatic. <b>Smart</b> is the default. It starts at the first track's rate and only restarts the stream when a later track needs a higher rate. The other options are Bit-perfect, 48 kHz, 96 kHz and Highest supported by player, and work the same as in [Flow Mode sample rate](/settings/individual-player/#flow-mode-sample-rate). Only rates the player supports in its preferred codec are used, so a rate it cannot play is replaced by the closest one it can

Preferred audio format, Sample rate selection, and Unpair on a paired device only show while <b>Show advanced settings</b> is on.

## Older Devices

Sendspin is still evolving, and some players and clients still use an older development version of it. Future versions of Music Assistant will stop supporting these, so update them when an update is available:

- <b>Devices without encryption.</b> Play straight away without any setup, but cannot be paired and cannot use an audio input. Their security status shows that they are connected without encryption
- <b>Devices with an older pairing version.</b> Pair and play like current devices. Once paired, their settings include <b>Manage device settings</b>, which opens the device's own pairing settings, where you can turn pairing with a static or a dynamic pairing code on or off. These switches only show while <b>Show advanced settings</b> is on. While this section is open the device refuses connections from other servers, so close it again with <b>Close device management</b> when you are finished

## Known Issues / Notes

- Many Sendspin devices ask for 16 bit audio, so higher resolution material may be converted on the way out
- Artwork clears briefly when you pause, seek, or move on to the next track
- A Sendspin device plays for one server at a time. Playing to a device moves it to this server, even while another server is playing on it. A device that another server is using can still be set up here, but pairing only works while the other server is not playing on it
- Players must be on the same network as Music Assistant to connect directly. Listening from elsewhere works through the web player, and Home Assistant Cloud gives the most reliable connection through a firewall
- If using Sendspin on a Chromecast device, be aware that, due to the lack of reported metadata, the Home Assistant media player entity may show 'idle' with no track details even while audio is playing correctly; check the Music Assistant UI for the true playback state

## Supported Clients

Several client types can connect to Music Assistant via Sendspin:

| Client | Description |
|--------|-------------|
| **Web Browser** | The built-in Music Assistant web player uses Sendspin for local playback |
| **[Google Cast (Sendspin mode)](/player-support/google-cast/)** | Experimental Sendspin mode for Chromecast devices, off by default. See [Sendspin on Cast devices](/player-support/google-cast/#sendspin-on-cast-devices) |
| **<a href="https://esphome.github.io/home-assistant-voice-pe/" target="_blank" rel="noopener noreferrer">Home Assistant Voice PE</a>** | Built into recent Voice PE firmware. Update the device with the official installer, choosing a pre-release build if the current stable one does not show up as a player |
| **[Local Audio](/player-support/local-audio/)** | Plays to the soundcard, USB DAC or built-in output of the machine it runs on. Deploys as a Home Assistant App or with Docker Compose |
| **<a href="https://github.com/trudenboy/sendspin-bt-bridge" target="_blank" rel="noopener noreferrer">Sendspin Bluetooth Bridge</a>** | Bridges Bluetooth speakers as MA players, with multi-device support, multiroom sync and a web dashboard. Deploys as a Home Assistant App, Docker, or LXC |
| **<a href="https://www.sendspin-audio.com/code/" target="_blank" rel="noopener noreferrer"> Various Sendspin Clients</a>** | Clients are becoming available for various platforms |

## The Web Player

The player built into the Music Assistant web interface is itself a Sendspin player. It plays wherever the web interface works, at home or through [Remote Access](/settings/remote-access/).

Like any other Sendspin player, the web player has a **Static playback delay (ms)** setting in its [Output Protocols settings](/settings/individual-player/#output-protocols). It starts at 0 and may need adjusting if the web player is heard out of step with your other speakers.

The audio format the web player uses depends on the browser:

- **Chrome, Edge and other Chromium based browsers, including on Android**: Opus when the web interface is opened over HTTPS, which includes Remote Access. Lossless FLAC when it is opened over plain HTTP, for example at `http://192.168.1.100:8095`
- **Firefox, except on iPhone and iPad**: lossless FLAC
- **Safari, and every browser on iPhone and iPad**: Opus

A Chromium based browser can play lossless FLAC over HTTPS too: pick one of the FLAC formats in the web player's advanced **Preferred audio format** setting.

## Connecting Other Sendspin Players

Sendspin players on your network are found automatically, so there is usually no address to enter anywhere.

If a player does ask you for a server address, or you are building a client of your own, Music Assistant listens at `ws://192.168.1.100:8927/sendspin` — replace the IP address with that of your Music Assistant server. The specification is published at <a href="https://github.com/Sendspin/spec" target="_blank" rel="noopener noreferrer">github.com/Sendspin/spec</a>.

> [!NOTE]
> The same `/sendspin` path exists on the main web interface port (8095), but that one is reserved for the built-in web player and will reject other clients.
