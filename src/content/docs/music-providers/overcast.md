---
title: "Overcast"
description: "Bring the podcasts you follow in Overcast, and how far through each episode you are, into Music Assistant."
---

# Overcast <img src="/assets/icons/overcast-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has support for <a href="https://overcast.fm" target="_blank" rel="noopener noreferrer">Overcast</a>. Contributed and maintained by <a href="https://github.com/OzGav" target="_blank" rel="noopener noreferrer">OzGav</a>

Overcast is a podcast player for iPhone, iPad and the web. It keeps the list of podcasts you follow and
remembers how far through each episode you are, so you can put an episode down on one device and pick it up
on another.

This source brings both of those into Music Assistant. The podcasts you follow turn up as podcasts you can
play, and an episode you started in Overcast can be finished on a speaker, resuming where you left off.

Overcast has no public API, so this source signs in to your account the same way the website does and reads
the account's OPML export. It works one way only, nothing Music Assistant does is sent back to Overcast.

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | Yes |
| Self-Hosted Local Media  | No |
| Media Types Supported | Podcasts |
| [Recommendations](/ui/#view---discover) Supported | No |
| Lyrics Supported | No |
| [Endless Mix](/ui/#track-menu) | No |
| Artist Top Tracks Support                       |            No                      |
| Similar Artists Support                         |            No                      |
| Similar Tracks Support                          |            No                      |
| Maximum Stream Quality | Lossy variable bitrate |
| Login Method | QR code or Password |

### Other
- Acquires progress from Overcast, but does not report progress back
- Populates libraries with podcasts
- Updates playlog on regular source syncs
- Episodes you are part way through appear under Continue Listening

## Configuration

### Overcast account

Most Overcast accounts are created in the app and have no email address or password. The quickest way to connect is to scan a code with the Overcast app on your iPhone, which links the account without needing any credentials.

If your account does have an email and password you can use those instead. Choose Overcast when adding a music source and pick the method that suits you:

- <b>Overcast app (scan a code).</b> A QR code appears on screen. Point your device's camera at it and open the link, or tap the code if you are setting up on the device itself. The Overcast app asks you to approve the connection. This is the default and works for every account, including ones that have never set up a password.
- <b>Email and password.</b> Sign in with the email address and password of your Overcast account. Only works for accounts that have set these up. Accounts that sign in to Overcast through Sign in with Apple, and accounts with two factor authentication enabled, cannot use this method.

<details>
<summary>How to add an email and password (optional)</summary>

If you prefer to sign in with a password and have not set one up yet:

1. Open the Overcast app on your iPhone or iPad
2. Go to Settings (the gear icon) and choose the `Sync Profile` option to add an email address and password to your account
3. Pick an email and password. Your existing subscriptions and listening progress stay exactly as they are, this just adds a login to the account you already have
4. To confirm it worked, visit overcast.fm in a browser and log in. If you can see your podcasts there, you're ready

</details>

Music Assistant signs in once and keeps the resulting session, so your credentials are only used when that session expires and a new sign in is needed.

### Multiple accounts

The Overcast source can be set up multiple times, once per account, and each one keeps its own sign in. To have the progress of individual media items sync with the right Music Assistant user please refer to [user management](/settings/user-management/#filter-progress-multi-user).

### Settings

- <b>Maximum number of episodes.</b> Maximum number of episodes to sync per feed. Use 0 for unlimited

## Known Issues / Notes

- Overcast limits how often the export can be downloaded, to roughly ten times a day, so Music Assistant asks for a new copy at most once every four hours no matter how often it syncs. While a new copy is on its way it keeps using the one it already has, so progress made in Overcast normally shows up within about four hours, and takes longer if you have not used Music Assistant for a while.
- Following or unfollowing a podcast in Music Assistant is not sent to Overcast. Use Overcast for that and the change will arrive at the next sync.
- Nothing you play in Music Assistant is sent back to Overcast, so the two will drift apart until you listen in Overcast again.
- When both sides know about an episode, the more recent of the two is used. Progress that arrives from Overcast never moves you backwards through an episode you have got further into in Music Assistant, and progress made in Music Assistant is kept until Overcast reports something newer.
