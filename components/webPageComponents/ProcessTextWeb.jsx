import React from "react";
import { useTranslations } from "next-intl";

function ProcessTextWeb() {
  const t = useTranslations("webpageSubpage");
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:border-l border-white m-[161px]">
      <div className=" mb-2" style={{ fontFamily: "UniteaSans-bold" }}>
        <h1 className="leading-[40px] text-[30px] font-bold text-white mb-[-30px] ml-[40px]">
          {t("webpageText6")}
        </h1>

        <ul
          className="mt-[75px] leading-[40px] text-[18px]   text-white  text-transparent bg-clip-text ml-[70px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          <li>{t("webpageText7")}</li>
          <li>{t("webpageText8")}</li>
          <li>{t("webpageText9")}</li>
          <li>{t("webpageText10")}</li>
          <li>{t("webpageText11")}</li>
        </ul>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="text-[18px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          {t("webpageText12")}
        </p>
      </div>
    </div>
  );
}

export default ProcessTextWeb;
