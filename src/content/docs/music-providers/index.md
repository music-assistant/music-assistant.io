---
title: "Music Sources"
sidebar:
  label: Overview
---

# Music Sources
![Logo Banner](/assets/music-provider-logos.png)

## What a music source is

Music Assistant holds no music of its own. A **music source** is somewhere your music actually lives: a streaming service such as Spotify or Tidal, a folder of files on a disk or a NAS, a media server like Plex or Jellyfin, or a directory of radio stations, podcasts or audiobooks.

You add the sources you already use, and Music Assistant reads from all of them at once. Nothing appears until you add at least one, even if Home Assistant can already see the media.

Everything you add is combined into a single **library**: one set of artists, albums, tracks, playlists, radio stations, podcasts and audiobooks, whichever source each item came from. Where the same album exists in several sources, Music Assistant tries to link those copies together so you see one entry rather than three, and plays the [best quality version](/faq/tech-info/#stream-selection) available. Linking only happens where the sources supply enough metadata to identify a match, so it is not guaranteed; see [Provider Details](/ui/#provider-details) for what to do when copies stay separate.

How much of a source ends up in that library is up to you. Each one has its own settings for what gets synced and how often, which the rest of this page covers.

## Adding a source

Go to `SETTINGS >> MUSIC SOURCES >> ADD A MUSIC SOURCE` and pick the one you want. Each source has its own page in this section covering what it offers and how to set it up.

If you remove a source, the database is cleaned up afterwards, which takes a little while. If you still see entries from a deleted source after some time, restart MA to retrigger the cleanup.

> [!TIP]
> If a problem occurs the automatic linking process may need to be initiated again. If what appears to be identical albums or tracks are seen then navigate to the album or track and use the <img src="/assets/icons/database-search.png" alt="question mark" style="width: 20px;"  loading="lazy" /> icon at the top of the [PROVIDER DETAILS](/ui/#provider-details) section. This will trigger the linking process and should result in the same albums and tracks being collapsed together.

![image](/assets/screenshots/add-music-provider.png)

## Settings

All Music Sources have settings which can be configured. The settings page will look similar to the following. The icon in the top right is a hyperlink to the relevant page in this documentation. Specific help for a setting or configurable field is often available and is accessed by selecting this icon ![question mark](/assets/icons/question-mark.png). All sources can be given a custom name and disabled if necessary. The log level can be adjusted for all sources and this is found in the advanced settings. (Do not select Verbose unless asked for by a dev as it can have an adverse performance impact). See the sources pages for source specific settings.

![image](/assets/screenshots/generic-settings.png)

## Library Import Control

All music sources have options to control the import of media items and this is shown in the image below. The image shows a typical streaming provider on the left and a typical filessytem provider on the right. Note that if an individual track is in the source's library (but not its associated album) and, for example, all of the import settings are set to sync then the individual track will be imported and the album will be created in the database but all of the other album tracks will not be added. This behaviour can be changed by using the `Import album tracks` toggle.

Control of the synchronisation timing between the provider and MA is done in the [Background Tasks](/settings/core/#background-tasks) view in MA SETTINGS >> SYSTEM. 

There is a setting which controls whether additions to the MA library are also made to the source library. For clarity, adding an item to the MA library will only be reflected in the originating source of the item. So, for example, if you had the Deezer and Spotify sources installed and you searched for an artist you will likely see that artist listed twice, once from each source. If you add the artist to the MA library and you have sync back enabled, then the artist will only be added to the source that was associated with item selected. The list view is required to see the source's icons.

Lastly, depending on sources installed, there may be additional sync related options at the bottom of the section. Refer to the individual source settings for more information.

![image](/assets/screenshots/library-import-settings.png)

- <b>Sync Library Artists/Albums/Tracks/Playlists/Audiobooks/Podcasts from this source to Music Assistant.</b> Whether to synchronize all artists/albums/tracks/playlists/audiobooks/podcasts from the local source. 
- <b>Import album tracks.</b> By default, adding albums to the Music Assistant library imports only the album entry rather than the associated tracks. This approach allows for the manual selection of specific tracks to include. To override this behavior, this configuration option can be enabled. Users should note that some streaming sources may already automate this process by adding all tracks to their favorites by default.
- <b>Import playlist tracks.</b> By default, importing a playlist into Music Assistant adds only the playlist itself to the library. This allows the playlist to be streamed and individual tracks can be added manually as desired. This configuration option overrides that behavior for specific playlists by importing all associated tracks. Entries can be made using either the case-sensitive playlist name or the playlist URI.
- <b>Sync back library additions/removals (2-way sync).</b> This setting determines the behavior when an item is manually added to or removed from the Music Assistant library. Enabling this option ensures that these actions are synchronized back to the original source. Without synchronization, items removed from the library may reappear during the next automatic sync if they remain present on the source's side.
- <b>Sync Podcast Progress from (source).</b> Automatically sync episode played status from the source to Music Assistant. Episodes marked as played in the source will be marked as played in MA. Only enable this if you use both the the source's app and Music Assistant for podcast playback.
- <b>Sync Audiobook Progress from (source).</b> Automatically sync audiobook progress from the source to Music Assistant. Progress from the source's app will sync to MA when audiobooks are accessed. Only enable this if you use both the the source's app and Music Assistant for audiobook playback.
- <b>Propagate track genres to albums and artists.</b> As the file system has no way to attach genres to the albums and artists this setting will take all genres found in an album or artist's tracks and attach them to the album or artist

Information for other options not listed above is available in the MA UI.

## Not sure which source you need?

If you know what you want to listen to but not which source provides it, start at
[I Want To Listen To](/faq/listen-to/). It groups every source by what it plays, from local
files and streaming through to radio, podcasts and audiobooks, and by the country its content
comes from. That page also carries the summary table comparing all of the sources side by side.
