---
title: "Sendspin"
---

# Sendspin-audio Provider  <img src="/assets/icons/sendspin-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

<a href="https://www.sendspin-audio.com/" target="_blank" rel="noopener noreferrer">Sendspin-audio</a> is an audio playback, control, and synchronization protocol developed by the <a href="https://www.openhomefoundation.org/" target="_blank" rel="noopener noreferrer">Open Home Foundation</a>. It is the **native playback protocol built into Music Assistant**, providing synchronized audio playback across multiple clients with sample-accurate timing.

Because Sendspin is **license-free and open source**, anyone can build apps, devices, and integrations using the protocol. The specification is available at <a href="https://github.com/Sendspin/spec" target="_blank" rel="noopener noreferrer">github.com/Sendspin/spec</a>.

> [!CAUTION]
> **Technical Preview**
>
> Sendspin and its implementation in Music Assistant are currently in **technical preview**. While functional, the protocol and implementation may change.
    
## Features

- **Synchronized multi-room audio**: Sample-accurate playback across all connected devices
- **Automatic discovery**: Sendspin devices on your network are automatically detected by Music Assistant
- **Per-player DSP**: Individual equalizer and volume settings for each device
- **Bidirectional control**: Clients can control playback (play, pause, skip, etc.)
- **Real-time metadata**: Track info, artwork, and playback progress on all devices

## Configuration

The Sendspin provider is **built-in and always enabled**. There are no configuration options required to get started.

Individual Sendspin players will appear automatically when clients connect, and standard [player settings](/settings/player-provider) apply.


## Known Issues / Notes

- The Sendspin provider is added by default
- The web player appears automatically in the player list

### Limitations

- **Technical preview**: The protocol is still evolving
- **Network requirements**: For direct connections, devices must be on the same network as Music Assistant
- **WebRTC requirements**: For remote access via WebRTC, Home Assistant Cloud (Nabucasa) provides optimal TURN server support for reliable connections through firewalls

### Specification Compliance and Deviations

There are some gaps between this implementation and the specification at <a href="https://github.com/Sendspin/spec" target="_blank" rel="noopener noreferrer">github.com/Sendspin/spec</a>. Both are subject to change. Known deviations include:

- Player Format Changes through `stream/request-format` are not yet supported
- The `paused` `playback_state` is never used - only `playing` and `stopped` are sent to clients
- All streams are ended immediately when playback stops, skipping to the next track, or when seeking. Artwork is also cleared during pause, seek, or loading of the next track
- Multi Server Support messages are implemented but not fully utilized - only a single server per network is supported
- Only 16-bit audio formats are supported

## Supported Clients

Several client types can connect to Music Assistant via Sendspin:

| Client | Description |
|--------|-------------|
| **Web Browser** | The built-in Music Assistant web player uses Sendspin for local playback |
| **[Google Cast (Sendspin mode)](google-cast)** | Experimental Sendspin mode for Chromecast devices |
| **<a href="https://esphome.github.io/home-assistant-voice-pe-alpha/" target="_blank" rel="noopener noreferrer">Home Assistant Voice PE</a>** | Alpha firmware for the Home Assistant Voice Preview Edition |
| **<a href="https://www.sendspin-audio.com/code/" target="_blank" rel="noopener noreferrer"> Various Sendspin Clients</a>** | Clients are becoming available for various platforms |

## How It Works

### Automatic Discovery

Sendspin devices on the local network are automatically discovered via mDNS and will appear in Music Assistant. No manual configuration is required.

### The Web Player

The built-in web player in the Music Assistant frontend uses Sendspin for audio playback. When on a local network, the web player will attempt to use a direct WebSocket connection for best performance; otherwise it falls back to WebRTC.

The sync delay can be adjusted under **Settings → User Interface → Sendspin sync delay**. This value is auto-selected based on the platform but may need manual adjustment.

#### Codec Support

The audio codec used depends on the connection and platform:

- **Local connections** (on the same network): FLAC (lossless) is used on desktop browsers and Android. iOS, iPadOS, and Safari use Opus.
- **Remote connections** (via WebRTC): All browsers use Opus.

> [!NOTE]
> Firefox on Android does not support remote (WebRTC) playback.

### Connection Methods

Sendspin supports two connection methods:

1. **Direct WebSocket**: Used automatically by clients on the same local network as Music Assistant, including the web player and hardware devices.
2. **WebRTC**: Used for remote access when not on the local network. Works across networks and through firewalls. The web player falls back to this method when a direct connection isn't possible.
