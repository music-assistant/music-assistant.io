---
title: Subsonic API Plugin
description: Use Subsonic apps such as Feishin or Resonus to browse your library and play it on your Music Assistant players.
pluginGroup: incoming
---

# Subsonic API <img src="/assets/icons/subsonic_icon.png" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant can answer like a Subsonic server. Contributed and maintained by <a href="https://github.com/ndreno" target="_blank" rel="noopener noreferrer">ndreno</a>

Subsonic is the protocol behind a large family of music apps, such as <a href="https://github.com/jeffvli/feishin" target="_blank" rel="noopener noreferrer">Feishin</a> on the desktop and in the browser, or <a href="https://github.com/juananzzz/resonus" target="_blank" rel="noopener noreferrer">Resonus</a> and Symfonium on Android. They are normally used with servers such as Navidrome.

With this plugin, those apps connect to Music Assistant instead. You browse your Music Assistant library in the app you already like, and the music plays on one of your Music Assistant players, such as a Sonos speaker, through the jukebox mode of the app.

## Features

- Browse artists, albums, tracks, genres and playlists, search, and get random, recent and favorite albums
- Album art and lyrics
- Like and unlike artists, albums and tracks
- Create, edit, reorder and delete playlists
- Jukebox mode: the app controls a Music Assistant player, with play, pause, skip, seek, queue changes and volume
- Each Music Assistant user logs in with their own account and sees their own favorites and playlists

## Configuration

Add the plugin via **Settings → Plugins → Add a plugin**, then open its options.

- **Jukebox player**: the Music Assistant player that Subsonic apps play on in jukebox mode. Leave it on None to disable the jukebox.
- **Subsonic password for (user)**: the password to use in Subsonic apps. An admin sees the password of every user, other users only their own.
- **Regenerate all Subsonic passwords**: issues new passwords for every user. Apps logged in with the old ones have to log in again.

## Connecting an app

1. Add a server in the app and pick the **Subsonic** or **OpenSubsonic** server type, not Navidrome or Jellyfin.
2. Use the address you open Music Assistant with as the server address, for example `http://192.168.1.10:8095`.
3. Log in with your Music Assistant username and the **Subsonic password** shown in the plugin options. Your Music Assistant password does not work here.
4. Switch the app to its jukebox player, for example **Settings → Playback → Jukebox** in Feishin, or **Jukebox** in the output menu of Resonus.

## Known Issues / Notes

- Music only plays on the jukebox player. Playing on the phone or computer that runs the app, and downloading tracks for offline use, are not available.
- There is one jukebox player, shared by everyone using the plugin.
- Ratings are not supported. Music Assistant keeps likes instead, which the apps show as starred items.
- A Music Assistant playlist holds each track only once, so adding a track that is already in a playlist does nothing.
- Some apps only offer their jukebox mode for certain server types, or not at all. Feishin and Resonus have been tested.
- The web version of Feishin goes back to its Web player whenever the page is reloaded, so select Jukebox again after a reload.
- In Resonus, the phone volume buttons do not change the jukebox volume. Use the volume in Music Assistant instead.
