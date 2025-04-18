import React from "react";
import Image from "next/image";

const images = [
  "/assets/images/slider/a.png",
  "/assets/images/slider/b.png",
  "/assets/images/slider/c.png",
  "/assets/images/slider/d.png",
  "/assets/images/slider/e.png",
  "/assets/images/slider/f.png",
  "/assets/images/slider/g.png",
  "/assets/images/slider/h.png",
  "/assets/images/slider/i.png",
  "/assets/images/slider/j.png",
  "/assets/images/slider/k.png",
  "/assets/images/slider/l.png",
  "/assets/images/slider/m.png",
  "/assets/images/slider/n.png",
];

function Slider() {
  const duplicatedImages = Array(7).fill(images).flat();

  return (
    <div className="flex justify-center items-center w-full px-4 sm:px-10 md:px-20 lg:px-44 mt-[40px]] md:mt-[80px] lg:mt-[90px] mb-[40px] md:mb-[80px] lg:mb-[90px] ">
      <div className="overflow-hidden whitespace-nowrap flex items-center">
        <div
          className="inline-block animate-slide"
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {duplicatedImages.map((src, index) => (
            <div key={index} className="inline-flex items-center justify-center mx-6 ">
              <Image
                src={src}
                alt="Antares Agency Logo"
                width={100}
                height={104} 
                className="rounded-lg object-cover w-auto h-[74px] md:h-[84px] lg:h-[104px]"
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
          }
        `}</style>
      </div>
    </div>
  );
}

export default Slider;
