// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import mdx from "@astrojs/mdx";
import { remarkAlert } from "remark-github-blockquote-alert";
import { authors } from "./src/authors.mjs";

const isProduction =
  process.env.CONTEXT === "production" || !process.env.CONTEXT;

// https://astro.build/config
export default defineConfig({
  site: "https://www.music-assistant.io",
  image: {
    domains: ["assets.openhomefoundation.org", "www.openhomefoundation.org"],
  },
  markdown: {
    remarkPlugins: [remarkAlert],
  },
  integrations: [
    starlight({
      title: "Music Assistant",
      titleDelimiter: "-",
      editLink: isProduction
        ? {
            baseUrl:
              "https://github.com/music-assistant/music-assistant.io/edit/main/",
          }
        : {},
      logo: {
        light: "./src/assets/ma-logo--dark.svg",
        dark: "./src/assets/ma-logo--light.svg",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",
      pagination: false,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/music-assistant",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/kaVm8hGpne",
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: isProduction ? "index, follow" : "noindex, nofollow",
          },
        },
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Music Assistant",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Linux",
            description:
              "Music library manager for your offline and online music sources",
            url: "https://www.music-assistant.io",
            author: {
              "@type": "Organization",
              name: "Open Home Foundation",
              url: "https://www.openhomefoundation.org/",
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
      customCss: ["./src/styles/custom.css"],
      routeMiddleware: "./src/starlightRouteData.ts",
      plugins: [
        starlightBlog({
          title: "Blog",
          prefix: "blog",
          postCount: 10,
          recentPostCount: 5,
          authors,
        }),
      ],
      sidebar: [
        { label: "Home", slug: "index" },
        {
          label: "I Want To",
          items: [
            { label: "Install Music Assistant", slug: "installation" },
            { label: "Install the HA Integration", slug: "integration/installation" },
            { label: "Listen To...", slug: "faq/listen-to" },
            { label: "Stream To...", slug: "faq/stream-to" },
          ],
        },
        {
          label: "First Run and Settings",
          collapsed: true,
          items: [
            { label: "First Run (Authentication)", slug: "first-run" },
            {
              label: "Music Sources",
              slug: "settings/music-provider-settings",
            },
            { label: "Player Providers", slug: "settings/player-provider" },
            {
              label: "Metadata Providers",
              slug: "settings/metadata-provider-settings",
            },
            { label: "Players", slug: "settings/individual-player" },
            { label: "Profile", slug: "settings/profile" },
            { label: "User Interface", slug: "settings/user-interface" },
            { label: "User Management", slug: "settings/user-management" },
            { label: "Remote Access", slug: "settings/remote-access" },
            { label: "System Settings", slug: "settings/core" },
            { label: "About", slug: "settings/about" },
          ],
        },
        {
          label: "Home Assistant Integration",
          collapsed: true,
          items: [
            { label: "Overview", slug: "integration" },
            { label: "Installation", slug: "integration/installation" },
            { label: "Announcements", slug: "integration/announcements" },
            { label: "Play Media Action", slug: "faq/massplaymedia" },
            { label: "Play Announcement Action", slug: "faq/massannounce" },
            { label: "Search Action", slug: "faq/masssearch" },
            { label: "Get Library Action", slug: "faq/get_library" },
            { label: "Get Queue Action", slug: "faq/get_queue" },
            { label: "Transfer Queue Action", slug: "faq/masstransfer" },
            { label: "Voice Control", slug: "integration/voice" },
          ],
        },
        {
          label: "Music Sources",
          collapsed: true,
          autogenerate: { directory: "music-providers" },
        },
        {
          label: "Player Providers",
          collapsed: true,
          autogenerate: { directory: "player-support" },
        },
        {
          label: "Using Music Assistant",
          collapsed: true,
          items: [
            { label: "Overview", slug: "usage" },
            { label: "UI", slug: "ui" },
            { label: "Groups", slug: "faq/groups" },
            { label: "Genres", slug: "genres" },
          ],
        },
        {
          label: "Fine Tuning the Audio",
          collapsed: true,
          items: [
            { label: "Audio Pipeline", slug: "audiopipeline" },
            { label: "Digital Signal Processing", slug: "dsp" },
            { label: "DSP Compressor Filter", slug: "dsp/compressor" },
            { label: "DSP Convolution Filter", slug: "dsp/convolution" },
            { label: "DSP Parametric Equalizer", slug: "dsp/parametriceq" },
            { label: "DSP Tone Controls", slug: "dsp/tonecontrols" },
            { label: "DSP Transpose Filter", slug: "dsp/transpose" },
          ],
        },
        {
          label: "Enhancing Music Assistant",
          collapsed: true,
          items: [
            {
              label: "Plugins",
              collapsed: true,
              items: [
                { label: "Overview", slug: "plugins" },
                { label: 'AI Radio', slug: 'plugins/ai-radio' },
                { label: "AirPlay Receiver", slug: "plugins/airplay-receiver" },
                { label: "Ariacast Receiver", slug: "plugins/ariacast-receiver" },
                { label: "FastMCP Server", slug: "plugins/fastmcp-server" },
                { label: "Home Assistant", slug: "ha-plugin" },
                { label: "Hue Entertainment", slug: "plugins/hue-entertainment" },
                { label: "LastFM Scrobbler", slug: "plugins/lastfm_scrobble" },
                { label: "Library Automations", slug: "plugins/library_automations" },
                { label: "Library Recommendations", slug: "plugins/library-recommendations" },
                {
                  label: "Listenbrainz Scrobbler",
                  slug: "plugins/listenbrainz_scrobble",
                },
                {
                  label: "MilkDrop Visualizer",
                  slug: "plugins/milkdrop-visualizer",
                },
                { label: "Music Quiz", slug: "plugins/music-quiz" },
                {
                  label: "OpenAI Compatible",
                  slug: "plugins/openai_compatible",
                },
                { label: "Party", slug: "plugins/party" },
                { label: "Plex Connect", slug: "plugins/plex-connect" },
                { label: "Sendspin Source", slug: "plugins/sendspin-source" },
                { label: "Smart Playlist", slug: "plugins/smart_playlist" },
                { label: "Sonic Similarity", slug: "plugins/sonic-similarity" },
                { label: "Spotify Connect", slug: "plugins/spotify-connect" },
                { label: "Subsonic Scrobbler", slug: "plugins/subsonic_scrobble" },
                { label: "VBAN Receiver", slug: "plugins/vban-receiver" },
                {
                  label: "Yandex Music Connect (Ynison)",
                  slug: "plugins/yandex-ynison",
                },
                {
                  label: "Yandex Smart Home",
                  slug: "plugins/yandex-smarthome",
                },
              ],
            },
            {
              label: "Metadata Providers",
              collapsed: true,
              items: [
                { label: "Overview", slug: "metadata" },
                { label: "Artwork", slug: "metadata/artwork" },
                { label: "Lyrics", slug: "metadata/lyrics" },
                { label: "Media Items", slug: "metadata/media-items" },
                {
                  label: "LastFM Recommendations",
                  slug: "metadata-providers/lastfm-recommendations",
                },
                { label: "MusicBrainz", slug: "metadata-providers/musicbrainz" },
                {
                  label: "Playlist Metadata",
                  slug: "metadata-providers/playlist-metadata",
                },
              ],
            },
            {
              label: "Audio Analysis Providers",
              collapsed: true,
              items: [
                { label: "AcoustID Lookup", slug: "audio-analysis/acoustid" },
                {
                  label: "Loudness Analysis",
                  slug: "audio-analysis/loudness-analysis",
                },
                { label: "Smart Fades", slug: "audio-analysis/smart-fades" },
                { label: "Sonic Analysis", slug: "audio-analysis/sonic-analysis" },
              ],
            },
          ],
        },
        {
          label: "Apps",
          collapsed: true,
          items: [
            { label: "Desktop Companion App", slug: "companion-app" },
            { label: "Mobile Devices", slug: "mobile" },
          ],
        },
        {
          label: "Help",
          collapsed: true,
          items: [
            { label: "How Do I...", slug: "faq/how-to" },
            { label: "Troubleshooting", slug: "faq/troubleshooting" },
            { label: "Support", slug: "support" },
            { label: "Technical Info", slug: "faq/tech-info" },
            { label: "Networking Basics", slug: "faq/networking" },
            { label: "API", slug: "api" },
            { label: "Release Cycle", slug: "release" },
          ],
        },
        {
          label: "Community",
          collapsed: true,
          items: [
            { label: "I Want to Help / Donate", slug: "help" },
            { label: "Translations", slug: "help/lokalise" },
            {
              label: "Community Extensions",
              slug: "community-extensions",
            },
          ],
        },
        { label: "Blog", link: "/blog/" },
      ],
      components: {
        Head: "./src/components/Head.astro",
        PageTitle: "./src/components/PageTitle.astro",
        Footer: "./src/components/Footer.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
    }),
    mdx(),
  ],
});
