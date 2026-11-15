---
title: "Local Audio Out (retired)"
description: The Local Audio Out player provider has been retired in favour of the Local Audio app
---

# Local Audio Out <img src="/assets/icons/loudness-analysis-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

> [!CAUTION]
> **This provider has been retired.** It can no longer be added, and where one is already configured it fails to load with a notice pointing here. The only thing left to do with it is press **Remove** in its settings.

Playing to soundcards, USB DACs and built-in audio outputs on the machine Music Assistant runs on is now the job of the **Local Audio** app, which runs alongside Music Assistant rather than inside it.

## The Local Audio app

The app plays to the audio hardware of the machine it runs on and appears in Music Assistant as a [Sendspin](/player-support/sendspin/) player, found over mDNS on its own. There is no provider to add in Music Assistant.

- **On Home Assistant**, install **Local Audio** from the Music Assistant app repository, the same one Music Assistant itself comes from. Choose the output it plays through in the app's own **Audio** panel; nothing in its configuration picks an output.
- **Anywhere else**, run the container with Docker Compose. Both it and the app are built from <a href="https://github.com/music-assistant/local-audio-addon" target="_blank" rel="noopener noreferrer">music-assistant/local-audio-addon</a>, whose README covers the environment variables and how to name an ALSA output.

> [!NOTE]
> The app is experimental. It works, but it has not been through wide testing on real hardware.
