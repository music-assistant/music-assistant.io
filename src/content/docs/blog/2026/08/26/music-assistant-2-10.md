---
head:
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/08/26/music-assistant-2-10"
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/08/26/music-assistant-2-10"
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Music Assistant 2.10: Turn up the fun"
  - tag: meta
    attrs:
      property: "og:image:title1"
      content: "What’s new in"
  - tag: meta
    attrs:
      property: "og:image:title2"
      content: "Music Assistant 2.10"
  - tag: meta
    attrs:
      property: "og:image:author"
      content: "Marvin Schenkel"
  - tag: meta
    attrs:
      property: "og:image:category"
      content: "Announcements"

title: "Music Assistant 2.10: Turn up the fun"
description: "Music Assistant 2.10 is here! A polished new player bar, smarter queues, a built-in music quiz and your very own AI Radio DJ. Press play ▶️"
cover:
    image: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/2026/08/26/music-assistant-2-10"
    alt: "Music Assistant 2.10: Turn up the fun"
excerpt: "Grab your air guitar and warm up those vocal cords, because Music Assistant is back with version 2.10! 🎸 Over the past three months, we’ve been jamming with the community on a release that’s all about playing – smoother controls, smarter queues, and a full-blown game night built right into your speakers."
date: 2026-08-26T00:00:00.000Z
authors:
  - marvin
tags:
  - release
  - announcement
---

Grab your air guitar and warm up those vocal cords, because Music Assistant is back with version 2.10! 🎸 Over the past three months, we’ve been jamming with the community on a release that’s all about *playing* – smoother controls, smarter queues, and a full-blown game night built right into your speakers.

You might have noticed this release is a little early this time around. That’s because we’re gearing up for our first-ever booth at <a href="https://www.openhomefoundation.org/blog/ifa-berlin-2026-save-the-date/" target="_blank" rel="noopener">IFA Berlin</a> (September 4 to 8), and wanted to share 2.10 with you before we hit the road. If you’re heading to the show, come find us at stand 153 in the Smart Home Hall – we’d love to say hi!

As always, there’s far more packed into this release than one blog can hold, so consider this the greatest hits. For the full discography, check the release notes at the end and let us know your favorite features in the comments. Kicking off the setlist: a new way to play…

<!--more-->

## “I’ve Got the Power”

**A redesigned player bar**

<img src="/images/blog/2026/08/26/music-assistant-2-10/image1.webp" alt="Screen recording of the redesigned player bar in Music Assistant, showing album art, track info, and playback controls as the user interacts with them.">

*Select, group, and turn it up 🎚️*

Controlling your players should feel as effortless as tapping your foot to the beat. In 2.10, the player bar has been upgraded and simplified, now built around three clear actions: select your player, group your speakers, and change the volume. No more hunting through menus – the controls you reach for most are now front and center on desktop and mobile, with responsive floating controls for grouping and volume by <a href="https://github.com/erioldoesdesign" target="_blank" rel="noopener">@erioldoesdesign</a> and <a href="https://github.com/marcelveldt" target="_blank" rel="noopener">@marcelveldt</a>.

Developing this feature was a great example of *building in the open*. The idea started as a <a href="https://www.figma.com/design/0EJf99xReC4253VWNzARWn/Player-drawer-and-selection-and-interactions?node-id=488-3739" target="_blank" rel="noopener">Figma design</a> that we shared with the community early in the process. We gathered feedback during the design phase, and refined together before a single line of code was written. The result is a player bar shaped by the people who actually use it, for a smoother day-to-day listening experience. And we didn’t stop there... Cue: smarter shuffling.

## “Everyday I’m Shufflin’”

**Queue improvements and Smart Shuffle**

<img src="/images/blog/2026/08/26/music-assistant-2-10/image2.webp" alt="Screenshot of the Music Assistant now-playing screen showing ‘I Just Might’ by Bruno Mars, from the album ‘I Just Might,’ with album art and a waveform progress bar. An ‘Up Next’ queue with Autoplay enabled lists several upcoming tracks. Playback controls for shuffle, previous, pause, next, and repeat appear at the bottom, along with a volume slider and the connected speaker, ‘Voice PE Office #1.’">

*Keep the music flowing, straight from your queue.*

The queue got a serious tune-up in 2.10 with two features that keep the music flowing long after your playlist runs dry.

First up: **Autoplay** is now fully configurable. When your queue reaches its final track, Music Assistant can keep the music playing with similar songs, a mix from your own library, or a playlist of your choosing. And because library mode works entirely offline, you no longer need a streaming provider to enjoy endless music.

Then there’s **Smart Shuffle**, which fixes the age-old annoyance of hearing the same songs “randomly” played on repeat 🙃 Smart Shuffle uses your listening history to push recently played tracks to the back of the queue to keep things fresh. It can also handle multiple sources at once: queue two albums and two playlists together, and Smart Shuffle grabs tracks from all of them on the fly, mixing as it goes instead of building one enormous queue up front. Both features come courtesy of <a href="https://github.com/marcelveldt" target="_blank" rel="noopener">@marcelveldt</a>.

Best of all, you no longer need to dig through settings to use them: Smart Fades and Autoplay can now be toggled directly from the queue screen. A single tap gets the music mixing, and Sendspin’s making sure no one else can reach your stream...

## “U Can’t Touch This”

**Stop, Sendspin time**

Sendspin is approaching its official v1 release, with the last big hurdle now behind us thanks to <a href="https://github.com/arturpragacz" target="_blank" rel="noopener">@arturpragacz</a>. Your music can now travel encrypted from Music Assistant to your speakers, keeping it for your ears only.

It also works in reverse: any Sendspin device can now stream audio *into* Music Assistant, which then distributes it to your other speakers. So a turntable in the living room, for example, could stream to any speaker in the house. While no device supports this yet, Music Assistant has everything ready for the first one that does. Speaking of putting pieces in place, fancy a feature that turns your tracks into a game?

## “You Puzzle Me”

**Where trivia meets your music**

<img src="/images/blog/2026/08/26/music-assistant-2-10/image3.webp" alt="Screenshot of the Music Timeline game mode in Music Assistant’s Music Quiz plugin. A player named Marvin has a score of 0 with a 7-second countdown showing. The prompt reads “Where does this song belong?” with instructions to place the playing song on a timeline from older to newer. Two previously placed songs are shown as timeline entries: “Easier To Love” by Bastian/Brooklyn Barry (2021) and “I Knew That” by Sky Is So Blue (2023, marked “Another”). Buttons let the player place the current song “Before 2021,” “Between 2021 and 2023,” or “After 2023.”">

*Game night just got an upgrade.*

Think you know your music? Time to prove it 😏 Music Assistant 2.10 ships with a brand-new **Music Quiz** plugin by <a href="https://github.com/TimoPtr" target="_blank" rel="noopener">@TimoPtr</a> – a multiplayer party game played right on your speakers, with three game modes:

* **Guess the song:** a track starts playing and everyone races to name it – the faster you answer, the more points you score.
* **Music timeline:** place songs in the right spot on a timeline. Was that hit from ’87 or ’92? Prepare for heated family debates.
* **Music trivia:** put your music knowledge to the test with questions about artists, albums and more.

Hosting is delightfully simple: pick your playlists, start a game, and your guests scan a QR code to join from their own phones – no app downloads, no accounts. Play venue-style with one speaker filling the room, or use remote mode to start a silent disco, with every person listening together on their own device 🎧 And for those who’d rather listen solo, we made something for you too.

## “Last Night a DJ Saved My Life”

**Your very own AI Radio DJ**

<img src="/images/blog/2026/08/26/music-assistant-2-10/image4.webp" alt="Screenshot of the AI Radio DJ configuration screen in Music Assistant, titled “Morning show.” A Personality section includes fields for host name, host and program instructions describing a warm, energetic morning show persona, plus dropdowns for voice and language. Below, a Segments section lists configurable radio segments including “Intro” (set to play once at start) and “Transition” (set to play every 3 songs), with a blue “Save host” button in the top right.">

*The DJ that never sleeps 🎙️*

Remember the golden age of radio, when a DJ introduced every track, gave you the weather, and kept you company on the drive home? It’s back – and this time, the DJ lives on your server. With the new **AI Radio DJ** plugin by <a href="https://github.com/swiftbird07" target="_blank" rel="noopener">@swiftbird07</a>, Music Assistant combines LLMs and text-to-speech to turn any playlist into a real radio station.

You define your own station: song intros and outros, weather reports, news bulletins – it’s all configurable, right down to how often a segment appears between songs. Pre-build a whole station ahead of time, or let it generate each segment as you go for whatever’s in your queue.

## “You Ain’t Seen Nothing Yet”

**The hits just keep on coming**

Here’s a rundown of everything else in 2.10:

**New music sources**

* **Pocket casts:** sync your podcast subscriptions (by <a href="https://github.com/yfhyou" target="_blank" rel="noopener">@yfhyou</a>)
* **Overcast:** your Overcast podcasts in MA (by <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a>)
* **Storytel:** stream your Storytel audiobooks (by <a href="https://github.com/jonasbp2011" target="_blank" rel="noopener">@jonasbp2011</a>)
* **Sveriges Radio:** tune into Swedish public radio (by <a href="https://github.com/romany" target="_blank" rel="noopener">@romany</a>)
* **ABC Radio Network:** listen to Australian radio stations (by <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a>)
* **Mamma Mi Radio:** hand-curated eclectic internet radio (by <a href="https://github.com/florianhorner" target="_blank" rel="noopener">@florianhorner</a>)
* **Google Drive:** stream your cloud music library (by <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a>)
* **OneDrive:** play music from Microsoft OneDrive (by <a href="https://github.com/OzGav" target="_blank" rel="noopener">@OzGav</a>)
* **Ambient sounds:** locally generated noise loops (by <a href="https://github.com/marcelveldt" target="_blank" rel="noopener">@marcelveldt</a>)
* **Rainy mood:** relax with soothing rain sounds (by <a href="https://github.com/jlpouffier" target="_blank" rel="noopener">@jlpouffier</a>)
* **teddycloud:** connect your Toniebox via teddycloud (by <a href="https://github.com/yoyixms" target="_blank" rel="noopener">@yoyixms</a>)

**New player support**

* **Bose SoundTouch:** control your SoundTouch speakers (by <a href="https://github.com/Odn0" target="_blank" rel="noopener">@Odn0</a>)
* **Yandex Station:** local control of Yandex speakers (by <a href="https://github.com/trudenboy" target="_blank" rel="noopener">@trudenboy</a>)
* **AmpliPi:** multi-zone whole-house audio support (by <a href="https://github.com/mcaulifn" target="_blank" rel="noopener">@mcaulifn</a>)

**Other new features**

* **Cast dashboards:** some pages, such as the now playing screen and the party dashboard can be cast as dashboards (by <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener">@MarvinSchenkel</a>)
* **Guided setup flows:** step-by-step provider and player setup (by <a href="https://github.com/marcelveldt" target="_blank" rel="noopener">@marcelveldt</a>)
* **Smarter Smart Fades:** vocal and energy aware transitions (by <a href="https://github.com/MarvinSchenkel" target="_blank" rel="noopener">@MarvinSchenkel</a>)
* **Milkdrop visualizer:** great visuals for your music (by <a href="https://github.com/jozefKruszynski" target="_blank" rel="noopener">@jozefKruszynski</a>)
* **Sleep timers:** doze off, playback stops automatically (by <a href="https://github.com/teancom" target="_blank" rel="noopener">@teancom</a>)
* **Audiobook collections:** organize series into tidy collections (by <a href="https://github.com/fmunkes" target="_blank" rel="noopener">@fmunkes</a>)
* **Audible Whispersync:** resume audiobooks across your devices (by <a href="https://github.com/scootaash" target="_blank" rel="noopener">@scootaash</a>)
* **Birthday recommendations:** celebrate artists born this day (by <a href="https://github.com/dmoo500" target="_blank" rel="noopener">@dmoo500</a>)
* **Playlist artwork:** auto-generated covers for your playlists (by <a href="https://github.com/dmoo500" target="_blank" rel="noopener">@dmoo500</a>)

Want the full list? Head over to the <a href="https://github.com/music-assistant/server/releases/tag/2.10.0" target="_blank" rel="noopener">release notes</a> for everything that’s new 👀

## “The Show Must Go On”

**See you at the next gig**

Music Assistant 2.10 brings queue improvements, Smart Shuffle, game mode, and more into play – all ready for your next listening session. New around here? Our [getting started guide](/) will have you up and running in no time.

As always, releases run on a three-month cadence, and the next one is already in the works. For a look backstage, join <a href="https://discord.com/channels/753947050995089438/1083643113484070953" target="_blank" rel="noopener">our beta channel</a> to test new features as we build them, or share your ideas on the <a href="https://github.com/orgs/music-assistant/discussions/categories/feature-requests-and-ideas" target="_blank" rel="noopener">feature requests page</a>. And if you just want to say hi, head over to <a href="https://discord.com/invite/kaVm8hGpne" target="_blank" rel="noopener">Discord</a> – our door’s always open.

Finally, no gig is complete without swinging by the merch table on your way out. The <a href="https://store.openhomefoundation.org/" target="_blank" rel="noopener">Open Home Foundation store</a> just dropped new <a href="https://store.openhomefoundation.org/shop/t-shirts" target="_blank" rel="noopener">T-shirts</a> featuring Music Assistant, ESPHome, and a fresh Home Assistant design, all in classic black. They are versatile, built to last, and best of all, every purchase helps fund the foundation’s work. Grab yours from the store to wear your support!
