<!--
Thanks for contributing. The checklist below is short but the build enforces most
of it, so ticking it off saves a round trip.

Full guide: https://github.com/music-assistant/music-assistant.io/blob/beta/CONTRIBUTING.md
-->

## What does this change?

<!-- A sentence or two. Link the server pull request if there is one. -->

## Checklist

- [ ] This pull request targets `beta`, and my branch was taken from `beta`
- [ ] `pnpm build` passes locally
- [ ] Any new page has a sidebar entry in `astro.config.mjs`

### Only if you are adding a music source or a player provider

- [ ] Icon added to `public/assets/icons/`, and it is visible against a white background
- [ ] Entry added to `src/data/music-sources.ts` or `src/data/players.ts`, with categories
- [ ] The page opens with a short description of the service, then what the Music Assistant source gets you
