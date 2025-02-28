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

  useEffect(() => {
    const currentRef = sceneContainerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScene(entry.isIntersecting);

        if (!entry.isIntersecting) {
          const canvas = document.querySelector("canvas");
          if (canvas) {
            canvas.remove();
          }
        }
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

  return (
    <>
      <LayoutComponents />
      <div className="mx-auto w-screen relative flex overflow-hidden">
        {showScene ? (
          <div className="relative" ref={sceneContainerRef}>
            <Scene />
          </div>
        ) : (
          <div className="relative scene-size">Escena 3D no visible</div>
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
