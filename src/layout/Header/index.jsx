import React from "react";
import { NavLink } from "react-router-dom";
import logo from './AmonAmarth.webp';
import './header.css';

export const Header = () => {
    return(
        <header className="header">
            <img width="90px" height="100px" src={logo} alt="Band Logo" />
            <h1>Amon Amarth - <em>Melodic Death Metal</em></h1>
            <nav id="navbar">
                <NavLink className="navlink" exact to='/'><button className="navbutton">Home</button></NavLink>
                <NavLink className="navlink" to='/StudioAlbums'><button className="navbutton">Studio Albums</button></NavLink>
                {/* Back Button */}
            </nav>
        </header>
    )
};