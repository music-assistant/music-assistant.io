---
title: "API"
---

# API <img src="/assets/icons/api-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant provides a powerful API to control your music library, manage players, and stream audio. Whether you're building a custom interface, integrating with home automation, or creating a music app, the API gives you complete control.

The API documentation is automatically generated and available at http://YOUR_MA_SERVER_IP:8095/api-docs


## Examples

<a href="https://github.com/orgs/music-assistant/discussions/4438" target="_blank" rel="noopener noreferrer">Play a random track from a playlist</a>

<a href="https://github.com/orgs/music-assistant/discussions/1240#discussioncomment-12396494" target="_blank" rel="noopener noreferrer">Save current queue as a playlist</a>

<details><summary>Get All Available Player Settings</summary>

```
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--data '{
  "message_id": "1",
  "command": "config/players/get",
  "args": {
    "player_id": "RINCON_48A6B820191201400"
  }
}'
```
```
rest_command:
  ma_get_player_settings:
    url: http://d5369777-music-assistant-beta:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
    payload: >
      {
        "message_id": "1",
        "command": "config/players/get",
        "args": {
          "player_id": "{{ player_id }}"
        }
      }
    content_type:  'application/json; charset=utf-8'
```

</details>

<details><summary>Set One or More Player Settings</summary>

```
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--data '{
  "message_id": "1",
  "command": "config/players/save",
  "args": {
    "player_id": "RINCON_48A6B820191201400",
    "values": {
        "airplay_mode": true
    }
  }
}'
```
```
rest_command:
  ma_set_player_settings:
    url: http://d5369777-music-assistant-beta:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
    payload: >
      {
        "message_id": "1",
        "command": "config/players/save",
        "args": {
          "player_id": "b8:27:eb:8a:b8:8e",
          "values": {
            "crossfade": true
          }
        }
      }
    content_type:  'application/json; charset=utf-8'
```

</details>

<details><summary>Add Item to Favorites</summary>

item needs to be a URI or share URL

```
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--data '{
  "message_id": "1",
  "command": "music/favorites/add_item",
  "args": {
    "item": "spotify://track/1234567"
  }
}'
```
</details>

<details><summary>Get Album Tracks</summary>

```
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--data '{
  "message_id": "1",
  "command": "music/albums/album_tracks",
  "args": {
    "item_id": "1",
    "provider_instance_id_or_domain": "library",
    "in_library_only": true
  }
}'
```
```
rest_command:
  ma_album_tracks:
    url: http://d5369777-music-assistant-beta:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
    payload: >
      {
        "message_id": "1",
        "command": "music/albums/album_tracks",
        "args": {
          "item_id": "{{ item_id }}",
          "provider_instance_id_or_domain": "{{ provider_instance_id_or_domain }}",
          "in_library_only": {{ in_library_only }}
        }
      }
    content_type:  'application/json; charset=utf-8'
```
</details>

<details><summary>Get Full Item Details (By Providing a URI)</summary>

```
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--data '{
  "message_id": "1",
  "command": "music/item_by_uri",
  "args": {
    "uri": "spotify://track/1234"
  }
}'
```
</details>

<details><summary>Get Recently Played Items</summary>

limit and media_types are optional
```
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--data '{
  "message_id": "1",
  "command": "music/recently_played_items",
  "args": {
    "limit": 10,
    "media_types": ["track", "album"]
  }
}'
```
</details>

<details><summary>Get In Progress Items (Audiobooks, Podcast Episodes)</summary>

Return a list of the Audiobooks and PodcastEpisodes that are in progress.
limit is optional
```
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--data '{
  "message_id": "1",
  "command": "music/in_progress_items",
  "args": {
    "limit": 10
  }
}'
```
</details>

<details><summary>Starting Sync</summary>

Start running the sync of (all or selected) musicproviders.
  media_types: only sync these media types. None for all.
  providers: only sync these provider instances. None for all.
```
curl --location 'http://192.168.1.1:8095/api' \
--header 'Content-Type: application/json' \
--data '{
  "message_id": "1",
  "command": "music/sync",
  "args": {
    "media_types": ["track", "album"],
    "providers": ["filesystem--1234"]
  }
}'
```
</details>

<details><summary>Refresh Playlist</summary>

```
rest_command:
  ma_refresh_playlist:
    url: http://localhost:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
    payload: >
      {
        "message_id": "1",
        "command": "music/playlists/playlist_tracks",
        "args": {
          "item_id": "1234",
          "provider_instance_or_domain": "builtin",
          "force_refresh": true
        }
      }
    content_type:  'application/json; charset=utf-8'
```
</details>


<details><summary>Change crossfade state of a player</summary>

player_id can be found at the top of the individual player settings

```
rest_command:
  ma_set_player_settings:
    url: http://localhost:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
    payload: >
      {
        "message_id": "1",
        "command": "config/players/save",
        "args": {
          "player_id": "b8:27:eb:8a:b8:8e",
          "values": {
            "crossfade": true
          }
        }
      }
    content_type:  'application/json; charset=utf-8'
```
</details>

<details><summary>Get all items in the queue</summary>

`queue_id` will be the same as the `player_id` unless the player is grouped. To confirm create a `rest_command` that calls `player_queues/all` and review the information returned. The `limit` defaults to 500 if you omit it. You are cautioned to not set a value greater then 500 to avoid breaking your system. The practical limit will depend on the resources available on your host. `offset` can also be omitted.

```
rest_command:
  ma_get_full_queue:
    url: http://localhost:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
    payload: >
      {
        "message_id": "1",
        "command": "player_queues/items",
        "args": {
          "queue_id": "b8:27:eb:8a:b8:8e",
          "limit": 500,
          "offset": 0
        }
      }
    content_type:  'application/json; charset=utf-8'
```
</details>
