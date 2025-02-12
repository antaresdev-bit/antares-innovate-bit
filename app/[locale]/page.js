'use client'

import Header from "../components/header/Header";
import VideoHero from "../components/landing/VideoHero";
import CenterElementsSection from "../components/sections/CenterElementsSection";
import SectionImageLeft from "../components/sections/SectionImageLeft";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../components/sections/3D/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="">
      <Scene />
      <Header />
      <VideoHero />
      <CenterElementsSection />
      
      <SectionImageLeft  
      titleText="Consultoria" 
      descriptionText={<div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        <br />
        <ul className="ml-5">
          <li>Desarrollo de Conceptos Creativos.</li>
          <li>Creación de Campañas.</li>
          <li>Prototipado de Interfaces.</li>
        </ul>
        </div>}
      buttonText="Cotizar" 
      buttonLink="/contact" 
      imageUrl="/assets/images/services/mock_image.png" 
      />
    </div>
  );
}


