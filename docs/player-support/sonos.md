# Sonos ![Preview image](../assets/icons/sonos-icon.svg){ width=70 align=right }

Music Assistant has support for Sonos devices. There are two providers available. "Sonos S1" for the S1 devices and "Sonos" for S2.

## Features

- Sonos devices are auto detected by Music Assistant
- Sonos devices from the same series (S1 or S2) will play in sync when grouped
- Any physical control buttons on the device should be supported as long as [flow mode](../faq/normalization.md/#track-queueing) is not enabled. 

## Known Issues / Notes

- Issues have been reported with the Sonos Arc and Unifi networking equipment. Ensure Multicast DNS and IGMP snooping are turned on if you have problems
- S1 and S2 devices cannot be grouped together in the same Sync Group. S1 and S2 devices can be grouped via a Universal Group but will not play in sync
- Using the Sonos HA Integration at the same time as the MA Sonos S1 player provider may cause problems. It is not possible to run the HA provider and Sonos S1 provider on the same host and additionally these speakers do not like too many requests from too many sources. It is therefore recommended to only use the MA Sonos S1 player provider.
- Sonos has removed Airplay 1 support from the following models: ERA 100, ERA 300, Move 2. As such, Airplay streaming to these devices is not possible.
