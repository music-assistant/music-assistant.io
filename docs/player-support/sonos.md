# Sonos ![Preview image](../assets/icons/sonos-icon.svg){ width=70 align=right }

Music Assistant has support for Sonos devices. There are two providers available. "Sonos S1" for the S1 devices and "Sonos" for S2.

## Features

- Sonos devices are auto detected by Music Assistant
- Sonos devices from the same series (S1 or S2) will play in sync when grouped
- Any physical control buttons on the device should be supported as long as [flow mode](../faq/normalization.md/#track-queueing) is not enabled
- If the Sonos device supports Airplay then grouping Sonos devices with other Airplay devices is possible 

## Known Issues / Notes

- Issues have been reported with the Sonos Arc and Unifi networking equipment. Ensure Multicast DNS and IGMP snooping are turned on if you have problems
- S1 and S2 devices cannot be grouped together in the same Sync Group. S1 and S2 devices can be grouped via a Universal Group but will not play in sync
- Using the Sonos HA Integration at the same time as the MA Sonos S1 player provider may cause problems. It is not possible to run the HA provider and Sonos S1 provider on the same host and additionally these speakers do not like too many requests from too many sources. It is therefore recommended to only use the MA Sonos S1 player provider
- Syncing Sonos devices with Airplay devices requires the enabling of an option on the Sonos player
- Newer generation Sonos speakers appear to no longer support Airplay 1 therefore using the Airplay provider to stream to these speakers is not possible. Speakers that are detected as falling into this category will be disabled by default and if you enable them you will be presented with a warning
