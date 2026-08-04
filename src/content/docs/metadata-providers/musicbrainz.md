---
title: MusicBrainz Metadata Provider
description: Features and Notes for the MusicBrainz Metadata Provider
---

# MusicBrainz Metadata Provider <img src="/assets/icons/musicbrainz-icon.svg" alt="MusicBrainz logo" style="width: 70px; float: right;"  loading="lazy" />

MusicBrainz is an open music encyclopedia that helps Music Assistant match the same artist, album, or track across your different music services. It's a built-in provider that's always enabled.

Additionally, Music Assistant can show an **Artist Events** recommendation with important dates from your library: artist birthdays, memorials (death anniversaries), band founding dates, and disbanded dates.

## Features

When enabled, the **Artist Events** recommendation appears on your Discover page.

<img width="2160" height="1188" alt="Artist Events recommendation showing timeline of events" src="/images/metadata-providers/musicbrainz-timeline.png" loading="lazy" />

Events are grouped by type:

- **Birthdays** — Artists from your library whose birthdays fall within the configured day window
- **In Memoriam** — Artists whose passing dates (death anniversaries) fall within the configured day window
- **Founded** — Bands/groups that were founded on dates within the window
- **Disbanded** — Bands/groups that disbanded on dates within the window

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
