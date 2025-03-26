# Apple Music Provider ![Preview image](../assets/icons/apple-music.svg){ width=70 align=right }

Music Assistant has support for [Apple Music](https://music.apple.com/)! Contributed and maintained by [MarvinSchenkel](https://github.com/MarvinSchenkel)

!!! note
    - A paid subscription is required to add this Music Provider. 
    - Audio playback is not officially supported by Apple, use at your own risk

## Features
- Support for Artists, Albums, Tracks and Playlists
- Searching the Apple Music catalogue
- Supports Radio mode. (Starting a dynamic playlist based on an Artist, Album, Track or Playlist)
- Max Quality: Lossy AAC (256kbps)

## Configuration
Authentication with Apple Music happens through a Music User Token. Unfortunately, Apple does not officially support 'Login with Apple' for Apple Music, so you will need to obtain your own Music User Token. Instructions were written for Chrome:

1. Navigate to [https://music.apple.com/](https://music.apple.com/)
2. Go to View > Developer > Developer Tools. A new side window will open.
3. Click the 'Application' tab. You might need to expand your window or click the `>>` button
  ![Preview image](../assets/screenshots/apple-music-auth-1.jpg)
4. Under Storage > Cookies, click "https://music.apple.com" and find the entry called "media-user-token"
5. Click it and copy the cookie value and use this in Music Assistant as the 'Music user token'
  ![Preview image](../assets/screenshots/apple-music-auth-2.jpg)

Note the "Expires / Max-Age" column. Your token will expire on that date and Apple Music within Music Assistant will stop working. You will have to repeat the above process to obtain a fresh token. We will try to find an unofficial way to implement 'Login with  Apple' to make it easier to authenticate with Apple Music, but until then, this is the way to authenticate.

## Known Issues / Notes
- Due to Apple's proprietary encryption (Fairplay), Lossless and Dolby Atmos versions of songs are not supported
- MA can only play an uploaded track if Apple has linked it to an online version in the Apple Music catalog. If that link is not found, MA will not do the import

## Not yet supported
- Library interaction, such as adding and removing items to your Apple Music library from within Music Assistant
