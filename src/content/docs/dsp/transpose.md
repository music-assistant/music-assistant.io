---
title: DSP Transpose
description: Explanation of the use and effect of the DSP Transpose filter
---

# Transpose

Shifts the pitch of the music up or down without changing how fast it plays. Raising the pitch by twelve semitones moves the music up by a full octave, and lowering it by twelve moves it down an octave, while the performance still takes exactly as long as it did before.

This is not the same as changing the playback speed. Playing a record at the wrong speed changes pitch and tempo together, whereas this filter separates the two and alters only the pitch. That separation is what makes it useful, but it is also why the filter is more demanding than the others: the audio has to be analysed and rebuilt rather than simply adjusted in level.

## Usage

The shift is set with the **Semitones** control, from −12 (an octave down) through 0 (unchanged) to +12 (an octave up). A semitone is one step on a piano keyboard, counting the black keys, so twelve semitones make an octave. The slider shows +/-6 semitones but values up to 12 can be manually entered.

Fractional values are allowed, which is what makes alternative concert pitches possible. The **A=432 Hz** button is a shortcut that sets the shift to −0.318 semitones, and it is explained in the section below.

At 0 semitones the filter does nothing at all and the audio passes through untouched, so it can be left in the path without effect. Unlike Balance, Stereo Width and Crossfeed, this filter does not depend on the relationship between the two channels, so it applies equally to mono and stereo material.

Formants are preserved, which means the resonances that give a voice or an instrument its character stay where they are while the notes move. Without this, shifting upwards produces the familiar chipmunk effect and shifting downwards makes voices sound artificially deep. With it, a shifted voice still sounds like the same voice singing in a different key.

## Concert Pitch and the A=432 Hz Preset

Concert pitch is the reference that instruments are tuned to, expressed as the frequency of the A above middle C. The international standard is 440 Hz and virtually all recordings use it. Some listeners prefer the slightly mellower character of the older 432 Hz reference, and some instruments are tuned to it; background on the standard can be found on <a href="https://en.wikipedia.org/wiki/A440_(pitch_standard)" target="_blank" rel="noopener noreferrer">Wikipedia</a>.

The button is a shortcut that sets the shift to −0.318 semitones, which is the distance between the two references, so a recording made at A=440 Hz plays with its A on 432 Hz. The shift applies to every note rather than only to A, so the music stays in tune with itself and simply sits a fraction of a semitone lower. It also assumes the source was recorded at A=440 Hz, as the filter does not analyse the incoming audio; applied to something already tuned to 432 Hz it will just make it flatter still.

The change is subtle, well short of the semitone or so needed to hear a recording as being in the wrong key, so it is best judged with the filter's enable toggle rather than from memory.

## Notes

Pitch shifting is the most computationally demanding of the filters, as the audio must be reconstructed rather than adjusted. On low powered hardware, particularly when several players are streaming at once, this may be noticeable, so it is worth enabling it only on the players where it is actually wanted.

Shifting by whole semitones changes the key the music is in, which is a substantial musical change rather than a refinement. It suits practising or singing along with a track in a more comfortable key, but it is not something to leave enabled for general listening. The A=432 Hz shift is far smaller and is reasonable to leave in place, provided the library is consistently tuned to A=440 Hz.
