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
- <b>Delete User.</b> Completely removes a user and all of their settings. Music sources they owned lose their owner, and a source only they could use is then off limits to everyone until an administrator changes its access. Their Music Assistant playlists become visible to everyone

## Editing Users

![Preview image](/assets/screenshots/edit-user.png)

The dialog shown above appears when clicking on a username or via the ⋮ menu.

Each user can be restricted to a set of specific players. Which music sources a user can use is not set here. Each music source has an owner and a sharing setting instead, described below.

## Roles

Every user has a role, and the role decides what they can do. The **Roles** tab lists the built-in roles and any role you made yourself.

- <b>Administrator.</b> Everything, including users, roles, every music source, the whole library, the server settings and system maintenance
- <b>User.</b> Browse and play, add and remove items in the library and favorites, and add music sources of their own
- <b>Guest.</b> Browse and play, and nothing else
- <b>Service.</b> The role of the [Home Assistant account](#the-home-assistant-account), which no other user is given

Select a built-in role to see what it allows. Built-in roles cannot be changed.

### Roles of your own

Select **Create role** to make one. Give it a name, start from **Guest** or **User**, and switch the permissions on or off:

- <b>Library.</b> Add and remove items in the library and favorites
- <b>Players.</b> Change player settings and create player groups
- <b>Music sources.</b> See the settings of the music sources, and add and manage their own music sources
- <b>Users.</b> See the other users, and show dashboards and host a music quiz
- <b>Server.</b> See the server settings, and see the background tasks and their logs

Browsing, playing, controlling the players, the queue and seeing the music source and player settings are always allowed, and are listed under **Always allowed**. Managing users, the whole library, every music source, the server settings and system maintenance stay with administrators, so you cannot hand those to a role of your own.

Some permissions need another one. Switching on **Add and manage their own music sources** also switches on **See the settings of the music sources** and holds it there.

A role that still has users cannot be deleted. Give those users another role first.

When you change someone's role, or change what a role allows, the app of everyone affected reconnects and starts again with their new permissions. They stay signed in.

## The Home Assistant account

The Home Assistant integration signs in with an account of its own, shown with a **System** badge and the **Service** role. Its username, role and password are fixed, and it cannot be disabled or deleted. Its display name, avatar, player restriction and access tokens work like any other user's.

The Service role can do what the User role can, and it can also change player settings and act on behalf of other users. It cannot own a music source, although a music source can be shared with it.

## The first time someone signs in

The first time a user signs in, a short welcome opens over the app. Administrators get the [setup wizard](/first-run/) instead, and guests get neither.

- <b>Make yourself at home.</b> <b>Standard</b> keeps the interface clean, <b>Expert</b> shows advanced options and extra details. It only sets a few defaults, and every setting stays theirs to change
- <b>Your players.</b> The players they can send music to
- <b>What you can listen to.</b> The music sources they can use
- <b>Connect your own accounts.</b> Only when their role lets them add music sources. They can add one there or move on and do it later
- <b>You're all set.</b> A summary, and the offer of a short [tour of the app](/ui/#take-a-tour)

They can close the welcome at any point, and it does not open again by itself. It only opens on its own in the first week after the account is made, so someone who signs in later never sees it. Anyone can go through it again from **Show the welcome again** at the bottom of the settings.

## Personal and shared music sources

Every music source is either shared or personal.

- <b>Shared (no owner).</b> Administrators manage the source.
- <b>Personal.</b> The source belongs to one user. Playback from it and its listening history use that user's account.

Who else can use a source depends on its sharing:

- <b>Only me.</b> Only the owner. Administrators see this as <b>Not shared</b>
- <b>Selected users.</b> The owner, if there is one, and the users you pick
- <b>All users except guests.</b> Everyone signed in with a role other than Guest
- <b>Everyone, including guests.</b> Any user

An administrator sets the owner and the sharing with **Access** in the source's ⋮ menu under [Settings → Music Sources](/settings/music-provider-settings/#owner-and-sharing). A source an administrator adds starts out shared with everyone, including guests. To set one up for themselves or for a user, they add it, make that person its owner and choose who else can use it, for example **Only me**. The owner of a personal source changes who it is shared with through **Sharing** in the same menu. Only an administrator can change the owner.

Users only see what comes from the music sources they can use, in the library, when browsing and in search. That includes administrators, although they see every source in the settings so they can manage it. When you play something, Music Assistant uses your own accounts first and never uses an account that is not shared with you.

### Adding your own music sources

Users can add music sources of their own when their role allows it, which the standard User role does. They find **Music Sources** in the settings, with the sources they own under **Your sources** and every other source they can use under **Shared with you**. There they can connect their own account for a service that can be added more than once, such as Spotify or Tidal, and reconfigure, share or remove it. A source a user adds starts out as **Only me**. Users whose role does not allow adding sources still find the page, with the sources shared with them.

A [Filesystem (local disk)](/music-providers/local-files/) source is the exception. Only an administrator can add one, and can then share it with a user or make that user its owner.

### Audiobook and podcast progress

Some audiobook and podcast sources, such as [Audiobookshelf](/music-providers/audiobookshelf/), [Audible](/music-providers/audible/), [gPodder](/music-providers/gpodder/) and [Overcast](/music-providers/overcast/), keep your listening progress on the account the source signs in with. The progress and listening history that come from that account go to the owner of the source, or to every user when the source has no owner.

Each user who wants their own progress adds the source with their own account, which makes them its owner. An administrator can also add it for them and make them the owner. A source that can only be added once, such as [Storytel](/music-providers/storytel/), has a single account, so it cannot give each user their own progress.
