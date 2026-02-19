---
title: "Alexa"
---

# Alexa Devices <img src="/assets/icons/alexa-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

<img src="/assets/label-expert.png" alt="Expert icon" style="width: 128px;"  loading="lazy" /> <img src="/assets/label-experimental.png" alt="Experimental icon" style="width: 133px;"  loading="lazy" />

Music Assistant has support for Alexa devices. This component is contributed and maintained by <a href="https://github.com/alams154" target="_blank" rel="noopener noreferrer">Sameer Alam</a>.

## Features

- Detects all Alexa devices linked to your Amazon account and registers them as players
- Control playback (play, pause) on Alexa devices
-	Set and mute volume on Alexa devices

## Settings

In addition to the [Individual Player Settings](/settings/individual-player/) the Alexa provider also has a unique setting in the Advanced section and a unique Presets section

- <b>Advanced - Enable Display Support.</b> ...................

## Configuration

### 1. Set Up the Music Assistant Alexa Skill Prototype
Run with Docker Compose (recommended):

- Copy the `docker-compose.yml` from the prototype repository (`https://github.com/alams154/music-assistant-alexa-skill-prototype`) and ensure Docker and Docker Compose are installed.
- Create a `secrets/` directory next to your `docker-compose.yml` and add the following files (relative to the compose file):

  - `./secrets/api_username.txt` — contains your API username
  - `./secrets/api_password.txt` — contains your API password

- Edit environment variables in `docker-compose.yml` as needed (for example: `MA_HOSTNAME`, `PORT`).
- Start the service:

  ```sh
  docker compose up -d
  ```

- By default the service will be available at `http://localhost:5000` (or the IP/port you configured).
- In your browser, open the setup UI at `http://localhost:5000/setup`. The setup page will:
   - detect existing persistent ASK credentials (if present) and skip the browser-based auth flow
   - guide you through the ASK CLI authorization flow if credentials are not present
   - run the automated skill creation/update, interaction model upload, model build polling, and testing enablement.
- In your browser, open the status UI at `http://localhost:5000/status` to check the status of the skill

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

**Summary:**  
The skill prototype is run as a separate server, a proxy with SSL certificates must be set up, the Alexa skill is created and configured, and then Music Assistant playback should now be enabled on your Alexa devices.

### Login Process

-  Requires Amazon account credentials (email and password)
-  Requires two factor authentication code generation for the Amazon account
    - Fill in required info (email and password) on config screen
    - Press `Authenticate with Amazon` button
    - Click `Sign In` radio button and then the big blue `Sign In` button after filling in credentials (this will fail)
    - Close that tab and click "Click here if the popup didn't open"
    - Proceed with signing in on the Amazon login page

## Known Issues / Notes

-	Commands sometimes fail in controlling devices if used too often (this is a limitation of the Alexa API)
-	State reporting is problematic therefore the playback status and volume shown in the MA UI may not reflect reality
-	Announcements and custom commands may have limited support depending on the device and region

## Not Yet Supported

-	Multi-room synchronized playback (true Alexa multi-room music)
-	Advanced playback features (e.g., shuffle, repeat, crossfade)
