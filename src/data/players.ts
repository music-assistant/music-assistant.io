// ---------------------------------------------------------------------------
// Data for the "I Want To Stream To" page (/faq/stream-to/).
//
// TO ADD A PLAYER PROVIDER: copy an existing block in PLAYERS below and fill in
// the four fields. The site build will fail with a clear message if the slug,
// the icon or a category is wrong, so a mistake here can never reach the live
// site.
//
// Tiles are named after what people own rather than after the provider, so the
// Yamaha tile points at the MusicCast page and Apple TV at AirPlay. One
// provider often serves several makes, so several tiles share a slug: Denon and
// Marantz both lead to HEOS, Bluesound and NAD both to BluOS.
//
// A player can belong to more than one category where that is genuinely true,
// which is how Google appears under both TVs and voice without being copied.
//
// Order matters: tiles render in the order below, so the list is alphabetical
// with the three "Other ... compatible" tiles held back to the end. That puts
// them last in every category they appear in, which is where a catch-all wants
// to be.
// ---------------------------------------------------------------------------

import type { TileGroup, TileItem } from "./tile-page";

export const PLAYER_GROUPS: TileGroup[] = [
  {
    id: "kind",
    title: "What are you streaming to?",
    intro: "Pick one to jump to the players of that kind.",
    // Five, so the menu holds one line on a desktop.
    columns: 5,
    categories: [
      {
        id: "speakers",
        icon: "/assets/icons/stream/speakers.png",
        title: "Speakers and hi-fi",
        blurb:
          "Speakers, amplifiers and streamers sold ready to use. Most are found automatically once they are on the same network. If your make is not here, try the AirPlay, Cast and DLNA tiles at the end, which cover almost everything else.",
      },
      {
        id: "tvs",
        icon: "/assets/icons/stream/tvs.png",
        title: "TVs",
        blurb:
          "Televisions, and the boxes and sticks that plug into them. Most smart TVs answer to at least one of AirPlay, Cast or DLNA even when the make is not listed.",
      },
      {
        id: "voice",
        icon: "/assets/icons/stream/voice.png",
        title: "Voice",
        blurb: "Speakers you can also talk to.",
      },
      {
        id: "software",
        icon: "/assets/icons/stream/software.png",
        title: "Software players",
        blurb:
          "Software you install yourself, on a Raspberry Pi, a spare computer, a tablet or the Music Assistant server.",
      },
      {
        id: "home-assistant",
        icon: "/assets/icons/stream/home-assistant.png",
        title: "Home Assistant",
        blurb:
          "Anything Home Assistant can already play to. Worth reaching for when a device has no provider of its own.",
      },
    ],
  },
];

export const PLAYERS: TileItem[] = [
  {
    name: "Alexa",
    slug: "player-support/alexa",
    icon: "/assets/icons/alexa-icon.png",
    categories: ["voice"],
  },
  {
    name: "Amplipi",
    slug: "player-support/amplipi",
    icon: "/assets/icons/amplipi-icon.svg",
    categories: ["speakers"],
  },
  {
    name: "Android TV",
    nameHidden: true,
    via: { label: "Google Cast", icon: "/assets/icons/google-cast-logo.svg" },
    slug: "player-support/google-cast",
    icon: "/assets/icons/android-tv-logo.svg",
    categories: ["tvs"],
  },
  {
    name: "Apple TV",
    nameHidden: true,
    // Four pixels off the full 3rem: the mark is solid black and sat almost on
    // the line beneath it.
    iconHeight: "2.75rem",
    via: { label: "AirPlay", icon: "/assets/icons/airplay-logo.png" },
    slug: "player-support/airplay",
    icon: "/assets/icons/apple-tv-logo.svg",
    categories: ["tvs"],
  },
  {
    name: "Bluesound",
    slug: "player-support/bluesound",
    icon: "/assets/icons/bluesound-logo.png",
    categories: ["speakers"],
  },
  {
    name: "Bose SoundTouch",
    slug: "player-support/bose-soundtouch",
    icon: "/assets/icons/bose-soundtouch-icon.png",
    categories: ["speakers"],
  },
  {
    name: "Chromecast",
    nameHidden: true,
    via: { label: "Google Cast", icon: "/assets/icons/google-cast-logo.svg" },
    slug: "player-support/google-cast",
    icon: "/assets/icons/chromecast-logo.svg",
    categories: ["tvs"],
  },
  {
    // HEOS is the platform, but the box in the room says Denon or Marantz, so
    // both get a tile of their own pointing at the one page.
    name: "Denon",
    nameHidden: true,
    via: { label: "HEOS", icon: "/assets/icons/heos-icon.svg" },
    slug: "player-support/heos",
    icon: "/assets/icons/denon-logo.svg",
    categories: ["speakers"],
  },
  {
    // Established commercial software, sold for off-the-shelf Android tablets.
    name: "Fully Kiosk",
    slug: "player-support/fully-kiosk",
    icon: "/assets/icons/fully-kiosk.png",
    categories: ["software"],
  },
  {
    // Nest speakers and displays. Not under speakers, where nobody goes looking
    // for Google hi-fi and Other Cast compatible covers it anyway, and not
    // under TVs, where Chromecast and Android TV are the names on the box.
    name: "Google",
    slug: "player-support/google-cast",
    icon: "/assets/icons/google-logo.svg",
    categories: ["voice"],
  },
  {
    // Something you run yourself rather than a player you buy, and the way in
    // for any device with no provider of its own.
    name: "Home Assistant",
    slug: "player-support/home-assistant",
    icon: "/assets/icons/ha-logo.png",
    categories: ["home-assistant"],
  },
  {
    // Kodi answers to AirPlay 1, which is the RAOP half of what the AirPlay
    // provider speaks. Only the diamond mark, since the full lockup stacks the
    // wordmark underneath and it would be seven pixels tall in this box.
    name: "Kodi",
    via: { label: "AirPlay", icon: "/assets/icons/airplay-logo.png" },
    slug: "player-support/airplay",
    icon: "/assets/icons/kodi-logo.png",
    categories: ["software"],
  },
  {
    // Sendspin is built into recent Voice PE firmware, which the Sendspin page
    // lists among its clients. TODO: wearing the Home Assistant mark until a
    // Voice PE product image is to hand.
    name: "Home Assistant Voice PE",
    via: { label: "Sendspin", icon: "/assets/icons/sendspin-icon.svg" },
    slug: "player-support/sendspin",
    icon: "/assets/icons/ha-logo.png",
    categories: ["voice"],
  },
  {
    name: "Local Audio Out",
    slug: "player-support/local-audio",
    icon: "/assets/icons/loudness-analysis-icon.svg",
    categories: ["software"],
  },
  {
    name: "Marantz",
    nameHidden: true,
    via: { label: "HEOS", icon: "/assets/icons/heos-icon.svg" },
    slug: "player-support/heos",
    icon: "/assets/icons/marantz-logo.svg",
    categories: ["speakers"],
  },
  {
    name: "MSX Bridge",
    slug: "player-support/msx-bridge",
    icon: "/assets/icons/msx-bridge-icon.svg",
    categories: ["tvs"],
  },
  {
    name: "Music Player Daemon (MPD)",
    slug: "player-support/music-player-daemon",
    icon: "/assets/icons/mpd-icon.svg",
    categories: ["software"],
  },
  {
    // BluOS again, the same platform Bluesound runs.
    name: "NAD",
    nameHidden: true,
    via: { label: "BluOS", icon: "/assets/icons/bluos-logo.svg" },
    slug: "player-support/bluesound",
    icon: "/assets/icons/nad-logo.svg",
    categories: ["speakers"],
  },
  {
    name: "Roku",
    slug: "player-support/roku",
    icon: "/assets/icons/roku-media-assistant-icon.png",
    categories: ["tvs"],
  },
  {
    name: "Samsung WAM",
    slug: "player-support/samsung-wam",
    icon: "/assets/icons/samsung-wam.svg",
    categories: ["speakers"],
  },
  {
    name: "Sendspin",
    slug: "player-support/sendspin",
    icon: "/assets/icons/sendspin-icon.svg",
    categories: ["software"],
  },
  {
    name: "Snapcast",
    slug: "player-support/snapcast",
    icon: "/assets/icons/snapcast-icon.svg",
    categories: ["software"],
  },
  {
    name: "Sonos",
    slug: "player-support/sonos",
    icon: "/assets/icons/sonos-icon.svg",
    categories: ["speakers"],
  },
  {
    name: "Squeezelite",
    slug: "player-support/squeezelite",
    icon: "/assets/icons/slim-icon.svg",
    categories: ["software"],
  },
  {
    name: "WiiM",
    slug: "player-support/wiim",
    icon: "/assets/icons/wiim.svg",
    categories: ["speakers"],
  },
  {
    // MusicCast is the platform, Yamaha is what is written on the front.
    name: "Yamaha",
    nameHidden: true,
    via: { label: "MusicCast", icon: "/assets/icons/musiccast-icon.svg" },
    slug: "player-support/musiccast",
    icon: "/assets/icons/yamaha-logo.svg",
    categories: ["speakers"],
  },
  {
    name: "Yandex Station",
    slug: "player-support/yandex-station",
    icon: "/assets/icons/yandex-station-icon.svg",
    categories: ["voice"],
  },

  // The catch-alls, kept last so they fall at the end of every category. Naming
  // every make that speaks these three would run to hundreds and never stay
  // current, so the brands above cover the ones people arrive with and these
  // cover the rest.
  {
    name: "Other",
    iconAlt: "AirPlay",
    slug: "player-support/airplay",
    icon: "/assets/icons/airplay-logo.png",
    categories: ["speakers", "tvs", "software"],
  },
  {
    name: "Other",
    iconAlt: "Google Cast",
    slug: "player-support/google-cast",
    icon: "/assets/icons/google-cast-logo.svg",
    categories: ["speakers"],
  },
  {
    name: "Other",
    iconAlt: "DLNA",
    slug: "player-support/dlna",
    icon: "/assets/icons/dlna-icon.svg",
    categories: ["speakers", "tvs", "software"],
  },
];

// ---------------------------------------------------------------------------
// The providers themselves, for the comparison table further down the page.
//
// Separate from PLAYERS because the tiles above are named after makes, and
// several of them lead to one provider: Denon, Marantz and HEOS are two tiles
// and one provider. This list is one entry per provider page, which is what the
// table compares. The build fails if it and the capability data disagree.
// ---------------------------------------------------------------------------

export interface PlayerProvider {
  /** The provider's own name, as the page and the app both call it. */
  name: string;
  /** The doc page, copied straight from the sidebar in astro.config.mjs. */
  slug: string;
  /** A file in public/, written as a path starting with a slash. */
  icon: string;
}

export const PLAYER_PROVIDERS: PlayerProvider[] = [
  { name: "AirPlay", slug: "player-support/airplay", icon: "/assets/icons/airplay-logo.png" },
  { name: "Alexa", slug: "player-support/alexa", icon: "/assets/icons/alexa-icon.png" },
  { name: "Amplipi", slug: "player-support/amplipi", icon: "/assets/icons/amplipi-icon.svg" },
  { name: "Bluesound", slug: "player-support/bluesound", icon: "/assets/icons/bluesound-logo.png" },
  { name: "Bose SoundTouch", slug: "player-support/bose-soundtouch", icon: "/assets/icons/bose-soundtouch-icon.png" },
  { name: "DLNA", slug: "player-support/dlna", icon: "/assets/icons/dlna-icon.svg" },
  { name: "Fully Kiosk", slug: "player-support/fully-kiosk", icon: "/assets/icons/fully-kiosk.png" },
  { name: "Google Cast", slug: "player-support/google-cast", icon: "/assets/icons/google-cast-logo.svg" },
  { name: "HEOS", slug: "player-support/heos", icon: "/assets/icons/heos-icon.svg" },
  { name: "Home Assistant", slug: "player-support/home-assistant", icon: "/assets/icons/ha-logo.png" },
  { name: "Local Audio Out", slug: "player-support/local-audio", icon: "/assets/icons/loudness-analysis-icon.svg" },
  { name: "MSX Bridge", slug: "player-support/msx-bridge", icon: "/assets/icons/msx-bridge-icon.svg" },
  { name: "Music Player Daemon (MPD)", slug: "player-support/music-player-daemon", icon: "/assets/icons/mpd-icon.svg" },
  { name: "MusicCast", slug: "player-support/musiccast", icon: "/assets/icons/musiccast-icon.svg" },
  { name: "Roku Media Assistant", slug: "player-support/roku", icon: "/assets/icons/roku-media-assistant-icon.png" },
  { name: "Samsung WAM", slug: "player-support/samsung-wam", icon: "/assets/icons/samsung-wam.svg" },
  { name: "Sendspin", slug: "player-support/sendspin", icon: "/assets/icons/sendspin-icon.svg" },
  { name: "Snapcast", slug: "player-support/snapcast", icon: "/assets/icons/snapcast-icon.svg" },
  { name: "Sonos", slug: "player-support/sonos", icon: "/assets/icons/sonos-icon.svg" },
  { name: "Squeezelite", slug: "player-support/squeezelite", icon: "/assets/icons/slim-icon.svg" },
  { name: "WiiM", slug: "player-support/wiim", icon: "/assets/icons/wiim.svg" },
  { name: "Yandex Station", slug: "player-support/yandex-station", icon: "/assets/icons/yandex-station-icon.svg" },
];

// ---------------------------------------------------------------------------
// Everything the "I Want To Stream To" page needs, in one object.
// Rendered by src/components/TilePage.astro.
// ---------------------------------------------------------------------------
export const PLAYERS_PAGE = {
  idPrefix: "stream",
  dataFile: "src/data/players.ts",
  // Not "provider": a tile is now a make rather than a provider, and several
  // of them lead to the same provider page.
  itemNoun: "option",
  pathPrefix: "player-support/",
  // Pages under player-support/ that intentionally have no tile.
  knownUnlisted: [
    "player-support", // the overview page
  ],
  groups: PLAYER_GROUPS,
  items: PLAYERS,
};
