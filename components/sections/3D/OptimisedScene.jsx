import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Loading from '@/components/layout/Loading/Loading';


export default function OptimisedScene() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations('loading');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Scene = !isMobile
    ? dynamic(() => import('./Scene'), { ssr: false })
    : null;

    return (
        <div className="relative">
            {isMobile ? (
                <>
                    <video
                        preload="auto"
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
                       <Loading />
                    )}
                </>
            ) : (
                Scene && <Scene />
            )}
        </div>
    );
}

