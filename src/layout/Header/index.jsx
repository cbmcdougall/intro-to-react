import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return(
        <header className="header">
            <h1>Amon Amarth - <em>Melodic Death Metal</em></h1>
            <nav>
                <button>
                    <NavLink exact to='/'>Home</NavLink>
                </button>
                <button>
                    <NavLink to='/StudioAlbums'>Studio Albums</NavLink>
                </button>
                {/* Back Button */}
            </nav>
        </header>
    )
};