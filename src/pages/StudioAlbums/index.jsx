import React, { useEffect, useState } from "react";
import { Albums } from "../../components";

export const StudioAlbums = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            const ismobile = window.innerWidth < 800;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }
        
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);

    }, [isMobile])

    return <Albums isMobile={isMobile}/>
}