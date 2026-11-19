---
title: "System"
---

# System <img src="/assets/icons/settings-core-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

**Settings → System** holds the settings of the server itself, on the pages **Network**, **Storage**, **Home Assistant**, **Background tasks** and **Diagnostics**. Only administrators see it. The settings start out with values that work for most users.

A page with settings shows them in an **Options** card. Some settings only show when the **Show advanced settings** toggle in the card's header is on, and the toggle is remembered for your user. There may be slight differences in the settings between the Home Assistant App and docker versions of the servers.

## Network

This page sets how Music Assistant is reached on your network. At the top, **Remote Access** shows whether [remote access](/settings/remote-access/) is on and opens its page.

### Music Assistant URL

This card sets the addresses Music Assistant shares with devices and guests. It is always shown, whether or not advanced settings are on. Each switch can be changed back at any time, and what you typed is kept while the page is open.

- <b>Internet.</b> The address used from outside your local network, for links shared with guests such as party and quiz QR codes and, when it uses HTTPS, for casting dashboards. With [remote access](/settings/remote-access/) on, administrators see a **Use remote access** switch. When it is on, guests' links open through remote access, and the card shows that link with a button to copy it. Switch it off to enter an **External URL**, for example the address of your reverse proxy. A set External URL always takes priority over remote access. When remote access is off, the card offers **Set up remote access**. Leave the External URL empty if your server isn't reachable from the internet
- <b>Local network.</b> The address shared with devices and apps on your local network. **Automatic** is on by default and shows the address Music Assistant detected, with a button to copy it. Leave it on unless you have a reason not to. Switch it off to enter an **Internal URL** when the detected address does not work for your devices, for example behind a reverse proxy, with a custom hostname or on a server connected to more than one network. Enter the full address including the port, such as `https://music.example.com:443`. The TCP Port setting below is separate and still applies, as it's the port Music Assistant itself listens on, which behind a proxy is usually not the port in your Internal URL

### Options

The **Options** card holds the rest of the network settings, in three sections.

#### Web interface and API

- <b>Server name.</b> The name of this Music Assistant instance, shown in the UI and announced on the network. Useful when you run more than one server. Clear the field to restore the default name

The settings below are advanced and only appear when advanced settings are enabled in the UI

- <b>TCP Port.</b> The port the webserver runs on (default `8095`). If you change it, and you set the Internal URL manually, change the port there as well
- <b>Enable SSL/TLS.</b> Serves the web UI and API over HTTPS. When enabled, two additional fields are revealed for the `SSL Certificate` and `SSL Private Key`. Both must be PEM format, and you can either paste the file contents or enter an absolute path (e.g. `/ssl/fullchain.pem`). RSA and ECDSA are both supported and the private key must be unencrypted. Use the `Verify SSL Certificate` button to check the certificate and key are valid and match. If the certificate can't be loaded, the webserver keeps running unencrypted and shows a warning
- <b>Bind to IP/interface.</b> Start the webserver on this specific interface. The default `0.0.0.0` binds to all interfaces (IPv4 and IPv6). Change this only in setups such as binding to a docker-internal network behind a reverse proxy

#### Audio streaming

These settings are only visible when the advanced toggle is on. They will not need to be adjusted in the majority of cases, but users with complicated network setups will find them useful. If MA appears to be set up correctly but no playback occurs, check them.

- The <b>Published IP address</b> and <b>TCP Port</b> are normally populated automatically and set to `auto`. This is the address Music Assistant advertises to stream clients (including [Sendspin](/player-support/sendspin/)) as the place to connect to for audio. It must be a literal IP address reachable by players on your local network, not a hostname, domain name, or URL. If there are issues with playback, confirm the IP address shown is reachable by the players on the local network. The port must be available.
- <b>Bind to IP/interface.</b> Use in complex network setups to start the streamserver on a specific interface

#### Discovery

- <b>Allow network scan for UPnP discovery.</b> When enabled, MA uses an additional broadcast based discovery method ([SSDP](/faq/networking/#the-jargon-translated)). Turn this on if some UPnP/DLNA players are not being found by regular discovery (see the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered))
- <b>Mdns/Zeroconf discovery interface(s).</b> Options are `Default interface [default]` and `All interfaces`. Used in custom network setups when multiple network interfaces are used. A change takes effect after restarting Music Assistant. Setting is only visible when the advanced toggle is on

## Storage

This opens the [Storage](/settings/storage/) page, which lists the folders, drives and network shares that [Local files](/music-providers/local-files/) sources can use. Only administrators see it.

## Home Assistant

This page connects Music Assistant to Home Assistant through the [Home Assistant plugin](/ha-plugin/), and shows what the connection brings. Until it is connected, the page offers **Connect**. Once it is connected, it has these rows:

- <b>Connection.</b> Whether it is connected. Opens the settings of the connection, where it can be reconfigured, disabled or removed. When Music Assistant runs as a Home Assistant App, the app makes the connection by itself
- <b>Home Assistant players.</b> How many players [Home Assistant Media Players](/player-support/home-assistant/) brings, or **Add** to set it up
- <b>AI from Home Assistant.</b> What Home Assistant provides to the AI features, such as `1 text · 2 speech`, or **None**. Opens [Settings → AI](/settings/ai/). Only while Home Assistant is connected
- <b>Sign in with Home Assistant.</b> Opens [User management](/settings/user-management/#account-access), where users can be allowed to create their own account by signing in with Home Assistant
- <b>Remote Access.</b> Opens the [Remote Access](/settings/remote-access/) page. With Home Assistant Link, remote access works in any network

Below the rows, **Player controls** holds the Home Assistant entities that can be linked to the power, volume and mute controls of a player. See [Linking Home Assistant entities to player controls](/ha-plugin/#linking-home-assistant-entities-to-player-controls).

The [Home Assistant integration](/integration/), which puts your Music Assistant players in Home Assistant, is installed in Home Assistant itself. See [how the pieces fit together](/integration/#how-the-pieces-fit-together).

## Background tasks

This opens a view where the completed and upcoming background tasks can be seen. This is where the sync interval for the [automatically generated playlists](/usage/#playlists) is set. Any failures will be clearly indicated and log snippets can be inspected. Detailed information is obtained by clicking on a task. There is a ⋮ menu on the right which allows for:
- Viewing the task details
- Editing the task schedule. Frequency can be Hourly, Daily or Weekly. A precise time can be specified for the task for Daily and Weekly frequencies
- Running of the task now
- Disabling the schedule

Administrators can see all tasks on the server whereas Users can only see tasks created by them (e.g. playlist creation).

![image](/assets/screenshots/background-tasks.png)

### Task settings

**Task settings**, at the top of the page, holds one setting:

- <b>Maximum number of concurrent background tasks.</b> Defaults to 2. This controls how many background tasks run simultaneously. Higher numbers mean higher demands on the system's resources and can slow the system down. Setting is only visible when the advanced toggle is on

## Diagnostics

This opens a view where the 150 line tail of the Music Assistant log can be seen, kept up to date while **Auto-refresh** is on. **Download diagnostics** downloads the diagnostics report and **Download logfile** the full log.

### Log levels

One log level for each part of the server, such as **Streams** or **Webserver**. The options are **Global**, **Info**, **Warning**, **Error**, **Debug** and **Verbose**. (Do not select Verbose unless asked for by a dev as it can have an adverse performance impact). A music source, player support or plugin has its own log level on its own page.

### Cache

**Clear cache** clears the cache used by Music Assistant. Do not routinely use this button as it increases [API usage](/usage/#online-metadata-sources) and slows down the MA experience
