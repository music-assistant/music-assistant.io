---
title: Which Source Plays
description: How Music Assistant chooses which copy of a track plays when it is available from more than one source, and the settings that change that choice
---

# Which Source Plays

The same track is often available from more than one place: as a file in your own collection, on a streaming service, or on two services at once. Music Assistant links those copies into one track in the [library](/usage/#the-library), so you see it once, and chooses which copy plays when you press play.

This page explains how that choice is made, and the settings under [**Settings → System → Streams → Source selection**](/settings/core/#source-selection) that change it.

## How a copy is chosen

With the default settings:

- **An album plays all of its tracks from one source.** Music Assistant picks that source when you start the album, from the sources that have it: one of your [personal sources](/settings/user-management/#personal-and-shared-music-sources) first, if you have any, then a source that has every track of the album, then the one with the best quality. When the album plays from your files, it plays the files in that album's folder, even when its tracks are also linked to the files of another release
- **A playlist or folder plays from the source it comes from.** A Spotify playlist plays from Spotify, also for a track you have as a file, and a folder plays the files in it. A [Music Assistant playlist](/usage/#playlists) can mix tracks from several sources, so its tracks are chosen one by one, as below
- **A podcast or audiobook plays from the source you started it from**, so your listening progress stays with that account
- **Everything else is chosen track by track**: a track you play on its own, from search or a list, and the tracks of an artist or a genre. Your personal sources come first, if you have any, then the highest quality: hi-res before lossless, lossless before lossy, and a higher sample rate, bit depth or bit rate before a lower one. When two copies are about as good as each other, the one from Local files or a self-hosted server wins

When the chosen copy can't be played, for example because its source is offline, the next copy in line plays instead. With the same settings, Music Assistant makes the same choice every time.

## Which source plays

The **Which source plays** setting decides what wins when a track is available from more than one source. Music Assistant picks an album's source when you start the album, so after changing this setting, start an album that is already playing again to have it follow the new choice.

### Best quality

The default, as described above. The highest quality copy plays, while an album plays from one source, and a playlist or folder from the source it comes from.

For example, you have an album as FLAC files at CD quality, and it is linked to the same album on Qobuz in hi-res. The whole album plays from Qobuz. A playlist on your Spotify account plays from Spotify, also for the tracks you have as FLAC files.

### Prefer local

Your local and self-hosted sources come first: [Local files](/music-providers/local-files/), [Plex](/music-providers/plex/), [Jellyfin](/music-providers/jellyfin/), [Emby](/music-providers/emby/), [Subsonic](/music-providers/subsonic/) and the other sources that hold your own music rather than a streaming catalogue. Streaming services come after them, and the highest quality still wins within each group. An album still plays from one source, and a playlist or folder from the source it comes from, so a Tidal playlist still plays from Tidal.

For example, you keep your collection on Plex and subscribe to Tidal for everything else. An album you have on Plex plays from Plex, even when Tidal has it in hi-res, and the albums you only have on Tidal play from Tidal. When your copy of an album is missing tracks, those play from Tidal.

### Best quality for every track

Every track plays its best copy on its own, even inside an album, playlist or folder: your personal sources first, then the highest quality. This is how Music Assistant chose before this setting existed.

For example, a few tracks of an album you have as FLAC files are also on Qobuz in hi-res. Those tracks play from Qobuz, and the others from your files. An album can then switch between sources, and between releases, from one track to the next, which can break gapless playback.

Podcasts and audiobooks keep playing from the source you started them from, so your progress stays with that account.

## Upgrade copies below

**Upgrade copies below** sets the lowest quality you want to hear. It is off by default. When the copy that would play is below it, a better copy of the same track plays instead, if there is one, even when the album or playlist plays from another source or **Prefer local** is chosen.

When none of the copies linked to a track reaches the chosen quality, Music Assistant looks for the track on your other streaming services when it plays, and keeps the copy it finds for the next time. Only tracks in your library are looked up. Podcasts and audiobooks are not upgraded: they keep playing from the source you started them from, so your progress stays with that account.

| Option | What is upgraded |
| --- | --- |
| **Off** (default) | Nothing |
| **High-bitrate lossy** | Lossy copies below 256 kbps |
| **Lossless** | Every lossy copy |
| **Hi-res** | Every copy that is not hi-res |

The [Audio Pipeline](/audiopipeline/#basic-view) view shows the same quality levels, where high-bitrate lossy is called Standard quality.

For example, most of your collection is FLAC, but some albums you only have as MP3 files you ripped years ago, and you subscribe to Qobuz. Choose **Prefer local** and set **Upgrade copies below** to **Lossless**. Your FLAC files keep playing, and the tracks you only have as MP3 play from Qobuz when Qobuz has them. A track that is not linked to Qobuz yet is looked up there the first time it plays.

## Seeing which source plays

The [Audio Pipeline](/audiopipeline/) view shows where the current track comes from. Open it by selecting the quality label in the [player bar](/ui/#player-bar) or the [Now Playing view](/ui/#now-playing-view). The Input section names the source the track streams from and the format it arrives in.

When you started the track from an album, a playlist, a folder or similar, a line under the source says what it is playing from, for example **Playing from Abbey Road · Album**. Select it to open that album, playlist or other item. A folder has no page of its own, so it is only named.

Every copy a track is linked to is listed in its [Source Details](/ui/#source-details).

## Keep remastered versions apart

Like MusicBrainz, Music Assistant treats a remaster as the same recording as the original, so a remastered track and the original are often merged into one track in your library, for example when your files are tagged with Picard. Playing an album is not affected by that: it plays its own tracks from one source, so the original and the remaster are not mixed. The exception is **Best quality for every track**, where each track plays its best copy.

If you would rather have remasters as tracks and albums of their own, turn on **Keep remastered versions apart** under [**Settings → System → Music**](/settings/core/#music). It is off by default and only visible when the advanced toggle is on. Before you turn it on:

- **The same song is listed more than once**, for example among an artist's tracks and in search results: once as the original and once for each remaster. An album and its remaster are listed as two albums
- **Tracks and albums that were already merged stay merged.** The setting only applies to what is added or matched after you turn it on
- **A remaster is recognised by its name.** The track title or the album title has to name it, as in `Come Together (Remastered 2009)` or `Abbey Road (2009 Remaster)`. Remasters that name different years are kept apart from each other as well
- **Picard's default tags do not name the remaster**, as MusicBrainz usually keeps it out of the titles. Your own rips of an original and of its remaster then still merge, and a remastered rip is kept apart from the same remaster on a streaming service that names it. To have your files recognised, name the remaster in the album title, for example `Abbey Road (2009 Remaster)`. Picard holds the release's disambiguation, such as `2009 remaster`, in its `%_releasecomment%` variable, which a tagger script can add to the album title
