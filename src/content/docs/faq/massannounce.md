---
title: "Play Announcement Action"
---

# MA play_announcement Action

This action allows you to send audio announcements via a URL to a player. The URL could be accessed in a variety of ways. For example:

- External such as `https://www.soundjay.com/door/doorbell-5.mp3` 
- Using <a href="https://www.home-assistant.io/integrations/http/#hosting-files" target="_blank" rel="noopener noreferrer">Home Assistant</a> you can add the sound files under your `www` folder and access them like this `http://192.168.1.165:8123/local/audio/Apartment-door-chime-melody.mp3`
- You could <a href="https://www.instructables.com/Set-up-your-very-own-Web-server/" target="_blank" rel="noopener noreferrer">run your own webserver</a>

![image](/assets/screenshots/service-call/play_announcement.png)

> [!NOTE]
> For sending text messages use the HA TTS service calls and target the MA media player entity. There are a number of options available to control the volume of announcements in the MA settings for each player.
```
service: tts.google_say
  data:
    entity_id: media_player.ma_kitchen_speaker
    message: This is a test
```
