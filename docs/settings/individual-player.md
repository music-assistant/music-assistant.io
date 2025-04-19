# Individual Player Settings

Individual Player Settings are usually quite extensive. The typical headings of the various sections are shown in the following image and subsections below will expand on them.

![image](../assets/screenshots/individual-player-settings.png)

## Generic Settings

- Icon
- Enable queue flow mode
- When to hide the player in the UI

## Audio

- Crossfade
- Volume Normalization
- Limiter
- Output Channel Mode

### DSP Settings

All providers have the option to apply [Digital Signal Processing](https://en.wikipedia.org/wiki/Digital_signal_processing) (DSP) filters to the audio stream. DSP lets you shape and refine the audio with a variety of filters. Use it to tailor the sound to a room's acoustics, compensate for speaker characteristics, and fine-tune the frequency balance to personal taste.

The DSP option is found in the MA settings for each player which means that each player has its own independently configurable DSP settings.

Individual player DSP settings will be used for playback to AirPlay, Squeezelite and Universal groups. For all other group types DSP will be disabled.

The DSP path consists of an INPUT pre-amplifier for initial gain control, followed by optional audio filters that can be added between input and output (multiple times if desired). The following filters are available:

- [Parametric Equalizer](../dsp/parametriceq.md)
- [Tone Controls](../dsp/tonecontrols.md)

The path ends with an OUTPUT stage that provides both gain control and a limiter (enabled by default) to prevent signal clipping.

The DSP settings can be enabled and disabled via a toggle which allows easy [A-B testing](https://www.youtube.com/watch?v=KefGjPYyIO4)

The line on the left of the DSP settings represents the audio path, in sequential order, from the audio file (top) to the player (bottom).

A dot on the line represents a component that changes the signal. The lack of a dot indicates that the particular component has been disabled.

Using the icons at the top of the view, the additional filters can be reordered, disabled/enabled or deleted.

![DSP image](../assets/screenshots/dsp.jpg)

## Advanced Settings

- Crossfade duration
- Target level for volume normalization
 -Toggle to expose to HA
 -Supported sample rates
 -Output codec
 -HTTP profile

- Toggle to use MA Cast App

## Announcements Configuration

There are a number of configurable options for controlling the volume of announcements sent to the MA players. These are well described by the help available by selecting this icon ![image](../assets/icons/question-mark.png) beside each field.

![image](../assets/screenshots/announcements-settings.png)

## Player Controls

Each player has a number of options available to control the behaviour of the power, volume and mute controls in the MA UI. By default, if a device supports these controls then that native behaviour will be used or if the control is not supported then it will be disabled in the UI (the setting will indicate NONE). It is also possible to manually disable the controls by changing the setting to NONE.

It is possible to map other HA entities to the MA player controls. in order for this to be an option the HA entities need to be first exposed to MA via the settings in the [HA Plugin](../ha-plugin.md/#configuring-the-home-assistant-plugin).

**Power** If a player does not support power but it is desired that the player has an on and off state then a FAKE option is available which will simulate the on/off functionality. 

**Mute** There is a FAKE option that will set the volume to zero and restore it when mute and unmute is commanded.

Also in this section is the option `Automatically play (resume on power on)` which will automatically start playback if there are items in the queue for the player.
