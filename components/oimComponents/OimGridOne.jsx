import React from "react";

function OimGridOne() {
  return (
    <div className=" h-auto">
      <div className="w-full max-w-[1298px] mx-auto mb-[14px] sm:mb-[14px] md:mb-[23px] lg:mb-[25px] rounded-3xl overflow-hidden aspect-[1298/869] ">
        <img
          src="/assets/images/oim/5.jpg"
          alt="Visual Mapping of Haitian Migration Patterns for U.S. Policy Analysis"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-[1298px] mx-auto mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px] rounded-3xl overflow-hidden aspect-video ">
        <img
          src="/assets/images/oim/6.jpg"
          alt="Interactive Migration Data Visualization for Humanitarian Agencies"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-[1298px] mx-auto mt-[14px] sm:mt-[14px] md:mt-[23px] lg:mt-[25px] rounded-3xl overflow-hidden aspect-video ">
        <img
          src="/assets/images/oim/7.jpg"
          alt="Migration Flow Visualizations Supporting U.S. Border Policy Decisions"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default OimGridOne;
