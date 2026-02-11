# music-assistant.io

Documentation site for Music Assistant built with Astro Starlight.

**🔗 Live Site**: https://music-assistant.io

**📖 Documentation**: 94+ pages covering installation, configuration, music providers, player support, and more.

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

## Migration Notes

This site was migrated from MkDocs to Astro Starlight in February 2026. See [MIGRATION_REPORT.md](MIGRATION_REPORT.md) for full details.

## Beta Documentation

NOTE that we use a [dedicated fork/repo](https://github.com/music-assistant/beta.music-assistant.io) for the beta docs. This contains changes (new features) specific to the MA beta. All the changes made to the beta docs repo will get upstreamed here as soon as the stable release is published.

---

[![A project from the Open Home Foundation](https://www.openhomefoundation.org/badges/ohf-project.png)](https://www.openhomefoundation.org/)