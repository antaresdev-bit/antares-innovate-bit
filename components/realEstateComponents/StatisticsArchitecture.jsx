
"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const statisticItems = [
  {
    title: "Años de experiencia",
    image: "/assets/images/statistics/+30.png",
    width: 60,
    height: 52,
  },
  {
    title: "Proyectos Nacionales e Internacionales",
    image: "/assets/images/statistics/world.png",
    width: 50,
    height: 52,
  },
  {
    title: "Proyectos Habilidades en Estructuracióny Viabilidad ",
    image: "/assets/images/statistics/+100.png",
    width: 70,
    height: 52,
  },
  {
    title: "Especialistas en Diseño Arquitectónico",
    image: "/assets/images/statistics/brain.png",
    width: 50,
    height: 52,
  },
];

function StatisticsArchitecture() {
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
            className="w-[239px] h-[240px] flex flex-col items-center justify-center rounded-full border-2 border-white text-white text-[25px] text-center p-4"
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

export default StatisticsArchitecture;


