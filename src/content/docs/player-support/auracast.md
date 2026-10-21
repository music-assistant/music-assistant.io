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

1. Connect an Auracast-capable Bluetooth controller to the Music Assistant server over UART. The controller must expose a serial HCI interface and support LE Periodic Advertising.
2. In Music Assistant, go to **Settings → Player providers**, click **Add a player provider**, and select `Auracast`.
3. Select the compatible controller found by setup, choose a broadcast name, then save.
4. Start playback on the `Auracast` player. On each receiver, scan for the broadcast name and join it.

Setup checks available serial ports and offers controllers that pass the Bluetooth capability check. The controller must be attached to the machine running Music Assistant, and the server process needs permission to access its serial device.

## Settings

In addition to the [Player Provider Settings](/settings/player-provider/), Auracast has these settings:

- <b>Serial port.</b> The UART device connected to the Bluetooth controller. Setup lists serial devices that support LE Periodic Advertising.
- <b>Serial baud rate.</b> The UART speed used to communicate with the controller. The default is 1,000,000 baud; it must match the controller firmware.
- <b>Broadcast name.</b> The name shown when receivers scan for Auracast broadcasts. The default is `Music Assistant Auracast`.
- <b>Manufacturer data.</b> Optional Bluetooth manufacturer-specific data in `COMPANY_ID:HEX_DATA` format. Use a semicolon to separate multiple entries. The company identifier is a decimal number by default; prefix hexadecimal identifiers with `0x`.

The player exposes the standard [Individual Player Settings](/settings/individual-player/), including software volume control. Volume is applied by Music Assistant before encoding the audio for the broadcast.

The broadcast uses stereo LC3 audio at 48 kHz, with 10 ms frames and a fixed combined bitrate of 160,000 bits per second. The audio is lossy and does not support hi-res output.

## Tested Controllers

The following controller firmware has been tested with the Auracast provider:

- [HCI UART Bumble (Zephyr)](https://github.com/Yagoor/hci_uart_bumble) running on the **Nordic nRF52840 Dongle**. The firmware exposes the controller to Bumble over USB as an H:4 HCI serial interface. Use the default 1,000,000 baud setting. The Music Assistant setup flow detected LE Periodic Advertising support on this controller.

This is the only controller currently tested with Music Assistant. Other controllers may work if they expose a compatible UART HCI interface and support LE Periodic Advertising, but have not yet been verified.

## Known Issues / Notes

- The provider requires a compatible serial HCI interface. Direct USB HCI and Bluetooth adapters exposed only through the operating system's normal Bluetooth stack are not supported. USB devices that expose a compatible serial HCI interface may work.
- Auracast receivers are not listed as separate Music Assistant players. Receivers discover and join the broadcast using their own controls.
- Receivers must support Bluetooth LE Audio Auracast. The range and reliability depend on the controller, its antenna, and the environment.
- The broadcast is not grouped with other Music Assistant players. Auracast receivers listening to the same broadcast share its timing.

## Not Yet Supported

- USB Controllers
- Native controllers
