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

Each user can be restricted to a specific set of players. Restricted users automatically gain access to any new browser window, desktop app, or mobile companion app player(s) linked to their profile. Which music sources a user can use is not set here. Each music source has an owner and a sharing setting instead, described below.

What a user sees the first time they sign in is covered under [First Run](/first-run/#the-first-time-a-user-signs-in).

## Roles

Every user has a role, and the role controls what they can do. A new user gets the User role unless you pick another. The **Roles** tab lists the built-in roles and, under **Custom roles**, any role you make yourself. The built-in roles are:

- <b>Administrator.</b> Has access to everything, including users, roles, every music source, the whole library, the server settings and system maintenance
- <b>User.</b> Can browse and play, add and remove items in the library and favorites, and add music sources of their own. A user can also show dashboards, host a music quiz, and see the music source and server settings and the background tasks
- <b>Guest.</b> Can browse and play only
- <b>Service.</b> The role of the [Home Assistant account](#the-home-assistant-account), which no other user is given

Select a built-in role to see what it allows. Built-in roles cannot be changed.

### Roles of your own

Select **Create role** to make one. Give it a name, start from **Guest** or **User**, and switch the permissions on or off:

- <b>Library.</b> Add and remove items in the library and favorites
- <b>Players.</b> Change player settings and create player groups
- <b>Music sources.</b> See the settings of the music sources, and add and manage their own music sources
- <b>Users.</b> See the other users, and show dashboards and host a music quiz
- <b>Server.</b> See the server settings, and see the background tasks and their logs

Browsing the library, playing music, controlling the players and the queue, seeing the music sources and seeing the player settings are always allowed, and are listed under **Always allowed**. Managing users, the whole library, every music source, the server settings and system maintenance stay with administrators, so you cannot hand those to a role of your own.

Some permissions need another one. Switching on **Add and manage their own music sources** also switches on **See the settings of the music sources** and holds it there.

A role that still has users cannot be deleted. Give those users another role first.

When you change someone's role, or change what a role allows, the app of everyone affected reconnects and starts again with their new permissions. They stay signed in.

## The Home Assistant account

The Home Assistant integration signs in with an account of its own, shown with a **System** badge and the **Service** role. Its username, role and password are fixed, and it cannot be disabled or deleted. Its display name, avatar, player restriction and access tokens work like any other user's.

The Service role can do what the User role can, and it can also see the other users, change player settings and act on behalf of other users. It cannot own a music source, although a music source can be shared with it.

## OpenID Connect sign-in

OpenID Connect lets people sign in through an identity provider such as Authentik. Enable it in **Settings → System → Webserver**. It is off by default. Password sign-in and any configured Home Assistant sign-in stay available.

### Configuration

Create a local administrator first and keep its password for recovery. Use HTTPS for the Music Assistant web address. If you use a reverse proxy, set **Internal URL** to the address people use to open Music Assistant.

1. Register an application at your identity provider using the authorization code flow with PKCE S256 and signed ID tokens. For a Music Assistant address of `https://music.example.com`, register this exact redirect URI, including its query:

   ```text
   https://music.example.com/auth/callback?provider_id=oidc
   ```

   If people sign in through both the Internal URL and an External URL, register a callback for each address.
2. In Music Assistant, enable **Enable OpenID Connect** and enter the **Identity provider name**. This appears on the sign-in button.
3. Enter the **OpenID Connect issuer**, **OpenID Connect client ID** and **OpenID Connect client secret** from your provider. Copy the issuer exactly, including a trailing slash if present. The issuer must use HTTPS.
4. In advanced settings, check **Token endpoint authentication** matches the application you registered. The default is `client_secret_basic`. Use `client_secret_post` if your provider requires it, or `none` for a public client with PKCE and no client secret.
5. Restrict who can access the application at your identity provider. Then enable **Allow OpenID Connect self-registration** to let those people create Music Assistant accounts on their first sign-in.

Music Assistant requests the `openid` and `profile` scopes. A new account receives the **User** role. An administrator can change its role and player access in User Management.

### Authentik

Create an OAuth2/OpenID provider and its application in Authentik. Choose a confidential client, enable the **Authorization code** grant type, and select a signing key, the `openid` and `profile` scope mappings, and the redirect URI above. Keep the provider's default issuer mode, **Each provider has a different issuer**. The global issuer mode is not supported.

An issuer typically looks like `https://auth.example.com/application/o/music-assistant/`. Open its `.well-known/openid-configuration` document and copy the `issuer` value into Music Assistant. Set the identity provider name to **Authentik** to show **Sign in with Authentik** on the login page. See the <a href="https://docs.goauthentik.io/add-secure-apps/providers/oauth2/" target="_blank" rel="noopener noreferrer">Authentik provider documentation</a> for its application settings.

### Existing accounts and access

OpenID Connect creates a separate account even if its username or email matches an existing local or Home Assistant account. It does not automatically link accounts. A matching username receives a different available name. Subsequent sign-ins with the same provider identity use the same Music Assistant account and keep its role and restrictions.

Turning off OpenID Connect self-registration blocks new identities while allowing existing linked accounts to sign in. Disabling a Music Assistant account also blocks its OpenID Connect sign-in. Identity-provider groups do not assign Music Assistant roles.

Signing out ends the current Music Assistant session. It does not sign you out of your identity provider or other applications. Disabling someone at the identity provider prevents future sign-ins, but does not revoke Music Assistant sessions already issued. To remove their Music Assistant access immediately, disable the account in User Management.

### Recovery and limitations

If the identity provider is unavailable or misconfigured, use your local administrator's username and password to sign in and correct the Webserver settings. Turning off OpenID Connect removes its sign-in button without removing users or their provider links.

When using Remote Access, OpenID Connect needs an **External URL** that the browser can reach. The remote app alone cannot complete this sign-in flow. Keep a backup of Music Assistant's data before downgrading to a version without OpenID Connect support after creating linked accounts.

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

Users can add music sources of their own when their role allows it, which the standard User role does. They find **Music Sources** in the settings, with the sources they own under **Your sources** and every other source they can use under **Shared with you**. There they can connect their own account for a service that can be added more than once, such as Spotify or Tidal, and reconfigure, share or remove it. A source a user adds starts out as **Only me**. Users whose role does not allow adding sources can still find the page, and see the sources shared with them.

A user can also add a [Local files](/music-providers/local-files/) source of their own, on a folder in one of the storage locations. Only an administrator can add storage locations, on the [Storage](/settings/storage/) page.

### Audiobook and podcast progress

Some audiobook and podcast sources, such as [Audiobookshelf](/music-providers/audiobookshelf/), [Audible](/music-providers/audible/), [gPodder](/music-providers/gpodder/) and [Overcast](/music-providers/overcast/), keep your listening progress on the account the source signs in with. The progress and listening history that come from that account go to the owner of the source, or to every user when the source has no owner.

Each user who wants their own progress adds the source with their own account, which makes them its owner. An administrator can also add it for them and make them the owner. A source that can only be added once, such as [Storytel](/music-providers/storytel/), has a single account, so it cannot give each user their own progress.
