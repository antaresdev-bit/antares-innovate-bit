"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutUsBanner = () => {
  const t = useTranslations("AboutUs");
  return (
    <div
      className="relative w-full h-[457px] bg-gradient-to-r from-[#0046DC] to-[#4D86FF] px-4 sm:px-10"
      style={{ borderRadius: "0 0 48px 48px" }}
    >
      <div className="max-w-[1500px] mx-auto mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[35px] flex sm:items-center sm:justify-between h-full">
        {/* Versión Responsive: Solo imagen en móviles */}
        <div className="block sm:hidden w-full h-full flex justify-center items-center">
          <Image
            src="/assets/images/about/Logo Antares PNG.png"
            alt="Banner Responsive"
            width={239}
            height={194}
            objectFit="cover"
            priority
          />
        </div>

        <div className="hidden sm:block max-w-[50%] mt-[80px] sm:mt-[100px] ml-[50px]">
          <h1
            className="text-3xl sm:text-5xl font-bold text-white md:text-[46px] lg:text-[65px] mb-[20px] w-[320px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            {t("AboutUsText1")}
          </h1>

          <div className="flex items-center space-x-4">
            <div
              className="flex items-center justify-center rounded-full bg-white"
              style={{ width: "40px", height: "40px" }}
            >
              <Image
                src="/assets/images/about/start.png"
                alt="Icono"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>

            <p
              className="text-lg sm:text-xl text-white md:text-[25px] lg:text-[30px] w-[300px]"
              style={{ fontFamily: "UniteaSans" }}
            >
              {t("AboutUsText2")}
            </p>
          </div>
        </div>

        {/* Logo (visible solo en sm en adelante) */}
        <div className="hidden sm:block relative w-[485px] h-[102px] md:w-[485px] md:h-[102px] lg:w-[698px] lg:h-[146px] mt-[120px] ml-auto">
          <Image
            src="/assets/images/about/logo.png"
            alt="Antares Logo"
            width={698}
            height={146}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
