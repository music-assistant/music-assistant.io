---
title: DSP Parametric Equalizer
description: Explanation of the use and effect of the DSP Parametric Equalizer filter
---

# Parametric Equalizer

A Parametric Equalizer (PEQ) is a [powerful tool](https://www.masteringbox.com/learn/parametric-eq) for fine-tuning audio. Unlike simpler tone controls, a PEQ allows precise adjustment of specific frequency ranges.

PEQs can be used to tailor the sound to a room's acoustics, compensate for speaker or headphone characteristics, or to fine-tune the frequency balance to personal taste. MA supports the application of corrections to both channels (left and right) identically or individually.

Multiple PEQ filters can be added to the MA signal path if desired.

## Usage

There is a button at the top of the display which enables multi-channel options. Enabling this shows additional channel selection boxes and allows for the application of corrections on a per channel basis.

### Frequency Band Adjustment

Unlimited bands can be added to the PEQ which can affect all channnels, or the left or the right individually. For each band it is possible to control:

- **Frequency:** The center frequency to be adjusted (e.g., 100Hz for bass, 1kHz for midrange, 10kHz for treble).

- **Gain:** How much boost (increased volume) or cut (decreased volume) to be applied to that frequency, measured in decibels (dB).

- **Q (Quality Factor):** This determines the width of the frequency range affected. A higher Q means a narrower, more focused adjustment, while a lower Q creates a broader, gentler change.

- **Filter Type:** This determines the [shape of the adjustment](https://www.musicguymixing.com/eq-filters/). The available options are Peak (aka Bell), High Shelf, Low Shelf, High Pass, Low Pass, and Notch.

### Preamp

The PEQ also allows for a preamp gain adjustment. Whilst this will create the same effect as the the gain adjustment in the input stage, having it here means that the value can be imported and exported. Additionally, if a PEQ setting overall makes the signal quieter, then adjusting the gain here means that when enabling/disabling the eq, the volume will stay the same.

### Presets

If you have measured your speakers, or want to correct your headphones with [AutoEQ](https://autoeq.app/), you can automatically import a preset into this filter.

Music Assistant accepts [Equalizer APO's Parametric EQ](https://equalizerapo.com) file format which is widely adopted in various applications, and this import functionality also works seamlessly with [Room EQ Wizard](https://www.roomeqwizard.com) (REW)'s `Export filter settings as text file format`.
While not all filter types are supported (Modal, BP, LSC x dB, HS x dB, AP, LS with dB slope, HS with dB slope), the most important ones are functional.

It is possible to import Equalizer presets from various sources including, [EasyEffects](https://wwmm.github.io/easyeffects/) (as APO preset) and REW-compatible presets from [HouseCurve](https://housecurve.com/)

The Equalizer can also be exported for use in other applications. For example, the data could be used in: APO, another Music Assistant instance, or EasyEffects.

#### Multi-Channel

There are multiple formats for PEQ preset files when separate left and right channels are defined. When importing multi-channel preset files, proceed as follows:

- If there is only a single preset which contains the settings for both channels, then do NOT press the multi-channel controls button and import the file with the `Import APO/REW Preset` button
- If there are separate preset files for each channel:
    1. Enable Multi-channel controls
    2. Select the Left channel
    3. Import the preset for the Left channel
    4. Select the Right channel
    5. Import the preset for the Right channel

The `Export APO Preset` button will make a single preset file which contains information about both channels if there are any multi-channel specific options activated.
