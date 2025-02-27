import React from "react";
import Image from "next/image";

function ArchitectProfile() {
  const texts = {
    paragraph:
      '"El éxito de un proyecto se logra trabajando en equipo con visión estratégica y compromiso."',
    name: "Yamile Durán - Arquitecta, Project Manager",
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] p-4 ">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center w-full md:w-[1122px] h-auto md:h-[253px] bg-transparent shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex md:hidden lg:hidden flex-col items-start text-left mb-4">
          <p
            className="text-[40px] sm:text-[40px] md:text-[40px] lg:text-[45px] font-bold px-4"
            style={{
              fontFamily: "HandelGothic",
              lineHeight: "1.2",
              background: "linear-gradient(to right, #FDC548, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {texts.paragraph}
          </p>
        </div>

        {/* imagen en sm*/}
        <div className="sm:flex md:hidden lg:hidden flex items-center space-x-4">
          <div className="w-[135px] h-[135px] relative">
            <Image
              src="/assets/images/inmobiliaria/yamile.png"
              alt="Yamile Durán"
              width={135}
              height={135}
              className="object-cover"
            />
          </div>

          <p
            className="text-white text-lg font-bold"
            style={{
              fontFamily: "UniteaSans",
              lineHeight: "1",
            }}
          >
            {texts.name}
          </p>
        </div>

        {/* Imagen en lg  */}
        <div className="hidden md:block w-[253px] h-[253px] relative">
          <Image
            src="/assets/images/inmobiliaria/yamile.png"
            alt="Yamile Durán"
            width={253}
            height={253}
            className="object-cover"
          />
        </div>

        {/* linea mitad */}
        <div className="hidden md:block h-[80%] border-l-2 border-white mx-6"></div>

        <div className="hidden md:flex flex-col justify-center space-y-4 p-6 flex-1">
          <p
            className="text-[30px] sm:text-[39px] md:text-[40px] lg:text-[45px] font-bold"
            style={{
              fontFamily: "HandelGothic",
              lineHeight: "1",
              background: "linear-gradient(to right, #FDC548, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {texts.paragraph}
          </p>

          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
            <p
              className="text-xl text-white font-bold"
              style={{
                fontFamily: "UniteaSans",
                lineHeight: "1",
              }}
            >
              {texts.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectProfile;
