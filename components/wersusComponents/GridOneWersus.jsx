import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function GridOneWersus() {
  return (
    <div className="h-auto">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/wersus/Pagina Web Mockup.jpg"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/wersus/App Mockup 1.jpg"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/wersus/App Mockup 2.jpg"
            alt="Render Punto de Venta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/wersus/outdoor_advertising_billboard_mockup_a copia.png"
          alt="Video Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridOneWersus;