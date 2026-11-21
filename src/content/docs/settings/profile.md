---
title: "Profile"
---

# Profile <img src="/assets/icons/profile-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

This page relates to the currently logged in user, and every user has it. At the top are your avatar, your name and your role. **Edit profile** changes your **Username**, **Display name** and **Avatar URL**, and **Sign out** signs you out. Both are hidden when Music Assistant is opened from the Home Assistant sidebar, as Home Assistant signs you in there.

## Theme and language

Both are saved to your user straight away.

- <b>Theme.</b> Allow selection of a light or dark theme. Options are `Automatic [default]`, `Light`, and `Dark`
- <b>Language.</b> Allow selection of the language used by the user interface. Options are `Auto (follow system configuration) [default]`, or a wide variety of languages. Translations are [contributed by the community](/help/lokalise/). Note that the AUTO setting takes the language from the Browser's settings. Changing it reloads the app

## Interface

Preferences that follow your user on every device.

### Preferences

- <b>Customize menu.</b> This button enables the edit mode for the menu
- <b>Prefer waveform progress bar</b> Show a waveform-style progress bar in the now playing view when audio analysis data is available for the playing track. The data comes from the [Sonic Analysis](/audio-analysis/sonic-analysis/) provider, so the bar only appears on tracks it has analysed
- <b>Show A to Z index</b> Show the letters of the alphabet vertically on the right hand side of the artists, albums and tracks views which are used to quickly jump to that starting letter of the items in the list. The index is removed if a search query is entered

### Audiobooks

- <b>Show chapter progress.</b> Shows the elapsed and remaining time of the current chapter of an audiobook or podcast episode, instead of the whole item. On by default

### Volume control

- <b>Volume slider behavior</b> Absolute (default) results in tapping or dragging the bar sets the volume to that position. Relative adjusts up or down from the current volume at half speed
- <b>Volume haptic feedback.</b> On mobile devices with vibration, enables feedback during volume changes. On by default

## This device

Settings that only apply on this device. They are kept in the browser, so another browser or device has its own.

### Display

- <b>Browser media controls.</b> Allow control of playback using the browser's and the operating system's media controls, such as keyboard media keys and lock-screen controls. `Any actively selected player` controls the player selected in Music Assistant, including speakers elsewhere in your home. `Built-in web player only [default]` controls only what the built-in web player plays on this device. `Disabled` leaves these controls alone. Device events such as a phone call, sleep, or closing a laptop lid may pause the controlled player. Not shown in the [desktop companion app](/companion-app/)
- <b>Force mobile layout.</b> The mobile layout has the menu at the bottom and has icons for HOME, and SEARCH and the remainder of the items are accessed via a single library icon
- <b>Mobile sidebar side.</b> Which side the navigation menu opens from. Default is left
- <b>Use the full screen in Home Assistant.</b> Hides the Home Assistant header and sidebar so Music Assistant gets the whole screen. The Home Assistant button in the menu brings them back. On by default. Only shown when Music Assistant is opened from the Home Assistant sidebar

### Web Player

- <b>Enable built-in (Sendspin) Web Player.</b> Allows playback to THIS DEVICE using [Sendspin](/player-support/sendspin/), MA's built-in web player. Not shown in the desktop companion app

## Security

### Change password

**Update password** sets a new password for your user. When you use Music Assistant from the Home Assistant sidebar, you need this password to sign in anywhere else.

### Active Sessions

A list of active sessions that have been logged in with this user are shown and can be logged out by using the bin icon

### Long-lived access tokens

Tokens can be created here with **Create new token**, which can be used with the [API](/api/), with external applications, or to allow frontend access from [devices that have not been logged in](/faq/how-to/#access-the-ma-views-directly-via-url).
