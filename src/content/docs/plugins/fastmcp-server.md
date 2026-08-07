---
title: FastMCP Server Plugin
description: Features and Notes for the FastMCP Server Plugin
---

# FastMCP Server <img src="/assets/icons/fastmcp-server-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

Music Assistant has the ability to expose its library, queue, playback and player controls as a <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">Model Context Protocol (MCP)</a> server, so AI assistants and agent frameworks like Claude, ChatGPT, Cursor, Codex, OpenClaw and Hermes can search your library, control playback and manage queues on your behalf using natural language.

> [!NOTE]
> This plugin is still in an early stage of development. Bugs may occur.

## Features

- Any MCP-aware AI client can connect to your Music Assistant library through a single URL
- One-click Connect Wizard with ready-to-paste configuration for Claude Desktop, Claude Code, Cursor, Windsurf, VSCode, ChatGPT Connectors, Codex CLI, Gemini CLI, Cline, Zed, OpenClaw and Hermes
- Each connected client gets its own access token, revocable individually under Profile → Long-lived access tokens
- Detailed permission toggles let you decide what each connected AI client may do — browse the library, control playback, manage queues, edit playlists, remove favourites, and how much of your library it can see at all
- Two optional, off-by-default capability namespaces for power users: a **debug** namespace (introspection for troubleshooting) and a **config** namespace (view and edit Music Assistant settings over MCP)
- Optional confirmation prompt before destructive actions like clearing a queue or removing a track from the library
- Reuses the Music Assistant webserver — no extra port to open, works behind reverse proxies and Home Assistant ingress out of the box
- Permission changes take effect immediately without restarting Music Assistant

## Configuration

Add the plugin via `SETTINGS >> PLUGINS >> ADD A PLUGIN`. You only ever need one copy of it, however many AI clients you connect.

### Connecting an AI client

Once the plugin has been added, the Connect Wizard becomes available from the plugin's configuration panel. To connect a new client:

1. Open the plugin settings and click **Open Connect Wizard**.
2. Pick your AI client from the list.
3. The wizard creates an access token, names it after the client (for example `MCP — Claude Desktop`), and shows you a block of configuration ready to copy.
4. Paste it into your client's MCP configuration, or for Cursor click the **Add to Cursor** link.

Generating the block again for the same client cancels its previous token, so old credentials are never left lying around.

For OpenClaw and Hermes the wizard gives you the form each of those expects — an `openclaw mcp set …` command and a `~/.hermes/config.yaml` block. Both connect the same way as everything else.

### Settings

- <b>Require authentication.</b> Reject MCP clients that do not present a valid Music Assistant token. Strongly recommended to leave enabled.
- <b>Confirm destructive operations.</b> Ask the client to confirm before clearing a queue, removing a library item or deleting a playlist. Falls through to the matching permission toggle on clients that do not yet support confirmation prompts.
- <b>Permissions.</b> The defaults enable read-only library and resource access only; every action that mutates state, and every Debug and Config capability, is off by default, so enable only what you need. There are twenty-nine toggles in total - sixteen action toggles split across Query Permissions, Control Permissions, Edit Permissions and Delete Permissions; three MCP Resources toggles that control which library, player/queue and prompt resources are advertised to clients; five Debug toggles; and five Config toggles.

#### Optional capability namespaces (advanced)

Both namespaces ship entirely off by default — a standard installation exposes no debug or config tools at all. Enable a toggle only for the capability you need, and prefer leaving them off in production.

- <b>Debug.</b> Five toggles (`Debug: inspect`, `Debug: logs`, `Debug: events`, `Debug: providers`, `Debug: reload`) let a client help you troubleshoot a running Music Assistant: the current state of your players, queues and providers, the end of the log file with passwords and the like blanked out, a list of what has happened recently, a summary of provider health, and — switched on separately — restarting a provider. How much recent activity is kept can be set in the ADVANCED section.
- <b>Config.</b> Five toggles (`Config: read settings`, `Config: edit provider settings`, `Config: edit core settings`, `Config: edit player settings`, and `Config: allow writing secret values`) let a client look at and change your Music Assistant settings. Passwords and tokens are hidden when read, and changing one needs the separate secret toggle switched on as well as the toggle for that group of settings. Changes go through the same checks as if you had made them yourself, and are undone if anything goes wrong.

In the ADVANCED section:

- <b>Mount path.</b> The URL path the MCP server is mounted under on the Music Assistant webserver. Default `/mcp/v1`. Change only if it conflicts with another route.
- <b>Enforce token audience (RFC 8707).</b> Rejects tokens that are not bound to this MCP server's URL. Leave off until Music Assistant issues audience-bound tokens by default.
- <b>Additional allowed Origins (CSV).</b> Comma-separated list of additional Origin headers to accept, on top of the Music Assistant hosts that are auto-detected.
- <b>Connect Wizard external URL (fallback).</b> Explicit base URL the Connect Wizard should use in the generated snippets. Only needed when the wizard cannot detect the public URL from the active client's request headers.
- <b>Debug: event buffer capacity.</b> How many recent events to keep when `Debug: events` is on. Once the limit is reached the oldest are discarded. Has no effect when events are off.

## Known Issues / Notes

- The plugin is experimental and the Model Context Protocol itself is still evolving, so behaviour may change between Music Assistant releases.
- AI clients vary in how strictly they implement MCP. Clients that do not support confirmation prompts will instead be gated entirely by the relevant permission toggle.
- All write permissions are disabled by default, as are the Debug and Config namespaces. Enable only the actions you want each connected AI client to be able to perform.
- Tokens minted by the Connect Wizard are long-lived. Revoke any client you no longer trust from Profile → Long-lived access tokens.
