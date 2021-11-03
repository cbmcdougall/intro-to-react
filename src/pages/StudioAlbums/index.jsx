import React, { useEffect, useState } from "react";
import { Albums } from "../../components";

export const StudioAlbums = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        // Define isMounted to skip setting state if component is unmounted
        let isMounted = true;
        
        const handleResize = () => {
            const ismobile = window.innerWidth < 800;
            if (isMounted && ismobile !== isMobile) setIsMobile(ismobile);
        }
        
        window.addEventListener("resize", handleResize);
        
        return function cleanup() {
            isMounted = false;
        }
    }, [isMobile])

    return <Albums isMobile={isMobile}/>
}