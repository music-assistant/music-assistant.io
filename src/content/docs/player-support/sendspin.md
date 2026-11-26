---
title: "Sendspin"
---

# Sendspin <img src="/assets/icons/sendspin-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

<a href="https://www.sendspin-audio.com/" target="_blank" rel="noopener noreferrer">Sendspin</a> is Music Assistant's own way of sending audio to a player. It keeps several devices playing in sync with each other, closely enough that the same track can play in more than one room without any echo between them.

It is built into Music Assistant and switched on from the start, so there is nothing to install. The web player you use in your browser is a Sendspin player, and Sendspin speakers and apps appear on their own once they are on your network.

AirPlay and Squeezelite players (including Squeezebox hardware) can be grouped with Sendspin speakers and play in sync. Cast speakers can join too, see [Sendspin on Cast devices](/player-support/google-cast/#sendspin-on-cast-devices). If a device supports more than one of these, it gets one Sendspin output, and Music Assistant uses Squeezelite first, then AirPlay, then Cast for it. To make it use a different one, switch off the one you don't want in that player's [output protocol settings](/settings/individual-player/#output-protocols). When it moves, the output keeps its settings, but each of these protocols keeps its own sync delay. When Cast takes it over, it is switched off until you turn it on in those settings, as Sendspin on Cast is experimental. It does not move while the speaker is powered off or out of reach.

Sendspin was developed by the <a href="https://www.openhomefoundation.org/" target="_blank" rel="noopener noreferrer">Open Home Foundation</a> and is free for anyone to build on, so the range of devices and apps that support it is growing.

To bring audio from a compatible Sendspin line-in, microphone, or other input into Music Assistant, see the [Sendspin Source plugin](/plugins/sendspin-source/).

> [!CAUTION]
> **Technical Preview**
>
> Sendspin is still in technical preview. It works, but expect it to change.
    
## Features

- **Synchronised multi-room audio**: every connected device stays in step
- **Automatic discovery**: Sendspin devices on your network are found on their own
- **Per-player audio settings**: each device gets its own equaliser and volume
- **Control from the device**: play, pause and skip can be driven from the player as well as from Music Assistant
- **Track information**: title, artwork and progress appear on every device
- **Stereo pairs and subwoofers**: Sendspin speakers can play as one player, as a stereo pair or together with a subwoofer, see [Stereo Pairs](#stereo-pairs)

## Configuration

The Sendspin provider is **built-in and always enabled**. There are no configuration options required to get started.

Individual Sendspin players will appear automatically when clients connect. A Sendspin device that only controls playback, such as a remote or a volume knob, is listed under **Controllers** on [Settings → Players](/settings/individual-player/), and is not something you play to.

## Setting Up a Device

A device that allows guest access, which means connecting without pairing, is ready to play to as soon as it is found. A device that only accepts pairing, a device with an audio input, and a device that another server is using show <b>Setup required</b> until you set them up here. Select the player, or press <b>Start setup</b> in its settings:

- <b>Connect unpaired.</b> Only offered when the device allows guest access. Quick, but the connection is not verified. A device with an audio input offers <b>Connect unpaired with audio input</b> instead, and <b>Connect unpaired without audio input</b> if it can also play
- <b>Pair device.</b> Sets up a permanent, verified connection using the pairing code the device gives you. A device without a pairing code gives you a pairing token instead

When you pair a device or connect it with its audio input, and its line-in can report when a signal is present, setup then asks where that line-in should play automatically. This is the same choice as the <b>Automatically play line-in on</b> setting below.

To pair a device you connected unpaired, use <b>Reconfigure player</b>. Bridged players and the built-in web player have nothing to set up.

## Settings

In addition to the [Player Support Settings](/settings/player-provider/) when setting up this provider the following settings are available:

- <b>Manual IP addresses for discovery.</b> Sendspin players are normally found on their own. If yours is not, add its IP address or network name here, for example 192.168.1.50 or speaker.local. Music Assistant will then connect to it directly, and keep trying if the device is switched off when MA starts
- <b>Allow legacy clients.</b> On by default. Lets devices and apps that use an older version of Sendspin connect, including ones without encryption (see [Older Devices](#older-devices)). Turned off, only devices and apps that follow the current version of the Sendspin specification connect, and most need an update first. A device or app that is not up to date may go silent for the rest of the current track when you change the track that plays next. Players then get the queue one track at a time, so a track can change the sample rate without restarting the stream, and title, artwork and progress change the moment the track starts. Only shown while <b>Show advanced settings</b> is on

Sendspin does not stream over HTTP, so of the [settings shared by most protocols](/settings/individual-player/#settings-shared-by-most-protocols) these players show only **Output Channel Mode**, plus their own version of the sample rate setting described below. In addition to the standard [Individual Player Settings](/settings/individual-player/), Sendspin players have the following:

- <b>Security status.</b> The Sendspin settings of each device start with its security state: paired, connected through guest access, connected without encryption (see [Older Devices](#older-devices)), or pairing lost. A device that lost its pairing cannot play until you pair it again with <b>Reconfigure player</b> or remove the old pairing with <b>Unpair</b>. A device you unpaired, or that stopped allowing guest access, stays disconnected until you set the player up again
- <b>Unpair.</b> Removes the pairing with this device. Both sides forget the stored credential
- <b>Turn on audio input / Turn off audio input.</b> Shown for a device with an audio input that is connected through guest access. Starts or stops sending its audio to Music Assistant through the [Sendspin Source plugin](/plugins/sendspin-source/)
- <b>Automatically play line-in on.</b> Chooses where the line-in plays automatically: This device, another player, or Off. Only shown for devices with a line-in. A device that cannot report when a signal is present shows a note instead
- <b>Name of the input.</b> The name of the audio input, such as Record player. It is Line-in until you change it. The source list of the player itself shows the name alone, while Browse and other players show it with the name of the player, such as Record player (Living Room). Only shown for a device that has an audio input and also plays; a device that only has an input is named by its player
- <b>Static playback delay (ms).</b> Only shown for devices that support it. Shifts this player's audio to keep it in sync with the others, from 0 up to 5000 ms. Increase it if audio on this player is heard too late, for example to make up for delay added by an amplifier, active speakers or the device's own operating system
- <b>Preferred audio format.</b> The audio format used for playback on this player. Automatic (player's preferred codec) is the default, and the other options are read from the device itself. On Automatic the player keeps the codec it prefers, and <b>Sample rate selection</b> decides the sample rate. Choosing a specific format here sets both
- <b>Sample rate selection.</b> Decides the sample rate of the audio sent to this player, and can only be changed while the preferred audio format is Automatic. <b>Smart</b> is the default. It starts at the first track's rate and only restarts the stream when a later track needs a higher rate. The other options are Bit-perfect, 48 kHz, 96 kHz and Highest supported by player, and work the same as in [Flow Mode sample rate](/settings/individual-player/#flow-mode-sample-rate). With <b>Allow legacy clients</b> off, the rate changes when the next track starts, without restarting the stream. Only rates the player supports in its preferred codec are used, so a rate it cannot play is replaced by the closest one it can

Preferred audio format, Sample rate selection, and Unpair on a paired device only show while <b>Show advanced settings</b> is on.

## Stereo Pairs

Two speakers with Sendspin built in can play as one player, a stereo pair, with one speaker on the left channel and the other on the right. A third speaker can be their subwoofer, see [With a Subwoofer](#with-a-subwoofer). All speakers need to be set up and connected. The web player and bridged players, such as Google Cast devices in Sendspin mode, can't be part of a stereo pair.

To make a stereo pair:

1. Open the settings of one of the speakers and, in the [Output Protocols](/settings/individual-player/#output-protocols) section, open the ⋮ menu of its Sendspin output
2. Select **Make multi-channel player…**
3. Leave the **Layout** on **Stereo pair**
4. Pick the other speaker
5. Each speaker is shown next to its channel, **Left** or **Right**. The swap button swaps the two
6. Give the stereo pair a **Name** and select **Create**

The Sendspin output of each speaker moves to the new player. A player that has no other output disappears, together with its settings.

The stereo pair works as one player:

- It has one volume. Turning the volume up or down on one of the speakers changes the other one too
- Its [DSP](/dsp/) settings apply to both speakers. A filter for one channel, such as a [Parametric Equalizer](/dsp/parametriceq/) band for the left channel only, changes only the speaker that plays that channel
- In a group it takes part as one player
- While one speaker is offline, the other plays both channels until it is back

In the Output Protocols section of its settings, each speaker has a row with its channel, its name and whether it is **Online** or **Offline**. Open a row to change the **Channel** of that speaker, which swaps it with the speaker that had that channel, or its **Output delay (ms)**. Increase the delay if the audio of that speaker plays too late.

To take the stereo pair apart, select **Take apart** in the ⋮ menu at the top right of its settings. The stereo pair disappears with its settings, and its speakers come back as players of their own, with default settings. A speaker that is offline comes back once it is connected again.

### With a Subwoofer

A Sendspin speaker can be the subwoofer of a stereo pair, or of a single speaker. The subwoofer plays the bass of both channels, and the other speakers leave that bass to it.

When you make the player, pick one of these under **Layout**:

- **Stereo pair with subwoofer**: a left and a right speaker and a subwoofer
- **Speaker with subwoofer**: one speaker that plays both channels, shown as **Center**, and a subwoofer

To add a subwoofer to a stereo pair you already have, select **Add subwoofer…** in the ⋮ menu at the top right of its settings and pick the speaker. The stereo pair keeps its settings. **Remove subwoofer** in the same menu makes the subwoofer a player of its own again, with default settings. A speaker with a subwoofer has no **Remove subwoofer**: take it apart instead.

A player with a subwoofer has these settings above its speakers:

- <b>The subwoofer has its own crossover.</b> Turn this on when the subwoofer filters out the higher frequencies itself. It then gets the full range
- <b>High-pass the main speakers at the crossover.</b> On by default. While the subwoofer plays, the other speakers leave the bass below the crossover to it. Turn this off to let them play the full range
- <b>Crossover frequency.</b> Where the subwoofer hands over to the other speakers, from 40 to 200 Hz. The default is 80 Hz
- <b>Subwoofer level (dB).</b> The level of the subwoofer next to the other speakers, from -12 to 0 dB

While the subwoofer is offline, the other speakers play the full range. A subwoofer does not play on its own: while none of the other speakers is connected, the player is unavailable.

## Older Devices

Sendspin is still evolving, and some players and clients still use an older development version of it. Future versions of Music Assistant will stop supporting these, so update them when an update is available:

- <b>Devices without encryption.</b> Play straight away without any setup, but cannot be paired and cannot use an audio input. Their security status shows that they are connected without encryption
- <b>Devices with an older pairing version.</b> Pair and play like current devices. Once paired, their settings include <b>Manage device settings</b>, which opens the device's own pairing settings, where you can turn pairing with a static or a dynamic pairing code on or off. These switches only show while <b>Show advanced settings</b> is on. While this section is open the device refuses connections from other servers, so close it again with <b>Close device management</b> when you are finished

## Known Issues / Notes

- Many Sendspin devices ask for 16 bit audio, so higher resolution material may be converted on the way out
- Artwork clears briefly when you pause, seek, or move on to the next track. With <b>Allow legacy clients</b> off, it does not clear when a track ends and the next one starts
- A Sendspin device plays for one server at a time. Playing to a device moves it to this server, even while another server is playing on it. A device that another server is using can still be set up here, but pairing only works while the other server is not playing on it
- Players must be on the same network as Music Assistant to connect directly. Listening from elsewhere works through the web player, and Home Assistant Link gives the most reliable connection through a firewall
- If using Sendspin on a Chromecast device, be aware that, due to the lack of reported metadata, the Home Assistant media player entity may show 'idle' with no track details even while audio is playing correctly; check the Music Assistant UI for the true playback state

## Supported Clients

Several client types can connect to Music Assistant via Sendspin:

| Client | Description |
|--------|-------------|
| **Web Browser** | The built-in Music Assistant web player uses Sendspin for local playback |
| **[Google Cast (Sendspin mode)](/player-support/google-cast/)** | Experimental Sendspin mode for Chromecast devices, off by default. See [Sendspin on Cast devices](/player-support/google-cast/#sendspin-on-cast-devices) |
| **<a href="https://esphome.github.io/home-assistant-voice-pe/" target="_blank" rel="noopener noreferrer">Home Assistant Voice PE</a>** | Built into recent Voice PE firmware. Update the device with the official installer, choosing a pre-release build if the current stable one does not show up as a player |
| **[Local Audio](/player-support/local-audio/)** | Plays to the soundcard, USB DAC or built-in output of the machine it runs on. Deploys as a Home Assistant App or with Docker Compose |
| **<a href="https://github.com/trudenboy/sendspin-bt-bridge" target="_blank" rel="noopener noreferrer">Sendspin Bluetooth Bridge</a>** | Bridges Bluetooth speakers as MA players, with multi-device support, multiroom sync and a web dashboard. Deploys as a Home Assistant App, Docker, or LXC |
| **<a href="https://www.sendspin-audio.com/code/" target="_blank" rel="noopener noreferrer"> Various Sendspin Clients</a>** | Clients are becoming available for various platforms |

## The Web Player

The player built into the Music Assistant web interface is itself a Sendspin player. It plays wherever the web interface works, at home or through [Remote Access](/settings/remote-access/).

Like any other Sendspin player, the web player has a **Static playback delay (ms)** setting in its [Output Protocols settings](/settings/individual-player/#output-protocols). It starts at 0 and may need adjusting if the web player is heard out of step with your other speakers.

The audio format the web player uses depends on the browser:

- **Chrome, Edge and other Chromium based browsers, including on Android**: Opus when the web interface is opened over HTTPS, which includes Remote Access. Lossless FLAC when it is opened over plain HTTP, for example at `http://192.168.1.100:8095`
- **Firefox, except on iPhone and iPad**: lossless FLAC
- **Safari, and every browser on iPhone and iPad**: Opus

A Chromium based browser can play lossless FLAC over HTTPS too: pick one of the FLAC formats in the web player's advanced **Preferred audio format** setting.

## Connecting Other Sendspin Players

Sendspin players on your network are found automatically, so there is usually no address to enter anywhere.

If a player does ask you for a server address, or you are building a client of your own, Music Assistant listens at `ws://192.168.1.100:8927/sendspin` — replace the IP address with that of your Music Assistant server. In the rare case that port 8927 is already in use, for example by a second Music Assistant server on the same machine, Sendspin uses the next free port starting at 8929, and the Music Assistant log shows which one. The specification is published at <a href="https://github.com/Sendspin/spec" target="_blank" rel="noopener noreferrer">github.com/Sendspin/spec</a>.

> [!NOTE]
> The same `/sendspin` path exists on the main web interface port (8095), but that one is reserved for the built-in web player and will reject other clients.
