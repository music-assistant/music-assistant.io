---
title: DSP Parametric Equalizer
description: Explanation of the use and effect of the DSP Parametric Equalizer filter
---

# Parametric Equalizer

A Parametric Equalizer (PEQ) is a [powerful tool](https://www.masteringbox.com/learn/parametric-eq) for fine-tuning audio. Unlike simpler tone controls, a PEQ allows precise adjustment of specific frequency ranges.

PEQs can be used to tailor the sound to a room's acoustics, compensate for speaker or headphone characteristics, or to fine-tune the frequency balance to personal taste.

Multiple PEQ filters can be added to the MA signal path if desired.

## Usage

### Frequency Band Adjustment

Unlimited bands can be added to the PEQ. For each band it is possible to control:

- **Frequency:** The center frequency to be adjusted (e.g., 100Hz for bass, 1kHz for midrange, 10kHz for treble).

- **Gain:** How much boost (increased volume) or cut (decreased volume) to be applied to that frequency, measured in decibels (dB).

- **Q (Quality Factor):** This determines the width of the frequency range affected. A higher Q means a narrower, more focused adjustment, while a lower Q creates a broader, gentler change.

- **Filter Type:** This determines the [shape of the adjustment](https://www.musicguymixing.com/eq-filters/). The available options are Peak (aka Bell), High Shelf, Low Shelf, High Pass, Low Pass, and Notch. 

### Presets

If you have measured your speakers, or want to correct your headphones with [AutoEQ](https://autoeq.app/), you can automatically import a preset into this filter.

Music Assistant accepts [Equalizer APO's Parametric EQ](https://equalizerapo.com) file format which is widely adopted in various applications, and this import functionality also works seamlessly with [Room EQ Wizard](https://www.roomeqwizard.com) (REW)'s `Export filter settings as text file format`.
While not all filter types are supported (Modal, BP, LSC x dB, HS x dB, AP, LS with dB slope, HS with dB slope), the most important ones are functional.

Currently, the Preamp option is not supported. This may change in the future.

It is possible to import Equalizer presets from various sources including, [EasyEffects](https://wwmm.github.io/easyeffects/) (as APO preset) and REW-compatible presets from [HouseCurve](https://housecurve.com/)

The Equalizer can also be exported for use in other applications. For example, the data could be used in: APO, another Music Assistant instance, or EasyEffects.
