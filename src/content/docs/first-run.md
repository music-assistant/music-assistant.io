---
title: "First Run"
---

# First Run

Access to the Music Assistant User Interface (UI) requires a login and password.

What you see on first startup depends on how you installed MA and how you access it. If you installed the Music Assistant server as an App in Home Assistant and open the MA UI via HA Ingress (the sidebar), an administrator account is set up automatically and you go straight into the setup wizard below. In all other circumstances you will see an initial authentication setup dialog. The administrator username and password are the first to be set up: do not forget them, as there is no way to recover them later. If they are forgotten the MA server will need to be rebuilt (docker users can delete auth.db).

> [!NOTE]
> Signing in with Home Assistant requires a pop up browser tab to be opened, so ensure your browser allows this (most notably Safari on iOS)

The initial authentication setup dialog will appear as follows

<a href="/assets/screenshots/auth-flow.png"><img src="/assets/screenshots/auth-flow.png" alt="Preview image" style="width: 256px;"  loading="lazy" /></a>

## The setup wizard

The administrator setting the server up is taken through a setup wizard, which opens over the app and covers everything Music Assistant needs before it can play. It cannot be closed, so work through to the end. You can move past any step, and nothing in it is final. The wizard uses the same dialogs as the settings, so whatever you leave you can do there later.

- <b>Choose how you want to use Music Assistant.</b> <b>As my music hub</b> brings your streaming services and local music together into one library. <b>From the apps on my phone</b> streams from Spotify, AirPlay and other apps to the speakers in your home. Your answer only changes the order of the steps that follow, and whether you can leave the music sources step for later. Everything stays available either way
- <b>Add your music sources.</b> Connect a streaming service or your local music files. Each source has its own page under [Music Sources](/music-providers/)
- <b>Add your players.</b> The players Music Assistant has already found are listed here. Switch off any you do not want to use, and rename them as you like. Finding them takes a moment once a player provider is set up. <b>Add more players</b>, or <b>Add a player provider</b> when there is none yet, opens the list of [player providers](/player-support/) rather than single speakers, so pick the one your speakers use
- <b>Add plugins.</b> Extras such as Party, Spotify Connect and an AirPlay receiver, described under [Plugins](/plugins/). Skip it and add them whenever you like
- <b>Check your server settings.</b> The address the apps in your home use, and the address your players fetch the audio from. Both are worked out automatically and are normally right, and your browser checks whether it can reach them. This step is also where you switch on [remote access](/settings/remote-access/), or say that you run your own reverse proxy. Only a more complicated network needs these addresses set by hand, under <b>Show advanced settings</b>
- <b>Add users.</b> Everyone in your home can have an account of their own. See [user management](/settings/user-management/)
- <b>Finish setup.</b> A recap of what is set up and what is still to do, with a way back to each step you left, and the offer of a [short tour of the app](/ui/#take-a-tour)

To go through it again, select **Run the setup wizard again** at the bottom of the settings.

Everyone else, guests aside, gets [a short welcome](/settings/user-management/#the-first-time-someone-signs-in) the first time they sign in rather than this wizard.
