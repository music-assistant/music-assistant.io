---
title: General
description: Information regarding various elements of Music Assistant
---

# Online Metadata Sources

Music Assistant relies heavily on metadata to work well and it gets this information from locally tagged files and online sources. The free online resources have limits and MA is often hitting those limits so further restrictions have been put in place. This means that:

- Online resources will be queried very slowly in the background
- Users with local files that are badly tagged or without images in the music folders will see a significant delay until artist thumbs appear
- If a track has no album artist tag, there will no longer be an attempt to look it up in musicbrainz
- Various artists will be the default option if the album artist tag is missing in local files

Music Assistant never modifies the tags in the local files. Online metadata retrieval occurs when local data is lacking. MusicBrainz is only used for streaming providers (so not for local files) OR when the musicbrainz IDs are missing in local files and audiodb and/or fanarttv are enabled. At this time MusicBrainz is only used to get the musicbrainz id's, not for metadata itself.

For users with local files with local artwork and also streaming providers, preferably add the local provider first and allow the sync to complete and all artwork to appear before adding the streaming providers. Not doing so can result in the streaming provider artwork to be preferred although this can be fixed by using the images section in the artist view.

It is possible to speed the metadata retrieval for an individual item (including lyrics when a track is selected) by using the UPDATE METADATA option in the ⋮ menu in the top right corner.

## The Library

The Music Assistant Library is a database containing details of the music which the user has indicated they are interested in listening to on a regular basis. It consists of information about Artists, Albums, Tracks, Playlists, Audiobooks, Podcasts and Radio Stations which allows easy searching, display and cross referencing across the User Interface.

For local music providers all artists/albums/tracks/playlists are imported* into the MA library when the provider is added and at each sync.

For streaming providers ONLY the SPECIFIC artists/albums/tracks/playlists that are in the streaming providers library (or favourites or however it is termed in the provider) will be imported* into the MA library when the provider is added and at each sync. This means, for example, if you have an artist in the providers library but none of their albums then all you will see in the MA library is the artist with NO associated albums or tracks. You have to subsequently add albums or tracks to the MA library if you want to see them in the library views. Note you can toggle the library / streaming provider filter option to see all that is available in the streaming provider.

In each view there is a ⋮ menu in the top right corner. This menu has various library related functions. Two important ones are UPDATE METADATA amd REFRESH ITEM.  Update metadata only retrieves additional metadata for the item being viewed and doesn't alter any of the existing/base details, while refresh item completely re-adds the item into the database, overwriting all existing data. To update the images section or lyrics you only need to select UPDATE METADATA.

\* <i>imported means metadata is added to the database. No files are moved or downloaded</i>

:::note
If identical items (e.g. an album or track) have not been matched across providers or within a provider then navigate to the [Provider Details](ui#provider-details) section of the item and use the options there to link them. 
:::
    
[![Preview image](/assets/screenshots/library.png)](/assets/screenshots/library.png)

**Favourites**

As a further means of filtering the library, items can be marked as a "favourite". This is shown in the UI as a filled heart icon. Whether items are favourited by default when imported from the music provider is determined by the [provider settings](music-providers/index). You can see all items if you deselect the heart icon in the top menu.

## The Queue

Each player has its own queue. Viewing the queue is done by pressing the :material-playlist-play: button. This button can be found on the player bar at the bottom of the UI or for narrow displays in the NOW PLAYING view.

Selecting the PLAYED ITEMS option will show the previous items from the queue and selecting any will show a menu and this will allow a restart of the queue from that point.

![Preview image](/assets/screenshots/queue1.png)

A menu of options to control the queue is available for each upcoming track and is shown in the image above.

:::note
What happens to the queue when the different types of items (e.g. album, artist, playlist etc) are added to it is configurable in MA SETTINGS>>CORE>>PLAYER QUEUES CONTROLLER
:::
    
The options in the menu available in the top right is shown below. Repeat and Shuffle also have buttons at the bottom in the player bar (or in the NOW PLAYING view for narrow mobile devices).

Transferring the queue will also transfer the shuffle and repeat setting to the new player.

![Preview image](/assets/screenshots/queue3.png)

The Don't Stop The Music (DSTM) option can be enabled if a provider is available which supports dynamic tracks (i.e. Apple, Deezer, Spotify, Subsonic, Tidal and YTM). When DSTM is on, radio mode will be automatically enabled when the last track of the queue is reached and if any dynamic tracks can be resolved from one of the providers. The added tracks will be based on the played items in the queue.

:::note
If a queue is paused for more than 30 seconds it's status will change to stopped 
:::

:::caution
Adding thousands of tracks to the queue may cause MA to become unresponsive depending on the resources of the host hardware. It is recommended to keep the queue to one thousand tracks or less. 
:::

### Radio Mode

#### Starting from a Track or Album:
Radio Mode retrieves similar tracks using the track's provider mappings (which is shown in the [Provider Details](ui#provider-details) section in the UI). When you start from a track in the [library](#the-library), Music Assistant checks each of the track's provider mappings in order and uses the first provider that supports the similar tracks feature (Apple Music,  Deezer, Spotify, Subsonic, Tidal, or YouTube Music). For example, if a track exists on both Spotify and Tidal, and Spotify is listed first in the provider mappings, Spotify's similar tracks algorithm will be used exclusively. When starting from an album, Music Assistant first selects base tracks from that album, then applies the same provider selection logic for each track. If you start with a track or album that's not in the library (i.e., directly from a music provider), that provider's similar tracks implementation is used.

#### Starting from an Artist:
Radio Mode works differently when starting from an artist. For an artist in the library with multiple provider mappings, Music Assistant fetches the top tracks from all providers where that artist exists, combines them into a single pool, then randomly samples five tracks as the base. Each sampled track then queries its own provider for similar tracks. This means radio mode started from an artist typically produces a diverse mix of results from multiple providers, as each base track contributes similar tracks from its respective provider (e.g., some from Spotify, some from Tidal, some from Apple Music). For artists not in the library, only that provider's top tracks are used as the base.

## Playlists

Playlists must be stored on a provider. A music provider's playlist can only contain tracks from that provider. However, MA has a built-in provider with the ability to create playlists that have tracks from multiple music providers. In this case the playlist will be stored solely within the MA database. These options are automtically presented in the Add to Playlist dialog.

Playlists can be created or added to from various menus in the different views. They can also be created in the Playlist view by clicking on the icon in the top right.

[![Preview image](/assets/screenshots/playlist-create.png)](/assets/screenshots/playlist-create.png)

Playlists which consist of tracks from the filesystem provider will be stored in the MA database.

User created playlists from streaming providers will be imported into the MA database and will remain synchronised regardless of whether changes are made from the MA UI or from the streaming provider's native application. Refer to the individual Music Provider pages for any limitations.

Playlists can be copied from one provider to another by opening the source playlist and selecting all of the tracks and then in the ACTIONS menu select `Add to Playlist`.

Automatically generated playlists from streaming providers may be supported. See the specific provider documentation for further information.

MA automatically generates some dynamic playlists. These playlists will be updated at the sync interval set in MA SETTINGS>>CORE>>MUSIC CONTROLLER or they can be updated manually by navigating to the playlist and then pressing on the refresh icon ![refresh](/assets/icons/icon-refresh-plain.png) or by going to the ⋮ menu in the top right and selecting REFRESH ITEM.
