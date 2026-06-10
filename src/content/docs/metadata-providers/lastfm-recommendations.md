---
title: LastFM Recommendations Metadata Provider
description: Features and Notes for the LastFM Metadata Provider
---

# LastFM Metadata Provider <img src="/assets/icons/audioscrobbler-icon.svg" alt="Preview image" style="width: 126px; float: right;"  loading="lazy" />

Music Assistant has the ability to generate recommendation rows based on data available from Last.fm. Contributed and maintained by <a href="https://github.com/OzGav" target="_blank" rel="noopener noreferrer">Gavin</a>

> [!NOTE]
> This provider requires streaming providers to also be installed so that the recommendations can be linked to a playable source

## Features

The provider can create up to nine recommendation rows, grouped via four toggles which can be enabled independently (each row can still be shown or hidden via the Discover view edit mode):
 
- Personalized (2 rows) — Discover Similar Artists + Discover Similar Tracks, seeded from your top-played artists and tracks in Music Assistant
- Global Charts (2 rows) — Global Top Artists + Global Top Tracks from Last.fm's worldwide charts
- Genre (3 rows) — Top Artists / Albums / Tracks for your most-played Last.fm genres, cycling through your top three genres one per day (requires a Last.fm username)
- Geographic (2 rows) — Top Artists + Top Tracks for a country you pick from the list

The rows surface music you don't currently have and each item is resolved to a streaming provider you already have configured (e.g. Spotify) so it's playable with one click.

This provider also has support for populating Similar Artists, Similar Tracks and Artist Top Tracks throughout the UI.
                                                                                                                                   
### How each row is built                                                                                                              
                                                                                                                                   
Each row holds up to 10 items. They are constructed as follows:                                                           
 
**Personalized (Similar Artists / Similar Tracks)**
Similar Artists seeds from up to five artists, ranked by how often they appear across the 200 most recently played tracks. Similar Tracks seeds from up to ten of the most-played tracks. Last.fm is asked for similar items for each seed; the combined list is deduplicated and sorted by Last.fm's similarity match score, and the top-scoring items are resolved against available streaming providers. The row only depends upon the listening history so two refreshes with the same history produce the same row.
  
Takes the 5 most-played artists (or tracks) as seeds from the MA playlog, asks Last.fm for similar items for each seed, deduplicates the combined list, and sorts by Last.fm's own similarity match score. The top-scoring items are then resolved against the available streaming providers. The row is fully deterministic given the MA library state — two refreshes with the same play counts produce the same row. It only shifts when listening habits change or Last.fm updates its similarity data.                                                   

**Global Charts (Top Artists / Top Tracks)**                                                                                           
Takes Last.fm's worldwide chart in order, resolves the top 15, and shows the first 10 that match something on the available streaming providers. No randomisation — the order is exactly Last.fm's chart ranking. The row changes when Last.fm's chart changes.                         

**Genre (Top Artists / Albums / Tracks)**                   
Cycles through your top three Last.fm genres, a different one each day. For the day's genre it fetches Last.fm's top 60, drops any already in your library, then picks items via "top 3 + random 7": the first three are fixed to Last.fm's top three, the other seven are a random sample from the rest. The random portion rotates each time the update task runs while the top three stay put.

**Geographic (Top Artists / Top Tracks)**
Same as Global Charts, but using Last.fm's per-country chart. Top 15 in chart order, first 10 that resolve. No randomisation.

## Configuration

MA ships with an API key inbuilt but if a personal API key is desired to be used the obtain one by following the first two steps from <a href="https://www.last.fm/api/authentication" target="_blank" rel="noopener noreferrer">here</a>. It can be entered in a field which is seen when the advanced toggle is on.

- **Last.fm Username** (optional) — required only for the Genre rows
- **Last.fm API Key** (optional, advanced) — override the built-in key with your own if you prefer
- Enable the row categories as desired. See above for a description of the rows which will be made available for each selection

### Settings

- <b>Refresh Recommendations.</b> This button (requires advanced settings to be selected) will clear the recommendation rows and cause an instant refresh

## Known Issues / Notes

  - Personalized rows need listening history in Music Assistant — a fresh install with no plays will not produce them
  - Genre rows require your Last.fm username. Without it, the Genre toggle does nothing
  - At least one streaming provider that exposes library/search (e.g. Spotify, Tidal, Apple Music) must be configured, otherwise there's nothing to resolve items against and rows will be empty
  - Obscure artists/tracks may not be found on your streaming providers and are silently dropped from the row. If a row looks short, this is usually why                                                         
  - Clearing the cache and immediately rebuilding will usually produce very similar results — not because cached data is being served, but because Last.fm's own responses for "similar to X" are stable

### Choosing a refresh interval                                                                                                        
                                                          
The default 6 hours is a reasonable middle ground. The right value depends on what you want:

Short intervals (1–3 hours):                                                                                                       
- Personalized rows respond to recent listening faster — tracks you played this morning can influence "Similar Artists" by the afternoon.                                                                                   
- Global and Geographic rows reflect Last.fm's chart movements sooner.
- Downside: rows shift while you're browsing. If a track caught your eye but you didn't play it, it may be gone next time. If you like to work through a row at your own pace, a short interval will not be ideal.
                                                                                                                                   
Long intervals (12–24 hours):
- Rows stay stable long enough to actually listen to them all.                                                                    
- Fewer API calls.                                             
- Potential Downside: Personalized and Global rows may feel stale, especially if your listening has changed recently.
