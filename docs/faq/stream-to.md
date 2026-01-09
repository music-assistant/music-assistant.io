## My Local HA Device

Install the [squeezelite addon](https://github.com/pssc/ha-addon-squeezelite) which will then allow streaming over an audio connection from the HA host to your speaker or amplifier.

<details><summary>Troubleshooting Steps for this Option</summary>

Some problems (listed individually below) may affect this solution and the following settings should avoid all of these issues:

  * Enable “Show unused configuration options” on the SqueezeLite add-on, then set:
    * build: **pa** (PortAudio) or **alsa**
    * options: `-a 150ms` (target latency, experiment to find best value)
  * Ensure that the *Output format* format in the Music Assistant *Advanced Settings* for the player is set to anything *other* than **WAV**.

### Audio too fast or slow on track change (wrong sampling rate)

The PulseAudio version of SqueezeLite has a known issue of [playing back audio with the wrong sampling rate](https://github.com/ralph-irving/squeezelite/issues/177) on track changes.

If this is encountered, enable “Show unused configuration options” in the SqueezeLite settings and change the *build* type to **pa** (PortAudio) or **alsa**.

### Initial audio swallowed or stuttering on track change

The PulseAudio version of SqueezeLite also has known [synchronization problems on track changes](https://github.com/ralph-irving/squeezelite/issues/155).

If this is encountered then, as above, change the *build* type to **pa** (PortAudio) or **alsa**.

### “Helicopter noises” / chopped off playback

If “[helicopter noises](https://github.com/pssc/ha-addon-squeezelite/issues/1)” are heard then adjust the target latency to a higher value.

To do so, enable “Show unused configuration options” and add `-a 150ms` to the *options* text field while using the ALSA or PA (PortAudio) *build*. Experimentation with higher or lower values may be required.

### Static instead of audio playback on some tracks

This is [an issue with Music Assistant](https://github.com/music-assistant/support/issues/4163) and affects all tracks not using the `i16` sampling format (such as 24/32-bit audio) when streaming with the **WAV** *Output codec*.

When encountering this issue, change the *Output format* to **FLAC** (or any other non-WAV format) in the Music Assistant player *Advanced Settings*.

Alternatively, enabling “Show unused configuration options” and adding `-W` to the *options* field of the SqueezeLite add-on also works around this issue.

</details>

## My Random Connected Device

### Streaming to a Squeezelite Compatible Client

Install any [Squeezelite compatible application](https://sourceforge.net/projects/lmsclients/files/squeezelite/) (i.e. a [Squeezelite software client](https://en.wikipedia.org/wiki/Squeezelite), sometimes also refered to as "Squeeze Lite" apps) to your mobile or other devices and then MA should be able to stream to it.

If you have Squeezelite compatible clients on your local network then MA will be able to automatically detect and stream to them, (this works via Squeezelite compatibility without you needing to add any specific configuration or credentials for it). Note that Squeezelite clients usually do not have any user interface of their own and as such must be controlled via Music Assistant.

See here for an example on on [how to run squeezelite on Windows](https://github.com/orgs/music-assistant/discussions/1123#discussioncomment-6652948)

The [Music Assistant Companion App](../companion-app.md) can also be configured to run a squeezelite client which will allow playback to the device running it.

## My ESP32 Based Device

If the hardware has at least 4MB of flash and 4MB of PSRAM it will be capable of running squeezelite directly. Use the [Squeezelite ESP32 firmware](https://github.com/sle118/squeezelite-esp32). A nice pre-made solution with speaker terminals is the [Louder ESP32](https://www.tindie.com/products/sonocotta/louder-esp32/)

If the ESP32 device has other firmware on it that has been discovered by Home Assistant then use the [Home Assistant Player Provider](https://music-assistant.io/integration/installation/) to expose the HA media player entitiy to MA. If the exposed player is running ESPHOME then consider changing the Output Codec to `MP3 (lossy)` (if it isn't already the default) in the player settings as this may be all the player can handle.

There is a [Snapclient port](https://github.com/jorgenkraghjakobsen/snapclient) which could also be used.

## My Bluetooth Speaker

If you have a spare Raspberry Pi (any model) then [PiCoreplayer](https://www.picoreplayer.org) is an excellent solution than can also connect to Bluetooth speakers. 

## My Browser

![easiest label](../assets/label-easiest-noshadow.png){ width=64 }
Play to the built-in Sendspin web player.

![easiest label](../assets/label-intermediate-noshadow.png){ width=64 }
Use a [Snapserver](../player-support/snapcast.md) and the Snapweb option. If you enabled the Snapcast provider in MA then the built in server will be accessible on port 1780 on the IP address of your MA server or you can also use an external server which has been added to MA as a player provider.

## My Android Phone

![easiest label](../assets/label-easiest-noshadow.png){ width=64 }
Play to the built-in Sendspin web player.

![intermediate label](../assets/label-intermediate-noshadow.png){ width=64 }
Use the [Snapcast App](https://play.google.com/store/apps/details?id=de.badaix.snapcast) and the [Snapserver Provider](../player-support/snapcast.md)

## Music Assistant

You could use [Darkcast](http://www.darkice.org/) to capture and [Icecast](https://www.icecast.org/) to build a solution that will digitize and stream audio from your analog audio equipment like a vinyl record player (turntable/phonograph/gramophone) as a web radio stream (URL) that you could add as a radio station in Music Assistant.

For such a project you need an audio-capture and ADC (analogue-to-digital converter) device that provides audio-input and digitalization. For example, you can use either a USB Audio Device Interface adapter from [Behringer](https://www.behringer.com/catalog.html?catalog=Category&category=C-BEHRINGER-AUDIOINTERFACES-USBAUDIOINTERFACES) or [IK Multimedia](https://www.ikmultimedia.com/products/irigstream/), or a [HiFiBerry board with ADC](https://www.hifiberry.com/blog/need-some-input/).

You can find a generic tutorial [here](https://maker.pro/raspberry-pi/projects/how-to-build-an-internet-radio-station-with-raspberry-pi-darkice-and-icecast), and for those that like step-by-step guides look [here](https://github.com/quebulm/Raspberry-Pi-Vinyl-Streamer) and [here](https://github.com/gieljnssns/darkice-libaacplus-rpi-guide/blob/master/README.md) (the first of which also offers a pre-configured Linux appliance image for Raspberry Pi 3 / Raspberry Pi Zero 2 W). 

## Web Radio

You can indirectly stream to a device which only accepts a URL such as a Web Radio. In order to do so you will need to be running Home Assistant and do this:

- Install https://github.com/Poeschl-HomeAssistant-Addons/mpd (this will create an mpd media_player entity)
- Enable httpd_output in the mpd addon (which allows for web streaming)
- Use the HA media player plugin in Music Assistant and select mpd as the output

Thanks to [Manuel Rüger](https://github.com/mrueg) who showed us [here](https://github.com/orgs/music-assistant/discussions/2410#discussioncomment-10885780)

## A device I am yet to purchase!

A summary of the capabilities of the player providers available in Music Assistant [is available here](../player-support/index.md).

In general terms the protocols/devices that should give you minimum to no setup difficulty are:

-	Any device/speaker that supports [AirPlay](https://en.wikipedia.org/wiki/AirPlay)
-	Any device/speaker that supports the [Google Cast protocol](https://en.wikipedia.org/wiki/Google_Cast) (also known as cast builtin)
-	[Squeezebox hardware](https://en.wikipedia.org/wiki/Squeezebox_(network_music_player))
-	[Squeezelite](https://sourceforge.net/projects/lmsclients/files/squeezelite/) based players
-	[Sonos](https://www.sonos.com/en-us/home)

We don’t believe most people can hear the difference in sample rates above CD quality so AirPlay is highly recommended. It has a good sync protocol and is widely implemented in consumer devices. For most people they should consider what they already have and fit in with that (unless it’s DLNA then consider changing due to the quirks of some devices) and their budget.

Bluesound is shown in the [player provider table](../player-support/index.md) as not supporting sync. That is with the current MA implementation which should change in the future. For clarity, Bluesound devices do support sync.

Note that many Sonos devices can be synced with AirPlay devices which is another plus for AirPlay.

Lastly, if grouping of players is planned and use of the DSP settings is desired then review which protocols support DSP in this circumstance in the [DSP Settings description](../settings/individual-player.md#dsp-settings)

The following table is a non-exhaustive list of possible solutions:

| Device or Software	          | Price# | Supported Protocols              |+Amp^| Pros and Cons |
|------------------------------------------------|--------|----------------------------------|------|---------------|
|[PiCorePlayer*](https://www.picoreplayer.org/) (DIY) |$	     |Squeezelite, AirPlay          	  |  Y	   |Pros: Cheap, Runs on RPi 1, Streams over Bluetooth<br>Cons: Requires some technical knowledge to install the free software|
|[WiiM Pro](https://www.wiimhome.com/wiimpro/overview)|$$      |Squeezelite, AirPlay, Google Cast Audio, DLNA| Y |Pros: Minimal setup, versatile<br>Cons: Cheaper options available, Cast requires app to have sync’ed group|
|[WiiM Mini](https://www.wiimhome.com/wiimmini/overview)|$	   |AirPlay, DLNA	                    | Y      | As per Wiim Pro |
|[FiiO SR 11](https://www.fiio.com/sr11)              |$$	     |AirPlay	                          | Y	     | As per Wiim Pro |
|[Louder ESP32](https://sonocotta.com/louder-esp32/) (DIY) | $ |Squeezelite, AirPlay, Snapcast	  | N	     |Pros: Cheap<br>Cons: Requires some technical knowledge to install the software|
|[Home Assistant (HA) Voice PE](https://www.home-assistant.io/voice-pe/)|$ |Home Assistant Integration |Y	 |Pros: All local voice control and playback device, Strong Support<br>Cons: Requires HA as well|
|Amplifiers/Receivers + Cast	                       |$$$	     |Google Cast      	                | N	     |Pros: Minimal setup, Higher amplification, High Quality Audio<br>Cons: Expensive, Cast requires app to have sync’ed group|
|Amplifiers/Receivers + AirPlay	                     |$$$	     |  AirPlay	                        | N	     | Pros: Minimal setup, Higher amplification, High Quality Audio<br>Cons: Expensive |
|[Sonos](https://www.sonos.com/en-us/shop)<br>[Ikea Symfonisk](https://www.ikea.com/us/en/cat/wi-fi-speakers-46194/)|$$ → $$$	|Sonos (Many devices also AirPlay)| Y/N~ |Pros: Minimal setup, High Quality Audio<br>Cons: Potentially Limited to Sonos ecosystem depending upon device|
|[Bluesound Products](https://www.bluesound.com/usa/all-products)| $$$ |Bluesound, AirPlay	      |Y/N~    |Pros: Minimal setup, Exceptional Sound Quality<br>Cons: Expensive |

\# Price: $ <100USD; $$ 101-250USD; $$$ >250USD

^ Does the device need a separate amplifier? This will be yes unless the device can drive speakers to fill a room with quality sound.

~ Depends on the product

\* If you want better sound quality from your Pi you could add a [HiFiBerry](https://www.hifiberry.com/docs/hardware/comparison-of-hifiberry-cards-for-audio-recording/) or a [Raspberry PI Media Center Hat](https://sonocotta.com/raspberry-pi-media-center-hats/)

(DIY) Device requires software installation and/or additional hardware (e.g. powersupply, case)
