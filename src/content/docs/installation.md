---
title: Installation
description: Installation guide for Music Assistant
---

# Installing the Server <img src="/assets/icons/installation-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant (in short: MA) is designed to be used side by side with Home Assistant and is built with automation in mind. The recommended installation method is to run the server as a Home assistant App and then optionally <a href="https://music-assistant.io/integration/installation/" target="_blank" rel="noopener noreferrer">add the HA integration</a>. There is also a docker option for those not using Home Assistant Operating System (HAOS).

## Home Assistant App

<img src="/assets/label-easiest.png" alt="easiest label" style="width: 128px;"  loading="lazy" />

This is only available when running the full version of Home Assistant, which includes the <a href="https://developers.home-assistant.io/docs/operating-system/" target="_blank" rel="noopener noreferrer">Home Assistant Operating System (HAOS)</a>. Due to its ease of use and full functionality, running the Home Assistant Operating System is the recommended way of running Home Assistant and Music Assistant.

The Music Assistant App repository is available in Home Assistant. Browse the App store within Home Assistant to install or click on the following button:

[![Add Music Assistant as an App to Home Assistant.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=d5369777_music_assistant&repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon)

A HAOS installation is fully supported by the MA team regardless of whether it runs on dedicated hardware or in a Virtual Machine (VM). The only other requirement is that the HA/MA host and all player devices must be on the same flat network with no VLANs.

## Docker image

<img src="/assets/label-expert.png" alt="expert label" style="width: 128px;"  loading="lazy" />

An alternative way to run the Music Assistant server is by running the docker image:

```
docker run -v <dir>:/data --network host ghcr.io/music-assistant/server
```

You must run the docker container with **host network mode** (see the note on networking below). The data volume is `/data` - replace `<dir>` with a writable directory to ensure the data volume persists between updates. If you want access to your local music files from within MA, make sure to also mount that local directory, e.g. `/media` (mount it read-only where possible).

The recommended setup keeps the container as restricted as possible. The extra privileges (`SYS_ADMIN`, `DAC_READ_SEARCH` and `apparmor:unconfined`) shown further down are **only** needed if you want MA to mount a remote (Samba/NFS) share itself from inside the container. For most users, mounting music on the host and bind-mounting it into the container is the more secure choice.

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
      # Optional: expose local music to MA by bind-mounting it read-only
      - /path/to/your/music:/media:ro
    environment:
      # Provide logging level as environment variable.
      # default=info, possible=(critical, error, warning, info, debug)
      - LOG_LEVEL=info

```

The desired release version can be found on <a href="https://github.com/music-assistant/server/pkgs/container/server" target="_blank" rel="noopener noreferrer">the container image releases page</a>

### Advanced: mounting SMB/network shares inside the container

Music Assistant can mount a remote (Samba/NFS) share itself using the SMB File provider. Doing this **from inside the container** requires the container to be granted broad privileges: the `SYS_ADMIN` and `DAC_READ_SEARCH` capabilities and `apparmor:unconfined`. These significantly reduce container isolation and make a container escape more damaging if MA or one of its dependencies is ever compromised, so only add them if you actually need in-container mounting.

The more secure alternative is to **mount the share on the host** (e.g. via `/etc/fstab` or your NAS tooling) and bind-mount that path into the container read-only, exactly like a local music folder:

```
    volumes:
      - /mnt/nas/music:/media:ro
```

If you do need MA to mount the share itself, add the privileges to the recommended compose file above:

```
    # WARNING: only needed to mount SMB/NFS shares from inside the container.
    # These reduce container isolation - prefer host-mounting the share instead.
    cap_add:
      - SYS_ADMIN
      - DAC_READ_SEARCH
    security_opt:
      - apparmor:unconfined
```

### A note on host networking

`network_mode: host` gives the container direct (layer 2) access to your network. Music Assistant relies on this for local player discovery (mDNS/uPnP) and for streaming to and interacting with networked audio devices (AirPlay, Chromecast, DLNA, Sonos), which open random TCP/UDP ports. This is why host networking (or macvlan) is a supported requirement - see the support notes below.

If you do not use any local/networked players and only stream to software players, you can instead run the container on a normal bridge network with explicit port mappings, for example the web UI on `8095` and the stream server on `8097`:

```
    ports:
      - "8095:8095"
      - "8097:8097"
```

Be aware of the trade-off: on a bridge network, player discovery and any players that need direct network access (AirPlay, Chromecast, DLNA, Sonos, and similar) will not work, and this configuration is not supported by the MA team.

### AirPlay 2 multi-room synchronization

Native AirPlay 2 groups use Precision Time Protocol (PTP) for accurate synchronization. Music Assistant must be able to bind UDP ports `319` and `320` in its network namespace.

The official Music Assistant container image runs as root, so no extra permissions are required. If you run a custom container as a non-root user, grant it the `NET_BIND_SERVICE` capability:

```
    cap_add:
      - NET_BIND_SERVICE
```

For `docker run`, use `--cap-add NET_BIND_SERVICE`. The ports must also be free in the container's network namespace. With `network_mode: host`, this means they must be free on the host; with macvlan, they only need to be free in the Music Assistant container. Do not add Docker `ports` mappings for UDP `319` or `320`: publishing them does not grant bind permission or resolve a conflict, and they are not incoming Music Assistant service ports.

If either port cannot be bound, AirPlay playback continues using less precise Network Time Protocol (NTP) timing, but native AirPlay 2 groups may drift out of sync. Check the server logs, container capability, and port usage if this happens.

The MA team will support docker installs that are installed per the above instructions. For clarity, to receive support from the MA team:

- The docker install must be a simple standalone container (e.g. not using kubernetes)
- MA, HA and all players must be on the same flat network (or VLAN)
- Music Assistant needs direct (layer 2) access to the network to properly discover and stream to players. So either host networking or macvlan networking is a mandatory requirement for the docker container

Everything else is considered unsupported. We have the right to close support requests if you're running an unsupported installation or we may ask you to try to reproduce the issue on one of our supported installation types.

If you run into any issues when using a docker install vs the recommended/standard Home Assistant App, you may try to simply run Home Assistant OS on a VM on your computer or a spare RPi and see if you can reproduce the issue with that setup.

---
## Server Notes

- MA requires a 64bit Operating System and the following minimum hardware:
    - Recent 64 bit Intel CPU (max 10 years old, although 15 years may still work)
    - Recent AMD CPU (max 5 years old, although 10 years old may still work)
    - Single Board Computer: Raspberry Pi 4 or newer, or equivalent 
    - Other aarch64 based CPU, supported by Home Assistant (e.g. Rockchip)
    - a MINIMUM of 2GB of RAM on the physical device or the container (physical devices/containers are recommended to have 4GB+ if they are running anything else)

- If MA won't start and the CPU is outside the maximum age listed above then it is not supported

- The [Smart Fades](/smart-fades/#performance-notes) feature is resource intensive and requires at least 4GB or RAM and will not be enabled automatically on single core installations

- Because the server heavily relies on multicast techniques like mDNS and uPnP to discover players on the network it MUST be run in the same Layer 2 network as the player devices

- The server itself hosts a webserver to stream audio to devices. This webinterface must be accessible via HTTP by IP-address from local players. See the server's logging at startup to see if the server has correctly auto-detected the local IP

- The webinterface of the server can be reached on TCP port 8095. For HAOS based installations, the webserver is also available via Ingress which allows for an easy to configure sidepanel shortcut

- To access the frontend behind a reverse proxy, the reverse proxy will have to be configured to point at port 8095 and expose it to whatever is desired (and add an SSL certificate). How that works differs for each implemention.

## Usage and Notes

- If Music Assistant in running in a separate docker container, the webinterface needs to be accessed at `http://YOUR_MA_IP_ADDRESS:8095`. The port can be changed in the MA settings. If something else is using port 8095 then that must be shutdown until the MA port is changed
- No music sources are installed initially. These must be added by navigating to the MA settings and then adding each provider individually that are desired
- The AirPlay, Chromecast, DLNA, Sendspin, and Sonos player providers are added automatically on initial install. Other than Sendspin, if you do not have any players which support those protocols then they can be deleted
- Music from the music sources will be automatically loaded into the [Music Assistant library](/usage/#the-library). If there are multiple sources, they will be merged as one library
- The Music Assistant UI centres around the concept of the [Library](/usage/#the-library), so the artists, albums, tracks, playlists, audiobooks, podcasts and radio stations that you are most interested in. It is possible to BROWSE or SEARCH the various providers to add aditional items to the Library
- Note that at the first startup it can take a while before data is available (first sync), the Music Assistant UI will indicate tasks that are in progress. This can be seen by this symbol ![icon](/assets/icons/sync-icon.png) next to the music source entry in the MA settings
- Music sources are synced at regular intervals (which can be changed in the settings)
- MA is designed to work on a Raspberry Pi (4+) which is also running Home Assistant. For this reason it does not make large demands on resources. Additionally, there are limits on the free API calls used for artwork and other metadata. The result of this is that initial syncs of large libraries can take a long time. Subsequent syncs should be noticeably faster
- If a song is [linked across multiple providers](/ui/#provider-details) (e.g. Spotify and a FLAC file on disk), the file/stream with the highest quality is always preferred when starting a stream. Highest quality is based on sample rate, bit depth and codec and local is always preferred over cloud if the quality is equal.

- Music Assistant uses a custom stream port (TCP 8097 by default) to stream audio to players. Players must be able to reach the Home Assistant instance and this port. If you're running one of the recommended HAOS installation methods, this is all handled for you, otherwise you will have to make sure you're running MA in a container with HOST network mode (see the networking note in the Docker section above). Note: If the default port 8097 is occupied, the next port will be tried, and so on
- Any restriction of the available ports (e.g. trying to run MA through a firewall) is not supported as protocols such as AirPlay open random TCP and/or UDP ports
- Attempting to create or manipulate a playlist or queue with more than a thousand items can cause unresponsivness or high resource usage depending on the resources of the host

[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmusic-assistant%2Fhome-assistant-addon
