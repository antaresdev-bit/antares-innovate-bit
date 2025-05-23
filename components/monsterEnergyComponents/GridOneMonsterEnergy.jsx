import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function GridOneMonsterEnergy() {
  return (
    <div className=" h-auto">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/monster-energy/stand-moto-cross.png"
          alt="Custom Event Stand Design for Monster Energy at a US Motocross Event"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 max-w-[1298px] mx-auto mb-[40px] ">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/monster-energy/flyer-connor-mcgregor.png"
            alt="Promotional Digital Campaign Flyer Design for Monster Energy USA featuring Connor McGregor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/monster-energy/render-punto-de-venta.png"
            alt="3D Render of Innovative Point of Sale Display Design for Monster Energy in US Retail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Video inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-[25px] rounded-3xl overflow-hidden aspect-video ">
        <video
          src="https://storage.googleapis.com/antares-agency-rcs/monsterGridOneVideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridOneMonsterEnergy;
