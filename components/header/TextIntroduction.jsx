import React from "react";
import Image from "next/image";

function TextIntroduction() {
  return (
    <div className="max-w-[1500px] mx-auto px-[22px] md:px-[105px] lg:px-[223px]">
      <div className=" border-l-0  sm:border-l-0 md:border-l border-white mt-[135px]  sm:mt-[135px] md:mt-[127px] lg:mt-[161px]  ">
        <div className=" mb-2" style={{ fontFamily: "HandelGothic" }}>
          <h1 className="text-[33px] sm:text-[33px] md:text-[40px] lg:text-[45px] leading-[40px] text-[40px] font-bold bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-transparent bg-clip-text mb-[-30px] sm:ml-[22px] md:ml-[53px] lg:ml-[53px] tracking-[2px]">
            La Creatividad Mueve el Mundo.
          </h1>

          <h1
            className="text-[33px] sm:text-[33px] md:text-[40px] lg:text-[45px] mt-[40px] leading-[35px] text-[40px] font-bold bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] text-transparent bg-clip-text sm:ml-[22px] md:ml-[53px] lg:ml-[53px] tracking-[2px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            La Tecnología lo Acelera.
          </h1>
        </div>
        <div className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] mt-[65px] sm:mt-[65px] md:mt-[56px] lg:mt-[57px] sm:ml-[22px] md:ml-[53px] lg:ml-[53px]">
          <p
            className=" font-extrabold text-white leading-[45px] tracking-tight  "
            style={{ fontFamily: "UniteaSans-medium" }}
          >
            En Antares, no seguimos tendencias, las creamos. Transformamos
            negocios con estrategias digitales de vanguardia, fusionando
            inteligencia artificial, automatización y diseño disruptivo para
            marcas que no temen liderar. Si tu visión es crecer y evolucionar en
            el mundo digital, estamos aquí para hacerlo posible.
          </p>
          <p
            className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] font-extrabold text-white leading-[45px] tracking-tight mt-[39px] sm:mt-[39px] md:mt-[39px] lg:mt-[49px]"
            style={{ fontFamily: "UniteaSans-medium" }}
          >
            Si tu visión es crecer y evolucionar en el mundo digital, estamos
            aquí para hacerlo posible.
          </p>
          <div className="Text_Italic">
            <p className="italic text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px]   text-white mt-[40px]">
              Agenda una consulta y descubre el poder de la transformación
              digital.
            </p>
          </div>

          <div className="flex items-center text-left  mt-[49px] ">
            <div className="ImageButtonIntroduction sm:ml-[22px] md:ml-[53px] lg:ml-[0px] border-none">
              <Image
                src="/assets/images/Gif Avion.gif"
                alt="Antares Agency Logo"
                width={48}
                height={48}
                className="rounded-[20px]"
              />
            </div>
            <button
              className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold"
              style={{ fontFamily: "HandelGothic" }}
            >
              Trabajemos juntos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextIntroduction;
