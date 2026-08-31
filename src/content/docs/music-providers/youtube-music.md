---
title: "YouTube Music"
---

# YouTube Music <img src="/assets/icons/ytm-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for Youtube Music. Contributed and maintained by <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener noreferrer">MarvinSchenkel</a>

YouTube Music is Google's streaming service, built on top of YouTube itself. As well as the usual catalogue it reaches material uploaded to YouTube, so live sets, covers and rarities that other services do not carry are often there.

With your account connected, your library and playlists appear in Music Assistant and the catalogue can be searched.

> [!WARNING]
> **DISCLAIMER**
>
> Please note that Youtube does not offer an official API to retrieve data and streams. This means that everything is built on a best-effort basis. Unexpected behavior will occur whilst using this source. For this reason if you have another streaming source you may find it more convenient to use that instead of this one.

> [!NOTE]
> Free accounts are NOT supported.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Self-Hosted Local Media | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | Yes |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | Yes |
| Artist Top Tracks Support                       |            Yes                     |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            Yes                      |
| Maximum Stream Quality | AAC 256kbps |
| Login Method | Token + Cookie |

### Other
- Searching the YouTube Music catalogue
- The highest available stream from Youtube Music will be selected for playback (similar to configuring 'high' in the web-app)

## Configuration

Cookie authentication is the **only** way to get YT Music working; Google does not support any other login method for third party apps. The process is somewhat cumbersome, but you only need to repeat it when the cookie expires. Setup has three parts: install the PO Token app, obtain your login cookie, then configure the source.

> [!NOTE]
> Cookies expire after some time. If YT Music stops working and you see `401: Unauthorized` or `Unable to fetch PO Token for web_music client` in the MA log, run the cookie steps again

> [!NOTE]
> If you use a Family Account, setting up a dedicated account for MA will help maximise cookie life

### Step 1: Install the PO Token app

Google will not let anything play until it has been given a 'Proof of Origin' token, which is its way of checking the request came from a real YouTube app. This small piece of software produces those for Music Assistant in the background, and you never have to touch it again once it is running. Install it before adding the YT Music source:

1. In Home Assistant, go to `Settings >> Apps >> Install app`.
2. Scroll down to the 'Music Assistant' section.
3. Install the app called 'YT Music PO Token Generator' and make sure it is started.

> [!NOTE]
> If you host Music Assistant yourself, download the Docker file for the PO Token server <a href="https://github.com/Brainicism/bgutil-ytdlp-pot-provider" target="_blank" rel="noopener noreferrer">here</a>. You must run the version currently supported by MA, which is 1.2.1. Install and run the correct version, then add its URL when configuring the YT Music source in Step 3.

### Step 2: Obtain your login cookie

YouTube rotates account cookies frequently on open YouTube browser tabs as a security measure. To export a cookie that keeps working, export it in a way that never rotates it. One way to do this is through a private browsing/incognito window:

1. Open <a href="http://music.youtube.com/" target="_blank">YT Music</a> in your browser in an incognito window and log in to your account.
2. Open the developer tools via View -> Developer -> Developer Tools. Note that this might be named differently based on your browser. It should open a window similar to this:
[![Dev tools](/assets/screenshots/ytmusic-developer-tools.png)](/assets/screenshots/ytmusic-developer-tools.png)
3. Navigate to the 'Network' tab.
4. In the filter bar, type "/browse". Reload the page if no results are shown.
5. Now navigate to a page in YT Music that requires authentication, for example, one of your library playlists.
6. A request will show up in the table:

[![Auth request](/assets/screenshots/ytmusic-auth-request.png)](/assets/screenshots/ytmusic-auth-request.png)

7. Click the request and make sure you are on the 'Headers' tab.
8. Find the section called 'Request Headers'.
9. Find the item named 'Cookie' and copy the **value**. It is **VERY** important that you copy the exact value. Double check that you do not include any additional spaces or characters at the start/end of the value.
[![Cookie value](/assets/screenshots/ytmusic-cookie-value.png)](/assets/screenshots/ytmusic-cookie-value.png)

> [!NOTE]
> If your cookie still expires quickly, the yt-dlp project documents an <a href="https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies" target="_blank" rel="noopener noreferrer">alternative export method</a> aimed at maximising cookie life. It is written for users of the yt-dlp tool, so expect a more technical walkthrough

### Step 3: Configure the source

1. In Music Assistant, go to **Settings → Music Sources → Add a music source** and select 'Youtube Music'.
2. Fill out the fields in the Generic Settings section as follows:
    - <b>Username.</b> Use your gmail address or use a brand account (see [brand account](#using-brand-accounts))
    - <b>Login Cookie.</b> Paste the value you copied in Step 2
    - <b>PO Token Server URL.</b> Leave this setting as the default if you run the PO server as an App on the same host as the MA App. If you run the PO token server separately, adjust the IP address and port accordingly
3. Click 'Save'.

> [!CAUTION]
> **Error on saving?**
>
> If the error mentions `__Secure-3PAPISID`, your cookie did not come from a logged-in (authenticated) request. Go back to the incognito window, open a few more pages that require your account (for example your library), and copy the cookie again. You can check a cookie before saving it: paste it into a text editor and search for `__Secure-3PAPISID`; the right cookie contains this value. If you cannot obtain a cookie containing this value, try a different browser.

### Settings

Refer to the [Library Import Control](/music-providers/#library-import-control) settings.

## Using brand accounts
A brand account is a sub-account that lives under your main Google account. You need to find your brand account id if you want to login using your brand account.

- Go to <a href="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/</a>
- From the top right menu, select your brand account
- Look at the URL and copy the 21-digit number
- Use this number in the 'Username' field when setting up the source

## Known Issues / Notes

- This source mimics YouTube Music. Do not expect to see the same search results as you see if using YouTube
- YouTube Music does not tell Music Assistant which disc a track is on, so tracks are simply numbered in the order they arrive. That is usually right, but a multi-disc album may come out in the wrong order
- Whether music videos are selected for playback fully depends on what you are playing. If you have saved a specific album in your library, then that exact version will show up in MA and thus you will have the album version. However, if you start a radio on, for example, a playlist, then Youtube Music decides which songs will be played in a 'dynamic radio' playlist which could include videos
- Uploaded Music should be able to be found when it is in a playlist. If it's just a single track being searched for then it may not be found, since often those uploaded songs don't have proper metadata. It will be hard to find them via the UI in MA
- Expect some blurry artwork. YouTube Music sends low quality images when Music Assistant asks for a whole album or playlist, and only sends the good one when a single track is asked for. Music Assistant works around this where it can by fetching the artwork for the next track in advance, but some of it will still look poor
- By default, only the liked music and 'episodes for later' playlists are added to the YTM library and thus will appear in MA. In order to see other personal playlists in the MA library, you have to go into the YT Music web app and add those personal playlists to your library
- Other Versions is populated on a best effort basis and may not include any or all versions of an item than can be found by manually searching
