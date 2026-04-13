---
title: "Pandora"
---


# Pandora <img src="/assets/icons/pandora.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for personal radio stations from [Pandora](https://www.pandora.com/). This component is contributed and maintained by [Gavin](https://github.com/ozgav)

Pandora provides personalized radio stations that play an endless stream of songs based on the user's musical preferences.

> [!NOTE]
> Both the free and paid subscription options are supported

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Lossy, MP3 (192kbps) |
| Login Method | Password |

## Configuration:
- In the configuration, enter the user name and password
- Optionally select your music quality preference if you have a paid account
- Click the save button.

## Settings
- <b>Username and Password.</b> Account credentials for your Pandora account
- <b>Audio quality.</b> Select preference between standard (AAC 64kbps) and high quality (MP3 192kbps) audio. A paid account is required for high quality audio, free accounts will use standard quality audio despite this setting.
- <b>Take Over Stream.</b> Request that Pandora disconnect any other devices that are streaming and instead allow streaming via MA (See Notes for more information)
- [Standard sync options](index.md/#library-import-control) are available

## Known Issues / Notes

- This source is limited to Radio Stations only and does not support search or station creation. This constraint is due to Pandora's API structure
- Users must continue to create stations on the official Pandora app/website, and those stations will then automatically appear in MA after a sync
- Stream metadata is provided although occassionally there is missing album art 
- As with all radio stations in MA, tracks cannot be skipped
- Pandora only supports streaming to one device at a time per account. This provider will automatically take over the stream when initially starting the stream but it will not automatically take over the stream if it receives a concurrent-streaming error from pandora at any point other than the initial start of playback. A button in the provider configuration can be used to issue a takeover request if needed.