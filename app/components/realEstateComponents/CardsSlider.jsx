"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const initialImages = [
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

const ojoGif = "/assets/images/inmobiliaria/Ojo.gif";

const InfiniteSlider = () => {
  const [offset, setOffset] = useState(0);
  const [images, setImages] = useState(initialImages);
  const sliderRef = useRef(null);

  const prevSlide = () => {
    setOffset((prevOffset) => (prevOffset === 0 ? -400 : prevOffset + 100));
  };

  const nextSlide = () => {
    setOffset((prevOffset) => (prevOffset === -400 ? 0 : prevOffset - 100));
  };

  const handleImageClick = (index) => {
    setImages((prevImages) =>
      prevImages.map((img, i) =>
        i === index
          ? img === initialImages[i]
            ? toggledImages[i]
            : initialImages[i]
          : img
      )
    );
  };

  return (
    <>
      <div className=" flex flex-col gap-4 items-left min-h-[20vh] py-24 px-5 sm:px-6 md:px-10 lg:px-16 sm:ml-[20px] md:ml-[20px] lg:mr-[10px] lg:w-[1300px] ">
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Algunos de
        </h1>
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] inline"
          style={{ fontFamily: "HandelGothic" }}
        >
          Nuestros Proyectos
        </h1>
      </div>
      {/* slider */}
      <div className="flex flex-col items-center text-white bg-[none]  overflow-hidden">
        <div className="relative mt-[20px] w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex whitespace-nowrap"
            style={{
              transform: `translateX(${offset}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full lg:w-[683.84px] lg:h-[456.71px] px-2 flex-shrink-0 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={683.84}
                  height={456.71}
                  className="rounded-lg object-cover w-full h-full transition-all duration-300 ease-in-out"
                />

                {initialImages.includes(src) && (
                  <Image
                    src={ojoGif}
                    alt="Ojo"
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="sm:mb-[200px] md:mr-[700px] lg:mr-[1300px] bottom-4 left-4 flex flex-col items-center w-[150px] lg:w-[150px] md:w-[100px] sm:w-[50px] h-[100px] space-y-2">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setOffset(-index * 100)}
                className={`h-3 w-3 rounded-full border border-white ${
                  offset === -index * 100 ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="border border-white p-3 rounded-full"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="border border-white p-3 rounded-full"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
