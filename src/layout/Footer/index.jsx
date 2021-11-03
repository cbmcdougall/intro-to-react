import React from "react";
import { Link } from 'react-router-dom';
import Spotify from './Icons/Spotify.png';
import Youtube from './Icons/Youtube.png';

export const Footer = () => {
    return(
        <footer className="footer">
            <Link to={{ pathname: "https://open.spotify.com/artist/3pulcT2wt7FEG10lQlqDJL?si=X359UBlTTYSMhQ1Ztq1tpA"}} target="_blank" rel="noreferrer">
                <img src={Spotify} alt="Amon Amarth Spotify" />
            </Link>
            <Link to={{ pathname: "https://www.amonamarth.com/"}} target="_blank" rel="noreferrer">
                <button>Amon Amarth Official Site</button>
            </Link>
            <Link to={{ pathname: "https://www.youtube.com/channel/UCS8-ccff2oGbG0Mx7UOuKYw"}} target="_blank" rel="noreferrer">
                <img src={Youtube} alt="Amon Amarth Youtube" />
            </Link>
        </footer>
    )
};