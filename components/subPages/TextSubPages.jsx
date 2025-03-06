import React from "react";

const TextSubPages = ({ title, subtitle, paragraph }) => {
  return (
    <div className="max-w-[933px] mx-auto lg:border-l md:border-l sm:border-l-0 border-white ">
      <div className="mb-2 " style={{ fontFamily: "HandelGothic" }}>
        <div className=" ">
          <h1 className="leading-[40px] sm:leading-[40px] md:leading-[45px] lg:leading-[48px] text-[33px] sm:text-[33px] md:text-[40px] lg:text-[45px] font-bold text-white ml-[0px] sm:ml-[0px] md:ml-[46px] lg:ml-[56px]">
            {title}
          </h1>
        </div>
        <div className="">
          <p
            className="mt-[32px] sm:mt-[32px] md:mt-[45px] lg:mt-[46px]   leading-[20px] text-[18px] text-white text-transparent bg-clip-text  ml-[0px] sm:ml-[0px] md:ml-[46px] lg:ml-[56px]"
            style={{ fontFamily: "UniteaSans" }}
          >
            {subtitle}
          </p>
        </div>
      </div>
      <div className=" ">
        <p
          className="font-extrabold text-white mt-[61px] sm:mt-[61px] md:mt-[39px] lg:mt-[71px]  leading-[25px] sm:leading-[35px]  md:leading-[33px] lg:leading-[35px]  tracking-tight  text-[20px] sm:text-[20px] md:text-[30px] lg:text-[30px]  ml-[0px] sm:ml-[0px] md:ml-[46px] lg:ml-[56px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default TextSubPages;
