import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useTranslations } from "next-intl";

function CardArchitecture() {
  const t = useTranslations("realEstate");
  const locale = useLocale();
  return (
    <div className="flex items-center justify-center  mt-[72px] s:mt-[72px] md:mt-[100px] lg:mt-[93px] ">
      <div className="w-full lg:w-[1298px] h-auto lg:h-[530.25px] bg-white rounded-3xl p-[33px]">
        <div className="w-full h-full bg-gray-200 rounded-3xl flex flex-col lg:flex-row">
         
          <div className="w-full lg:w-[617px] h-full rounded-3xl overflow-hidden flex items-center justify-center order-1 lg:order-2">
            <video
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/antares-agency-rcs/ArchitectureCard.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>

          <div className=" w-full lg:w-[617px] flex flex-col justify-center p-[33px] order-2 lg:order-1">
            <p
              className="text-sm text-[18px]"
              style={{
                fontFamily: "UniteaSans",
                color: "#0B0C28",
              }}
            >
              {t("realEstText8")}
            </p>
            <h2
              className="text-[24px] sm:text-[24px] md:text-[30px] lg:text-[35px] font-bold text-gray-900 leading-tight mt-[20px]"
              style={{
                fontFamily: "HandelGothic",
                color: "#0B0C28",
              }}
            >
              {t("realEstText9")}
            </h2>
            <p
              className="text-gray-700 mt-[20px]"
              style={{
                fontFamily: "UniteaSans",
                color: "#0B0C28",
                fontSize: "18px",
              }}
            >
              {t("realEstText10")}
            </p>
            <p
              className="text-gray-700 mt-[20px]"
              style={{
                fontFamily: "UniteaSans",
                color: "#0B0C28",
                fontSize: "18px",
              }}
            >
              {t("realEstText11")}
            </p>

            <div className="flex items-center mt-10">
              <Image
                src="/assets/images/Gif Avion.gif"
                alt="Botón Animado"
                width={48}
                height={48}
                className=""
              />
              <Link
                href={`/${locale}/form-contact`}
                className="w-full sm:w-auto"
              >
                <button
                  className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px]  hover:bg-gray-200 transition duration-300 font-bold"
                  style={{ fontFamily: "HandelGothic" }}
                >
                  {t("realEstText12")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardArchitecture;
