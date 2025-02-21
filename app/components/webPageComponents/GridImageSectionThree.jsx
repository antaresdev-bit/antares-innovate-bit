import React from "react";

function GridImageSectionThree() {
  return (
    <div className="container mx-auto px-5 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-[1298px] mx-auto mt-[40px]">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web page/Flyer Connor Mcgregor 3.png"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/web page/Mostrador Producto 2.png"
            alt="Render Punto de Venta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mt-10 rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/web page/Mostrador Producto 1.png"
          alt="Video Preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] mt-[40px]">
        <img
          src="/assets/images/web page/Mostrador Producto 3.png"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridImageSectionThree;
