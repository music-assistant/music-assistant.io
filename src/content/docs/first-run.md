---
title: "First Run"
---

# First Run

Access to the Music Assistant User Interface (UI) requires a login and password.

What you see on first startup depends on how you installed MA and how you access it. If you installed the Music Assistant server as an App in Home Assistant and open the MA UI via HA Ingress (the sidebar), an administrator account is set up automatically and you go straight into the setup wizard below. In all other circumstances the setup wizard opens on **Create your account**, where the administrator account is set up first. Do not forget its username and password, as there is no way to recover them later. If they are forgotten the MA server will need to be rebuilt (docker users can delete auth.db).

> [!NOTE]
> Signing in with Home Assistant requires a pop up browser tab to be opened, so ensure your browser allows this (most notably Safari on iOS)

## The setup wizard

The administrator setting the server up is taken through a setup wizard, which opens over the app and covers everything Music Assistant needs before it can play. You can move past any step, go back to any step from the list of steps, and nothing in it is final. The wizard uses the same dialogs as the settings, so whatever you leave you can do there later.

- <b>Create your account.</b> Only the first time, and only when you did not open Music Assistant from the Home Assistant sidebar. Enter a **Username**, an optional **Display name** and a **Password** twice, then select **Create account**. This is the administrator account; accounts for the other users in your home can be added later
- <b>How would you like to use Music Assistant?</b> Your answer decides which steps follow. Every feature stays available with either option, and whatever a path leaves out can be set up later in the settings
  - <b>The full Music Assistant experience</b> goes on with Add your music sources, Add your players, Connect Home Assistant, Access Music Assistant, Add users and Finish setup
  - <b>Connect my music apps to my speakers</b> goes on with Add your players, Connect your music apps, Connect Home Assistant and Finish setup
- <b>Add your music sources.</b> Connect a streaming service or your local music files. Each source has its own page under [Music Sources](/music-providers/). A source that needs attention, for example because its login has expired, has a **Reconfigure** button right there
- <b>Add your players.</b> The players Music Assistant has already found are listed here. Switch off any you do not want to use, and rename them as you like. Finding them takes a moment once player support is set up. <b>Add more players</b>, or <b>Add player support</b> when there is none yet, opens the list of [player support](/player-support/) rather than single speakers, so pick the one your speakers use
- <b>Connect your music apps.</b> Add [Spotify Connect](/plugins/spotify-connect/) or the [AirPlay receiver](/plugins/airplay-receiver/) with **Connect a music app**, then open its settings to choose your speakers. Other extras are described under [Plugins](/plugins/)
- <b>Connect Home Assistant.</b> Optional, and left out when Music Assistant runs as the Home Assistant App, which connects by itself. **Connect to Home Assistant** sets up the connection, so Music Assistant can play on its media players and control your players with its entities. It also lets you sign in with your Home Assistant account and reach Music Assistant remotely through Home Assistant Link. See [Home Assistant](/settings/core/#home-assistant)
- <b>Access Music Assistant.</b> Switch on **Remote access** to listen with the Music Assistant app when you're away from home. Your remote access ID then shows, with a button to copy it. See [Remote Access](/settings/remote-access/). When Music Assistant is connected to a Home Assistant that has Home Assistant Link, remote access uses it automatically, so it works on any network. A reverse proxy or a more complex network is set up later under [**Settings → System → Network**](/settings/core/#network)
- <b>Add users.</b> Everyone in your home can have an account of their own. See [user management](/settings/user-management/)
- <b>Finish setup.</b> A recap of what is set up and what is still to do, with a way back to each step you left. After **The full Music Assistant experience** it also offers a [short tour of the app](/ui/#take-a-tour)

### Pausing the setup

The wizard does not have to be finished in one go. Close it with **Pause setup**, or go to another page, and the step on screen is saved first. A **Setup paused** message then offers to **Resume** on the same step. Dismiss the message and the setup stays paused. **Run the setup wizard again** at the bottom of the settings then starts it again at the first question, **How would you like to use Music Assistant?**

To go through it again, select **Run the setup wizard again** at the bottom of the settings. Nothing opens by itself for an administrator added later, so that is where they start the wizard too.

## The first time a user signs in

Everyone but administrators, guests and the Home Assistant account gets a short welcome over the app instead of this wizard.

- <b>Make yourself at home.</b> <b>Standard</b> keeps the interface clean, <b>Expert</b> shows advanced options and extra details. It only sets a few defaults, and every setting stays theirs to change
- <b>Your players.</b> The players they can send music to
- <b>What you can listen to.</b> The music sources they can use
- <b>Connect your own accounts.</b> Only when their role lets them add music sources. They can add one there or move on and do it later
- <b>You're all set.</b> A summary, and the offer of a short [tour of the app](/ui/#take-a-tour)

They can close the welcome at any point, and it does not open again by itself. It only opens on its own in the first week after the account is made, so someone who signs in later never sees it. Anyone who gets the welcome can go through it again from **Show the welcome again** at the bottom of the settings.

