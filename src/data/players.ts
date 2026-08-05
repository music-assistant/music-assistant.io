// ---------------------------------------------------------------------------
// Data for the "I Want To Stream To" page (/faq/stream-to/).
//
// TO ADD A PLAYER PROVIDER: copy an existing block in PLAYERS below, keep the
// list alphabetical by `name`, and fill in the four fields. The site build will
// fail with a clear message if the slug, the icon or a category is wrong, so a
// mistake here can never reach the live site.
//
// A player can belong to both categories where that is genuinely true.
// ---------------------------------------------------------------------------

import type { TileGroup, TileItem } from "./tile-page";

export const PLAYER_GROUPS: TileGroup[] = [
  {
    id: "kind",
    title: "What are you streaming to?",
    intro: "Pick one to jump to the players of that kind.",
    categories: [
      {
        id: "commercial",
        icon: "/assets/icons/stream/commercial.svg",
        title: "Commercial players",
        blurb:
          "Speakers, amplifiers, tablets and other devices sold ready to use. Most are found automatically once they are on the same network. If yours is not here but Home Assistant can already play to it, use the Home Assistant player under DIY.",
      },
      {
        id: "diy",
        icon: "/assets/icons/stream/diy.svg",
        title: "DIY players",
        blurb:
          "Software you set up yourself, on a Raspberry Pi, a spare computer, an ESP32 board or the Music Assistant server itself.",
      },
    ],
  },
];

export const PLAYERS: TileItem[] = [
  {
    name: "AirPlay",
    slug: "player-support/airplay",
    icon: "/assets/icons/airplay-logo.png",
    categories: ["commercial"],
  },
  {
    name: "Alexa",
    slug: "player-support/alexa",
    icon: "/assets/icons/alexa-icon.png",
    categories: ["commercial"],
  },
  {
    name: "Amplipi",
    slug: "player-support/amplipi",
    icon: "/assets/icons/amplipi-icon.svg",
    categories: ["commercial"],
  },
  {
    name: "Bluesound",
    slug: "player-support/bluesound",
    icon: "/assets/icons/bluesound-logo.png",
    categories: ["commercial"],
  },
  {
    name: "Bose SoundTouch",
    slug: "player-support/bose-soundtouch",
    icon: "/assets/icons/bose-soundtouch-icon.png",
    categories: ["commercial"],
  },
  {
    name: "DLNA",
    slug: "player-support/dlna",
    icon: "/assets/icons/dlna-icon.svg",
    categories: ["commercial"],
  },
  {
    // Established commercial software, sold for off-the-shelf Android tablets.
    name: "Fully Kiosk",
    slug: "player-support/fully-kiosk",
    icon: "/assets/icons/fully-kiosk.png",
    categories: ["commercial"],
  },
  {
    name: "Google Cast",
    slug: "player-support/google-cast",
    icon: "/assets/icons/chromecast-logo.png",
    categories: ["commercial"],
  },
  {
    name: "HEOS",
    slug: "player-support/heos",
    icon: "/assets/icons/heos-icon.svg",
    categories: ["commercial"],
  },
  {
    // Home Assistant is something you run yourself, not a player you buy, even
    // though the devices it reaches are often shop-bought ones. The commercial
    // blurb points here for anyone whose device has no provider of its own.
    name: "Home Assistant",
    slug: "player-support/home-assistant",
    icon: "/assets/icons/ha-logo.png",
    categories: ["diy"],
  },
  {
    name: "Local Audio Out",
    slug: "player-support/local-audio",
    icon: "/assets/icons/loudness-analysis-icon.svg",
    categories: ["diy"],
  },
  {
    name: "MSX Bridge",
    slug: "player-support/msx-bridge",
    icon: "/assets/icons/msx-bridge-icon.svg",
    categories: ["diy"],
  },
  {
    name: "Music Player Daemon (MPD)",
    slug: "player-support/music-player-daemon",
    icon: "/assets/icons/mpd-icon.svg",
    categories: ["diy"],
  },
  {
    name: "MusicCast",
    slug: "player-support/musiccast",
    icon: "/assets/icons/musiccast-icon.svg",
    categories: ["commercial"],
  },
  {
    name: "Roku Media Assistant",
    slug: "player-support/roku",
    icon: "/assets/icons/roku-media-assistant-icon.png",
    categories: ["commercial"],
  },
  {
    name: "Samsung WAM",
    slug: "player-support/samsung-wam",
    icon: "/assets/icons/samsung-wam.svg",
    categories: ["commercial"],
  },
  {
    name: "Sendspin",
    slug: "player-support/sendspin",
    icon: "/assets/icons/sendspin-icon.svg",
    categories: ["diy"],
  },
  {
    name: "Snapcast",
    slug: "player-support/snapcast",
    icon: "/assets/icons/snapcast-icon.svg",
    categories: ["diy"],
  },
  {
    name: "Sonos",
    slug: "player-support/sonos",
    icon: "/assets/icons/sonos-icon.svg",
    categories: ["commercial"],
  },
  {
    name: "Squeezelite",
    slug: "player-support/squeezelite",
    icon: "/assets/icons/slim-icon.svg",
    categories: ["diy"],
  },
  {
    name: "WiiM",
    slug: "player-support/wiim",
    icon: "/assets/icons/wiim.svg",
    categories: ["commercial"],
  },
  {
    name: "Yandex Station",
    slug: "player-support/yandex-station",
    icon: "/assets/icons/yandex-station-icon.svg",
    categories: ["commercial"],
  },
];

// ---------------------------------------------------------------------------
// Everything the "I Want To Stream To" page needs, in one object.
// Rendered by src/components/TilePage.astro.
// ---------------------------------------------------------------------------
export const PLAYERS_PAGE = {
  idPrefix: "stream",
  dataFile: "src/data/players.ts",
  itemNoun: "provider",
  pathPrefix: "player-support/",
  // Pages under player-support/ that intentionally have no tile.
  knownUnlisted: [
    "player-support", // the overview page
  ],
  groups: PLAYER_GROUPS,
  items: PLAYERS,
};
