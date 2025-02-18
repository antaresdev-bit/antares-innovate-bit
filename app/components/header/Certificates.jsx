import React, { useState, useRef } from "react";
import Image from "next/image";

const Certificates = () => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [
    "/assets/images/certifications/certificadoProvicional.png",
    "/assets/images/certifications/certificadoProvicional.png",
    "/assets/images/certifications/certificadoProvicional.png",
  ];

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <div className="mt-[100px]">
      <div
        className="ContainerCertificates flex space-x-5 sm:space-x-5 overflow-x-auto scroll-smooth no-scrollbar md:!overflow-x-visible md:space-x-2 lg:justify-center"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
  );
};

export default Certificates;
