---
title: Troubleshooting
description: Common Problems and Fixes
---

# Troubleshooting

## First things to try

**Logs.** Look in the logs and try and resolve any errors you see there particularly those related to [tagging](/music-providers/local-files/#tagging-files). Connection errors are symptomatic of networking problems (including Adguard or pi-hole blocking) or container misconfiguration.

**Complex networks.** Probably the most common issue is people trying to run MA with complicated network setups. Running behind VPNs, across subnets or VLANs, behind firewalls, local SSL, using reverse proxies or inside containers (except when using our recommended docker compose) is not supported (it might work but we can’t troubleshoot for you as MA is run by a small team who don't have the resources to help with non-MA issues). Some options have been added to core to help people who are running non-standard setups but these are supplied on a non-support basis. Search Discord for these problems as users have regularly reported these issues and found that it is their setup that was causing the fault; their solution might help you. See [Networking Basics](/faq/networking/) for a plain-language explanation of these terms.

**Ad blockers and DNS filters.** Increasingly, we are seeing reports from users which are caused by their use of tools such as AdGuard, Pi-hole, pfSense etc. If your problem relates to being unable to stream or if there are errors in the logs related to unreachable addresses or timeouts then disable all of these tools before seeking help. Just applying a rule is insufficient, the problem must be present with these tools completely disabled.  

**Unsupported installs.** For clarity, running installation options other than HAOS (Home Assistant Operating System) or simple docker and/or more complex network setups is at your own risk and we do not have the capacity to provide direct support (e.g Kubernetes is not supported).

**Stream settings.** There are settings available in MA SETTINGS >> SYSTEM >> STREAMS and then select the "Show advanced settings" toggle, that might help you if you have non-standard setups. If you are running MA in your own docker container then make sure you have the correct PUBLISHED IP ADDRESS and BIND TO IP/INTERFACE set. Ensure containers are in HOST networking mode and note the extra privileges in the [example docker command](/installation/#docker-image).

**Player discovery.** Most players are discovered automatically. They announce themselves on the network and MA listens for those announcements (a technique called mDNS/multicast, [explained in plain language here](/faq/networking/)). If your players do not get discovered it means something on your network is blocking those announcements. Work through the [discovery checklist](/faq/networking/#checklist-my-players-are-not-being-discovered); the most common causes are guest Wi-Fi networks, VPNs, and router settings that filter multicast traffic. Business-grade network equipment tends to block multicast traffic as much as possible as it hurts performance when there are many clients, but in a home setup it is mandatory because all home gear relies on it. Users of Ubiquiti devices must ensure the setting `Multicast to Unicast` is turned OFF.

**Home Assistant URL.** Make sure the HA internal url is set correctly. HA SETTINGS >> SYSTEM >> NETWORK >> Home Assistant URL >> Local network (set to automatic or use your internal HA IP). If it is automatic you can try changing it to http://your.internal.ip:8123/

**WiFi and bandwidth.** MA streams at high quality which may max out poor network connections. If possible use wired connections for MA players. Input codec is not always the same as the output codec (which by default is usually FLAC) so playing a low quality MP3 will not change the apparent performance. If you experience stuttering or other interrupted playback issues which are not apparent on wired players or those close to your access points then poor WiFi is likely to blame. You will need to improve your WiFi coverage. Players have an option to use a lossy codec which will lower the bandwidth requirements, this is available in the advanced settings for the player.

**Physical devices.** Check the physical device settings. There have been numerous reports where the issue was actually a setting external to MA such as receivers set to repeat tracks or ESP devices with incorrect arguments passed on install.

**File tagging.** Ensure local files are [tagged properly](/music-providers/local-files/#tagging-files).

**Playback.** If it is a playback issue then turn on [QUEUE FLOW MODE](/faq/tech-info/#track-queueing) in the settings for the specific player (where that is available).

**Authentication.** If it is a music source issue and the source requires authentication then clear the authentication and re-login.

**Browser.** If it is a frontend issue or related to logging in to a provider or source which requires redirection to another website then try a different browser. If you are trying on a mobile device then try on a laptop or PC. Firefox and Safari are known to have deficiencies.

**Isolate the fault.** Narrow the fault down to a single player or music source. Play the same content on a different player, then play something from a different music source on the original player. If you only have one player then [Sendspin](/player-support/sendspin/), the built-in web player, is always available; if you only have one music source then try a radio station. Knowing that a player works with one source but not another, or that one player fails where the others are fine, tells you where the problem is not.

**Provider documentation.** Review the applicable player provider or music source documentation to see if there are known issues or specific troubleshooting steps or fixes. 

**Voice.** For voice problems refer to <a href="https://www.home-assistant.io/voice_control/troubleshooting/" target="_blank" rel="noopener noreferrer">Home Assistant Voice Troubleshooting</a>, and to [Voice Control](/integration/voice/) for how Music Assistant fits in. If you are not using HOME ASSISTANT as your Conversation Agent then you must seek assistance in the HA forums first. If they direct you back to this project then make it clear in your report that you are using a LLM as the Conversation Agent and include the reasons why the HA support network wasn't able to help.

**Power cycling.** Try power cycling the physical player(s) if they won't connect or if there is no sound.

**Known problems and restarts.** Check the GitHub Issues and Discord to see if it is a known problem. If not try restarting MA, try restarting HA, and try a full HOST REBOOT (in that order). If it is an integration problem then trying removing it via the HA settings then restart HA then reinstall.

## How to report an issue

Before you raise an issue [read this first](/support/). Report issues using the template with as much detail as possible. Often posts aren’t clear about exactly what is typed where, how something is configured or what series of menus are selected. Screenshots can be helpful. 

DOWNLOAD and ATTACH the diagnostics report from MA SETTINGS >> SYSTEM >> DIAGNOSTICS. This is the single most useful thing you can give us and it should be included in every report.

DOWNLOAD and ATTACH complete logs from MA SETTINGS >> SYSTEM >> DIAGNOSTICS. These are optional to begin with as we may ask for more detailed logging once we have read the diagnostics report, but attaching them from the start does no harm. Enabling debug logging is ok if the default level is providing no useful information. It is not recommended to run debug logging at a global level for daily use as it has a resource overhead; only do so in the case of problems. Do NOT use verbose logging level on a global level because it makes the logs practically unreadable. If really needed, but only by dev request, verbose logging may be enabled on a PER provider/source basis.

You can also look in the Browser console when you have front end issues which in Chrome browser is --> F12 for developer tools --> console. 

## A provider or source isn't working

Navigate to MA settings and inspect the provider or source entry. If there is a red circle with an exclamation mark next to it then hover over that icon to see the error message.

![image](/assets/screenshots/setup_error.png)

## Why aren't tracks/albums matching between sources

Matching items between streaming sources is challenging as they do not all provide the same or unique metadata to definitively identify a match. If you think there is an obvious match (eg. same artist and track and album) then please submit an issue report. For more information about how MA uses metadata in various ways see [Metadata](/metadata/)

## My media player is not available or not playing

If the player is found and starts playing but then crackles, skips or stops after a while, that is a different problem and is covered by the [dropout checklist](/faq/networking/#checklist-my-players-drop-out-or-stop-after-a-while). Start with the ping test there, which tells you within a few minutes whether your network is at fault. Note that a player can work perfectly in its manufacturer's own app and still drop out here, because those apps send audio a long way ahead and can hide network faults that Music Assistant cannot.

If the player appears to start normally, with the progress bar advancing and the track details and artwork shown, but no sound comes out of it, check the <b>Published IP address</b> in the [Streams](/settings/core/#streams) settings under MA SETTINGS >> SYSTEM. This is the address Music Assistant hands to players as the place to fetch audio from, so if it is set to something the player cannot reach on your network the player will sit there looking like it is playing while receiving nothing. The same symptom can come from anything else that lets a player be discovered but then blocks the audio connection back to the server, such as a firewall, separate VLANs, a guest network or "client isolation" on your Wi-Fi, or a VPN on the machine running Music Assistant. Discovery is often forwarded between networks even where the audio traffic is not, which is why a player can look perfectly healthy right up to the moment it should make a sound, so work through [Networking Basics](/faq/networking/) if any of those apply to you.

For a player that is missing or will not start at all, read on.

First check if the player has been discovered but just isn't appearing in the [Player List](/ui/#player-list). Do this by navigating to MA SETTINGS >> PLAYERS. If the player is there then look for an hourglass ⧖ beside the entry which indicates that, for some reason, the player is unavailable. Also review the GENERIC SETTINGS for the individual player to determine under what circumstances the player will be hidden in the UI.

If the player is not shown in the list of players in the MA SETTINGS then review the list of player providers. If your device doesn't support one of the listed protocols then it won't currently work. Review the <a href="https://github.com/orgs/music-assistant/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> to see if others have requested support and join in the conversation.

If your device does support one of the supported protocols then review the documentation for that player provider for known issues and troubleshooting tips.

If your device still doesn't work and you think it should then review the full logs for discovery information and errors. Review the first things to try at the top of this page as usually if you get this far without identifying why the player isn't working it will be a networking or non-standard installation issue which, generally, you will need to resolve yourself. Search the Github <a href="https://github.com/music-assistant/support/issues" target="_blank" rel="noopener noreferrer">Issues</a>, <a href="https://github.com/orgs/music-assistant/discussions" target="_blank" rel="noopener noreferrer">Discussions</a> and <a href="https://discord.gg/kaVm8hGpne" target="_blank" rel="noopener noreferrer">Discord</a> as likely someone has asked your question before.

## All my media is missing 

Ensure the favourites filter is OFF. At the top of each view is a ❤️. Ensure it is hollow.

If you are trying to view playlists through the HA media view then you should note that only favourited playlists will show up and additionally you need to have a MA player selected to see the MA Library. HA's media browser doesn't have any filter or sorting options like MA's frontend has.

## I don't see any tracks or albums for an Artist on a streaming source

See [Library Import Control](/music-providers/#library-import-control)

## My local album art isn’t being picked up

Art embedded in music tracks will always be picked up but folder.jpg images will only be imported if the folder name **exactly** matches the album (except for any characters that are prohibited in folder names. E.g. / )

If there is no local artwork then online providers will be queried very slowly in the background. If the tracks also have no unique MusicBrainz IDs then most providers will return no results at all. See the [provider summary](/metadata/#provider-summary) for what each one needs.

## There isn't any metadata for my music

For local files, you can either fully tag your music (this is preferred and it is recommended to use <a href="https://picard.musicbrainz.org/" target="_blank" rel="noopener noreferrer">Picard</a>) or have an <a href="https://kodi.wiki/view/NFO_files" target="_blank" rel="noopener noreferrer">artist folder with the artist.nfo</a> in there (just like the images) and that will be preferred. Online metadata providers are only queried when there is no local data.

## Some of the playlists are missing

For certain sources (Spotify is a known example) the authentication method used may impact visibility of playlists of certain type. For a Spotify source, see details [here](/music-providers/spotify/#known-issues--notes)

## I have updated but MA looks like the old version or isn’t working

Possibly your browser is using a cached version of the front end. Try forcing a refresh Chrome, Firefox, or Edge for Windows: Press Ctrl+F5 (If that doesn’t work, try Shift+F5 or Ctrl+Shift+R).

if the above doesn’t work look <a href="https://www.webinstinct.com/faq/how-to-disable-browser-cache" target="_blank" rel="noopener noreferrer">here for some more options</a>

For the iOS app see <a href="https://community.home-assistant.io/t/anyone-know-how-to-clear-cache-in-the-ios-app/64569/10" target="_blank" rel="noopener noreferrer">here</a>

## The second zone of my amplifier is not seen by MA or MA won't turn on my amplifier

MA is an INPUT to your amplifier. So you need to power on your amplifier and then select the INPUT that MA is streaming to (e.g. AirPlay, DLNA, Chromecast). For this reason MA does not see the amplifier zones it only sees the compatible inputs of the amplifier. 

Some amplifiers may auto turn on when a signal is detected so check the amplifier options. If this functionality is not available then you will need to power on the amplifier via another means which could be by [assigning a HA entity to the player control](/settings/individual-player/#player-controls). 

## My local music isn’t being imported or I’m seeing missing ID3 tag warnings in the logs

This is likely a tagging problem. See [here](/music-providers/local-files/#tagging-files)

## MA is interfering with my Spotify Connect or Other Streaming App

If the MA player is "powered on" from the MA UI then MA understands that it is allowed to take control of the player. This may then happen even though you have started playback via another app but have not started playback via MA. To avoid this situation "power off" the MA player.

## MA is failing to start

If the following error (or similar) is seen in the log:
  ```
  File "/app/venv/lib/python3.12/site-packages/zeroconf/_utils/net.py", line 293, in add_multicast_member
      listen_socket.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, _value)
  OSError: [Errno 105] No buffer space available
  ```
  this is likely to be due to hitting the multicast group limit on the host system. See <a href="https://unix.stackexchange.com/questions/23832/is-there-a-way-to-increase-the-20-multicast-group-limit-per-socket" target="_blank" rel="noopener noreferrer">this explanation</a> for more info

If the above is not the issue then start MA in safe mode:

- With the HA app, select the toggle in the configuration
- With Docker run the container with the environmental variable MASS_SAFE_MODE set to a boolean true value, e.g. "1" or "true"

If MA now starts, you can start any of the providers by clicking "reload" in the settings (click the 3 dots). If one particular provider causes MA to crash then open an issue with the details.

