import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function GridTwoWersus() {
  return (
    <div className="h-auto">
      {/* Video inferior */}
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-video">
        <video
          src="https://storage.googleapis.com/antares-agency-rcs/Video%20Banner%20Wersus.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor de videos con separaciones responsivas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Video izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <video
            src="https://storage.googleapis.com/antares-agency-rcs/Video%20demo%201.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <video
            src="https://storage.googleapis.com/antares-agency-rcs/Video%20Demo%202.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/wersus/Desarrollo Mockup.png"
          alt="Route Planner App for CDL Drivers in the U.S. Market"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridTwoWersus;
