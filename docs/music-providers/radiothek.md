# ORF Radiothek Provider ![Preview image](../assets/icons/orf_radiothek-icon.svg){ width=70 align=right }

Music Assistant has support for [ORF Radiothek](https://sound.orf.at) which allows easy addition of their radio stations to Music Assistant. Contributed and maintained by [DButter](https://github.com/)

This provider allows access to Austrian radio stations and ORF podcasts.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (some content may be region-locked) |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio, Podcasts |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | No |
| Maximum Stream Quality | AAC 44.1 kHz / 16 bit |
| Login Method | None |

### Other

- ORF radio stations are avaialble as well as additional private stations which are included in the ORF Radiothek lineup
- Official ORF podcasts are supported and this includes recently aired radio shows where available

## Configuration

No configuration is required for most users as the default settings are typical. Changing protocols or quality should only be required on poor internet connections.

### Settings

- <b>Preferred ORF protocol.</b> Default is `hls`. Options are `hls` or `shoutcast`
- <b>ORF quality.</b> Default is `qxa`. Options are hls: `q1a/q2a/q3a/q4a/qxa` ; shoutcast: `q1a/q2a`, where q1a is the lowest, q4a is the highest and qxa is dynamic.
- <b>Include hidden stations.</b> Default is `false`. When off this reduces clutter in the UI for lesser used stations
- <b>Catch-up stream type.</b> Default is `progressive`. Options are `progressive` or `hls`
- <b>Catch-up stations (optional).</b> A comma separated list where the options are `bgl fm4 ktn noe oe1 oe3 ooe sbg stm tir vbg wie`.

## Known Issues / Notes

- Station logos are shown where available
- Metadata is populated via the API when possible
