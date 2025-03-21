import React from "react";
import { useTranslations } from "next-intl";

function IntroductionMarketing() {
  const t = useTranslations("marketing");
  return (
    <div className="max-w-[1500px] mx-auto px-[22px] md:px-[105px] lg:px-[223px]   ">
      <div className=" border-l-0 sm:border-l-0 md:border-l border-white ">
        <div className="   " style={{ fontFamily: "HandelGothic" }}>
          <h1
            className="leading-[30px] sm:leading-[30px] md:leading-[38px] lg:leading-[45px] ml-[0px] sm:ml-[0px] md:ml-[45px] lg:ml-[55px] text-[33px] sm:text-[33px] md:text-[40px] lg:text-[45px] mb-[67px]"
            style={{
              background: "linear-gradient(to right, #4D86FF, #FFFFFF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t("marketingText31")}
          </h1>
        </div>

        <div className="ml-[0px] sm:ml-[0px] md:ml-[45px] lg:ml-[55px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] mb-[64px] mb-[64px] mb-[45px] mb-[60px] ">
          <p
            className="  leading-[30px] "
            style={{ fontFamily: "UniteaSans-medium", color: "white" }}
          >
            {t("marketingText32")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroductionMarketing;
