---
title: "Music Player Daemon (MPD)"
description: A Description of the MPD Player Provider
---
# MPD Player <img src="/assets/icons/mpd-icon.svg" alt="MPD icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for devices running <a href="https://www.musicpd.org/" target="_blank" rel="noopener noreferrer">Music Player Daemon (MPD)</a>. Contributed and maintained by <a href="https://github.com/OzGav" target="_blank" rel="noopener noreferrer">Gavin</a>

## Features

- Stream music from Music Assistant to any device running MPD
- Pause, seek, and volume control supported

## Configuration

MPD players are not auto-discovered. Each MPD server must be added in the provider settings. Entry is done by adding either IP or IP:PORT into the MPD SERVERS field. If no port is added then 6600 is assumed. As each server is added click outside of the entry box to cause the entry to be accepted.

If the MPD server requires a password then the player will be setup but will be inactive until the password is set on the individual player

MPD is available for Linux, Windows, and macOS. See the <a href="https://www.musicpd.org/download.html" target="_blank" rel="noopener noreferrer">MPD download page</a> for installation instructions.

### MPD audio output configuration

Music Assistant sends the audio to MPD, but MPD still needs to know where to send it next. That means an output has to be configured in `mpd.conf`, usually ALSA. Without one, MPD will accept the music and play it nowhere. A minimal example:
```ini
audio_output {
    type        "alsa"
    name        "My Output"
    mixer_type  "software"
}
```

For full configuration options refer to the <a href="https://mpd.readthedocs.io/en/stable/user.html#configuring-audio-outputs" target="_blank" rel="noopener noreferrer">MPD audio output documentation</a>.

## Settings

MPD players use the standard [Individual Player Settings](/settings/individual-player/), including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols). Three of those differ here:

- <b>Output codec to use for streaming audio to the player.</b> MP3 is the default here, with AAC and WAV also available. FLAC is not offered for MPD
- <b>Prefer low-latency WAV for live sources.</b> On by default for MPD. Turn it off if the server cannot play continuous WAV streams
- <b>Sample rates supported by this player.</b> MPD does not report what it can handle, so set these by hand to match your output hardware

## Known Issues / Notes

- FLAC cannot be used here. MPD needs to look through the whole file before it will play FLAC, which it cannot do with a continuous stream
- Flow mode is always on for MPD players and cannot be turned off. It is the only way Music Assistant can feed audio to MPD
- Volume control only appears if a mixer has been set up in MPD. Without one, there is nothing for Music Assistant to control
- MPD passes on whatever it is given without limiting the quality, so what you get depends on your sound hardware and on the Output Codec chosen above. WAV sounds best but uses far more of your network
