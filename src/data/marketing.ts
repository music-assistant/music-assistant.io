// Content for the marketing pages. Kept apart from the markup so the lists of
// sources, speakers, plugins and people can change without touching layout.

export interface Brand {
  name: string;
  icon: string;
  href: string;
  /** The logo is black and needs inverting on dark backgrounds. */
  dark?: boolean;
}

const brand = (icon: string, name: string, href: string, dark = false): Brand => ({
  name,
  icon,
  href,
  dark,
});

export const musicSources: Brand[] = [
  brand("filesystem_local", "Local files", "/music-providers/local-files/"),
  brand("spotify", "Spotify", "/music-providers/spotify/"),
  brand("apple_music", "Apple Music", "/music-providers/apple-music/"),
  brand("ytmusic", "YouTube Music", "/music-providers/youtube-music/"),
  brand("tidal", "TIDAL", "/music-providers/tidal/", true),
  brand("qobuz", "Qobuz", "/music-providers/qobuz/", true),
  brand("deezer", "Deezer", "/music-providers/deezer/"),
  brand("plex", "Plex", "/music-providers/plex/"),
  brand("tunein", "TuneIn", "/music-providers/tunein/"),
  brand("audible", "Audible", "/music-providers/audible/"),
  brand("audiobookshelf", "Audiobookshelf", "/music-providers/audiobookshelf/"),
  brand("pocketcasts", "Pocket Casts", "/music-providers/pocketcasts/"),
];

export const speakers: Brand[] = [
  brand("sonos", "Sonos", "/player-support/sonos/"),
  brand("airplay", "AirPlay", "/player-support/airplay/"),
  brand("chromecast", "Google Cast", "/player-support/google-cast/"),
  brand("sendspin", "Sendspin", "/player-support/sendspin/"),
  brand("hass_players", "Home Assistant", "/player-support/home-assistant/"),
  brand("wiim", "WiiM", "/player-support/wiim/"),
  brand("heos", "HEOS", "/player-support/heos/"),
  brand("musiccast", "Yamaha MusicCast", "/player-support/musiccast/"),
  brand("bluesound", "Bluesound", "/player-support/bluesound/", true),
  brand("squeezelite", "Squeezelite", "/player-support/squeezelite/"),
  brand("dlna", "DLNA", "/player-support/dlna/"),
  brand("alexa", "Alexa", "/player-support/alexa/"),
];

export interface Plugin {
  label: string;
  cover: PaletteName;
  title: string;
  text: string;
  href: string;
  link: string;
}

export const plugins: Plugin[] = [
  {
    label: "Party mode",
    cover: "hiphop",
    title: "Everyone gets a turn.",
    text: "Guests scan a QR code to browse your music and request songs from their phones. You decide what plays next. No app or account needed.",
    href: "/plugins/party/",
    link: "Explore Party mode",
  },
  {
    label: "Music Quiz",
    cover: "electronic",
    title: "Challenge your friends.",
    text: "Turn your collection into game night. Guess the song, put tracks in order of release or try music trivia. Friends join from their phones.",
    href: "/plugins/music-quiz/",
    link: "Explore Music Quiz",
  },
  {
    label: "Lyrics",
    cover: "soul",
    title: "Sing along.",
    text: "Follow the lyrics in Now Playing. When timed lyrics are available, they scroll along with the music.",
    href: "/metadata/lyrics/",
    link: "Explore lyrics",
  },
  {
    label: "AI Radio",
    cover: "radio",
    title: "A radio station of your own.",
    text: "Give your playlist a host that introduces songs and adds weather or news between tracks. Use the AI and text-to-speech services you already have in Home Assistant.",
    href: "/plugins/ai-radio/",
    link: "Explore AI Radio",
  },
];

export interface Feature {
  cover: PaletteName;
  title: string;
  summary: string;
  text: string;
  link?: { href: string; label: string };
}

export const features: Feature[] = [
  {
    cover: "rock",
    title: "One library across your music sources",
    summary: "Search your streaming services and your own collection together.",
    text: "Browse music from your connected sources in one place. Matching releases are linked, and a playlist can include tracks from several services alongside your own files. Each service still needs its own account and subscription where required.",
    link: { href: "/music-providers/", label: "Explore music sources" },
  },
  {
    cover: "indie",
    title: "Move your playlists",
    summary: "Take your favorites to another service.",
    text: "Copy playlists between supported services and keep supported playlists in sync as you edit them. You can change services without rebuilding every playlist, though the songs available depend on the destination service’s catalogue.",
  },
  {
    cover: "folk",
    title: "Keep the music going",
    summary: "Put your phone away or take the queue to another room.",
    text: "Your playback queue lives on the Music Assistant server, so closing the app or browser doesn’t stop the music. Transfer the queue to another speaker without losing your place, and control playback from your phone or a browser.",
    link: { href: "/faq/masstransfer/", label: "Move music between rooms" },
  },
  {
    cover: "ambient",
    title: "Play in sync across compatible speakers",
    summary: "Including AirPlay and Sendspin together.",
    text: "Group compatible speakers to play the same music around your home. Music Assistant can also bring AirPlay speakers into a Sendspin group. Synchronization depends on the speakers and group type; not every combination can play in sync.",
    link: { href: "/faq/groups/", label: "Learn about groups" },
  },
  {
    cover: "classical",
    title: "The best sound each speaker can play",
    summary: "Gapless albums, smoother transitions and consistent volume.",
    text: "Music Assistant matches the audio to what each speaker supports. Keep albums gapless, blend tracks with Smart Fades, even out volume between songs and adjust the sound for your speakers and room.",
    link: { href: "/audiopipeline/", label: "How the audio pipeline works" },
  },
  {
    cover: "jazz",
    title: "Make music part of your smart home",
    summary: "Voice control, automations and announcements with Home Assistant.",
    text: "Ask Home Assistant Assist for a song and a room, start music from an automation, or play a doorbell announcement through your speakers. Music Assistant can pause or lower the music for the message, then bring it back. The integration works with both Docker and Home Assistant installations.",
    link: { href: "/integration/", label: "Connect Home Assistant" },
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

/**
 * Album-art palettes. Each is a three-colour mesh gradient standing in for a
 * cover, one per corner of the music Music Assistant plays, so the site gets
 * its colour the way the app does: from the artwork.
 */
export interface Palette {
  genre: string;
  source: string;
  colors: [string, string, string];
}

export const palettes = {
  indie: {
    genre: "Indie",
    source: "Spotify",
    colors: ["#ff6b6b", "#f7b267", "#5f0f40"],
  },
  electronic: {
    genre: "Electronic",
    source: "SoundCloud",
    colors: ["#00f5d4", "#7b2ff7", "#0b0c3d"],
  },
  jazz: {
    genre: "Jazz",
    source: "Local files",
    colors: ["#f4d35e", "#ee964b", "#0d3b66"],
  },
  hiphop: {
    genre: "Hip-hop",
    source: "Apple Music",
    colors: ["#ff006e", "#fb5607", "#3a0ca3"],
  },
  classical: {
    genre: "Classical",
    source: "Qobuz",
    colors: ["#e9d8a6", "#94d2bd", "#005f73"],
  },
  ambient: {
    genre: "Ambient",
    source: "Plex",
    colors: ["#a2d2ff", "#cdb4db", "#1d3557"],
  },
  rock: {
    genre: "Rock",
    source: "TIDAL",
    colors: ["#ffba08", "#d00000", "#03071e"],
  },
  soul: {
    genre: "Soul",
    source: "YouTube Music",
    colors: ["#ff9e00", "#9d4edd", "#240046"],
  },
  folk: {
    genre: "Folk",
    source: "Bandcamp",
    colors: ["#f2e8cf", "#a7c957", "#386641"],
  },
  radio: {
    genre: "Radio",
    source: "TuneIn",
    colors: ["#90e0ef", "#48cae4", "#03045e"],
  },
  podcasts: {
    genre: "Podcasts",
    source: "Pocket Casts",
    colors: ["#ffcad4", "#f4845f", "#582f0e"],
  },
  audiobooks: {
    genre: "Audiobooks",
    source: "Audiobookshelf",
    colors: ["#caf0f8", "#b8c0ff", "#3c096c"],
  },
} satisfies Record<string, Palette>;

export type PaletteName = keyof typeof palettes;

/** The shelf under the hero, showing the range of what plays. */
export const shelf: PaletteName[] = [
  "indie",
  "jazz",
  "electronic",
  "classical",
  "hiphop",
  "podcasts",
  "folk",
  "ambient",
  "rock",
  "radio",
  "soul",
  "audiobooks",
];
