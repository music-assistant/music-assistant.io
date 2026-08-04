<!--
Thanks for contributing. The checklist below is short but the build enforces most
of it, so ticking it off saves a round trip.

Full guide: https://github.com/music-assistant/music-assistant.io/blob/beta/CONTRIBUTING.md
-->

## What does this change?

<!-- A sentence or two. Link the server pull request if there is one. -->

## Checklist

- [ ] Correct branch: `main` if this fixes something already on the live site, `beta` if it adds anything new
- [ ] Any new page has a sidebar entry in `astro.config.mjs`

### Only if you are adding a music source or a player provider

<!-- Plugins, metadata providers and audio analysis providers do not need these. -->

- [ ] Icon added to `public/assets/icons/`, and it is visible against a white background
- [ ] Entry added to `src/data/music-sources.ts` or `src/data/players.ts`, with categories
- [ ] The page opens with a short description of the service, then what the Music Assistant source gets you

---

Once this is open, scroll down to the checks and wait for **Deploy Preview**. If it is green,
click the link to see your change on the site. If it is red, click `Details`, read the error at
the bottom of the log and push a fix to the same branch. There is no need to open a new pull
request.
