---
title: "I Want To Stream To"
---

## My Local HA Device

Install the <a href="https://github.com/pssc/ha-addon-squeezelite" target="_blank" rel="noopener noreferrer">squeezelite app</a> which will then allow streaming over an audio connection from the HA host to your speaker or amplifier.

<details>
<summary>Troubleshooting Steps for this Option</summary>
<div>
Some problems (listed individually below) may affect this solution and the following settings should avoid all of these issues:

  * Enable “Show unused configuration options” on the SqueezeLite app, then set:
    * build: **pa** (PortAudio) or **alsa**
    * options: `-a 150ms` (target latency, experiment to find best value)
  * Ensure that the *Output format* format in the Music Assistant *Advanced Settings* for the player is set to anything *other* than **WAV**.

### Audio too fast or slow on track change (wrong sampling rate)

The PulseAudio version of SqueezeLite has a known issue of <a href="https://github.com/ralph-irving/squeezelite/issues/177" target="_blank" rel="noopener noreferrer">playing back audio with the wrong sampling rate</a> on track changes.

If this is encountered, enable “Show unused configuration options” in the SqueezeLite settings and change the *build* type to **pa** (PortAudio) or **alsa**.

### Initial audio swallowed or stuttering on track change

The PulseAudio version of SqueezeLite also has known <a href="https://github.com/ralph-irving/squeezelite/issues/155" target="_blank" rel="noopener noreferrer">synchronization problems on track changes</a>.

If this is encountered then, as above, change the *build* type to **pa** (PortAudio) or **alsa**.

### “Helicopter noises” / chopped off playback

If “<a href="https://github.com/pssc/ha-addon-squeezelite/issues/1" target="_blank" rel="noopener noreferrer">helicopter noises</a>” are heard then adjust the target latency to a higher value.

To do so, enable “Show unused configuration options” and add `-a 150ms` to the *options* text field while using the ALSA or PA (PortAudio) *build*. Experimentation with higher or lower values may be required.

### Static instead of audio playback on some tracks

This is <a href="https://github.com/music-assistant/support/issues/4163" target="_blank" rel="noopener noreferrer">an issue with Music Assistant</a> and affects all tracks not using the `i16` sampling format (such as 24/32-bit audio) when streaming with the **WAV** *Output codec*.

When encountering this issue, change the *Output format* to **FLAC** (or any other non-WAV format) in the Music Assistant player *Advanced Settings*.

Alternatively, enabling “Show unused configuration options” and adding `-W` to the *options* field of the SqueezeLite App also works around this issue.
</div>
</details>

## My Random Connected Device

### Streaming to a Squeezelite Compatible Client

Install any <a href="https://sourceforge.net/projects/lmsclients/files/squeezelite/" target="_blank" rel="noopener noreferrer">Squeezelite compatible application</a> (i.e. a <a href="https://en.wikipedia.org/wiki/Squeezelite" target="_blank" rel="noopener noreferrer">Squeezelite software client</a>, sometimes also refered to as "Squeeze Lite" apps) to your mobile or other devices and then MA should be able to stream to it.

If you have Squeezelite compatible clients on your local network then MA will be able to automatically detect and stream to them, (this works via Squeezelite compatibility without you needing to add any specific configuration or credentials for it). Note that Squeezelite clients usually do not have any user interface of their own and as such must be controlled via Music Assistant.

See here for an example on on <a href="https://github.com/orgs/music-assistant/discussions/1123#discussioncomment-6652948" target="_blank" rel="noopener noreferrer">how to run squeezelite on Windows</a>

The [Music Assistant Companion App](/companion-app/) can also be configured to run a squeezelite client which will allow playback to the device running it.

## My ESP32 Based Device

If the hardware has at least 4MB of flash and 4MB of PSRAM it will be capable of running squeezelite directly. Use the <a href="https://github.com/sle118/squeezelite-esp32" target="_blank" rel="noopener noreferrer">Squeezelite ESP32 firmware</a>. A nice pre-made solution with speaker terminals is the <a href="https://www.tindie.com/products/sonocotta/louder-esp32/" target="_blank" rel="noopener noreferrer">Louder ESP32</a>

If the ESP32 device has other firmware on it that has been discovered by Home Assistant then use the <a href="https://music-assistant.io/integration/installation/" target="_blank" rel="noopener noreferrer">Home Assistant Player Provider</a> to expose the HA media player entitiy to MA. If the exposed player is running ESPHOME then consider changing the Output Codec to `MP3 (lossy)` (if it isn't already the default) in the player settings as this may be all the player can handle.

There is a <a href="https://github.com/jorgenkraghjakobsen/snapclient" target="_blank" rel="noopener noreferrer">Snapclient port</a> which could also be used.

## My Bluetooth Speaker

If you have a spare Raspberry Pi (any model) then <a href="https://www.picoreplayer.org" target="_blank" rel="noopener noreferrer">PiCoreplayer</a> is an excellent solution than can also connect to Bluetooth speakers.To stream to your Bluetooth device using piCorePlayer, follow these best practices to ensure high-fidelity audio and a stable connection:

* It is highly recommended to use a wired Ethernet connection for your Raspberry Pi rather than Wi-Fi. On most Raspberry Pi models, the Bluetooth and Wi-Fi radios share the same chip and antenna; using both simultaneously often leads to significant audio "stumbles," dropouts, and reduced range. By using Ethernet, you eliminate this radio frequency interference, providing a dedicated, clean pipeline for your music data to reach your Bluetooth transmitter without interruption.

* While using the Raspberry Pi’s inbuilt Bluetooth adapter or a basic USB dongle will work, these options come with several pitfalls. Standard adapters rely entirely on the Pi's software to encode audio, which may limit you to lower-quality codecs like <a href="https://en.wikipedia.org/wiki/SBC_(codec" target="_blank" rel="noopener noreferrer">SBC</a>) or standard <a href="https://en.wikipedia.org/wiki/AptX" target="_blank" rel="noopener noreferrer">aptX</a>. Furthermore, the processing overhead on older Pi models can cause latency (audio delay), and internal antennas are notoriously weak—especially if the Pi is housed in a metal or thick plastic case which can severely degrade signal strength.

* The best option for high-performance audio is to use a specialized Bluetooth Audio Transmitter such as the <a href="https://www.sennheiser-hearing.com/p/btd-700/" target="_blank" rel="noopener noreferrer">Sennheiser BTD 700</a> or <a href="https://uk.creative.com/p/speakers/creative-bt-w6" target="_blank" rel="noopener noreferrer">Creative BT-W6</a>. These devices function as a "driverless" external USB sound card, offloading the heavy lifting of audio encoding, specifically high-definition codecs like <a href="https://www.aptx.com/aptx-adaptive" target="_blank" rel="noopener noreferrer">aptX Adaptive</a> and aptX HD, to the dongle’s own dedicated processor. This allows even an older Raspberry Pi 1 to deliver modern, high-resolution wireless audio that matches the capabilities of premium headphones, all while providing a much more stable connection and a physical pairing button for a simplified setup.

If using a USB dongle with piCorePlayer then some settings on the `Squeezelite Settings` page need to be adjusted. Set the `Audio Output` to `USB Audio` and save. After any necessary restarting, navigate back to that settings page and click on `Card Control` and then in the `Raspberry Pi Built-in Audio` section disable the built-in audio by unticking the box.  

## My Browser

<img src="/assets/label-easiest-noshadow.png" alt="easiest label" style="width: 64px;"  loading="lazy" />
Play to the built-in Sendspin web player.

<img src="/assets/label-intermediate-noshadow.png" alt="easiest label" style="width: 64px;"  loading="lazy" />
Use a [Snapserver](/player-support/snapcast/) and the Snapweb option. If you enabled the Snapcast provider in MA then the built in server will be accessible on port 1780 on the IP address of your MA server or you can also use an external server which has been added to MA as a player provider.

## My Android Phone

<img src="/assets/label-easiest-noshadow.png" alt="easiest label" style="width: 64px;"  loading="lazy" />
Play to the built-in Sendspin web player.

<img src="/assets/label-intermediate-noshadow.png" alt="intermediate label" style="width: 64px;"  loading="lazy" />
Use the <a href="https://play.google.com/store/apps/details?id=de.badaix.snapcast" target="_blank" rel="noopener noreferrer">Snapcast App</a> and the [Snapserver Provider](/player-support/snapcast/)

## Music Assistant

You could use <a href="http://www.darkice.org/" target="_blank" rel="noopener noreferrer">Darkcast</a> to capture and <a href="https://www.icecast.org/" target="_blank" rel="noopener noreferrer">Icecast</a> to build a solution that will digitize and stream audio from your analog audio equipment like a vinyl record player (turntable/phonograph/gramophone) as a web radio stream (URL) that you could add as a radio station in Music Assistant.

For such a project you need an audio-capture and ADC (analogue-to-digital converter) device that provides audio-input and digitalization. For example, you can use either a USB Audio Device Interface adapter from <a href="https://www.behringer.com/catalog.html?catalog=Category&category=C-BEHRINGER-AUDIOINTERFACES-USBAUDIOINTERFACES" target="_blank" rel="noopener noreferrer">Behringer</a> or <a href="https://www.ikmultimedia.com/products/irigstream/" target="_blank" rel="noopener noreferrer">IK Multimedia</a>, or a <a href="https://www.hifiberry.com/blog/need-some-input/" target="_blank" rel="noopener noreferrer">HiFiBerry board with ADC</a>.

You can find a generic tutorial <a href="https://maker.pro/raspberry-pi/projects/how-to-build-an-internet-radio-station-with-raspberry-pi-darkice-and-icecast" target="_blank" rel="noopener noreferrer">here</a>, and for those that like step-by-step guides look <a href="https://github.com/quebulm/Raspberry-Pi-Vinyl-Streamer" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://github.com/gieljnssns/darkice-libaacplus-rpi-guide/blob/master/README.md" target="_blank" rel="noopener noreferrer">here</a> (the first of which also offers a pre-configured Linux appliance image for Raspberry Pi 3 / Raspberry Pi Zero 2 W). 

## Web Radio

You can indirectly stream to a device which only accepts a URL such as a Web Radio. In order to do so you will need to be running Home Assistant and do this:

- Install https://github.com/Poeschl-HomeAssistant-Addons/mpd (this will create an mpd media_player entity)
- Enable httpd_output in the mpd app (which allows for web streaming)
- Use the HA media player plugin in Music Assistant and select mpd as the output

Thanks to <a href="https://github.com/mrueg" target="_blank" rel="noopener noreferrer">Manuel Rüger</a> who showed us <a href="https://github.com/orgs/music-assistant/discussions/2410#discussioncomment-10885780" target="_blank" rel="noopener noreferrer">here</a>

## A device I am yet to purchase!

A summary of the capabilities of the player providers available in Music Assistant [is available here](/player-support/).

In general terms the protocols/devices that should give you minimum to no setup difficulty are:

-	Any device/speaker that supports <a href="https://en.wikipedia.org/wiki/AirPlay" target="_blank" rel="noopener noreferrer">AirPlay</a>
-	Any device/speaker that supports the <a href="https://en.wikipedia.org/wiki/Google_Cast" target="_blank" rel="noopener noreferrer">Google Cast protocol</a> (also known as cast builtin)
-	<a href="https://en.wikipedia.org/wiki/Squeezebox_(network_music_player" target="_blank" rel="noopener noreferrer">Squeezebox hardware</a>)
-	<a href="https://sourceforge.net/projects/lmsclients/files/squeezelite/" target="_blank" rel="noopener noreferrer">Squeezelite</a> based players
-	<a href="https://www.sonos.com/en-us/home" target="_blank" rel="noopener noreferrer">Sonos</a>

We don’t believe most people can hear the difference in sample rates above CD quality so AirPlay is highly recommended. It has a good sync protocol and is widely implemented in consumer devices. For most people they should consider what they already have and fit in with that (unless it’s DLNA then consider changing due to the quirks of some devices) and their budget.

Note that many Sonos devices can be synced with AirPlay devices which is another plus for AirPlay.

Lastly, if grouping of players is planned and use of the DSP settings is desired then review which protocols support DSP in this circumstance in the [DSP Settings description](/settings/individual-player/#dsp-settings)

The following table is a non-exhaustive list of possible solutions:

| Device or Software	          | Price# | Supported Protocols              |+Amp^| Pros and Cons |
|------------------------------------------------|--------|----------------------------------|------|---------------|
|<a href="https://www.picoreplayer.org/" target="_blank" rel="noopener noreferrer">PiCorePlayer*</a> (DIY) |$	     |Squeezelite, AirPlay          	  |  Y	   |Pros: Cheap, Runs on RPi 1, Streams over Bluetooth<br>Cons: Requires some technical knowledge to install the free software|
|<a href="https://www.wiimhome.com/wiimpro/overview" target="_blank" rel="noopener noreferrer">WiiM Pro</a>|$$      |Squeezelite, AirPlay, Google Cast Audio, DLNA| Y |Pros: Minimal setup, versatile<br>Cons: Cheaper options available, Cast requires app to have sync’ed group|
|<a href="https://www.wiimhome.com/wiimmini/overview" target="_blank" rel="noopener noreferrer">WiiM Mini</a>|$	   |AirPlay, DLNA	                    | Y      | As per Wiim Pro |
|<a href="https://www.fiio.com/sr11" target="_blank" rel="noopener noreferrer">FiiO SR 11</a>              |$$	     |AirPlay	                          | Y	     | As per Wiim Pro |
|<a href="https://sonocotta.com/louder-esp32/" target="_blank" rel="noopener noreferrer">Louder ESP32</a> (DIY) | $ |Squeezelite, AirPlay, Snapcast	  | N	     |Pros: Cheap<br>Cons: Requires some technical knowledge to install the software|
|<a href="https://www.home-assistant.io/voice-pe/" target="_blank" rel="noopener noreferrer">Home Assistant (HA) Voice PE</a>|$ |Home Assistant Integration |Y	 |Pros: All local voice control and playback device, Strong Support<br>Cons: Requires HA as well|
|Amplifiers/Receivers + Cast	                       |$$$	     |Google Cast      	                | N	     |Pros: Minimal setup, Higher amplification, High Quality Audio<br>Cons: Expensive, Cast requires app to have sync’ed group|
|Amplifiers/Receivers + AirPlay	                     |$$$	     |  AirPlay	                        | N	     | Pros: Minimal setup, Higher amplification, High Quality Audio<br>Cons: Expensive |
|<a href="https://www.sonos.com/en-us/shop" target="_blank" rel="noopener noreferrer">Sonos</a><br><a href="https://www.ikea.com/us/en/cat/wi-fi-speakers-46194/" target="_blank" rel="noopener noreferrer">Ikea Symfonisk</a>|$$ → $$$	|Sonos (Many devices also AirPlay)| Y/N~ |Pros: Minimal setup, High Quality Audio<br>Cons: Potentially Limited to Sonos ecosystem depending upon device|
|<a href="https://www.bluesound.com/usa/all-products" target="_blank" rel="noopener noreferrer">Bluesound Products</a>| $$$ |Bluesound, AirPlay	      |Y/N~    |Pros: Minimal setup, Exceptional Sound Quality<br>Cons: Expensive |

\# Price: $ <100USD; $$ 101-250USD; $$$ >250USD

^ Does the device need a separate amplifier? This will be yes unless the device can drive speakers to fill a room with quality sound.

~ Depends on the product

\* If you want better sound quality from your Pi you could add a <a href="https://www.hifiberry.com/docs/hardware/comparison-of-hifiberry-cards-for-audio-recording/" target="_blank" rel="noopener noreferrer">HiFiBerry</a> or a <a href="https://sonocotta.com/raspberry-pi-media-center-hats/" target="_blank" rel="noopener noreferrer">Raspberry PI Media Center Hat</a>

(DIY) Device requires software installation and/or additional hardware (e.g. powersupply, case)
