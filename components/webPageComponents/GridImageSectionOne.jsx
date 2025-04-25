import React from "react";

function GridImageSectionOne() {
  return (
    <div className="h-auto">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web-page/1.jpg"
          alt="Interactive Web Platform for a Real Estate Business in the U.S."
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web-page/2.jpg"
            alt="Dynamic Website Redesign for a U.S.-Based Technology Company"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web-page/3.jpg"
            alt="Immersive 3D Web Experience for a National Sports Brand"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web-page/4.jpg"
          alt="Custom E-Commerce Site Designed for U.S. Fashion Retail"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridImageSectionOne;
