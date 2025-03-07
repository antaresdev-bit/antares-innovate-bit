import React from "react";

function GridImageSectionTwo() {
  return (
    <div className="h-auto">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web-page/5.jpg"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web-page/6.jpg"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web-page/8.png"
            alt="Render Punto de Venta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web-page/7.png"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>
      {/* otra seccion de imagenes---------------------------- */}
      {/* Imagen izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[25px] md:gap-[23px] sm:gap-[14px]">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl mt-[25px] overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web-page/9.jpg"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl mt-[25px] overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web-page/10.png"
            alt="Render Punto de Venta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full max-w-[1298px] mx-auto mt-[25px] mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web-page/12.jpg"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full max-w-[1298px] mx-auto mt-[25px] mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web-page/11.jpg"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridImageSectionTwo;
