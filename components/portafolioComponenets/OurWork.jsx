"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useResponsive } from "../../hooks/useResponsive";
import { useTranslations } from "next-intl";
import WideVideoSection from "../portafolioComponenets/WideVideoSection";

const OurWork = () => {
  const locale = useLocale();
  const t = useTranslations("portafolio");
  const { isMobile } = useResponsive();

  const workItems = [
    {
      title: "Upardigital",
      description: <p>{t("descUpardigital")}</p>,
      video: (
        <Link href={`/${locale}/upardigital`}>
          <WideVideoSection src="/assets/videos/uparpreview_web.mp4" poster="/assets/images/portafolio/posters/uparpreview_poster.jpg"/>
        </Link>
      ),
    },
    {
      title: "Monster Energy",
      description: '"I am the Beast"',
      video: (
        <Link href={`/${locale}/monster-energy`}>
          <WideVideoSection src="/assets/videos/monsterpreview_web.mp4" poster="/assets/images/portafolio/posters/monsterpreview_poster.jpg"/>
        </Link>
      ),
    },
    {
      title: "Páginas Web",
      description: <p>{t("descPaginasWeb")}</p>,
      video: (
        <Link href={`/${locale}/web-page`}>
          <WideVideoSection src="/assets/videos/webpagespreview_web.mp4" poster="/assets/images/portafolio/posters/webpagespreview_poster.jpg"/>
        </Link>
      ),
    },
    {
      title: "Wersus",
      description: <p>{t("descWersus")}</p>,
      video: (
        <Link href={`/${locale}/wersus`}>
          <WideVideoSection src="/assets/videos/wersuspreview_web.mp4" poster="/assets/images/portafolio/posters/wersuspreview_poster.jpg"/>
        </Link>
      ),
    },
  ];

  return (
    <div className="relative bg-opacity-70">
      <div className="max-w-[1500px] mx-auto"
      data-aos="fade-up"
      >
        <div className="flex flex-col gap-4 items-start min-h-[20vh]  px-5 sm:px-6 md:px-10 lg:px-16 lg:w-[1500px] mr-[21px] sm:mr-[21px] md:mr-[49px] lg:mr-[73px]  mt-[160px] mb-[8px] ">
          <h1
            className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            {t("ourWorkText1")} <br /> {t("ourWorkText2")}
          </h1>
        </div>

        <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] max-w-[1500px] mx-auto mb-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center cursor-pointer ">
          {workItems.map((item, index) => (
            <div
              key={index}
              className={`relative max-w-[90%] sm:max-w-[400px] w-full h-auto min-h-[250px] rounded-[24.15px] overflow-hidden bg-gray-800 shadow-lg ${
                item.title === "Wersus" ? "lg:hidden" : ""
              }`}
              onClick={item.onClick ? item.onClick : undefined}
            >
              {item.video ? (
                item.video
              ) : (
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={50}
                    width={50}
                  />
                </div>
              )}

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">{item.title}</h3>
                {item.description && (
                  <div className="text-sm">{item.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Boton */}
        <div className="mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]"
        data-aos={`${!isMobile && "fade-up"}`}
        data-aos-delay={!isMobile && "50"}
        >
          <div className="flex justify-center mb-[160px] w-full">
            <div className="flex items-center justify-center w-full sm:w-auto">
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
                  className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold"
                  style={{ fontFamily: "HandelGothic" }}
                >
                  {t("ourWorkButtton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
