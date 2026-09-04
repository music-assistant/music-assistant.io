// ---------------------------------------------------------------------------
// Data for the "I Want To Listen To" page (/faq/listen-to/).
//
// TO ADD A MUSIC SOURCE: copy an existing block in MUSIC_SOURCES below, keep
// the list alphabetical by `name`, and fill in the four fields. The site build
// will fail with a clear message if the slug, the icon or a category is wrong,
// so a mistake here can never reach the live site.
//
// A source can belong to as many categories as it needs. The "Media Types
// Supported" row of the source's own Features table says whether it offers
// music, radio, podcasts or audiobooks, which maps onto the categories below;
// Artists, Albums, Tracks and Playlists all mean music. The country tags and a
// few deliberate exceptions are judgement calls, noted in the comments below.
// ---------------------------------------------------------------------------

/** Every category a source can be tagged with. */
export type CategoryId =
  // What do you want to listen to?
  | "own-files"
  | "streaming"
  | "radio"
  | "podcasts"
  | "audiobooks"
  | "live-concerts"
  | "classical"
  | "children"
  // Music and radio from a particular country
  | "germany"
  | "austria"
  | "belgium"
  | "sweden"
  | "denmark"
  | "russia"
  | "china"
  | "japan"
  | "france"
  | "uk"
  | "australia";

export interface Category {
  /** Used as the link target, so it must be unique. */
  id: CategoryId;
  /** Heading above the tiles, and the label on the tile that jumps to it. */
  title: string;
  /** A file in public/assets/icons/listen/, written as a path from the site root. */
  icon: string;
  /** One sentence under the heading. Plain text, no markdown. */
  blurb: string;
}

export interface CategoryGroup {
  id: string;
  title: string;
  intro: string;
  categories: Category[];
}

export interface MusicSource {
  /** Shown under the logo. Normally the same as the sidebar label. */
  name: string;
  /** The doc page, copied straight from the sidebar in astro.config.mjs. */
  slug: string;
  /** A file in public/, written as a path starting with a slash. */
  icon: string;
  /** One or more ids from CategoryId above. */
  categories: CategoryId[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: "what",
    title: "What do you want to listen to?",
    intro: "Pick one to jump to the music sources that can provide it.",
    categories: [
      {
        id: "own-files",
        icon: "/assets/icons/listen/own-files.png",
        title: "My own music",
        blurb:
          "Music you already own, held on a disk, a NAS or your own media server.",
      },
      {
        id: "streaming",
        icon: "/assets/icons/listen/streaming.png",
        title: "Streaming music",
        blurb:
          "Services with a large catalogue to search and play, some paid and some free.",
      },
      {
        id: "radio",
        icon: "/assets/icons/listen/radio.png",
        title: "Radio stations",
        blurb:
          "Live internet radio, from a single station through to directories of thousands.",
      },
      {
        id: "podcasts",
        icon: "/assets/icons/listen/podcasts.png",
        title: "Podcasts",
        blurb:
          "Follow shows and pick up each episode where you left off.",
      },
      {
        id: "audiobooks",
        icon: "/assets/icons/listen/audiobooks.png",
        title: "Audiobooks",
        blurb: "Books to listen to, with chapters and a saved position.",
      },
      {
        id: "live-concerts",
        icon: "/assets/icons/listen/live-concerts.png",
        title: "Live concert recordings",
        blurb: "Soundboard and audience recordings of shows, often complete sets.",
      },
      {
        id: "classical",
        icon: "/assets/icons/listen/classical.png",
        title: "Classical music",
        blurb:
          "Stations and services carrying orchestral, chamber and operatic music.",
      },
      {
        id: "children",
        icon: "/assets/icons/listen/children.png",
        title: "Entertainment for children",
        blurb: "Audio made for younger listeners.",
      },
    ],
  },
  {
    id: "country",
    title: "Or something in your own language",
    intro:
      "These sources carry content from one country, or are only available there.",
    categories: [
      {
        id: "germany",
        icon: "/assets/icons/listen/germany.svg",
        title: "Deutschland / Germany",
        blurb: "Radio and podcasts from the German public broadcasters.",
      },
      {
        id: "austria",
        icon: "/assets/icons/listen/austria.svg",
        title: "Österreich / Austria",
        blurb: "Austrian radio stations and podcasts.",
      },
      {
        id: "belgium",
        icon: "/assets/icons/listen/belgium.svg",
        title: "België / Belgium",
        blurb: "Radio and podcasts from the Belgian public broadcasters.",
      },
      {
        id: "sweden",
        icon: "/assets/icons/listen/sweden.svg",
        title: "Sverige / Sweden",
        blurb: "Swedish public service radio, and audiobooks in Swedish.",
      },
      {
        id: "denmark",
        icon: "/assets/icons/listen/denmark.svg",
        title: "Danmark / Denmark",
        blurb: "Danish music streaming, and audiobooks in Danish.",
      },
      {
        id: "russia",
        icon: "/assets/icons/listen/russia.svg",
        title: "Россия / Russia",
        blurb: "Streaming services with large Russian language catalogues.",
      },
      {
        id: "china",
        icon: "/assets/icons/listen/china.svg",
        title: "中国 / China",
        blurb: "The two large streaming platforms in Mainland China.",
      },
      {
        id: "japan",
        icon: "/assets/icons/listen/japan.svg",
        title: "日本 / Japan",
        blurb: "Music uploaded by the Nico Nico community, much of it found nowhere else.",
      },
      {
        id: "france",
        icon: "/assets/icons/listen/france.svg",
        title: "France",
        blurb: "French streaming with a catalogue of major and independent labels.",
      },
      {
        id: "uk",
        icon: "/assets/icons/listen/uk.svg",
        title: "United Kingdom",
        blurb: "British radio, live and after broadcast.",
      },
      {
        id: "australia",
        icon: "/assets/icons/listen/australia.svg",
        title: "Australia",
        blurb: "Australian public radio, from new music to classical and jazz.",
      },
    ],
  },
];

export const MUSIC_SOURCES: MusicSource[] = [
  {
    name: "ABC Radio Network",
    slug: "music-providers/abc-radio-network",
    icon: "/assets/icons/abc-radio-icon.svg",
    categories: ["radio", "classical", "children", "australia"],
  },
  {
    name: "Apple Music",
    slug: "music-providers/apple-music",
    icon: "/assets/icons/apple-music.svg",
    // Apple Music lists Radio as a media type, but it means artist stations
    // rather than broadcast radio, so it is not tagged "radio".
    categories: ["streaming"],
  },
  {
    name: "ARD Sounds",
    slug: "music-providers/ard-sounds",
    icon: "/assets/icons/ard-sounds.png",
    categories: ["radio", "podcasts", "germany"],
  },
  {
    name: "Audible",
    slug: "music-providers/audible",
    icon: "/assets/icons/audible-icon.png",
    categories: ["audiobooks"],
  },
  {
    name: "Audiobookshelf",
    slug: "music-providers/audiobookshelf",
    icon: "/assets/icons/audiobookshelf-icon.png",
    categories: ["own-files", "audiobooks", "podcasts"],
  },
  {
    name: "Bandcamp",
    slug: "music-providers/bandcamp",
    icon: "/assets/icons/bandcamp.svg",
    categories: ["streaming"],
  },
  {
    name: "BBC Sounds",
    slug: "music-providers/bbc-sounds",
    icon: "/assets/icons/bbcsounds-logo.png",
    categories: ["radio", "podcasts", "classical", "uk"],
  },
  {
    name: "Builtin",
    slug: "music-providers/builtin",
    icon: "/assets/icon.png",
    categories: ["radio"],
  },
  {
    name: "Deezer",
    slug: "music-providers/deezer",
    icon: "/assets/icons/deezer-icon.svg",
    categories: ["streaming", "podcasts", "audiobooks"],
  },
  {
    name: "DI.fm Network",
    slug: "music-providers/digitally-imported",
    icon: "/assets/icons/difm-icon.svg",
    categories: ["radio", "classical"],
  },
  {
    name: "Emby",
    slug: "music-providers/emby",
    icon: "/assets/icons/emby-icon.svg",
    categories: ["own-files"],
  },
  {
    name: "gPodder",
    slug: "music-providers/gpodder",
    icon: "/assets/icons/gpodder-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "iBroadcast",
    slug: "music-providers/ibroadcast",
    icon: "/assets/icons/ibroadcast-logo.png",
    // Not self-hosted, but you upload your own collection to it.
    categories: ["own-files"],
  },
  {
    name: "Internet Archive",
    slug: "music-providers/internet-archive",
    icon: "/assets/icons/internet-archive-logo.png",
    categories: ["streaming", "audiobooks", "podcasts", "live-concerts"],
  },
  {
    name: "iTunes Podcast Search",
    slug: "music-providers/itunes-podcast",
    icon: "/assets/icons/itunes-podcast-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "Jellyfin",
    slug: "music-providers/jellyfin",
    icon: "/assets/icons/jellyfin-logo.svg",
    categories: ["own-files"],
  },
  {
    name: "KION Music",
    slug: "music-providers/kion-music",
    icon: "/assets/icons/kion-music-icon.svg",
    categories: ["streaming", "russia"],
  },
  {
    name: "Local Files",
    slug: "music-providers/local-files",
    icon: "/assets/icons/localfiles-icon.png",
    categories: ["own-files", "audiobooks", "podcasts"],
  },
  {
    name: "Mamma Mi Radio",
    slug: "music-providers/mamma-mi-radio",
    icon: "/assets/icons/mamma-mi-radio-icon.png",
    // A self-hosted station rather than a library of your own files, so radio
    // only. The hosts are Italian characters but broadcast mostly in English,
    // so no country tag.
    categories: ["radio"],
  },
  {
    name: "MusicMe",
    slug: "music-providers/musicme",
    icon: "/assets/icons/musicme-icon.svg",
    categories: ["streaming", "france"],
  },
  {
    name: "NetEase Cloud Music",
    slug: "music-providers/netease-cloud-music",
    icon: "/assets/icons/netease-cloud-music-icon.png",
    categories: ["streaming", "china"],
  },
  {
    name: "Nico Nico Video",
    slug: "music-providers/niconico",
    icon: "/assets/icons/niconico-logo.svg",
    categories: ["streaming", "japan"],
  },
  {
    name: "NTS Radio",
    slug: "music-providers/nts",
    icon: "/assets/icons/nts-icon.svg",
    categories: ["radio", "uk"],
  },
  {
    name: "Nugs.net",
    slug: "music-providers/nugs",
    icon: "/assets/icons/nugsnet-logo.png",
    categories: ["streaming", "live-concerts"],
  },
  {
    name: "ORF Radiothek",
    slug: "music-providers/orf-radiothek",
    icon: "/assets/icons/orf_radiothek-icon.svg",
    categories: ["radio", "podcasts", "classical", "austria"],
  },
  {
    name: "Overcast",
    slug: "music-providers/overcast",
    icon: "/assets/icons/overcast-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "Pandora",
    slug: "music-providers/pandora",
    icon: "/assets/icons/pandora.png",
    categories: ["radio"],
  },
  {
    name: "Phish.in",
    slug: "music-providers/phishin",
    icon: "/assets/icons/phish-logo.png",
    categories: ["live-concerts"],
  },
  {
    name: "Plex",
    slug: "music-providers/plex",
    icon: "/assets/icons/plex-icon.svg",
    categories: ["own-files", "audiobooks", "podcasts"],
  },
  {
    name: "Pocketcasts",
    slug: "music-providers/pocketcasts",
    icon: "/assets/icons/pocketcasts-icon.svg",
    categories: ["podcasts"],
  },
  {
    name: "Podcast Index",
    slug: "music-providers/podcast-index",
    icon: "/assets/icons/podcast-index-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "Podcast RSS Feed",
    slug: "music-providers/podcastfeed",
    icon: "/assets/icons/rss-icon.png",
    categories: ["podcasts"],
  },
  {
    name: "Qobuz",
    slug: "music-providers/qobuz",
    icon: "/assets/icons/qobuz-icon.svg",
    categories: ["streaming"],
  },
  {
    name: "QQ Music",
    slug: "music-providers/qqmusic",
    icon: "/assets/icons/qqmusic-icon.svg",
    categories: ["streaming", "china"],
  },
  {
    name: "Radio Browser",
    slug: "music-providers/radio-browser",
    icon: "/assets/icons/radiobrowser_icon.png",
    categories: ["radio", "classical"],
  },
  {
    name: "Radio Paradise",
    slug: "music-providers/radio-paradise",
    icon: "/assets/icons/radioparadise-icon.png",
    categories: ["radio"],
  },
  {
    name: "SiriusXM",
    slug: "music-providers/siriusxm",
    icon: "/assets/icons/siriusxm-logo.png",
    categories: ["radio", "classical", "children"],
  },
  {
    name: "SomaFM Radio",
    slug: "music-providers/somafm-radio",
    icon: "/assets/icons/somafm-icon.png",
    categories: ["radio"],
  },
  {
    name: "SoundCloud",
    slug: "music-providers/soundcloud",
    icon: "/assets/icons/soundcloud-icon.svg",
    categories: ["streaming"],
  },
  {
    name: "Spotify",
    slug: "music-providers/spotify",
    icon: "/assets/icons/spotify-icon.svg",
    categories: ["streaming", "podcasts", "audiobooks"],
  },
  {
    name: "Storytel",
    slug: "music-providers/storytel",
    icon: "/assets/icons/storytel.svg",
    // Swedish service, and sold in Denmark as Mofibo, with a large catalogue
    // in both languages.
    categories: ["audiobooks", "podcasts", "sweden", "denmark"],
  },
  {
    name: "Subsonic",
    slug: "music-providers/subsonic",
    icon: "/assets/icons/subsonic_icon.png",
    categories: ["own-files", "podcasts"],
  },
  {
    name: "Sveriges Radio",
    slug: "music-providers/sveriges-radio",
    icon: "/assets/icons/sverigesradio-icon.svg",
    categories: ["radio", "classical", "children", "sweden"],
  },
  {
    name: "TeddyCloud",
    slug: "music-providers/teddycloud",
    icon: "/assets/icons/teddycloud-icon.svg",
    categories: ["own-files", "audiobooks", "children"],
  },
  {
    name: "Tidal",
    slug: "music-providers/tidal",
    icon: "/assets/icons/tidal-icon.svg",
    categories: ["streaming"],
  },
  {
    name: "TuneIn",
    slug: "music-providers/tunein",
    icon: "/assets/icons/tunein-icon.svg",
    categories: ["radio", "classical"],
  },
  {
    name: "VRT MAX",
    slug: "music-providers/vrt-max",
    icon: "/assets/icons/vrt_max-icon.svg",
    categories: ["radio", "podcasts", "classical", "belgium"],
  },
  {
    name: "Yandex Music",
    slug: "music-providers/yandex-music",
    icon: "/assets/icons/yandex-music-icon.svg",
    categories: ["streaming", "podcasts", "audiobooks", "russia"],
  },
  {
    name: "Yoto",
    slug: "music-providers/yoto",
    icon: "/assets/icons/yoto-icon.png",
    categories: ["audiobooks", "children", "streaming", "podcasts", "radio"],
  },
  {
    name: "YouSee Musik",
    slug: "music-providers/yousee-musik",
    icon: "/assets/icons/yousee.svg",
    categories: ["streaming", "denmark"],
  },
  {
    name: "YouTube Music",
    slug: "music-providers/youtube-music",
    icon: "/assets/icons/ytm-icon.svg",
    categories: ["streaming", "podcasts"],
  },
  {
    name: "Zvuk Music",
    slug: "music-providers/zvuk",
    icon: "/assets/icons/zvuk-icon.svg",
    categories: ["streaming", "russia"],
  },
];

// ---------------------------------------------------------------------------
// Everything the "I Want To Listen To" page needs, in one object.
// Rendered by src/components/TilePage.astro.
// ---------------------------------------------------------------------------
export const MUSIC_SOURCES_PAGE = {
  idPrefix: "listen",
  dataFile: "src/data/music-sources.ts",
  itemNoun: "source",
  pathPrefix: "music-providers/",
  flagGroupId: "country",
  // Pages under music-providers/ that intentionally have no tile.
  knownUnlisted: [
    "music-providers", // the overview page
    "music-providers/ambient-sounds", // fits none of the listening categories
    "music-providers/netease-cloud-music-zh", // Chinese version of another page
    "music-providers/qqmusic-zh", // Chinese version of another page
  ],
  groups: CATEGORY_GROUPS,
  items: MUSIC_SOURCES,
};
