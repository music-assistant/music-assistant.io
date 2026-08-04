import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import { MUSIC_SOURCES_PAGE } from "./data/music-sources";
import { PLAYERS_PAGE } from "./data/players";
import type { TilePage } from "./data/tile-page";

// The tile pages build most of their headings inside a component, and Starlight
// only sees headings written in the page itself, so they never reach the "On
// this page" panel. Here we add them, built from the same data the pages are
// generated from.
//
// Headings written directly in the .mdx are left alone, so renaming one of
// those does not need a change here.
const TILE_PAGES: Record<string, TilePage> = {
  "faq/listen-to": MUSIC_SOURCES_PAGE,
  "faq/stream-to": PLAYERS_PAGE,
};

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const page = TILE_PAGES[route.entry.id];
  if (!page || !route.toc) return;

  const generated = page.groups.map((group) => ({
    depth: 2,
    slug: `${page.idPrefix}-nav-${group.id}`,
    text: group.title,
    children: group.categories.map((category) => ({
      depth: 3,
      slug: `${page.idPrefix}-${category.id}`,
      text: category.title,
      children: [],
    })),
  }));

  // Index 0 is the "Overview" entry Starlight adds for the page title, and the
  // component's output sits directly below it on the page.
  route.toc.items.splice(1, 0, ...generated);
  route.toc.maxHeadingLevel = Math.max(route.toc.maxHeadingLevel, 3);
});
