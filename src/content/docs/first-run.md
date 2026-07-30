---
title: "First Run (Authentication)"
---

# Initial Authentication Setup

Access to the Music Assistant User Interface (UI) requires a login and password.

What you see on first startup depends on how you installed MA and how you access it. If you installed the Music Assistant server as an App in Home Assistant and open the MA UI via HA Ingress (the sidebar), an administrator account is set up automatically and you are taken straight to the settings page. In all other circumstances you will see an initial authentication setup dialog. The administrator username and password are the first to be set up: do not forget them, as there is no way to recover them later. If they are forgotten the MA server will need to be rebuilt (docker users can delete auth.db).

> [!NOTE]
> Signing in with Home Assistant requires a pop up browser tab to be opened, so ensure your browser allows this (most notably Safari on iOS)

The initial authentication setup dialog will appear as follows

<a href="/assets/screenshots/auth-flow.png"><img src="/assets/screenshots/auth-flow.png" alt="Preview image" style="width: 256px;"  loading="lazy" /></a>

After successfully logging in, your first action as administrator is to add [music sources](/music-providers/) and any necessary [players](/player-support/). This banner is shown to support this

![Preview image](/assets/screenshots/setup-banner.png)
