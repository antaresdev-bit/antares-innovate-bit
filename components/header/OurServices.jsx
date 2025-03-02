import React from "react";
import CreativityCard from "../cards/CreativityCard";
import TechnologyCard from "../cards/TechnologyCard";
import ConsultingPage from "../cards/ConsultingPage";

const OurServices = () => {
  return (
    <div className="relative bg-opacity-70">
      <div className="max-w-[1500px] mx-auto">
        <div className=" flex flex-col gap-4 items-left min-h-[20vh] py-24 px-5 sm:px-6 md:px-10 lg:px-16  lg:w-[1300px]  ">
          <h1
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF]  w-[400px] leading-[65px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            Nuestros <br /> Servicios
          </h1>
        </div>

        {/* <div className="border mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
          <CreativityCard />
        </div> */}

        <CreativityCard />

        <TechnologyCard />
        <ConsultingPage />
      </div>
    </div>
  );
};

export default OurServices;
