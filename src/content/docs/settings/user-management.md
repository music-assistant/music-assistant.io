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
- <b>Delete User.</b> Completely removes a user and all of their settings

## Editing Users

![Preview image](/assets/screenshots/edit-user.png)

The dialog shown above appears when clicking on a username or via the ⋮ menu.

Each user can be restricted to a set of specific players. Which music sources a user can use is not set here. Each music source has an owner and a sharing setting instead, described below.

## Personal and shared music sources

Every music source is either shared or personal.

- <b>Shared.</b> The source has no owner, and administrators manage it. A source an administrator adds is shared with everyone.
- <b>Personal.</b> The source belongs to one member. Playback and listening history use that member's account, also when someone they shared it with is listening.

Who else can use a source depends on its sharing:

- <b>Only me.</b> Only the owner. Administrators see this as Not shared
- <b>Selected members.</b> The owner and the members you pick
- <b>All members.</b> Every signed-in member, but not guests
- <b>Everyone, including guests.</b> Any user

An administrator sets the owner and the sharing with <b>Access</b> in the source's ⋮ menu under [Settings → Music Sources](/settings/music-provider-settings/#owner-and-sharing). The owner of a personal source changes who it is shared with through <b>Sharing</b> in the same menu. Only an administrator can change the owner.

Users only see what comes from the music sources they can use, in the library, when browsing and in search. That includes administrators, although they see every source in the settings so they can manage it. When you play something, Music Assistant uses your own accounts first and never uses an account that is not shared with you.

### Adding your own music sources

Members can add music sources of their own when their role allows it, which the standard User role does. They find <b>Music Sources</b> in the settings, with the sources they own. There they can connect their own account for a service that can be added more than once, such as Spotify or Tidal, and reconfigure, share or remove it. A source a member adds starts out as Only me.

Local disk sources are the exception. Only an administrator can add one, and can then share it with a member or make that member its owner.

### Audiobook and podcast progress

<a name="filter-progress-multi-user"></a>
Some audiobook and podcast sources, such as [Audiobookshelf](/music-providers/audiobookshelf/), [Audible](/music-providers/audible/), [gPodder](/music-providers/gpodder/) and [Overcast](/music-providers/overcast/), keep your listening progress on the account the source signs in with. The progress and listening history that come from that account go to the owner of the source. A shared source has no owner, so its progress counts for everyone.

To give each member their own progress, add the source once for each member with that member's own account, and make that member its owner. A source that can only be added once, such as [Storytel](/music-providers/storytel/), has a single account, so it cannot give each member their own progress.
