"use client";

import React, { useState, useEffect } from "react";
import Blog from "../components/header/Blog";
import Certificates from "../components/header/Certificates";
import Footer from "../components/header/Footer";
import OurServices from "../components/header/OurServices";
import Slider from "../components/header/Slider";
import Statistics from "../components/header/Statistics";
import TextIntroduction from "../components/header/TextIntroduction";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../components/sections/3D/Scene"), {
  ssr: false,
});

//Se hace importe dinámico a estos elementos para acelerar la carga de la Escena
const OurWork = dynamic(() => import("../components/header/OurWork"), {
  ssr: false,
  loading: () => <div>Cargando OurWork...</div>, // fallback opcional
});

const VideoLanding = dynamic(() => import("../components/landing/VideoLanding"), {
  ssr: false,
  loading: () => <div>Cargando Video...</div>, // fallback opcional
});

export default function Home() {
  const [isSceneVisible, setIsSceneVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsSceneVisible(false);
      } else {
        setIsSceneVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      {isSceneVisible && <div className="">{<Scene />}</div>}
      {/* <Header /> */}
      <div className="bg-[radial-gradient(ellipse_at_center_left,_rgba(20,50,120,0.3)_20%,_#0E051C_60%)]">
        <Certificates />
        <TextIntroduction />
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(34,55,154,0.7) 0%, rgba(34,55,154,0) 70%, rgba(11,12,40,0.7) )",
          }}
        ></div>
        <div className="relative z-10">
          <VideoLanding />
          <Slider />
        </div>
      </div>

      
        <OurServices />
        <OurWork />
      
      <Statistics />
      <Blog />

      <Footer />
    </div>
  );
}
