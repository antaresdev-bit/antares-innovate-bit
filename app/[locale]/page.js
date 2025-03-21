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
import LoadingScreen from "@/components/loading/LoadingScreen";

const OptimisedScene = dynamic(
  () => import("../../components/sections/3D/OptimisedScene"),
  {
    ssr: false,
  }
);

//Se hace importe dinámico a estos elementos para acelerar la carga de la Escena
const OurWork = dynamic(() => import("../../components/header/OurWork"), {
  ssr: false,
  loading: () => <div>Cargando OurWork...</div>,
});

const VideoLanding = dynamic(
  () => import("../../components/landing/VideoLanding"),
  {
    ssr: false,
    loading: () => <LoadingScreen />,
  }
);

export default function Home() {
  const [showScene, setShowScene] = useState(true);
  const sceneContainerRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    const currentRef = sceneContainerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== showScene) {
          setShowScene(entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px",
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
  }, [showScene]);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        const isSupported = !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        );
        setWebGLSupported(isSupported);
      } catch (e) {
        setWebGLSupported(false);
      }
    };

    checkWebGL();
  }, []);

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    
    const hasHashInUrl = typeof window !== 'undefined' && window.location.hash !== '';

    if (isVideoLoading && !hasHashInUrl) {
      document.documentElement.style.cssText = `
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
        touch-action: none;
      `;

      // Agregar listeners para todos los eventos táctiles
      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
      document.addEventListener("touchstart", preventDefault, {
        passive: false,
      });
      document.addEventListener("touchend", preventDefault, { passive: false });
    } else {
      // Restaurar scroll
      document.documentElement.style.cssText = "";
      document.removeEventListener("touchmove", preventDefault);
      document.removeEventListener("touchstart", preventDefault);
      document.removeEventListener("touchend", preventDefault);
    }

    return () => {
      // Cleanup
      document.documentElement.style.cssText = "";
      document.removeEventListener("touchmove", preventDefault);
      document.removeEventListener("touchstart", preventDefault);
      document.removeEventListener("touchend", preventDefault);
    };
  }, [isVideoLoading]);

  return (
    <>
      <LayoutComponents />
      {isVideoLoading && <LoadingScreen />}
      <div className="relative lg:h-screen h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1c2364] via-[#0e051c] via-15% to-[#0e051c]">
        <div ref={sceneContainerRef} className="w-full h-full">
          {showScene ? (
            <OptimisedScene />
          ) : (
            <div className="w-full h-full">
              <p>
                {webGLSupported ? "Escena 3D no visible" : "WebGL no soportado"}
              </p>
            </div>
          )}
        </div>

        <div className="absolute top-[calc(50%+30vh)] lg:top-[calc(50%+37vh)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  w-full lg:max-w-[80%] md:max-w-[85%] max-w-[90%]">
          <div className="flex justify-center">
            {" "}
            <Certificates />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center overflow-hidden w-full">
        <div className="w-full flex items-center justify-center overflow-visible relative ">
          {/* Degradado */}
          <div
            className="absolute inset-x-0 mx-auto w-[3000px] h-[800px]  "
            style={{
              background:
                "radial-gradient(ellipse at center, #22379A 0%, #0E051C 40%)",
              left: "0%",
              transform: "translateX(-50%) translateY(5%)",
              zIndex: -1,
            }}
          ></div>
          <TextIntroduction />
        </div>
      </div>

      <div
        className="relative overflow-hidden  mt-[60px]  "
        style={{
          borderBottomLeftRadius: "48px",
          borderBottomRightRadius: "48px",
        }}
      >
        <div className="relative z-10 mt-[0px] sm:mt-[0px] md:mt-[50px]  lg:mt-[50px] w-full">
          <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-71">
            <VideoLanding onLoadComplete={() => setIsVideoLoading(false)} />
          </div>

          <Slider />
          {/* degrade */}
          <div
            className="absolute inset-x-0 mx-auto w-[3000px] h-[800px] "
            style={{
              background:
                "radial-gradient(ellipse at center, #22379A 0%, #0E051C 50%)",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              zIndex: -1,
            }}
          ></div>
          {/* degrade */}
        </div>
      </div>

      <div id="our-services">
        <OurServices />
      </div>
      <OurWork />
      <Statistics />
      <Blog />

      <Footer />
    </>
  );
}
