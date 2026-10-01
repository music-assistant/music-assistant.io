---
title: Installation
description: Installation guide for Music Assistant
---

# Installing the Server <img src="/assets/icons/installation-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant (in short: MA) is designed to be used side by side with Home Assistant and is built with automation in mind. The recommended installation method is to run the server as a Home assistant App and then optionally <a href="https://music-assistant.io/integration/installation/" target="_blank" rel="noopener noreferrer">add the HA integration</a>. There is also a docker option for those not using Home Assistant Operating System (HAOS).

## Before you start

Music Assistant has to run somewhere always on, and it has to sit on the right kind of network. Both of these decide whether it will work at all, so check them before choosing an installation method.

**Your network.** The server discovers and streams to players using multicast (mDNS and uPnP), so it **must be on the same layer 2 network as your players**, with no VLANs between them. See [Networking Basics](/faq/networking/) for what these terms mean. This is the single most common cause of support requests, and no installation method can work around it.

**Your hardware.** MA requires a 64 bit operating system and:

- Recent 64 bit Intel CPU (max 10 years old, although 15 years may still work)
- Recent AMD CPU (max 5 years old, although 10 years old may still work)
- Single Board Computer: Raspberry Pi 4 or newer, or equivalent
- Other aarch64 based CPU, supported by Home Assistant (e.g. Rockchip)
- a MINIMUM of 2GB of RAM on the physical device or the container (physical devices/containers are recommended to have 4GB+ if they are running anything else)

If MA won't start and the CPU is outside the maximum age listed above then it is not supported.

What the hardware can cope with also sets some practical limits. The [Smart Fades](/audio-analysis/smart-fades/#performance-notes) feature is resource intensive, requires at least 4GB of RAM, and is not enabled automatically on single core installations. Creating or manipulating a playlist or queue with more than a thousand items can cause unresponsiveness or high resource usage; a Raspberry Pi 4 will manage far less than an i7.

## Home Assistant App

<img src="/assets/label-easiest.png" alt="easiest label" style="width: 128px;"  loading="lazy" />

This is only available when running the full version of Home Assistant, which includes the <a href="https://developers.home-assistant.io/docs/operating-system/" target="_blank" rel="noopener noreferrer">Home Assistant Operating System (HAOS)</a>. Due to its ease of use and full functionality, running the Home Assistant Operating System is the recommended way of running Home Assistant and Music Assistant.

The Music Assistant App repository is available in Home Assistant. Browse the App store within Home Assistant to install or click on the following button:

[![Add Music Assistant as an App to Home Assistant.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=d5369777_music_assistant&repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon)

A HAOS installation is fully supported by the MA team regardless of whether it runs on dedicated hardware or in a Virtual Machine (VM). The only other requirement is that the HA/MA host and all player devices must be on the same [flat network](/faq/networking/#the-jargon-translated) with no VLANs.

## Docker image

<img src="/assets/label-expert.png" alt="expert label" style="width: 128px;"  loading="lazy" />

An alternative way to run the Music Assistant server is by running the docker image:

```
docker run -v <dir>:/data --network host ghcr.io/music-assistant/server
```

You must run the docker container with **host network mode** (see the note on networking below). The data volume is `/data` - replace `<dir>` with a writable directory to ensure the data volume persists between updates. To use your own music files, map their folder into the container as well, read-only where possible. See [Your music files](#your-music-files).

The recommended setup keeps the container as restricted as possible. It needs no extra privileges, not even for music on a NAS.

> [!WARNING]
> Do not attempt to switch from the stable to beta channels (or vica versa) by simply changing the version tag on the image. Similarly, do not attempt to move or copy the database between beta and stable instances (or vica versa). It is possible to [run parallel server versions](/release/#running-parallel-server-versions)
  
**Docker compose (recommended):**

```
services:
  music-assistant-server:
    image: ghcr.io/music-assistant/server:latest # <<< Desired release version here (or use beta to get the latest beta version)
    container_name: music-assistant-server
    restart: unless-stopped
    # Network mode must be set to host for MA to discover and stream to players (see networking note below)
    network_mode: host
    volumes:
      - ${USERDIR:-$HOME}/docker/music-assistant-server/data:/data/
      # Optional: make a music folder available to MA, read-only where possible
      - /path/to/your/music:/media/music:ro
    environment:
      # Provide logging level as environment variable.
      # default=info, possible=(critical, error, warning, info, debug)
      - LOG_LEVEL=info

```

The desired release version can be found on <a href="https://github.com/music-assistant/server/pkgs/container/server" target="_blank" rel="noopener noreferrer">the container image releases page</a>

### Running without host networking

`network_mode: host` gives the container direct (layer 2) access to your network. Music Assistant relies on this for local player discovery (mDNS/uPnP, [explained in Networking Basics](/faq/networking/)) and for streaming to and interacting with networked audio devices (AirPlay, Chromecast, DLNA, Sonos), which open random TCP/UDP ports. This is why host networking (or macvlan) is a supported requirement - see the support notes below.

If you do not use any local/networked players and only stream to software players, you can instead run the container on a normal bridge network with explicit port mappings, for example the web UI on `8095` and the stream server on `8097`:

```
    ports:
      - "8095:8095"
      - "8097:8097"
```

Be aware of the trade-off: on a bridge network, player discovery and any players that need direct network access (AirPlay, Chromecast, DLNA, Sonos, and similar) will not work, and this configuration is not supported by the MA team.

## Your music files

A [Local files](/music-providers/local-files/) source reads music from a folder in one of the storage locations Music Assistant can see. How a folder or a NAS becomes a storage location depends on the installation. [Storage](/settings/storage/) has the details.

### With the Home Assistant App

Put your music in the Home Assistant media folder, or add the network share of your NAS in Music Assistant under **Settings → Storage** with **Add network share**. Home Assistant connects the share, and it shows up as a storage location. A network share added in Home Assistant under **Settings → System → Storage** with the usage **Media** shows up as well.

### With Docker

Every folder you map into the container is found automatically and becomes a storage location. Map each music folder to a folder under `/media`, read-only where possible.

For music on a NAS, the recommended way is to **mount the share on the host**, for example through `/etc/fstab` or your NAS tooling, and map that folder into the container like any other music folder:

```
    volumes:
      - /mnt/nas/music:/media/music:ro
```

### Mounting shares from inside the container

Use this only as a last resort. Music Assistant can connect a network share itself, with **Add network share** on the Storage page, but inside a container that needs broad privileges: the `SYS_ADMIN` and `DAC_READ_SEARCH` capabilities and `apparmor:unconfined`. These weaken the isolation between the container and the host, so a flaw in MA or one of its dependencies could do more damage. Without them, the Storage page explains that this installation cannot connect network shares.

If mounting on the host is not an option, add the privileges to the recommended compose file above:

```
    # WARNING: only needed when MA mounts network shares itself.
    # These weaken the container's isolation. Prefer mounting the share on the host.
    cap_add:
      - SYS_ADMIN
      - DAC_READ_SEARCH
    security_opt:
      - apparmor:unconfined
```

## Supported installations

The MA team is small. To keep support workable we can only help with the installations below, and we may close a support request or ask you to reproduce the problem on a supported setup.

- **Home Assistant App on HAOS.** Fully supported, on dedicated hardware or in a VM.
- **A simple standalone docker container**, installed as described above. Not Kubernetes, not a stack of orchestration.

In either case:

- MA, HA and all players must be on the same flat network (or VLAN)
- Music Assistant needs direct (layer 2) access to the network to properly discover and stream to players, so either host networking or macvlan networking is a mandatory requirement for the docker container
- Any restriction of the available ports, such as running MA behind a [firewall](/faq/networking/#the-jargon-translated), is not supported, because protocols like AirPlay open random TCP and UDP ports

Everything else is unsupported. If you run into a problem on a docker install, try running Home Assistant OS in a VM or on a spare RPi and see whether it happens there too.

## After installation

**Reaching the web interface.** The server hosts its own web interface on TCP port **8095**. On a docker install, open `http://YOUR_MA_IP_ADDRESS:8095`; if something else already uses 8095, free it up or change the port in the MA settings. On HAOS the interface is also available via Ingress, which gives you a sidebar shortcut.

To put the frontend behind a [reverse proxy](/faq/networking/#the-jargon-translated), point the proxy at port 8095 and add an SSL certificate. How that works differs for each implementation.

**Streaming to players.** MA streams audio over a separate port, TCP **8097** by default, and players must be able to reach the server on it. If 8097 is occupied the next port is tried, and so on. The server also needs players to reach its web interface by IP address over HTTP — check the server log at startup to confirm it detected the right local IP.

**Adding your music.** No music sources are installed initially. Add [each one you want](/faq/listen-to/) from the MA settings.

**Your players.** The AirPlay, Chromecast, DLNA, Sendspin and Sonos player providers are added automatically on first install, and all except Sendspin can be deleted if you have no players using those protocols. If the players you own are not covered by those, see [what you can stream to](/faq/stream-to/).

**The first sync.** Music from your sources loads into the [Music Assistant library](/usage/#the-library) automatically, and multiple sources are merged into one library. The first sync can take a while; the UI shows a ![icon](/assets/icons/sync-icon.png) beside a source in the settings while it is working. Sources re-sync at regular intervals, which you can change in the settings.

MA is designed to run on a Raspberry Pi 4 alongside Home Assistant, so it does not make heavy demands. There are also limits on the free API calls used for artwork and metadata. Between them, an initial sync of a large library can take a long time; later syncs are noticeably faster.

[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon
