  Last.fm Recommendations
                                                                                                                                     
  Adds recommendation rows to the Music Assistant home screen, powered by Last.fm's API. The rows surface music you don't currently
  have and try to resolve each item to a streaming provider you already have configured (e.g. Spotify) so it's playable with one     
  click.
                                                                                                                                     
  What it provides                                                                                                                   
   
  The provider can show up to nine rows, grouped into four toggles you can enable independently in its settings:                     
                                                            
  - Personalized — Discover Similar Artists + Discover Similar Tracks, seeded from your top-played artists and tracks in Music       
  Assistant.                                                
  - Global Charts — Global Top Artists + Global Top Tracks from Last.fm's worldwide charts.                                          
  - Genre — Top Artists / Albums / Tracks for your most-played Last.fm genre (requires your Last.fm username in the config).         
  - Geographic — Top Artists + Top Tracks for a country you pick from the list.                                                      
                                                                                                                                     
  How it works                                                                                                                       
                                                                                                                                     
  1. Last.fm suggests artists/albums/tracks (with MusicBrainz IDs where available).                                                  
  2. Items already in your local library are filtered out of the Genre rows (so they only surface new discoveries).
  3. For each remaining item, the provider searches your configured streaming providers (Spotify, etc.) to find a match. For tracks, 
  it looks up ISRC codes via MusicBrainz to improve match accuracy.                                                                  
  4. Matched items are grouped into folders and shown as rows on the Home screen.                                                    
                                                                                                                                     
  Refresh and caching                                                                                                                
                                                                                                                                     
  - Recommendations are built in the background ~20 seconds after the provider loads, to give streaming providers time to come       
  online.                                                   
  - The built rows are persisted for 24 hours so they survive restarts without re-hitting the APIs.                                  
  - A periodic refresh runs on the schedule you set (default every 6 hours).                                                         
  - Resolved items (Last.fm → streaming provider match) are cached for 90 days.                                                      
  - MusicBrainz MBID → ISRC mappings are cached for 90 days (these almost never change).                                             
  - Use Clear Recommendation Cache (under Advanced in the settings) to wipe the built folders and resolved-item cache; the MBID →    
  ISRC cache is kept.                                                                                                                
                                                                                                                                     
  Things to know / limitations                                                                                                       
                                                            
  - Genre and Geographic rows rotate once per day, not per refresh. Setting the refresh interval below 24 hours speeds up updates to 
  Personalized and Global rows, but Genre/Geo rows only change overnight (to keep the UI stable within a day).
  - Genre rows require your Last.fm username to be configured. Without it the Genre toggle does nothing.                             
  - Personalized rows need listening history in Music Assistant — a fresh install with no plays will not produce them.               
  - At least one streaming provider that exposes library/search (e.g. Spotify, Tidal, Apple Music) must be configured, otherwise     
  there's nothing to resolve items against and rows will be empty.                                                                   
  - Obscure artists/tracks may not be found on your streaming providers and are silently dropped from the row. If a row looks short, 
  this is usually why.                                                                                                               
  - Last.fm API calls are not cached by this provider — every refresh hits Last.fm live. Rate limited to 5 requests/second.
  - Clearing the cache and immediately rebuilding will usually produce very similar results, because Last.fm's own responses for     
  "similar to X" are stable, not because cached data is being served.                                                                
                                                                                                                                     
  Configuration reference                                                                                                            
                                                            
  - Last.fm API Key (required) — get one at https://www.last.fm/api/account/create                                                   
  - Last.fm Username — required only for the Genre toggle
  - Refresh Interval (hours) — 0 disables automatic refresh                                                                          
  - Country for Geographic Charts — used by the Geographic toggle                                                                    
  - Four toggles (Personalized / Global Charts / Genre / Geographic) to enable the corresponding row groups                          
  - Clear Recommendation Cache (Advanced) — wipe and rebuild  
