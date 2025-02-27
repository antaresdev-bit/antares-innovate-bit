import React from "react";
import Image from "next/image";

function IntroductionMarketing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-l border-white lg:m-[50px] md:m-[161px] sm:m-[50px] ">
      <div className="mb-2" style={{ fontFamily: "HandelGothic" }}>
        <h1 
          className="leading-[40px] text-[45px] font-bold mb-[-30px] ml-[40px] bg-gradient-to-r from-[#FDC548] to-[#FFFFFF] text-transparent bg-clip-text"
        >
          Diseñamos Índices de Gestión Avanzados para la toma de decisiones
        </h1>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="font-extrabold text-white leading-[35px] tracking-tight mt-[80px] 
             lg:text-[30px] 
             md:text-[20px] 
             sm:text-[30px]"
          style={{ fontFamily: "UniteaSans-bold" }}
        >
          Optimizamos la toma de decisiones empresariales a través de Índices de
          Gestión Avanzados, diseñados para medir, analizar y mejorar el
          rendimiento en tiempo real.
        </p>
      </div>
    </div>
  );
}

export default IntroductionMarketing;
