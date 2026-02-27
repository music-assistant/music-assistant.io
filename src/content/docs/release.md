---
title: Release Cycle
description: Details of the release cycle for the stable and beta versions of the server
---

# Release Cycle <img src="/assets/icons/release-cycle-icon.png" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

## Stable Releases

Stable releases will only be published every 1-3 months, depending upon the number of feature improvements. These stable releases will come after a beta cycle has been concluded and found stable enough to be promoted.

Patch releases may be pushed if there is a compelling need (e.g. an urgent bugfix)

## Beta Releases

In addition to the stable channel there is also a beta channel, for which there is a dedicated Home Assistant App (and docker image).
Once a new stable version has been published, a new beta cycle will start (with the minor version increased).
For example, once stable version 2.3 is released, the beta for version 2.4 starts.

Beta releases are planned to be released every 1 - 4 weeks, depending on the number of changes.
In some cases, when a large feature is in development for example, expect multiple beta releases per week.

### Nightly Releases

Each night, if there are at least two PRs merged, an automated Nightly Release will be built. Install this version if you want to keep up with the latest bleeding edge development of Music Assistant! Use it at your own risk, it might not be recommended for daily/production use because it can be unstable.

### DEV Channel

This is a special development App for Music Assistant that allows developers to quickly test specific branches, pull requests, or even forks of Music Assistant directly in Home Assistant.

## Running Parallel Server Versions

It is possible to run the stable, beta, nightly or dev server Apps side by side as they don't share any data. Thus, for example, you can temporarily run the beta Apps to try out new features and then revert to the stable version. You can do this by manually stopping and starting the relevant server. Don't have two servers running on the same host at the same time.

> [!CAUTION]
> Be careful that you don't accidentally remove an App, because that will result in the loss of all your data (if you didn't back it up). The same applies to docker users: be careful with the data folder and be aware that the data folder is not backwards compatible. Don't try to use it between channels!
