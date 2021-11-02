import React, { useState } from "react";

export const FaveButton = () => {
    const [ faved, setFaved ] = useState(false);

    const handleClick = () => setFaved((prevFaved) => !prevFaved);

    return(
        <span
            className="favourite"
            onClick={handleClick}
            role="switch"
            style={{ color: faved ? 'gold' : 'black' }}
        >{ faved ? "★" : "☆" }</span>
    )
}