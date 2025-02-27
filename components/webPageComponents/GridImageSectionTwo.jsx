import React from "react";

function GridImageSectionTwo() {
  return (
    <div className="container mx-auto px-5 lg:px-20">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web page/Guitar 2 1.png"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web page/Flyer Connor Mcgregor 2.png"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web page/Render Punto de venta 2.png"
            alt="Render Punto de Venta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-10 rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web page/Mostrador Producto 1.png"
          alt="Video Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridImageSectionTwo;

