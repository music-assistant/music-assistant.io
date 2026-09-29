---
title: "Storage"
description: The folders, drives and network shares your music sources can use
---

# Storage settings <img src="/assets/icons/storage-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

A storage location is a folder, a drive or a network share that Music Assistant can read files from. When you add a [Local files](/music-providers/local-files/) source, you pick its folder from these locations.

The **Storage** page in the settings lists the storage locations and lets you add network shares. Only administrators see this page.

![The Storage page with the Home Assistant media folder and a network share](/assets/screenshots/settings-storage.png)

## Where storage locations come from

Which locations you see depends on how Music Assistant is installed.

- <b>Home Assistant App.</b> The Home Assistant media folder (`/media`) and every network share added to it. A network share you add on the Storage page is connected by Home Assistant itself, so it also shows up in Home Assistant under **Settings → System → Storage**. It works the other way round too: a network share added there with the usage **Media** shows up in Music Assistant
- <b>Docker.</b> Every folder or volume you map into the container is found automatically, for example `-v /mnt/nas/music:/media/music`. For music on a NAS, mount the share on the host and map it into the container, as described under [Your music files](/installation/#your-music-files)
- <b>Without a container.</b> On Linux, Music Assistant finds the drives and network shares that are mounted on the computer. An administrator can also add any folder with **Add a folder on this server**

## Music locations

Each location shows its name, its path, the kind of location it is, such as **Network share** or **USB drive**, and the free space where it is known. Two more labels say something about its state:

- <b>Unavailable.</b> Music Assistant cannot reach the location right now, for example because the NAS is switched off. The reason is shown below it. A Local files source on this location is unavailable too. It returns by itself once the location is reachable again, and nothing is removed from the library while it is away
- <b>Read-only.</b> Music Assistant can read the files but not change them. Playlist files in this location cannot be created or edited. Playlists you create in Music Assistant itself are not affected

## Adding a network share

Select **Add network share** and fill in the form:

- <b>Share type.</b> SMB or NFS. Most NAS devices and Windows computers share folders over SMB
- <b>Server.</b> The name or IP address of the NAS or computer, for example `nas.local` or `192.168.1.10`
- <b>Share name.</b> For SMB, the name of the shared folder, for example `music`
- <b>Export path.</b> For NFS, the folder the server shares, for example `/volume1/music`
- <b>Username and Password.</b> For SMB. Leave both empty to connect as a guest
- <b>Read-only.</b> Music Assistant can read from the share but not change anything on it
- <b>Protocol version.</b> Under **Show advanced settings**. Leave it on **Automatic** unless the share does not connect with that setting. On the Home Assistant App, only SMB 1.0 and 2.0 can be picked, and NFS has no version setting

Select **Add**. The share joins the list of music locations, and you can pick it, or a folder inside it, for a Local files source.

If this installation of Music Assistant cannot connect a network share itself, the button is not there. In a container, the page shows **Add network shares on the host** instead. [Mount the share on the host](/installation/#with-docker) and map it into the container. It then shows up as a location of its own. Without a container, the page shows **Mount network shares on this server**. Mount the share on the computer. On Linux, it then shows up as a location of its own.

### Changing or removing a network share

A network share that Music Assistant added has three buttons:

- <b>Reload.</b> Connects the share again, for example after the NAS was switched off. While a music source uses the share, Music Assistant also tries this by itself
- <b>Edit.</b> Changes the settings of the share. The password is not shown. Leave it empty to keep the current one
- <b>Remove.</b> Disconnects the share. The files on it are not deleted

When a location holds the folder of an enabled music source, it shows **Used by** with the name of that source, and it cannot be removed. Disable or remove that music source first.

A location can also lie inside the folder of a music source. A source on `/media` reads every network share below it, for example. Such a location shows **Also read by** with the name of that source. It can be removed. The source then drops the items of that share from the library at its next sync, and Music Assistant tells you so before you confirm.

A share that was added in Home Assistant, or mounted on the host, has no buttons here. Change it where it was added.

## Adding a folder on this server

This is only possible when Music Assistant does not run in a container. Select **Add a folder on this server** and enter the full path of an existing folder, for example `/home/me/Music`. **Remove** takes it off the list again. The folder and its files are not deleted.

A drive or network share that is mounted on the computer can be added the same way. Enter the path it is mounted on, for example `/mnt/nas`. Other users can then pick it for a music source of their own. While the drive or share is not mounted, the folder shows as **Unavailable**.

On Docker the button is not there. Map the folder into the container instead. On the Home Assistant App, put the files in the media folder or on a network share.

## Server storage

This part of the page shows where Music Assistant keeps its own data and its cache, how much space they use and how much is free. These locations are never offered for a music source.

## Who can use the storage locations

Only administrators see the Storage page, and only they can add or remove storage locations. A user whose role allows [adding music sources of their own](/settings/user-management/#adding-your-own-music-sources) can add a Local files source in a music location. On the Home Assistant App and on Docker, they can pick any music location. Without a container, they can only pick the folders and network shares an administrator added on the Storage page.

## Known limits

- A network share connected through Home Assistant sits in the Home Assistant media folder. Home Assistant's media browser, and other apps that use the media folder, can see it too
- Music Assistant assumes your NAS is on your local network. It adds no encryption of its own, so a network share should not be reached over the internet
