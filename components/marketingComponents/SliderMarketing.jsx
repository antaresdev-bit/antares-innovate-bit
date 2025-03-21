"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

function SliderMarketing() {
  const t = useTranslations("marketing");
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const marketingItems = [
    {
      title: t("marketingText16"),
      subtitle: t("marketingText17"),
      image: "/assets/images/marketing/1.jpg",
    },
    {
      title: t("marketingText17"),
      subtitle: t("marketingText18"),
      image: "/assets/images/marketing/2.jpg",
    },
    {
      title: t("marketingText19"),
      subtitle: t("marketingText20"),
      image: "/assets/images/marketing/3.jpg",
    },
    {
      title: t("marketingText21"),
      subtitle: t("marketingText22"),
      image: "/assets/images/marketing/4.jpg",
    },
    {
      title: t("marketingText23"),
      subtitle: t("marketingText24"),
      image: "/assets/images/marketing/5.jpg",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setTotalPages(swiper.snapGrid.length);
    }
  }, []);

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="w-full ">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ el: null }}
        modules={[Pagination]}
        className="h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setTotalPages(swiper.snapGrid.length)}
      >
        {/* card  "Nuestro Modelo Integral"  */}
        <SwiperSlide>
          <div className=" w-[100%] sm:w-[396px] h-[473px] bg-white shadow-lg rounded-[48px] p-6 flex flex-col mx-auto border border-white relative">
            <div className="w-[110px] h-[110px] bg-blue-600 rounded-full flex items-center justify-center absolute top-[30px] left-6 shadow-md">
              <Image
                src="/assets/images/marketing/card vector.png"
                alt="Ícono"
                width={64}
                height={64}
              />
            </div>
            <h3
              className="text-xl font-bold mt-[150px] text-black"
              style={{
                fontFamily: "HandelGothic",
                fontSize: "45px",
                lineHeight: "1",
              }}
            >
              {t("marketingText15")}
            </h3>
          </div>
        </SwiperSlide>

        {/* Resto de las cards */}
        {marketingItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[100%] sm:w-[396px] h-[473px] bg-none shadow-lg rounded-[48px] p-4 flex flex-col mx-auto border border-white"
              style={{ outline: "0.5px solid white", outlineOffset: "-15px" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={350}
                height={226}
                className="rounded-[24px]"
              />
              <h3
                className="text-xl font-bold mt-6"
                style={{
                  fontFamily: "HandelGothic",
                  color: "white",
                  fontSize: "26px",
                  marginLeft: "10px",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-600 mt-10"
                style={{
                  fontFamily: "UniteaSans",
                  color: "white",
                  fontSize: "18px",
                  marginLeft: "10px",
                }}
              >
                {item.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Indicadores de paginación personalizados sincronizados */}
      <div className="flex sm:justify-start justify-center space-x-2 mt-4 mb-[35px] sm:ml-[10px] ml-0">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border border-white ${
              index === activeIndex ? "bg-white" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>

      {/* Controles de navegación */}
      <div className="relative flex items-center justify-start w-full mt-4">
        <div className="absolute left-0 flex space-x-4 z-10 hidden sm:flex">
          <button
            onClick={prevSlide}
            className="border border-white p-3 rounded-full bg-opacity-80 bg-black hover:bg-opacity-100 transition"
          >
            <FaChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="border border-white p-3 rounded-full bg-opacity-80 bg-black hover:bg-opacity-100 transition"
          >
            <FaChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderMarketing;
