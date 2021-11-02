import React, { useState } from 'react';
import placeholder from './placeholder.jpg';
import { FaveButton } from '../FaveButton';
import { Songs } from './Songs';
import './album.css';

export const Album = ({ size, image, title, year, songs }) => {
    const [isLarge, setLarge] = useState(false);
    const toggleLarge = () => setLarge((prevIsLarge) => !prevIsLarge)
    let heading=<h3><FaveButton />{title} ({year})</h3>;
    if (size==="small"){ heading = <><h3><FaveButton />{title}</h3><h4>({year})</h4></> }
    // Create see more button to assign onclick event to
    return (
        <div  role="menuitem" className={isLarge ? 'album large' : `album ${size}`}>
            <div onClick={toggleLarge} className="image-container">
                <img width="100%" src={image || placeholder} alt={`${title} album cover`}/>
            </div>
            <div className="album-container">
                {heading}
                <Songs songs={songs}/>
            </div>
        </div>
    )
}