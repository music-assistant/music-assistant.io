---
title: MusicBrainz Metadata Provider
description: Features and Notes for the MusicBrainz Metadata Provider
---

# MusicBrainz Metadata Provider <img src="/assets/icons/musicbrainz-icon.svg" alt="MusicBrainz logo" style="width: 70px; float: right;"  loading="lazy" />

MusicBrainz is an open music encyclopedia of music metadata. Music Assistant uses it primarily to identify media items via MusicBrainz IDs (MBIDs), which act as a canonical reference for matching the same artist, album, or track across your different providers. It's a built-in provider that can't be disabled. Lookups are only performed when this information isn't already available locally.

Additionally, Music Assistant can generate an **Artist Events** recommendation that surfaces important dates from your library: artist birthdays, memorials (death anniversaries), band founding dates, and disbanded dates. This recommendation row appears on the Discover page as a horizontal scrollable timeline.

## Features

<img width="2160" height="1188" alt="Artist Events recommendation showing timeline of events" src="/images/metadata-providers/musicbrainz-timeline.png" loading="lazy" />

The MusicBrainz provider creates a single **Artist Events** recommendation row. Artist events are grouped by type:

- **Birthdays** — Artists from your library whose birthdays fall within the configured day window
- **In Memoriam** — Artists whose passing dates (death anniversaries) fall within the configured day window
- **Founded** — Bands/groups that were founded on dates within the window
- **Disbanded** — Bands/groups that disbanded on dates within the window

### How it works

The provider scans your library for artists with complete date information in MusicBrainz (YYYY-MM-DD format) and checks if those dates fall within the configured window relative to today. The scan focuses on:

- **Person artists**: Birth and death dates
- **Groups, orchestras, and choirs**: Founding and disbanded dates

During each scan, artists without MusicBrainz metadata are automatically queued for background enrichment. This ensures that over time, more artists in your library will have complete date information and appear in the timeline when relevant.

**Notes:**
- Only artists with full dates (YYYY-MM-DD) are included; partial dates like "1990" are skipped
- For memorial recommendations, MusicBrainz must have the artist marked as deceased (life-span ended flag)
- Obscure or non-mainstream artists may not have complete date information in MusicBrainz
- Artist types like CHARACTER, OTHER, or UNKNOWN are excluded from the timeline

## Configuration

The provider has one configurable setting:

<img width="4512" height="1380" alt="Advanced configuration settings" src="/images/metadata-providers/musicbrainz-config.png" loading="lazy" />

- **Recommendation Days** (default: 3, range: 1-15) — How many days before and after today to include in the artist events recommendation. For example, 3 days shows events from 3 days ago through 3 days ahead (7 days total window).

### Choosing a window

The default 3 days is a reasonable balance:

**Short windows (1–2 days):**
- More focused view, only showing immediate past and upcoming events
- Reduces clutter if you have a large library with many artists
- Good for daily check-ins

**Long windows (7–15 days):**
- Broader time range, more artist events visible
- Useful if you have a smaller library or prefer to see the full week/fortnight ahead
- May result in a long horizontal scroll if your library has many artists with events throughout the year
