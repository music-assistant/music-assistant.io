---
title: MPD Player Provider
description: A Description of the MPD Player Provider
---
# MPD Player <img src="/assets/icons/mpd-icon.svg" alt="MPD icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for devices running <a href="https://www.musicpd.org/" target="_blank" rel="noopener noreferrer">Music Player Daemon (MPD)</a>. Contributed and maintained by <a href="https://github.com/OzGav" target="_blank" rel="noopener noreferrer">Gavin</a>

## Features

- Stream music from Music Assistant to any device running MPD
- Pause, seek, and volume control supported

## Setup

MPD players are not auto-discovered. Each MPD server must be added in the provider settings. Entry is done by adding either IP or IP:PORT into the MPD SERVERS field. If no port is added then 6600 is assumed. As each server is added click outside of the entry box to cause the entry to be accepted.

If the MPD server requires a password then the player will be setup but will be inactive until the password is set on the individual player

MPD is available for Linux, Windows, and macOS. See the <a href="https://www.musicpd.org/download.html" target="_blank" rel="noopener noreferrer">MPD download page</a> for installation instructions.

### MPD audio output configuration

MA delivers audio by directing MPD to fetch a stream over HTTP. MPD must have an ALSA (or other local audio) output configured in `mpd.conf` to play that stream to hardware. A minimal example:
```ini
audio_output {
    type        "alsa"
    name        "My Output"
    mixer_type  "software"
}
```

For full configuration options refer to the <a href="https://mpd.readthedocs.io/en/stable/user.html#configuring-audio-outputs" target="_blank" rel="noopener noreferrer">MPD audio output documentation</a>.

## Settings

In addition to the [Individual Player Settings](/settings/individual-player/), the MPD provider has the following unique settings:

- <b>Output Codec.</b> The audio format MA streams to MPD. MP3 is the default. AAC and WAV (uncompressed) are also available
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Please note some older (Generation 1) devices only support up to 48kHz/16bit. Content with unsupported sample rates will be resampled.
- <b>HTTP profile used for send audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues.
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all player support this correctly, therefore, if there are issues with playback try disabling this setting.

## Known Issues / Notes

- FLAC is not available as an output codec. MPD requires a seekable stream to probe the FLAC header, which is incompatible with MA's continuous HTTP stream
- Flow mode is always enabled and cannot be disabled; this is required for MA to deliver audio to MPD via HTTP
- Volume control requires a mixer to be configured in MPD. If no mixer is available, volume control will not be shown
- MPD itself imposes no limit on audio quality — it will pass the stream to the hardware as-is. The effective quality ceiling is therefore determined by the output hardware and the codec selected in MA. WAV (uncompressed PCM) will deliver the highest quality but will require significnt bandwidth. 
