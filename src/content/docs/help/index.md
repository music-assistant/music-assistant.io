---
title: "I want to help"
---

# I want to help

Music Assistant is built by the people who use it. Most of the ways to help don't involve writing code, so they come first on this page.

Your first contribution doesn't need to be big. A typo fixed, ten strings translated, one question answered on Discord: each of those is a real contribution, and each one teaches you how the project works. Start small, and the next one is easier.

If you'd rather support the project financially, see [Donations](#donations) at the bottom of this page.

> [!TIP]
> **Not sure where to start?**
>
> You don't need permission to begin, but it helps to know where to ask. Join the <a href="https://discord.gg/kaVm8hGpne" target="_blank" rel="noopener noreferrer">Music Assistant Discord</a> and say what you'd like to help with. "I'd like to help with X, where do I start?" is a perfectly good first message.
>
> Many paths below use GitHub. A free <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">GitHub account</a> is all you need, and most changes can be made straight from your browser.

## Without writing code

### Test the beta

A new beta comes out most Fridays, and every stable release goes through a beta cycle first. Running it and reporting what breaks keeps bugs out of everyone else's home. The beta, nightly and stable apps keep separate data, so you can try the beta and switch back.

- **You need:** an installation where a problem is an annoyance rather than a disaster, and a GitHub account to report what you find.
- **Start here:** [Release Cycle](https://music-assistant.io/release/#beta-releases), then [running versions side by side](https://beta.music-assistant.io/release/#running-parallel-server-versions). The beta has its own documentation at <a href="https://beta.music-assistant.io/" target="_blank" rel="noopener noreferrer">beta.music-assistant.io</a>.

> [!CAUTION]
> Removing an app deletes its data, and the data folder is not backwards compatible between channels. Take a backup first.

### Report a bug well

A clear report with steps to reproduce saves the developers a lot of time, often more than the fix itself takes.

- **You need:** a GitHub account.
- **Start here:** read [Troubleshooting](https://music-assistant.io/faq/troubleshooting/), search the <a href="https://github.com/music-assistant/support/issues?q=is%3Aissue" target="_blank" rel="noopener noreferrer">open and closed issues</a>, then open a new one in the <a href="https://github.com/music-assistant/support/issues" target="_blank" rel="noopener noreferrer">issue tracker</a>. Say which version and channel you run, which music source and player are involved, what you did, what you expected, and attach the log. [Support](https://music-assistant.io/support/) has more on where to ask what.

Already reported? Adding "same here, on version X with player Y" to an existing issue, or confirming that a fix works, is just as useful.

### Report a security problem

Found something that could put people's homes or accounts at risk? Don't open a public issue. Report it privately, so it can be fixed before the details are out.

<!-- TODO maintainers: confirm the preferred private channel (GitHub private vulnerability reporting on the server repository, or a named contact) before merging. -->
- **Start here:** use **Report a vulnerability** on the <a href="https://github.com/music-assistant/server/security" target="_blank" rel="noopener noreferrer">Security tab of the server repository</a>.

### Translate

The Music Assistant interface is translated by the people who use it, in your browser, on Lokalise. If you're a native speaker you can start in a few minutes.

- **You need:** a free Lokalise account, created when you join the project.
- **Start here:** [Translations](https://music-assistant.io/help/lokalise/).

### Improve music data

Music Assistant uses MusicBrainz to match artists, albums and tracks across sources. Every release you add or correct there improves matching and artwork for everyone, not only Music Assistant users.

- **You need:** a free MusicBrainz account.
- **Start here:** [Improve MusicBrainz Data](https://music-assistant.io/help/musicbrainz/).

### Help other people

Answer questions on Discord or in the <a href="https://github.com/orgs/music-assistant/discussions/categories/q-a" target="_blank" rel="noopener noreferrer">GitHub Q&A discussions</a>, point people to the right page, or help sort incoming issues and feature requests. Telling someone "this is already tracked in issue #123" saves a developer from doing it.

- **You need:** a Discord or GitHub account.
- **Want to do more?** The moderators always welcome help with the load of reports, requests and questions. Ask <a href="https://github.com/OzGav" target="_blank" rel="noopener noreferrer">OzGav</a> on Discord.

### Write and fix the documentation

This site is written by the community. Fix a typo, correct an instruction that no longer matches what you see, or write the how-to you wish had existed when you started.

- **You need:** a GitHub account. You don't need to install or build anything: every pull request gets a preview of the whole site with your change in it.
- **Start here:** the <a href="https://github.com/music-assistant/music-assistant.io/blob/beta/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">documentation contribution guide</a>. Fixes to the live site go to `main`, anything new goes to `beta`.

### Share what you built

Made a dashboard card, a script, a voice setup or another tool around Music Assistant that works well for you? It can help others too.

- **Start here:** see [Community Extensions](https://beta.music-assistant.io/community-extensions/) for what is already out there, and share yours on Discord or in the <a href="https://github.com/orgs/music-assistant/discussions" target="_blank" rel="noopener noreferrer">GitHub discussions</a>.

### Spread the word

Give the <a href="https://github.com/music-assistant/server" target="_blank" rel="noopener noreferrer">music-assistant server repository</a> a star (⭐) on GitHub, tell others how you use Music Assistant, and post <a href="https://github.com/orgs/music-assistant/discussions/categories/feature-requests-and-ideas?discussions_q=is%3Aopen+category%3A%22Feature+requests+and+ideas%22+sort%3Atop" target="_blank" rel="noopener noreferrer">feature requests</a> ideas with additional things you care about which are missing or can be improved.

## With code

The server is written in Python and relies heavily on asyncio. New music sources, player providers and plugins are each a self-contained folder in the server repository, so you can start without understanding the whole code base.

### Add a music source, player or plugin

- **You need:** a GitHub account, and Python on macOS, Linux or WSL2.
- **Start here:** the <a href="https://developers.music-assistant.io/" target="_blank" rel="noopener noreferrer">developer documentation</a> sets up your environment and explains each provider type. The <a href="https://github.com/music-assistant/server/tree/dev/music_assistant/providers" target="_blank" rel="noopener noreferrer">existing providers</a>, including the demo music and player providers, are the best reference.
- **Then:** add a documentation page for it. The <a href="https://github.com/music-assistant/music-assistant.io/blob/beta/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">documentation contribution guide</a> covers exactly what a new source or provider needs.

### Fix or improve something that's already there

Looking for something to pick up? Try the <a href="https://github.com/music-assistant/support/issues" target="_blank" rel="noopener noreferrer">issues</a>, the <a href="https://github.com/orgs/music-assistant/projects/2/views/1" target="_blank" rel="noopener noreferrer">backlog</a> or the most-voted <a href="https://github.com/orgs/music-assistant/discussions/categories/feature-requests-and-ideas?discussions_q=is%3Aopen+category%3A%22Feature+requests+and+ideas%22+sort%3Atop" target="_blank" rel="noopener noreferrer">feature requests</a>. A bug in a player or source you own yourself is often the best place to start, because you can test the fix.

> [!NOTE]
> Planning something larger? Mention it on Discord before you write much code. A five-minute chat can save you a pull request that goes in a different direction from where the project is heading.

## What happens next

Music Assistant is maintained by a small team, and most of them review in their spare time. Reviews can take a while, because there are more pull requests than reviewers. Small, focused pull requests that change one thing are reviewed fastest, so if you have several unrelated changes, open them separately. Be patient, answer review comments in the same pull request, and keep going.

## Donations

If you'd like to support the project financially, the best way is to subscribe to [Home Assistant Link](https://www.nabucasa.com/link/). It's an optional service from Nabu Casa, the [Open Home Foundation (OHF)](https://www.openhomefoundation.org/)'s commercial partner, and the subscription funds the OHF and all its projects, including Music Assistant.

You can also support the project by buying <a href="https://store.openhomefoundation.org/" target="_blank" rel="noopener noreferrer">merchandise from the official Open Home Foundation store</a> and officially branded <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant hardware</a>.

Appreciate a particular source, player or plugin? Its page in these docs names the developer who contributed it, and many have a sponsor or donation link on their GitHub profile. The core team is listed on the [Home Page](https://beta.music-assistant.io/#the-core-team).

A really big thank you in advance from the whole team!

___________________________________________

I hope you like my little pet project I've been working on since 2019.
I'm sure that together with the really great HA community we can grow this project into something fantastic. Thanks!

Kind regards,

Marcel
