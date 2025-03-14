import React, { useEffect, useState } from 'react';
import Scene from './Scene';

export default function OptimisedScene({ isSceneLoading }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isMobile ? (
                <video 
                    src="https://storage.googleapis.com/antares-agency-rcs/3dMobile.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-screen h-[550px] object-cover"
                />
            ) : (
                <Scene />
            )}
        </>
    );
}

