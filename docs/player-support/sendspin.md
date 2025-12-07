# Sendspin Provider  ![Preview image](../assets/icons/sendspin-icon.svg){ width=70 align=right }

Sendspin is an open standard, being developed by the Open Home Foundation, for synchronized music experience across multiple devices and rooms. It enables speakers, lights, and screens to work together to create a rich and immersive audio environment

The Sendspin provider supports playback directly to the Music Assistant Frontend, enabling easy playback to the current device. It allows playback from outside the network on which the MA server resides. 

!!! note
    This provider is still in development. Functionality may change
    
## Features

- Play audio in sync across multiple speakers
- Visualize audio playback on connected lights
- Offer music control and metadata from tablets or screens
- The current browser can be enabled or disabled as a target for playing music
- Play/Pause and Volume control
- The queue persists between sessions

## Known Issues / Notes

- The Sendspin provider is added by default
- Currently supported devices
    - The [Home Assistant Voice Preview Edition](https://www.home-assistant.io/voice-pe/) running a [special Sendspin build](https://esphome.github.io/home-assistant-voice-pe-alpha/)
    - Devices displaying the Music Assistant UI
    - Certain [ESPHome devices](https://github.com/esphome/esphome/pull/12284)
- The player appears automatically in the player list

## Not Yet Supported

- Lossless playback
- Selection of the streaming bitrate and container format
