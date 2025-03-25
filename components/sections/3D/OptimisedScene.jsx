import React, { useEffect, useState } from 'react';
import Scene from './Scene';

export default function OptimisedScene({ isSceneLoading }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Detectar iOS
        const detectIOS = () => {
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            setIsIOS(isIOS);
        };
        detectIOS();

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
                    {isIOS ? (
                        <source src="/assets/videos/3dMobile.mp4" type="video/mp4" />
                    ) : (
                        <>
                            <source src="/assets/videos/3dMobile.webm" type="video/webm" />
                            <source src="/assets/videos/3dMobile.mp4" type="video/mp4" />
                        </>
                    )}
                </video>
            ) : (
                <Scene />
            )}
        </>
    );
}

