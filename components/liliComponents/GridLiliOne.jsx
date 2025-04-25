import React from "react";

function GridLiliOne() {
  return (
    <div className="h-auto">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/lili-estevez/5.jpg"
          alt="Professional Audiovisual Production for Music Videos in the U.S."
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid adaptable */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[14px] sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <video
            src="https://storage.googleapis.com/antares-agency-rcs/2-LiliEstevez.mp4"
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
            src="https://storage.googleapis.com/antares-agency-rcs/3-LiliEstevez.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen inferior (se mantiene en grid) */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/lili-estevez/6.jpg"
            alt="High-End Visual Effects and Motion Graphics for Latin Music Projects"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default GridLiliOne;
