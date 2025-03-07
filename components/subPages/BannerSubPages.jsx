import React from "react";
import WideVideoSection from "../media/WideVideoSection";

const BannerTest = ({ videoUrl, title, subtitle, textPosition, ColorText = "linear-gradient(to right, #63B6DF, #FFFFFF)" }) => {
  const BannerText = ({ size }) => (
    <div
      className={`absolute bottom-8 ${
        textPosition === "center"
          ? "left-1/2 transform -translate-x-1/2"
          : "left-8"
      } text-white p-4`}
    >
      <h2
        className={`${size} font-bold`}
        style={{
          fontFamily: "HandelGothic",
          background: ColorText,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          backgroundSize: "100% 150%",
          backgroundPosition: "center",
          padding: "20px 0",
        }}
      >
        {title}
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
        {subtitle}
      </p>
    </div>
  );

  return (
    <div className="relative w-full">
      <div className="rounded-b-[48px] overflow-hidden relative">
        <WideVideoSection src={videoUrl} />
        <div className="hidden lg:block">
          <BannerText size="text-lg md:text-xl lg:text-[65px]" />
        </div>
        <div className="hidden md:block lg:hidden">
          <BannerText size="text-lg md:text-[45px]" />
        </div>
      </div>
    </div>
  );
};

export default BannerTest;
