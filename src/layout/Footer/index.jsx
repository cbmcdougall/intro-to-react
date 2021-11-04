import React from "react";
import { Link } from 'react-router-dom';
import Spotify from './Icons/Spotify.png';
import Youtube from './Icons/Youtube.png';
import './footer.css';

export const Footer = () => {
    return(
        <footer className="footer">
            <Link className="link" to={{ pathname: "https://open.spotify.com/artist/3pulcT2wt7FEG10lQlqDJL?si=X359UBlTTYSMhQ1Ztq1tpA"}} target="_blank" rel="noreferrer">
                <img id="spotify" width="40px" height="40px" src={Spotify} alt="Amon Amarth Spotify" />
            </Link>
            <Link className="link" to={{ pathname: "https://www.amonamarth.com/"}} target="_blank" rel="noreferrer">
                <button id="bandsite">Amon Amarth Official Site</button>
            </Link>
            <Link className="link" to={{ pathname: "https://www.youtube.com/channel/UCS8-ccff2oGbG0Mx7UOuKYw"}} target="_blank" rel="noreferrer">
                <img id="youtube" width="58px" height="40px" src={Youtube} alt="Amon Amarth Youtube" />
            </Link>
        </footer>
    )
};