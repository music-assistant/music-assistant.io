---
title: AcoustID Lookup
---

# AcoustID Lookup Provider  <img src="/assets/icons/acoustid-lookup-icon.svg" alt="Preview image" style="width: 70px; float: right;"  loading="lazy" />

The **AcoustID Lookup** provider identifies local and streaming provider audio files by their acoustic fingerprint and resolves the matching MusicBrainz recording. The identifiers it discovers unlock the existing metadata pipeline for tracks and albums whose metadata is incomplete or missing, so artwork, descriptions, and biographies can appear without the files having been carefully tagged in advance and cross provider matching will work more reliably.

It is an opt-in provider. The provider is shipped with a built-in API key or a free API key can be obtained from [acoustid.org](https://acoustid.org/my-applications).

## Who should enable it

This provider is intended for libraries containing audio files that lack a MusicBrainz Recording Id. For local files, this typically means tracks not yet tagged with [MusicBrainz Picard](https://picard.musicbrainz.org/) or an equivalent tool. For streaming providers, this typically means catalogues with limited metadata (for example, YouTube Music).

The largest visible improvement is for albums that currently show no cover art in Music Assistant because their tags do not include a MusicBrainz identifier. Once a release-group is identified, art and metadata are fetched automatically by the existing Cover Art Archive, fanart.tv, and TheAudioDB providers.

## What is identified

For each analysed track:

- **AcoustID** — A unique "fingerprint" created by analysing the actual sound waves
- **MusicBrainz Recording Id** — A unique identifier for the recording
- **ISRC(s)** — Stands for International Standard Recording Code, a unique 12-character alphanumeric code assigned by labels and distributors to identify specific sound recordings. Having one linked to a track improves matching against streaming providers that expose ISRC in their catalogue
- **MusicBrainz Artist Id(s)** — A unique identifier for an artist. These are only written to file tags (see the *Write tags back* setting)

For each analysed album, once enough of its tracks have been identified:

- **MusicBrainz Release Group Id** — A unique identifier for a group of album releases. This is identified from the analysed tracks on the album and cross-checked against the album name already in the tags. This is what unlocks artwork and album metadata, Release group will only be confirmed when at least half of the tracks in the library from the album have been analysed. This is to try and maximise the chance of idntifying the correct release group. For this reason, it is ideal if all of the tracks that are intended to be added to the library are added before tracks are played (and therefore analysed)

## When analysis runs

- During the nightly audio-analysis scan, around local midnight. Local audio files only
- During playback of an eligible track. Local files are always eligible; streaming-provider tracks are eligible when *Analyse tracks from streaming providers* is enabled and the track is in the MA library

Large libraries may take several nights to be fully analysed. Well tagged libraries see little or no activity because tracks will be skipped if they contain the MB Recording ID or ISRC. Streaming-provider tracks are picked up gradually as they are played, rather than in a batch. 

The stale number shown for this provider indicates the number of tracks that could not be found in the AcoustID database. These tracks will be re-analysed every 60 days.

## Limitations

- **Wrong identifications are difficult to reverse automatically.** Once a track's MusicBrainz Recording Id is set, AcoustID skips that file on future scans. Using Refresh Item may clear the stored Id from the library and allow a fresh lookup, but two things limit the recovery: the file's own tags reassert themselves on the next scan if *Write tags back* was on, and AcoustID's lookup is cached for 30 days so the same audio returns the same result inside that window. The most reliable correction is to fix the source file's tags directly (for example, by running MusicBrainz Picard against the album) and then rescan in Music Assistant
- **Release-group identification is a best-effort match.** The album name in the file tags must agree with one of the candidate release-group titles returned by AcoustID. When the album is untagged, abbreviated, or differs significantly from MusicBrainz's canonical form, no release-group is written and album-level metadata remains unenriched
- **Country and edition variants may not match exactly.** Multiple pressings of the same album (UK, US, Japan, anniversary editions, remasters) often share the same recordings and are acoustically indistinguishable. The artwork variant Music Assistant chooses may differ from the user's specific pressing, although the album name and tracks will still be correct
- **At least half of an album's tracks must be analysed before the release-group is set.** Single-track folders only ever receive track-level identification; their album row stays unenriched unless the album name agrees closely with the AcoustID candidate
- **Mis-identified tracks are possible.** Very short tracks, generic loops, and low-quality recordings can match the wrong recording. The minimum match score reduces but does not eliminate this risk

## Settings

- <b>AcoustID API key.</b> Only visible when the advanced toggle is on. The provider comes with a builtin API key but if rate limits are hit or for any other reason a personal API key is desired then obtain one free of charge from [acoustid.org/api-key](https://acoustid.org/api-key)
- <b>Minimum match score.</b> Confidence threshold below which a match is discarded. The default of 0.85 is a balance between identification rate and false-positive risk. Raising it reduces the chance of an incorrect match at the cost of leaving some tracks unidentified (Only visible when advanced toggle is on)
- <b>Analyse tracks from streaming providers.</b> When enabled, tracks played from streaming providers (Spotify, Tidal, Qobuz, YouTube Music, …) that are in the library and lack a MusicBrainz Recording Id are also fingerprinted and identified. Particularly useful for streaming providers like YouTube Music whose catalogues have thin metadata. Note that streaming-provider tracks are only analysed during playback, not in the nightly background scan
- <b>Write AcoustID/MusicBrainz tags back to files.</b> When enabled, the Acoustid Id, MusicBrainz Recording Id, ISRC, and (where resolvable) MusicBrainz Artist Id tags are written back into the source audio file once identification succeeds. Useful when other applications on the network read these tags for their own metadata or to save re-scans if the MA library database is wiped. Write access to the file is required; read-only files are skipped. By default this is off, and identifiers are only stored in the Music Assistant library database
