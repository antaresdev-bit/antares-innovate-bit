import React, { useEffect, useState } from 'react';
import Scene from './Scene';

export default function OptimisedScene() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative">
            {isMobile ? (
                <>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        webkit-playsinline="true"
                        loading="eager"
                        poster="/assets/images/3dMobile.jpg"
                        className="w-screen h-[550px] object-cover"
                        onLoadedData={() => setIsLoading(false)}   
                    >
                        <source src="/assets/videos/3dMobile.mp4" type="video/mp4" importance="high" />
                    </video>

                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#0e051c]/50">
                            <div className="flex flex-col items-center mt-[100px]">
                                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                <p className="mt-4 text-lg text-white animate-scale">Cargando...</p>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <Scene />
            )}
        </div>
    );
}

