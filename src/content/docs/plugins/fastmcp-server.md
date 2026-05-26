---
title: FastMCP Server Plugin
description: Features and Notes for the FastMCP Server Plugin
---

# FastMCP Server <img src="/assets/icons/fastmcp-server-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has the ability to expose its library, queue, playback and player controls as a <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">Model Context Protocol (MCP)</a> server, so AI assistants like Claude, ChatGPT, Cursor and Codex can search your library, control playback and manage queues on your behalf using natural language.

> [!NOTE]
> This plugin is still in an early stage of development. Bugs may occur.

## Features

- Any MCP-aware AI client can connect to your Music Assistant library through a single URL
- One-click Connect Wizard with ready-to-paste configuration for Claude Desktop, Claude Code, Cursor, Windsurf, VSCode, ChatGPT Connectors, Codex CLI, Gemini CLI, Cline and Zed
- Each connected client gets its own access token, revocable individually under Profile → Long-lived access tokens
- Nineteen fine-grained permission toggles let you decide what each connected AI client may do — browse the library, control playback, manage queues, edit playlists, remove favourites, and choose which URI-addressable resources the client can see
- Optional confirmation prompt before destructive actions like clearing a queue or removing a track from the library
- Reuses the Music Assistant webserver — no extra port to open, works behind reverse proxies and Home Assistant ingress out of the box
- Permission changes take effect immediately without restarting Music Assistant

## Configuration

The plugin is single-instance. Add it to Music Assistant by navigating to the MA Settings then selecting Plugins and then clicking on ADD A PLUGIN.

### Connecting an AI client

Once the plugin has been added, the Connect Wizard becomes available from the plugin's configuration panel. To connect a new client:

1. Open the plugin settings and click **Open Connect Wizard**.
2. Pick your AI client from the list.
3. The wizard mints a long-lived token, names it after the client (for example `MCP — Claude Desktop`), and shows a ready-to-paste configuration snippet.
4. Paste the snippet into your client's MCP configuration, or — for Cursor — click the **Add to Cursor** deep-link.

Regenerating the snippet for a client revokes the previous token for that same client, so stale credentials are never left behind.

### Settings

- <b>Require authentication.</b> Reject MCP clients that do not present a valid Music Assistant token. Strongly recommended to leave enabled.
- <b>Confirm destructive operations.</b> Ask the client to confirm before clearing a queue, removing a library item or deleting a playlist. Falls through to the matching permission toggle on clients that do not yet support confirmation prompts.
- <b>Permissions.</b> Nineteen toggles in total — sixteen action toggles split across Query Permissions, Control Permissions, Edit Permissions and Delete Permissions, plus three MCP Resources toggles that control which library, player/queue and prompt resources are advertised to clients. The defaults enable read-only access only; every action that mutates state is off by default.

In the ADVANCED section:

- <b>Mount path.</b> The URL path the MCP server is mounted under on the Music Assistant webserver. Default `/mcp/v1`. Change only if it conflicts with another route.
- <b>Enforce token audience (RFC 8707).</b> Rejects tokens that are not bound to this MCP server's URL. Leave off until Music Assistant issues audience-bound tokens by default.
- <b>Additional allowed Origins (CSV).</b> Comma-separated list of additional Origin headers to accept, on top of the Music Assistant hosts that are auto-detected.
- <b>Connect Wizard external URL (fallback).</b> Explicit base URL the Connect Wizard should use in the generated snippets. Only needed when the wizard cannot detect the public URL from the active client's request headers.

## Known Issues / Notes

- The plugin is experimental and the Model Context Protocol itself is still evolving, so behaviour may change between Music Assistant releases.
- AI clients vary in how strictly they implement MCP. Clients that do not support confirmation prompts will instead be gated entirely by the relevant permission toggle.
- All write permissions are disabled by default. Enable only the actions you want each connected AI client to be able to perform.
- Tokens minted by the Connect Wizard are long-lived. Revoke any client you no longer trust from Profile → Long-lived access tokens.
