---
title: Player Support
sidebar:
  label: Overview
description: What player support is, and what applies to all of it
---

# Player Support

## What player support is

**Player support** is not one speaker. It is the part of Music Assistant that knows how to talk to a whole family of them: player support for AirPlay covers every AirPlay device in the house, player support for Sonos covers all your Sonos.

So you do not add speakers one at a time. You add the player support for the kind of device you own. Where it can discover devices, it finds them for you and keeps looking, so a speaker you plug in next month turns up on its own. Not all of them can discover devices; some need an address entered by hand. The page of each says which it is.

Some devices can be reached more than one way, for example through their own player support and over AirPlay or Chromecast. Music Assistant makes one player of such a device, and every way it can reach the device is a protocol of that player. [Streaming Protocols](/usage/#streaming-protocols) explains which one plays.

Anything Home Assistant already knows about can be played to through [Home Assistant Media Players](/player-support/home-assistant/), but **if Music Assistant has its own player support for a device, use it**. The Home Assistant route is a fallback for devices that have none, not an alternative. [Audio Quality](#audio-quality) below explains why. When Music Assistant recognises a Home Assistant media player as a speaker it already reaches through its own player support, the two are one player, and Music Assistant plays through its own player support.

## Adding player support

Go to **Settings → Player support → Add player support**, which opens the [Marketplace](/settings/marketplace/) on its player support, and pick the one that matches your devices. Each one has its own page in this section covering what it supports and how to set it up.

Settings that apply to all player support are described on the [Player Support Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages.

If you know what you want to play on but not which player support drives it, start at [I Want To Stream To](/faq/stream-to/). It groups them by whether you buy the device ready to use or set it up yourself, and carries the summary table comparing them side by side.

A player stays in Music Assistant while its device is switched off or away, and shows as unavailable until it is back. Any player can be deleted from its ⋮ menu in **Settings → Players**, which can be useful to reset a problematic player's configuration. A deleted player that is still on the network comes back as a new player with its default settings. [Disabling and deleting players](/settings/individual-player/#disabling-and-deleting-players) has the details, including how to remove every player whose device is gone.

> [!NOTE]
> If any player is not transitioning between songs then check if the player has the option [QUEUE FLOW MODE](/faq/tech-info/#track-queueing). Try enabling it if it does.

## Audio Quality

Audio quality is the principal reason why native MA players are developed. These players provide the highest quality playback experience. HA players should work and may work well but they may also have been written with a basic objective such as enabling text to speech. Therefore, if there is a MA player available and a HA integration then you should always choose the MA player. 

A sample rate above 48kHz or a bit depth above 16 is considered High Resolution (Hi Res)

## Player Options

A player provider may optionally expose additional player specific settings (e.g. the ability to adjust the player's native bass or treble value). These options can be accessed either within the player's settings, or via the three-dot menu in the full-screen player view via "Player Options."

Available player options are mapped to number, switch, text or select entities starting with Home Assistant version 2026.5.0.
