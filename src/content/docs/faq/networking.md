---
title: Networking Basics
description: Plain-language guide to the networking terms used in these docs, and a checklist for when players are not discovered
---

# Networking Basics

Music Assistant (MA) finds your speakers and streams music to them over your home network. On a typical home network this all works automatically with nothing to configure. This page explains — in plain language — what is happening behind the scenes, what to check when players are not being found, and what the networking terms used elsewhere in these docs actually mean.

## How Music Assistant finds your players

Most speakers regularly announce themselves on your network — effectively shouting "I'm a speaker and I live at this address!" — and Music Assistant listens for those announcements. (The technology behind this is called mDNS or multicast; you will see those names in router settings and elsewhere in these docs.)

These announcements only travel within a single home network: they do not cross into other networks and they can be blocked by some router features. This is why the server and your players must be on the same network, and why "player not found" problems are nearly always caused by something on the network blocking the announcements.

## Checklist: my players are not being discovered

Work down this list — it is ordered by how often each item turns out to be the cause:

1. **Is everything on the same network?** The MA server and your players must be connected to the same home network. A server wired to the router and speakers on Wi-Fi is normally fine — that is still the same network — but watch out for the situations below.
2. **Guest Wi-Fi.** Guest networks deliberately isolate devices from each other. If any player (or the server) is on a guest network, discovery will fail — move everything to your main network. Some routers have a similar per-network setting called "client isolation" or "AP isolation"; it must be OFF for the network your players use.
3. **VPNs.** If the device running MA — or the phone/laptop you are using to access MA — is connected to a VPN, it is effectively on a different network. Disconnect the VPN.
4. **Router or mesh Wi-Fi settings blocking announcements.** Business-grade and "prosumer" equipment (UniFi/Ubiquiti, Omada, pfSense, managed switches) often restricts announcement traffic by default. Settings to look for in your router or controller app:
   - **mDNS / Multicast DNS** — must be enabled
   - **Multicast to Unicast** (sometimes called multicast enhancement) — turn it OFF; this is known to break discovery on UniFi equipment
   - **Multicast filtering / blocking** — turn it OFF
   - **IGMP snooping** — on UniFi equipment with Sonos players, turn it ON
5. **Separate networks (VLANs).** Some advanced setups deliberately split the home into several isolated networks — for example a separate "IoT network" for smart devices. This is called a VLAN. Discovery does not cross VLANs, so MA and all of its players must be on the same one. If you have never heard of a VLAN, you almost certainly do not have one — skip this step. Running MA across VLANs is not supported by the MA team.
6. **Firewalls and network-wide blockers.** Firewalls can block the (sometimes random) connections players use, and tools such as AdGuard, Pi-hole or pfSense rules can interfere with discovery and streaming. To rule these out, temporarily disable them completely — just adding an exception rule is not a sufficient test.

If discovery still fails after all of this, see the [Troubleshooting](/faq/troubleshooting/) page for how to gather logs and ask for help.

## The jargon, translated

The networking terms used elsewhere in these docs, in plain language. You do not need to understand these to use Music Assistant — this section is for when a doc page or a support conversation mentions one of them.

- **mDNS (Multicast DNS).** The "announcement" system described above: devices broadcast their name and address so that others can find them, without any central directory. The same technology is also known as Bonjour, zeroconf or Avahi.
- **Multicast / broadcast.** A way of sending one message to many devices at once, instead of to one specific device. Discovery announcements are multicast. Business network equipment often restricts multicast because it creates noise on large networks; home equipment relies on it.
- **IGMP snooping.** A router/switch feature that manages which devices multicast messages are delivered to. Depending on the equipment it can either help or hinder discovery — see the checklist above for known cases.
- **Subnet / "same network" / "flat network" / "Layer 2 network".** Different ways of saying the same thing: all devices can talk to each other directly, with no router or firewall in between. A default home network is one flat network. When these docs say the server and players must be on the same subnet or flat network, it means: no VLANs, no guest networks and no VPNs in between.
- **VLAN (Virtual LAN).** A way of splitting one physical network into several isolated ones, common in advanced setups (for example a separate network for smart-home devices). Default home setups do not have VLANs.
- **VPN (Virtual Private Network).** An encrypted tunnel that places your device "virtually" on another network, such as your office or a privacy service. While connected, the device is not really on your home network, so discovery and streaming break.
- **Firewall / opening ports.** A firewall controls which network connections are allowed. A "port" is a numbered door that a program listens behind; "opening a port" means telling the firewall to allow connections to that door. MA and its players use many ports — some chosen at random — which is why running MA behind a restrictive firewall is not supported.
- **Reverse proxy.** A server that sits in front of a web application, usually to add HTTPS or a friendly address (for example `music.example.com` instead of an IP address and port number). Only relevant to advanced setups for accessing the MA interface — players always need direct access to the server.
