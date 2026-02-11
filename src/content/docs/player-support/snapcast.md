---
title: Snapcast Player Provider
description: Details for the Snapcast Player Provider
---

# Snapcast <img src="/assets/icons/snapcast-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant supports Snapcast, a powerful solution for synchronized multi-room audio streaming. Snapcast enables seamless playback across various devices, creating an immersive audio experience.
Whether using Snapcast-compatible speakers or devices like the Raspberry Pi, synchronized audio playback can be enjoyed effortlessly. This component is contributed and maintained by <a href="https://github.com/Santiagosotoc" target="_blank" rel="noopener noreferrer">SantiagoSotoC</a>.

MA includes a built-in Snapserver although an external server can also be used. The diagram below shows a possible combination of outputs. In the diagram a Raspberry Pi runs the server which communicates to MA and all of the clients. The server running Pi is also running Snapclient and is connected to a set of speakers. Then there is another Pi running Snapclient in another room, a phone running Snapdroid and a laptop running Snapweb.

<img src="/assets/snapcast.png" alt="Preview image" style="width: 800px;"  loading="lazy" />

## Features

- Synchronized playback across all Snapcast devices
- Lossless audio quality with options for 48kHz / 16bits PCM

## Settings

In addition to the [Individual Player Settings](../settings/individual-player) the Snapcast provider also has a unique section called `Built-in Snapserver Settings`. The available settings are:

- <b>Buffer Size.</b> (default 1000ms) is the total buffer size (or better buffer duration) between recording the signal on the server and playing it out on the client. This can be translated directly to the total latency of the audio signal. If play is pressed or a track is paused or skipped, a delay of 1000ms will be noticed because of this buffer
- <b>Chunk Size.</b> (default 26ms). The server will continously read this number of milliseconds from the source into buffer and pass this buffer to the encoder. The encoded buffer is sent to the clients. Some codecs have a higher latency and will need more data, e.g. FLAC will need ~26ms chunks and thus this is the default
- <b>Snapserver Initial Volume.</b> The initial volume for new clients
- <b>Send audio to muted clients.</b> Maintains a stream to muted clients
- <b>Snapserver default transport codec.</b> Options are FLAC [default], OGG, OPUS, and PCM

In the `Advanced Settings` section there is a toggle which will allow use of an external Snapcast server and the following settings:

- <b>Snapcast Server IP.</b> The IP address of the external Snapcast server (e.g. `192.168.1.200`)
- <b>Snapcast Control Port.</b> The port the external Snapcast server can be reached on
- <b>Idle threshold stream parameter.</b> (default 60000ms) The stream state will switch from playing to idle after receiving this many milliseconds of silence

## Known Issues / Notes

- The Snapcast provider will use the built-in Snapserver by default although a switch in the settings allows the use of an external server if desired. When using an external server the server IP and port must be entered
- Music Assistant only supports external Snapcast servers running version 0.27.0 (or newer). If using an external server you can confirm the version by launching with the command `snapserver -v`. Note that version 0.28.0 is only supported on a 64 bit OS. Note also that version 0.30.0 lacks required functionality for MA and cannot be used
- If not using an external server then the built-in Snapserver with the Snapweb option will be launched when this provider is added. Once enabled the workings of the server are transparent and the clients appear in the MA UI
- Clients are created by pointing a browser or Snapdroid at `<YOUR_MA_IP_ADDRESS>:1780`. The browser tab must remain open to maintain the stream
- Client names for all clients can be adjusted in Snapweb and Snapdroid via their respective UIs. Additionally, it is possible to rename the players in the MA settings
- The built-in Snapserver can only accept connections from Music Assistant
- If it is necessary to adjust the latency of a client, it must be done from another interface such as Snapdroid or Snapweb
- If muted players go out of sync or exhibit undesirable rebuffer delays when subsequently unmuted, or shutdown while muted then try turning on the option `Send audio to muted clients`
- Pausing has been implemented as best as can be achieved with the limitations of Snapcast. MA issues a STOP and RESUME command to achieve the pause effect but this means the resulting player state never changes to paused.
- Occasionally after a stream change (pause, skip or seek) Snapweb can go silent. This can be fixed by selecting stop then play in the Snapweb UI
- The Snapcast app for iOS is broken as it uses an old version of Snapclient. Using it brings problems with this provider
- Ensure that the ports 1704 and 1705 on the Snapserver host are open. Also make sure that the ports between 4953 and 5153 inclusive are open
- Try the default Snapcast settings and then make changes as necessary
