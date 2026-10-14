---
title: "Web Kiosk"
description: "Turn a browser into a fullscreen Music Assistant player with optional controls, lyrics, and Party QR."
---

# Web Kiosk <img src="/assets/icons/web-kiosk-icon.svg" alt="Web Kiosk" style="width: 70px; float: right;" loading="lazy" />

Music Assistant supports browser playback through Web Kiosk. Contributed and maintained by <a href="https://github.com/trudenboy" target="_blank" rel="noopener noreferrer">TrudenBoy</a>.

Use a tablet, computer, Raspberry Pi display, or compatible TV browser as a dedicated music player. Web Kiosk serves a standalone fullscreen page; it is separate from the player built into the Music Assistant web interface.

Choose music in Music Assistant, then listen through the kiosk device and see the current track on its screen.

## Features

- Sendspin playback by default, with experimental synchronised grouping and automatic HTML5 fallback if Sendspin cannot connect
- HTML5 playback as an alternative, using MP3 by default
- Artwork, track metadata, and a blurred artwork background
- Optional playback controls with layouts for desktop and narrow screens
- Optional visualizer, lyric lines, Party QR, queue display, and a selectable Player ID badge
- An interactive URL builder, with optional Music Assistant sign-in protection

## Configuration

1. Open **Settings → Player Providers**, click **Add a player provider**, select **Web Kiosk**, and save the settings.
2. On the playback device, open `http://<ma-host>:8098/kiosk`, replacing `<ma-host>` with your Music Assistant server's address. For example: `http://192.168.10.10:8098/kiosk`.
3. Tap or press a key on the kiosk page to allow audio.
4. Select the browser player in Music Assistant and start playback there.

Keep the page open and the device awake. Reloading the page requires another tap or key press before it can play sound. The browser keeps its Player ID in local storage; clearing that storage or using another browser profile creates a new identity. Closing the last connection removes the player after a five-second grace period while preserving saved Sendspin settings. A browser profile has one Sendspin identity; if different device IDs use it, the most recently registered kiosk takes ownership of the Sendspin bridge.

### URL builder

Open `http://<ma-host>:8098/` to choose the playback mode and optional additions, then copy the generated player URL. A copyable base URL is also available in the provider's **Kiosk URL** setting.

The bare `/kiosk` URL opens a Sendspin player with all additions disabled. Set `sendspin=0` to use HTML5. `/web` remains an alias for `/kiosk`; the old `kiosk=1` parameter is no longer needed.

| Parameter | Effect |
|:--|:--|
| `sendspin=0` | Use HTML5 playback instead of Sendspin |
| `controls=1` | Show playback controls; requires an MA access token |
| `party=1` | Show a QR code while a Party is active |
| `viz=1` | Show a visualizer based on stored audio analysis |
| `lyrics=1` | Show lyrics beside the artwork on wide screens, or three lines below on narrow screens |
| `queue=1` | Show the queue; requires an MA access token |
| `remote=1` | Enable arrow-key navigation and TV remote Back handling |
| `lite=1` | Reduce decorative effects and visualizer work |
| `wake_lock=1` | Request screen wake lock where the browser allows it |
| `show_player_id=1` | Show an extra selectable Player ID badge |
| `#token=<ma-access-token>` | Authorise controls and queue access with a URL fragment |
| `device_id=<unique-id>` | Set an explicit identity for this browser player |
| `sendspin_url=<sendspin-url>` | Override the Sendspin address; normally the same host on port 8927 |

For example, `http://192.168.10.10:8098/kiosk?party=1&lyrics=1` enables the Party QR and lyrics. For controls and the queue, use `http://192.168.10.10:8098/kiosk?controls=1&queue=1#token=<ma-access-token>` with your own token. The builder puts the token in a URL fragment so it is not sent in HTTP requests. The kiosk stores the token and clears it from the visible address. Treat copied URLs containing tokens as credentials. Legacy query-string tokens are still accepted and cleared when the page loads.

When no track is playing, the main title always shows the Player ID, independently of the optional badge. The subtitle shows Music Assistant and its server version. HTML5 or Sendspin artwork supplies the idle background.

The bottom-left mini-player artwork shows a Party QR when available, otherwise the Sendspin or HTML5 emblem. Click the QR to enlarge it in place of the main artwork. Click it again, or press Escape, to restore the artwork.

### Builder sign-in

Enable **Require MA sign-in for URL builder** to protect the root dashboard, URL builder, and player list. Sign in with an MA username and password or an MA access token. A token can also be used when you normally access MA through Home Assistant authentication.

Player URLs remain public. Builder sign-in does not authorise playback controls on the player page; supply the player's access token separately. Track metadata, lyrics, the visualizer, and the Party QR do not require that token.

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/), these settings are available:

| Setting | Default | Description |
|:--|:--|:--|
| HTTP port | 8098 | Port serving the kiosk and URL builder |
| Show notification when playback stops | Off | Show an informational notice after MA stops playback |
| Sendspin bridge (experimental) | On | Enable experimental Sendspin integration |
| Require MA sign-in for URL builder | Off | Protect the builder and player list |
| Kiosk URL | Read-only | Copyable base player URL |

In the [Individual Player Settings](/settings/individual-player/), the [output codec](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player) for HTML5 defaults to MP3. Choose another codec only if the browser supports it.

## Known Issues / Notes

- Reload kiosk pages after updating the provider to load the current playback protocol and browser assets.
- Browser audio needs a user gesture. If a registered player is silent, tap the kiosk page and start playback again.
- Browser compatibility varies, especially on TVs. JavaScript, WebSocket and audio playback must work. HTML5 starts without loading the Sendspin SDK. If persistent storage is blocked, identity is retained only for the current page. Background tabs and sleeping devices may interrupt playback.
- The browser must reach the kiosk port, MA's configured streaming address, and the Sendspin port when used. A custom HTTP port must also be reachable through your addon or container setup.
- Sendspin integration is experimental. Complete any pairing prompt shown by the kiosk. The bundled client supports 44.1/48 kHz, 16-bit stereo; available codecs depend on the browser. Opus and FLAC are advertised only after browser capability checks, with PCM as the baseline. If required Sendspin APIs are missing or the initial stream produces no decoded audio, the kiosk falls back to HTML5. HTTPS pages require an explicit secure `sendspin_url`; the kiosk does not assume port 8927 supports TLS.
- If the browser only supports device volume buttons, MA hides software volume controls during HTML5 playback. Active Sendspin playback retains software volume control.
- HTML5 fallback does not provide synchronised playback. HTML5 plays individual tracks with flow mode disabled and does not support crossfade.
- The visualizer requires stored audio analysis, lyrics require available lyric data, and the Party QR appears only while a Party is active.
- The queue display shows a window around the current track, including queues longer than 200 items.
- Open kiosk pages remain registered during idle periods.
- Music selection and library browsing take place in the Music Assistant interface.

Browser playback functionality previously lived in MSX Bridge and was separated from that TV-focused provider. See <a href="https://github.com/music-assistant/server/pull/5868" target="_blank" rel="noopener noreferrer">the MSX Bridge cleanup</a>.
