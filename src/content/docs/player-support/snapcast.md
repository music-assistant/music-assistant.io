---
title: "Snapcast"
description: Details for the Snapcast Player Provider
---

# Snapcast <img src="/assets/icons/snapcast-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Snapcast plays the same audio on several devices at once and keeps them in step, so music can follow you from room to room without any echo between them. Anything that can run the Snapcast client software becomes a speaker, which in practice means a Raspberry Pi, a spare computer, a phone or just a browser tab. This component is contributed and maintained by <a href="https://github.com/Santiagosotoc" target="_blank" rel="noopener noreferrer">SantiagoSotoC</a>.

MA includes a built-in Snapserver although an external server can also be used. The diagram below shows a possible combination of outputs. In the diagram a Raspberry Pi runs the server which communicates to MA and all of the clients. The server running Pi is also running Snapclient and is connected to a set of speakers. Then there is another Pi running Snapclient in another room, a phone running Snapdroid and a laptop running Snapweb.

<img src="/assets/snapcast.png" alt="Preview image" style="width: 800px;"  loading="lazy" />

## Features

- Synchronized playback across all Snapcast devices
- Lossless audio quality. Default is 48 kHz / 16-bit PCM. Higher sample rates and 24-bit are only available when using an external Snapserver (see Settings)

## Configuration

1. In Music Assistant, go to `SETTINGS >> PLAYER PROVIDERS`, click `ADD A NEW PROVIDER` and select `Snapcast`. This starts the built-in Snapcast server; no further server setup is needed. To use an external Snapcast server instead, enable `Show Advanced Settings` and enter its IP and port (see Settings below and note the version requirements in Known Issues / Notes).
2. Connect your players (clients) by pointing a browser or the Snapdroid app at `<YOUR_MA_IP_ADDRESS>:1780`. Each connected client appears in the MA player list.

## Settings

### Provider 

At the provider level the following settings are available:

In the `Show Advanced Settings` toggle is enabled this will allow the use of an external Snapcast server and the following settings:

- <b>Snapcast Server IP.</b> The IP address of the external Snapcast server (e.g. `192.168.1.200`)
- <b>Snapcast Control Port.</b> The port the external Snapcast server can be reached on
- <b>Idle threshold stream parameter.</b> (default 60000ms) The stream state will switch from playing to idle after receiving this many milliseconds of silence
- <b>Snapcast stream sample rate.</b> (default `48000`) Only shown when **Use existing Snapserver** is enabled. Sets how many samples per second Music Assistant sends into Snapcast (`48000`, `96000`, or `192000`). Your Snapcast clients must support the rate you choose. After changing it, reload the Snapcast provider.
- <b>Snapcast stream bit depth.</b> (default `16`) Only shown when **Use existing Snapserver** is enabled. Sets how many bits per sample Music Assistant sends (`16` or `24`). **24-bit does not work with Music Assistant’s built-in Snapserver**, and not with Snapservers installed from normal packages/releases. See “Using higher sample rates and 24-bit” below.

The `Built-in Snapserver Settings`are as follows:

- <b>Buffer Size.</b> (default 1000ms) How far ahead the server works. This is why there is a pause of about a second after you press play, or skip, or pause. Lowering it shortens that delay but makes dropouts more likely
- <b>Chunk Size.</b> (default 26ms) How much audio the server prepares at a time. The default suits FLAC, which is what is used unless you change it. Leave it alone unless you have changed the codec and are having trouble
- <b>Snapserver Initial Volume.</b> The initial volume for new clients
- <b>Send audio to muted clients.</b> Maintains a stream to muted clients
- <b>Snapserver default transport codec.</b> Options are FLAC [default], OGG, OPUS, and PCM

### Using higher sample rates and 24-bit (external Snapserver only)

With the built-in Snapserver, Music Assistant always streams at 48 kHz / 16-bit. The sample rate and bit depth settings only appear after you enable **Use existing Snapserver**.

**Higher sample rates (still 16-bit)** need Snapcast clients that support that rate.

**24-bit** needs more: Music Assistant sends packed 24-bit PCM, which a normal Snapserver cannot ingest. Until that support ships in an official Snapcast release (and Music Assistant’s built-in server can use it), build an external Snapserver from the branch that adds packed 24-bit PCM ingest:

```sh
# Debian / Raspberry Pi OS / Ubuntu
sudo apt-get update
sudo apt-get install -y git build-essential cmake ninja-build ccache \
  alsa-utils avahi-daemon libasound2-dev libavahi-client-dev libboost-dev \
  libexpat1-dev libflac-dev libopus-dev libsoxr-dev libssl-dev \
  libvorbis-dev libvorbisidec-dev

git clone --branch feature/tcp-packed-s24le --single-branch \
  https://github.com/rwjack/snapcast.git
cd snapcast
mkdir build && cd build
cmake .. -DBUILD_CLIENT=OFF
cmake --build .

sudo install -m 755 ../bin/snapserver /usr/local/bin/snapserver
snapserver -v
```

Then:

1. Run that `snapserver` on a host on your network (stop any old Snapserver first).
2. In Music Assistant → Snapcast provider → Advanced Settings:
   - enable **Use existing Snapserver**
   - set **Snapcast Server IP** and **Control Port**
   - set **Snapcast stream sample rate** / **bit depth** as needed
3. Reload the Snapcast provider.
4. Point your Snapcast clients at that **external** server (not Music Assistant’s built-in Snapweb on port 1780).

Support for higher rates / 24-bit on the built-in Snapserver is planned once the required Snapcast support is available upstream.

### Player

In addition to the [Individual Player Settings](/settings/individual-player/), Snapcast players also have a unique setting as follows:

- <b>Output channel mode.</b> The default is `Stereo` but other options are `Left channel only`, `Right channel only` or `Mono (both channels)`

## Known Issues / Notes

- The Snapcast provider will use the built-in Snapserver by default although a switch in the settings allows the use of an external server if desired. When using an external server the server IP and port must be entered
- Music Assistant only supports external Snapcast servers running version 0.27.0 (or newer). If using an external server you can confirm the version by launching with the command `snapserver -v`. Note that version 0.28.0 is only supported on a 64 bit OS. Note also that version 0.30.0 lacks required functionality for MA and cannot be used
- If not using an external server then the built-in Snapserver with the Snapweb option will be launched when this provider is added. Once enabled the workings of the server are transparent and the clients appear in the MA UI
- Clients are created by pointing a browser or Snapdroid at `<YOUR_MA_IP_ADDRESS>:1780`. The browser tab must remain open to maintain the stream
- Client names for all clients can be adjusted in Snapweb and Snapdroid via their respective UIs. Additionally, it is possible to rename the players in the MA settings
- The built-in Snapserver can only accept connections from Music Assistant
- If it is necessary to adjust the latency of a client, it must be done from another interface such as Snapdroid or Snapweb
- If muted players go out of sync or exhibit undesirable rebuffer delays when subsequently unmuted, or shutdown while muted then try turning on the option `Send audio to muted clients`
- Snapcast has no real pause, so Music Assistant stops and restarts instead. Pausing works, but the player never actually shows as paused
- Occasionally after a stream change (pause, skip or seek) Snapweb can go silent. This can be fixed by selecting stop then play in the Snapweb UI
- The Snapcast app for iOS is broken as it uses an old version of Snapclient. Using it brings problems with this provider
- Ensure that the ports 1704 and 1705 on the Snapserver host are open. Also make sure that the ports between 4953 and 5153 inclusive are open
- Try the default Snapcast settings and then make changes as necessary
- Stream sample rate and bit depth settings are only available with an external Snapserver. The built-in Snapserver always uses 48 kHz / 16-bit for now. 24-bit additionally requires an external Snapserver built with packed 24-bit PCM support as described above. Changing these settings requires a provider reload.
- The stream name must be `default`
