// ---------------------------------------------------------------------------
// Shared shapes for the tile pages, currently "I Want To Listen To" and
// "I Want To Stream To". Both are built from a data file of the same shape and
// rendered by src/components/TilePage.astro.
//
// The data lives in src/data/music-sources.ts and src/data/players.ts. This
// file only describes what those must look like.
// ---------------------------------------------------------------------------

export interface TileCategory {
  /** Used as the link target, so it must be unique within the page. */
  id: string;
  /** Heading above the tiles, and the label on the tile that jumps to it. */
  title: string;
  /** A file in public/, written as a path from the site root. */
  icon: string;
  /** One sentence under the heading. Plain text, no markdown. */
  blurb: string;
}

export interface TileGroup {
  id: string;
  title: string;
  intro: string;
  categories: TileCategory[];
}

export interface TileItem {
  /** Shown under the logo. Normally the same as the sidebar label. */
  name: string;
  /** The doc page, copied straight from the sidebar in astro.config.mjs. */
  slug: string;
  /** A file in public/, written as a path starting with a slash. */
  icon: string;
  /** One or more category ids from this page's groups. */
  categories: string[];
}

export interface TilePage {
  /** Prefixes every anchor on the page, so two tile pages never collide. */
  idPrefix: string;
  /** Where the data lives, used in build error messages. */
  dataFile: string;
  /** Singular word for one item, e.g. "source" or "player". Pluralised with s. */
  itemNoun: string;
  /** Doc pages under this prefix must all appear on the page. */
  pathPrefix: string;
  /** Pages under pathPrefix that intentionally have no tile. */
  knownUnlisted: string[];
  /** Group whose icons are flags, which need an edge against a white tile. */
  flagGroupId?: string;
  groups: TileGroup[];
  items: TileItem[];
}
