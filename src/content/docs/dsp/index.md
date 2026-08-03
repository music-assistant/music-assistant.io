---
title: Digital Signal Processing
description: Overview of the Digital Signal Processing (DSP) capabilities of Music Assistant and the filters that are available
---

# Digital Signal Processing

All players have the option to apply <a href="https://en.wikipedia.org/wiki/Digital_signal_processing" target="_blank" rel="noopener noreferrer">Digital Signal Processing</a> (DSP) filters to the audio stream. DSP allows the audio to be shaped and refined with a variety of filters. It can be used to tailor the sound to a room's acoustics, compensate for speaker characteristics, and fine-tune the frequency balance to personal taste.

The DSP option is found in the [Music Assistant settings for each player](/settings/individual-player/#dsp-settings) which means that each player has its own independently configurable DSP settings.

When playing in a group, individual player DSP settings will only be used for Universal groups and when playing via AirPlay, Squeezelite or Sendspin. Groups using all other protocols will have DSP disabled.

## The DSP Path

The DSP path consists of an INPUT pre-amplifier for initial gain control, followed by optional audio filters that can be added between input and output (multiple times if desired). The path ends with an OUTPUT stage that provides gain control. If there is a risk of clipping, for example after boosting with an equalizer or the Gain filter, a Safety Limiter filter can be added to the path.

The DSP settings can be enabled and disabled via a toggle which allows easy <a href="https://www.youtube.com/watch?v=KefGjPYyIO4" target="_blank" rel="noopener noreferrer">A-B testing</a>

The line on the left of the DSP settings represents the audio path, in sequential order, from the audio file (top) to the player (bottom). A dot on the line represents a component that changes the signal. The lack of a dot indicates that the particular component has been disabled.

Using the icons at the top of the view, the filters can be reordered, disabled/enabled or deleted.

Some filters work on the relationship between the left and right channels and therefore only apply to stereo audio. Balance, Stereo Width and Crossfeed are all passed through unchanged when the source is mono, so they can be left in the path without affecting mono material.

![DSP image](/assets/screenshots/dsp.jpg)

## Where to Start

DSP is entirely optional and most people will never need to touch it. If a player sounds fine, leaving DSP switched off is a perfectly good choice, as it means the audio reaches the player exactly as it was in the source file.

For anyone approaching it for the first time, the Tone Controls and Balance filters are the place to begin. They are the two simplest filters, they behave in the way the equivalent controls on an amplifier do, and neither of them can do any harm. The Parametric Equalizer is far more capable, but it is also the easiest to get lost in, so it is worth becoming familiar with the simple controls first.

Three habits make the process much easier. Change one thing at a time, so that it is always clear what caused a difference. Use the enable toggle to compare the processed and unprocessed sound, as the ear adjusts surprisingly quickly and a change that seemed like an improvement often turns out not to be. Finally, prefer cutting to boosting: reducing the frequencies that are too prominent generally sounds more natural than raising the ones that are not, and it avoids any risk of clipping.

It is also worth remembering that DSP is configured per player, so corrections made for the kitchen speaker have no effect on the living room system, and each player can be treated entirely on its own terms.

### Choosing a Filter

- **The music is too bassy, too dull or too bright**:  Start with [Tone Controls](/dsp/tonecontrols). If a specific narrow problem remains, such as one boomy note in a room, move on to the [Parametric Equalizer](/dsp/parametriceq/).
- **The sound is pulled towards one side, or the listening position is off-centre**: Use Balance.
- **One player is noticeably quieter or louder than the others**: Use Gain to bring it into line.
- **Listening on headphones**: Crossfeed will make a speaker mix sound more natural, and hard-panned older recordings can be brought in further with Stereo Width. If a correction preset exists for the headphones, for example from [AutoEQ](https://autoeq.app/), it can be imported directly into the [Parametric Equalizer](/dsp/parametriceq/).
- **A boost has introduced clipping or harshness on peaks**: Add a Safety Limiter after the filter responsible.

## Available Filters

The following filters can be added to the DSP path. The simpler filters are explained below, while the more advanced filters are described on their own dedicated pages.

### Balance

Shifts the stereo image left or right, from −100 (full left) through 0 (centred) to +100 (full right). Rather than the near side being boosted, the opposite side is quietened so the audio never becomes louder than the source and cannot distort. The value is the percentage by which the opposite channel is reduced: at +20 the left channel is played at 80% level, and at +100 the left channel is fully muted. Because the amount is expressed as a percentage of level rather than in decibels, it is best suited to balancing by ear; for a specific decibel trim, it should be noted that roughly every 20 points corresponds to about −2 dB on the opposite channel.

### Gain

Raises or lowers the overall volume by a fixed amount, from −15 dB to +15 dB (0 dB leaves the volume unchanged). It is useful for levelling a player against others, or for reclaiming headroom before other processing is applied.

### Parametric Equalizer

Allows precise adjustment of specific frequency ranges and is the most powerful of the available filters. It is described in detail on the [Parametric Equalizer](/dsp/parametriceq/) page.

### Tone Controls

Provides simple bass, mid and treble adjustments of the audio signal. They are described in detail on the [Tone Controls](/dsp/tonecontrols/) page.

### Transpose

Provides a means of shifting the pitch of the music up or down without changing how fast it plays. This can be particularly useful for those that prefer the slightly mellower character of music when the key of A is at 432Hz instead of the typical 440Hz. This filter is described in detail on the [Transpose](/dsp/transpose/) page.
