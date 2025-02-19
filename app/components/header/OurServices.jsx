import React from "react";
import CreativityCard from "../cards/CreativityCard";
import TechnologyCard from "../cards/TechnologyCard";
import ConsultingPage from "../cards/ConsultingPage";

const OurServices = () => {
  return (
    <div className="relative bg-opacity-70">
      <div className=" flex flex-col gap-4 items-left min-h-[20vh] py-24 px-5 sm:px-6 md:px-10 lg:px-16 sm:ml-[20px] md:ml-[40px] lg:ml-[70px] lg:w-[1300px]">
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Nuestros
        </h1>
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] inline"
          style={{ fontFamily: "HandelGothic" }}
        >
          Servicios
        </h1>
      </div>

      <CreativityCard />
      <TechnologyCard />
      <ConsultingPage />
    </div>
  );
};

export default OurServices;
