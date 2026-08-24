---
title: "Samsung WAM"
---

# Samsung WAM <img src="/assets/icons/samsung-wam.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for Samsung's Wireless Audio Multiroom (WAM) speakers. This provider is contributed and maintained by [Oliver Stevens](https://github.com/Oliver-Stevens)

## Features

- Samsung WAM speakers are auto-detected by Music Assistant
- Full playback control: play, pause, and stop
- Volume and mute can be controlled from MA or the speaker's physical buttons, with volume and mute state kept in sync
- Physical inputs are selectable from MA: Wi-Fi, Bluetooth, AUX, Optical, and TV SoundConnect (available inputs vary by device)
- Native multi-room grouping: create, modify, and dissolve speaker groups directly within Music Assistant, with external group changes (e.g. via the official Samsung app) detected and reflected automatically
- Gapless playback, crossfade, shuffle, and repeat
- Announcements are supported
- Changing the player name in Music Assistant also updates the friendly name on the device

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a new provider** and select `Samsung WAM`.
2. Your Samsung WAM speakers will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manual IP addresses for discovery.</b> Specify one or more IP addresses to add speakers that aren't discovered automatically. Only needed in non-standard network setups, for example, if your speakers are on a different subnet from the MA server.

Samsung WAM players use the standard [Individual Player Settings](/settings/individual-player/), including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols).

WAM speakers always play the queue as one continuous stream, because they cannot queue the next track themselves. The stream starts at the first track's sample rate and only resamples later tracks upward, and there is no setting to change that. There is also no sample rates setting, as WAM speakers report their own support of 44.1kHz through to 192kHz at 16 or 24 bits.

The HTTP profile and metadata injection settings are set by the provider and hidden, so they do not appear on WAM players.

## Known Issues / Notes

- Flow mode is always active for WAM players as the WAM API does not support native URL enqueuing. All tracks are sent as a continuous stream, which is what enables gapless playback and crossfade.
- MA cannot display track metadata for audio it didn't initiate. Bluetooth, AUX, Optical, TV SoundConnect, and externally-initiated Wi-Fi streams appear as active but without now-playing information. Volume and mute state are tracked normally for all sources.
- The WAM API has no discrete stop command for URL playback. Stop is implemented as pause, so the player appears paused rather than idle after a stop command.
- After pausing or stopping playback, MA shows the player as muted. Resuming playback unmutes automatically.
- If the input is changed using a physical button (e.g. pressing the Bluetooth button) while Music Assistant is streaming, the provider automatically terminates the stream before switching to the new source.

