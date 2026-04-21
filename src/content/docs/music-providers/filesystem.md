---
title: File System Source
description: Features, Configuration, Issues and More for the File System Music Sources
---

# Filesystem Sources <img src="/assets/icons/localfiles-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has full support for reading local music files on disk or a remote server and will catalog it into the library, allowing playback to all player providers supported by Music Assistant. Network support is limited to SMB/CIFS, NFS and WebDAV.

When streaming sources are also availabe in MA linking will only occur when the same item is found in the "Library" of that streaming source. However, additional tracks and albums will be seen in various views or via the global search which can then be added separately to the MA Library.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Audiobooks, Podcasts |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | Yes |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC 192 kHz, 24 bit |
| Login Method | Password or None |

### Other

- Searching for tracks is possible
- Local music is automatically included in the MA Library
- Files are not favourited by default. All items can be seen if the "favourite" filter (the heart) is deselected. Items can then be favourited as desired
- If streaming sources are also connected, then the media will be automatically linked and completed with info from those streaming source(s)
- On playback, when tracks are linked across sources (or within the same source) the highest quality version is used automatically
- It is possible to add multiple filesystem sources

## Configuration

Separate sources must be added for Music, Audiobooks and Podcasts.

**Audio files are on a disk/folder of the device running the Music Assistant Server**

If the files are stored on the device running Music Assistant, for example the `/media` folder in Home Assistant OS, the Filesystem (local disk) source should be selected and then the path to the files provided. 

> [!NOTE]
> For Home Assistant OS only the `/media` folder can be accessed. Docker users can mount their own folder paths. It is not possible to mount a folder from Home Assistant into the `/media` path.

**Audio files are on a remote share served via SMB/CIFS**

Music Assistant has support for SMB (also known as samba or CIFS) shares and DFS. Select the music source "Filesystem (remote share)" and configure the (fqdn) hostname (or alternatively the IP address) to the server, the name of the share and optionally any subfolder. Advanced options are:

- <b>SMB Version.</b> The SMB protocol version to use. SMB 3.0 or higher is recommended for better performance and security. Use Auto to let the system negotiate. The options are `Auto`, `SMB 1.0`, `SMB 2.0`, `SMB 2.1`, `SMB 3.0 [default]`, and `SMB 3.1.1`
- <b>Cache Mode.</b> Cache mode affects performance and consistency. 'Loose' provides better performance for read heavy workloads and is recommended for music libraries.. The options are `Strict`, `Loose (Recommended) [default]`, and `None`

**Audio files are on a remote share served via NFS**

Music Assistant has support for NFS shares. Select the music source "Filesystem (NFS share)" and configure the IP address (without leading `http://`) of the server, the absolute export path of the share (e.g. `/volume1/music`) and optionally any subfolder.

**Audio files are on a remote share served via WebDAV**

Music Assistant has support for WebDAV shares. Select the music source "WebDAV" and configure the full URL of the WebDAV endpoint including the full path to the content folder (e.g. https://example.com/webdav/music). Provide username and password if authentication is required. SSL certificate verification is optional and disabled by default.

### Settings

In addition to the settings outlined above to configure this source there are additional settings available (note certain options will be greyed out depending upon the content type selected):

- <b>Content type in media folder(s).</b> This setting defines the content type of the source and is necessary for Music, Audiobooks and Podcasts to be correctly identified
- <b>Action when a track is missing the Albumartist ID3 tag.</b> In the first instance [tag the files correctly](#tagging-files). MA needs an album artist defined so that the item can be added correctly to the database. Instead of skipping tracks that do not have this information, this setting defines how the situation should be handled. By default, `Various Artists` will be used but the other options available are `Track Artist` and `Folder name (if possible)`.
- <b>Ignore playlists with album tracks within album folders.</b> Some users have a playlist per album. For large collections this results in an unusable Playlist View. To avoid this situation, this setting, which is enabled by default, will result in playlists which are more than one level below the root folder of the source to be ignored
- <b>Sync Library Artists/Albums from this source to Music Assistant.</b> Whether to synchronize all artists/albums from the local source. 
- <b>Import tracks/files into the Music Assistant library.</b> Define if the import of tracks/files is desired. When not importing into the library, tracks can still be manually browsed using the Browse feature. Note that by adding a Track into the Music Assistant library, the track artists and album will always be imported as well
- <b>Import playlists (m3u files) into the Music Assistant library.</b> Define if the import of playlists (m3u files) is desired. When not importing into the library, they can still be manually browsed using the Browse feature.
- <b>Import Podcasts/Audiobooks into the Music Assistant library.</b> Define if the import of Podcasts/Audiobooks is desired. When not importing into the library, items can still be manually browsed using the Browse feature.
- <b>Propagate track genres to albums and artists.</b> Derive albums and artist genres from their tracks when album/artist have no genre metadata of their own

## Known Issues / Notes

- Write access to the share is required in order to edit or create playlists which are stored locally. Playlists can still be saved to the MA built-in provider if only read access is granted
- When using the remote share connection, be aware that use of SMB1 (which is very old) is not recommended. If the connection keeps failing, look at the NAS settings to see if SMB1 can be disabled
- Use the following naming convention for local artwork
    - Artist thumb: folder.jpg or artist.jpg (or png)
    - Album thumb: folder.jpg or cover.jpg (or png)
    - Fan Art (used as background in banners): fanart.jpg (or png)
    - Logo (used on Artist view): logo.png
- Artist thumb, Fanart and Logo should be in the folder with the artist name. Album thumbs should be in the folder with the album name or in the disc folders below that. More about artwork file types can be found here https://kodi.wiki/view/Artwork_types
- Embedded album thumbs will be extracted from audio files. However, performance can be improved and disk space saved by providing a single local artwork file vs. embedding the same artwork in all files
- WebDAV is HTTP-based so every file operation requires a network request. Library sync will be slower than local or SMB, particularly for large libraries or servers accessed over the internet
- Writing to the WebDAV server is not supported. Playlists can be read but not created or edited. Use the MA built-in provider for playlist management

> [!TIP]
> **Local Artwork is Optimal**
>
> Using embedded images on every track of the same album is suboptimal for both disk space and performance. Use a single folder.jpg in the album's folder instead

- Artwork which needs to be downloaded will be done very slowly in the background. It is possible to force the download by selecting "Update Metadata" from the ⋮ menu in the banner at the top of a view
- A setting, enabled by default, allows the skipping of playlists which are more than one level below the root (normally this is the album folder). This is preferred as these playlists (normally all album tracks in the folder) serve no function in MA and clutter the Playlists view. Excessive numbers of playlists can have a negative impact on other parts of the MA experience
- In regard to folder and filenames note the following:
    - Folders commencing with an underscore will be ignored
    - Music Assistant requires all file and folder names to be valid UTF-8. Files with non-UTF-8 characters in their names will be skipped during library sync and a warning will be logged identifying the affected file. This most commonly affects files originally tagged or named on Windows using legacy encodings such as Windows-1252, where characters like curly quotes or accented letters may have been written as non-UTF-8 bytes
    - Due to a kernel limitation, emoji and other special characters in folder or file names are not supported on SMB/CIFS network shares. Items with these characters will be skipped during library sync
 
### Music

- Local tracks and albums will be linked to the same tracks or albums on any source (local or streaming). Note that same is not simply same name. The tags are reviewed to ascertain whether it is indeed the exact same track. Without tag information MA will attempt to identify identical tracks based on the other information it has such as artist name, album, and track length. However, poor tag information may lead to poor matches
- Text files containing song lyrics are supported. These files must be named identically to the track filename and in the same folder but with a `.lrc` file extension. The lyrics will be loaded when playback commences
- To minimise the chance of problems, music folders should follow the /artist/album structure and the folder names should match the artist and album names as tagged with any non-[alphanumeric characters](https://en.wikipedia.org/wiki/Alphanumericals) removed (e.g. AC/DC should be in a folder ACDC)
- Files placed into a random structure will be imported but no other data will be able to retrieved from the folder names and other problems may occur

### Audiobooks

- Supported file formats are: `.aa`, `.aax`, `.m4b`, `.m4a`, `.mp3`, `.mp4`, `.flac`, `.ogg`, `.opus`
- Audiobooks in their own folder are always supported and is the preferred option. For untagged files this is mandatory, and filenames must sort alphabetically in chapter order
- A single file with embedded chapters (e.g. `.m4b`) works in any folder
- Multiple books can share a single folder if each file has an album tag (used as the book title to group chapters) and a track number tag. Multi-disc books also need a disc number tag. The title tag is used as the chapter name if present
- Author is read from the writer, album artist, or artist tag (in that order). Optional but recommended
- Cover art will be obtained from an embedded image, or an image file (`.jpg`, `.jpeg`, `.png`, `.gif`) in the folder
- A `.txt` file in the folder will be used as the book description

### Podcasts

- Supported file formats are: `.aa`, `.aax`, `.m4b`, `.m4a`, `.mp3`, `.mp4`, `.flac`, `.ogg`, `.opus`
- Podcasts must be placed in their own folder. Every file in the folder is an episode of that podcast
- Podcast name is obtained from the `album` tag of the episodes; if absent, the folder name is used
- Episode name is obtained from the `title` tag. Episode order is set by the track number tag
- Embedded chapters within individual episode files are supported
- A `metadata.json` file in the folder can provide additional podcast-level metadata: title, sorttitle, description, publisher, genres, and image URL.
- Cover art will be obtained from an embedded image, or an image file (`.jpg`, `.jpeg`, `.png`, `.gif`) in the folder

## Tagging Files 

- It is very important that all audio files contain correct, and ideally, extensive tag information. The more comprehensive the tagging the better the results will be when using MA. Note the following:
    - Universal Tag Support: Music Assistant parses metadata from the industry-standard formats, including ID3 (v1/v2) for MP3s, Vorbis Comments for FLAC/Ogg/Opus, MP4 Atoms for M4A, and APEv2 tags
    - Primary Source of Truth: Embedded tags are treated as the definitive source for artist, album, and track names. External metadata providers (like MusicBrainz or Fanart.tv) are only used to supplement missing info, such as high-resolution artwork or artist bios
    - Cross-Platform Linking: MA uses advanced tags like MusicBrainz IDs (MBID) and ISRC codes to seamlessly link local files with matching tracks on streaming services like Spotify or Tidal
    - Artwork Handling: It supports both embedded artwork within the file and local folder-based images (e.g., folder.jpg or artist.png)
    - Recommended Tagger: For the best results in Music Assistant, it is strongly recommended to use <a href="https://picard.musicbrainz.org" target="_blank" rel="noopener noreferrer">MusicBrainz Picard</a> to ensure the files contain the specific IDs needed for library linking. Other programs such as <a href="https://www.mp3tag.de/en/" target="_blank" rel="noopener noreferrer">Mp3Tag</a> are often also based on the Musicbrainz catalog and can work as well provided they include the tags shown in the [Tags used by MA](#tags-used-by-ma) table

- Fields with multiple values can be handled as follows:
    - For ID3v2.3 and MP4 tags, multiple items should be separated by a semi-colon (this is the only tag splitter supported). In Picard this is an option in OPTIONS >> TAGS >> ID3.
    - For Vorbis (FLAC, OGG), use multiple fields per the [Vorbis spec](https://xiph.org/vorbis/doc/v-comment.html)
    - For ID3v2.4 and APEv2 tags, multiple artists and album artists can be separated by the null character
- MA requires the Album Artist tag to be set. If that tag is not set then what happens to those tracks when the provider is scanned depends on the `Action when a track is missing the Albumartist ID3 tag` setting for the local provider
- Music Assistant puts you in control by fully trusting the tags you provide, only additional information is scraped from metadata providers.
- Music Assistant has support for both embedded artwork and artwork stored in a common folder structure of Artist \ Album and `.nfo` files with enhanced metadata are also supported
- For multi disc albums it is recommended (but not required) to add folders named “Disc 1”, “Disc 2”, etc beneath a folder with the album name. Artwork for the album can be added to the top level album folder or in the disc folders
- If there is nothing added to the disc tag then the disc number will not be shown in the display

![image](/assets/screenshots/no-disc-tag.png)

- To minimise the chance of problems with MA the <a href="https://kodi.wiki/view/Music_tagging" target="_blank" rel="noopener noreferrer">Kodi guidelines</a> should be followed. Just about all the tips, tricks and suggestions on that page are applicable to MA and if it is followed to the letter the UX will be much better

> [!NOTE]
> As the semi-colon is the standard delimiter for multi-value tags, an artist with the semi-colon in their name requires special handling. One of the following options must be used:
> - Vorbis (FLAC, OGG): Multiple (more than 1) ARTIST fields (one per artist)
> - ID3v2.4 (MP3): Multiple (more than 1) null-separated values in TPE1
> - APEv2 (WavPack, Musepack, etc.): Multiple (more than 1) null-separated values in Artist field
> - All formats: Single artist field with exactly one MusicBrainz Artist ID

### Multi-Artist Tracks

For tracks with multiple artists, MA supports several approaches:

1. ARTISTS tag (recommended for ID3) - A dedicated multi-value field listing each artist separately. This is the most reliable method for ID3.
2. Multiple ARTIST fields (recommended for FLAC/OGG/Opus). The Vorbis comment spec allows multiple ARTIST fields (one per artist). MA reads all of these. (Note that taggers may add multiple ARTISTS (plural) fields. This is not standard according to the Vorbis spec but MA will handle this case)
3. ARTIST tag parsing - If neither of the above are present, MA will attempt to parse the ARTIST string. Semicolons are treated as the primary separator. Featuring-style separators (e.g. feat., vs., etc.) are always split. Other separators (&, comma, +, "with") are only used when MusicBrainz Artist IDs indicate multiple artists are expected.

In general, ensure the MusicBrainz Artist IDs align with the ARTIST (or ARTISTS) tags - one ID per artist.

> [!NOTE]
> - If artist tags are split undesirably then use the ARTISTS tag, multiple ARTIST fields, or Musicbrainz identifiers to control exactly how artists are added to the database.
>
> - The album artist tag must be semi-colon separated

### Tags used by MA

<a href="/assets/tag-usage.png"><img src="/assets/tag-usage.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>

The left column corresponds to the TAG NAME shown in the <a href="https://picard-docs.musicbrainz.org/downloads/MusicBrainz_Picard_Tag_Map.html" target="_blank" rel="noopener noreferrer">MusicBrainz Picard Tag Mapping</a> table. Refer then to the appropriate tag name for the format of the file being tagged

### Manually Adjusting Tags

> [!WARNING]
> The following should be considered as advanced. Making manual changes to the tags can have undesired effects to the MA library if mistakes are made. Additionally, matching may not occur or may occur incorrectly between sources

Normally it is best to leave the Picard tags unchanged. However, some people do not agree with Musicbrainz that <a href="https://musicbrainz.org/doc/Style/Recording#Recordings_with_different_mastering" target="_blank" rel="noopener noreferrer">remasters are the same as the original recording.</a> To separate these out the tags can be edited as follows:

- Remove MusicBrainz Release ID and Recording ID
- Keep MusicBrainz Artist ID
- Remove ISRC (as that is also used as strong identifier for tracks)
- Remove barcode (as that is also used as strong identifier for albums)
- Because there is no version specific tag, place the version between brackets in the title. For example, Great Song (Vinyl Rip)


---

## CUE Sheet Support

When the filesystem provider encounters a `.cue` file, each logical track described by the sheet becomes its own library track. The referenced audio file itself is not imported as a separate track.

Information for each track is built from two sources: the CUE Sheet and the tags in the referenced audio file. Where both describe the same album-level field, the CUE Sheet wins.

The original Cue Sheet specification only had [13 directives](https://web.archive.org/web/20160201021136/http://digitalx.org/cue-sheet/syntax/). These are not sufficient for Music Assistant to work optimally, so additional support has been added through various REM fields to allow the provision of the equivalent [tags listed above](#tags-used-by-ma). This metadata can be provided through any combination of tags in the file and fields in the Cue Sheet as described below. Because mainstream CUE Sheet authoring tools do not emit these REM fields (they follow the original 13-directive spec), users who want the full metadata available to Music Assistant will need to add them manually to the CUE Sheet — or, for album-level metadata, tag the audio file itself. The naming follows [Picard's variable conventions](https://picard-docs.musicbrainz.org/en/latest/_static/MusicBrainz_Picard_Tag_Map.html), so anyone already tagging their library with Picard will find the fields familiar.

### Multi-value strategy

Multi-value fields follow the Vorbis convention: repeat the line rather than delimiter-joining. This keeps names like `AC/DC` or `Wait, Wait... Don't Tell Me!` intact. Multi-value capable directives are indicated in the table below.

Where both artists and a companion field (sort names, MB artist IDs) are multi-value, Music Assistant aligns them by index — the Nth `REM ARTISTSORT` goes with the Nth `PERFORMER`.

### Fields read from the CUE sheet — sheet (album) level

Written at the top of the file, before any `TRACK`. The **Standard** column indicates whether the directive is commonly emitted by mainstream ripping/authoring tools (EAC, CUETools, foobar2000, XLD), not necessarily part of the original 13-directive CDRWIN spec. Fields marked **No** are Music Assistant extensions — other players may ignore them.

Standard directives FLAGS, PREGAP, POSTGAP, SONGWRITER, and CDTEXTFILE are accepted but silently ignored — they're CD-burning or CD-Text binary-file concerns that don't map to Music Assistant's library model.

| Directive | Standard | Multi? | Feeds |
|-----------|:---:|:---:|-------|
| `FILE "..." WAVE\|MP3\|...` | Yes | no | Path to the referenced audio file |
| `TITLE "..."` | Yes | no | Album title (overrides audio album) |
| `PERFORMER "..."` | Yes | yes | Album artists (overrides audio albumartist(s)) |
| `CATALOG <upc>` | Yes | no | Disc UPC/EAN — album barcode |
| `REM DATE YYYY` | Yes | no | Album year |
| `REM GENRE "..."` / `GENRE "..."` | Yes | yes | Album genres |
| `REM ALBUMSORT "..."` | No | no | Album sort name |
| `REM ALBUMARTISTSORT "..."` | No | yes | Album artist sort names (aligned with `PERFORMER`) |
| `REM MUSICBRAINZ_ALBUMARTISTID ...` | No | yes | Album artist MBIDs (aligned with `PERFORMER`) |
| `REM MUSICBRAINZ_ALBUMID <uuid>` | No | no | Album MBID also known as the RELEASE ID |
| `REM MUSICBRAINZ_RELEASEGROUPID <uuid>` | No | no | Release group MBID |
| `REM RELEASETYPE ...` | No | yes | Album type (e.g. `album`, `compilation`, `live`) |

### Fields read from the CUE sheet — track level

Written inside each `TRACK NN AUDIO` block:

| Directive | Standard | Multi? | Feeds |
|-----------|:---:|:---:|-------|
| `TRACK NN AUDIO` | Yes | no | Track number |
| `INDEX 01 MM:SS:FF` | Yes | no | Track start position (`INDEX 00` pregap is ignored) |
| `TITLE "..."` | Yes | no | Track name |
| `PERFORMER "..."` | Yes | yes | Track artists (falls back to sheet-level `PERFORMER`) |
| `ISRC ...` | Yes | yes | Track ISRCs |
| `REM GENRE "..."` / `GENRE "..."` | Yes | yes | Per-track genres (overrides album genre for this track) |
| `REM TITLESORT "..."` | No | no | Track sort name |
| `REM ARTISTSORT "..."` | No | yes | Track artist sort names (aligned by index with `PERFORMER`) |
| `REM MUSICBRAINZ_ARTISTID ...` | No | yes | Track artist MBIDs (aligned by index with `PERFORMER`) |
| `REM MUSICBRAINZ_RECORDINGID <uuid>` | No | no | Unique identifier for the original recording of the track |
| `REM MUSICBRAINZ_TRACKID <uuid>` | No | no | Unique identifier for the track on this release |
| `REM COPYRIGHT "..."` | No | no | Track copyright metadata |
| `REM GROUPING "..."` | No | no | Track grouping metadata |
| `REM COMMENT "..."` | No | no | Track description metadata |
| `REM ITUNESADVISORY 0\|1` | No | no | Explicit flag |

Track duration is computed from the next track's `INDEX 01` minus this track's `INDEX 01`. For the final track, it is computed from the audio file's total duration.

### Fields read from the audio file

`ffprobe` tags on the referenced audio file supply everything that applies to the album as a whole, plus the technical format used for playback:

- **Format** (shared by every CUE track) — sample rate, bit depth, channels, bit rate, container/codec, embedded cover art, disc number.
- **Album metadata** (used unless overridden by the CUE sheet) — album, albumsort, albumartist/albumartists, albumartistsort, musicbrainzalbumartistid, album_type, date/year, genre, barcode, musicbrainzalbumid, musicbrainzreleasegroupid.
- **Loudness normalisation** — run a ReplayGain scanner against the audio file (e.g. `metaflac --add-replay-gain album.flac` or `rsgain easy album.flac`). Music Assistant reads `REPLAYGAIN_ALBUM_GAIN` from the audio file tags automatically; for a single-file CUE rip, file gain *is* album gain.

Track-specific audio tags (title, artists, lyrics, per-track loudness, etc.) are not applied per CUE track — a single-file rip only carries one copy of those, so Music Assistant relies on the CUE sheet for anything that varies between tracks.

Track artists (PERFORMER) fall back to sheet-level PERFORMER rather than audio tags. If there are no PERFORMER directives found then [unknown] will be applied.

### Reference CUE sheet

Every directive Music Assistant currently parses:

```
PERFORMER "Pink Floyd"
TITLE "The Dark Side of the Moon"
CATALOG 5099902987620
FILE "pink_floyd_dsotm.flac" WAVE
REM GENRE "Progressive Rock"
GENRE "Art Rock"
REM DATE 1973
REM RELEASETYPE album
REM ALBUMSORT "Dark Side of the Moon, The"
REM MUSICBRAINZ_ALBUMID a1b2c3d4-e5f6-7890-abcd-ef1234567890
REM MUSICBRAINZ_RELEASEGROUPID rg000000-0000-0000-0000-000000000000
REM ALBUMARTISTSORT "Pink Floyd"
REM MUSICBRAINZ_ALBUMARTISTID aa000000-0000-0000-0000-000000000000
  TRACK 01 AUDIO
    TITLE "Speak to Me"
    REM TITLESORT "Speak to Me"
    PERFORMER "Pink Floyd"
    REM ARTISTSORT "Pink Floyd"
    REM MUSICBRAINZ_ARTISTID aa000000-0000-0000-0000-000000000000
    ISRC GBCEN0500001
    REM MUSICBRAINZ_TRACKID 11111111-1111-1111-1111-111111111111
    REM COPYRIGHT "(P) 1973 Pink Floyd Music Ltd"
    REM GROUPING "Part I"
    REM COMMENT "Opening collage"
    REM ITUNESADVISORY 0
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Breathe (In the Air)"
    PERFORMER "Pink Floyd"
    PERFORMER "Clare Torry"
    REM ARTISTSORT "Pink Floyd"
    REM ARTISTSORT "Torry, Clare"
    REM MUSICBRAINZ_ARTISTID aa000000-0000-0000-0000-000000000000
    REM MUSICBRAINZ_ARTISTID ab000000-0000-0000-0000-000000000000
    REM MUSICBRAINZ_RECORDINGID ef000000-0110-0000-0000-000222000000
    REM GENRE "Ambient Rock"
    ISRC GBCEN0500002
    INDEX 01 01:05:50
  TRACK 03 AUDIO
    TITLE "On the Run"
    PERFORMER "Pink Floyd"
    ISRC GBCEN0500003
    GENRE "Ambient Rock"
    INDEX 01 03:52:15
```

### Minimum viable CUE sheet

Assuming the audio file has proper `album`/`albumartist` tags of its own:

```
FILE "album.flac" WAVE
  TRACK 01 AUDIO
    TITLE "First Song"
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Second Song"
    INDEX 01 03:45:00
```

Each track requires:

- `TRACK NN AUDIO`
- `TITLE "..."` — tracks without a title are skipped with a warning
- `INDEX 01 MM:SS:FF`

The sheet requires:

- `FILE` — can be omitted if the CUE Sheet shares the audio file's stem (e.g. `album.cue` alongside `album.flac`).

Everything else (album title, artist, year, genre, cover art, MBIDs) is inherited from the audio file's own tags.

If the audio file also has no album/artist tags, the minimum grows to:

```
PERFORMER "The Band"
TITLE "Album Name"
FILE "album.flac" WAVE
  TRACK 01 AUDIO
    TITLE "First Song"
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    TITLE "Second Song"
    INDEX 01 03:45:00
```

Without either a CUE `TITLE` or an audio-file album tag, tracks are still imported but without an album attachment — a warning is logged.

---

