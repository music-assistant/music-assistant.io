---
title: "Pandora"
---


# Pandora Provider <img src="/assets/icons/pandora.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for personal radio stations from [Pandora](https://www.pandora.com/). This component is contributed and maintained by [Gavin](https://github.com/ozgav)

Pandora provides personalized radio stations that play an endless stream of songs based on the user's musical preferences.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | AAC (16 bit, 44.1 kHz) |
| Login Method | Password |

## Configuration:
- In the configuration, enter the user name and password and click the save button
- [Standard sync options](index.md/#library-import-control) are available

## Known Issues / Notes

- This provider is limited to Radio Stations only and does not support search or station creation. This constraint is due to Pandora's API structure
- Users must continue to create stations on the official Pandora app/website, and those stations will then automatically appear in MA after a sync
- Stream metadata is provided although occassionally there is missing album art 
- As with all radio stations in MA, tracks cannot be skipped
