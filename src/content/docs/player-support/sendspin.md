---
title: "Sendspin"
---

# Sendspin-audio Provider  <img src="/assets/icons/sendspin-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

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

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manual IP addresses for discovery.</b> Sendspin players are normally found on their own. If yours is not, add its IP address or network name here, for example 192.168.1.50 or speaker.local. Music Assistant will then connect to it directly, and keep trying if the device is switched off when MA starts
- <b>Allow legacy clients.</b> On by default. Accepts older Sendspin devices that do not follow the current specification, including devices that connect without encryption, whose traffic can be read by anyone on your local network. Turn it off to accept only up to date devices. This option is temporary and will be removed in a future release
- <b>Minimum PIN length.</b> The fewest digits a device may use for dynamic PIN pairing. The default is 4 and it can be set as high as 12

Sendspin does not stream over HTTP, so of the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols) these players show only **Output Channel Mode**. In addition to the standard [Individual Player Settings](/settings/individual-player/), Sendspin players have the following:

- <b>Pairing.</b> Each device shows its security state at the top of its settings, either paired, connected without pairing, or connected without encryption. Press <b>Setup</b> on the player to pair it by entering the PIN or pairing token the device gives you, or to allow it to play without pairing. Bridged players and the built in web player have nothing to pair
- <b>Unpair.</b> Removes the pairing with this device. Both sides forget the stored credential and the device reconnects as unpaired
- <b>Require pairing.</b> Shown for a device you allowed to connect without pairing. Stops it connecting that way
- <b>Manage device settings.</b> Opens the device's own pairing settings, where unpaired access, static PIN pairing and dynamic PIN pairing can each be turned on or off. While this section is open the device refuses connections from other servers, so close it again with <b>Close device management</b> when you are finished
- <b>Automatically play line-in on.</b> Only shown for devices with a line-in that can report when a signal is present. Chooses where that line-in plays automatically, either This device, another player, or Off
- <b>Static playback delay (ms).</b> Only shown for devices that support it. Shifts this player's audio to keep it in sync with the others, from 0 up to 5000 ms. Increase it if audio on this player is heard too late, for example to make up for delay added by an amplifier, active speakers or the device's own operating system
- <b>Preferred audio format.</b> The audio format used for playback on this player. Automatic (let client decide) is the default, and the other options are read from the device itself

## Known Issues / Notes

- Audio is sent to Sendspin players as 16 bit, so higher resolution material is converted on the way out
- Artwork clears briefly when you pause, seek, or move on to the next track
- Only one Music Assistant server on a network can use Sendspin
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

The player built into the Music Assistant web interface is itself a Sendspin player. On your own network it connects straight to the server, which sounds best. From anywhere else it connects over the internet instead, which still works but at a lower quality.

Like any other Sendspin player, the web player has a **Static playback delay (ms)** setting in its [Output Protocols settings](/settings/individual-player/#output-protocols). Music Assistant picks a value to suit your device, but it may need adjusting if the web player is heard out of step with your other speakers.

Audio quality in the web player depends on where you are listening from:

- **On your own network**: lossless FLAC on desktop browsers and Android. iPhone, iPad and Safari use Opus
- **From anywhere else**: every browser uses Opus

> [!NOTE]
> Firefox on Android cannot play from outside your own network.

## Connecting Other Sendspin Players

Sendspin players on your network are found automatically, so there is usually no address to enter anywhere.

If a player does ask you for a server address, or you are building a client of your own, Music Assistant listens at `ws://192.168.1.100:8927/sendspin` — replace the IP address with that of your Music Assistant server. The specification is published at <a href="https://github.com/Sendspin/spec" target="_blank" rel="noopener noreferrer">github.com/Sendspin/spec</a>.

> [!NOTE]
> The same `/sendspin` path exists on the main web interface port (8095), but that one is reserved for the built-in web player and will reject other clients.
