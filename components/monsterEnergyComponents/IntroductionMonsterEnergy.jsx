import React from "react";
import Image from "next/image";

function IntroductionMonsterEnergy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-l border-white lg:m-[161px] md:m-[161px] sm:m-[50px]">
      <div className=" mb-2" style={{ fontFamily: "HandelGothic" }}>
        <h1 className="leading-[40px] text-[45px] font-bold text-white mb-[-30px] ml-[40px]">
          Desatando la Bestia: Estrategia y Diseño para una Presencia Imponente
        </h1>
        <p
          className="mt-[75px] leading-[40px] text-[18px]   text-white  text-transparent bg-clip-text ml-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          Presencia de Marca | Activaciones | Eventos | Stands
        </p>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="font-extrabold text-white leading-[35px] tracking-tight mt-[40px] 
             lg:text-[30px] 
             md:text-[20px] 
             sm:text-[30px]"
          style={{ fontFamily: "UniteaSans-bold" }}
        >
          Monster Energy es sinónimo de adrenalina, fuerza y una actitud
          desafiante. Nuestra colaboración con la marca se centró en consolidar
          su presencia en puntos de venta estratégicos y eventos masivos,
          asegurando que su identidad visual y mensaje resonaran con su
          audiencia.
        </p>
      </div>
    </div>
  );
}

export default IntroductionMonsterEnergy;
