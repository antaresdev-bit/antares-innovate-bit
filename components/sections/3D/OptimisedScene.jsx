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
                   //Peso: 69mb tarda en cargar  src="https://storage.googleapis.com/antares-agency-rcs/3dMobile.mp4" 
                   //Se reemplaza por el siguiente video que pesa 2,7mb y carga mucho mas rapido
                   src="/assets/videos/3dMobile.webm" 
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

