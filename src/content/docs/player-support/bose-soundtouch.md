---
title: Bose SoundTouch
---

# Bose SoundTouch <img src="/assets/icons/bose-soundtouch-icon.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [Bose SoundTouch](https://www.bose.com/) speakers. Following Bose's end of life of the SoundTouch platform, this provider keeps the speakers usable within Music Assistant by exposing native control and mapping their physical preset buttons to Music Assistant content. Contributed and maintained by [Odn0](https://github.com/Odn0).

!!! note
    This provider is currently in `alpha`. It does not stream audio itself: Music Assistant controls the speaker natively while audio playback is delegated to a linked playback protocol (see [Audio playback](#audio-playback) below).

## Features

- SoundTouch speakers are auto detected by Music Assistant
- Native control of power, volume, mute, play/pause, next/previous track and source selection
- The physical preset buttons (1-6) on the speaker can be mapped to any Music Assistant media item
- SoundTouch speakers play in multiroom sync when grouped, using the native SoundTouch zone API
- MA follows multiroom groups being created/updated/removed from the SoundTouch app
- MA will show metadata when the speaker is playing non-MA content (e.g. Bluetooth, AUX or a built-in streaming service)
- Optional native announcements that play as an overlay, ducking and resuming the current playback

## Audio playback

SoundTouch has no usable API to play an arbitrary stream, so Music Assistant does not send audio to the speaker directly. Instead, the SoundTouch provider handles control and discovery while audio is routed through a **linked playback protocol** on the same device, typically [DLNA](/player-support/dlna/). Thus, the SoundTouch provider depends on the DLNA provider and will enable it automatically.

## Configuration

1. In Music Assistant, go to **Settings → Player Providers**, click **Add a new provider** and select `Bose SoundTouch`.
2. Your SoundTouch speakers will be discovered automatically and will appear in the player list, usually within a minute.

If a device does not appear, work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered).

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manually defined IP addresses.</b> SoundTouch speakers are normally discovered automatically. Use this setting to add speakers by IP address when auto discovery does not work on your network
- <b>Bose SoundTouch app key.</b> Optional. A Bose SoundTouch developer app key enables sending announcements to the speaker as an overlay that ducks the current music and resumes it afterwards. Leave this empty to disable native announcements (they then play through the linked playback protocol instead)
- <b>Presets 1-6.</b> Each of the six physical preset buttons can be mapped to a Music Assistant media item. The mapping is shared by every SoundTouch speaker of this provider, so preset 4 plays the same thing on all of them. To set one up, use the <b>Search engine preset</b> section: choose a <b>Media type</b>, enter your keywords and press <b>Search</b>, pick a <b>Result</b>, choose which button it belongs to under <b>Select for preset</b>, then press <b>Assign result to preset</b>. The chosen item appears under <b>Presets</b> as <b>Preset 1-6 to play</b>, where a Music Assistant URI (provider://media_type/identifier) can also be entered manually instead of using the search flow

In addition to the [Individual Player Settings](/settings/individual-player/) and the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols), the SoundTouch players have the following settings:

- <b>Overwrite preset 1-6.</b> Press one of these buttons to hand that physical preset button on this speaker over to Music Assistant. Do this once per speaker for each button you want to use. The button's label tells you when the speaker already has something stored on that preset. What the button plays is set in the provider settings above
- <b>[Output codec to use for streaming audio to the player](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player).</b> Defaults to MP3 on SoundTouch speakers, which gives by far the most reliable playback. The other codecs are available but are more likely to cause problems here
- <b>[Sample rates supported by this player](/settings/individual-player/#sample-rates-supported-by-this-player).</b> Rates go up to 192 kHz / 24 bit

## Known Issues / Notes

- The provider is in an early (`alpha`) stage. The Bose SoundTouch platform has reached end of life and is no longer maintained by Bose, so behaviour can vary between firmware versions and models.
- Native announcements require a Bose SoundTouch developer app key. Without one, announcements are played through the linked playback protocol instead.
