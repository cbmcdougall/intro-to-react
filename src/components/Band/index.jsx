import React from 'react';
import bandPic from './Band.webp';
import './band.css';

export const Band = () => {
    return (
        <section id="bandinfo">
            <div id="bandpic-container"><img width="533px" height="400px" src={bandPic} alt="Picture of the Band" /></div>
            <div id="bandtext-container">
                <p className="band-text">
                    <strong>Amon Amarth</strong> is a Swedish melodic death metal band from Tumba, formed in 1992. The band takes its name from the Sindarin name of Mount Doom, a volcano in J. R. R. Tolkien′s Middle-earth. Their lyrics mostly deal with Viking mythology and history, and so they have been sometimes erroneously labeled “Viking metal,” although the band insists they play melodic death metal.
                </p>
                <p className="band-text">
                    The band is composed of (from left to right in image) rhythm guitarist Johan Söderberg, lead guitarist Olavi Mikkonen, vocalist Johan Hegg, bassist Ted Lundström, and drummer Jocke Wallgren. Amon Amarth has released eleven studio albums, one compilation album, one EP, one video album, and ten music videos.
                </p>
                <p className="band-text">
                    Their first studio album, Once Sent from the Golden Hall, debuted in 1998. Five more studio releases followed, before the band saw its breakthrough with the 2008 album Twilight of the Thunder God, which debuted at No. 10 on the Swedish album charts and No. 50 on the US Billboard. Four more albums, Surtur Rising, Deceiver of the Gods, Jomsviking, and Berserker followed in 2011, 2013, 2016, and 2019 respectively.
                </p>
            </div>
        </section>
    )
}