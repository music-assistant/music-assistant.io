## My local HA device

Install the [squeezelite addon](https://github.com/pssc/ha-addon-squeezelite) which will then allow streaming over an audio connection from the HA host to your speaker or amplifier

## My random connected device

### Streaming to a Squeezelite compatible client

Install any [Squeezelite compatible application](https://sourceforge.net/projects/lmsclients/files/squeezelite/) (i.e. a [Squeezelite software client](https://en.wikipedia.org/wiki/Squeezelite), sometimes also refered to as "Squeeze Lite" apps) to your mobile or other devices and then MA should be able to stream to it.

If you have Squeezelite compatible clients on your local network then MA will be able to automatically detect and stream to them, (this works via Squeezelite compatibility without you needing to add any specific configuration or credentials for it). Note that Squeezelite clients usually do not have any user interface of their own and as such must be controlled via Music Assistant.

See here for an example on on [how to run squeezelite on Windows](https://github.com/orgs/music-assistant/discussions/1123#discussioncomment-6652948)

The [Music Assistant Companion App](../companion-app.md) can also be configured to run a squeezelite client which will allow playback to the device running it.

## My ESP32 based device

If the hardware has at least 4MB of flash and 4MB of PSRAM it will be capable of running squeezelite directly. Use the [Squeezelite ESP32 firmware](https://github.com/sle118/squeezelite-esp32). A nice solution with speaker terminals is the [Louder ESP32](https://www.tindie.com/products/sonocotta/louder-esp32/)


If the ESP32 device has other firmware on it that has been discovered by Home Assistant then use the [Home Assistant Player Provider](https://music-assistant.io/integration/installation/) to expose the HA media player entitiy to MA. If the exposed player is running ESPHOME then enable "Enforce (lossy) MP3 stream" in the player settings as this is all the player can handle.

There is a [Snapclient port](https://github.com/jorgenkraghjakobsen/snapclient) which could also be used.

## My non-networked device or bluetooth speaker

If you have a spare Raspberry Pi (any model) then [PiCoreplayer](https://www.picoreplayer.org) is an excellent solution than can also connect to Bluetooth speakers. If you want better sound quality from your Pi you could add a [HiFiBerry](https://www.hifiberry.com/docs/hardware/comparison-of-hifiberry-cards-for-audio-recording/)

## My browser

Use a [Snapserver](../player-support/snapcast.md) and the Snapweb option. If you enabled the Snapcast provider in MA then the built in server will be accessible on port 1780 on the IP address of your MA server or you can also use an external server which has been added to MA as a player provider.

## Music Assistant

You could use [Darkcast](http://www.darkice.org/) to capture and [Icecast](https://www.icecast.org/) to build a solution that will digitize and stream audio from your analog audio equipment like a vinyl record player (turntable/phonograph/gramophone) as a web radio stream (URL) that you could add as a radio station in Music Assistant.

For such a project you need an audio-capture and ADC (analogue-to-digital converter) device that provides audio-input and digitalization. For example, you can use either a USB Audio Device Interface adapter from [Behringer](https://www.behringer.com/catalog.html?catalog=Category&category=C-BEHRINGER-AUDIOINTERFACES-USBAUDIOINTERFACES) or [IK Multimedia](https://www.ikmultimedia.com/products/irigstream/), or a [HiFiBerry board with ADC](https://www.hifiberry.com/blog/need-some-input/).

You can find a generic tutorial [here](https://maker.pro/raspberry-pi/projects/how-to-build-an-internet-radio-station-with-raspberry-pi-darkice-and-icecast), and for those that like step-by-step guides look [here](https://github.com/quebulm/Raspberry-Pi-Vinyl-Streamer) and [here](https://github.com/gieljnssns/darkice-libaacplus-rpi-guide/blob/master/README.md) (the first of which also offers a pre-configured Linux appliance image for Raspberry Pi 3 / Raspberry Pi Zero 2 W). 

## Web Radio

You can indirectly stream to a device which only accepts a URL such as a Web Radio. In order to do so you will need to be running Home Assistant and do this:

- Install https://github.com/Poeschl-HomeAssistant-Addons/mpd (this will create an mpd media_player entity)
- Enable httpd_output in the mpd addon (which allows for web streaming)
- Use the HA media player plugin in music assistant and select mpd as the output

Thanks to [Manuel Rüger](https://github.com/mrueg) who showed us [here](https://github.com/orgs/music-assistant/discussions/2410#discussioncomment-10885780)
