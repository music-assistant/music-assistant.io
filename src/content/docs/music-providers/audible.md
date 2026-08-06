---
title: "Audible"
---

# Audible <img src="/assets/icons/audible-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming from Audible. Contributed and maintained by <a href="https://github.com/ztripez" target="_blank" rel="noopener noreferrer">ztripez</a>

Audible is Amazon's audiobook service. A monthly credit or a direct purchase buys you a title, and everything you own stays in your account library.

Connecting your account puts that library inside Music Assistant. Where you got to in a book comes across from Audible's own apps, so you carry on from the same place.

> [!NOTE]
> A paid subscription is required for this provider

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media   | No |
| Media Types Supported | Audiobooks |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | AAC variable bitrate |
| Login Method | OAuth |

### Whispersync Progress Sync

Music Assistant syncs your listening position with Audible's Whispersync service automatically. This means:

- Resume anywhere: If you've been listening on your phone, Echo, or any other Audible device, MA will pick up from exactly where you left off when you press play.
- Keep your phone in sync: When you stop or pause in MA, your position is reported back to Audible so you can continue on any other device.

No configuration is needed — this works automatically once the Audible provider is set up.

### Other

- The Audible library can be listed
- Metadata for audiobooks will be populated
- Chapter navigation
- Multiple Audible accounts can be added.

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
