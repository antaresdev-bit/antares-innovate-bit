import React, { useEffect, useState } from 'react';
import Scene from './Scene';

export default function OptimisedScene() {
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
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    playsinline="true"
                    webkit-playsinline="true"
                    className="w-screen h-[550px] object-cover"
                >
                    <source src="/assets/videos/3dMobile.mp4" type="video/mp4" />
                </video>
            ) : (
                <Scene />
            )}
        </>
    );
}

