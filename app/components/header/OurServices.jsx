import React from "react";
import Image from "next/image";
import CreativityCard from "../cards/CreativityCard";
import TechnologyCard from "../cards/TechnologyCard";
import ConsultingPage from "../cards/ConsultingPage";

const OurServices = () => {
  return (
    <div className="relative bg-opacity-70">
      <div className="flex flex-col gap-4 items-left min-h-[20vh] py-24 px-16">
      <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] ml-[70px]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Nuestros
        </h1>
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] ml-[70px] inline"
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
