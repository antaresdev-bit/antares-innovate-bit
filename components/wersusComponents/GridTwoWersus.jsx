import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function GridTwoWersus() {
  return (
    <div className="container mx-auto px-5 lg:px-20  mb-0">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10  rounded-3xl overflow-hidden aspect-[1800/1000] flex items-center justify-center">
        <WideVideoSection
          src={
            "https://storage.googleapis.com/antares-agency-rcs/Video%20Banner%20Wersus.mp4"
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-[1298px] mx-auto mb-[30px]">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <WideVideoSection
            src={
              "https://storage.googleapis.com/antares-agency-rcs/Video%20demo%201.mp4"
            }
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <WideVideoSection
            src={
              "https://storage.googleapis.com/antares-agency-rcs/Video%20Demo%202.mp4"
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/wersus/Desarrollo Mockup.png"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default GridTwoWersus;
