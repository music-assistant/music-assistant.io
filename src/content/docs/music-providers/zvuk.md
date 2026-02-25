---
title: "Zvuk Music"
---

# Zvuk Music <img src="/assets/icons/zvuk-icon.svg" alt="Preview image" style="width: 50px; float: right;" loading="lazy" />

Music Assistant has support for [Zvuk Music](https://zvuk.com). Contributed and maintained by [TrudenBoy](https://github.com/TrudenBoy).

This provider is built on top of the [zvuk-music](https://github.com/trudenboy/zvuk-music) library.

> [!CAUTION]
> This is an **unofficial** implementation with no affiliation to [Zvuk](https://zvuk.com) or its owners.

> [!NOTE]
> Full provider documentation (RU/EN): **[trudenboy.github.io/ma-provider-zvuk-music](https://trudenboy.github.io/ma-provider-zvuk-music/)**

> [!NOTE]
> A Zvuk Music subscription is required for lossless (FLAC) quality. Free accounts can stream at high quality (320 kbps) with limitations.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes (with limitations) |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](/ui/#view-home) Supported | Yes |
| Lyrics Supported | Yes |
| [Radio Mode](/ui/#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (with subscription) |
| Login Method | Token |

### Other

- Searching the Zvuk Music catalogue is possible
- Items in a users Zvuk Music library will be synced to Music Assistant
- Adding/removing items to/from the Music Assistant library will sync back to Zvuk Music
- Playlist creation and editing is supported
- Browse is available to explore the Zvuk Music catalogue
- Lyrics are displayed when available (synced line-by-line when provided by the service, otherwise plain text)
- Personalized playlists ("Плейлисты для вас") appear in the Recommendations section on the Home screen
- Similar tracks are available from the track context menu (used by Radio Mode)

## Configuration

Configuration requires obtaining an X-Auth-Token from Zvuk Music.

### Obtaining the Token

The Zvuk Music provider requires an authentication token (X-Auth-Token) from your Zvuk account.

**Steps:**

1. **Log in** to your Zvuk Music account at [zvuk.com](https://zvuk.com) using your web browser

2. **Navigate** to the profile API endpoint: [https://zvuk.com/api/tiny/profile](https://zvuk.com/api/tiny/profile)

   Your browser will display a JSON response containing your profile information and authentication token.

3. **Locate the token** in the JSON response

   The response will look similar to this:

   ```json
   {
     "user": {
       "id": 12345678,
       "email": "your@email.com",
       "token": "abc123def456ghi789jkl012mno345pqr678stu901vwx234yz",
       ...
     }
   }
   ```

4. **Copy the token value**

   - Find the line with `"token":` in the JSON
   - Copy only the alphanumeric string between the quotes (not including the quotes)
   - The token is typically a long string of random letters and numbers
   - Example token: `abc123def456ghi789jkl012mno345pqr678stu901vwx234yz`

5. **Paste the token** into Music Assistant

   - Go to Music Assistant Settings → Music Providers → Zvuk Music
   - Paste the token into the "X-Auth-Token" field
   - Save the configuration

> [!TIP]
> **Browser Display Tips**
> - **Chrome/Edge**: JSON will be formatted automatically for easy reading
> - **Firefox**: JSON appears with syntax highlighting
> - **Safari**: Enable Develop menu → Show Page Source if needed
> - **Other browsers**: If the browser downloads a file, open it with a text editor

> [!WARNING]
> **Token Security**
> Keep your token private and do not share it. Anyone with your token can access your Zvuk Music account.

### Settings

- **Audio quality**: Select preferred audio quality
    - `High (320 kbps)` - Available for all accounts (default)
    - `Lossless (FLAC)` - Requires a Zvuk Music subscription

## Known Issues / Notes

### Authentication Issues

- **Token expiration**: The token may expire and need to be refreshed periodically. If you encounter authentication errors, try obtaining a new token by following the steps above.
- **Login required**: You must be logged in to zvuk.com before accessing the profile endpoint. If you see an error or empty response, make sure you're logged in to your account first.
- **Invalid token format**: Ensure you copied the complete token value without any extra spaces, quotes, or line breaks.

### Quality Issues

- If lossless quality is unavailable (no subscription), the provider will automatically fall back to the highest available quality (320 kbps)

