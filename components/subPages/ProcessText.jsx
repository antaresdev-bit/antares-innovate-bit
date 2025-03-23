import React from "react";
import { useTranslations } from "next-intl";

function ProcessText({ paragraphs = [] }) {
  const t = useTranslations("textSubpages");
  return (
    <div className="max-w-[933px] mx-auto lg:border-l md:border-l sm:border-l-0 border-white">
      <div className="mb-[37px] sm:mb-[37px] md:mb-[38px] lg:mb-[50px]">
        <div
          className="leading-[40px] text-[25px] sm:text-[25px] md:text-[21px] lg:text-[30px] font-bold text-white ml-[0px] sm:ml-[0px] md:ml-[35px] lg:ml-[40px]"
          style={{ fontFamily: "UniteaSans-bold" }}
        >
          {t("SubpagesText1")}
        </div>
      </div>

      <div className="sm:ml-[0px] md:ml-[35px] lg:ml-[40px]">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[17px] sm:text-[17px] md:text-[18px] lg:text-[18px] font-extrabold text-white leading-[35px] tracking-tight mb-[30px]"
            style={{ fontFamily: "UniteaSans" }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProcessText;
 
