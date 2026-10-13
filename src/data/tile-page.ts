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
  /**
   * Forces this many columns in the category menu on a wide screen, instead of
   * fitting as many as the width allows. Set it to the number of categories to
   * keep the menu on one line. Narrow screens ignore it and fall back to
   * fitting, since five columns on a phone would be unreadable.
   */
  columns?: number;
  categories: TileCategory[];
}

export interface TileItem {
  /** Shown under the logo. Normally the same as the sidebar label. */
  name: string;
  /**
   * Named where the tile and the page it opens carry different names, so that
   * a Denon tile says what it is about to show you. Omit where they match.
   */
  /**
   * Caps the logo height, as a CSS length. For a mark that fills the box more
   * than its neighbours and wants pulling back for optical balance. Unset
   * means the full height of the logo box.
   */
  iconHeight?: string;
  /**
   * Alt text for the logo, for the tiles where the logo is what tells them
   * apart. Without it the three "Other" tiles are three links called "Other".
   * Leave unset and the logo is treated as decoration, which is right when the
   * name below it already says the same thing.
   */
  iconAlt?: string;
  /**
   * Hides the name, for tiles whose logo is the name. It stays in the markup
   * for screen readers, which would otherwise meet a link called "Powered by
   * HEOS" with no clue whose it is.
   */
  nameHidden?: boolean;
  via?: {
    /** The platform, e.g. "HEOS". Also the alt text when there is an icon. */
    label: string;
    /** Optional mark shown instead of the label. A file in public/. */
    icon?: string;
  };
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
