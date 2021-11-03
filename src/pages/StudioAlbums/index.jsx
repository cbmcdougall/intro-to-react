import React, { useState } from "react";
import { Albums } from "../../components";

export const StudioAlbums = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 800;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);

    return <Albums isMobile={isMobile}/>
}