---
title: File System Provider
description: Features, Configuration, Issues and More for the File System Player Provider
---

# Filesystem Provider <img src="/assets/icons/localfiles-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has full support for reading local music files on disk or a remote server and will catalog it into the library, allowing playback to all player providers supported by Music Assistant. 

When streaming providers are also availabe in MA linking will only occur when the same item is found in the "Library" of that streaming provider. However, additional tracks and albums will be seen in various views or via the global search which can then be added separately to the MA Library.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | Yes |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Audiobooks, Podcasts |
| [Recommendations](../ui#view-home) Supported | No |
| Lyrics Supported | Yes |
| [Radio Mode](../ui#track-menu) | No |
| Maximum Stream Quality | Lossless FLAC 192 kHz, 24 bit |
| Login Method | Password or None |

### Other

- Searching for tracks is possible
- Local music is automatically included in the MA Library
- Files are not favourited by default. All items can be seen if the "favourite" filter (the heart) is deselected. Items can then be favourited as desired
- If streaming providers are also connected, then the media will be automatically linked and completed with info from those streaming provider(s)
- On playback, when tracks are linked across providers (or within the same provider) the highest quality version is used automatically
- It is possible to add multiple filesystem providers

## Configuration

Separate providers must be added for Music, Audiobooks and Podcasts.

**Audio files are on a disk/folder of the device running the Music Assistant Server**

If the files are stored on the device running Music Assistant, for example the `/media` folder in Home Assistant OS, the filesystem (local disk) provider should be selected and then the path to the files provided. 

> [!NOTE]
> For Home Assistant OS only the `/media` folder can be accessed. Docker users can mount their own folder paths. It is not possible to mount a folder from Home Assistant into the `/media` path.

**Audio files are on a remote share, such as a NAS or other (SMB/CIFS) server**

Music Assistant has support for SMB (also known as samba or CIFS) shares and DFS. Select the music provider "Filesystem (remote share)" and configure the (fqdn) hostname (or alternatively the IP address) to the server, the name of the share and optionally any subfolders.

### Settings

In addition to the settings outlined above to configure the provider there are additional settings available for this provider (note certain options will be gryed out depending upon the content type selected):

- <b>Content type in media folder(s).</b> This setting defines the content type of the provider and is necessary for Music, Audiobooks and Podcasts to be correctly identified
- <b>Action when a track is missing the Albumartist ID3 tag.</b> In the first instance [tag the files correctly](#tagging-files). MA needs an album artist defined so that the item can be added correctly to the database. Instead of skipping tracks that do not have this information, this setting defines how the situation should be handled. By default, `Various Artists` will be used but the other options available are `Track Artist` and `Folder name (if possible)`.
- <b>Ignore playlists with album tracks within album folders.</b> Some users have a playlist per album. For large collections this results in an unusable Playlist View. To avoid this situation, this setting, which is enabled by default, will result in playlists which are more than one level below the root folder of the provider to be ignored
- <b>Sync Library Artists/Albums from this provider to Music Assistant.</b> Whether to synchronize all artists/albums from the local provider. 
- <b>Import tracks/files into the Music Assistant library.</b> Define if the import of tracks/files is desired. When not importing into the library, tracks can still be manually browsed using the Browse feature. Note that by adding a Track into the Music Assistant library, the track artists and album will always be imported as well
- <b>Import playlists (m3u files) into the Music Assistant library.</b> Define if the import of playlists (m3u files) is desired. When not importing into the library, they can still be manually browsed using the Browse feature.
- <b>Import Podcasts/Audiobooks into the Music Assistant library.</b> Define if the import of Podcasts/Audiobooks is desired. When not importing into the library, items can still be manually browsed using the Browse feature.
- <b>Automatic sync interval for Artists/Albums/Tracks/Playlists/Podcasts/Audiobooks.</b> Various time periods are selectable or it can be disabled
- <b>SMB Version.</b> The SMB protocol version to use. SMB 3.0 or higher is recommended for better performance and security. Use Auto to let the system negotiate. The options are `Auto`, `SMB 1.0`, `SMB 2.0`, `SMB 2.1`, `SMB 3.0 [default]`, and `SMB 3.1.1`
- <b>Cache Mode.</b> Cache mode affects performance and consistency. 'Loose' provides better performance for read heavy workloads and is recommended for music libraries.. The options are `Strict`, `Loose (Recommended) [default]`, and `None`

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

> [!TIP]
> **Local Artwork is Optimal**
>
> Using embedded images on every track of the same album is suboptimal for both disk space and performance. Use a single folder.jpg in the album's folder instead

- Artwork which needs to be downloaded will be done very slowly in the background. It is possible to force the download by selecting "Update Metadata" from the ⋮ menu in the banner at the top of a view
- Local tracks and albums will be linked to the same tracks or albums on any provider (local or streaming). Note that same is not simply same name. The tags are reviewed to ascertain whether it is indeed the exact same track. Without tag information MA will attempt to identify identical tracks based on the other information it has such as artist name, album, and track length. However, poor tag information may lead to poor matches
- A setting, enabled by default, allows the skipping of playlists which are more than one level below the root (normally this is the album folder). This is preferred as these playlists (normally all album tracks in the folder) serve no function in MA and clutter the Playlists view. Excessive numbers of playlists can have a negative impact on other parts of the MA experience
- Folders commencing with an underscore will be ignored
- Text files containing song lyrics are supported. These files must be named identically to the track filename and in the same folder but with a `.lrc` file extension. The lyrics will be loaded when playback commences
- To minimise the chance of problems, folders should follow the /artist/album structure and the folder names should match the artist and album names as tagged with any illegal characters removed (e.g. AC/DC should be in a folder ACDC)
- Files placed into a random structure will be imported but no other data will be able to retrieved from the folder names and other problems may occur
- Untagged audiobook files must be placed in a folder per book
  
## Tagging Files 

- It is very important that all audio files contain correct, and ideally, extensive tag information. The more comprehensive the tagging the better the results will be when using MA. Note the following:
    - Universal Tag Support: Music Assistant parses metadata from the industry-standard formats, including ID3 (v1/v2) for MP3s, Vorbis Comments for FLAC/Ogg/Opus, MP4 Atoms for M4A, and APEv2 tags
    - Primary Source of Truth: Embedded tags are treated as the definitive source for artist, album, and track names. External metadata providers (like MusicBrainz or Fanart.tv) are only used to supplement missing info, such as high-resolution artwork or artist bios
    - Cross-Platform Linking: MA uses advanced tags like MusicBrainz IDs (MBID) and ISRC codes to seamlessly link local files with matching tracks on streaming services like Spotify or Tidal
    - Artwork Handling: It supports both embedded artwork within the file and local folder-based images (e.g., folder.jpg or artist.png)
    - Recommended Tagger: For the best results in Music Assistant, it is strongly recommended to use <a href="https://picard.musicbrainz.org" target="_blank" rel="noopener noreferrer">MusicBrainz Picard</a> to ensure the files contain the specific IDs needed for library linking. Other programs such as <a href="https://www.mp3tag.de/en/" target="_blank" rel="noopener noreferrer">Mp3Tag</a> are often also based on the Musicbrainz catalog and can work as well provided they include the tags shown in the [Tags used by MA](#tags-used-by-ma) table

- Tags must have multiple items separated by a semi-colon (this is the only tag splitter supported). In Picard this is an option in OPTIONS >> TAGS >> ID3
- MA requires the Album Artist tag to be set. If that tag is not set then what happens to those tracks when the provider is scanned depends on the `Action when a track is missing the Albumartist ID3 tag` setting for the local provider
- Music Assistant puts you in control by fully trusting the tags you provide, only additional information is scraped from metadata providers.
- Music Assistant has support for both embedded artwork and artwork stored in a common folder structure of Artist \ Album and `.nfo` files with enhanced metadata are also supported
- For multi disc albums it is recommended (but not required) to add folders named “Disc 1”, “Disc 2”, etc beneath a folder with the album name. Artwork for the album can be added to the top level album folder or in the disc folders
- If there is nothing added to the disc tag then the disc number will not be shown in the display

![image](/assets/screenshots/no-disc-tag.png)

- To minimise the chance of problems with MA the <a href="https://kodi.wiki/view/Music_tagging" target="_blank" rel="noopener noreferrer">Kodi guidelines</a> should be followed. Just about all the tips, tricks and suggestions on that page are applicable to MA and if it is followed to the letter the UX will be much better

### Multi-Artist Tracks

For tracks with multiple artists, MA supports several approaches:

1. ARTISTS tag (recommended) - A dedicated multi-value field listing each artist separately. This is the most reliable
method.
2. Multiple ARTIST fields - For FLAC/OGG/Opus files, the Vorbis comment spec allows multiple ARTIST fields (one per
artist). MA reads all of these.
3. ARTIST tag parsing - If neither of the above are present, MA will attempt to split the ARTIST string using common
separators (featuring, feat., ft., &, etc.). MusicBrainz Artist IDs help determine the expected artist count.

In general, ensure the MusicBrainz Artist IDs align with the ARTIST (or ARTISTS) tags - one ID per artist.
  
### Tags used by MA

<a href="../assets/tag-usage.png"><img src="/assets/tag-usage.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>

The left column corresponds to the TAG NAME shown in the <a href="https://picard-docs.musicbrainz.org/downloads/MusicBrainz_Picard_Tag_Map.html" target="_blank" rel="noopener noreferrer">MusicBrainz Picard Tag Mapping</a> table. Refer then to the appropriate tag name for the format of the file being tagged

### Manually Adjusting Tags

> [!WARNING]
> The following should be considered as advanced. Making manual changes to the tags can have undesired effects to the MA library if mistakes are made. Additionally, matching may not occur or may occur incorrectly between providers

Normally it is best to leave the Picard tags unchanged. However, some people do not agree with Musicbrainz that <a href="https://musicbrainz.org/doc/Style/Recording#Recordings_with_different_mastering" target="_blank" rel="noopener noreferrer">remasters are the same as the original recording.</a> To separate these out the tags can be edited as follows:

- Remove MusicBrainz Release ID and Recording ID
- Keep MusicBrainz Artist ID
- Remove ISRC (as that is also used as strong identifier for tracks)
- Remove barcode (as that is also used as strong identifier for albums)
- Because there is no version specific tag, place the version between brackets in the title. For example, Great Song (Vinyl Rip)
