import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function GridTwoMonsterEnergy() {
  return (
    <div className="container mx-auto px-5 lg:px-20  mb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-[1298px] mx-auto  mb-[40px] mt-[160px]">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632] ">
          <img
            src="/assets/images/monster-energy/craneo.png"
            alt="Flyer Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/monster-energy/guita-diseno.png"
            alt="Render Punto de Venta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/monster-energy/guitar-2.png"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Imagen medio */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/monster-energy/mostrador-producto.png"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/monster-energy/nevera.png"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridTwoMonsterEnergy;
