---
title: Player Support
description: Information Relevant to all Player Providers 
---

# Player Providers

For specific player provider information refer to the relevant section in this document. When a player provider is enabled then the devices which support that protocol will be automatically discovered by Music Assistant. The following table summarises player capabilities. Note that DLNA and HA players can suffer from poor implementation of required standards. If these player types do not work well and the device supports other protocols then use the other protocol.

[![Preview image](../assets/player-provider-summary.png){ width = 600 }](../assets/player-provider-summary.png)

If a device supports multiple protocols then multiple players for the device will be seen. In the [individual player provider settings](../settings/individual-player.md) you can disable or hide any players you do not use. 

Players can only be deleted if they are unavailable or disabled. Deleting a player can be useful if there is a problem with it. Deleted players which become or are still available will get rediscovered and will return to the list on MA restart or player provider reload.

![Preview image](../assets/screenshots/player-disable.png){ width = 600 } 

!!! note
    If any player is not transitioning between songs then check if the player has the option QUEUE FLOW MODE. Try enabling it if it does.

## Audio Quality

Audio quality is the principal reason why native MA players are developed. These players provide the highest quality playback experience. HA players should work and may work well but they may also have been written with a basic objective such as enabling text to speech. Therefore, if there is a MA player available and a HA integration then you should always choose the MA player. 

A sample rate above 48kHz or a bit depth above 16 is considered High Resolution (Hi Res)
