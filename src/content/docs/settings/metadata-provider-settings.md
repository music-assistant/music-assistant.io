---
title: "Metadata"
---

# Metadata <img src="/assets/icons/metadata-general-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Metadata is everything Music Assistant shows around your music: artwork, artist biographies,
genres, lyrics and more. It comes from a number of services, which are added and configured on
this page, at **Settings → Music → Metadata**.

Several arrive with Music Assistant and are already working before you touch anything:

| Provider | What it contributes |
|:--|:--|
| MusicBrainz | Identifies artists, albums and tracks so the same item matches across your sources |
| Playlist Metadata | Generates artwork and genres for your library playlists |
| Fanart.tv | Artist and album imagery |
| The Audio DB | Biographies, descriptions, genres, labels and images |
| Cover Art Archive | Album front covers |
| iTunes Artwork | High resolution album artwork |
| LRCLIB | Synchronized and plain lyrics |
| Genius Lyrics | Unsynchronized lyrics, as a fallback |
| Wikipedia | Artist biographies in your preferred language |

MusicBrainz and Playlist Metadata are built in and cannot be turned off. The rest can be disabled
individually here, or all at once with **Enable metadata retrieval from online metadata sources**
in the [Metadata settings](#metadata-settings).

Others, such as [LastFM Recommendations](/metadata-providers/lastfm-recommendations/), are added
from the [Marketplace](/settings/marketplace/), in the same way as a music source.

For what each provider contributes, when lookups happen, and how to fix artwork or artist
information that is missing, see the [Metadata overview](/metadata/).

## Metadata settings

**Settings**, at the top of the page, opens in place with the settings for metadata from every source.

- <b>Preferred language.</b> Preferred language for metadata. If the selected language is unavailable then English will be used. This language is also used for text searches, so localised names such as genres and the built-in playlists can be found by the name shown in this language
- <b>Enable metadata retrieval from online metadata sources.</b> Enables the lookup of information that is not available locally. MA does not modify any existing metadata but supplements it
- <b>Link items to your other music services through MusicBrainz.</b> On by default. Uses the links MusicBrainz keeps to find the artists, albums and tracks of your library on your other music sources, instead of searching each source for them. A background task works through the library in small batches after a library sync and once an hour, and items are also linked whenever their metadata is refreshed. Setting is only visible when the advanced toggle is on
- <b>Use local genre metadata only when available.</b> Online metadata sources will not add genres to items that already have a genre from a local source such as a file tag or NFO file. Items with no local genre still receive genres from online sources as usual
- <b>Enable artist/track artwork lookup for radio streams.</b> Enables the lookup of album or artist imagery when the station supplies `Artist - Track` metadata
- <b>Maximum thumbnail cache size (MB).</b> When the cache exceeds this value the oldest thumbnails are automatically removed
