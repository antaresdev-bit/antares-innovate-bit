import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function Banner() {
  const videoUrl =
    "https://storage.googleapis.com/antares-agency-rcs/Paginas%20web%20Preview.mp4";

  const BannerText = () => (
    <div className="absolute bottom-[8px] left-[100px] text-white">
      <h2
        className="text-lg md:text-xl lg:text-[65px] font-bold"
        style={{
          fontFamily: "HandelGothic",
          background: "linear-gradient(to right, #63B6DF, #FFFFFF)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          backgroundSize: "100% 150%",
          backgroundPosition: "center",
          padding: "20px 0",
        }}
      >
        Diseño y Desarrollo Web
      </h2>
      <p
        className="text-sm md:text-md lg:text-lg"
        style={{
          fontFamily: "UniteaSans",
          fontSize: "30px",
          backgroundSize: "100% 150%",
          backgroundPosition: "center",
          padding: "15px 0",
        }}
      >
        Innovación y Experiencia de Usuario de Alto Impacto
      </p>
    </div>
  );

  return (
    <div className="relative w-full">
      <div className="rounded-b-[48px] overflow-hidden relative">
        <WideVideoSection src={videoUrl} />

        <div className="hidden lg:block">
          <BannerText />
        </div>

        {/* Texto para pantallas medianas (md) */}
        <div className="hidden md:block lg:hidden">
          <div className="absolute bottom-[8px] left-8 text-white p-4">
            <h2
              className="text-lg  md:text-[45px] font-bold"
              style={{
                fontFamily: "HandelGothic",
                background: "linear-gradient(to right, #63B6DF, #FFFFFF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "100% 150%",
                backgroundPosition: "center",
                padding: "20px 0",
              }}
            >
              Diseño y Desarrollo Web
            </h2>
            <p
              className="text-sm md:text-md"
              style={{
                fontFamily: "UniteaSans",
                fontSize: "25px",
                backgroundSize: "100% 150%",
                backgroundPosition: "center",
                padding: "15px 0",
              }}
            >
              Innovación y Experiencia de Usuario de Alto Impacto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
