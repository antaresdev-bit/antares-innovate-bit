import React from "react";

const ConditionalTextArchitect = ({ title, subtitle, gradient, circleColor, iconSrc }) => {
  return (
    <div className="sm:block md:hidden lg:hidden mt-[100px] mb-[120px]">
      <div
        className="text-left text-6xl font-bold"
        style={{
          fontFamily: "HandelGothic",
          fontSize: "46px",
          background: gradient || "linear-gradient(to right, #B08D66, #FFFFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          backgroundSize: "100% 150%",
          backgroundPosition: "center",
          padding: "20px 0",
        }}
      >
        {title}
      </div>
      <div className="flex items-center mt-[10px]">
        <div
          className="w-[55px] h-[55px] min-w-[55px] min-h-[55px] rounded-full flex items-center justify-center mb-[10px]"
          style={{ backgroundColor: circleColor || "#FFFFFF" }}
        >
          {iconSrc && <img src={iconSrc} alt="icon" className="w-[35px] h-[35px]" />}
        </div>
        <div
          className="text-left text-2xl text-white font-semibold ml-3"
          style={{ fontFamily: "UniteaSans", fontSize: "25px" }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default ConditionalTextArchitect;


