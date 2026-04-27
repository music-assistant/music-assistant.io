---
title: "Twitch"
---

# Twitch Audio <img src="/assets/icons/twitch-icon.svg" alt="Twitch icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for audio-only streaming from live Twitch channels. Contributed and maintained by <a href="https://github.com/Drizzt321" target="_blank" rel="noopener noreferrer">Drizzt321</a>

> [!NOTE]
> This provider requires a Twitch Developer Application for OAuth authentication. See the [Configuration](#configuration) section below.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Radio (live channels) |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Lossy AAC (varies by channel) |
| Login Method | OAuth |

### Other

- Browse followed channels and see which are currently live
- Search for any Twitch channel by name
- Audio-only streaming via Streamlink (no video overhead)
- Automatic raid following: when a streamer raids another channel, playback automatically switches to the raid target
- Ad break detection with stream title indicator

## Configuration

### Step 1: Create a Twitch Developer Application

1. Go to <a href="https://dev.twitch.tv/console/apps" target="_blank" rel="noopener noreferrer">dev.twitch.tv/console/apps</a> and log in with your Twitch account
2. Click **Register Your Application**
3. Fill in the fields:
   - **Name**: Choose any name (e.g., "Music Assistant")
   - **OAuth Redirect URLs**: Enter `https://music-assistant.io/callback`
   - **Category**: Choose any category
4. Click **Create**
5. On the application management page, note the **Client ID**
6. Click **New Secret** to generate a **Client Secret** — copy it immediately as it will only be shown once

### Step 2: Configure in Music Assistant

1. In Music Assistant, navigate to **Settings**
2. Under Music Sources, click **Add a music source** and select **Twitch Audio**
3. Enter the **Client ID** and **Client Secret** from Step 1
4. Click **Authenticate** — you will be redirected to Twitch to authorize the application
5. After authorizing, you will be redirected back to Music Assistant
6. Click **Save**

### Optional: Twitch Website Token

If you have **Twitch Turbo** or are **subscribed to a channel**, you can provide your Twitch website token to reduce ad frequency during streams.

To obtain the token:

1. Log in to <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">twitch.tv</a> in your browser
2. Open browser developer tools (F12 or Ctrl+Shift+I)
3. Go to the **Console** tab
4. Paste and run the following JavaScript:
   ```
   document.cookie.split("; ").find(item=>item.startsWith("auth-token="))?.split("=")[1]
   ```
5. Copy the 30-character alphanumeric token that is returned

Enter this token in the **Twitch Website Token** field in the provider settings.

> [!CAUTION]
> This token grants full access to your Twitch account. Keep it secret and do not share it. See the <a href="https://streamlink.github.io/cli/plugins/twitch.html#authentication" target="_blank" rel="noopener noreferrer">Streamlink Twitch plugin documentation</a> for more details.

### Auto-Follow Raids

When enabled (the default), playback automatically switches to the raid target channel when a streamer you are listening to raids another channel. This uses Twitch's EventSub WebSocket API to receive raid notifications in real time.

## Usage

1. In the left-hand menu, select **Browse**
2. Click **Twitch Audio**
3. You will see two categories:
   - **Live Followed Channels**: Shows channels you follow that are currently live
   - **All Followed Channels**: Shows all channels you follow, with live status indicated
4. Click a channel to start playing, or use the search function to find any Twitch channel by name

After playing a channel, it will appear in the **Radio** view.

## Known Issues / Notes

- **Pre-roll ads on stream start**: When a stream begins, the first few HLS segments (~10-15 seconds) may be pre-roll ads. These will play through as audio. This is a limitation of how Twitch delivers the initial stream segments.
- **Brief audio interruption on stream start**: There may be a short audio interruption shortly after a stream begins playing, as the HLS stream transitions from initial segments to the live content. Playback should be smooth after this initial settling period.
- **Stream discontinuity warning**: You may see a `stream discontinuity` warning in the logs when transitioning from initial segments to the live content. This is expected and does not affect playback.
- **Offline channels**: If a channel goes offline while you are listening, playback will stop. The provider does not automatically switch to another channel unless a raid occurs.
- **Ad detection**: Ad detection is based on Streamlink's HLS segment metadata. The accuracy depends on how Twitch marks ad segments, which can vary.
- **Twitch Turbo / subscriptions**: Providing a Twitch website token can reduce ads but does not eliminate them entirely for all channels.
