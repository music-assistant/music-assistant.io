---
title: "YouTube Music"
---

# YouTube Music Provider <img src="/assets/icons/ytm-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Youtube Music. Contributed and maintained by <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener noreferrer">MarvinSchenkel</a>

> [!WARNING]
> **DISCLAIMER**
>
> Please note that Youtube does not offer an official API to retrieve data and streams. This means that everything is built on a best-effort basis. Unexpected behavior will occur whilst using this provider. For this reason if you have another streaming provider you may find it more convenient to use that instead of this one.

> [!NOTE]
> Free accounts are NOT supported.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts |
| [Recommendations](../ui#view-home) Supported | Yes |
| Lyrics Supported | No |
| [Radio Mode](../ui#track-menu) | Yes |
| Maximum Stream Quality | Lossy, AAC (256kbps) |
| Login Method | Token + Cookie |

### Other
- Searching the YouTube Music catalogue
- The highest available stream from Youtube Music will be selected for playback (similar to configuring 'high' in the web-app)

## Configuration

As of Nov 2024, Google has removed OAuth authentication from YT Music. This means using this (somewhat cumbersome) method of cookie authentication is the **only** way to get YT Music working.

> [!NOTE]
> Cookies will expire after some time. This means that you will have to run this process again if YT Music stops working and you see `401: Unauthorized` or `Unable to fetch PO Token for web_music client` in the MA log. Maximise the cookie life by using this <a href="https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies" target="_blank" rel="noopener noreferrer">method to obtain the cookie</a>

> [!NOTE]
> If a Family Account is in use then setting up a dedicated account for MA will assist in maximising cookie life
    
### Obtaining the Cookies
YouTube rotates account cookies frequently on open YouTube browser tabs as a security measure. To export cookies that will remain working, you will need to export cookies in such a way that they are never rotated. One way to do this is through a private browsing/incognito window.

- Open <a href="http://music.youtube.com/" target="_blank">YT Music</a> in your browser in an incognito window.
- Open the developer tools via View -> Developer -> Developer Tools. Note that this might be named differently based on your browser. It should open a window similar to this:
[![Dev tools](/assets/screenshots/ytmusic-developer-tools.png)](/assets/screenshots/ytmusic-developer-tools.png)

- Navigate to the 'Network' tab
- In the filter bar, type "/browse"
- Now navigate to a page in YT Music that requires authentication, for example, on of your library playlists
- A request will show-up in the table:

[![Auth request](/assets/screenshots/ytmusic-auth-request.png)](/assets/screenshots/ytmusic-auth-request.png)

- Click the request and make sure you are on the 'Headers' tab
- Find the section called 'Request Headers'
- Find the item named 'Cookie' and copy the **value**. It is **VERY** important that you copy the exact value. Double check that you do not include any additional spaces or characters at the start/end of the value
[![Cookie value](/assets/screenshots/ytmusic-cookie-value.png)](/assets/screenshots/ytmusic-cookie-value.png)

### Installing the PO Token addon
As of March 2025, Google has implemented a new security mechanism called 'PO Tokens' (Proof of Origin). Music Assistant will not be able to resolve stream urls for your music without a valid PO Token. Luckily, we can automatically generate this for you, but you will need to install an add-on (also available as a docker image) for this.

- Within Home Assistant, go to Settings > Add-ons > Add-on Store
- Scroll down to the 'Music Assistant' section.
- A new add-on called 'YT Music PO Token Generator' is available.
- Install this add-on and make sure it is started before adding the YT Music provider within Music Assistant

> [!NOTE]
> If you are hosting Music Assistant yourself, you can download the Docker file for the PO Token server <a href="https://github.com/Brainicism/bgutil-ytdlp-pot-provider" target="_blank" rel="noopener noreferrer">here</a> but you must run the version currently supported by MA which is 1.2.1. Install the correct version and run it, then return to Music Assistant and add the URL to the PO token server when configuring the YT Music Provider.

### Configuring the provider 
- Navigate to 'Settings'
- Under Music Providers, click 'Add new', select 'Youtube Music' and fill out the fields in the Generic Settings section as follows:
    - <b>Username.</b> Use your gmail address or use a brand account (see [brand account](#using-brand-accounts))
    - <b>Login Cookie.</b> Paste the value obtained above
    - <b>PO Token Server URL.</b> Leave this setting as the default if running the PO server as an add-on on the same host as the MA add-on. If running the PO token server separately then adjust the IP address and port accordingly
- Click 'Save'

> [!CAUTION]
> **Error on Saving**
>
> If `__Secure-3PAPISID` is seen after saving this means the cookie is not from an authenticated request. Navigate to some more pages inside YT Music that require authentication (e.g. your library). To confirm the right cookie has been obtained paste it into a text editor and search for "__Secure-3PAPISID". If difficulties are encountered obtaining a cookie with this value, try a different browser.

## Using brand accounts
A brand account is a sub-account that lives under your main Google account. You need to find your brand account id if you want to login using your brand account.

- Go to <a href="https://myaccount.google.com/" target="_blank>https://myaccount.google.com/</a>
- From the top right menu, select your brand account
- Look at the URL and copy the 21-digit number
- Use this number in the 'Username' field when setting up the provider

## Known Issues / Notes

- This provider mimics YouTube Music. Do not expect to see the same search results as you see if using YouTube
- There is no support for the disc and track number in album tracks listings. Currently, the disc number is always 0 and the track number is the order number in which the tracks were returned by Youtube Music. This should generally give the desired result, but could mess up multi-disc albums
- Whether music videos are selected for playback fully depends on what you are playing. If you have saved a specific album in your library, then that exact version will show up in MA and thus you will have the album version. However, if you start a radio on, for example, a playlist, then Youtube Music decides which songs will be played in a 'dynamic radio' playlist which could include videos
- Uploaded Music should be able to be found when it is in a playlist. If it's just a single track being searched for then it may not be found, since often those uploaded songs don't have proper metadata. It will be hard to find them via the UI in MA
- Some low quality artwork can be expected when using this provider. YTM is very inconsistent when it comes to delivering thumbnails. When a Playlist or album is retrieved, the thumbs for the tracks are usually in low quality for all songs. However, when a single track is played the HQ version should be displayed. This provider tries to work around the problem for albums and playlists by loading details for the next enqueued track, but some low quality album art is still expected to be encountered
- By default, only the liked music and 'episodes for later' playlists are added to the YTM library and thus will appear in MA. In order to see other personal playlists in the MA library, you have to go into the YT Music web app and add those personal playlists to your library
