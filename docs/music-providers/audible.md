# Audible Provider ![Preview image](../assets/icons/audible-icon.png){ width=70 align=right }

Music Assistant has support for streaming from Audible. Contributed and maintained by [ztripez](https://github.com/ztripez)

!!! note
    A paid subscription is required for this provider

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Local Streaming   | No |
| Media Types Supported | Podcasts |
| Recommendations Supported | No |
| Lyrics Supported | No |
| [Radio Mode](https://www.music-assistant.io/ui/#track-menu) | No |
| Maximum Stream Quality | Lossy, AAC Variable Bitrate |
| Login Method | OAuth |

### Other

- The Audible library can be listed
- Metadata for audiobooks will be populated
- Playback can be resumed from the last position reported by Audible
- Chapter navigation

## Configuration

To set up the Audible provider, follow these steps:

1. Select the appropriate marketplace for your Audible account from the available options.
2. Click the "Authenticate with Audible" button to start the authentication process. This will open a new window redirecting you to Audible for authentication. Make sure to disable any popup blockers.
3. After successful login, you will see a "page not found" message. This is expected. Copy the URL from the address bar and paste it into the "Post Login Url" textbox.
4. Click the "Verify Audible URL" button to check the URL and register the provider.

Note: If you need to re-authenticate or change the marketplace, you will have to go through the authentication process again.

## Known Issues / Notes

- Last playback position is not currently reported back to Audible
- Switching marketplaces requires re-authentication
- The provider will be registered as a device on Audible. If you remove the provider, it will deregister the device
- While there haven't been any issues with the number of registered devices during development, it's worth noting that Audible has various content license requirements. If a user has material with a device license restriction then having many registered devices might cause issues

## Not Yet Supported

- Browsing capabilities by author, narrator, series, etc
- Search functionality
- Podcasts, attached files, and other services not directly related to audiobooks
