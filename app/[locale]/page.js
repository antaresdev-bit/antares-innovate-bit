"use client";

import React, { useState, useEffect } from "react";
import Blog from "../components/header/Blog";
import Certificates from "../components/header/Certificates";
import Footer from "../components/header/Footer";
import Header from "../components/header/Header";
import OurServices from "../components/header/OurServices";
import OurWork from "../components/header/OurWork";
import Slider from "../components/header/Slider";
import Statistics from "../components/header/Statistics";
import TextIntroduction from "../components/header/TextIntroduction";
import VideoHero from "../components/landing/VideoHero";
import VideoLanding from "../components/landing/VideoLanding";
import CenterElementsSection from "../components/sections/CenterElementsSection";
import SectionImageLeft from "../components/sections/SectionImageLeft";
import dynamic from "next/dynamic";
import Image from "next/image";
import LottieIChatbot from "../components/landing/LottieIChatbot";

const Scene = dynamic(() => import("../components/sections/3D/Scene"), {
  ssr: false,
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
      <Header />

      <Certificates />

      <TextIntroduction />

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

      <LottieIChatbot />

      <Footer />
    </div>
  );
}
