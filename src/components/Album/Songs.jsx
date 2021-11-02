import React from "react";

export const Songs = ({songs}) => {
    const renderSongs = () => songs.map((s, i) => <li key={i}>{s}</li>)
    return (
        <ol className="songlist">
            { renderSongs() }
        </ol>
    )
}