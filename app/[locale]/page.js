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

const Scene = dynamic(() => import("../../components/sections/3D/Scene"), {
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
  const sceneContainerRef = useRef(null);
  const [gpuTier, setGpuTier] = useState({ tier: 0 });
  const [webGLSupported, setWebGLSupported] = useState(false);

 
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
      <div className="relative flex justify-center overflow-hidden ">
        {showScene ? (
          <div className="relative" ref={sceneContainerRef}>
            <Scene gpuTier={gpuTier}/>
          </div>
        ) : (
          <div className="relative">Escena 3D no visible</div>
        )}

        <div className="absolute top-[calc(50%+200px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  w-full max-w-[90%] lg:max-w-[80%] md:max-w-[85%] sm:max-w-[90%]">
          <div className="flex justify-center">
            {" "}
            <Certificates />
          </div>
        </div>
      </div> 

      <div className="relative flex justify-center overflow-hidden w-full">
        <div className="w-full flex items-center justify-center overflow-visible relative">
          {/* Degradado */}
          <div
            className="absolute inset-x-0 mx-auto w-[3000px] h-[800px] "
            style={{
              background:
                "radial-gradient(ellipse at center, #22379A 0%, #0E051C 45%)",
              left: "0%",
              transform: "translateX(-50%) translateY(10%)",
              zIndex: -1,
            }}
          ></div>

          {/* Contenido */}
          <TextIntroduction />
        </div>
      </div>

      <div
        className="relative overflow-hidden  "
        style={{
          borderBottomLeftRadius: "48px",
          borderBottomRightRadius: "48px",
        }}
      >
        <div className="relative z-10 mt-[0px] sm:mt-[0px] md:mt-[100px]  lg:mt-[100px] w-full">
          <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-71">
            <VideoLanding />
          </div>

          <Slider />
          {/* degrade */}
          <div
            className="absolute inset-x-0 mx-auto w-[3000px] h-[800px] "
            style={{
              background:
                "radial-gradient(ellipse at center, #22379A 0%, #0E051C 55%)",
              left: "50%",
              transform: "translateX(-50%) translateY(-65%)",
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