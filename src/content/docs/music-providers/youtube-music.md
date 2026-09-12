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

YouTube rotates account cookies frequently on open YouTube browser tabs as a security measure. To export a cookie that keeps working, export it in a way that never rotates it: always work in a private browsing/incognito window, and close that window as soon as you have the cookie. There are two ways to get it.

#### Option A: export with a cookie extension (recommended)

This is the method the yt-dlp project <a href="https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies" target="_blank" rel="noopener noreferrer">recommends</a> and it gives the longest-lived cookie. Install <a href="https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc" target="_blank" rel="noopener noreferrer">Get cookies.txt LOCALLY</a> (Chrome, Edge and other Chromium browsers) or <a href="https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/" target="_blank" rel="noopener noreferrer">cookies.txt</a> (Firefox).

> [!WARNING]
> As with any browser extension, be careful about what you install. The similarly named "Get cookies.txt" (without LOCALLY) has been reported as malware; do not use it.

1. Allow the extension in private windows, otherwise it will not appear there. In Chrome and Edge: go to `chrome://extensions` (or `edge://extensions`), open the extension's **Details** and switch on **Allow in Incognito** / **Allow in InPrivate**. In Firefox: `about:addons` → the extension → **Run in Private Windows: Allow**.
2. Open a fresh incognito window and log in to <a href="http://music.youtube.com/" target="_blank">YT Music</a>.
3. In that same tab, go to <a href="https://www.youtube.com/robots.txt" target="_blank">https://www.youtube.com/robots.txt</a>. The extension exports the cookies of the site in the current tab, so it has to be a youtube.com page — but a real YouTube page runs the scripts that rotate your session cookie, and `robots.txt` is a plain text file on the same domain that does not.
4. Click the extension's icon and choose **Export** (Chrome) or **Current Site** (Firefox). A `youtube.com_cookies.txt` (or `cookies.txt`) file is downloaded.
5. Close the incognito window, so nothing else touches that session.
6. Open the downloaded file in a text editor, select everything and copy it. That whole text is what you paste into the Login Cookie field in Step 3; Music Assistant keeps only the youtube.com cookies from it.

#### Option B: copy the Cookie header from the developer tools

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
9. Find the item named 'Cookie' and copy the **value**. Extra spaces or line breaks around the value do not matter.
[![Cookie value](/assets/screenshots/ytmusic-cookie-value.png)](/assets/screenshots/ytmusic-cookie-value.png)

> [!NOTE]
> In **Firefox** you can skip steps 7–9: right-click the request row and choose **Copy Value ▸ Copy as cURL**, then paste the whole command. Do not do this in Chrome or Edge: since early 2025 their **Copy ▸ Copy as cURL** no longer includes cookies, so the paste will be rejected as not signed in.

### Step 3: Configure the source

1. In Music Assistant, go to **Settings → Music Sources → Add a music source** and select 'Youtube Music'.
2. Fill out the fields in the Generic Settings section as follows:
    - <b>Username.</b> Use your gmail address or use a brand account (see [brand account](#using-brand-accounts))
    - <b>Login Cookie.</b> Paste what you copied in Step 2: the contents of the exported cookies.txt file, the cookie value, or (Firefox) the cURL command. Any of the three works
    - <b>PO Token Server URL.</b> Leave this setting as the default if you run the PO server as an App on the same host as the MA App. If you run the PO token server separately, adjust the IP address and port accordingly
3. Click 'Save'. Music Assistant checks the cookie with YouTube Music and contacts the PO Token server before saving, so a problem shows up right away on the field it belongs to.

> [!CAUTION]
> **Error on saving?**
>
> The message under the field tells you what to fix:
>
> - **The cookie is missing the `__Secure-3PAPISID` field.** Your paste did not come from a logged-in (authenticated) session. With Option A, check that the extension was allowed in incognito and that you were still logged in when you exported. With Option B, open a few more pages that require your account (for example your library) and copy again — and if you pasted a "Copy as cURL" command from Chrome or Edge, that is the cause: it no longer contains cookies.
> - **The cookie could not be parsed.** Something was changed or lost while copying. Copy it again and paste it exactly as the browser or extension produced it.
> - **Your YouTube Music session is no longer valid.** Google has already rotated that cookie. Export a fresh one; the incognito window must still be signed in when you do.
> - **YouTube Music did not accept this cookie.** Check that the incognito window is signed in to the right account and that no consent or 'confirm it is you' page is waiting there, then export again.
> - **The PO Token server is not reachable.** Go back to Step 1: make sure the 'YT Music PO Token Generator' app is installed and running, and that the URL points at it.
> - **YouTube Music Premium was not detected.** The cookie belongs to an account without an active YouTube Music Premium subscription. Sign in with the right account before copying.
> - **Could not fetch a test stream / could not be reached.** YouTube or the PO Token server did not answer in time. Wait a moment and click 'Save' again.
>
> The reason is also written to the Music Assistant log as `Setup of ytmusic failed:` if you need more detail.

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
- It is not possible to have more than three concurrent streams
- YouTube Music does not tell Music Assistant which disc a track is on, so tracks are simply numbered in the order they arrive. That is usually right, but a multi-disc album may come out in the wrong order
- Whether music videos are selected for playback fully depends on what you are playing. If you have saved a specific album in your library, then that exact version will show up in MA and thus you will have the album version. However, if you start a radio on, for example, a playlist, then Youtube Music decides which songs will be played in a 'dynamic radio' playlist which could include videos
- Uploaded Music should be able to be found when it is in a playlist. If it's just a single track being searched for then it may not be found, since often those uploaded songs don't have proper metadata. It will be hard to find them via the UI in MA
- Expect some blurry artwork. YouTube Music sends low quality images when Music Assistant asks for a whole album or playlist, and only sends the good one when a single track is asked for. Music Assistant works around this where it can by fetching the artwork for the next track in advance, but some of it will still look poor
- By default, only the liked music and 'episodes for later' playlists are added to the YTM library and thus will appear in MA. In order to see other personal playlists in the MA library, you have to go into the YT Music web app and add those personal playlists to your library
- Other Versions is populated on a best effort basis and may not include any or all versions of an item than can be found by manually searching
