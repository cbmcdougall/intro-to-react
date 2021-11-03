import React, { useState, useEffect } from 'react';
import { FaveButton, Songs } from '..';
import axios from 'axios';
import './album.css';

export const Album = ({ size, title, year }) => {
    // Get album image, songs
    const [ image, setImage ] = useState();
    const [ songs, setSongs ] = useState([]);
    useEffect(() => {
        const getAlbumInfo = async () => {
            const { data } = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=fa6c736ed5fc986ba1d168fd665b2a3f&artist=Amon%20Amarth&album=${title}&format=json`);
            const imageUrl = data.album.image[3]["#text"];
            setImage(imageUrl);
            const tracks = data.album.tracks.track.map(t => t.name)
            // The album "Versus the World" has 2 discs (second is bonus), just want the songs from disc 1
            title==="Versus The World" ? setSongs(tracks.slice(0,9)) : setSongs(tracks);
        }
        getAlbumInfo();
    }, [])

    // Set initial state according to specified size in props
    const checkLarge = size==="large" ? true : false
    const [isLarge, setLarge] = useState(checkLarge)

    // Callback function to toggle the large expanded album card
    const toggleLarge = () => setLarge((prevIsLarge) => !prevIsLarge)

    // General heading
    let heading=<h3>{title} ({year})</h3>;
    // Separate album and year on the small card to allow for better styling
    if (size==="small"){ heading = <><h3>{title}</h3><h4>({year})</h4></> }

    return (
        <div  role="menuitem" className={isLarge ? 'album large' : `album ${size}`}>
            <div className="image-container">
                <img width="127.5px" src={image} alt={`${title} album cover`}/>
            </div>
            <div className="album-container">
                {heading}
                <Songs songs={songs}/>
            </div>
            <FaveButton />
            <span 
                className="card-toggle" 
                role="button" 
                onClick={toggleLarge}
            >{isLarge ? <>&times;</> : "View Songlist"}</span>
        </div>
    )
}