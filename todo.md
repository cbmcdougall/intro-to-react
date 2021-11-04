# To-do list

## Cache API response in getAlbumInfo

### Make use of useContext hook

- [] API call once at initial render of page
- [] Cache the data of the call
- [] useContext to get the data when rendering album + songs

#### In App.jsx

- [] import useFetch custom hook, AlbumData context
- [] set albumData state to result of useFetch calls
- [] wrap `<Switch>` in `<AlbumData.Provider value={albumData}>`

#### In Albums

- [] import AlbumData context
- [] useContext to get album info for renderAlbums

#### In Album

- [] receive album info in props
  - might fix story?

#### albumData format

```json
    albumData = {
        "album title": {
            year: 2021,
            imageUrl: "image Url from api result",
            songs: ["array of songs from api result"]
        },
        ...
    }
```

----

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

## Add user control form (stretch goal)

- Perhaps let user search/select a song and get lyrics for the song
