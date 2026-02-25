// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import { remarkAlert } from 'remark-github-blockquote-alert';

const isProduction = process.env.CONTEXT === 'production' || !process.env.CONTEXT;

// https://astro.build/config
export default defineConfig({
	site: 'https://www.music-assistant.io',
	markdown: {
		remarkPlugins: [remarkAlert],
	},
	integrations: [
		starlight({
			title: 'Music Assistant',
			titleDelimiter: '-',
			editLink: isProduction ? {
				baseUrl: 'https://github.com/music-assistant/music-assistant.io/edit/main/',
			} : {},
			logo: {
				light: './src/assets/ma-logo--dark.svg',
				dark: './src/assets/ma-logo--light.svg',
				replacesTitle: true,
			},
			favicon: '/favicon.svg',
			pagination: false,
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/music-assistant',
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/kaVm8hGpne',
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: (isProduction ? 'index, follow' : 'noindex, nofollow')
					}
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'SoftwareApplication',
						name: 'Music Assistant',
						applicationCategory: 'MultimediaApplication',
						operatingSystem: 'Linux',
						description: 'Music library manager for your offline and online music sources',
						url: 'https://www.music-assistant.io',
						author: {
							'@type': 'Organization',
							name: 'Open Home Foundation',
							url: 'https://www.openhomefoundation.org/',
						},
					}),
				},
				{
					tag: "link",
					attrs: {
						rel: "icon",
						href: "/favicon.svg",
					},
				},
				{
					tag: "script",
					content: `document.addEventListener('keydown', function(e) {
						if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
							e.preventDefault();
							document.querySelector('button[data-open-modal]')?.click();
						}
					});`,
				},
				{
					tag: "meta",
					attrs: {
						property: "og:image",
						content: "https://www.music-assistant.io/assets/banner.png",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "twitter:image",
						content: "https://www.music-assistant.io/assets/banner.png",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "twitter:card",
						content: "summary_large_image",
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			plugins: [
				starlightBlog({
					title: 'Blog',
					prefix: 'blog',
					postCount: 10,
					recentPostCount: 5,
					authors: {
						'marcel': {
							name: 'Marcel van der Veldt',
							title: 'Lead Developer',
							picture: 'https://avatars.githubusercontent.com/marcelveldt?size=64',
							url: 'https://github.com/marcelveldt',
						},
					},
				}),
			],
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{
					label: 'Server Install and Configure',
					collapsed: true,
					items: [
						{ label: 'Installation', slug: 'installation' },
						{ label: 'First Run (Authentication)', slug: 'first-run' },
					],
				},
				{
					label: 'Settings',
					collapsed: true,
					items: [
						{ label: 'Profile Settings', slug: 'settings/profile' },
						{ label: 'Music Provider Settings', slug: 'settings/music-provider-settings' },
						{ label: 'Player Provider Settings', slug: 'settings/player-provider' },
						{ label: 'Individual Player Settings', slug: 'settings/individual-player' },
						{ label: 'System Settings', slug: 'settings/core' },
						{ label: 'Remote Access', slug: 'settings/remote-access' },
						{ label: 'User Interface', slug: 'settings/user-interface' },
						{ label: 'User Management', slug: 'settings/user-management' },
						{ label: 'About', slug: 'settings/about' },
					],
				},
				{
					label: 'Home Assistant Integration',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'integration' },
						{ label: 'Installation', slug: 'integration/installation' },
						{ label: 'Announcements', slug: 'integration/announcements' },
						{ label: 'Play Media Action', slug: 'faq/massplaymedia' },
						{ label: 'Play Announcement Action', slug: 'faq/massannounce' },
						{ label: 'Search Action', slug: 'faq/masssearch' },
						{ label: 'Get Library Action', slug: 'faq/get_library' },
						{ label: 'Get Queue Action', slug: 'faq/get_queue' },
						{ label: 'Transfer Queue Action', slug: 'faq/masstransfer' },
						{ label: 'Voice Control', slug: 'integration/voice' },
					],
				},
				{
					label: 'Usage',
					collapsed: true,
					items: [
						{ label: 'General', slug: 'usage' },
						{ label: 'UI', slug: 'ui' },
						{ label: 'Audio Pipeline', slug: 'audiopipeline' },
						{ label: 'Groups', slug: 'faq/groups' },
						{ label: 'DSP Parametric EQ', slug: 'dsp/parametriceq' },
						{ label: 'DSP Tone Controls', slug: 'dsp/tonecontrols' },
						{ label: 'How Do I...', slug: 'faq/how-to' },
						{ label: 'I Want To Stream To', slug: 'faq/stream-to' },
						{ label: 'Technical Info', slug: 'faq/tech-info' },
						{ label: 'Troubleshooting', slug: 'faq/troubleshooting' },
					],
				},
				{
					label: 'Music Providers',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'music-providers' },
						{ label: 'Apple Music', slug: 'music-providers/apple-music' },
						{ label: 'ARD Audiothek', slug: 'music-providers/ard-audiothek' },
						{ label: 'Audible', slug: 'music-providers/audible' },
						{ label: 'Audiobookshelf', slug: 'music-providers/audiobookshelf' },
						{ label: 'BBC Sounds', slug: 'music-providers/bbc-sounds' },
						{ label: 'Builtin', slug: 'music-providers/builtin' },
						{ label: 'Deezer', slug: 'music-providers/deezer' },
						{ label: 'DI.fm Network', slug: 'music-providers/digitally-incorporated' },
						{ label: 'gPodder', slug: 'music-providers/gpodder' },
						{ label: 'iBroadcast', slug: 'music-providers/ibroadcast' },
						{ label: 'Internet Archive', slug: 'music-providers/internet-archive' },
						{ label: 'iTunes Podcast Search', slug: 'music-providers/itunes-podcast' },
						{ label: 'Jellyfin', slug: 'music-providers/jellyfin' },
						{ label: 'Local Files', slug: 'music-providers/filesystem' },
						{ label: 'Nico Nico Video', slug: 'music-providers/niconico' },
						{ label: 'Nugs.net', slug: 'music-providers/nugs' },
						{ label: 'Open Subsonic', slug: 'music-providers/subsonic' },
						{ label: 'Phish.in', slug: 'music-providers/phishin' },
						{ label: 'Plex', slug: 'music-providers/plex' },
						{ label: 'Podcast Index', slug: 'music-providers/podcast-index' },
						{ label: 'Podcast RSS Feed', slug: 'music-providers/podcastfeed' },
						{ label: 'Qobuz', slug: 'music-providers/qobuz' },
						{ label: 'Radio Browser', slug: 'music-providers/radio-browser' },
						{ label: 'Radio Paradise', slug: 'music-providers/radio-paradise' },
						{ label: 'SiriusXM', slug: 'music-providers/siriusxm' },
						{ label: 'SoundCloud', slug: 'music-providers/soundcloud' },
						{ label: 'Spotify', slug: 'music-providers/spotify' },
						{ label: 'Tidal', slug: 'music-providers/tidal' },
						{ label: 'TuneIn', slug: 'music-providers/tunein' },
						{ label: 'YouTube Music', slug: 'music-providers/youtube-music' },
					],
				},
				{
					label: 'Player Providers',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'player-support' },
						{ label: 'AirPlay', slug: 'player-support/airplay' },
						{ label: 'Alexa', slug: 'player-support/alexa' },
						{ label: 'Bluesound', slug: 'player-support/bluesound' },
						{ label: 'DLNA', slug: 'player-support/dlna' },
						{ label: 'Fully Kiosk', slug: 'player-support/fully-kiosk' },
						{ label: 'Google Cast', slug: 'player-support/google-cast' },
						{ label: 'Home Assistant', slug: 'player-support/ha' },
						{ label: 'MusicCast', slug: 'player-support/musiccast' },
						{ label: 'Roku Media Assistant', slug: 'player-support/roku' },
						{ label: 'Sendspin', slug: 'player-support/sendspin' },
						{ label: 'Snapcast', slug: 'player-support/snapcast' },
						{ label: 'Sonos', slug: 'player-support/sonos' },
						{ label: 'Squeezelite', slug: 'player-support/squeezelite' },
					],
				},
				{ label: 'Metadata Providers', slug: 'metadata' },
				{
					label: 'Plugins',
					collapsed: true,
					items: [
						{ label: 'AirPlay Receiver Plugin', slug: 'plugins/airplay-receiver' },
						{ label: 'Home Assistant Plugin', slug: 'ha-plugin' },
						{ label: 'LastFM Scrobbler', slug: 'plugins/lastfm_scrobble' },
						{ label: 'Listenbrainz Scrobbler', slug: 'plugins/listenbrainz_scrobble' },
						{ label: 'Plex Connect', slug: 'plugins/plex-connect' },
						{ label: 'Spotify Connect Plugin', slug: 'plugins/spotify-connect' },
						{ label: 'Subsonic Scrobbler', slug: 'plugins/subsonic_scrobble' },
						{ label: 'VBAN Receiver', slug: 'plugins/vban-receiver' },
					],
				},
				{ label: 'Desktop Companion App', slug: 'companion-app' },
				{ label: 'Mobile Devices', slug: 'mobile' },
				{ label: 'API', slug: 'api' },
				{ label: 'Community Extensions', slug: 'community-extensions' },
				{ label: 'Support', slug: 'support' },
				{
					label: 'I Want to Help / Donate',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'help' },
						{ label: 'Translations', slug: 'help/lokalise' },
					],
				},
				{ label: 'Release Cycle', slug: 'release' },
				{ label: 'Blog', link: '/blog/' },
			],
			components: {
				Head: './src/components/Head.astro',
				PageTitle: './src/components/PageTitle.astro',
				Footer: './src/components/Footer.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			}
		}),
	],
});
