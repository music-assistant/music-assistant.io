# Music Providers
<figure markdown>
  ![Logo Banner](../assets/music-provider-logos.png)
</figure>

For specific music provider information refer to the relevant section.

General Notes:

- You have to add providers in order to access your music even if the media is visible to HA.
- If you remove a provider a cleanup of the database will be done but it takes a little time to complete. If you still see entries from a deleted provider after some time, then try a MA restart to retrigger the cleanup process.
- Music providers are added by navigating to MA Settings and then clicking on ADD MUSIC PROVIDER at the top of the page

!!! tip "Note" 
    If a problem occurs the automatic linking process may need to be initiated again. If what appears to be identical albums or tracks are seen then navigate to the album or track and using the ⋮ menu in the banner at the top of the view select "Refresh Item". This will trigger the linking process and should result in the same albums and tracks being collapsed together. Submit an issue report if this is required so that it can be investigated.

![image](../assets/screenshots/add-music-provider.png)

## Music provider overview
Not all music providers have been compared. Please refer to the relevant provider's page.
| Provider      | Artists | Albums  | Tracks | Playlists | Radio | Max quality                |
| ------------- | ------- | ------- | ------ | --------- | ----- | -------------------------- |
| Apple music   | Yes     | Yes     | Yes    | Yes       | Yes   | Lossless (24-bit/192 kHz)  |
| Spotify       | Yes     | Yes     | Yes    | Yes       | Yes   | Lossy (320kbps)            |
| Tidal         | Yes     | Yes     | Yes    | Yes       | Yes   | Lossless (24-bit/192kHz)   |
| Qobuz         | Yes     | Yes     | Yes    | Yes       | No    | Lossless (24-bit/192kHz)   |
| Youtube Music | Yes     | Sort of | Yes    | Yes       | Yes   | Lossy (256kbps)            |
| Deezer        | Yes     | Yes     | Yes    | Yes       | Yes   | Lossless (16-Bit/44.1 kHz) |