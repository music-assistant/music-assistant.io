// ---------------------------------------------------------------------------
// Data for the player provider comparison table on /faq/stream-to/.
//
// Rendered by src/components/PlayerCapabilities.astro, which checks this file
// while the site builds and fails with an explicit message if anything here is
// wrong. The name and logo of each row come from PLAYERS in ./players.ts, so a
// provider is named and pictured the same way here as it is on its tile.
//
// TO ADD A PLAYER PROVIDER: copy a block in PLAYER_CAPABILITIES below, set the
// slug to the same one used in players.ts, and fill in every column. The build
// fails if a provider has no row and is not listed in KNOWN_UNCHARTED.
//
// TO ADD A COLUMN: add it to CAPABILITY_COLUMNS and then to every row. The
// build fails on any row that is missing the new column.
// ---------------------------------------------------------------------------

export interface CapabilityColumn {
  /** Key used in each row's `values` and `notes`. */
  id: string;
  /** Column heading. Kept short: the heading is what sets the column width. */
  label: string;
  /** One sentence for the legend under the table. Plain text, no markdown. */
  help: string;
  /** Optional page explaining the term, linked from the legend. */
  href?: string;
}

export interface PlayerCapabilities {
  /** The provider's slug, exactly as it appears in players.ts. */
  slug: string;
  /** Highest rate the protocol can carry. An array renders as several lines. */
  sampleRate: string | string[];
  /** Footnote numbers shown against the sample rate. */
  sampleRateNotes?: number[];
  /** One entry per column in CAPABILITY_COLUMNS. */
  values: Record<string, boolean>;
  /** Footnote numbers shown against a cell, keyed by column id. */
  notes?: Record<string, number[]>;
}

// A heading that is one long word sets its column's width all on its own, and
// the widest of them made the table 651px when the content column on an iPad in
// portrait is 476px. `\u00AD` is a soft hyphen: invisible while the column has
// room for the whole word, and a hyphen with a line break after it when the
// column does not. It costs nothing on a desktop and takes 66px off the table
// on a narrow screen. Put one at a normal English break point in any heading
// with a word longer than about eight letters.
export const CAPABILITY_COLUMNS: CapabilityColumn[] = [
  {
    id: "hiRes",
    // A non-breaking space, so the shortest heading in the table stays on one
    // line and its column does not end up visibly narrower than the rest. A
    // real hyphen instead would break as "Hi-" over "Res".
    label: "Hi\u00A0Res",
    help: "Can carry audio above 48kHz or above 16 bits.",
    href: "/player-support/#audio-quality",
  },
  {
    id: "lossless",
    label: "Lossless",
    help: "Can carry audio without lossy compression.",
  },
  {
    id: "perfectSync",
    label: "Perfect Sync",
    help: "Players of this kind can be kept in time with each other when they are grouped.",
    href: "/faq/tech-info/#player-perfect-sync",
  },
  {
    id: "syncCorrection",
    label: "Sync Adjust",
    help: "A per-player delay can be applied to pull a player that runs ahead of or behind the rest of its group back into line.",
    href: "/player-support/airplay/#protocol-settings",
  },
  {
    id: "crossfade",
    label: "Cross\u00ADfade",
    help: "One track can be faded into the next.",
    href: "/audio-analysis/smart-fades/",
  },
  {
    id: "stereoPair",
    label: "Stereo Pair",
    help: "Two players can be paired as the left and right channels of one.",
    href: "/faq/how-to/#create-a-stereo-pair",
  },
  {
    id: "deviceButton",
    label: "Device Button",
    help: "Buttons on the device itself control Music Assistant playback.",
  },
  {
    id: "deviceVoice",
    label: "Device Voice",
    help: "The voice assistant built into the device can control playback.",
  },
  {
    id: "playerOptions",
    label: "Player Options",
    help: "The provider exposes device-specific settings, such as the player's own bass and treble.",
    href: "/player-support/#player-options",
  },
];

// Referenced from a row by number. Every note must be used by at least one row,
// and a row cannot reference a note that is not here; the build checks both.
export const CAPABILITY_NOTES: string[] = [
  "Theoretical maximum. Rate limited by individual devices",
  "Not video devices",
  "When grouped using the Google Home App",
  "Accomplished using the Google Home App",
  "Series 2 devices only",
  "Can be controlled by Home Assistant",
  "When bridging other protocols",
  "FLAC streaming works on some TVs",
  "Audio is carried over DLNA, so the capabilities are DLNA's",
];

// Providers with a page but no row, so the build does not demand one. Add a
// slug here only while its capabilities are genuinely unknown, and take it out
// again once they are.
export const KNOWN_UNCHARTED: string[] = [
  // Alexa controls the device rather than streaming to it, so it has no
  // published capability data.
  "player-support/alexa",
];

export const PLAYER_CAPABILITIES: PlayerCapabilities[] = [
  {
    slug: "player-support/airplay",
    sampleRate: "44.1kHz/16 bits",
    values: {
      hiRes: false,
      lossless: true,
      perfectSync: true,
      syncCorrection: true,
      crossfade: true,
      stereoPair: true,
      deviceButton: true,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/amplipi",
    sampleRate: "384kHz/32 bits",
    sampleRateNotes: [1],
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/bluesound",
    sampleRate: "192kHz/24 bits",
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: false,
      crossfade: true,
      stereoPair: true,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    // The provider handles control and discovery only; the audio itself goes
    // over DLNA on the same device, so this row matches the DLNA one below and
    // has to keep matching it.
    slug: "player-support/bose-soundtouch",
    sampleRate: "192kHz/24 bits",
    sampleRateNotes: [9],
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: false,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: true,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/dlna",
    sampleRate: "192kHz/24 bits",
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: false,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: true,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/fully-kiosk",
    sampleRate: "48kHz/16 bits",
    values: {
      hiRes: false,
      lossless: true,
      perfectSync: false,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/google-cast",
    sampleRate: "96kHz/24 bits",
    sampleRateNotes: [1],
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: true,
      crossfade: true,
      stereoPair: true,
      deviceButton: true,
      deviceVoice: true,
      playerOptions: false,
    },
    notes: {
      hiRes: [2],
      perfectSync: [3],
      syncCorrection: [4],
      stereoPair: [4],
    },
  },
  {
    slug: "player-support/heos",
    sampleRate: "192kHz/24 bits",
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: false,
      crossfade: true,
      stereoPair: true,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/home-assistant",
    sampleRate: "48kHz/16 bits",
    values: {
      hiRes: false,
      lossless: true,
      perfectSync: false,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/msx-bridge",
    sampleRate: "48kHz/16 bits",
    values: {
      hiRes: false,
      lossless: true,
      perfectSync: false,
      syncCorrection: false,
      crossfade: false,
      stereoPair: false,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: false,
    },
    notes: {
      lossless: [8],
    },
  },
  {
    slug: "player-support/music-player-daemon",
    sampleRate: "192kHz/32 bits",
    sampleRateNotes: [1],
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: false,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/musiccast",
    sampleRate: "192kHz/24 bits",
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: false,
      crossfade: true,
      stereoPair: true,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: true,
    },
  },
  {
    slug: "player-support/roku",
    sampleRate: "48kHz/16 bits",
    values: {
      hiRes: false,
      lossless: true,
      perfectSync: false,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: true,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/samsung-wam",
    sampleRate: "192kHz/24 bits",
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: true,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/sendspin",
    sampleRate: "384kHz/32 bits",
    sampleRateNotes: [1],
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: true,
      crossfade: true,
      stereoPair: true,
      deviceButton: true,
      deviceVoice: true,
      playerOptions: false,
    },
    notes: {
      syncCorrection: [7],
      deviceVoice: [6],
    },
  },
  {
    slug: "player-support/snapcast",
    sampleRate: "48kHz/16 bits",
    values: {
      hiRes: false,
      lossless: true,
      perfectSync: true,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: false,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/sonos",
    // Two generations with different limits, so the cell carries both lines.
    sampleRate: ["S1: 44.1kHz/16 bits", "S2: 48kHz/24 bits"],
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: false,
      crossfade: true,
      stereoPair: true,
      deviceButton: true,
      deviceVoice: false,
      playerOptions: false,
    },
    notes: {
      hiRes: [5],
    },
  },
  {
    slug: "player-support/squeezelite",
    sampleRate: "384kHz/24 bits",
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: true,
      crossfade: true,
      stereoPair: true,
      deviceButton: true,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/wiim",
    sampleRate: "192kHz/24 bits",
    values: {
      hiRes: true,
      lossless: true,
      perfectSync: true,
      syncCorrection: false,
      crossfade: true,
      stereoPair: true,
      deviceButton: true,
      deviceVoice: false,
      playerOptions: false,
    },
  },
  {
    slug: "player-support/yandex-station",
    sampleRate: "44.1kHz/16 bits",
    values: {
      hiRes: false,
      lossless: true,
      perfectSync: false,
      syncCorrection: false,
      crossfade: true,
      stereoPair: false,
      deviceButton: true,
      deviceVoice: true,
      playerOptions: false,
    },
  },
];
