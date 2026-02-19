# music-assistant.io

Documentation site for Music Assistant built with Astro Starlight.

**🔗 Live Site**: https://music-assistant.io

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
│   └── assets/            # Logo files
├── public/
│   ├── assets/            # Static images
│   ├── videos/            # Video files
│   ├── callback/          # OAuth callback endpoint
│   └── cast-receiver/     # Google Cast receiver
├── astro.config.mjs       # Astro configuration
└── dist/                  # Build output
```

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