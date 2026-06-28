---
title: MusicBrainz Recommendations Metadata Provider
description: Features and Notes for the MusicBrainz Metadata Provider
---

# MusicBrainz Metadata Provider <img src="/assets/icons/musicbrainz-icon.svg" alt="MusicBrainz logo" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant can generate recommendation rows based on artist birthday and memorial data from MusicBrainz. This feature surfaces artists from your library whose birthdays or passing dates fall within a configurable time window.

> [!NOTE]
> This provider requires streaming providers to also be installed so that the recommendations can be linked to a playable source

## Features

The provider creates two types of recommendation folders:

- **Artist Birthdays** — Shows artists from your library whose birthdays fall within the configured day window
- **In Memoriam** — Shows artists from your library whose passing dates (death anniversaries) fall within the configured day window

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

- **Recommendation Days** (default: 3, range: 1-15) — How many days before and after today to scan for birthdays and memorials

### Example configurations

- **1 day** — Shows only yesterday, today, and tomorrow
- **3 days** (default) — Shows 3 days ago through 3 days ahead (7 days total window)
- **7 days** — Shows a full week before and after (15 days total window)
- **15 days** (maximum) — Shows 2 weeks before and after (31 days total window)

### Settings

- **Recommendation Days** — Adjust the scan window from 1 to 15 days before/after today

## Known Issues / Notes

- Only artists with complete birth/death dates in MusicBrainz are included. Artists with partial dates (year-only, year-month-only) are excluded
- The feature requires artists from your library to have MusicBrainz Artist IDs. These are typically resolved automatically, but can be manually added to `.nfo` files or file tags if needed
- At least one streaming provider that exposes library/search (e.g. Spotify, Tidal, Apple Music) must be configured to play the recommended artists
- Obscure or non-mainstream artists may not have complete date information in MusicBrainz
- The provider uses MusicBrainz's life-span data (begin/end dates) to identify matching artists

### Choosing a scan window

The default 3 days is a reasonable balance:

Short windows (1–2 days):
- Fewer recommendations, more focused on immediate dates
- Reduces noise if you have a large library with many artists

Long windows (7–15 days):
- More recommendations, covers a broader time range
- Useful if you have a smaller library or want to see upcoming/past dates further out
- May result in many folders if your library has artists with dates spread throughout the year

## Technical Details

- Uses MusicBrainz life-span data (begin-date/end-date fields)
- Only artists with day-level precision are included
- Recommendation folders use `translation_key` + `translation_params` for proper i18n support
- Debug logging helps troubleshoot missing dates or matching issues
