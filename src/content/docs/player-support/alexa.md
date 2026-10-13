---
title: "Alexa"
---

# Alexa Devices <img src="/assets/icons/alexa-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

<img src="/assets/label-expert.png" alt="Expert icon" style="width: 128px;"  loading="lazy" /> <img src="/assets/label-experimental.png" alt="Experimental icon" style="width: 133px;"  loading="lazy" />

Music Assistant has support for Alexa devices. This component is contributed and maintained by <a href="https://github.com/alams154" target="_blank" rel="noopener noreferrer">Sameer Alam</a>.

Amazon does not let anything play to an Echo the way it lets you play to a Chromecast or a Sonos. The only way in is to build your own Alexa skill, so that is what this does — your Echo devices turn up in Music Assistant as players and you can send music to them like any other speaker.

Getting there is a long way from adding a provider and clicking save. You need somewhere to run a second piece of software, a web address of your own with a valid certificate on it, and an Amazon developer account to create the skill in. Set aside an evening, and read the whole of this page before you start.

> [!IMPORTANT]
> All issues related to this provider need to be raised in the [maintainer’s repository](https://github.com/alams154/music-assistant-alexa-skill-prototype/issues)

## Features

- Detects all Alexa devices linked to your Amazon account and registers them as players
- Control playback (play, pause) on Alexa devices
-	Set and mute volume on Alexa devices

## Configuration

### 1. Set Up the Music Assistant Alexa Skill Prototype
Run with Docker Compose (recommended):

- Copy the `docker-compose.yml` from the prototype repository (`https://github.com/alams154/music-assistant-alexa-skill-prototype`) and ensure Docker and Docker Compose are installed.
- Create a `secrets/` directory next to your `docker-compose.yml` and add the following files (relative to the compose file):

  - `./secrets/app_username.txt` — a username of your choosing, used to protect the setup pages
  - `./secrets/app_password.txt` — the matching password

- Set the environment variables in `docker-compose.yml`. The two that matter are `SKILL_HOSTNAME`, the public address Amazon will reach this service on, and `MA_HOSTNAME`, your Music Assistant server. `MA_HOSTNAME` is required for any Echo without a screen.
- Start the service:

  ```sh
  docker compose up -d
  ```

- By default the service will be available at `http://localhost:5000` (or the IP/port you configured).
- In your browser, open the setup page at `http://localhost:5000/setup`. It will sign you in to your Amazon developer account if you are not already, then create the skill and get it ready for testing. This takes a few minutes and the page will wait for Amazon while it works.
- Open `http://localhost:5000/status` at any point to see how the skill is getting on

### 2. Set Up a Proxy with SSL Certificates
- Configure a reverse proxy (such as Nginx or Caddy) in front of both the skill prototype service (default port: 5000) and your Music Assistant streaming port (default port: 8097) [optional if using only APL devices]
- Obtain and install valid SSL certificates (e.g. using Let's Encrypt) for your domain(s)
- Ensure both the prototype and Music Assistant streaming [optional if using only APL devices] endpoints are accessible via HTTPS (port: 443), as Alexa requires secure endpoints

### 3. Set up the Alexa Skill in the Alexa Developer Console

1. Go to the <a href="https://developer.amazon.com/alexa/console/ask" target="_blank" rel="noopener noreferrer">Alexa Developer Console</a> and click **Create Skill**.
2. Choose a skill name (for example: **Music Assistant**) and select your default language/locale.
3. Select **Music & Audio** as the experience and **Custom** as the model.
4. For hosting, choose **Provision your own** (not Alexa-hosted) so you can point the skill to the prototype service.
5. Choose the **Start from Scratch** template and create the skill.
6. In the skill settings:
  - Open **Invocation Name** and set the invocation to `music assistant`, then save.
  - Open **Endpoint** and set it to **HTTPS**. Fill in your public HTTPS endpoint (the reverse-proxied address for the prototype service) in the Default Region and select the wildcard certificate option if appropriate.
7. Under **Interaction Model → Intents** add an intent named `PlayAudio` with sample utterances such as `play audio`, `start`, and `play` and then build the model.
8. Under **Interfaces**, enable the **Audio Player** and **Alexa Presentation Language** interfaces and save the changes.
9. Go to the **Test** tab and enable testing by switching to **Development**.

**In short:** you run the skill service yourself, put it behind a web address with a valid certificate, create the Alexa skill and point it at that address. Your Echo devices then appear in Music Assistant as players.

### Login Process

-  Requires Amazon account credentials (email and password)
-  Requires two factor authentication code generation for the Amazon account
    - Fill in required info (email and password) on config screen
    - Press `Authenticate with Amazon` button
    - Click `Sign In` radio button and then the big blue `Sign In` button after filling in credentials (this will fail)
    - Close that tab and click "Click here if the popup didn't open"
    - Proceed with signing in on the Amazon login page

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>URL.</b> Amazon subdomain (region-specific) (e.g. amazon.com, amazon.co.uk)
- <b>E-mail.</b> Amazon account linked to Echo devices
- <b>Password.</b> Password for the Amazon account
- <b>OTP Secret.</b> OTP secret for the Amazon account
- <b>API URL.</b> Address of the skill service you set up above (e.g. http://localhost:5000)
- <b>API Basic Auth Username.</b> The username you put in `app_username.txt`
- <b>API Basic Auth Password.</b> The password you put in `app_password.txt`
- <b>Alexa Language.</b> Locale used for Alexa (e.g. en-US)

Alexa players use the standard [Individual Player Settings](/settings/individual-player/), including the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols).

## Known Issues / Notes

-	Commands sometimes fail in controlling devices if used too often (this is a limitation of the Alexa API)
-	State reporting is problematic therefore the playback status and volume shown in the MA UI may not reflect reality
-	Announcements and custom commands may have limited support depending on the device and region

## Not Yet Supported

-	Multi-room synchronized playback (true Alexa multi-room music)
-	Advanced playback features (e.g., shuffle, repeat, crossfade)
