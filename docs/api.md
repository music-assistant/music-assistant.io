---
title: "REST API"
---

Actions that are provided by the [HA Integration](integration/index.md) address the common tasks that most users require. However, Music Assistant (MA) provides a RESTful API which allows for complete control of the server from external locations. This API is on the same port as the web frontend (default port is port 8095). 

- `http://IP_ADDRESS:8095/` is an interface to control Music Assistant.
- `http://IP_ADDRESS:8095/api/` is a RESTful API.

The API accepts and returns only JSON encoded objects.

There are multiple ways to consume the Music Assistant Rest API. One is with `curl`:

```shell
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

Another option is to use the [RESTful Command integration](https://www.home-assistant.io/integrations/rest_command/) in a Home Assistant automation or script.

```yaml
rest_command:
  ma_recently_played:
    url: http://localhost:8095/api
    method: POST
    headers:
      accept: "application/json, text/html"
    payload: >
      {
        "message_id": "1",
        "command": "music/recently_played_items",
        "args": {
          "limit": 10,
          "media_types": ["track", "album"]
        }
      }
    content_type:  'application/json; charset=utf-8' 
```

Successful calls will return status code 200 or 201. Other status codes that can return are:

- 400 (Bad Request)
- 401 (Unauthorized)
- 404 (Not Found)
- 405 (Method Not Allowed)

## API Commands

<details><summary>General Commands</summary>
  
### Commands

| Command                            | Arguments                            |Description                          |
| ---------------------------------- | ------------------------------------ |------------------------------------ |
| info                               | Nil                    | Return Info of this server |
| providers/manifests                | Nil                    | Return all Provider manifests |
| providers/manifests/get            | domain                 | Return Provider manifests of single provider(domain) |
| providers                          | provider_type*         | Return all loaded/running Providers (instances), optionally filtered by ProviderType (all if omitted) |
| logging/get                        | Nil                    | Return the application log from file |

Optional arguments are indicated by an asterisk.

### Arguments
  
Argument types are as follows

| Argument        | Type            | Example           |Valid Options |
| --------------- | ----------------|------------------ |------------------ |
| domain          | string          | ?????             |     |
| provider_type   | string???       | ???????????       |

</details>

<details><summary>Config Commands</summary>

</details>

<details><summary>Music Commands</summary>

### Commands

| Command         | Arguments                            |Description                          |
| --------------- | ------------------------------------ |------------------------------------ |
| music/sync      | media_types*<br>providers* |Start running the sync of (all or selected) musicproviders. If media_types or providers is omitted then all will be synced |
| music/synctasks | None |Return list of providers that are currently (scheduled for) syncing |
| music/search    | search_query<br>media_types*<br>limit*<br>library_only*  |Perform global search for media items on all providers. limit (per type) defaults to 25 if omitted. library_only defaults to false if omitted |
| music/browse    | path  |Browse a path of a Music provider  |
| music/recently_played_items| media_types*<br>limit* | Return a list of the last played items. limit defaults to 10 if omitted.  |
| music/in_progress_items    | media_types*<br>limit* |Return a list of the Audiobooks and Podcast Episodes that are in progress. limit defaults to 10 if omitted  |
| music/item_by_uri          | uri                                                     |Fetch MediaItem by uri |
| music/item                 | media_type<br>item_id<br>provider_instance_id_or_domain |Get single music item by id and media type.  |
| music/get_library_item     | media_type<br>item_id<br>provider_instance_id_or_domain |Get single library music item by id and media type  |
| music/favorites/add_item   | item |Add an item to the favorites  |
| music/favorites/remove_item| media_types<br>library_item |Remove (library) item from the favorites  |
| music/library/remove_item  | media_type<br>library_item_id |Remove item from the library. DESTRUCTIVE! Will remove the item and all dependants  |
| music/library/add_item     | item | Add item (uri or mediaitem) to the library |
| music/refresh_item         | media_item |Try to refresh a media item by requesting it's full object or search for substitutes  |
| music/mark_played          | media_item<br>fully_played*<br>seconds_played |Mark item as played in playlog. fully_played defaults to true if omitted  |
| music/mark_unplayed        | media_item |Mark item as unplayed in playlog |

Optional arguments are indicated by an asterisk. In all cases if media_type is optional then omitting it will return all types.

### Arguments

Argument types are as follows

| Argument        | Type            | Example           |Valid Options |
| --------------- | ----------------|------------------ |------------------ |
| media_type      | string          |artist             |track, artist, album, playlist, radio, audiobook, podcast, folder|
| media_types     | list of strings |["track", "album"] |track, artist, album, playlist, radio, audiobook, podcast, folder|
| providers       | list of strings |["spotify--XGURxcPP", "filesystem--1234"] |
| search_query    | string          |Queen |
| limit           | int             |10 |
| library_only    | boolean         |true |
| path            | string          |filesystem_smb--5iJ4npRi://folder/ABBA |
| uri             | string          |library://track/3205 |
| item_id         | string          |???????? |
| provider_instance_id_or_domain| string          |library|library, builtin |
| item            | string          |library://track/3205 | Any library or external URI
| library_item    | string          |library://track/3205 | Any library URI
| library_item_id | string          |library://track/3205 | Any library URI
| media_item      | string          | artist | track, artist, album, playlist, radio, audiobook, podcast
| fully_played    | boolean         | true | 
| seconds_played  | int             | 10 | 

</details>

<details><summary>Player Commands</summary>

</details>

<details><summary>Player Queues Commands</summary>

</details>

<details><summary>Metadata Commands</summary>

### Commands

| Command                                 | Arguments                            |Description                          |
| --------------------------------------- | ------------------------------------ |------------------------------------ |
| metadata/set_default_preferred_language | lang | Set the (default) preferred language. |
| metadata/update_metadata                | item<br>force_refresh* | Get/update extra/enhanced metadata for/on given MediaItem. force_refresh defaults to false if omitted |

Optional arguments are indicated by an asterisk.

### Arguments

Argument types are as follows

| Argument        | Type            | Example           |Valid Options |
| --------------- | ----------------|------------------ |------------------ |
| lang            | string          | en_AU             | Must be a valid locale identifier that has been configured in Music Assistant|
| item            | string          | ???????????       |
| force_refresh   | boolean         | true              | 

</details>

## Examples

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
          "player_id": "{{ player_id }}",
          "values": {{ values|to_json }}
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
