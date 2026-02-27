---
title: User Interface
description: A Walkthrough of the Music Assistant User Interface
---

# User Interface

## Main Menu

![image](/assets/screenshots/UI-main-menu.png)

This menu's appearance can be configured in the settings. It can be placed vertically on the left (as shown) or horizontally at the bottom. The options are displayed in the order they were selected. Any of the options can be hidden. If the settings icon is hidden from this menu it is available in the top right of the HOME screen.

> [!CAUTION]
> If you remove both the Home and Settings icons then you will be locked out. In that case you will need to manually enter the path (e.g. `http://192.168.1.166:8095/#/settings/frontend`) or clear the browser cookies to regain access to the settings page.

***************************************************************

## Global Search
[![image](/assets/screenshots/global-search.png)](/assets/screenshots/global-search.png)

Searches can be done via any combination of words or partial words and also via a URL to a provider such as `https://open.spotify.com/album/0BwWUstDMUbgq2NYONRqlu` 

Initially, the view defaults to ALL which is limited to a maximum of 8 items in the seven categories of Tracks, Artists, Albums, Playlists, Podcasts, Audiobooks and Radio. 

Selecting a specific category will then show a maximum of 50 items. Context sensitive menus are available for each. If the item desired is not found then narrow the search term or navigate to the artist and all available albums and tracks should be shown in that view.
***************************************************************

## Player Bar
[![image](/assets/screenshots/UI-playercontrols-bar.png)](/assets/screenshots/UI-playercontrols-bar.png)

The [Audio Pipeline](/audiopipeline/) selectable label shows, via a coloured icon and two letters, the quality of the audio output (Low Quality, High Quality and Hi-Res). An orange circle and LQ indicate a lossy codec in use, a green circle and HQ indicates a lossless codec in use, and a cyan circle and HR indicates a lossless codec and [High Resolution sample rate or bit depth](/player-support/#audio-quality). For groups, where the quality varies between players, the highest quality available will be indicated.

***************************************************************

## Now Playing View
[![image](/assets/screenshots/now-playing-view.png)](/assets/screenshots/now-playing-view.png)

This view will change depending on screen width. With wider displays you will be able to see the track that is playing (and associated information) as well as the queue, and player selection is available at the bottom. With narrow displays you need to use the toggle in the bottom right to switch between the currently playing information and the queue, and the player selection is available via a smaller speaker icon at the top. Adjustments to the queue can be done with the ⋮ menu on the right.

The [Audio Pipeline](/audiopipeline/) selectable label is described above in the [Player Bar](#player-bar) section.

You can also access the [Now Playing view directly via URL](/faq/how-to/#now-playing-view)

When the favourite icon is solid then selecting that will bring up two options - `Remove from Favorites` and `Add to Playlist`. It is possible that if the favorite status is changed from a different view after playback has commenced then the favourite status may not indicate correctly until playback of the track is restarted.

When lyrics are available for the track being played then the LYRICS selectable label will be shown. Upon selection, the queue will be replaced by the lyrics which will be in sync with the music when timing information is available. Accurate lyric selection is contingent upon the metadata providers and may not be accurate for alternate versions of a song.
***************************************************************

## Player List

[![image](/assets/screenshots/UI-speakers-menu.png)](/assets/screenshots/UI-speakers-menu.png)

> [!NOTE]
> The volume shown against a player group is the AVERAGE of the volumes of each individal player. When the group volume is changed then each player is changed by a proportionate amount.

When a [player group](/faq/groups/) is powered on the members of that group will disappear from the player list and individual playback to those players will not be possible. In order to playback to an individual player then either power off the group or remove the player from the group.

> [!NOTE]
> The MDI icon shown against each player can be changed in the player settings.
***************************************************************

## Grouping Players

There are four ways to group players

1.   **[TEMPORARY SYNC GROUP.](/faq/groups/#temporary-sync-group)** As shown in the [Player List](#player-list) section players can be linked via the checkbox in the player list. Only like player types that support synced playback are allowed to be joined. These players will then play in sync. It should be noted that when players are grouped in this way only the main player holds the queue. 
2.   **[SYNC GROUP.](/faq/groups/#sync-groups)** Create a (permanent) group player via the settings. In addition to playing in sync the group will also keep the queue on the group player instead of one of its child players.
3.   **[UNIVERSAL GROUP.](/faq/groups/#universal-groups)** This allows grouping of dissimilar player provider types but carefully note the potentional limitations on the linked page.
4.   **NATIVE GROUP.** Use the native functionality to group players offered by some player provider types (e.g. Google Cast)

With TEMPORARY SYNC GROUPs the number of players being streamed to can be seen due to the naming convention. In the example image below there are three players in the group.

![image](/assets/screenshots/group_indication.png)

> [!NOTE]
> **Note**
>
> If an attempt is made to power on a group and a member of that group is already a member of another powered on group then an error will be shown.

> [!NOTE]
> **Note**
>
> If a player is taken over by another app, MA will not have knowledge of that, and the group may no longer function correctly. Additionally, if a player of a syncgroup tries to join late (e.g. it was unpowered) it will not be synced to the group.
***************************************************************

## Play Button ![image](/assets/icons/play-button.png)

The play button is used as a shortcut to play the various items in the UI. It is shown on hover for non-mobile devices or is always in view for mobile devices.  

Clicking/touching the Play Button will either execute the default play action for the item or show the play menu. To ensure the user doesn't accidentally play on the wrong player, the play menu will show:

- the first time the MA view is entered; or
- if the player is not playing (or paused)

> [!NOTE]
> **Note**
>
> If there is ever uncertainty as to whether the item will immediately start playing use a right click or long press to bring up the menu.

***************************************************************

## Multi Select ![image](/assets/icons/multiselect.png)

When the Multi Select icon is selected the Select All icon will appear.  

Clicking/touching the Select All icon will select all of the items in the view (or section of the view as appropiate). For large lists a confirmation dialog will appear as selecting thousands of items can cause unresponsivness depending on the resources of the host.

CTRL-A will also select all items unless the search box is in view in which case it will select all text in that box. Also CTRL-A won't work on views that have multiple sections (e.g. the artist view has albums and tracks) so the Multi Select icon must be used in that case. 

***************************************************************

## Track Menu

In any of the following views, Right click or long press on a track to get the following menus

![image](/assets/screenshots/UI-track-menu.png)

The START RADIO option will only be seen if there is a provider that supports it. Start Radio populates the queue with tracks based on the selected track. The tracks are selected by the provider not MA. 
***************************************************************

## View - Home

[![image](/assets/screenshots/homescreen.png)](/assets/screenshots/homescreen.png)

The Home View provides quick access to all of the different media types. Also shown are RECOMMENDATIONS from the providers which support this feature (e.g. Tidal). Review the Music Provider pages to identify which providers supports this.

The view is fully configurable. Select the blue icon in the top right and then EDIT HOMESCREEN. There is then the ability to show or hide each row and adjust the order. Return to the menu to disable the edit mode.

[![image](/assets/screenshots/homescreen_edit.png)](/assets/screenshots/homescreen_edit.png)
***************************************************************

## View - Artist / Album / Track

[![image](/assets/screenshots/UI-artist-view.png)](/assets/screenshots/UI-artist-view.png)

Album and Track Views look the same as the above except there is no album artist filter icon and the track view has an [ADD VIA URL](/music-providers/builtin/) option.

A blue dot on any icon (e.g. search icon ![image](/assets/icons/search-icon.png) )
indicates that the viewed results are subject to filtering.

The provider filter icon will only show when there are two or more music providers installed that support the media type being viewed. Multiple providers can be selected as part of the filter.

Items in all views can be "right clicked" or "long pressed" to bring up an extensive menu of options which is the same as that accessed by the ⋮ menu on the right. In the image above the complete list of possibilities is shown and this will vary slightly depending on the current view.

Multiple selections of albums / artists / tracks is possible by clicking the [multi-select icon](#multi-select). Once one or more items are selected then clicking on the "ACTIONS" at the bottom

![image](/assets/screenshots/UI-actions.png)

will bring up this menu

![image](/assets/screenshots/UI-actions-menu.png)

The behaviour described above will work on any view where you see the "x item(s) selected" text.
***************************************************************

## View - Individual Artist

[![image](/assets/screenshots/UI-individual-artist.png)](/assets/screenshots/UI-individual-artist.png)

The tracks and albums sections are collapsible. The view above shows them both collapsed. The tracks section shows ALL tracks that are in the library or that are available across all of the providers. A blue dot on the library icon ![image](/assets/icons/library-icon.png) indicates that the viewed results are filtered to only show items that are in the library. To see what albums any given track is on you can either sort alphabetically or click on one and use the context menu and SHOW INFO.

The album section has an additional filter option. You can choose to filter by or in any combination of ALBUM, SINGLE, COMPILATION, EP or UNKNOWN album types.

Expanding the IMAGES section allows for the selection of Thumb, Fanart or Logo. The other types shown are not used in the UI at this time. If there are no or limited images shown or the Images section is missing then go to the ⋮ menu in the top right of the view and select UPDATE METADATA. Right click on an image to make it the primary to be used. (Similar functionality is also available in the album view for Thumb)

### Provider Details

The PROVIDER DETAILS section shows what providers are linked to the artist (albums and tracks have a similar section) across the available providers. It is normal to have multiple entries here if an artist has aliases or there are variant spellings, use of punctuation etc. Thus there may be many entries showing matching links within a provider and across providers. Cross linking across and within providers occurs when the item is added to the MA library and can be triggered by using the <img src="/assets/icons/database-search.png" alt="icon" style="width: 20px;"  loading="lazy" />icon. Adding a new provider does not trigger linking across existing library items.

The creation of links within the MA library to other identical items in the MA library (within or across providers) can occur when an item is added to the MA library. Links will be made automatically if internal matching logic is satisfied.

Incorrect mappings can be removed via the delete option in the ⋮ menu. For local files incorrect links may occur if the source file isn't [comprehensively tagged](/music-providers/filesystem/#tagging-files).

The ID shown against the streaming provider may be used in automations and scripts and is obtainable by pressing the ⋮ icon on the right. Also in this menu, for streaming providers, is an external link which opens the page for the item on the source provider.

***************************************************************

## View - Individual Track

[![image](/assets/screenshots/UI-track-show-info.png)](/assets/screenshots/UI-track-show-info.png)

> [!NOTE]
> The PROVIDER DETAILS section in this view also has the functionality to play a short sample of the track on the local device. Any indicated sample rate and bit depth are as reported by the provider and may differ during playback if transcoding is done before the audio data reaches MA.
***************************************************************

## View - Radio

The Radio view shows streaming radio stations (this is not the [Radio Mode](usage/#radio-mode) of the Player Queue). Stations can be added to this view in the following ways:

* Add to URL - A URL for a streaming radio station (including self-hosted icecast stations) can be added to the library by selecting Add to URL from the menu in the top right of the Radio view. When filtering by provider, they will be shown as provided by "Music Assistant". 

* [RadioBrowser Provider](/music-providers/radio-browser/) - If the RadioBrowser provider is enabled, individual stations can be added to the library from the Browse view.  

* [TuneIn Radio Provider](music-providers/tunein/) - If the TuneIn provider is enabled, stations that are added to your TuneIn library from their website will appear in this list.

## View - Browse

Entering the Browse view will present a list of the installed [Music Providers](/music-providers/). Selecting one of those will show a relevant list of the items from that provider that can be browsed. 

When viewing a provider you will only see what is already in the Library of the Streaming Providers. For the local Providers you will see all files and if a folder is visited that is not already in the MA Library it will be automatically added even if it has been previously removed.

> [!CAUTION]
> **Caution**
>
> Be careful once browsing within the provider as selecting PLAY on a folder will play everything in that folder and all sub-folders. Attempting to play thousands of tracks may consume an excessive amount of system resources on the host and cause MA to crash or become unresponsive.

All radio stations from the [Radio Browser](/music-providers/radio-browser/) provider are available in this view. Individual stations that have been added to the library are available in the Radio view.

