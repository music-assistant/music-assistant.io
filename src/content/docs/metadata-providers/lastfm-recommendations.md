  Last.fm Recommendations
                                                                                                                                     
  Adds recommendation rows to the Music Assistant home screen, powered by Last.fm's API. The rows surface music you don't currently
  have and try to resolve each item to a streaming provider you already have configured (e.g. Spotify) so it's playable with one     
  click.
                                                                                                                                     
  What it provides                                          

  The provider can show up to nine rows, grouped into four toggles you can enable independently:                                     
   
  - Personalized — Discover Similar Artists + Discover Similar Tracks, seeded from your top-played artists and tracks in Music       
  Assistant.                                                
  - Global Charts — Global Top Artists + Global Top Tracks from Last.fm's worldwide charts.                                          
  - Genre — Top Artists / Albums / Tracks for your most-played Last.fm genre (requires your Last.fm username).                       
  - Geographic — Top Artists + Top Tracks for a country you pick from the list.                                                      
                                                                                                                                     
  How each row is built                                                                                                              
                                                                                                                                     
  Each row holds up to 10 items. They're constructed slightly differently:                                                           
   
  Personalized (Similar Artists / Similar Tracks)                                                                                    
  Takes your 5 most-played artists (or tracks) as seeds, asks Last.fm for similar items for each seed, deduplicates the combined
  list, and sorts by Last.fm's own similarity match score. The top-scoring items are then resolved against your streaming providers. 
  The row is fully deterministic given your library state — two refreshes with the same play counts produce the same row. It only
  shifts when your listening habits change or Last.fm updates its similarity data.                                                   
                                                            
  Global Charts (Top Artists / Top Tracks)                                                                                           
  Takes Last.fm's worldwide chart in order, resolves the top 15, and shows the first 10 that match something on your streaming
  providers. No randomisation — the order is exactly Last.fm's chart ranking. The row changes when Last.fm's chart itself moves      
  (typically a few shifts per day).                         
                                                                                                                                     
  Genre (Top Artists / Albums / Tracks)                     
  Fetches Last.fm's top 30 for your most-played genre, drops any already in your library, then picks items via "top 3 + random 7":
  the first three positions are fixed to Last.fm's top three, the remaining seven are a random sample from the rest of the 30. A     
  daily random seed drives the sample, so the picks are the same all day and rotate once per calendar day. This gives you a mix of
  consistently popular choices and fresh discovery that varies day to day.                                                           
                                                            
  Geographic (Top Artists / Top Tracks)
  Same as Global Charts, but using Last.fm's per-country chart. Top 15 in chart order, first 10 that resolve. No randomisation.
                                                                                                                                     
  Refresh and caching
                                                                                                                                     
  Recommendations are built in the background ~20 seconds after the provider loads, giving streaming providers time to come online.  
  Built rows are persisted for 24 hours so they survive restarts without re-hitting the APIs. A periodic refresh then runs on the
  schedule you set (default every 6 hours).                                                                                          
                                                            
  Separately:
  - Resolved items (Last.fm → streaming provider match) are cached for 90 days.
  - MusicBrainz MBID → ISRC mappings are cached for 90 days (these almost never change).                                             
  - Last.fm API responses are not cached — every refresh hits Last.fm live.             
                                                                                                                                     
  Use Clear Recommendation Cache (under Advanced in the settings) to wipe the built folders and resolved-item cache; the MBID → ISRC 
  cache is kept intentionally.                                                                                                       
                                                                                                                                     
  Choosing a refresh interval                                                                                                        
                                                            
  The default 6 hours is a reasonable middle ground. The right value depends on what you want:

  Short intervals (1–3 hours):                                                                                                       
  - Personalized rows respond to recent listening faster — tracks you played this morning can influence "Similar Artists" by the
  afternoon.                                                                                                                         
  - Global and Geographic rows reflect Last.fm's chart movements sooner.
  - Downside: rows shift while you're browsing. If a track caught your eye but you didn't play it, it may be gone next time. If you  
  like to work through a row at your own pace, a short interval fights you.
                                                                                                                                     
  Long intervals (12–24 hours):
  - Rows stay stable long enough to actually listen through them.                                                                    
  - Fewer API calls.                                             
  - Downside: Personalized and Global rows feel stale, especially if your listening has changed recently.
                                                                                                                                     
  What refresh interval does not affect:                                                                                             
  - Genre rows use a daily random seed, so they're identical all day regardless of how often you refresh. They rotate once per       
  calendar day.                                                                                                                      
  - Resolved items come from the 90-day cache, so most refreshes are cheap — just the Last.fm calls plus a handful of new
  resolutions.                                                                                                                       
                                                                                                                                     
  Setting 0 disables automatic refresh entirely; rows are only rebuilt on restart (after the 24-hour folder cache expires) or when
  you manually clear the cache.                                                                                                      
                                                            
  Things to know / limitations                                                                                                       
                                                            
  - Personalized rows need listening history in Music Assistant — a fresh install with no plays will not produce them.               
  - Genre rows require your Last.fm username. Without it, the Genre toggle does nothing.
  - At least one streaming provider that exposes library/search (e.g. Spotify, Tidal, Apple Music) must be configured, otherwise     
  there's nothing to resolve items against and rows will be empty.                                                                   
  - Obscure artists/tracks may not be found on your streaming providers and are silently dropped from the row. If a row looks short, 
  this is usually why.                                                                                                               
  - Clearing the cache and immediately rebuilding will usually produce very similar results — not because cached data is being
  served, but because Last.fm's own responses for "similar to X" are stable.                                                         
                                                                                                                                     
  Configuration reference                                   
                                                                                                                                     
  - Last.fm API Key (required) — get one at https://www.last.fm/api/account/create                                                   
  - Last.fm Username — required only for the Genre toggle
  - Refresh Interval (hours) — 0 disables automatic refresh                                                                          
  - Country for Geographic Charts — used by the Geographic toggle                                                                    
  - Four enable toggles: Personalized, Global Charts, Genre, Geographic
  - Clear Recommendation Cache (Advanced) — wipe and rebuild  
