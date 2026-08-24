---
title: Player Support
sidebar:
  label: Overview
description: Information Relevant to all Player Providers 
---

# Player Providers

## What a player provider is

A **player provider** is not one speaker. It is the part of Music Assistant that knows how to talk to a whole family of them: one AirPlay provider covers every AirPlay device in the house, one Sonos provider covers all your Sonos.

So you do not add speakers one at a time. You add the provider for the kind of device you own, and where that provider supports auto-discovery it finds them for you and keeps looking, so a speaker you plug in next month turns up on its own. Not every provider can discover devices; some need an address entered by hand. The page for each provider says which it is.

Some devices can be reached more than one way. Anything Home Assistant already knows about can be played to through [Home Assistant Media Players](/player-support/home-assistant/), but **if Music Assistant has a provider of its own for a device, use it**. The Home Assistant route is a fallback for devices with no native provider, not an alternative to one. [Audio Quality](#audio-quality) below explains why.

## Adding a player provider

Go to [**Settings → Player Providers → Add a new provider**](/settings/player-provider/) and pick the one that matches your devices. Each provider has its own page in this section covering what it supports and how to set it up.

Settings that apply to every provider are described on the [Player Provider Settings](/settings/player-provider/) and [Individual Player Settings](/settings/individual-player/) pages.

If you know what you want to play on but not which provider drives it, start at [I Want To Stream To](/faq/stream-to/). It groups every provider by whether you buy the device ready to use or set it up yourself, and carries the summary table comparing all of them side by side.

Only players provided by certain providers — that is, Home Assistant Players, Snapcast, and Universal Player — support deletion. Deleting a player can be useful to reset a problematic player’s configuration. For providers that support deletion, deleted players that are still on the network will be rediscovered automatically on the next Music Assistant restart or player provider reload.

> [!NOTE]
> If any player is not transitioning between songs then check if the player has the option [QUEUE FLOW MODE](/faq/tech-info/#track-queueing). Try enabling it if it does.

## Audio Quality

Audio quality is the principal reason why native MA players are developed. These players provide the highest quality playback experience. HA players should work and may work well but they may also have been written with a basic objective such as enabling text to speech. Therefore, if there is a MA player available and a HA integration then you should always choose the MA player. 

A sample rate above 48kHz or a bit depth above 16 is considered High Resolution (Hi Res)

## Player Options

A player provider may optionally expose additional player specific settings (e.g. the ability to adjust the player's native bass or treble value). These options can be accessed either within the player's settings, or via the three-dot menu in the full-screen player view via "Player Options."

Available player options are mapped to number, switch, text or select entities starting with Home Assistant version 2026.5.0.
