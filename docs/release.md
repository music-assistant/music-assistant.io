---
title: Release Cycle
description: Details of the release cycle for the stable and beta versions of the server
---

# Release Cycle

## Stable Releases

Stable releases will only be published every 1-3 months, depending upon the number of feature improvements. These stable releases will come after a beta cycle has been concluded and found stable enough to be promoted.

Patch releases may be pushed if there is a compelling need (e.g. an urgent bugfix)

## Beta Releases

Next to the standard stable channel we also have a beta channel, for which we publish a dedicated Home Assistant add-on (and docker image).
Once a new stable version has been published, a new beta cycle will start (with the minor version increased).
For example once stable version 2.3 is released, the beta for version 2.4 start.

Beta releases are planned to be released every 1 - 4 weeks, depending on the number of changes.
In some cases, when a large feature is in development for example, expect multiple beta releases per week.

### DEV Channel/Releases

There is also a dev/nightly add-on which can be run to get the absolute latest version but this comes with risk of intermittent problems during the development cycle. It is used by the MA Team to test new feature as they are being added.

## Running Parallel Server Versions

It is possible to run the stable, beta or dev server add-ons side by side as they don't share any data. Thus you can temporarily run the beta add-on to try out new features and then revert to the stable version. You can do this by manually stopping and starting the relevant server. Don't have two servers running on the same host at the same time.

!!! warning
    Be careful that you don't accidentally remove an add-on, because that will make you loose all your data (if you didnt back it up). The same applies to docker users: be careful with the data folder and be aware that the data folder is not backwards compatible. Don't try to use it between channels!
