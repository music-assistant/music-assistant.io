# Alexa Devices ![Preview image](../assets/icons/alexa-icon.png){ width=70 align=right }

![Expert icon](../assets/label-expert.png) ![Experimental icon](../assets/label-experimental.png)

Music Assistant has support for Alexa devices. This component is contributed and maintained by [Sameer Alam](https://github.com/alams154).

## Features

- Detects all Alexa devices linked to your Amazon account and registers them as players
- Control playback (play, pause) on Alexa devices
-	Set and mute volume on Alexa devices

## Settings

In addition to the [Individual Player Settings](../settings/individual-player.md) the Alexa provider also has a unique setting in the Advanced section and a unique Presets section

- <b>Advanced - Enable Display Support.</b> ...................

## Configuration

### 1. Set Up the Music Assistant Alexa API Bridge
- Pull from GitHub Container Registry and run the Docker container:
  ```sh
  docker pull ghcr.io/alams154/music-assistant-alexa-api:latest
  docker run --rm -d -p 3000:3000 ghcr.io/alams154/music-assistant-alexa-api:latest
  ```

### 2. Set Up a Proxy with SSL Certificates
- Configure a reverse proxy (such as Nginx or Caddy) in front of both the API bridge (default port: 3000) and your Music Assistant streaming port (default port: 8097)
- Obtain and install valid SSL certificates (e.g. using Let's Encrypt) for your domain(s)
- Ensure both the API bridge and Music Assistant streaming endpoints are accessible via HTTPS, as Alexa requires secure endpoints

### 3. Import and Configure the Alexa Skill

- Go to the [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask)
- Click **Create Skill** and follow the prompts:
  - Choose a skill name and default language
  - Select **Music & Audio** as the experience, **Custom** as the model, and **Alexa-Hosted (Node.js)** as the hosting service
  - Click **Import skill** and enter:  
    `https://github.com/alams154/music-assistant-alexa-skill.git`
- Wait for the import to complete

### 4. Customize the Skill

- In the Alexa Developer Console:
  1. Go to the **Build** tab
  2. Set the **Invocation Name** to "music assistant" and save
  3. Go to the **Code** tab and open `index.js`
  4. Change the `API_HOSTNAME` and `MA_HOSTNAME` constants to point to your API bridge and Music Assistant instance
  5. Click **Deploy** to deploy the skill
  6. Go to the **Test** tab and enable skill testing in **Development**
  7. Go back to the **Build** tab and build the skill

**Summary:**  
The API bridge is run as a separate server, a proxy with SSL certificates must be set up, the Alexa skill is imported and configured, and then Music Assistant playback should now be enabled on your Alexa devices.

### 5. Login Process

-  Requires Amazon account credentials (email and password)
-  Requires one factor authentication code generation for the Amazon account
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
