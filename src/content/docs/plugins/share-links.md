---
title: Share Links
description: Share tracks, albums and artists for others to open through their own music sources.
pluginGroup: shared
---

# Share Links

Share Links lets you send someone a track, album or artist without requiring them to use the same music service as you. They can open the shared item through their own Music Assistant instance, or follow one of its public music-service links.

Contributed and maintained by <a href="https://github.com/dmoo500" target="_blank" rel="noopener noreferrer">dmoo500</a>.

> [!NOTE]
> This plugin is in beta. Playlist sharing and playlist import are not supported.

## Features

- Share individual tracks, albums and artists from their context menus
- Share tracks from the queue or fullscreen player
- Preview the shared item's title, artist, artwork and public music-service links
- Find the item using the recipient's own library and connected music sources

## Configuration

1. Go to **Settings > Plugins > Add a plugin** and select **Share Links**.
2. Save the plugin configuration. No additional settings are needed for normal use.

### Advanced: a different share page

The share-page base URL is available under the plugin's **advanced settings**. Only change it if you are using another deployment of the share page. The default is `https://app.music-assistant.io/share`; enter a custom base URL without a trailing slash.

## Sharing and opening a link

1. Open a track, album or artist context menu and select **Share**.
2. Copy the link from the share dialog and send it to the recipient.
3. The recipient opens the link to preview the item. They can follow a music-service link directly, or enter the URL of their own Music Assistant instance and select **Open in Music Assistant**.

![Share action in an artist context menu](/assets/screenshots/share-links/artist-context-menu.png)

![Track share dialog with public music-service links](/assets/screenshots/share-links/track-share-dialog.png)

The share page remembers the recipient's instance URL in their browser. The recipient needs a Music Assistant version with share-link support and the Share Links plugin configured, and must be able to access and sign in to their instance.

Your Music Assistant server does not need to be reachable by the recipient. Opening a shared item does not automatically add it to their library.

## Known Issues / Notes

- Finding a match depends on the recipient's connected music sources, subscriptions, region and catalog availability. A match is not guaranteed.
- Links contain readable metadata, not audio. They do not include your Music Assistant instance URL or your service credentials.
- Anyone with the link can read its metadata, including the title, artist and public artwork and music-service URLs. Compression is not encryption.
- Loading artwork or opening music-service links contacts those external services.
- Earlier unversioned development links are not supported.
