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

In addition to the [Individual Player Settings](/settings/individual-player/), the MPD provider has the following unique settings:

- <b>Output Codec.</b> The audio format MA streams to MPD. MP3 is the default. AAC and WAV (uncompressed) are also available
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`
- <b>Sample rates supported by this player.</b> This setting is automatically set upon player discovery but the sample rates and bit depths supported by the player can be manually set. Content with unsupported sample rates will be resampled.
- <b>HTTP profile used for send audio.</b> This is considered to be a very advanced setting and should only be adjusted if needed. For example, try the different options if the player stops halfway through a stream or for other playback related issues.
- <b>Try to inject metadata into stream (ICY).</b> Enabling this option attempts to provide metadata to the player which can be used to show track info, even when flow mode is enabled. Not all player support this correctly, therefore, if there are issues with playback try disabling this setting.

## Known Issues / Notes

- FLAC cannot be used here. MPD needs to look through the whole file before it will play FLAC, which it cannot do with a continuous stream
- Flow mode is always on for MPD players and cannot be turned off. It is the only way Music Assistant can feed audio to MPD
- Volume control only appears if a mixer has been set up in MPD. Without one, there is nothing for Music Assistant to control
- MPD passes on whatever it is given without limiting the quality, so what you get depends on your sound hardware and on the Output Codec chosen above. WAV sounds best but uses far more of your network
