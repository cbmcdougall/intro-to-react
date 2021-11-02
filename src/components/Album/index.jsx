import React, { useState } from 'react';
import './album.css';
import placeholder from './placeholder.jpg';
import { Songs } from './Songs';

export const Album = ({ size, image, title, year, songs }) => {
    const [isLarge, setLarge] = useState(false);
    const toggleLarge = () => setLarge(!isLarge)
    let heading=<h3>{title} ({year})</h3>;
    if (size==="small"){ heading = <><h3>{title}</h3><h4>({year})</h4></> }

    return (
        <div onClick={toggleLarge} className={isLarge ? 'album large' : `album ${size}`}>
            <div className="image-container">
                <img width="100%" src={image || placeholder} alt={`${title} album cover`}/>
            </div>
            <div className="album-container">
                {heading}
                <Songs songs={songs}/>
            </div>
        </div>
    )
}