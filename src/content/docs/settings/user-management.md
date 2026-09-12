---
title: "User Management"
---

# User Management <img src="/assets/icons/user-management-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

This page allows management of users, their roles and permissions.

## Managing Users

On the right side of each username is a ⋮ menu which has four menu items

- <b>Edit User.</b> See the section below
- <b>Manage access tokens.</b> Allows management of login sessions and long lived tokens the same as is shown on an individuals [profile settings](/settings/profile/)
- <b>Disable User.</b> Prevents user access. Settings are preserved
- <b>Delete User.</b> Completely removes a user and all of their settings. Music sources they owned lose their owner, and a source only they could use is then off limits to everyone until an administrator changes its access. Their playlists become visible to everyone

## Editing Users

![Preview image](/assets/screenshots/edit-user.png)

The dialog shown above appears when clicking on a username or via the ⋮ menu.

Each user can be restricted to a set of specific players. Which music sources a user can use is not set here. Each music source has an owner and a sharing setting instead, described below.

## Personal and shared music sources

Every music source is either shared or personal.

- <b>Shared (no owner).</b> Administrators manage the source.
- <b>Personal.</b> The source belongs to one member. Anyone who plays from it, including the people it is shared with, uses that member's account and adds to its listening history.

Who else can use a source depends on its sharing:

- <b>Only me.</b> Only the owner. Administrators see this as <b>Not shared</b>
- <b>Selected members.</b> The owner, if there is one, and the members you pick
- <b>All members.</b> Every signed-in member, but not guests
- <b>Everyone, including guests.</b> Any user

An administrator sets the owner and the sharing with **Access** in the source's ⋮ menu under [Settings → Music Sources](/settings/music-provider-settings/#owner-and-sharing). A source an administrator adds starts out shared with everyone, including guests. To set one up for themselves or for a member, they add it, make that person its owner and choose who else can use it, for example **Only me**. The owner of a personal source changes who it is shared with through **Sharing** in the same menu. Only an administrator can change the owner.

Users only see what comes from the music sources they can use, in the library, when browsing and in search. That includes administrators, although they see every source in the settings so they can manage it. When you play something, Music Assistant uses your own accounts first and never uses an account that is not shared with you.

### Adding your own music sources

Members can add music sources of their own when their role allows it, which the standard User role does. They find **Music Sources** in the settings, with the sources they own. There they can connect their own account for a service that can be added more than once, such as Spotify or Tidal, and reconfigure, share or remove it. A source a member adds starts out as **Only me**.

A [Filesystem (local disk)](/music-providers/local-files/) source is the exception. Only an administrator can add one, and can then share it with a member or make that member its owner.

### Audiobook and podcast progress

<a name="filter-progress-multi-user"></a>
Some audiobook and podcast sources, such as [Audiobookshelf](/music-providers/audiobookshelf/), [Audible](/music-providers/audible/), [gPodder](/music-providers/gpodder/) and [Overcast](/music-providers/overcast/), keep your listening progress on the account the source signs in with. The progress and listening history that come from that account go to the owner of the source, or to every user when the source has no owner.

To give each member their own progress, each member adds the source with their own account, which makes them its owner. An administrator can also add it for a member and make them its owner. A source that can only be added once, such as [Storytel](/music-providers/storytel/), has a single account, so it cannot give each member their own progress.
