---
title: "ARD Sounds"
---

# ARD Sounds <img src="/assets/icons/ard-sounds.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for streaming from <a href="https://www.ardsounds.de/" target="_blank" rel="noopener noreferrer">ARD Sounds</a>. Contributed and maintained by <a href="https://github.com/jfeil" target="_blank" rel="noopener noreferrer">Jan Feil</a>

ARD Sounds (previously ARD Audiothek) is the audio platform of ARD, the group of public broadcasters in Germany. It collects radio programmes, podcasts, radio plays and documentaries from the national and regional stations, all free to listen to.

This source makes that content available inside Music Assistant. An ARD account is optional and mainly useful if you want the podcasts you follow to come across with your listening position.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media   | No |
| Media Types Supported | Radio, Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      | 
| Maximum Stream Quality | Lossy variable bitrate |
| Login Method | Device Code |

### Other

- Podcasts you follow in ARD Sounds are added to the library
- Adding or removing an ARD podcast in the Music Assistant library follows or unfollows it in your ARD account (requires the 2-way sync setting)
- Listening progress is shared with the ARD Sounds website and apps in both directions. The most recent position wins, so you can stop on one and carry on in the other
- Marking an episode as unplayed in Music Assistant removes it from your ARD Sounds listening history


## Configuration

An ARD account is optional. Without one you can still search and play everything, only following podcasts and listening progress are not shared with ARD Sounds.

To link your account, tick <b>Sign in with an ARD account</b> during setup. Music Assistant then shows a short code and a button that opens <a href="https://accounts.ard.de/" target="_blank" rel="noopener noreferrer">accounts.ard.de</a> with the code filled in. Sign in there, confirm the code, and the setup continues by itself. The code is valid for a few minutes, a new one is shown if it runs out. Music Assistant does not store your password.

If you set up ARD Sounds with an email address and password in an earlier version, open the provider settings and sign in again. ARD no longer accepts password logins from other apps.

### Settings
- <b>Sign in with an ARD account</b> Link your ARD account as described above
- <b>Maximum bitrate for streams (0 for unlimited)</b> Define the maximum stream bitrate
- <b>Percentage required before podcast episode is marked as fully played</b> Configure how much of an episode playback must occur before the episode is marked as fully played, in Music Assistant and, when signed in, in your ARD account

## Known Issues / Notes

- Podcast transcripts are not available

## Not Yet Supported

- Podcast recommendations is not implemented
- For radio streams: Current played song is not displayed
