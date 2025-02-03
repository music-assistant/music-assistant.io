# MA get_library Action

This action allows you to retrieve the full details of the items from the library

![image](../assets/screenshots/service-call/get_library.png)

As can be seen there are a large number of filter options available.

The returned JSON is extensive. The [returned data can be used in templates](https://www.home-assistant.io/docs/scripts/perform-actions#use-templates-to-handle-response-data).

## Example

In this example a queue of 10 random tracks is created.

```
script:
  create_random_queue:
    mode: single
    sequence:
      - service: music_assistant.get_library
        data:
          limit: 10
          media_type: track
          config_entry_id: 01JEXNDHT21V0BHJXM7A5SZANV
          order_by: random
        response_variable: random_tracks
      - repeat:
          count: 10
          sequence:
            - action: music_assistant.play_media
              data:
                media_id: "{{ random_tracks['items'][repeat.index - 1].uri }}"
                media_type: track
                enqueue: add
              target:
                entity_id: media_player.ma_kitchen_speaker
```
