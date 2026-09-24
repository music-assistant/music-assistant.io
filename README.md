# music-assistant.io

Documentation site for Music Assistant built with Astro Starlight.

**🔗 Live Site**: https://music-assistant.io

**🔗 Beta Site**: https://beta.music-assistant.io

## Contributing

Opening a pull request? See **[CONTRIBUTING.md](CONTRIBUTING.md)** first. Documentation pull
requests go to the `beta` branch, and adding a music source or player provider takes a few steps
beyond writing the page.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

- **Framework**: [Astro](https://astro.build/) with [Starlight](https://starlight.astro.build/)
- **Node Version**: 22+
- **Dev Server**: http://localhost:4321

## Project Structure

```
/
├── src/
│   ├── content/docs/      # Markdown documentation files
│   ├── styles/            # Custom CSS (branding)
│   ├── components/        # Custom Astro components
│   ├── pages/             # Homepage, getting started, and blog routes
│   ├── layouts/           # Shared marketing page layout
│   └── assets/            # Logo files
├── public/
│   ├── assets/            # Static images
│   ├── videos/            # Video files
│   ├── callback/          # OAuth callback endpoint
│   └── cast-receiver/     # Google Cast receiver
├── astro.config.mjs       # Astro configuration
└── dist/                  # Build output
```

The homepage, `/get-started/` and the blog use `MarketingLayout.astro`. The
look is minimal and dark-first in the Open Home Foundation family (near-black,
off-white and the logo blue as the one accent), with a music-scene feel from
condensed poster type (Barlow Condensed), mono track captions (IBM Plex Mono)
and a little print grain. Light mode follows the system setting or the header
toggle. `src/styles/marketing.css` holds the tokens and base styles; sections
pick a tone (`base`, `alt` or `inverse`) with `Section.astro`, and every
component carries its own scoped styles. Screenshots come in dark and light
pairs and switch with the theme.

- `src/components/home/`: one component per homepage section
- `src/components/get-started/`: the installation stepper
- `src/components/marketing/`: header, footer and blog card
- `src/components/marketing/ui/`: small building blocks (`Section`, `Button`,
  `Icon` for lucide icons, `AppWindow` for screenshots, `SectionHeading`,
  `CodeBlock`, …)
- `src/data/marketing.ts`: the lists of sources, speakers, plugins and people
  shown on the homepage
- `src/scripts/marketing.ts`: menu, scroll reveal, install tabs and copy buttons

The documentation overview is at `/documentation/`, and all other documentation
URLs remain unchanged.

The blog pages render the existing `src/content/docs/blog/` collection at its
original URLs. Starlight Blog still provides RSS, tag/author pages, and crosspost
redirects. The release badge uses the same build-time release data as the docs.

## Contributing

1. Edit markdown files in `src/content/docs/`
2. Add YAML frontmatter with a `title` field
3. Use [Starlight syntax](https://starlight.astro.build/guides/authoring-content/) for special elements
4. Reference images with absolute paths: `/assets/image.png`
5. Internal links use extensionless format: `/installation` (not `/installation.md`)

## Beta Documentation

Beta can be worked on from the `beta` branch of the repo and preview on [beta.music-assistant.io](https://beta.music-assistant.io).

---

[![A project from the Open Home Foundation](https://www.openhomefoundation.org/badges/ohf-project.png)](https://www.openhomefoundation.org/)
