# Migrating from the HACS Integration to the HA Integration
 
Migration can be done by:

- Uninstalling the existing HACS Integration by navigating to HA SETTINGS >>  DEVICES & SERVICES >> INTEGRATIONS >> MUSIC ASSISTANT and selecting Delete from the ⋮ menu
- Uninstalling the custom integration from HACS by navigating to HACS, searching for Music Assistant and selecting ✖ Remove from the ⋮ menu
- Restarting Home Assistant
- Installing the HA Integration as described at the start of this section
- Adjusting the MA actions in scripts and automations by replacing `mass.` with `music_assistant.` 

!!! note "Note"
    There was a problem with the 2024.12.0 version of the Integration as it relates to the repair. If you have a persistent repair notification or if you ignored the notification and want to remove it from the ignored list then install the 2024.12.1 version of the HACS Integration using ALL of the steps below and then go through the steps above to remove it
