---
title: "YouTube"
---

# YouTube Provider <img src="/assets/icons/youtube-icon.svg" alt="YouTube icon" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for YouTube. This provider plays audio from YouTube videos using yt-dlp and does not require a YouTube Music account.

> [!NOTE]
> This provider is currently in **Beta**. Unexpected behavior may occur.

> [!WARNING]
> **DISCLAIMER**
>
> YouTube does not offer an official API for streaming audio. Stream extraction is handled by yt-dlp on a best-effort basis. If you have a dedicated music streaming provider, you may find it more reliable for everyday use.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Maximum Stream Quality | Lossy (best available via yt-dlp) |
| Login Method | None (optional API Key + Cookie) |

### Other
- Searching the YouTube catalogue for tracks, channels, and playlists
- YouTube channels are mapped as Artists in search
- YouTube playlists are mapped as both Playlists in search and Albums in artist view
- Live stream support (HLS)
- Automatically installs and updates yt-dlp on startup for maximum compatibility

## Configuration

No account or login is required. The provider works out of the box using anonymous yt-dlp access.

- Navigate to Settings
- Under Music Providers, click 'Add new' and select 'YouTube'
- Click 'Save'

### Optional: YouTube Data API Key

For improved search quality and reliability, you can provide a YouTube Data API v3 key. When configured, the provider will use the official API first and fall back to yt-dlp scraping if the API call fails or quota is exceeded.

1. Go to the <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer">Google Cloud Console</a>
2. Create a new project (or select an existing one)
3. Enable the **YouTube Data API v3**
4. Create an API key under Credentials
5. Paste the key into the **YouTube Data API Key** field in the provider settings

### Optional: YouTube Cookie

To enable playback of age-restricted or member-only content, you can provide a YouTube cookie.

- Both Netscape `cookies.txt` format and raw browser DevTools cookie header format are supported
- Open YouTube in your browser, log in, then export your cookies using a browser extension or the DevTools Network tab (copy the `Cookie` header value)

> [!NOTE]
> Cookies expire over time and will need to be refreshed periodically if playback of restricted content stops working.

### Settings

| Setting | Default | Description |
|---------|---------|-------------|
| YouTube Data API Key | _(empty)_ | Optional API key for improved search and metadata |
| Artist Playlist Limit | 25 | Maximum number of channel playlists returned as albums per artist (1-100) |
| YouTube Cookie | _(empty)_ | Optional cookie for age-restricted or member-only content |

## Known Issues / Notes

- Stream URLs for regular videos expire after approximately 1 hour. Live stream URLs expire after approximately 5 minutes
- When no API key is configured, all metadata is obtained via yt-dlp web scraping, which may be less reliable during periods of YouTube changes
- Only one instance of this provider can be configured at a time
- This provider is separate from the YouTube Music provider. It accesses regular YouTube, not YouTube Music
