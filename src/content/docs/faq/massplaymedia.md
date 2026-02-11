---
title: "MA play_media Action"
---

# MA play_media Action

This action allows you to finely select the media to play. Create your service call or automation via the HA GUI or YAML

You can use a name together with the media type

![image](/assets/screenshots/service-call/play1.png)

Or just a URI

![image](/assets/screenshots/service-call/play2.png)

Or the library id together with the media id

![image](/assets/screenshots/service-call/play3.png)

Or a track defined with the artist name, media type is recommended but optional

![image](/assets/screenshots/service-call/play4.png)

You can also have a list of items

![image](/assets/screenshots/service-call/play5.png)

Or a list of uris which can even be from different music providers

![image](/assets/screenshots/service-call/play6.png)

:::note
The regular `media_player.play_media` service call also accepts all of the above but it cannot take multiple items
:::

:::note
When adding multiple items they must be preceded by a hyphen as shown in the images above
:::

There are additional options as well. Enqueue will appear when an entity that supports it is selected.

![image](/assets/screenshots/service-call/play7.png)

:::caution[Radio Mode]
You can only use the album, artist, track or playlist media_type if enabling Radio Mode. Radio Mode can only be used if a provider is available which supports dynamic tracks (e.g Apple, Deezer, Spotify,  Subsonic, Tidal and YTM).
:::
