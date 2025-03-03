import React from "react";
import Image from "next/image";

function TextIntroduction() {
  return (
    <div className="max-w-[1500px] mx-auto px-[22px] md:px-[105px] lg:px-[223px]   ">
      <div className=" border-l-0  sm:border-l-0 md:border-l border-white mt-[50px] lg:mt-[50px]">
        <div
          className=" mb-2  ml-[21px] sm:ml-[21px] md:ml-[0px] lg:ml-[0px] "
          style={{ fontFamily: "HandelGothic" }}
        >
          <h1 className="min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[100px] text-[32px] sm:text-[32px] md:text-[40px] lg:text-[45px] leading-[35px] sm:leading-[31px] md:leading-[40px] lg:leading-[50px]   text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] bg-clip-text font-bold sm:ml-[22px] md:ml-[53px] lg:ml-[53px] tracking-[2px] sm:text-left ">
            La Creatividad Mueve el Mundo, la Tecnología lo Acelera.
          </h1>
        </div>
        <div className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] mt-[28px] sm:mt-[28px] md:mt-[30px] lg:mt-[57px] sm:ml-[22px] md:ml-[53px] lg:ml-[53px]">
          <p
            className="ml-[21px] sm:ml-[21px] md:ml-[0px] lg:ml-[0px] font-extrabold text-white 
             leading-[31px] sm:leading-[31px] md:leading-[40px] lg:leading-[45px] tracking-[1.5px] 
             text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px]"
            style={{ fontFamily: "UniteaSans-medium" }}
          >
            En Antares, creamos tendencias. Impulsamos negocios con IA,
            automatización y diseño disruptivo, ayudando a marcas visionarias a
            liderar en lo digital.
          </p>

          <div className="flex items-center text-left  mt-[49px] ml-[21px] sm:ml-[21px] md:ml-[0px] lg:ml-[0px] mb-[100px]">
            <div className="ImageButtonIntroduction sm:ml-[22px] md:ml-[53px] lg:ml-[0px] border-none ">
              <Image
                src="/assets/images/Gif Avion.gif"
                alt="Antares Agency Logo"
                width={48}
                height={48}
                className="rounded-[20px]"
              />
            </div>
            <button
              className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold "
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
