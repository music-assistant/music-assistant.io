---
title: "Remote Access"
---

# Remote Access Settings <img src="/assets/icons/remote-access-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Remote Access allows you to securely connect to your Music Assistant server from anywhere in the world. It is also what lets the [built-in web player](/player-support/sendspin/#the-web-player) reach your server from outside your own network.

## Configuration

- Toggle the Remote Access Status to on. Setup is automatic and further instructions are shown in the MA UI
- If you have a <a href="https://www.nabucasa.com/" target="_blank" rel="noopener noreferrer">Nabu Casa</a> (Home Assistant Cloud) subscription, ensure the option `WebRTC Connections` (in the Home Assistant Cloud settings) is ON

To connect from elsewhere, go to <a href="https://app.music-assistant.io" target="_blank" rel="noopener noreferrer">app.music-assistant.io</a> and enter **Your Remote Access ID** shown on this page, or scan the QR code shown below it.

For most users this is all that is needed.

## Links shared with guests

Links that Music Assistant hands out to guests, such as the QR codes in party and quiz invitations, need an address that works from outside your home. The **Music Assistant URL** card at the top of [**Settings → System → Webserver**](/settings/core/#webserver) decides which one is used.

- <b>Internet.</b> With remote access on, administrators see a **Use remote access** switch. When it is on, guests' links open through remote access, and the card shows the link with a button to copy it. Switch it off to enter an **External URL** instead, for example the address of your own reverse proxy. A set external URL always takes priority over remote access. When remote access is off, the card offers **Set up remote access**, which opens this page
- <b>Local network.</b> **Automatic** is on by default and shows the address Music Assistant detected for devices in your home, with a button to copy it. Switch it off to enter an **Internal URL** yourself. See [Webserver](/settings/core/#webserver) for when that is needed

## Technical Details

Remote access usually works without a Nabu Casa subscription. The exception is complex network environments, for example double NAT, mobile carriers, or corporate networks blocking standard <a href="https://medium.com/@jamesbordane57/what-is-a-stun-server-df3563dbf14a" target="_blank" rel="noopener noreferrer">STUN servers</a>. This is where TURN servers (which Nabu Casa provides) are useful as they relay the traffic.

Further information is shown in the MA UI. For the network terms used elsewhere in this documentation, see [Networking Basics](/faq/networking/).
