// ---------------------------------------------------------------------------
// Data for the plugin list at the bottom of the Plugins overview (/plugins/).
//
// TO ADD A PLUGIN: write the page first, add its sidebar entry in
// astro.config.mjs, then add a block to PLUGINS below, keeping each group
// alphabetical by slug. The build fails, naming the page, if a plugin page has
// no entry here, so the list cannot fall behind the pages.
//
// The name shown is the page's own title, so it is not repeated here. Only the
// one-line summary and the group are, since neither can be read from the page:
// the frontmatter description of several pages says no more than "Features and
// Notes for the X Plugin".
// ---------------------------------------------------------------------------

export type PluginGroupId =
  | "discover"
  | "incoming"
  | "shared"
  | "scrobbling"
  | "other-systems"
  | "diagnostics";

export interface PluginGroup {
  id: PluginGroupId;
  /** Heading above the group. */
  title: string;
}

export interface Plugin {
  /** The doc page, copied straight from the sidebar in astro.config.mjs. */
  slug: string;
  /** One sentence on what it does, for a reader choosing between them. */
  summary: string;
  group: PluginGroupId;
}

export const PLUGIN_GROUPS: PluginGroup[] = [
  { id: "discover", title: "Finding something to play" },
  { id: "incoming", title: "Playing to Music Assistant from something else" },
  { id: "shared", title: "Listening with other people" },
  { id: "scrobbling", title: "Reporting what you played" },
  { id: "other-systems", title: "Reaching other systems" },
  { id: "diagnostics", title: "Diagnostics" },
];

export const PLUGINS: Plugin[] = [
  {
    slug: "plugins/ai-radio",
    summary:
      "Puts a spoken host between your tracks, either as a show built from one of your playlists or over the queue you are already listening to.",
    group: "discover",
  },
  {
    slug: "plugins/library-recommendations",
    summary:
      "Fills the Discover page with rows drawn from your own library and what you have been playing. Built in and always on.",
    group: "discover",
  },
  {
    slug: "plugins/smart_playlist",
    summary:
      "Builds playlists from rules rather than a fixed list of tracks, worked out again each time you play one.",
    group: "discover",
  },
  {
    slug: "plugins/sonic-similarity",
    summary:
      "Uses the sound of your tracks to find similar ones, extend a queue endlessly and answer searches written as a description.",
    group: "discover",
  },
  {
    slug: "plugins/airplay-receiver",
    summary:
      "Makes your players appear as AirPlay devices, so anything that can send to AirPlay can play on them.",
    group: "incoming",
  },
  {
    slug: "plugins/ariacast-receiver",
    summary: "Sends audio from an Android device to any of your players.",
    group: "incoming",
  },
  {
    slug: "plugins/plex-connect",
    summary:
      "Puts your players in the device list of Plex clients such as Plexamp. Needs the Plex music source.",
    group: "incoming",
  },
  {
    slug: "plugins/sendspin-source",
    summary:
      "Brings a turntable, microphone or line-in on a Sendspin device into Music Assistant as a Live Input.",
    group: "incoming",
  },
  {
    slug: "plugins/spotify-connect",
    summary:
      "Puts your players in the official Spotify app's device list, like a Spotify Connect speaker.",
    group: "incoming",
  },
  {
    slug: "plugins/vban-receiver",
    summary:
      "Lets another computer send its sound across the network and play it on your speakers, like an aux input.",
    group: "incoming",
  },
  {
    slug: "plugins/yandex-ynison",
    summary:
      "Puts your players in the official Yandex Music app. Needs the Yandex Music source.",
    group: "incoming",
  },
  {
    slug: "plugins/hue-entertainment",
    summary:
      "Makes your Philips Hue lights change colour in time with whatever is playing.",
    group: "shared",
  },
  {
    slug: "plugins/milkdrop-visualizer",
    summary:
      "Draws a MilkDrop visualizer behind the now playing views, reacting to the audio.",
    group: "shared",
  },
  {
    slug: "plugins/music-quiz",
    summary:
      "Runs a multiplayer quiz on your own library, with the dashboard on a TV and the answers on your guests' phones.",
    group: "shared",
  },
  {
    slug: "plugins/party",
    summary:
      "Lets guests queue songs from their phones by scanning a QR code, with no account and no access to your system.",
    group: "shared",
  },
  {
    slug: "plugins/lastfm_scrobble",
    summary: "Scrobbles what you play to LastFM or LibreFM.",
    group: "scrobbling",
  },
  {
    slug: "plugins/listenbrainz_scrobble",
    summary: "Scrobbles what you play to Listenbrainz.",
    group: "scrobbling",
  },
  {
    slug: "plugins/subsonic_scrobble",
    summary:
      "Reports what you play to a Subsonic media server, so its play counts and history stay right.",
    group: "scrobbling",
  },
  {
    slug: "ha-plugin",
    summary:
      "The bridge to Home Assistant. It links entities to player controls, and hands the AI and text-to-speech services you already have there to the features that need them.",
    group: "other-systems",
  },
  {
    slug: "plugins/fastmcp-server",
    summary:
      "Offers your library, queue and players over the Model Context Protocol, so an AI assistant can search and control them.",
    group: "other-systems",
  },
  {
    slug: "plugins/openai_compatible",
    summary:
      "Points the AI features at OpenAI, Groq, OpenRouter, Together or a local server such as Ollama, so they work without Home Assistant.",
    group: "other-systems",
  },
  {
    slug: "plugins/yandex-smarthome",
    summary:
      "Adds your players to Yandex Smart Home, so Alice can control them by voice.",
    group: "other-systems",
  },
  {
    slug: "plugins/profiler",
    summary:
      "Records what the server is doing and turns it into one report to attach to a bug report. Add it when a maintainer asks, then remove it again.",
    group: "diagnostics",
  },
];
