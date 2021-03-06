import React from 'react';
import { Album } from '..';
import { useWindowSize } from '../../customHooks';
import './albums.css';


export const Albums = () => {
    const isMobile = useWindowSize();
    const albums = [
        {title: "Berserker", year: 2019},
        {title: "Jomsviking", year: 2016},
        {title: "Deceiver of the Gods", year: 2013},
        {title: "Surtur Rising", year: 2011},
        {title: "Twilight Of The Thunder God", year: 2008},
        {title: "With Oden On Our Side", year: 2006},
        {title: "Fate of Norns", year: 2004},
        {title: "Versus The World", year: 2002},
        {title: "The Crusher", year: 2001},
        {title: "The Avenger", year: 1999},
        {title: "Once Sent From The Golden Hall", year: 1998}
    ]
    const size = isMobile ? "small" : "medium";
    const renderAlbums = () => albums.map((a, i) => <Album key={i+1} size={size} title={a.title} year={a.year}/>);

    return(
        <section id="studioAlbums">
            <div className="heading">
                <h1 id="albumsHeading">Studio Albums</h1>
            </div>
                <hr></hr>
            <div className="discography-container" role="menu">
                { renderAlbums() }
            </div>
        </section>
    )
}