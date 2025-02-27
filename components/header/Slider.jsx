import React from "react";
import Image from "next/image";

const images = [
  "/assets/images/7697be3c-f0ac-4adc-abaf-d83fc7ad9ce1 1.png",
  "/assets/images/Easy-Taxi-Logo-Horizontal-RGB.png",
  "/assets/images/Logo Fondo Oscuro  trasparente 1.png",
  "/assets/images/Vector.png",
  "/assets/images/aaa.png",
  "/assets/images/posto.png",
];

function Slider() {
  const duplicatedImages = [...images, ...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <div className=" flex justify-center items-center w-full px-4 sm:px-10 md:px-20 lg:px-44">
      <div className="overflow-hidden whitespace-nowrap h-28 flex items-center">
        <div
          className="inline-block animate-slide"
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {duplicatedImages.map((src, index) => (
            <div key={index} className="inline-flex items-center justify-center mx-2">
              <Image
                src={src}
                alt="Antares Agency Logo"
                width={90}
                height={98}
                className="rounded-lg"
                priority 
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-slide {
            animation: slide 30s linear infinite;
            transition: animation-play-state 0.1s; // Smooth transition for pause
          }
        `}</style>
      </div>
    </div>
  );
}

export default Slider;
