import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Certificates = () => {
  const images = [
    "/assets/images/certifications/certificadoProvicional.png",
    "/assets/images/certifications/certificadoProvicional.png",
    "/assets/images/certifications/certificadoProvicional.png",
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          swipe: true,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  };
  {
    /* Slider solo en dispositivos pequeños (sm) */
  }
  return (
    <div className="mt-[100px]">
      <div className="sm:hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-0">
              <Image
                src={src}
                alt={`Certificate ${index + 1}`}
                width={227.75}
                height={98}
                className="rounded-[20px] mx-auto" 
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/*  md y lg */}
      <div className="hidden sm:block">
        <div className="ContainerCertificates flex space-x-5 sm:space-x-5 overflow-x-auto scroll-smooth no-scrollbar md:!overflow-x-visible md:space-x-2 lg:justify-center">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-[80%] flex-shrink-0 sm:w-[45%] md:w-auto lg:flex-shrink"
            >
              <Image
                src={src}
                alt={`Certificate ${index + 1}`}
                width={227.75}
                height={98}
                className="rounded-[20px]"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
