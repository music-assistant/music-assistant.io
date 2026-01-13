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

A device can combine multiple roles - for example, a smart display could implement Player, Metadata, and Artwork simultaneously.

## Supported Clients

Several client types can connect to Music Assistant via Sendspin:

| Client | Description |
|--------|-------------|
| **Web Browser** | The built-in Music Assistant web player uses Sendspin for local playback |
| **[Google Cast (Sendspin mode)](google-cast.md)** | Experimental Sendspin mode for Chromecast devices |
| **[Home Assistant Voice PE](https://esphome.github.io/home-assistant-voice-pe-alpha/)** | Alpha firmware for the Home Assistant Voice Preview Edition |
| **[Sendspin Python Client](https://github.com/Sendspin/sendspin)** | Cross-platform client for Windows, Linux, and macOS |
| **Mobile Apps** | Sendspin-compatible apps can connect and receive synchronized audio |
| **Hardware Devices** | Dedicated Sendspin receivers and speakers |

## How It Works

### Automatic Discovery

Sendspin devices on your local network are automatically discovered via mDNS and will appear in Music Assistant. No manual configuration is required.

### The Web Player

The built-in web player in the Music Assistant frontend uses Sendspin for audio playback. When on a local network, the web player will attempt to use a direct WebSocket connection for best performance; otherwise it falls back to WebRTC.

The sync delay can be adjusted under **Settings → User Interface → Sendspin sync delay**. This value is auto-selected based on your platform but may need manual adjustment.

#### Codec Support

The audio codec used depends on your connection and platform:

- **Local connections** (on the same network): FLAC (lossless) is used on desktop browsers and Android. iOS, iPadOS, and Safari use Opus.
- **Remote connections** (via WebRTC): All browsers use Opus.

!!! note
    Firefox on Android does not support remote (WebRTC) playback.

### Connection Methods

Sendspin supports two connection methods:

1. **Direct WebSocket**: Used automatically by clients on the same local network as Music Assistant, including the web player and hardware devices.
2. **WebRTC**: Used for remote access when not on the local network. Works across networks and through firewalls. The web player falls back to this method when a direct connection isn't possible.

## Configuration

The Sendspin provider is **built-in and always enabled**. There are no configuration options required to get started.

Individual Sendspin players will appear automatically when clients connect, and standard [player settings](../settings/player-provider.md) apply.

## Limitations

- **Technical preview**: The protocol is still evolving
- **Network requirements**: For direct connections, devices must be on the same network as Music Assistant
- **WebRTC requirements**: For remote access via WebRTC, Home Assistant Cloud (Nabucasa) provides optimal TURN server support for reliable connections through firewalls

## Building Sendspin Devices

Developers interested in building Sendspin-compatible devices or apps can find the protocol specification and reference implementations at:

- [sendspin-audio.com](https://www.sendspin-audio.com/) - Sendspin official website (including Sendspin spec overview and other references)
- [Sendspin organization on GitHub](https://github.com/Sendspin/spec) - All official Sendspin code repositories (owned and governed by the Open Home Foundation)
  - [Sendspin Protocol Specification](https://github.com/Sendspin/spec) - Sendspin Protocol Specification repository
- [sendspin-cli](https://github.com/Sendspin/sendspin-cli) - Sendspin CLI (Command-Line Interface terminal client, server, and deamon)
- [aiosendspin](https://github.com/Sendspin/aiosendspin) - Sendspin Python library
  - aiosendspin is used in the Sendspin provider implementation inside [Music Assistant server](https://github.com/music-assistant/server) as well as in sendspin-cli
- [sendspin-js](https://github.com/Sendspin/sendspin-js) - Sendspin TypeScript library
  - sendspin-js is also used in Sendspin's [cast](https://github.com/Sendspin/cast) library which is a Google Cast receiver for Sendspin used by Music Assistant's web interface and [Sendspin Party](https://github.com/Sendspin/sendspin-cli?tab=readme-ov-file#sendspin-party)
- [SendspinKit](https://github.com/Sendspin/SendspinKit) - Sendspin Swift client library (for Apple platforms)
- [sendspin-go](https://github.com/Sendspin/sendspin-go) - Sendspin Go library
- [sendspin-rs](https://github.com/Sendspin/sendspin-rs) - Sendspin Rust library
- [Sendspin.SDK](https://github.com/chrisuthe/windowsSpin/tree/master/src/Sendspin.SDK) - Unofficial C#/.NET used by [windowsSpin](https://github.com/chrisuthe/windowsSpin)

Note that not all of these linked above are up-to-date and some may use  very early proof-of-concept implementations of the Sendspin protocol, (contributions is wanted to updating them).

For developing your own Sendspin libraries from scratch also see:

- [time-filter](https://github.com/Sendspin/time-filter) - Reference implementation for the Sendspin time synchronization filter (written in C++)

## Specification Compliance and Deviations

There are some gaps between this implementation and the specification at [github.com/Sendspin/spec](https://github.com/Sendspin/spec). Both are subject to change. Known deviations include:

- Player Format Changes through `stream/request-format` are not yet supported
- The `paused` `playback_state` is never used - only `playing` and `stopped` are sent to clients
- All streams are ended immediately when playback stops, skipping to the next track, or when seeking. Artwork is also cleared during pause, seek, or loading of the next track
- Multi Server Support messages are implemented but not fully utilized - only a single server per network is supported
- Only 16-bit audio formats are supported
