import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return(
        <header className="header">
            <h1>Amon Amarth - <em>Melodic Death Metal</em></h1>
            <nav>
                <NavLink exact to='/'><button>Home</button></NavLink>
                <NavLink to='/StudioAlbums'><button>Studio Albums</button></NavLink>
                {/* Back Button */}
            </nav>
        </header>
    )
};