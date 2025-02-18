import React from "react";
import Image from "next/image";

function TextIntroduction() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-l border-white m-[150px]">
      <div className=" mb-2" style={{ fontFamily: "HandelGothic" }}>
        <h1 className="  leading-[40px] text-[40px] font-bold bg-gradient-to-r from-[#FDC548] to-[#FFFFFF] text-transparent bg-clip-text mb-[-30px] ml-[40px] ">
          La Creatividad Mueve el Mundo.
        </h1>
        <h1
          className="mt-[40px] leading-[40px] text-[40px] font-bold bg-gradient-to-r from-[#FDC548] to-[#FFFFFF] text-transparent bg-clip-text ml-[40px]"
          style={{ fontFamily: "HandelGothic" }}
        >
          La Tecnología lo Acelera.
        </h1>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="text-[30px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          En Antares, no seguimos tendencias, las creamos. Transformamos
          negocios con estrategias digitales de vanguardia, fusionando
          inteligencia artificial, automatización y diseño disruptivo para
          marcas que no temen liderar.
        </p>
        <p className="text-[30px] font-extrabold text-white leading-[35px] tracking-tight ">
          Si tu visión es crecer y evolucionar en el mundo digital, estamos aquí
          para hacerlo posible.
        </p>
        <div className="Text_Italic">
          <p className="italic text-[20px]  text-white mt-[40px]">
            Agenda una consulta y descubre el poder de la transformación
            digital.
          </p>
        </div>

        <div className="flex items-center text-left">
          <div className="ImageButtonIntroduction ml-2 border-none">
            <Image
              src="/assets/images/Boton avion animado 2.gif"
              alt="Antares Agency Logo"
              width={78}
              height={78}
              className="rounded-[20px]"
            />
          </div>
          <button className="w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold">
            Trabajemos juntos
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextIntroduction;
