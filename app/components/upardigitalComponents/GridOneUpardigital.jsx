import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function GridOneUpardigital() {
  return (
    <div className="container mx-auto px-5 lg:px-20  mb-0">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/upardigital/Frame 1.png"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/upardigital/41970844_8980791 copia.jpg"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/upardigital/41970818_8983405 copia.jpg"
            alt="Render Punto de Venta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-5 rounded-3xl overflow-hidden aspect-[1298/869]">
        <WideVideoSection
          src={
            "https://storage.googleapis.com/antares-agency-rcs/upardigitalVideoGrid.mp4"
          }
        />
      </div>
    </div>
  );
}

export default GridOneUpardigital;
