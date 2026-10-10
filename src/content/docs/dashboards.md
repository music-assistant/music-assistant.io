---
title: Dashboards
description: Show Now Playing, the party screen or a music quiz on your TV, smart display or wall tablet.
---

# Dashboards

Some screens in Music Assistant look best on something big: what's playing right now, the party queue your guests add songs to, or the game screen of a music quiz. These are called dashboards, and you can send them to a TV, a smart display or a tablet on the wall with a couple of taps. The screen opens on its own, so there is no need to type anything or sign in on the TV.

## What you can show

- <b>Now Playing.</b> Big artwork with the song, the artist and how far along it is, for one player. You cast it from the [Now Playing view](/ui/#now-playing-view), and it keeps showing the player you had selected at that moment
- <b>Party.</b> The party queue next to the QR code your guests scan to add songs. This comes with the [Party plugin](/plugins/party/). Its display settings, such as **Karaoke Mode** and **Enable Anti Burn-in**, work on the TV too
- <b>Music Quiz.</b> The big screen of a [Music Quiz](/plugins/music-quiz/) game: the QR code and players while everyone joins, then the questions, the countdown, the answers and the scores. You keep the host controls on your phone or computer

## How to cast

1. Open the screen you want to show. For Now Playing, open the full screen player from the player bar. For Party or Music Quiz, open it from the sidebar.
2. Tap the TV icon at the top. It says **Cast dashboard to a device** when you hover over it.
3. Pick your TV or display from the list.

That's it. The TV icon lights up while the dashboard is showing, and the list puts a check mark next to the display it is on. To turn it off again, open the list and pick **Disconnect**.

Don't see the TV icon? It shows up when Music Assistant has found at least one display, or when it can make a link for [any other screen](#any-other-screen). It only shows for people who are [allowed to cast](#who-can-cast). It is also hidden while the party screen is in full screen or the quiz is in Present mode, so leave those first.

A few things worth knowing:

- Each dashboard shows on one display at a time. Pick a different display and it moves over
- Now Playing works per player, so you can have the kitchen on one TV and the living room on another
- A display shows one dashboard at a time. Cast something else to it and that replaces what was there

## Which displays work

### Google Cast devices with a screen

Chromecast, Google TV, Nest Hub and TVs with Chromecast built in all show up in the list, as long as the [Google Cast](/player-support/google-cast/) player provider is added. Speakers and speaker groups don't, since there is nothing to look at. A display still shows up if you have disabled it as a player.

Google Cast devices need one extra thing: [Remote Access](/settings/remote-access/) switched on, or an [Internal URL](/settings/core/#webserver) that starts with `https://`. Without either you'll see "Remote access or an HTTPS base URL is required to cast dashboards".

### Fully Kiosk tablets

Any tablet you have added with the [Fully Kiosk](/player-support/fully-kiosk/) player provider shows up, once its password is set and Music Assistant can reach it. When you cast, the tablet wakes its screen, closes the screensaver, brings Fully Kiosk to the front and opens the dashboard. **Disconnect** takes it back to the start page you set in Fully Kiosk.

This works on your home network. Remote Access is not needed.

### Apple TV

Apple TV is supported through a Music Assistant app for Apple TV, which is not out yet. We'll link to it here once it is.

Besides the app, the Apple TV needs to be enabled as an [AirPlay](/player-support/airplay/) player and paired, including the optional **Remote control** step. Like Fully Kiosk, it works on your home network.

### Any other screen

At the bottom of the list, **Get Dashboard URL** copies a link to the dashboard. Open that link in the browser of a smart TV, a tablet or a computer and the dashboard appears there. The link only works once, and only within an hour, so open it soon after copying. Like Google Cast, it needs Remote Access or an `https://` Internal URL.

## From Home Assistant

From Home Assistant 2026.11, each display shows up in Home Assistant as a media player. That means you can put a dashboard on the TV from an automation, a script or a button, for example showing the party screen when a scene starts, or Now Playing on the kitchen tablet in the morning.

Use the **Play media** action on the display and pick the dashboard with **Pick media**. Turning the display off hides the dashboard again. The <a href="https://www.home-assistant.io/integrations/music_assistant/#dashboards" target="_blank" rel="noopener noreferrer">Home Assistant documentation</a> has the details and an example.

## Who can cast

Anyone with the **Administrator** or **User** role can cast a dashboard and turn it off again. Guests can't. If you made a [role of your own](/settings/user-management/#roles-of-your-own), switch on **Show dashboards and host a music quiz** under **Users** to allow it.

The TV itself signs in as a guest, and only ever shows that one dashboard, so nobody can use it to change your settings. For this, Music Assistant adds a user called **Dashboard Viewer** the first time you cast or copy a dashboard link. You'll see it in your user list. Leave it enabled, or casting stops working.

## Known Issues / Notes

- A display stays signed in for one day. After that it says "This dashboard session has ended". Cast the dashboard again, or copy a new link
- "Failed to show the dashboard on ..." or "Timed out connecting to Cast device ..." means Music Assistant could not reach the display. Check that it is switched on and connected to your network
- The [MilkDrop Visualizer](/plugins/milkdrop-visualizer/) does not run on Google Cast devices, so the dashboard keeps its normal background there
