import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Importa el módulo Autoplay
import "swiper/swiper-bundle.css"; // Importa los estilos de Swiper

function Certificates() {
  const images = [
    "/assets/images/certifications/1.png",
    "/assets/images/certifications/2.png",
    "/assets/images/certifications/3.png",
    "/assets/images/certifications/4.png",
    "/assets/images/certifications/5.png",
    "/assets/images/certifications/6.png",
    "/assets/images/certifications/7.png",
  ];

  return (
    <div className="w-[738.45px] h-[98px]  ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={28}
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            spaceBetween: 24,
          },
          768: {
            spaceBetween: 24,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Certificado ${index + 1}`}
              className="w-[227.75px] h-[98px] rounded-[12px] backdrop-blur-[10px]"
              style={{
                backgroundColor: "rgba(5, 12, 28, 0.24)", 
                border: "1px solid rgba(255, 255, 255, 0.1)", 
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Certificates;
