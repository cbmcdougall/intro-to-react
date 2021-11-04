import React, { useState, useEffect } from 'react';
import { FaveButton, Songs } from '..';
import axios from 'axios';
import './album.css';

export const Album = ({ size, title, year }) => {
    const [ image, setImage ] = useState();
    const [ songs, setSongs ] = useState([]);
    const [ isLarge, setLarge ] = useState(false);
    
    useEffect(() => {
        let cancelRequest = false;
        if (!title) return;
        // Get album image, songs
        const getAlbumInfo = async () => {
            try {
                const { data } = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=fa6c736ed5fc986ba1d168fd665b2a3f&artist=Amon%20Amarth&album=${title}&format=json`);
                const imageUrl = data.album.image[3]["#text"];
                const tracks = data.album.tracks.track.map(t => t.name)
                
                if (cancelRequest) return;

                setImage(imageUrl);
                // The album "Versus the World" has 2 discs (second is bonus), just want the songs from disc 1
                title==="Versus The World" ? setSongs(tracks.slice(0,9)) : setSongs(tracks);
            } catch (error) {
                return null
            }
        }
        getAlbumInfo();
        // Prevent setting the data if component has been unmounted
        return function cleanup() {
            cancelRequest = true;
        }
    }, [title])

    const toggleLarge = () => setLarge((prevIsLarge) => !prevIsLarge);

    return (
        <div  role="menuitem" className={isLarge ? 'album large' : `album ${size}`}>
            <div className="image-container">
                <img width="300px" height="300px" src={image} alt={`${title} album cover`}/>
            </div>
            <div className="album-container">
                {/* Separate album and year on the small card to allow for better styling */}
                {size==="small" ? <><h3>{title}</h3><h4>({year})</h4></> : <h3>{title} ({year})</h3>}
                {isLarge && <Songs songs={songs}/>}
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