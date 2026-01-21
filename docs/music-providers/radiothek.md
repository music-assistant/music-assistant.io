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
| Maximum Stream Quality | TBA |
| Login Method | None |

### Other

- ORF radio stations are avaialble as well as additional private stations which are included in the ORF Radiothek lineup
- Official ORF podcasts are supported and this includes recently aired radio shows where available

## Configuration

No configuration is required for most users as the default settings are typical

### Settings

- <b>Preferred ORF protocol.</b> Default is `hls`
- <b>ORF quality.</b> Default is `qxa`
- <b>Include hidden stations.</b> Default is `false`
- <b>Catch-up stream type.</b> Default is `progressive`
- <b>Catch-up stations (optional).</b>

## Known Issues / Notes

- Station logos are shown where available
- Metadata is populated via api were possible
