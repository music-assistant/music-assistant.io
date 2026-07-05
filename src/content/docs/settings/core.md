---
title: "System Settings"
---

# MA System Settings <img src="/assets/icons/settings-core-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The core server settings are set with typical defaults that should work for most users. However, there are settings available for each of the core controllers and these are outlined below. All controllers have a setting for the log level in the advanced section. There may be slight differences in the settings between the HA add-on and docker versions of the servers.

![image](/assets/screenshots/settings-core.png)

## Cache

- A button is available to clear the cache used my Music Assistant. Do not routinely use this button as it increases [API usage](/usage/#online-metadata-sources) and slows down the MA experience

## Discovery

- <b>Allow network discovery for UPnP discovery.</b> When enabled, additional broadcast based SSDP discovery is utilised. Use this is some UPnP/DLNA devices fo not regular discovery
- <b>MDNS/Zeroconf discovery interface(s).</b>Options are `Default interface [default]` and `All interfaces`. Used in advanced network setups when multiple network interfaces are used. Setting is only visible when the advanced toggle is on

## Metadata

- <b>Preferred language.</b> Preferred language for metadata. If the selected language is unavailable then English will be used
- <b>Enable metadata retrieval from online metadata providers.</b> Enables the lookup of information that is not available locally. MA does not modify any existing metadata but supplements it
- <b>Use local genre metadata only when available.</b> Online metadata providers will not add genres to items that already have a genre from a local source such as a file tag or NFO file. Items with no local genre still receive genres from online providers as usual
- <b>Enable artist/track artwork lookup for radio streams.</b> Enables the lookup of album or artist imagery when the station supplies `Artist - Track` metadata
- <b>Maximum thumbnail cache size(MB).</b> When the cache exceeds this value the oldest thumbnails are automatically removed

## Music

- <b>Advanced - Reset Library Database.</b> Selecting this button will erase the MA database. This is a destructive irreversible action! This should only be used if database corruption is confirmed. All library items including playlists stored in the database will be lost and will need to be recreated. A rescan of the music sources will rebuild the database with the information contained on those providers. Do not use this routinely. For problems with individual items use the REMOVE FROM LIBRARY menu option

## Players

- No specific options

## Player Queues

The behaviour when playing or enqueuing items is determined by the settings in this section.

![image](/assets/screenshots/settings-player-queues.png)

Additionally, there are options which can be set on a global level which can be overridden on a per queue basis. 

<a href="assets/screenshots/settings-player-queues2.png"><img src="/assets/screenshots/settings-player-queues2.png" alt="Preview image" style="width: 800px;"  loading="lazy" /></a>

Smart Shuffle enhances standard shuffle behavior by intelligently reducing repetition. Instead of selecting tracks purely at random, songs and artists that have been played recently are deprioritized, resulting in a more evenly distributed listening experience and reducing the likelihood of the same tracks being repeated when playlists are replayed. Smart Shuffle is always applied when playing a dynamic playlist, regardless of this setting.

Autoplay has four options as follows:
- <b>Automatic — similar tracks, falling back to your library (default).</b> New tracks similar to what was recently played are requested from the music providers. If no provider is able to supply similar-track recommendations (for example, when only local files are used), an endless mix drawn from the library is used instead, so playback will not stop

- <b>Similar to what you played.</b> Tracks that resemble the most recently played items are fetched from the connected music providers and appended to the queue. This mode relies on a provider that offers similar-track recommendations; if none is available, no tracks are added

- <b>Infinite mix from your library.</b> Tracks are selected from the local library, with preference given to those that have been played the least. The selection is biased towards the genres of the items that were played most recently; when too few matching tracks are found, the mix is topped up with random tracks from across the whole library.

- <b>Tracks from a playlist.</b> Tracks are drawn at random from a playlist chosen by the user. Tracks already present in the queue are skipped so that immediate repeats are avoided. The playlist to use is specifed in the following box

Crossfade can be turned on and off via the button at the top of the [Now Playing view](/ui/#now-playing-view). Which crossfade mode will be enabled can be set here on a global level but can be overridden on a per player basis as well. [Smart crossfade](/audio-analysis/smart-fades/#smart-fades-provider-) is the default

[Volume Normalization](/faq/how-to/#use-volume-normalization-how-does-it-work) is enabled by default and works to eliminate volume differences between media items.

## Streams

All settings in this section should be considered advanced and will not need to be adjusted in the majority of cases. Users with complicated network setups will find settings in this section that will be useful. If MA appears to be setup correctly but no playback occurs then check the settings in this section.

### Queue Playback

<b>Audio buffer size.</b> Controls how much audio is buffered in memory. A larger buffer improves playback stability and seeking but uses more memory. The options are `Maxmimum [default]`, `Minimal` and `Balanced`

This section contains settings which affect the [Volume Normalization](/faq/tech-info/#volume-normalization) functionality of MA. This functionality is enabled by default and settings are also available on an [individual player basis](/settings/individual-player/#audio). Extensive online help for these settings is available by selecting the ![question mark](/assets/icons/question-mark.png) icon in the settings UI for each option.

![image](/assets/screenshots/settings-streamserver-audio.png)

- <b>Allow crossfade between tracks from the same album.</b> Not enabled by default as it may not be desirable particularly for live albums

### Streamserver Advanced Settings 

#### Generic

- The <b>Published IP address</b> and <b>TCP Port</b> are normally populated automatically. This is the address Music Assistant advertises to stream clients (including Sendspin) as the place to connect to for audio. It must be a literal IP address reachable by players on your local network — not a hostname, domain name, or URL. If there are issues with playback, confirm the IP address shown is reachable by the players on the local network. The port must be available.
- <b>Bind to IP/interface.</b> Use in complex network setups to start the streamserver on a specific interface

#### Audio Analysis

- <b>SmartFades Log Level.</b> Specific log level for the Smart Fades mixer and analyzer
- <b>Background analysis concurrency.</b> Maximum number of tracks analsed concurrently during the nightly background scan. Default is 1 and should only be increased on more powerful systems

## Webserver

- <b>Allow User Self-Registration.</b> Allows users to create accounts via Home Assistant OAuth
- <b>Base URL.</b> The (base) URL used to reach the web UI and API on the network. Override this in advanced scenarios — for example, when running the webserver behind a reverse proxy — by entering the full public URL (e.g. `https://music.example.com`). For direct access (no reverse proxy), include the TCP port (e.g. http://192.168.1.10:8095) — it is not added automatically and must match the TCP Port setting below. If using a reverse proxy, use the hostname configured on the proxy, not a raw IP — proxies match requests by hostname. This setting is for the frontend only; it is separate from Streams >> Published IP Address, which must remain a local IP so players can reach the stream server directly.
- <b>TCP Port.</b> The port that the webserver is to be run on. If this setting is changed then ensure the base URL port is changed as well
- <b> Enable SSL/TLS.</b> When enabled two additional fields are revealed which is where the `SSL Certificate` and `SSL Private Key` are added (both must be in PEM format)
- <b>Advanced-Bind to IP/Interface.</b> Start the webserver on this specific interface. For further information see the help for this setting in the MA UI

## Server Logging

This opens a view where the 150 line tail of the Music Assistant log can be seen or the full log can be downloaded.

## Background Tasks

This opens a view where the completed and upcoming background tasks can be seen. Any failures will be clearly indicated and log snippets can be inspected. Detailed information is obtained by clicking on a task. There is a ⋮ menu on the right when allows for:
- Viewing the task details
- Editing the task schedule. Frequency can be Hourly, Daily or Weekly. A precise time can be specified for the task for Daily and Weekly frequencies
- Running of the task now
- Disabling the schedule

Administrators can see all tasks on the server whereas Users can only see tasks created by them (e.g. playlist creation).

![image](/assets/screenshots/background-tasks.png)

## Genre Management

Administrators can access the **Genre Management** page from the settings menu. This page provides tools for maintaining the genre database.

![image](/assets/screenshots/genres/genre-management-overview.png)

### Background Scanner

The genre scanner automatically maps media items to genres based on metadata from your music sources. The scanner panel shows:

- **Scanner status** — Whether the scanner is currently running or idle
- **Last scan time** — When the last scan completed
- **Items mapped** — How many items were mapped during the last scan
- **Scan Now** button — Manually trigger a scan

The scanner status is polled automatically every 30 seconds.

![image](/assets/screenshots/genres/background-scanner.png)

### Genre Statistics

Displays the total number of genres in your library, with a link to view all genres.

### Restore Missing Defaults

Checks for any built-in default genres that are missing from your library and restores them. This does not affect any existing genres or their mappings.

### Full Restore

A destructive operation that completely rebuilds the genre database from defaults. This removes all custom genres and restores the full set of built-in genres.

> [!CAUTION]
> Full restore deletes all custom genres, aliases, and media mappings. This action requires a two-step confirmation to prevent accidental data loss.

## Audio Analysis

Administrators can access the **Audio Analysis** page from the settings menu. This page allows examinination of the progress of the installed audio analysis providers. The stale number is the number of tracks that need to be re-analysed due to a version change

![image](/assets/screenshots/audio-analysis-view.png)

