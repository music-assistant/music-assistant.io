---
title: "Samsung WAM"
---

# Samsung WAM <img src="/assets/icons/samsung-wam.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for Samsung's Wireless Audio Multiroom (WAM) speakers.

## Features

- Samsung WAM speakers are auto-detected by Music Assistant
- Full playback control: play, pause, and stop
- Volume and mute can be controlled from MA or the speaker's physical buttons, with volume and mute state kept in sync
- Physical inputs are selectable from MA: Wi-Fi, Bluetooth, AUX, Optical, and TV SoundConnect (available inputs vary by device)
- Native multi-room grouping: create, modify, and dissolve speaker groups directly within Music Assistant, with external group changes (e.g. via the official Samsung app) detected and reflected automatically
- Gapless playback, crossfade, shuffle, and repeat
- Announcements are supported
- Changing the player name in Music Assistant also updates the friendly name on the device

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manual IP addresses for discovery.</b> Specify one or more IP addresses to add speakers that aren't discovered automatically. Only needed in non-standard network setups, for example, if your speakers are on a different subnet from the MA server.

In addition to the [Individual Player Settings](/settings/individual-player/) the Samsung WAM players have the following settings:

- <b>Output codec to use for streaming audio to the player.</b> The default is `FLAC` but other options are `MP3`, `AAC`, or `WAV`.
- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only`, or `Mono (both channels)`.
- <b>Flow Mode sample rate.</b> Sets the sample rate for the continuous flow mode stream. Because WAM always uses flow mode, this setting governs the output rate for all playback. The default is `Smart (upsample only)`, which starts at the first track's sample rate and only resamples subsequent tracks upward. Other options are `Bit-perfect (no resampling)`, `48 kHz`, `96 kHz`, or `Highest supported by player`.

## Known Issues / Notes

- Flow mode is always active for WAM players as the WAM API does not support native URL enqueuing. All tracks are sent as a continuous stream, which is what enables gapless playback and crossfade.
- MA cannot display track metadata for audio it didn't initiate. Bluetooth, AUX, Optical, TV SoundConnect, and externally-initiated Wi-Fi streams appear as active but without now-playing information. Volume and mute state are tracked normally for all sources.
- The WAM API has no discrete stop command for URL playback. Stop is implemented as pause, so the player appears paused rather than idle after a stop command.
- After pausing or stopping playback, MA shows the player as muted. Resuming playback unmutes automatically.
- If the input is changed using a physical button (e.g. pressing the Bluetooth button) while Music Assistant is streaming, the provider automatically terminates the stream before switching to the new source.

