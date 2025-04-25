import React from "react";

function GridPoliOne() {
  return (
    <div className="h-auto">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/politecnico/3.png"
          alt="Innovative Digital Campaigns for American Youth Engagement"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/politecnico/4.png"
          alt="Digital Marketing Solutions for U.S. Audiences"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridPoliOne;
