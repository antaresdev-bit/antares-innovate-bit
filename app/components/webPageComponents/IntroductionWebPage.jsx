import React from "react";
import Image from "next/image";

function IntroductionWebPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-l border-white m-[161px]">
      <div className=" mb-2" style={{ fontFamily: "HandelGothic" }}>
      <h1 className="leading-[40px] text-[45px] font-bold text-white mb-[-30px] ml-[40px]">
          Diseño, Tecnología e Interactividad para una Experiencia Inolvidable
        </h1>
        <p
          className="mt-[75px] leading-[40px] text-[18px]   text-white  text-transparent bg-clip-text ml-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          UI UX | Responsive | 3D | SEO y SEMaaa
        </p>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="text-[30px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          En Antares, creamos páginas web innovadoras y completamente
          responsivas, diseñadas para ofrecer la mejor experiencia de usuario
          (UI/UX) y alineadas con las tendencias digitales más actuales. Nuestro
          enfoque combina tecnología, creatividad e interactividad, logrando
          productos digitales modernos, atractivos y funcionales.
        </p>
      </div>
    </div>
  );
}

export default IntroductionWebPage;
