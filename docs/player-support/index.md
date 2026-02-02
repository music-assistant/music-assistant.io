---
title: Player Support
description: Information Relevant to all Player Providers
---

# Player Providers

!!! note
    Players (devices) are added to Music Assistant by adding their associated player provider. Player providers are added by navigating to MA Settings and then Providers and then clicking on ADD A NEW PROVIDER

For specific player provider information refer to the relevant section in this document. For a description of possible settings refer to the [Player Provider Settings](../settings/player-provider.md) and [Individual Player Settings](../settings/individual-player.md) pages. When a player provider is enabled, then the devices which support that protocol will be automatically discovered by Music Assistant. The following table summarises player capabilities. Note that DLNA and HA players can suffer from poor implementation of required standards. If these player types do not work well and the device supports other protocols then use the other protocol.

[![Preview image](../assets/player-provider-summary.png){ width = 600 }](../assets/player-provider-summary.png)

If a device supports multiple protocols then multiple players for the device will be seen. In the [Individual Player Settings](../settings/individual-player.md) you can disable or hide any players you do not use.

Players can only be deleted if they are unavailable or disabled. Deleting a player can be useful if there is a problem with it. Deleted players which become or are still available will get rediscovered and will return to the list on MA restart or player provider reload.

![Preview image](../assets/screenshots/player-disable.png){ width = 600 }

!!! note
    If any player is not transitioning between songs then check if the player has the option QUEUE FLOW MODE. Try enabling it if it does.

## Audio Quality

Audio quality is the principal reason why native MA players are developed. These players provide the highest quality playback experience. HA players should work and may work well but they may also have been written with a basic objective such as enabling text to speech. Therefore, if there is a MA player available and a HA integration then you should always choose the MA player.

A sample rate above 48kHz or a bit depth above 16 is considered High Resolution (Hi Res)

## Player Options

A player provider may optionally expose additional player specific settings, e.g. the ability to adjust the player's native bass or treble value.
At this point, these options are only available in Home Assistant if the Music Assistant integration is configured.
A player may then have additional number, switch, text or select entities.
Alternatively one may use the Music Assistant API to control these options.
Access via MA's native UI is not yet possible.
