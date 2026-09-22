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

The homepage and `/get-started/` use `MarketingLayout.astro` and
`src/styles/marketing.css`. Their shared navigation, footer, and blog cards live
in `src/components/marketing/`; interactive controls live in
`src/scripts/marketing.ts`. The documentation overview is at `/documentation/`,
and all other documentation URLs remain unchanged.

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
