---
title: Audio Pipeline
description: A Description of the Audio Pipeline View
---

# Audio Pipeline

<video controls autoplay loop muted playsinline style="width: 100%; max-width: 800px;">
  <source src="/videos/audio-pipeline.mp4" type="video/mp4" />
</video>

## Basic View
<img src="/assets/screenshots/audiopipeline-basic.png" alt="image" style="width: 500px;"  loading="lazy" />

This view shows the complete path that the audio takes. A blue dot on the line on the left shows a processing point in the pipeline.

The view is broken into two sections, Input and Output. The coloured dot on the section title indicates the quality as the audio leaves the section. Orange indicates a lossy codec is in use. Green Indicates a lossless codec is in use. Cyan indicates a lossless codec is in use and either the sample rate is above 48kHz or the bit depth is above 16 (also known as "Hi-Res").

The Input section shows the origin of the stream and the codec, <a href="https://www.izotope.com/en/learn/digital-audio-basics-sample-rate-and-bit-depth.html" target="_blank" rel="noopener noreferrer">sample rate and bit depth</a>. All tracks are processed internally as raw <a href="https://diyodemag.com/education/what_is_pcm_pulse_code_modulation" target="_blank" rel="noopener noreferrer">PCM</a> by Music Assistant and are decoded to <a href="https://www.youtube.com/watch?v=4YRp-FIsNDA" target="_blank" rel="noopener noreferrer">32 bits floating point</a> in the sample rate of the source. Even more details about the original file are available by hovering over the ⓘ including the bitrate.

Next the Volume Normalization value is shown. Details about how Volume Normalization is applied can be found on the [Technical Information](faq/tech-info.md/#volume-normalization) page.

The Output section is then shown which, in this example, is simple and just shows the Output Limiter, that no change to the audio sample rate or bit depth has occurred and then finally the icon of the player provider and the name of the player is shown.

MA, by default, sends lossless audio to the player. The exact codec, sample rate or bit depth that are sent to the player depends on the player / provider and is always shown. Changes to the original audio quality may occur if the MP3 option has been selected in the player settings (See the [Groups](#groups) example below) or if the audio is resampled to match the players maximum or native sample rate or bit depth. PCM could be sent to the player although typically FLAC is used to save some bandwidth.

The maximum sample rate that can be expected can be found in the [Player Providers summary table](player-support/index). This can be further limited if changes were made to the default options for the player's `Sample Rates Supported by this Player` advanced setting.
***************************************************************
## Digital Signal Processing
<img src="/assets/screenshots/audiopipeline-dsp.png" alt="image" style="width: 500px;"  loading="lazy" />

In this example [DSP](settings/individual-player.md/#dsp-settings) has been enabled. High level information about the DSP filters which have been applied are shown. A tooltip is available to explain why the DSP is not supported if that is the case (See the example below in [Groups](#groups)).

Also of note in this example is the icon shown in the input section where the codec icon is normally. This icon will be displayed when MA cannot determine the codec and can occur with container formats such as <a href="https://www.wavpack.com/" target="_blank" rel="noopener noreferrer">wavpack</a>, <a href="https://cloudinary.com/guides/video-formats/what-is-the-m4a-format-understanding-the-difference-between-m4a-mp3-and-wav" target="_blank" rel="noopener noreferrer">m4a</a> or <a href="https://en.wikipedia.org/wiki/Direct_Stream_Digital" target="_blank" rel="noopener noreferrer">DSD64</a>.

***************************************************************
## Groups
<img src="/assets/screenshots/audiopipeline-groups.png" alt="image" style="width: 500px;"  loading="lazy" />

The view will expand as necessary to show all [grouped players](faq/groups). In the example above three players are shown with a variety of filters, output qualities and player types.

A point to note in this example is the orange dot beside the third Output section label. Whilst no quality would have been lost due to the Output Limiter or <a href="https://www.youtube.com/watch?v=tIIK2wuXHuY" target="_blank" rel="noopener noreferrer">the upsampling to 48kHz</a>, the change to the <a href="https://www.adobe.com/au/creativecloud/video/discover/best-audio-format.html" target="_blank" rel="noopener noreferrer">lossy MP3 codec</a> necessitates the indication that this is now only Low Quality.

When a group of players have the same pipeline then the identical output stages will be collapsed with one player shown followed by a plus sign and the number of other players represented. Clicking on the information icon will expand the list as shown in the following image. Note that in the case of Squeezelite or AirPlay a different output pipeline per player is possible, whilst with other player types such as Sonos or Snapcast, the leader determines the stream sent to all the children.

<img src="/assets/screenshots/audiopipeline-groups-collapsed.png" alt="image" style="width: 500px;"  loading="lazy" />
