---
title: Tag Player Plugin
description: Give something in your library a short name of your own, like an NFC tag or QR code, so a scan can start it playing.
---

# Tag Player Plugin

Tag Player lets you attach a short name of your own to anything in your music library. That name is usually the code stored on an NFC tag or in a QR code, so a child can tap a card on a reader and hear their bedtime story, or a sticker on a shelf can start your Sunday morning playlist.

You do the setup once. After that, whatever reads your tags just tells Music Assistant the name, and the right music plays.

:::note
Tag Player is currently in alpha. The way it works may change between Music Assistant releases.
:::

## Features

- Give any text you like to an item in your library, such as an NFC code, a QR code, or a word you make up
- Works with tracks, albums, playlists, artists, radio stations, audiobooks, podcasts, and genres
- Start a tagged item on any of your speakers
- Choose whether it takes over the speaker, plays next, or joins the end of the queue
- See a list of everything you have tagged
- Point a tag at something else whenever you like
- Works with Home Assistant automations, so a scanned card can start playback
- Nothing extra is stored on your system, the tag is kept with the item itself

## Requirements

- The music you want to tag needs to be in your library already
- Something that reads your tags, such as a Home Assistant NFC tag, a phone, or a QR scanner
- A speaker that Music Assistant can play to
- An access token, so the tools page and your automations can talk to Music Assistant. The page at `/api-docs` on your Music Assistant address explains how to make one

:::note
Tag Player does not add a page to the Music Assistant interface. You set your tags up in your web browser using the tools page described below, then trigger them from an automation.
:::

## Installation

1. Go to **Settings → Plugins → Add a Plugin**.
2. Add **Tag Player**.

There is nothing to fill in. Tag Player has no settings of its own.

## Setting up your first tag

This walkthrough links a bedtime story to a card and plays it. Once you have done it once, the rest are quick.

### Step 1: Open the tools page

In a web browser, go to your Music Assistant address followed by `/api-docs/swagger`. If you normally open Music Assistant at `http://192.168.1.50:8095`, then the tools page is at `http://192.168.1.50:8095/api-docs/swagger`.

This page lists everything Music Assistant can do, as a set of forms you can fill in. You will need to sign in with an access token. The page at `/api-docs` explains how to get one.

:::tip
Bookmark this page. It is the same page you use later to check or change your tags.
:::

### Step 2: Find the number of the item you want

Music Assistant gives every item in your library a number, and Tag Player needs it.

1. On the tools page, find `music/search` and open it.
2. Select **Try it out**.
3. Type the name of your audiobook, playlist, or track in the search box.
4. Select **Execute**.
5. Look through the results for the one that says `"provider": "library"`, and note the number next to `"item_id"`.

Write that number down. In this walkthrough we will pretend it is `17`, and that it is an audiobook.

### Step 3: Decide what to call your tag

The name can be anything, as long as it is not blank.

If your tag reader gives you a code, use that code. A Home Assistant NFC tag has an ID that looks something like `04a31b225c80`. If you are just trying things out, a plain word such as `bedtime` works perfectly well.

### Step 4: Link the tag

1. On the tools page, find `tagplayer/link` and open it.
2. Select **Try it out**.
3. In **tag_id**, enter your tag name, for example `bedtime`.
4. In **target**, enter the type of item, a slash, and the number from step 2, for example `audiobook/17`.
5. Select **Execute**.

You should get a reply confirming the link, including a line like `tagplayer://audiobook/bedtime`. That line is your tag's address, and you will use it in the next section.

The types you can use in **target** are:

| Type of item | Write it as |
|---|---|
| Track | `track` |
| Album | `album` |
| Playlist | `playlist` |
| Artist | `artist` |
| Radio station | `radio` |
| Audiobook | `audiobook` |
| Podcast | `podcast` |
| Genre | `genre` |

### Step 5: Try it

Still on the tools page, find `tagplayer/play`, select **Try it out**, enter your tag name and the name of a speaker, and select **Execute**. The music should start.

## Playing a tag when a card is scanned

This is what most people want in the end. There are two ways to do it in Home Assistant, and which one suits you depends on how many cards you have.

### One automation per card

If you only have a few cards, use the address you got in step 4 as the `media_id`.

```yaml
action: music_assistant.play_media
target:
  entity_id: media_player.bedroom
data:
  media_id: tagplayer://audiobook/bedtime
```

Put that action in an automation triggered by your NFC tag, and tapping the card starts the story in the bedroom.

### One automation for every card

If you plan to have a stack of cards, it is worth setting this up instead. You write one automation, and every new card you tag afterwards works without touching Home Assistant again.

First add a `rest_command` to your `configuration.yaml`, using your own Music Assistant address and token.

```yaml
rest_command:
  tagplayer_play:
    url: http://192.168.1.50:8095/api
    method: post
    content_type: application/json
    headers:
      authorization: "Bearer YOUR_TOKEN"
    payload: >
      {"message_id": "ha",
       "command": "tagplayer/play",
       "args": {"tag_id": "{{ tag_id }}", "player_id": "{{ player_id }}"}}
```

Restart Home Assistant, then make one automation that passes the scanned code straight through.

```yaml
triggers:
  - trigger: tag
actions:
  - action: rest_command.tagplayer_play
    data:
      tag_id: "{{ trigger.tag_id }}"
      player_id: bedroom
```

This works for every card because `tagplayer/play` looks up what the tag points at, so you do not have to tell it whether the card is an album, a playlist, or an audiobook.

:::tip
Put your token in `secrets.yaml` rather than in `configuration.yaml`. Add a line such as `ma_token: "Bearer abc123..."` to secrets, then write `authorization: !secret ma_token` in the command above.
:::

The other commands work the same way. Copy the `rest_command` block, change `tagplayer/play` to the command you want, and change the values inside `args` to match.

### Choosing how it starts playing

You can also choose how the music should start by adding an option.

| Option | What happens |
|---|---|
| `play` | Starts straight away and keeps the rest of the queue. This is what you get if you choose nothing. |
| `replace` | Clears the queue and starts fresh. |
| `next` | Plays after the current song finishes. |
| `replace_next` | Replaces whatever was lined up next. |
| `add` | Joins the end of the queue. |

With `music_assistant.play_media`, add it as `enqueue`. With the `rest_command` above, add `"queue_option": "replace"` inside `args`.

## Seeing and changing your tags

All of these are on the same tools page.

| What you want to do | Use this | What to fill in |
|---|---|---|
| See everything you have tagged | `tagplayer/list` | Nothing |
| Check one tag | `tagplayer/get` | The tag name |
| Point a tag at something else | `tagplayer/link` | The same tag name and the new target |
| Remove a tag | `tagplayer/unlink` | The tag name |

A tag can only point at one thing. Linking a tag you have already used moves it, so there is no need to remove it first.

Removing a tag only removes the link. Your music stays in your library exactly as it was.

## All the commands

These are the five things Tag Player can do. You can run any of them from the tools page in your browser, or from Home Assistant with a `rest_command` as shown above.

| Command | What to give it | What it does |
|---|---|---|
| `tagplayer/link` | `tag_id`, `target` | Links a tag, or moves it if you have used that name before |
| `tagplayer/unlink` | `tag_id` | Removes a tag |
| `tagplayer/get` | `tag_id` | Shows what one tag points at |
| `tagplayer/list` | nothing | Lists every tag |
| `tagplayer/play` | `tag_id`, `player_id`, and optionally `queue_option` | Plays a tagged item on a speaker |

## Tips

- Write the tag name on the back of the card with a marker. It saves a lot of guessing later.
- Tag a playlist rather than one song when you want a card to keep playing for a while.
- Use `replace` for a card that should take over a speaker, and `add` for a card that adds to a party queue.
- After setting up a batch of cards, run `tagplayer/list` to check they all point where you expect.

## Troubleshooting

### It says the tag is unknown

Either the tag was never linked, or the name is slightly different. Names have to match exactly, including capital letters. Run `tagplayer/list` to see what you have.

### It says the target format is invalid

The target needs to be a type, a slash, and a number, like `playlist/42`. Check that you used one of the types listed above, and that you used the number from `music/search` rather than the name of the item.

### Nothing plays

Check that the speaker is switched on and available in Music Assistant, and that the item is still in your library. If you removed the album or playlist from your library, the tag has nothing left to point at.

### A card started the wrong thing

A tag can only point at one item, and linking it again moves it. If the name got reused for something else, link it back to what you wanted.

### My tags disappeared after I removed the plugin

Removing the Tag Player plugin removes all the links it created. Your music is untouched, but you will need to link your tags again if you add the plugin back.
