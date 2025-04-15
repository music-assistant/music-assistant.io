# Builtin Provider  ![Preview image](../assets/icon.png){ width=70 align=right }

The Builtin provider supports playback directly to the Music Assistant Frontend, enabling easy playback to the current device. It allows playback from outside the network on which the MA server resides. 

!!! note
    This provider is still in development. Functionality may change
    
## Features

- The current browser can be enabled or disabled as a target for playing music
- Play/Pause and Volume control
- The queue persists between sessions

## Known Issues / Notes

- The player appears automatically in the player list and is enabled by pressing the Power button
- The player can be disabled on a per client basis via an option in MA SETTINGS >> FRONTEND
- Due to a limitation in the browser engine on iOS devices, the audio may comtinually restart. A solutuon to this is not yet available

## Not Yet Supported

- Lossless playback
- Selection of the streaming bitrate and container format
