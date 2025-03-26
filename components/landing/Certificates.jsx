import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Importa el módulo Autoplay
import "swiper/swiper-bundle.css"; // Importa los estilos de Swiper

function Certificates() {
  const images = [
    "/assets/images/certifications/a.png",
    "/assets/images/certifications/b.png",
    "/assets/images/certifications/c.png",
    "/assets/images/certifications/d.png",
    "/assets/images/certifications/e.png",
    "/assets/images/certifications/f.png",
    "/assets/images/certifications/g.png",
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
