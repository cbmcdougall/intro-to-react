import React, { useState } from 'react';
import { FaveButton } from '../FaveButton';
import { Songs } from './Songs';
import './album.css';

export const Album = ({ size, image, title, year, songs }) => {
    // Set initial state according to specified size in props
    const checkLarge = size==="large" ? true : false
    const [isLarge, setLarge] = checkLarge ? useState(true) : useState(false);
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
            >{isLarge ? <>&times;</> : "View Album"}</span>
        </div>
    )
}