import React from "react";
import WideVideoSection from "../media/WideVideoSection";

function FundacionGridTwo() {
  return (
    <div className=" h-auto">
    
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869] ">
        <video
          src="https://storage.googleapis.com/antares-agency-rcs/fundacion2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="w-full max-w-[1298px] mx-auto mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px] rounded-3xl overflow-hidden aspect-video ">
        <video
          src="https://storage.googleapis.com/antares-agency-rcs/fundacion4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>


      <div className="w-full max-w-[1298px] mx-auto mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px] rounded-3xl overflow-hidden aspect-video ">
        <video
          src="https://storage.googleapis.com/antares-agency-rcs/fundacion5.mp4"
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

export default FundacionGridTwo;

