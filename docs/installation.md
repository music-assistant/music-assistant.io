---
title: Installation
description: Installation guide for Music Assistant
---

# Installing the Server

Music Assistant (in short: MA) is designed to be used side by side with Home Assistant and is built with automation in mind. The recommended installation method is to run the server as a Home assistant Add-on and then optionally [add the HA integration](https://music-assistant.io/integration/installation/). There is also a docker option for those not using Home Assistant Operating System (HAOS).

## Home Assistant Add-on

![easiest label](assets/label-easiest.png)

This is only available when running The full version of Home Assistant, which includes the [Home Assistant Operation System (HAOS)](https://developers.home-assistant.io/docs/operating-system/). Due to its ease of use and full functionality, running the Home Assistant operating System is our recommended way of running Home Assistant and Music Assistant.

The Music Assistant add-on repository is available in Home Assistant. Browse the addon store within Home Assistant to install or click on the following button:

[![Add Music Assistant as an Add-on to Home Assistant.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=d5369777_music_assistant&repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon)

A HAOS installation is fully supported by the MA team regardless of whether it runs on dedicated hardware or in a Virtual Machine (VM). The only other requirement is that the HA/MA host and all player devices must be on the same flat network with no VLANs.

## Docker image

![expert label](assets/label-expert.png)

An alternative way to run the Music Assistant server is by running the docker image:

```
docker run -v <dir>:/data --network host --cap-add=DAC_READ_SEARCH --cap-add=SYS_ADMIN --security-opt apparmor:unconfined ghcr.io/music-assistant/server
```

You must run the docker container with **host network mode**. The data volume is `/data` - replace `<dir>` with a writable directory to ensure the data volume persists between updates. If you want access to your local music files from within MA, make sure to also mount that local directory, e.g. /media.

Note that accessing remote (SMB) shares is done from within MA by using the SMB File provider.
The additional privileges are only required if you want to use a remote (Samba/NFS) share within Music Assistant.

**Docker compose:**

```
services:
  music-assistant-server:
    image: ghcr.io/music-assistant/server:latest # <<< Desired release version here (or use beta to get the latest beta version)
    container_name: music-assistant-server
    restart: unless-stopped
    # Network mode must be set to host for MA to work correctly
    network_mode: host
    volumes:
      - ${USERDIR:-$HOME}/docker/music-assistant-server/data:/data/
    # privileged caps (and security-opt) needed to mount smb folders within the container
    cap_add:
      - SYS_ADMIN
      - DAC_READ_SEARCH
    security_opt:
      - apparmor:unconfined
    environment:
      # Provide logging level as environment variable.
      # default=info, possible=(critical, error, warning, info, debug)
      - LOG_LEVEL=info

```

The MA team will support docker installs that are installed per the above instructions. For clarity, to receive support from the MA team:

- The docker install must be a simple standalone container (e.g. not using kubernetes)
- MA, HA and all players must be on the same flat network with no VLANs
- Music Assistant needs direct (layer 2) access to the network to properly discover and stream to players. So either host networking or macvlan networking is a mandatory requirement for the docker container

Everything else is considered unsupported. We have the right to close support requests if you're running an unsupported installation or we may ask you to try to reproduce the issue on one of our supported installation types.

If you may run into any issues when using a docker install vs the recommended/standard Home Assistant add-on, you may try to simply run Home Assistant OS on a VM on your computer or a spare RPi and see if you can reproduce the issue with that setup.

---

## Server Notes

- MA requires a 64bit Operating System and a minimum of 2GB of RAM on the physical device or the container (physical devices are recommended to have 4GB+ if they are running anything else)

- Because the server heavily relies on multicast techniques like mDNS and uPnP to discover players in your network it MUST be run in the same Layer 2 network as your player devices.

- The server itself hosts a webserver to stream audio to devices. This webinterface must be accessible via HTTP by IP-address from local players. See the server's logging at startup to see if the server has correctly auto-detected the local IP.

- The webinterface of the server can be reached on TCP port 8095 if enabled in the settings. By default, on HAOS based installations, the webserver is internal only and not exposed to the outside world. It is protected by HA authentication using the Ingress feature of Home Assistant (you also get the sidepanel shortcut for free!)

- You can access the frontend over https by following these steps:

  1. Expose the webserver via MA settings>>Core>>webserver

  2. To access the frontend behind a reverse proxy you will have to configure the reverse proxy to point at the 8095 port and expose it to whatever is desired (and add an ssl certificate). How that works differs for each implemention.

!!! tip
You can keep the server more secure by NOT exposing the webserver and let the addon talk directly to the webserver on the internal docker network. In that case the internal dns name of the addon would be, for example, `http://YOUR_HA_IP_ADDRESS:8123/d5369777_music_assistant`

## Usage and Notes

- When running the Home Assistant add-on, you can access the webinterface from the add-on (a shortcut can be added to the sidebar) which is more secure than via the port (although the port can be exposed (but not changed) in the settings)

- If you are running Music Assistant in docker, you need to access the webinterface at `http://YOUR_MA_IP_ADDRESS:8095`. The port can be changed in the MA settings. If something else is using port 8095 then that must be shutdown until the MA port is changed

- No providers are installed initially. You must navigate to the MA settings and add the providers (Music and Players) that you use

- Music from your music sources will be automatically loaded into the Music Assistant library. If you have multiple sources, they will be merged as one library

- This first implementation of the Music Assistant UI centres around the concept of the [Library](usage.md), so your artists, albums, tracks, playlists and radio stations. You can BROWSE the various providers to add aditional items to your Library. In a later release options will be provided to browse the recommendations of the various streaming providers

- Note that at the first startup it can take a while before data is available (first sync), the Music Assistant UI will notify you about tasks that are in progress. This can be seen by this symbol ![icon](assets/icons/sync-icon.png) next to the Music Provider entry in MA settings

- Music sources are synced at addon (re)start and at regular intervals (which can be selected in the settings).

- MA is designed to work on a Raspberry Pi (4+) which is also running Home Assistant. For this reason it does not make large demands on resources. Additionally, there are limits on the free API calls used for artwork and other metadata. The result of this is that initial syncs of large libraries can take a long time. Subsequent syncs should be noticeably faster

- If a song is available on multiple providers (e.g. Spotify and a flac file on disk), the file/stream with the highest quality is always preferred when starting a stream. Highest quality is based on sample rate, bit depth and codec and local is always preferred over cloud if the quality is equal.

- Music Assistant uses a custom stream port (TCP 8097 by default) to stream audio to players. Players must be able to reach the Home Assistant instance and this port. If you're running one of the recommended HAOS installation methods, this is all handled for you, otherwise you will have to make sure you're running MA in a container with HOST network mode and with the privileges shown in the example docker compose above. Note: If the default port 8097 is occupied, the next port will be tried, and so on
- Any restriction of the available ports (e.g. trying to run MA through a firewall) is not supported as protocols like airplay open random tcp and/or udp ports

[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon
