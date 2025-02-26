import React from "react";

const ConditionalTextMarketing = ({ title, subtitle, gradient }) => {
  return (
    <div className="sm:block md:hidden lg:hidden mt-[100px] ml-[20px] p-[20px]">
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
      <div
        className="text-left text-2xl mt-[10px] text-white font-semibold"
        style={{ fontFamily: "UniteaSans", fontSize: "25px" }}
      >
        {subtitle}
      </div>
    </div>
  );
};

export default ConditionalTextMarketing;

