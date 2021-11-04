# Component To-dos

## Cache API response in getAlbumInfo

### (Followed guide, isn't working so scrapping)

- [x] Setup cache storage
- [x] Retrieve from cache if it's there
- [x] If not in cache, retrieve from api and store in cache
- Use [this](https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/) example guide

### Make use of useContext hook

- [] API call once at initial render of page
- [] Cache the data of the call
- [] useContext to get the data when rendering album + songs

## Remake isMobile window resize into separate custom hook

- Currently it's a useEffect in StudioAlbums

## CSS styling

- [x] Nav buttons
- [x] Header
- [x] Footer
- [x] Homepage content

## Add more homepage content

- [x] Image of the band

## Fix Album story

- Album component was restructured to get image and songs from api, reflect this in the stories setup

## Add component stories

- [] Songs
- [] Header
- [] Footer

## Add testing

- [] Albums
- [] Band
- [] Songs
- [] Footer
- [] Header

## Add user control form (stretch goal)

- Perhaps let user search/select a song and get lyrics for the song
