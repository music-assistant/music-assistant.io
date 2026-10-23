---
title: "Auracast"
description: Broadcast Music Assistant audio to Bluetooth LE Audio Auracast receivers.
---

# Auracast <img src="/assets/icons/auracast-icon.png" alt="Auracast logo" style="width: 70px; float: right;" loading="lazy" />

Music Assistant can broadcast audio over Bluetooth LE Audio Auracast using a compatible Bluetooth controller connected to the server. Contributed and maintained by [Yagoor](https://github.com/Yagoor).

Auracast sends one Bluetooth broadcast that nearby compatible receivers can join. Music Assistant does not discover or control the receivers; use each receiver's Auracast controls to find and join the broadcast.

## Features

- Broadcast Music Assistant audio to Auracast receivers nearby
- Multiple receivers can listen to the same broadcast in sync
- Pause, software volume control, and configurable broadcast name
- Optional Bluetooth manufacturer data in the broadcast advertisement

## Configuration

1. To use Auracast, you need a supported Bluetooth LE Audio USB adapter plugged into the machine running Music Assistant. The computer’s built-in Bluetooth and ordinary Bluetooth dongles won’t work. See the list of tested adapters below.
2. In Music Assistant, go to **Settings → Player providers**, click **Add a player provider**, and select `Auracast`.
3. Select the compatible controller found by setup, choose a broadcast name, then save.
4. Start playback on the `Auracast` player. On each receiver, scan for the broadcast name and join it.

Setup checks available serial ports and offers controllers that pass the Bluetooth capability check. The controller must be attached to the machine running Music Assistant, and the server process needs permission to access its serial device.

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/), Auracast has these settings:

- <b>Serial port.</b> The Bluetooth adapter to use. Setup finds compatible adapters for you, so you only need to change this if you have more than one.
- <b>Serial baud rate.</b> How fast Music Assistant talks to the adapter. Leave this at the default (1,000,000) unless your adapter’s instructions say otherwise.
- <b>Broadcast name.</b> The name people see when they look for a broadcast on their headphones, speaker or phone. The default is `Music Assistant Auracast`.
- <b>Manufacturer data.</b> Advanced, and most people can leave this blank. It adds custom data to the broadcast, which some receivers use. Enter it as `COMPANY_ID:HEX_DATA` and separate multiple entries with a semicolon. Company IDs are decimal unless you prefix them with `0x`.

The player exposes the standard [Individual Player Settings](/settings/individual-player/).

The volume you set in Music Assistant applies to everyone listening to the broadcast. Each listener can still adjust their own volume on their headphones or speaker.

Audio quality is compressed (not lossless), 48 kHz stereo.

## Tested Controllers

The following controller firmware has been tested with the Auracast provider:

- **Nordic nRF52840 Dongle**, flashed with the [HCI UART Bumble firmware](https://github.com/Yagoor/hci_uart_bumble). The dongle doesn't work out of the box, so follow the firmware's instructions to flash it before plugging it into the Music Assistant machine.

This is currently the only adapter tested with Music Assistant.

**Using an adapter that isn't listed?** It must connect as a serial HCI device (H:4 over UART) and support LE Periodic Advertising and isochronous broadcast. Music Assistant only shows adapters that pass these checks during setup.

## Known Issues / Notes

- The computer's built-in Bluetooth and ordinary Bluetooth dongles won't work, even if they support LE Audio. Music Assistant needs an adapter it can control directly, like the one listed above.
- Headphones and speakers don't appear as players in Music Assistant. Join the broadcast from the device itself, or from its app or your phone's Bluetooth settings.
- Your headphones or speaker must support Auracast. Range depends on the adapter and your surroundings. Walls reduce it.
- Devices listening to the same broadcast are designed to play in sync, but the broadcast can’t be grouped with other Music Assistant players.

## Not Yet Supported

- USB Controllers
- Native controllers
