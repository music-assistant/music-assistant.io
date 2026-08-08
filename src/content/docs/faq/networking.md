---
title: Networking Basics
description: Plain-language guide to the networking terms used in these docs, and a checklist for when players are not discovered
---

# Networking Basics

Music Assistant (MA) finds your speakers and streams music to them over your home network. On a typical home network this all works automatically with nothing to configure. This page explains, in plain language, what is happening behind the scenes, what to check when players are not being found, and what the networking terms used elsewhere in these docs actually mean.

## How Music Assistant finds your players

Most speakers regularly announce themselves on your network (effectively shouting "I'm a speaker and I live at this address!") and Music Assistant listens for those announcements. (The technology behind this is called <a href="https://www.ionos.com/digitalguide/server/know-how/multicast-dns/" target="_blank" rel="noopener noreferrer">mDNS or multicast</a>; you will see those names in router settings and elsewhere in these docs.)

These announcements only travel within a single home network. They do not cross into other networks and they can be blocked by some router features. This is why the server and your players must be on the same network, and why "player not found" problems are nearly always caused by something on the network blocking the announcements.

## Checklist: my players are not being discovered

Work down this list; it is ordered by how often each item turns out to be the cause:

1. **Is everything on the same network?** The MA server and your players must be connected to the same home network. A server wired to the router and speakers on Wi-Fi is normally fine (that is still the same network) but watch out for the situations below.
2. **Guest Wi-Fi.** Guest networks deliberately isolate devices from each other. If any player (or the server) is on a guest network, discovery will fail, so move everything to your main network. Some routers have a similar per-network setting called "client isolation" or "AP isolation" (<a href="https://www.tp-link.com/us/blog/2586/what-is-ap-isolation-and-when-to-enable-it-/" target="_blank" rel="noopener noreferrer">explained here</a>); it must be OFF for the network your players use.
3. **VPNs.** If the device running MA, or the phone/laptop you are using to access MA, is connected to a <a href="https://au.norton.com/blog/vpn/how-does-a-vpn-work" target="_blank" rel="noopener noreferrer">VPN</a>, it is effectively on a different network. Disconnect the VPN.
4. **Router or mesh Wi-Fi settings blocking announcements.** Business-grade and "prosumer" equipment (UniFi/Ubiquiti, Omada, pfSense, managed switches) often restricts announcement traffic by default. Settings to look for in your router or controller app:
   - **mDNS / Multicast DNS** - must be enabled
   - **Multicast to Unicast** (sometimes called multicast enhancement) - turn it OFF; this is known to break discovery on UniFi equipment
   - **Multicast filtering / blocking** - turn it OFF
   - **<a href="https://www.ionos.com/digitalguide/server/know-how/igmp-snooping/" target="_blank" rel="noopener noreferrer">IGMP snooping</a>** - on UniFi equipment with Sonos players, turn it ON
5. **Separate networks (VLANs).** Some custom network setups deliberately split the home into several isolated networks, for example a separate "IoT network" for smart devices. This is called a <a href="https://www.youtube.com/watch?v=x-QNtpD4_UU" target="_blank" rel="noopener noreferrer">VLAN</a>. Discovery does not cross VLANs, so MA and all of its players must be on the same one. If you have never heard of a VLAN, you almost certainly do not have one, so skip this step. Running MA across VLANs is not supported by the MA team.
6. **Firewalls and network-wide blockers.** Firewalls can block the (sometimes random) connections players use, and tools such as AdGuard, Pi-hole or pfSense rules can interfere with discovery and streaming. To rule these out, temporarily disable them completely; just adding an exception rule is not a sufficient test.

If discovery still fails after all of this, see the [Troubleshooting](/faq/troubleshooting/) page for how to gather logs and ask for help.

## Checklist: my players drop out or stop after a while

A player that is found, starts playing, and then crackles, skips or stops is a different problem from one that is never found. Discovery is working. Something is interrupting the audio once it is flowing.

**Why it works in the manufacturer's own app but not here.** Apps like Apple Music and Spotify send the speaker a large amount of audio ahead of time, tens of seconds of it, and the speaker plays out of that store. If the network loses some along the way there is plenty of time to send it again and you never hear a thing. Music Assistant sends audio as it is being played, with about two seconds in hand. That is what lets it keep several speakers in step and start a track the moment you press play, but it also means a network fault that was always there, and always hidden, is now something you can hear.

So "it works fine in every other app" does not rule out the network. Nothing about the network changed. What changed is how much slack the sender has to cover it up.

### Start here: is it actually the network?

Do this first. If it comes back clean, nothing else on this page will help and you can stop.

**Run a constant ping to the player while it is playing.** Ping is a small tool built into every computer. It asks a device "are you there?" over and over, and prints how long each reply took, so any trouble on the link between the two shows up as slow or missing replies. If it is new to you, <a href="https://www.youtube.com/watch?v=ZCMMyzBv354" target="_blank" rel="noopener noreferrer">this short video</a> explains it and how to read what it prints.

Find the player's IP address in its own app or your router's device list, then on a computer on the same network:

```text
ping 192.168.1.50          Mac or Linux
ping -t 192.168.1.50       Windows
```

Leave it running for a few minutes, through at least one dropout, and watch the `time=` values.

- **Steady and low, with no replies missing.** A few milliseconds on a cable, up to about 30 on decent Wi-Fi. Your network is fine, so stop here and see [Troubleshooting](/faq/troubleshooting/) for how to gather logs.
- **Replies going missing, or times jumping into the hundreds.** That is your fault, and the steps below are worth working through. If the times go bad at the same moment the audio does, you have found it.

Two things worth checking while you are there. **Does it affect one player or all of them?** All of them at once points at the Music Assistant server rather than any one speaker, so run the same ping against the server. And **is the server busy?** A server short of processing power, or part way through a library scan, can stutter audio in a way that looks exactly like a network fault. The ping is what tells those apart.

### If the ping showed a problem

1. **Use a cable wherever you can.** A wired player takes the whole problem away, and wiring the Music Assistant server helps every player at once. If you do only one thing, do this one.
2. **Check the signal where the speaker actually is**, not what the router claims. A speaker behind a wall, inside a cabinet or on another floor can look healthy from the router and still be struggling. Moving it a metre is a free test.
3. **Look for power saving.** Wi-Fi power saving on the speaker, power management on the server's network adapter, and a server that sleeps or spins its disks down all cause dropouts that come and go for no obvious reason. Dropouts at a regular interval are a strong hint that something is going to sleep.
4. **Consider what else is using 2.4 GHz.** Microwaves, cordless phones, Bluetooth and your neighbours all sit in that band. If your speakers can use 5 GHz, put them on it. If they are 2.4 GHz only, changing channel is worth a try.

<details>
<summary>More than one access point? A few more things to try</summary>

Several access points bring their own problems, and they are a common cause of dropouts that only happen in some rooms. Skip this if you have a single router.

5. **Turn the transmit power down.** This feels backwards and is often the fix. Access points all shouting at full power interfere with one another, and a speaker will cling to a distant loud one instead of the good one next to it. Medium is a sensible starting point.
6. **Stop speakers wandering.** Turn off band steering and fast roaming, and where your equipment allows it, tie each speaker to the access point nearest to it. A speaker that hops mid-track drops audio while it hops.
7. **Set channels by hand** and turn off any nightly or automatic channel optimisation, which can move a channel out from under a speaker that is happily playing.
8. **Narrow the channel width.** Wider is not better when access points are close together. 20 MHz on 2.4 GHz and 40 MHz on 5 GHz is a reasonable starting point.
9. **Turn off multicast enhancement and multicast filtering** if you have not already. They are listed above for discovery and can disturb playback too.

To find which access point is responsible, turn all but one off, put a speaker in the same room as it and play to that speaker alone. If that is clean, bring the others back one at a time until it breaks.

</details>

## The jargon, translated

The networking terms used elsewhere in these docs, in plain language. You do not need to understand these to use Music Assistant; this section is for when a doc page or a support conversation mentions one of them.

- **mDNS (Multicast DNS).** The "announcement" system described above. Devices broadcast their name and address so that others can find them, without any central directory. The same technology is also known as Bonjour, zeroconf or Avahi. <a href="https://www.ionos.com/digitalguide/server/know-how/multicast-dns/" target="_blank" rel="noopener noreferrer">Learn more</a>
- **Multicast / broadcast.** A way of sending one message to many devices at once, instead of to one specific device. Discovery announcements are multicast. Business network equipment often restricts multicast because it creates noise on large networks; home equipment relies on it.
- **SSDP (Simple Service Discovery Protocol).** A second announcement system, used by UPnP/DLNA devices, that works alongside mDNS. Music Assistant has a setting to enable it ([System Settings > Discovery](/settings/core/#discovery)) for players that regular discovery does not find. Like mDNS, it relies on multicast, so the same router settings affect it.
- **IGMP snooping.** A router/switch feature that manages which devices multicast messages are delivered to. Depending on the equipment it can either help or hinder discovery; see the checklist above for known cases. <a href="https://www.ionos.com/digitalguide/server/know-how/igmp-snooping/" target="_blank" rel="noopener noreferrer">Learn more</a>
- **Subnet / "same network" / "flat network" / "Layer 2 network".** Different ways of saying the same thing. All devices can talk to each other directly, with no router or firewall in between. A default home network is one flat network. When these docs say the server and players must be on the same subnet or flat network, it means: no VLANs, no guest networks and no VPNs in between. <a href="https://www.networkfuntimes.com/a-complete-beginners-guide-to-subnetting/" target="_blank" rel="noopener noreferrer">Learn more</a>
- **VLAN (Virtual LAN).** A way of splitting one physical network into several isolated ones, sometimes used in custom home network setups (for example a separate network for smart-home devices). Default home setups do not have VLANs. <a href="https://www.youtube.com/watch?v=x-QNtpD4_UU" target="_blank" rel="noopener noreferrer">Learn more (video)</a>
- **VPN (Virtual Private Network).** An encrypted tunnel that places your device "virtually" on another network, such as your office or a privacy service. While connected, the device is not really on your home network, so discovery and streaming break. <a href="https://au.norton.com/blog/vpn/how-does-a-vpn-work" target="_blank" rel="noopener noreferrer">Learn more</a>
- **Firewall / opening ports.** A firewall controls which network connections are allowed. A "port" is a numbered door that a program listens behind; "opening a port" means telling the firewall to allow connections to that door. How you open a port is specific to each router or firewall product, so check the manual for yours. MA and its players use many ports, some chosen at random, which is why running MA behind a restrictive firewall is not supported.
- **Ping.** A small tool built into Windows, macOS and Linux that repeatedly asks another device on the network for a reply and reports how long each one took. Useful for telling a network fault apart from everything else, because it shows dropped and slow replies as they happen. <a href="https://www.youtube.com/watch?v=ZCMMyzBv354" target="_blank" rel="noopener noreferrer">Learn more (video)</a>
- **Band steering.** A Wi-Fi feature that decides for a device whether it uses the 2.4 GHz or the 5 GHz band, usually pushing it onto 5 GHz where that is less busy. Helpful for phones and laptops, but it can move a speaker mid-track, which stops the audio while it moves. <a href="https://www.dlink.com/uk/en/technology/band-steering" target="_blank" rel="noopener noreferrer">Learn more</a>
- **Channel width.** How much of the radio band a Wi-Fi network takes up, given in MHz. Wider carries more at once but overlaps more with the networks around it, so a narrower setting is often steadier where several access points or neighbours are close together. <a href="https://support.microsoft.com/en-us/windows/experience/connectivity-networking/wi-fi-and-your-home-layout" target="_blank" rel="noopener noreferrer">Learn more</a>
- **Fast roaming.** A Wi-Fi feature that speeds up the handover when a device moves from one access point to another, so a phone call or a stream is not interrupted. It is meant for devices that move around, and a speaker that sits in one place has no use for it. <a href="https://www.devolo.co.uk/en/glossary/fast-roaming" target="_blank" rel="noopener noreferrer">Learn more</a>
- **Transmit power.** How loudly an access point broadcasts. Turning it up sounds like it should help, but where several access points are close together it makes them interfere with each other, and encourages a device to stay with a distant loud one instead of the good one nearby. <a href="https://www.youtube.com/watch?v=PC677xAYu28" target="_blank" rel="noopener noreferrer">Learn more (video)</a>
- **Reverse proxy.** A server that sits in front of a web application, usually to add HTTPS or a friendly address (for example `music.example.com` instead of an IP address and port number). Only relevant if you have set one up yourself for accessing the MA interface; players always need direct access to the server. <a href="https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/" target="_blank" rel="noopener noreferrer">Learn more</a>
