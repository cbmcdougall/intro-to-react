# To-do list

## Cache API response in getAlbumInfo

- [] Implement redux to have a store of album data
- [] Make action creater for fetching data and dispatching to store
- [] fetch data on initial render of App
- [] Albums component retrieves album data from store to pass to Album component
- [] Reconfigure Album component back to general "retrieve album data and render"
  - Similar to how story is set up, just with imageUrl

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

## Done

----

## Fix album image sizes

- [x] define set width/height
- [x] adjust css styling to display desired sizes

### (Followed guide, isn't working so scrapping)

- [x] Setup cache storage
- [x] Retrieve from cache if it's there
- [x] If not in cache, retrieve from api and store in cache
- Use [this](https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/) example guide

## Remake isMobile window resize into separate custom hook

- [x] Done

## CSS styling

- [x] Nav buttons
- [x] Header
- [x] Footer
- [x] Homepage content

## Add more homepage content

- [x] Image of the band

## Stretch goals / potential features

----

### Show only favourited albums

- Can maybe use redux store to store favourited albums
- Button on page navigates to page that renders albums from the store

### Add user control form (stretch goal)

- Perhaps let user search/select a song and get lyrics for the song
