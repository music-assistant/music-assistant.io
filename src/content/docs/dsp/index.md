---
title: Digital Signal Processing
description: Overview of the Digital Signal Processing (DSP) capabilities of Music Assistant and the filters that are available
---

# Digital Signal Processing

All players have the option to apply <a href="https://en.wikipedia.org/wiki/Digital_signal_processing" target="_blank" rel="noopener noreferrer">Digital Signal Processing</a> (DSP) filters to the audio stream. DSP allows the audio to be shaped and refined with a variety of filters. It can be used to tailor the sound to a room's acoustics, compensate for speaker characteristics, and fine-tune the frequency balance to personal taste.

The DSP option is found in the [Music Assistant settings for each player](/settings/individual-player/#dsp-settings) which means that each player has its own independently configurable DSP settings.

When playing in a group, individual player DSP settings will only be used for Universal groups and when playing via AirPlay, Squeezelite or Sendspin. Groups using all other protocols will have DSP disabled.

## The DSP Path

The DSP path consists of an INPUT pre-amplifier for initial gain control, followed by optional audio filters that can be added between input and output (multiple times if desired). The path ends with an OUTPUT stage that provides both gain control and a limiter (enabled by default) to prevent signal clipping.

The DSP settings can be enabled and disabled via a toggle which allows easy <a href="https://www.youtube.com/watch?v=KefGjPYyIO4" target="_blank" rel="noopener noreferrer">A-B testing</a>

The line on the left of the DSP settings represents the audio path, in sequential order, from the audio file (top) to the player (bottom). A dot on the line represents a component that changes the signal. The lack of a dot indicates that the particular component has been disabled.

Using the icons at the top of the view, the filters can be reordered, disabled/enabled or deleted.

![DSP image](/assets/screenshots/dsp.jpg)

## Available Filters

The following filters can be added to the DSP path. The simpler filters are explained below, while the more advanced filters are described on their own dedicated pages.

### Parametric Equalizer

Allows precise adjustment of specific frequency ranges and is the most powerful of the available filters. It is described in detail on the [Parametric Equalizer](/dsp/parametriceq/) page.

### Tone Controls

Provide simple bass, mid and treble adjustments of the audio signal. They are described in detail on the [Tone Controls](/dsp/tonecontrols/) page.
