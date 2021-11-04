import { useState, useEffect } from "react";

export function useWindowSize() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 800);

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    
    }, [isMobile])

    return isMobile;
};