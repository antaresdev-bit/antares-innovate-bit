import React from "react";

const ConditionalTextAbout = ({ title, subtitle, gradient }) => {
  return (
    <div className="sm:block md:hidden lg:hidden mt-[98px]  p-[20px] mb-[100px]">
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
        <div className="w-[55px] h-[50px] bg-[#1C5DE9] rounded-full flex items-center justify-center">
          <img src="/assets/images/about/start.png" alt="Icon" className="w-[30px] h-[30px]" />
        </div>
        <div
          className="text-left text-2xl text-white font-semibold ml-[10px]"
          style={{ fontFamily: "UniteaSans", fontSize: "25px" }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default ConditionalTextAbout;