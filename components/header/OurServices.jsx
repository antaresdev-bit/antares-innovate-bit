import React from "react";
import CreativityCard from "../cards/CreativityCard";
import TechnologyCard from "../cards/TechnologyCard";
import ConsultingPage from "../cards/ConsultingPage";
import { useTranslations } from "next-intl";

const OurServices = () => {
  const t = useTranslations("landing");
  return (
    <div className="relative bg-opacity-70">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col gap-4 items-start min-h-[20vh]  px-5 sm:px-6 md:px-10 lg:px-16 lg:w-[1300px] mr-[21px] sm:mr-[21px] md:mr-[49px] lg:mr-[73px]  mt-[160px] mb-[30px]">
          <h1
            className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            {t("serviceText1")} <br /> {t("serviceText2")}
          </h1>
        </div>

        <CreativityCard />
        <TechnologyCard />
        <ConsultingPage />
      </div>
    </div>
  );
};

export default OurServices;
