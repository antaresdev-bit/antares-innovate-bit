"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";

function StatisticsArchitecture() {
  const t = useTranslations("realEstate");

  const statisticItems = [
    {
      title: t("realEstText4"),
      image: "/assets/images/statistics/+30.png",
    },
    {
      title: t("realEstText5"),
      image: "/assets/images/statistics/world.png",
    },
    {
      title: t("realEstText6"),
      image: "/assets/images/statistics/+100.png",
    },
    {
      title: t("realEstText7"),
      image: "/assets/images/statistics/brain.png",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]">
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex flex-wrap justify-center gap-[20px] lg:gap-10">
        {statisticItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-full border-[1px] border-white text-white text-center p-4 
              w-[165.46px] h-[166.15px] sm:w-[165.46px] sm:h-[166.15px] md:w-[187.31px] md:h-[188.09px] lg:w-[239px] lg:h-[240px]"
          >
            <img
              src={item.image}
              alt={item.title}
              width={item.width}
              height={item.height}
              className="mb-4"
            />
            <p className="text-[10px] sm:text-[10px] md:text-[18px] lg:text-[20px] ">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Slider {...sliderSettings} className="space-y-8">
          {statisticItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-center py-[20px] mb-[30px] last:mb-0"
            >
              <div
                className="flex flex-col items-center justify-center rounded-full border-[1px] border-white text-white text-[15px] sm:text-[15px] md:text-[18px] lg:text-[20px]  text-center p-4 mx-auto 
                w-[165.46px] h-[166.15px] sm:w-[165.46px] sm:h-[166.15px] md:w-[187.31px] md:h-[188.09px] lg:w-[239px] lg:h-[240px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="mb-4"
                />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
        {/* Agregar la imagen debajo del Slider en móvil */}
        <div className="flex justify-center mt-4">
          <img
            src="/assets/images/statistics/Swipe.png"
            alt="Swipe"
            width="68.58px"
            height="22px"
          />
        </div>
      </div>
    </div>
  );
}

export default StatisticsArchitecture;
