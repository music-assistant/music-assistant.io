---
title: Audio Pipeline
description: A Description of the Audio Pipeline View
---

# Audio Pipeline

The Audio Pipeline view shows exactly what happens to your audio on its way from the source to your speakers, so you can confirm the quality is being preserved. It is a read-only view; there is nothing to configure here, and you can safely ignore it if you are not interested in the detail. Open it by selecting the quality label on the [Player Bar](/ui/#player-bar) or in the [Now Playing view](/ui/#now-playing-view).

<video controls autoplay loop muted playsinline style="width: 100%; max-width: 800px;">
  <source src="/videos/audio-pipeline.mp4" type="video/mp4" />
</video>

## Basic View
<img src="/assets/screenshots/audiopipeline-basic.png" alt="image" style="width: 500px;"  loading="lazy" />

This view shows the complete path that the audio takes.

The view is broken into three sections, Input, Processing and Output. The colored dot on the section title indicates the quality as the audio leaves the section: orange (LQ, Low Quality) indicates a lossy codec below 256 kbps, light green (SQ, Standard Quality) a lossy codec at 256 kbps or higher, green (HQ, High Quality) a lossless codec, and cyan (HR, Hi-Res) a lossless codec where either the sample rate is above 48kHz or the bit depth is above 16.

The Input section shows the origin of the stream and the codec, <a href="https://www.izotope.com/en/learn/digital-audio-basics-sample-rate-and-bit-depth.html" target="_blank" rel="noopener noreferrer">sample rate, bit depth</a> and <a href="https://nottinghamhifi.co.uk/blogs/blog/understanding-audio-bitrate" target="_blank" rel="noopener noreferrer">bit rate</a>. Even more details about the original file are available by hovering over the ⓘ.

The Processing section shows that all tracks are processed internally as raw <a href="https://www.origin-ic.com/blog/what-you-need-to-know-about-pcm-audio-explained/48067" target="_blank" rel="noopener noreferrer">PCM</a> by Music Assistant and are decoded to <a href="https://www.youtube.com/watch?v=4YRp-FIsNDA" target="_blank" rel="noopener noreferrer">32 bits floating point</a> in the sample rate of the source. 

Next the Volume Normalization value is shown. Details about how Volume Normalization is applied can be found on the [Technical Information](/faq/tech-info/#volume-normalization) page.

The Output section is then shown which, in this example, is simple and just shows the Output Limiter, the output codec and quality and then finally the icon of the output protocol and the name of the player is shown.

MA, by default, sends lossless audio to the player. The exact codec, sample rate or bit depth that are sent to the player depends on the player / output protocol and is always shown. Changes to the original audio quality may occur if the MP3 option has been selected in the player settings (See the [Groups](#groups) example below) or if the audio is resampled to match the player's maximum or native sample rate or bit depth. PCM could be sent to the player, although typically FLAC is used to save some bandwidth.

The maximum sample rate that can be expected can be found in the [Player Providers summary table](/faq/stream-to/#comparing-players-side-by-side). This can be further limited if changes were made to the default options for the player's `Sample Rates Supported by this Player` advanced setting.

> [!NOTE]
> Radio streams will have their bit depth reduced to 16 due to incompatibilities with some players

***************************************************************
## Digital Signal Processing
<img src="/assets/screenshots/audiopipeline-dsp.png" alt="image" style="width: 500px;"  loading="lazy" />

In this example [DSP](/dsp/) has been enabled. High level information about the DSP filters which have been applied are shown. A message will be shown if DSP is not supported (See the example below in [Groups](#groups)).

> [!NOTE]
> Filters will not be shown in the audio pipeline if they have no effect on the audio path. For example, if the Balance control is set to the middle position then it is not doing anything and will not be shown.

***************************************************************
## Groups
<img src="/assets/screenshots/audiopipeline-groups.png" alt="image" style="width: 500px;"  loading="lazy" />

The view will expand as necessary to show all [grouped players](/faq/groups/). In the example above two players are shown with a variety of filters and player types.

When a group of players have the same pipeline, then the identical output stages will be collapsed with one player shown followed by a plus sign and the number of other players represented. Note that in the case of Squeezelite or AirPlay a different output pipeline per player is possible, while with other player types such as Sonos or Snapcast, the leader determines the stream sent to all the children.

<img src="/assets/screenshots/audiopipeline-groups-collapsed.png" alt="image" style="width: 500px;"  loading="lazy" />
