"use client";

import { useLocale } from "next-intl";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

function InfoCard() {
  const locale = useLocale();
  const t = useTranslations("marketing");
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[1299px] bg-[#1C5DE9] rounded-[48px] md:p-10 p-6">
        <div className="w-full max-w-[1235px] bg-[#3874F5] rounded-[24px] p-6 md:p-8 text-white sm:bg-[#3874F5] ">
          <h2
            className="text-xl md:text-2xl font-bold mb-4 mt-[40px] leading-[40px]"
            style={{
              fontFamily: "HandelGothic",
              color: "white",
              fontSize: "40px",
            }}
          >
            {t("marketingText26")}
          </h2>
          <ul
            className="space-y-4 text-sm md:text-base mt-[40px] ml-[30px]  "
            style={{
              fontFamily: "UniteaSans",
              fontSize: "18px",
              color: "white",
            }}
          >
            <li>{t("marketingText27")}</li>
            <li>{t("marketingText28")}</li>
            <li>{t("marketingText29")}</li>
          </ul>
          <div className="flex items-center mt-10">
            <Image
              src="/assets/images/Gif Avion.gif"
              alt="Botón Animado"
              width={48}
              height={48}
              className=""
              unoptimized={true}
            />
            <Link href={`/${locale}/portafolio`} className="w-full sm:w-auto">
              <button
                className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px]  hover:bg-gray-200 transition duration-300 font-bold"
                style={{ fontFamily: "HandelGothic" }}
              >
                {t("marketingText30")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
