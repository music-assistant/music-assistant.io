import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import { CATEGORY_GROUPS } from "./data/music-sources";

// The "I Want To Listen To" page builds most of its headings inside a
// component, and Starlight only sees headings written in the page itself, so
// they never reach the "On this page" panel. Here we add them, built from the
// same data the page is generated from.
//
// Headings written directly in the .mdx are left alone, so renaming one of
// those does not need a change here.
const LISTEN_TO_ROUTE = "faq/listen-to";

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  if (route.entry.id !== LISTEN_TO_ROUTE || !route.toc) return;

  const generated = CATEGORY_GROUPS.map((group) => ({
    depth: 2,
    slug: `listen-nav-${group.id}`,
    text: group.title,
    children: group.categories.map((category) => ({
      depth: 3,
      slug: `listen-${category.id}`,
      text: category.title,
      children: [],
    })),
  }));

  // Index 0 is the "Overview" entry Starlight adds for the page title, and the
  // component's output sits directly below it on the page.
  route.toc.items.splice(1, 0, ...generated);
  route.toc.maxHeadingLevel = Math.max(route.toc.maxHeadingLevel, 3);
});
