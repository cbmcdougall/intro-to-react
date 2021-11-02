import React from 'react';
import { Album } from './Album';
import { songs } from './songs';

// Import images from folder as an object, with keys matching filenames
function importAll(r) {
    let images = {};
    r.keys().forEach(item => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('./images', false, /\.jpg$/));

const albums = [
    {title: "Berserker", year: 2019, image: images["Berserker.jpg"], songs: songs["Berserker"]},
    {title: "Jomsviking", year: 2016, image: images["Jomsviking.jpg"], songs: songs["Jomsviking"]},
    {title: "Deceiver of the Gods", year: 2013, image: images["Deceiver_of_the_Gods.jpg"], songs: songs["Deceiver_of_the_Gods"]},
    {title: "Surtur Rising", year: 2011, image: images["Surtur_Rising.jpg"], songs: songs["Surtur_Rising"]},
    {title: "Twilight Of The Thunder God", year: 2008, image: images["TotTG.jpg"], songs: songs["TotTG"]},
    {title: "With Oden On Our Side", year: 2006, image: images["With_Oden.jpg"], songs: songs["With_Oden"]},
    {title: "Fate of Norns", year: 2004, image: images["Fate_Of_Norns.jpg"], songs: songs["Fate_Of_Norns"]},
    {title: "Versus The World", year: 2002, image: images["Versus_The_World.jpg"], songs: songs["Versus_The_World"]},
    {title: "The Crusher", year: 2001, image: images["The_Crusher.jpg"], songs: songs["The_Crusher"]},
    {title: "The Avenger", year: 1999, image: images["The_Avenger.jpg"], songs: songs["The_Avenger"]},
    {title: "Once Sent From The Golden Hall", year: 1997, image: images["OSFTGH.jpg"], songs: songs["OSFTGH"]}
]

export const Albums = ({isMobile}) => {
    const size = isMobile ? "small" : "medium";
    const renderAlbums = () => albums.map((a, i) => <Album key={i} size={size} image={a.image} title={a.title} year={a.year} songs={a.songs}/>);

    return(
        <section id="albums">
            <h1>Studio Albums</h1>
            <div className="discography-container" role="menu">
                { renderAlbums() }
            </div>
        </section>
    )
}