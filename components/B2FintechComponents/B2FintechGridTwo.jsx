import React from "react";

function B2FintechGridTwo() {
  return (
    <div className="h-auto">
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/B2Fintech/2.jpg"
          alt="B2Fintech"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/B2Fintech/3.jpg"
          alt="B2Fintech"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[14px] sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/B2Fintech/4.jpg"
            alt="B2Fintech"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default B2FintechGridTwo;
