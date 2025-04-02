# Deezer Provider ![Preview image](../assets/icons/deezer-icon.svg){ width=70 align=right }

Music Assistant has support for [Deezer](https://www.deezer.com/). Contributed and maintained by [arctixdev](https://github.com/arctixdev) and [micha91](https://github.com/micha91) 

!!! tip "Note"
    - Because of Deezer's TOS only HiFi/Premium/Family accounts are supported
    - It is normal that syncing all the items from Deezer takes some time

## Features

|           |                     |
|:-----------------------|:---------------------:|
| Subscription FREE | No |
| Local Streaming   | No |
| Media Types Supported | Artists, Albums, Tracks, Playlists |
| [Recommendations](../ui.md#view-home) Supported | No |
| Lyrics Supported | No |
| [Radio Mode](../ui.md#track-menu) | Yes |
| Maximum Stream Quality | Lossless FLAC (44.1 kHz / 16 bit) |
| Login Method | OAuth + Cookie |

### Other

- Searching the Deezer catalogue
- Items in your Deezer Favourites will be imported into the MA Library and automatically marked as a "Favorite" in MA
- If you add an item from Deezer to the MA library then nothing will happen in Deezer unless you also mark it as a favourite (at which time the item will be added to the Deezer favourites)
- Artist, Album, Track and Playlist metadata is fully supported
- Playlist creation is possible as well as adding and removing tracks from existing playlists
- Logging of played tracks in Deezer

## Configuration

Authentication with Deezer happens through an Access and ARL Token. Unfortunately, Deezer does not officially support third party logins, so you will need to obtain your own ARL Token. Instructions were written for Chrome:

1. in the MA SETTINGS select ADD MUSIC PROVIDER and then DEEZER.
2. Launch the authentication process by pressing the `Authenticate` button
3. Login to Deezer on the popup window
4. After logging in the MA settings page will have the ACCESS TOKEN automatically populated but the ARL TOKEN now needs to be manually obtained
5. Navigate in another browser tab to [https://deezer.com/](https://deezer.com/)
6. Right click on the browser window and select INSPECT. A new window will open
7. Click the 'Application' tab. You might need to expand your window or click the `>>` button
8. Under Storage > Cookies, click "https://www.deezer.com" and find the entry labelled "arl"
  [![Preview image](../assets/screenshots/deezer-arl.png)](../assets/screenshots/deezer-arl.png)
9. Copy the cookie value and use this in Music Assistant as the 'ARL TOKEN'

**If this does not work ensure that you:**

- Are on the same network as Music Assistant
- Can access Music Assistant using its IP address
- Have a Hifi/Premium/Family account
- Are on the latest Music Assistant version
- Try different browsers

## Not yet supported
- Podcasts
- Fully featured recommendation/flow

Big thanks to [Deezer-python](https://GitHub.com/browniebroke/deezer-python) made by [browniebroke](https://github.com/browniebloke). Without it, this would have taken alot longer to make.
