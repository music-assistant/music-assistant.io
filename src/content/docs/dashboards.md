---
title: Dashboards
description: Cast the Now Playing, Party and Music Quiz screens to a TV, smart display or wall tablet.
---

# Dashboards

Three screens in Music Assistant are made for a TV or a tablet on the wall: Now Playing, the party screen and the Music Quiz game screen. You can cast any of them to a display device from the app. The display opens the screen by itself, so it needs no keyboard and nobody has to sign in on it.

## The dashboards

- <b>Now Playing.</b> Large artwork, the title and artist, and the progress of the track, for one player. Cast it from the [Now Playing view](/ui/#now-playing-view), and it follows the player that view was showing
- <b>Party.</b> The party queue with the QR code guests scan to add songs. It needs the [Party plugin](/plugins/party/), and the plugin's settings for lyrics, karaoke mode and burn-in protection apply on the display as well
- <b>Music Quiz.</b> The game screen of the [Music Quiz plugin](/plugins/music-quiz/): the join QR code and players in the lobby, then the questions, the countdown, the answers and the scores. The host controls stay on your own phone or computer

## Casting a dashboard

1. Open the screen you want to show. For Now Playing, open the full screen player from the player bar. For Party or Music Quiz, open it from the sidebar.
2. Select the TV icon at the top of the screen. Hovering over it shows **Cast dashboard to a device**.
3. Pick the display from the list.

The icon is filled in while the dashboard is on a display, and that display has a check mark in the list. To stop, open the list again and select **Disconnect**, followed by the name of the display.

Each dashboard shows on one display at a time, so picking another display moves it there. Now Playing counts once per player, which means the kitchen can be on one display and the living room on another. A display shows one dashboard at a time, and casting a different one to it replaces what was there.

The icon only shows up when at least one display is available, and only for users who are allowed to cast. See [Who can cast](#who-can-cast).

## Displays you can cast to

### Google Cast devices with a screen

Chromecast, Google TV, Nest Hub and TVs with Chromecast built in are listed once the [Google Cast](/player-support/google-cast/) player provider is added. Speakers and cast groups are not listed, since they have no screen. A display still shows up when you have disabled it as a player.

The dashboard runs in Music Assistant's own Cast app on the device. Casting to a Google Cast device needs [Remote Access](/settings/remote-access/) to be on, or an [Internal URL](/settings/core/#webserver) that starts with `https://`. Without either, casting fails with the message "Remote access or an HTTPS base URL is required to cast dashboards".

### Fully Kiosk tablets

Every tablet added with the [Fully Kiosk](/player-support/fully-kiosk/) player provider is listed once its password is set. Casting turns the screen on, stops the screensaver, brings Fully Kiosk to the front and opens the dashboard. **Disconnect** takes it back to the start page set in Fully Kiosk.

This works on your local network, with or without Remote Access.

### Apple TV

Casting to an Apple TV needs the Music Assistant app for Apple TV, which is not available yet. This page will link to it once it is released.

The Apple TV also has to be set up with the [AirPlay](/player-support/airplay/) player provider and paired, including the optional **Remote control** step. Like Fully Kiosk, this works on your local network.

### Any other screen

**Get Dashboard URL**, at the bottom of the list, copies a link to the dashboard. Open it in the browser of a smart TV, a tablet or a computer to show the dashboard there. The link works once and has to be opened within an hour. It has the same Remote Access or `https://` requirement as Google Cast.

## Who can cast

Administrators and users can cast a dashboard and disconnect it. Guests cannot. For a [role of your own](/settings/user-management/#roles-of-your-own), switch on **Show dashboards and host a music quiz** under **Users**.

The display gets temporary guest access limited to that one dashboard, so it cannot be used to browse your library or change settings. Music Assistant creates a user called **Dashboard Viewer** for this the first time you cast, which you will see in the user list.

## Known issues / notes

- The display's access does not last forever. If it shows "This dashboard session has ended", cast the dashboard again
- "Failed to show the dashboard on ..." means Music Assistant could not reach the display. Check that it is switched on and connected to your network
- The [MilkDrop Visualizer](/plugins/milkdrop-visualizer/) does not run on Google Cast devices, so the dashboard keeps its normal background there
- **Get Dashboard URL** is in the same list as the displays, so it is only there when at least one display is available
