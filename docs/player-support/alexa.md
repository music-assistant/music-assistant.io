# Alexa Devices ![Preview image](../assets/icons/alexa-icon.png){ width=70 align=right }

![Expert icon](../assets/label-expert.png)

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

## Known Issues / Notes

-	Login process is complicated (currently working on configuration in the provider that will simplify the process)
    - Requires credentials for an Amazon account (email and password)
    - Requires some moderate understanding of file systems and programming to retrieve the cookie file  
    - Requires a receiver player such as MPD which makes the stream URL static
    - Requires an Amazon developer account
    - Requires a certificate provider to generate SSL certificates
    - Requires a proxy to provide a HTTPS endpoint for the stream URL	
-	Commands sometimes fail in controlling devices if used too often (this is a limitation of the Alexa API)
-	Announcements and custom commands may have limited support depending on the device and region

## Not Yet Supported

-	Multi-room synchronized playback (true Alexa multi-room music)
-	Advanced playback features (e.g., shuffle, repeat, crossfade)
