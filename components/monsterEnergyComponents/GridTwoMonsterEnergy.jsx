import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function GridTwoMonsterEnergy() {
  return (
    <div className=" h-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-[1298px] mx-auto  mb-[40px]  ">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632] ">
          <img
            src="/assets/images/monster-energy/craneo.png"
            alt="Creative Design Asset: Skull Graphic for Monster Energy USA Campaign"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/monster-energy/guita-diseno.png"
            alt="3D Render Concept: Guitar-themed Point of Sale Design for Monster Energy US Retail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/monster-energy/guitar-2.png"
          alt="Monster Energy USA Marketing Activation"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Imagen medio */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/monster-energy/mostrador-producto.png"
          alt="Branded Product Display Counter for Monster Energy Beverages in US Stores"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/monster-energy/nevera.png"
          alt="Custom Branded Refrigerator Display for Monster Energy Drinks in US Retail"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridTwoMonsterEnergy;
