---
title: "Sendspin"
---

# Sendspin-audio Provider  <img src="/assets/icons/sendspin-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

<a href="https://www.sendspin-audio.com/" target="_blank" rel="noopener noreferrer">Sendspin</a> is Music Assistant's own way of sending audio to a player. It keeps several devices playing in step with each other, closely enough that the same track can play in more than one room without any echo between them.

It is built into Music Assistant and switched on from the start, so there is nothing to install. The web player you use in your browser is a Sendspin player, and Sendspin speakers and apps appear on their own once they are on your network.

Sendspin was developed by the <a href="https://www.openhomefoundation.org/" target="_blank" rel="noopener noreferrer">Open Home Foundation</a> and is free for anyone to build on, so the range of devices and apps that support it is growing.

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

Standard [player settings](/settings/player-provider/) apply. Specific settings available for this player type are:

- <b>Manual IP addresses for discovery.</b> Sendspin players are normally found on their own. If yours is not, add its IP address or network name here, for example `192.168.1.50` or `speaker.local`. Music Assistant will then connect to it directly, and keep trying if the device is switched off when MA starts
- <b>Sync delay (ms).</b> Not all devices allow this correction but when available is allows a for static delay to be applied for audio synchronisation
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`

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
| **[Google Cast (Sendspin mode)](/player-support/google-cast/)** | Experimental Sendspin mode for Chromecast devices |
| **<a href="https://esphome.github.io/home-assistant-voice-pe-alpha/" target="_blank" rel="noopener noreferrer">Home Assistant Voice PE</a>** | Alpha firmware for the Home Assistant Voice Preview Edition |
| **<a href="https://github.com/trudenboy/sendspin-bt-bridge" target="_blank" rel="noopener noreferrer">Sendspin Bluetooth Bridge</a>** | Bridges Bluetooth speakers as MA players — multi-device, multiroom sync, web dashboard. Deploys as HA addon, Docker, or LXC |
| **<a href="https://www.sendspin-audio.com/code/" target="_blank" rel="noopener noreferrer"> Various Sendspin Clients</a>** | Clients are becoming available for various platforms |

## The Web Player

The player built into the Music Assistant web interface is itself a Sendspin player. On your own network it connects straight to the server, which sounds best. From anywhere else it connects over the internet instead, which still works but at a lower quality.

The sync delay can be adjusted under **Settings → User Interface → Sendspin sync delay**. Music Assistant picks a value to suit your device, but it may need adjusting.

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
