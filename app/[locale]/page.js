"use client";

import React, { useState, useEffect, useRef } from "react";
import Blog from "../../components/header/Blog";
import Certificates from "../../components/header/Certificates";
import Footer from "../../components/header/Footer";
import OurServices from "../../components/header/OurServices";
import Slider from "../../components/header/Slider";
import Statistics from "../../components/header/Statistics";
import TextIntroduction from "../../components/header/TextIntroduction";
import dynamic from "next/dynamic";
import LayoutComponents from "@/components/layout/LayoutComponents";
import { getGPUTier } from 'detect-gpu';
import { isWebGL2Available } from "@react-three/drei";

const Scene = dynamic(() => import("../../components/sections/3D/Scene"), {
  ssr: false,
});

const TestScene = dynamic(() => import("../../components/sections/3D/TestScene"), {
  ssr: false,
});

//Se hace importe dinámico a estos elementos para acelerar la carga de la Escena
const OurWork = dynamic(() => import("../../components/header/OurWork"), {
  ssr: false,
  loading: () => <div>Cargando OurWork...</div>,
});

const VideoLanding = dynamic(
  () => import("../../components/landing/VideoLanding"),
  {
    ssr: false,
    loading: () => <div>Cargando Video...</div>,
  }
);

export default function Home() {
  const [showScene, setShowScene] = useState(true);
  const [webGLSupported, setWebGLSupported] = useState(false);
  const [gpuTier, setGpuTier] = useState(null);
  const sceneContainerRef = useRef(null);

  useEffect(() => {
    const detectGPU = async () => {
      try {
        const gpu = await getGPUTier();
        setGpuTier(gpu);
      } catch (e) {
        console.error('Error detectando GPU:', e);
        setGpuTier({ tier: 0 }); // fallback a configuración de bajo rendimiento
      }
    };
    
    detectGPU();
  }, []);

  useEffect(() => {
    const currentRef = sceneContainerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScene(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const isSupported = !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
        setWebGLSupported(isSupported);
      } catch (e) {
        setWebGLSupported(false);
      }
    };
    
    checkWebGL();
  }, []);
  
  return (
    <>
      <LayoutComponents />
      <div className="mx-auto w-screen relative flex overflow-hidden">
        {showScene && isWebGL2Available ? (
          <div className="relative" ref={sceneContainerRef}>
            <Scene gpuTier={gpuTier}/>
          </div>
        ) : (
          <div className="relative scene-size">
            {!isWebGL2Available ? 'Tu dispositivo no soporta nuestro visor 3D' : 'Escena 3D no visible'}
          </div>
        )}

        <div className="certificates-container z-10 w-full max-w-[90%] lg:max-w-[80%] md:max-w-[85%] sm:max-w-[90%]">
          <div className="flex justify-center">
            <Certificates />
          </div>
        </div>
      </div>

      <div
        className="w-full min-h-screen flex items-center justify-center overflow-visible"
        style={{
          backgroundImage: `url(${"/assets/images/bg3.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TextIntroduction />
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="relative z-10 mt-[100px]">
          {/* aspect dadio igual */}
          <VideoLanding />
          <Slider />
          {/* degrade */}
          <div
            className="absolute inset-x-0 mx-auto w-full max-w-[1298px] h-[542px]"
            style={{
              background:
                "radial-gradient(ellipse at center, #22379A 0%, #0E051C 60%)",
              transform: "translateY(-50%)",
              zIndex: -1,
            }}
          ></div>
          {/* degrade */}
        </div>
      </div>

      <OurServices />
      <OurWork />
      <Statistics />
      <Blog />
      <Footer />
    </>
  );
}
