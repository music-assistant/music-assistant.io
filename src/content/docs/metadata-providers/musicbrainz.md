---
title: MusicBrainz Metadata Provider
description: Features and Notes for the MusicBrainz Metadata Provider
---

# MusicBrainz Metadata Provider <img src="/assets/icons/musicbrainz-icon.svg" alt="MusicBrainz logo" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant can generate recommendation rows based on artist birthday and memorial data from MusicBrainz. This feature surfaces artists from your library whose birthdays or passing dates fall within a configurable time window.

> [!NOTE]
> This provider requires streaming providers to also be installed so that the recommendations can be linked to a playable source

## Features

The provider creates two types of recommendation folders:

- **Artist Birthdays** — Shows artists from your library whose birthdays fall within the configured day window
<img width="2160" height="550" alt="Birthday recommendation example" src="/images/metadata-providers/musicbrainz-birthday-example.png" loading="lazy" />
- **In Memoriam** — Shows artists from your library whose passing dates (death anniversaries) fall within the configured day window
<img width="2160" height="550" alt="In Memoriam recommendation example" src="/images/metadata-providers/musicbrainz-memoriam-example.png" loading="lazy" />

Each recommendation folder groups artists by relative date (e.g., "Birthdays · Today", "In Memoriam · Yesterday", "Birthdays · In 2 days").

### How the rows are built

The provider scans your library for artists with complete birth/death dates in MusicBrainz (YYYY-MM-DD format) and checks if those dates fall within the configured window relative to today.

Artists are then grouped into folders by their relative date:
- **Today** — Birthday or memorial is today
- **Yesterday** / **2/3 days ago** — Recent past dates
- **Tomorrow** / **In 2/3 days** — Upcoming dates

Only artists with complete dates (year, month, and day) are included. Artists with partial dates (e.g., only year) are excluded to ensure accuracy.

## Configuration

The provider has one configurable setting:

<img width="4512" height="1380" alt="Advanced configuration settings" src="/images/metadata-providers/musicbrainz-config.png" loading="lazy" />

- **Recommendation Days** (default: 3, range: 1-15) — How many days before and after today to scan for birthdays and memorials. For example, 3 days scans from 3 days ago through 3 days ahead (7 days total window).



## Known Issues / Notes

- Only artists with complete birth/death dates (YYYY-MM-DD format) in MusicBrainz are included. Artists with partial dates (year-only, year-month-only) are excluded
- The feature only shows artists already in your library. It scans library artists with MusicBrainz Artist IDs to check for matching dates
- For memorial recommendations, MusicBrainz must have the artist marked as deceased (life-span ended flag set)
- Music Assistant resolves MusicBrainz IDs automatically via metadata lookups. If an artist isn't showing up, you can manually add the ID via file tags (`MUSICBRAINZ_ARTISTID` for FLAC/Vorbis, `TXXX:MusicBrainz Artist Id` for MP3) or Kodi-format `.nfo` files (`<musicbrainzartistid>` in `artist.nfo`)
- Obscure or non-mainstream artists may not have complete date information in MusicBrainz
- For large libraries with many MusicBrainz-tagged artists, the scan can take a while as it makes an API call for each artist

### Choosing a scan window

The default 3 days is a reasonable balance:

Short windows (1–2 days):
- Fewer recommendations, more focused on immediate dates
- Reduces noise if you have a large library with many artists

Long windows (7–15 days):
- More recommendations, covers a broader time range
- Useful if you have a smaller library or want to see upcoming/past dates further out
- May result in many folders if your library has artists with dates spread throughout the year
