"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const statisticItems = [
  {
    title: "¿Cómo lo hacemos?",
    image: "/assets/images/marketing/icon2.png",
    width: 40,
    height: 40,
  },
  {
    title: "Estrategia digital a medida",
    image: "/assets/images/marketing/icon3.png",
    width: 40,
    height: 40,
  },
  {
    title: "Automatización inteligente",
    image: "/assets/images/marketing/icon4.png",
    width: 40,
    height: 40,
  },
  {
    title: "Generación de demanda:",
    image: "/assets/images/marketing/icon1.png",
    width: 40,
    height: 40,
  },
];

function MarketingStadicticts() {
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="p-4 ">
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex flex-wrap justify-center gap-[70px]">
        {statisticItems.map((item, index) => (
          <div
            key={index}
            className="w-[239px] h-[240px] flex flex-col items-center justify-center rounded-full border-2 border-white text-white text-[20px] text-center p-4"
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
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Slider {...sliderSettings} className="space-y-8">
          {statisticItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-center py-4 mb-[30px] last:mb-0"
            >
              <div className="w-[239px] h-[240px] flex flex-col items-center justify-center rounded-full border-2 border-white text-white text-[25px] text-center p-4 mx-auto">
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
      </div>
    </div>
  );
}

export default MarketingStadicticts;
