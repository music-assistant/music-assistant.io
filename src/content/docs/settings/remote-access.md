---
title: "Remote Access"
---

# Remote Access Settings <img src="/assets/icons/remote-access-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Remote Access allows you to securely connect to your Music Assistant server from anywhere in the world.

## Configuration

- Toggle the Remote Access Status to on. Setup is automatic and further instructions are shown in the MA UI
- If you have a <a href="https://www.nabucasa.com/" target="_blank" rel="noopener noreferrer">Nabu Casa</a> (Home Assistant Cloud) subscription, ensure the option `WebRTC Connections` (in the Home Assistant Cloud settings) is ON

For most users this is all that is needed.

## Technical Details

Remote access usually works without a Nabu Casa subscription. The exception is complex network environments, for example double NAT, mobile carriers, or corporate networks blocking standard <a href="https://medium.com/@jamesbordane57/what-is-a-stun-server-df3563dbf14a" target="_blank" rel="noopener noreferrer">STUN servers</a>. This is where TURN servers (which Nabu Casa provides) are useful as they relay the traffic.

Further information is shown in the MA UI.
