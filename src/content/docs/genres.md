---
title: Genres
description: A Walkthrough of the Music Assistant Genre Functionality
---

# Genres

Music Assistant includes a genre system that automatically categorises your music library. Genres are used to organise and discover music across all your providers, making it easy to browse by style, find similar music, and keep your library well-structured.

## The Genre Library

The genre library is accessible from the main navigation and displays all genres in your collection. By default, only genres that have media items linked to them are shown.

![image](/assets/screenshots/genres/genre-library.png)

### Sorting

Genres can be sorted using the sort option in the toolbar:

- **Name** (ascending/descending)
- **Sort Name** (ascending/descending)
- **Date Added** (ascending/descending)
- **Play Count** (ascending/descending)

### Filtering

The toolbar provides several filter options:

- **Favorites Only** — Show only genres marked as favorites
- **Hide Empty Genres** — Enabled by default. When active, genres with no linked media items are hidden from the list. Toggle this off to see all genres, including those awaiting media mappings

![image](/assets/screenshots/genres/genre-toolbar.png)

### Search

Use the search button in the toolbar to find genres by name. Genre names are matched against both the original name and any translated display names.

### Adding a Genre

Administrators can add new genres manually using the **Add Genre** option in the toolbar menu. This opens a dialog where you can provide:

- **Genre name** (required)
- **Sort name** (optional — used for custom sort ordering)
- **Description** (optional)

![image](/assets/screenshots/genres/add-new.png)

## Genre Detail Page

Selecting a genre from the library opens its detail page. This page provides an overview of the genre and all media associated with it.

![image](/assets/screenshots/genres/genre-overview.png)

### Genre Header

The header displays:

- **Genre name** — Translated to the user's language for built-in genres
- **Description** — Sourced from built-in genre descriptions or custom metadata. Clicking the description expands it to full length
- **Favorite toggle** — Mark or unmark the genre as a favorite
- **Provider icon** — Indicates where the genre is stored

### Admin Actions

Administrators see additional action buttons in the header:

- **Merge** — Merge this genre into another genre (see [Merging Genres](#merging-genres))
- **Delete** — Delete this genre from the library (see [Deleting Genres](#deleting-genres))

These actions are also available in the three-dot overflow menu.

![image](/assets/screenshots/genres/info-header.png)

### Overview Rows

Below the header, the detail page displays media items associated with the genre, grouped by type:

- Artists
- Albums
- Tracks
- Playlists
- Radio Stations

Each row can be expanded to browse the linked items.

### Genre Aliases

Administrators can manage genre aliases from the detail page. Aliases allow multiple names to resolve to the same genre, which is useful when different providers use different names for the same style of music.

![image](/assets/screenshots/genres/alias-mappings.png)

The alias manager supports:

- **Add Alias** — Create a new alias for this genre
- **Link Alias** — Search for and link an existing alias from another genre
- **Promote Alias** — Convert an alias into its own standalone genre
- **Remove Alias** — Unlink an alias from this genre

## Genre Actions

### Merging Genres

Merging allows you to combine two or more genres into one. All aliases and media mappings from the source genres are transferred to the target genre, and the source genres are deleted.

To merge genres:

1. Select one or more genres in the library (or open a genre's detail page)
2. Choose **Merge into existing genre** from the context menu or the header action
3. In the dialog, search for and select the target genre
4. Confirm the merge

![image](/assets/screenshots/genres/genre-merge.png)

NOTE: Merging is a destructive action. The source genres will be permanently deleted. All their aliases and media mappings are transferred to the target.

### Deleting Genres

Administrators can delete genres from the library. Deleting a genre removes it and all its associated aliases and media mappings.

To delete genres:

1. Select one or more genres in the library, or open a genre's detail page
2. Choose **Delete genre** from the context menu or the header action
3. Confirm the deletion in the two-step confirmation dialog

![image](/assets/screenshots/genres/delete-genre.png)

![image](/assets/screenshots/genres/delete-genre-sure.png)

CAUTION: Deleting a genre is permanent and cannot be undone.

### Linking Media Items to a Genre

You can manually link library media items (artists, albums, tracks, playlists, radio stations) to a genre. This is useful when automatic genre detection has not assigned the correct genres, or when you want to create custom genre groupings.

To link items to a genre:

1. Right-click a media item (or select multiple items and open the actions menu)
2. Choose **Link to genre**
3. In the dialog, search for and select the target genre
4. Confirm the link

![image](/assets/screenshots/genres/genre-link-media.png)

NOTE: The link to genre option is only available for items that are in your library. Items from external providers that have not been added to the library cannot be linked.

## Genres on Media Items

When viewing an artist, album, or track detail page, the genres associated with that item are displayed as clickable chips below the description. Clicking a genre chip navigates to that genre's detail page.

![image](/assets/screenshots/genres/mediaitem-infoheader-chips.png)
