---
title: "NTS Radio"
---

# NTS Radio <img src="/assets/icons/nts-icon.svg" alt="NTS logo" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [NTS Radio](https://www.nts.live/). This component is contributed and maintained by <a href="https://github.com/mike-sheppard" target="_blank" rel="noopener noreferrer">Mike Sheppard</a>. This is an unofficial, best-effort implementation. NTS is not affiliated with or endorsed by this provider.

NTS is a free online radio station broadcasting from London. Its shows are hosted by DJs, artists and record collectors playing whatever they like, which tends towards music you will not hear on commercial radio.

This source adds the NTS streams to Music Assistant as radio stations.

> [!TIP]
> **Support NTS**
>
> NTS is free to listen to and carries no advertising, funded instead by its listeners through the NTS Supporters scheme. If you are using this source consider joining at https://www.nts.live/supporters

## Features

|||
|:-|:-:|
|Subscription FREE|Yes|
|Self-Hosted Local Media|No|
|Media Types Supported|Radio|
|[Recommendations](/ui/#view---discover) Supported|No|
|Lyrics Supported|No|
|[Radio Mode](/ui/#track-menu)|No|
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
|Maximum Stream Quality|AAC|
|Login Method|None|

### What's included

- **NTS 1 and NTS 2**: the two live channels with now-playing show metadata (show name, description, artwork, location) that updates every 60 seconds during playback
- **16 Infinite Mixtapes**: themed 24/7 music streams curated from the NTS archive (Poolside, Slow Focus, Low Key, 4 To The Floor, Expansions, etc.)

## Configuration

In the configuration, you only need to click the save button.

## Usage

Browse stations at *Browse > NTS Radio*:

- **Live Channels**: play NTS 1 or NTS 2
- **Infinite Mixtapes**: pick any of the 16 themed streams

Stations can be added to your library from the station menu.

## Known Issues / Notes

- The NTS archive (past shows hosted on Mixcloud/SoundCloud) is not streamable via their API and is therefore not surfaced by this provider
- Tracklist timestamps (a Supporter feature on the NTS web player) are not exposed by the API and are not supported by this provider
