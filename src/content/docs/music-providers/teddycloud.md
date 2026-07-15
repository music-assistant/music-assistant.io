---
title: "TeddyCloud"
---

<img src="/assets/icons/teddycloud-icon.svg" alt="Preview image" style="width: 70px; float: right;" loading="lazy" />

Music Assistant has support for [TeddyCloud](https://github.com/toniebox-reverse-engineering/teddycloud),
the self-hosted, open-source server behind the Toniebox family of children's audio
players. Each Tonie in your TeddyCloud library appears in Music Assistant as an audiobook,
complete with chapters, that you can play to any of your players.

TeddyCloud runs on your own hardware and holds your own content, so this provider streams
strictly from a source you control.

## Features

| | |
|-|-|
| Subscription FREE | Yes |
| Self-Hosted Local Media | Yes |
| Media Types Supported | Audiobooks |
| Recommendations Supported | No |
| Lyrics Supported | No |
| Radio Mode | No |
| Maximum Stream Quality | Original (Opus, not re-encoded) |
| Login Method | None |

## Configuration

Add the provider from **Settings -> Providers -> Add Provider -> TeddyCloud** and fill in
the following:

- **Server** — the base URL of your TeddyCloud server, for example `http://teddycloud.local`
  or `http://192.168.1.50`. Include the port if it is not on 80, e.g.
  `http://192.168.1.50:8080`.

> [!NOTE]
> This initial version targets a plain-HTTP TeddyCloud on your local network without
> authentication. Support for HTTP basic auth and HTTPS is planned for a later release.

After saving, Music Assistant connects to TeddyCloud and syncs your Tonies into the library
as audiobooks.

## Notes

- Each Tonie is exposed as an audiobook: the series becomes the author, the episode the
  title, with cover artwork where TeddyCloud provides it.
- Chapters are derived from the Tonie's track marks and story names, so you can skip
  between stories and seek within them.
- Audio is streamed on demand directly from TeddyCloud as OGG/Opus with no re-encoding;
  nothing is copied into Music Assistant.
- Your Tonies are synced into the Music Assistant library, so they are searchable and
  browsable alongside the rest of your content.
- The provider supports multiple instances, so you can add more than one TeddyCloud server.
- Tonies configured to stream from an external live source are skipped, as there is no
  stored file to serve.
