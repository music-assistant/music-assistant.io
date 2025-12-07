# Sendspin-audio Provider  ![Preview image](../assets/icons/sendspin-icon.svg){ width=70 align=right }

[Sendspin-audio](https://www.sendspin-audio.com/) is an audio playback, control, and synchronization protocol developed by the [Open Home Foundation](https://www.openhomefoundation.org/). It is the **native playback protocol built into Music Assistant**, providing synchronized audio playback across multiple clients with sample-accurate timing.

Because Sendspin is **license-free and open source**, anyone can build apps, devices, and integrations using the protocol. The specification is available at [github.com/Sendspin/spec](https://github.com/Sendspin/spec).

!!! warning "Technical Preview"
    Sendspin and its implementation in Music Assistant are currently in **technical preview**. While functional, the protocol and implementation may change. Feedback is welcome!
    
## Features

- **Synchronized multi-room audio**: Sample-accurate playback across all connected devices
- **Automatic discovery**: Sendspin devices on your network are automatically detected by Music Assistant
- **Per-player DSP**: Individual equalizer and volume settings for each device
- **Bidirectional control**: Clients can control playback (play, pause, skip, etc.)
- **Real-time metadata**: Track info, artwork, and playback progress on all devices

## Known Issues / Notes

- The Sendspin provider is added by default
- The web player appears automatically in the player list

## Supported Roles

Sendspin is a flexible protocol that supports multiple roles. A single device can implement one or more of these roles:

| Role | Description |
|------|-------------|
| **Player** | Receives and outputs synchronized audio. Supports individual volume and mute settings. |
| **Controller** | Manages playback commands like play, pause, skip, volume, and shuffle. |
| **Metadata** | Displays information about the current track (title, artist, album). |
| **Artwork** | Shows album art and other visual imagery. Supports format and size preferences. |
| **Visualizer** | Creates audio-reactive visual effects based on the music being played. |

A device can combine multiple roles - for example, a smart display could implement Player, Metadata, Artwork, and Visualizer simultaneously.

## Supported Clients

Several client types can connect to Music Assistant via Sendspin:

| Client | Description |
|--------|-------------|
| **Web Browser** | The built-in Music Assistant web player uses Sendspin (via WebRTC) for local playback |
| **Mobile Apps** | Sendspin-compatible apps can connect and receive synchronized audio |
| **Hardware Devices** | Dedicated Sendspin receivers and speakers |
| **Home Assistant Voice PE** | Alpha firmware is available for the Home Assistant Voice Preview Edition |

## How It Works

### Automatic Discovery

Sendspin devices on your local network are automatically discovered via mDNS and will appear in Music Assistant. No manual configuration is required.

### The Web Player

The built-in web player in the Music Assistant frontend uses Sendspin for audio playback. When you open the web interface and use the local playback option, you're using Sendspin via WebRTC.

### Connection Methods

Sendspin supports two connection methods:

1. **WebRTC** (for browsers and remote access): Used by the web player and mobile apps. Works across networks and through firewalls.
2. **Direct WebSocket** (for local hardware): Hardware devices on your local network connect directly for lowest latency.

## Configuration

The Sendspin provider is **built-in and always enabled**. There are no configuration options required to get started.

Individual Sendspin players will appear automatically when clients connect, and standard [player settings](../settings/player-settings.md) apply.

## Limitations

- **Technical preview**: The protocol is still evolving
- **Network requirements**: For direct connections, devices must be on the same network as Music Assistant
- **WebRTC requirements**: For remote access via WebRTC, Home Assistant Cloud (Nabucasa) provides optimal TURN server support for reliable connections through firewalls

## Building Sendspin Devices

Developers interested in building Sendspin-compatible devices or apps can find the protocol specification and reference implementations at:

- [Sendspin Protocol Specification](https://github.com/Sendspin/spec)
- [aiosendspin](https://github.com/music-assistant/aiosendspin) - Python implementation
