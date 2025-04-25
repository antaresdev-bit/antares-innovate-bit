import React from "react";

function B2FintechGridOne() {
  return (
    <div className=" h-auto">
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/B2Fintech/1.jpg"
          alt="Real-Time Cryptocurrency Market Dashboard with Binance API Integration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-[1298px] mx-auto mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px] rounded-3xl overflow-hidden aspect-video ">
      <video
          src="https://storage.googleapis.com/antares-agency-rcs/2bfintech%20ejecutando.mp4"
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

export default B2FintechGridOne;
