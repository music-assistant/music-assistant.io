---
title: Profiler Plugin
description: Features and Notes for the Profiler Plugin
---

# Profiler <img src="/assets/icons/profiler-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The Profiler plugin records what the Music Assistant server is actually doing — processor usage, memory, and delays inside the server itself — and turns it into a single report you can attach to a bug report. It is meant for diagnosing performance complaints such as high CPU usage, memory that keeps growing, or audio that drops out, and it does this from the Music Assistant interface, with no need for shell access to the machine running the server.

> [!WARNING]
> This plugin is intended to be installed temporarily, usually because a maintainer has asked you to in a support request. Uninstall it once you have your report — it is not meant for day-to-day use. Available from Music Assistant 2.10.

## Features

- A flight recorder samples server health every 10 seconds and keeps 24 hours of history, so a report can explain something that happened hours ago
- Monitors delays inside the server, the usual cause of audio dropouts and a sluggish interface
- Captures processor profiles automatically at an interval, or on demand with the **Profile now** button while you reproduce the problem
- Optional memory allocation tracking for hunting a memory leak
- Produces one self-contained report, as JSON or as markdown ready to paste into an issue
- Reports contain only code locations, counters and measurements — no media titles, file paths, URLs or account names — so they are safe to post publicly

## Creating a report

1. Add the plugin via **Settings → Plugins → Add a plugin**. Measurements start immediately.
2. Reproduce the problem, or simply leave the plugin running if the issue appears at random. If you can reproduce it on demand, press **Profile now** in the plugin settings just before you do, so a CPU profile window covers it.
3. Generate the report with the `profiler/report` API command. Pass `markdown=true` to get a version ready to paste into an issue.
4. Attach the report to your GitHub issue or support request.
5. Uninstall the plugin.

Every report is also written to the `profiler` folder inside the server data directory as `report.json` and `report.md`, so you can collect it from there instead.

## Settings

The plugin is single-instance and works out of the box; the defaults suit most cases.

- <b>Periodic CPU profiling.</b> Automatically captures a CPU profile window at a regular interval. On by default. The server runs slightly slower while a window is being captured
- <b>CPU profile window duration (seconds).</b> How long each window records before its results are processed
- <b>CPU profile interval (minutes).</b> How often a new window is captured automatically
- <b>Track memory allocations (tracemalloc).</b> Traces where memory is allocated, so the report can show the top allocation sites and how they grow between two reports. Off by default: it roughly doubles memory-tracking overhead and slows the server while enabled, so turn it on only when hunting a memory leak
- <b>Profile now.</b> Captures a profile window on demand, for example while you are reproducing an issue. The result appears in the next report

When it is not capturing a profile, the plugin's overhead is negligible.

> [!WARNING]
> The `profiler/report` command accepts an `include_object_census=true` option, which adds a count of everything the server is holding in memory. It can freeze the server for several seconds on a large library, so use it only when asked to.
