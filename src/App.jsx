import React, { useState } from 'react';
import { Welcome } from './components/Welcome';
import { Albums } from './components/Albums';
import "./style.css"

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 800;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);

    return (<>
        <Welcome />
        <Albums isMobile={isMobile}/>
    </>)
}

export default App;