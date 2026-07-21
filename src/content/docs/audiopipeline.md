---
title: Audio Pipeline
description: A Description of the Audio Pipeline View
---

# Audio Pipeline

## Basic View
<img src="/assets/screenshots/audiopipeline-basic.png" alt="image" style="width: 500px;"  loading="lazy" />

This view shows the complete path that the audio takes.

The view is broken into three sections, Input, Processing and Output. The colored dot on the section title indicates the quality as the audio leaves the section. Orange indicates a lossy codec is in use. Green indicates a lossless codec is in use. Cyan indicates a lossless codec is in use and either the sample rate is above 48kHz or the bit depth is above 16 (also known as "Hi-Res").

The Input section shows the origin of the stream and the codec, <a href="https://www.izotope.com/en/learn/digital-audio-basics-sample-rate-and-bit-depth.html" target="_blank" rel="noopener noreferrer">sample rate, bit depth</a> and <a href="https://nottinghamhifi.co.uk/blogs/blog/understanding-audio-bitrate" target="_blank" rel="noopener noreferrer">bit rate.</a>. Even more details about the original file are available by hovering over the ⓘ.

The processing section shows that all tracks are processed internally as raw <a href="https://diyodemag.com/education/what_is_pcm_pulse_code_modulation" target="_blank" rel="noopener noreferrer">PCM</a> by Music Assistant and are decoded to <a href="https://www.youtube.com/watch?v=4YRp-FIsNDA" target="_blank" rel="noopener noreferrer">32 bits floating point</a> in the sample rate of the source. 

Next the Volume Normalization value is shown. Details about how Volume Normalization is applied can be found on the [Technical Information](/faq/tech-info/#volume-normalization) page.

The Output section is then shown which, in this example, is simple and just shows the Output Limiter, the output codec and quality and then finally the icon of the output protocol and the name of the player is shown.

MA, by default, sends lossless audio to the player. The exact codec, sample rate or bit depth that are sent to the player depends on the player / output protocol and is always shown. Changes to the original audio quality may occur if the MP3 option has been selected in the player settings (See the [Groups](#groups) example below) or if the audio is resampled to match the player's maximum or native sample rate or bit depth. PCM could be sent to the player, although typically FLAC is used to save some bandwidth.

The maximum sample rate that can be expected can be found in the [Player Providers summary table](/player-support/). This can be further limited if changes were made to the default options for the player's `Sample Rates Supported by this Player` advanced setting.

> [!NOTE]
> Radio streams will have their bit depth reduced to 16 due to incompatibilities with some players

***************************************************************
## Digital Signal Processing
<img src="/assets/screenshots/audiopipeline-dsp.png" alt="image" style="width: 500px;"  loading="lazy" />

In this example [DSP](/dsp/) has been enabled. High level information about the DSP filters which have been applied are shown. A message will be shown if DSP is not supported (See the example below in [Groups](#groups)).

***************************************************************
## Groups
<img src="/assets/screenshots/audiopipeline-groups.png" alt="image" style="width: 500px;"  loading="lazy" />

The view will expand as necessary to show all [grouped players](/faq/groups/). In the example above two players are shown with a variety of filters and player types.

When a group of players have the same pipeline, then the identical output stages will be collapsed with one player shown followed by a plus sign and the number of other players represented. Note that in the case of Squeezelite or AirPlay a different output pipeline per player is possible, while with other player types such as Sonos or Snapcast, the leader determines the stream sent to all the children.

<img src="/assets/screenshots/audiopipeline-groups-collapsed.png" alt="image" style="width: 500px;"  loading="lazy" />
