"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const marketingItems = [
  "/assets/images/inmobiliaria/b1.png",
  "/assets/images/inmobiliaria/b2.png",
  "/assets/images/inmobiliaria/b3.png",
  "/assets/images/inmobiliaria/b4.png",
  "/assets/images/inmobiliaria/b5.png",
];

const toggledImages = [
  "/assets/images/inmobiliaria/r1.png",
  "/assets/images/inmobiliaria/r2.png",
  "/assets/images/inmobiliaria/r3.png",
  "/assets/images/inmobiliaria/r4.png",
  "/assets/images/inmobiliaria/r5.png",
];

function InfiniteSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [showToggled, setShowToggled] = useState({});

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

  const handleImageClick = (index) => {
    setShowToggled((prev) => ({ ...prev, [index]: !prev[index] ?? true }));
  };

  return (
    <div className="w-full mt-[47px] sm:mt-[47px] md:mt-[56px] lgmt-[77px]">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        pagination={{ el: null }}
        modules={[Pagination]}
        className="h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setTotalPages(swiper.snapGrid.length)}
      >
        {marketingItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <div
                className="relative w-full h-0 pb-[65.5%] rounded-[24px] overflow-hidden"
                style={{
                  maxWidth: "694.52px", 
                }}
              >
                
                <Image
                  src={showToggled[index] ? toggledImages[index] : item}
                  alt={`Imagen ${index + 1}`}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => handleImageClick(index)}
                />

                {/* Imagen del ojo en la mitad */}
                {!showToggled[index] && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src="/assets/images/inmobiliaria/Ojo.gif"
                      alt="Ojo"
                      width={55.13} // Ajusta el tamaño según sea necesario
                      height={55.13}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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

export default InfiniteSlider;