---
title: "System Settings"
---

# MA System Settings <img src="/assets/icons/settings-core-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The core server settings are set with typical defaults that should work for most users. However, there are settings available for each of the core controllers and these are outlined below. All controllers have a setting for the log level in the advanced section. There may be slight differences in the settings between the HA add-on and docker versions of the servers.

![image](/assets/screenshots/settings-core.png)

## Cache

- A button is available to clear the cache used my Music Assistant. Do not routinely use this button as it increases [API usage](/usage/#online-metadata-sources) and slows down the MA experience

## Metadata

- <b>Language.</b> Preferred language for metadata. If the selected language is unavailable then English will be used
- <b>Enable metadata retrieval from online metadata providers.</b> Enables the lookup of information that is not available locally. MA does not modify any existing metadata but supplements it
- <b>Enable artist/track artwork lookup for radio streams.</b> By default this is enabled and allows artwork to be displayed for radio stations that don't supply it natively. Requires the station to supply appropriate `Artist - Track` metadata

## Music

- <b>Advanced - Reset Library Database.</b> Selecting this button will erase the MA database. This is a destructive irreversible action! This should only be used if database corruption is confirmed. All library items including playlists stored in the database will be lost and will need to be recreated. A rescan of the music sources will rebuild the database with the information contained on those providers. Do not use this routinely. For problems with individual items use the REMOVE FROM LIBRARY menu option

## Players

- <b>Advanced - MDNS/Zeroconf discovery interface(s).</b> For advanced users the default is `Default Interface` and the other option is `All interfaces`

## Player Queues

The behaviour when playing or enqueuing items is determined by the settings in this section.

![image](/assets/screenshots/settings-player-queues.png)

## Streams

All settings in this section should be considered advanced and will not need to be adjusted in the majority of cases. Users with complicated network setups will find settings in this section that will be useful. If MA appears to be setup correctly but no playback occurs then check the settings in this section.

### Queue Playback

<b>Audio buffer size.</b> Controls how much audio is buffered in memory. A larger buffer improves playback stability and seeking but uses more memory. The options are `Maxmimum [default]`, `Minimal` and `Balanced`

This section contains settings which affect the [Volume Normalization](/faq/tech-info/#volume-normalization) functionality of MA. This functionality is enabled by default and settings are also available on an [individual player basis](/settings/individual-player/#audio). Extensive online help for these settings is available by selecting the ![question mark](/assets/icons/question-mark.png) icon in the settings UI for each option.

![image](/assets/screenshots/settings-streamserver-audio.png)

- <b>Allow crossfade between tracks from the same album.</b> Not enabled by default as it may not be desirable particularly for live albums

### Streamserver Advanced Settings (Generic section)

- The <b>Published IP address</b> and <b>TCP Port</b> are normally populated automatically. This is the address Music Assistant advertises to stream clients (including Sendspin) as the place to connect to for audio. It must be a literal IP address reachable by players on your local network — not a hostname, domain name, or URL. If there are issues with playback, confirm the IP address shown is reachable by the players on the local network. The port must be available.
- <b>Bind to IP/interface.</b> Use in complex network setups to start the streamserver on a specific interface
- <b>SmartFades Log Level.</b> Specific log level for the Smart Fades mixer and analyzer

## Webserver

- <b>Allow User Self-Registration.</b> Allows users to create accounts via Home Assistant OAuth
- <b>Base URL.</b> The (base) URL used to reach the web UI and API on the network. Override this in advanced scenarios — for example, when running the webserver behind a reverse proxy — by entering the full public URL (e.g. `https://music.example.com`). This setting is for the frontend only; it is separate from Streams >> Published IP Address, which must remain a local IP so players can reach the stream server directly.
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

CAUTION: Full restore deletes all custom genres, aliases, and media mappings. This action requires a two-step confirmation to prevent accidental data loss.
