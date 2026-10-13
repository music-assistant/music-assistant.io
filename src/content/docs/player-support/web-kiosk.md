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

Keep the page open and the device awake. Reloading the page requires another tap or key press before it can play sound. The browser keeps its Player ID in local storage; clearing that storage or using another browser profile creates a new identity. Closing the last connection removes the player after a five-second grace period.

### URL builder

Open `http://<ma-host>:8098/` to choose the playback mode and optional additions, then copy the generated player URL. A copyable base URL is also available in the provider's **Kiosk URL** setting.

The bare `/kiosk` URL opens a Sendspin player with all additions disabled. Set `sendspin=0` to use HTML5. `/web` remains an alias for `/kiosk`; the old `kiosk=1` parameter is no longer needed.

| Parameter | Effect |
|:--|:--|
| `sendspin=0` | Use HTML5 playback instead of Sendspin |
| `controls=1` | Show playback controls; requires an MA access token |
| `party=1` | Show a QR code while a Party is active |
| `viz=1` | Show a visualizer based on stored audio analysis |
| `lyrics=1` | Show up to three lyric lines when lyrics are available |
| `queue=1` | Show the queue; requires an MA access token |
| `show_player_id=1` | Show an extra selectable Player ID badge |
| `token=<ma-access-token>` | Authorise on-page controls and queue access |
| `device_id=<unique-id>` | Set an explicit identity for this browser player |
| `ma_url=<ma-web-url>` | Store the MA web interface address in the kiosk browser |
| `sendspin_url=<sendspin-url>` | Override the Sendspin address; normally the same host on port 8927 |

For example, `http://192.168.10.10:8098/kiosk?party=1&lyrics=1` enables the Party QR and lyrics. For controls and the queue, use `http://192.168.10.10:8098/kiosk?controls=1&queue=1&token=<ma-access-token>` with your own token. Treat URLs containing tokens as credentials; the kiosk also stores the token in browser storage.

When no track is playing, the main title always shows the Player ID, independently of the optional badge. The subtitle shows Music Assistant and its server version. HTML5 or Sendspin artwork supplies the idle background.

Click the Party QR beside the controls to enlarge it in place of the artwork. Click it again, or press Escape, to restore the artwork.

### Builder sign-in

Enable **Require MA sign-in for URL builder** to protect the root dashboard, URL builder, and player list. Sign in with an MA username and password or an MA access token. A token can also be used when you normally access MA through Home Assistant authentication.

Player URLs remain public. Builder sign-in does not authorise playback controls on the player page; supply the player's access token separately. Track metadata, lyrics, the visualizer, and the Party QR do not require that token.

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/), these settings are available:

| Setting | Default | Description |
|:--|:--|:--|
| HTTP port | 8098 | Port serving the kiosk and URL builder |
| Player idle timeout | 30 minutes | Unregister idle players after this period |
| Show notification before closing player | Off | Show a confirmation dialog when stopping playback from MA |
| Sendspin bridge (experimental) | On | Enable experimental Sendspin integration |
| Require MA sign-in for URL builder | Off | Protect the builder and player list |
| Kiosk URL | Read-only | Copyable base player URL |

In the [Individual Player Settings](/settings/individual-player/), the [output codec](/settings/individual-player/#output-codec-to-use-for-streaming-audio-to-the-player) for HTML5 defaults to MP3. Choose another codec only if the browser supports it.

## Known Issues / Notes

- Browser audio needs a user gesture. If a registered player is silent, tap the kiosk page and start playback again.
- Browser compatibility varies, especially on TVs. JavaScript, WebSocket, local storage, and audio playback must work. Background tabs and sleeping devices may interrupt playback.
- The browser must reach the kiosk port, MA's configured streaming address, and the Sendspin port when used. A custom HTTP port must also be reachable through your addon or container setup.
- Sendspin integration is experimental. Complete any pairing prompt shown by the kiosk. The bundled client supports 44.1/48 kHz, 16-bit stereo; available codecs depend on the browser. Without WebCodecs audio decoding, it uses FLAC/PCM.
- HTML5 fallback does not provide synchronised playback. HTML5 plays individual tracks with flow mode disabled and does not support crossfade.
- The visualizer requires stored audio analysis, lyrics require available lyric data, and the Party QR appears only while a Party is active.
- Music selection and library browsing take place in the Music Assistant interface.

Browser playback functionality previously lived in MSX Bridge and was separated from that TV-focused provider. See <a href="https://github.com/music-assistant/server/pull/5868" target="_blank" rel="noopener noreferrer">the MSX Bridge cleanup</a>.
