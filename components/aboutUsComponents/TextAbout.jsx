import React from "react";
import { useTranslations } from "next-intl";

function TextAbout() {
  const t = useTranslations("AboutUs");
  return (
    <div className="max-w-[1500px] mx-auto px-[22px] md:px-[105px] lg:px-[223px]  mt-[0px] sm:mt-[98px] md:mt-[118px] lg:mt-[151px]  ">
      <div className=" border-l-0 sm:border-l-0 md:border-l border-white ">
        <div className="  " style={{ fontFamily: "HandelGothic" }}>
          <h1
            className="ml-[0px] sm:ml-[0px] md:ml-[45px] lg:ml-[55px] text-[33px] sm:text-[33px] md:text-[40px] lg:text-[45px] mb-[61px] sm:mb-[61px] md:mb-[65px] lg:mb-[65px]"
            style={{
              background: "linear-gradient(to right, #4D86FF, #FFFFFF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t("AboutUsText3")}
          </h1>
        </div>

        <div className="ml-[0px] sm:ml-[0px] md:ml-[45px] lg:ml-[55px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] mb-[64px] mb-[64px] mb-[45px] mb-[60px] ">
          <p
            className="  leading-[30px] "
            style={{ fontFamily: "UniteaSans-medium", color: "white" }}
          >
            {t("AboutUsText4")}.
          </p>
        </div>

        <div className="ml-[0px] sm:ml-[0px] md:ml-[45px] lg:ml-[55px] text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[20px] mb-[40px] sm:mb-[40px] md:mb-[0px] lg:mb-[0px] leading-[20px] ">
          <p className="" style={{ fontFamily: "UniteaSans", color: "white" }}>
            {t("AboutUsText5")}
          </p>
        </div>
        <div className="ml-[0px] sm:ml-[0px] md:ml-[45px] lg:ml-[55px] text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[20px] mt-[38px] hidden sm:hidden md:hidden lg:block">
          <p className="" style={{ fontFamily: "UniteaSans", color: "white" }}>
            {t("AboutUsText6")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextAbout;
