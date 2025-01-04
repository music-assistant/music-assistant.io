---
title: Release Cycle
description: Details of the release cycle for the stable and beta versions of the server 
---

# Release Cycle

## Stable Releases

Stable releases will only be published every 1-3 months, depending upon the number of feature improvements. These stable releases will come after a beta cycle has been promoted to "Release Candidate" and the development team all agree its stable enough to be promoted.

Patch releases may be pushed if there is a compelling need (e.g. an urgent bugfix)

## Beta Releases

Beta releases are planned to be released every 1 - 4 weeks, depending on the number of changes.

Once 2.0 is released, the beta for version 2.1 will be available. It is possible to remain on the beta channel.

There is also a dev/nightly add-on which can be run to get the absolute latest version but this comes with risk of intermittent problems during the development cycle.

!!! warning
    This next section is for ADVANCED users. If you make a mistake you will have to remove all versions of the addon and start again. Be WARNED!

### Running Parallel Server Versions

It is possible to run the stable, beta or dev server add-ons side by side as they don't share any data. Thus you can temporarily run the beta add-on to try out new features and then revert to the stable version. You can do this by manually stopping and starting the relevant server. Don't have two servers running on the same host at the same time.
