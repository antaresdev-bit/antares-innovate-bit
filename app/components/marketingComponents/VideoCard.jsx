"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const videos = [
  "https://storage.googleapis.com/antares-agency-rcs/1-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/2-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/3-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/4-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/5-Marketing.mp4",
  "https://storage.googleapis.com/antares-agency-rcs/6-Marketing.mp4",
];

function VideoCard() {
  const swiperRef = useRef(null);

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      if (swiperRef.current.isEnd) {
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-none p-4">
      <div
        className="w-full bg-white rounded-[48px] overflow-hidden relative
        lg:w-[1298px] lg:h-[663px]  // Tamaño para lg
        md:w-[924px] md:h-[471.97px] // Tamaño para md
        sm:w-[370px] sm:h-[356.56px]  // Tamaño para sm
      "
      >
        <Swiper
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="width: 171.29px; height: 5px; background-color: ${
                className.includes("swiper-pagination-bullet-active")
                  ? "#1C5DE9"
                  : "#D9D9D9"
              }; margin: 0 5px; border-radius: 2.5px;"></span>`;
            },
          }}
          modules={[Pagination]}
          className="w-full h-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex justify-center items-center p-4">
                <div className="w-full h-full">
                  <video
                    className="w-full h-full object-cover rounded-[48px]"
                    controls
                    src={video}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VideoCard;
