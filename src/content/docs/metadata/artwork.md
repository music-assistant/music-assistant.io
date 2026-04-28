---
title: Artwork
---

# Artwork <img src="/assets/icons/metadata-artwork-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Artwork for artists, albums, tracks, playlists and radio streams is gathered from a mix of source metadata (file tags, folder images, music providers) and dedicated online metadata providers — without altering the originals.

## Sources and order of preference

For artists and albums, the first available image is used in the UI, in this order:

1. **Embedded tags** in the audio file (front cover).
2. **Folder images** next to the album or artist (`cover.jpg`, `folder.jpg`, `artist.jpg`, etc.).
3. **The track's music provider** (Spotify, Tidal, Plex, Jellyfin, Subsonic, …).
4. **Online metadata providers**, prioritised: **Fanart.tv**, **iTunes Artwork**, **The Audio DB**, **Cover Art Archive**.

Artwork from the music source always wins over artwork from online metadata providers. To change the artwork shown in the UI, a higher-quality image can be placed into the album or artist folder; the new image is picked up on the next library scan. Also the Images section of the Artist and Album view can be used to select the desired image. 

## Image variants

Beyond a single thumbnail, the metadata providers expose several artwork variants used in different parts of the UI:

- **Thumb** — the primary square cover used in lists and details (all providers).
- **Fanart / background** — wide background imagery (Fanart.tv, The Audio DB).
- **Banner**, **logo**, **clearart**, **cutout**, **landscape** — used in artist detail views (Fanart.tv, The Audio DB).
- **Disc art / CD art / 3D case art** — extra album imagery (Fanart.tv, The Audio DB).

Most of these require a MusicBrainz Artist ID or Release Group ID; iTunes Artwork uses the album's UPC / EAN barcode instead.

## Radio Stream Metadata

MA will parse the metadata from streams in the following formats:

- ICY
- HLS EXTINF
- Ogg container metadata (Vorbis comments) - supports Vorbis, Opus, and FLAC codecs

Legacy SHOUTcast v1 servers using non-standard HTTP responses are not currently supported.

> [!NOTE]
> See the page for the various radio stream providers for any further information in this regard

## Radio Stream Artist Artwork

When playing radio streams, Music Assistant can display album or artist images instead of the station logo. If the radio provider supplies its own artwork then this is used exclusively. For other stations artwork will be attempted to be sourced according to the following:

- "Artist - Title" format in the stream metadata is required
- Artwork for the single release is preferred first
- If no single artwork is found, then album artwork is tried
- If no album artwork is found, then artist imagery is tried
- Station logo is displayed when:
    - No artist/title metadata is available from the stream
    - The artist/track cannot be matched in the library or on MusicBrainz
    - No artwork is found from any source
    - An advertisement is detected in the stream

## Playlists

MA will use the artwork supplied from the streaming providers. For local providers MA will create a collage based on the track's thumbnails in the playlist. For the local file system providers, local images will be used if found.

## Caching

Artwork is cached locally so the UI stays responsive and to keep API usage low. The on-disk thumbnail cache size is configurable under Settings → Metadata → "Maximum thumbnail cache size" (default 500 MB). Oldest thumbnails are evicted when the limit is reached.
