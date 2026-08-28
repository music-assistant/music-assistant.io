// ---------------------------------------------------------------------------
// Settings for the music source comparison table on /faq/listen-to/.
//
// Unlike the player table, almost nothing lives here. The values come from the
// "## Features" table on each source's own page, read while the site builds by
// src/components/MusicSourceMatrix.astro, so the summary cannot drift from the
// pages the way the screenshot it replaced did. This file holds only the parts
// that cannot be read from a page: what the columns are called, how the media
// types are shown, and the two escape hatches below.
//
// TO ADD A MUSIC SOURCE: nothing to do here. Give the page a complete Features
// table with the standard row labels and it appears in the comparison on its
// own. The build says so if a row is missing.
// ---------------------------------------------------------------------------

/** The chips shown in the Max Stream Quality column. */
export type QualityTier = "hi-res" | "cd" | "lossy" | "varies";

export interface SummaryColumn {
  /** Key used internally, and the class hook for the odd column-specific rule. */
  id: string;
  /** The term itself, used in the legend under the table. */
  label: string;
  /**
   * The heading, one string per line. Written out rather than left to wrap:
   * the table has room to spare at most widths, and with room to spare nothing
   * forces a break, so each heading sits at its full width and the columns come
   * out ragged. Splitting them here is what sets the column widths.
   */
  head: string[];
  /** One sentence for the legend under the table. Plain text, no markdown. */
  help: string;
  /** Optional page explaining the term, linked from the legend. */
  href?: string;
  /** Matched against the row label on the page, markup stripped. */
  featuresLabel: RegExp;
}

export const YES_NO_COLUMNS: SummaryColumn[] = [
  {
    id: "subscriptionFree",
    label: "Free",
    head: ["Free"],
    help: "Some or all of what this source offers can be played without paying for a subscription.",
    featuresLabel: /^Subscription FREE$/i,
  },
  {
    id: "selfHosted",
    label: "Self-hosted",
    head: ["Local"],
    help: "The source plays from files you hold yourself, on your own disk, NAS or server, rather than from someone else's catalogue.",
    featuresLabel: /^Self-Hosted Local Media$/i,
  },
  {
    id: "endlessMix",
    label: "Endless Mix",
    // Abbreviated, because the column is a tick and the full name would set a
    // width the ticks never use. The legend spells it out.
    head: ["E. Mix"],
    help: "Music Assistant can keep playing in a similar vein once the queue runs out, using this source's own idea of what is similar.",
    href: "/usage/#endless-mix",
    featuresLabel: /^Endless Mix$/i,
  },
  {
    id: "recommendations",
    label: "Recommendations",
    // Short, because the column is a tick: at body size the full word would
    // hold sixty pixels to show fifteen. The legend keeps the full term.
    head: ["Recs"],
    help: "The source offers its own suggestions, which appear in the Discover view.",
    href: "/ui/#view---discover",
    featuresLabel: /^Recommendations Supported$/i,
  },
];

/** The three columns that carry text rather than a tick or a cross. */
export const TEXT_COLUMNS = {
  quality: {
    id: "quality",
    label: "Max Stream Quality",
    head: ["Max Stream", "Quality"],
    help: "The best this source can deliver. Hi-Res is above 48kHz or above 16 bits; CD matches a compact disc; Lossy has been compressed in a way that discards detail; Varies means it depends on the station or feed rather than on the source.",
    href: "/player-support/#audio-quality",
    featuresLabel: /^Maximum Stream Quality$/i,
  },
  mediaTypes: {
    id: "mediaTypes",
    label: "Media Types",
    head: ["Media", "Types"],
    help: "What this source can play. A source often does several of these at once.",
    featuresLabel: /^Media Types Supported$/i,
  },
  login: {
    id: "login",
    label: "Login",
    head: ["Login"],
    help: "What you need to sign in with. A password is the most straightforward; OAuth signs you in on the service's own site; a cookie has to be copied out of your browser by hand and is the least user friendly.",
    featuresLabel: /^Login Method$/i,
  },
} as const;

// The order media types are listed in, whatever order a page happens to use.
// A type a page names that is not here fails the build rather than being
// dropped quietly, because a silently missing chip is a wrong table.
export const MEDIA_TYPE_ORDER = [
  "Artists",
  "Albums",
  "Tracks",
  "Playlists",
  "Radio",
  "Podcasts",
  "Audiobooks",
  "Sound Effects",
];

// Sources with a tile but no row in the comparison. Only for a source there is
// genuinely nothing to compare about; anything else belongs in the table.
export const EXCLUDED: string[] = [
  // Plays whatever URL you hand it, and generates playlists from what you
  // already have. No subscription, no login and no stream quality of its own,
  // so every column would be empty or meaningless.
  "music-providers/builtin",
];

// The tier is worked out from the wording on the page. These are the ones the
// wording cannot settle, decided by hand instead of guessed at. Keyed by slug.
export const QUALITY_TIER_OVERRIDES: Record<string, QualityTier> = {
  // "192kHz 24 bit", with no codec named. Above 48kHz and above 16 bits, which
  // is what /player-support/#audio-quality calls Hi-Res.
  "music-providers/audiobookshelf": "hi-res",
  // All three say "Lossless FLAC (with subscription)" without a resolution.
  // Recorded as Hi-Res, matching the summary this table replaced.
  "music-providers/kion-music": "hi-res",
  "music-providers/yandex-music": "hi-res",
  "music-providers/zvuk": "hi-res",
  // Soloist can serve lossless, and the page says 24 bits because that is the
  // ceiling Music Assistant reports for the tier (Soloist never says what it
  // actually fetched). Spotify sells no hi-res tier, so this pins the chip to CD
  // rather than letting that 24 be read as one - an editorial call, not a
  // tie-break: the wording on its own would derive hi-res.
  "music-providers/spotify": "cd",
};
