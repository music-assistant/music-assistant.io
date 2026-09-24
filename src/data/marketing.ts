// Content for the marketing pages. Kept apart from the markup so the lists of
// sources, speakers, plugins and people can change without touching layout.

export interface Brand {
  name: string;
  icon: string;
  /** The logo is black and needs inverting on dark backgrounds. */
  dark?: boolean;
}

const brand = (icon: string, name: string, dark = false): Brand => ({
  name,
  icon,
  dark,
});

export const musicSources: Brand[] = [
  brand("filesystem_local", "Local files"),
  brand("spotify", "Spotify"),
  brand("apple_music", "Apple Music"),
  brand("ytmusic", "YouTube Music"),
  brand("tidal", "TIDAL", true),
  brand("qobuz", "Qobuz"),
  brand("deezer", "Deezer"),
  brand("soundcloud", "SoundCloud"),
  brand("plex", "Plex"),
  brand("jellyfin", "Jellyfin"),
  brand("opensubsonic", "Subsonic"),
  brand("emby", "Emby"),
  brand("bandcamp", "Bandcamp", true),
  brand("tunein", "TuneIn"),
  brand("radiobrowser", "Radio Browser"),
  brand("siriusxm", "SiriusXM"),
  brand("pandora", "Pandora"),
  brand("audible", "Audible"),
  brand("audiobookshelf", "Audiobookshelf"),
  brand("pocketcasts", "Pocket Casts"),
  brand("itunes_podcasts", "iTunes Podcasts"),
  brand("bbc_sounds", "BBC Sounds"),
  brand("internet_archive", "Internet Archive", true),
  brand("somafm", "SomaFM"),
];

export const speakers: Brand[] = [
  brand("sonos", "Sonos"),
  brand("airplay", "AirPlay"),
  brand("chromecast", "Google Cast"),
  brand("sendspin", "Sendspin"),
  brand("hass_players", "Home Assistant"),
  brand("wiim", "WiiM"),
  brand("heos", "HEOS"),
  brand("musiccast", "Yamaha MusicCast"),
  brand("bluesound", "Bluesound", true),
  brand("squeezelite", "Squeezelite"),
  brand("dlna", "DLNA"),
  brand("alexa", "Alexa"),
];

export interface Plugin {
  label: string;
  title: string;
  text: string;
  href: string;
  link: string;
}

export const plugins: Plugin[] = [
  {
    label: "Party mode",
    title: "Everyone gets a turn.",
    text: "Guests scan a QR code to browse your music and request songs from their phones. You decide what plays next. No app or account needed.",
    href: "/plugins/party/",
    link: "Explore Party mode",
  },
  {
    label: "Music Quiz",
    title: "Challenge your friends.",
    text: "Turn your collection into game night. Guess the song, put tracks in order of release or try music trivia. Friends join from their phones.",
    href: "/plugins/music-quiz/",
    link: "Explore Music Quiz",
  },
  {
    label: "Lyrics",
    title: "Sing along.",
    text: "Follow the lyrics in Now Playing. When timed lyrics are available, they scroll along with the music.",
    href: "/metadata/lyrics/",
    link: "Explore lyrics",
  },
  {
    label: "AI Radio",
    title: "A radio station of your own.",
    text: "Give your playlist a host that introduces songs and adds weather or news between tracks. Use the AI and text-to-speech services you already have in Home Assistant.",
    href: "/plugins/ai-radio/",
    link: "Explore AI Radio",
  },
];

export interface Refinement {
  title: string;
  summary: string;
  text: string;
  link?: { href: string; label: string };
}

export const refinements: Refinement[] = [
  {
    title: "Move your playlists",
    summary: "Take your favorites to another service.",
    text: "Copy playlists between supported services and keep them in sync as you add new songs.",
  },
  {
    title: "Add Spotify Connect",
    summary: "Keep using the Spotify app.",
    text: "Make supported speakers appear in Spotify, even if they didn’t come with Spotify Connect. Pick one speaker or a whole group in the Spotify app and play as usual.",
    link: {
      href: "/plugins/spotify-connect/",
      label: "Set up Spotify Connect",
    },
  },
  {
    title: "The best sound each speaker can play",
    summary: "Gapless albums, smoother transitions and consistent volume.",
    text: "Music Assistant matches the audio to what each speaker supports. Keep albums gapless, blend tracks with Smart Fades, even out volume between songs and adjust the sound for your speakers and room.",
    link: { href: "/audiopipeline/", label: "How the audio pipeline works" },
  },
  {
    title: "Different speakers in sync",
    summary: "AirPlay meets Sendspin.",
    text: "Play your existing AirPlay speakers in sync with Sendspin devices as one group.",
    link: { href: "/faq/groups/", label: "Learn about groups" },
  },
  {
    title: "Let your home speak up",
    summary: "Hear the message without losing your place.",
    text: "Give Home Assistant a voice through your speakers, from a doorbell alert to a call for dinner. Music Assistant pauses or lowers the music for the announcement, then brings it back when the message ends.",
    link: {
      href: "/integration/announcements/",
      label: "Set up announcements",
    },
  },
  {
    title: "Search your whole library by voice",
    summary: "Ask for the music and the room.",
    text: "Ask Home Assistant Assist to find a song, album, artist or playlist across your connected music sources, then tell it where to play.",
    link: { href: "/integration/voice/", label: "Set up voice control" },
  },
];

export const team = [
  { name: "Marcel", github: "marcelveldt", image: "marcel" },
  { name: "Marvin", github: "marvinschenkel", image: "marvin" },
  { name: "Maxim", github: "maximmaxim345", image: "maxim" },
  { name: "Steven", github: "stvncode", image: "steven" },
  { name: "Chris", github: "chrisuthe", image: "chris" },
  { name: "Gavin", github: "OzGav", image: "gavin" },
  { name: "Jozef", github: "jozefKruszynski", image: "jozef" },
  { name: "Fabian", github: "fmunkes", image: "fabian" },
  { name: "Eric", github: "khers", image: "khers" },
  { name: "Rob", github: "robsonke", image: "robsonke" },
];
