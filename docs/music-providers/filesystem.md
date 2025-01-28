---
title: File System Provider
description: Features, Configuration, Issues and More for the File System Player Provider
---

# Filesystem Provider ![Preview image](../assets/icons/localfiles-icon.png){ width=70 align=right }

Music Assistant has full support for reading your own (local) music files on disk or a remote server and catalogs it into the library, allowing playback to all player providers supported by Music Assistant. 

When streaming providers are also availabe in MA linking will only occur when the same item is found in the "Library" of that streaming provider. However, additional tracks and albums will be seen in various views or via the global search which can then be added to the MA Library

## Features

- Support for Artists, Albums, Tracks and Playlists
- Local music is automatically included in the MA Library
- Files are not favourited by default. You can see all items if you deselect the "favourite" filter (the heart) and decide for yourself what you want in your favourites
- If you also have any streaming providers connected, your media will be automatically linked and completed with info from the streaming provider(s)
- On playback, when tracks are linked across providers (or within the same provider) the highest quality version is used automatically
- You can add multiple filesystem providers

## Configuration

**Your files are on a disk/folder of the device running Music Assistant Server**

If your files are actually stored on the device running Music Assistant, for example the `/media` folder in Home Assistant OS, you should select the filesystem (local disk) option and enter the path to the files. 

!!! note
    For Home Assistant OS you can only access the `/media` folder. Docker users can mount their own folder paths. You can not mount a folder from Home Assistant into the `/media` path.

**Your files are on a remote share, such as a NAS or other (SMB/CIFS) server**

Music Assistant has support for SMB (also known as samba or CIFS) shares and DFS. Select the music provider "Filesystem (remote share)" and configure the (fqdn) hostname (or alternatively the IP address) to your server, the name of the share and optionally any subfolders.

## Known Issues / Notes

- Write access to the share is required in order to edit or create playlists which are stored locally. You can still save playlists into the MA built-in provider if only read access is granted
- If you are using the remote share connection, be aware that use of SMB1 (which is very old) is not recommended. If the connection keeps failing, look in your NAS settings to see if you can somehow disable SMB1
- Use the following naming convention for local artwork
    - Artist thumb: folder.jpg or artist.jpg (or png)
    - Album thumb: folder.jpg or cover.jpg (or png)
    - Fan Art (used as background in banners): fanart.jpg (or png)
    - Logo (used on Artist view): logo.png
- Artist thumb, Fanart and Logo should be in the folder with the artist name. Album thumbs should be in the folder with the album name or in the disc folders below that. More about artwork file types can be found here https://kodi.wiki/view/Artwork_types
- Embedded album thumbs will be extracted from audio files. However, you can improve performance and save disk space by providing a single local artwork file vs. embedding the same artwork in all files

!!! tip "Local Artwork is Optimal" 
    Using embedded images on every track of the same album is suboptimal for both disk space and performance. Use a single folder.jpg in the album's folder instead

- Artwork which needs to be downloaded will be done very slowly in the background. You can force the download by selecting "Refresh Item" from the ⋮ menu in the banner at the top of a view
- Local tracks and albums will be linked to the same tracks or albums on any provider (local or streaming). Note that same is not simply same name. The tags are reviewed to ascertain whether it is indeed the exact same track. Without tag information MA will attempt to identify identical tracks based on the other information it has such as artist name, album, and track length. However, poor tag information may lead to poor matches
  
## Tagging Files 

- It is very important that all of your audio files contain proper [ID3 tag](https://en.wikipedia.org/wiki/ID3) information. The more comprehensive the tagging the better the results will be when using MA. For this reason it is strongly recommended that all files are tagged with [MusicBrainz Picard](https://picard.musicbrainz.org). This will ensure consistency and completeness of the tags that MA needs to work best. Other programs such as [Mp3Tag](https://www.mp3tag.de/en/) are often also based on the Musicbrainz catalog and can work as well provided they include ISRC and all MBID tags
- MA requires the Album Artist tag to be set. If you do not have that tag set then what happens to those tracks when the provider is scanned depends on the `Action when a track is missing the Albumartist ID3 tag` setting for the local provider 
- Music Assistant puts you in control by fully trusting the ID3 tags you provide, only additional information is scraped from metadata providers
- Music Assistant has support for both embedded artwork and artwork stored in a common folder structure of Artist \ Album and .nfo files with enhanced metadata are also supported
- Files simply dumped into a random structure will also be imported but no other data will be retrieved from the folder structure
- To minimise the chance of problems with MA you should follow the Kodi guidelines here https://kodi.wiki/view/Music_tagging Just about all the tips, tricks and suggestions on that page are applicable to MA and if you follow it all to the letter you will have a much better experience
- For multi disc albums it is recommended (but not required) to add folders named “Disc 1”, “Disc 2”, etc beneath a folder with the album name. Artwork for the album can be added to the top level album folder or in the disc folders
- If there is nothing added to the disc tag then the disc number will not be shown in the display

![image](../assets/screenshots/no-disc-tag.png)

### Manually Adjusting Tags

!!! danger
    The following should be considered as advanced. Making manual changes to the tags can have undesired effects to the MA library if you make mistakes. Additionally, matching may not occur or may occur incorrectly between providers

Normally it is best to leave the Picard tags unchanged. However, some people do not agree with Musicbrainz that [remasters are the same as the original recording.](https://musicbrainz.org/doc/Style/Recording#Recordings_with_different_mastering) To separate these out you can edit the tags as follows:

- Remove MusicBrainz Release ID and Recording ID
- Keep MusicBrainz Artist ID
- Remove ISRC (as that is also used as strong identifier for tracks)
- Remove barcode (as that is also used as strong identifier for albums)
- Because there is no version specific ID3 tag, place the version between brackets in the title. For example, Great Song (Vinyl Rip)
