import React from "react";

function GridLUparsistemGrid() {
  return (
    <div className="h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[14px] sm:gap-[14px] md:gap-[23px] lg:gap-[25px] max-w-[1298px] mx-auto">
        {/* Imagen izquierda */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/upairsistem/5.jpg"
            alt="Comprehensive University Branding Strategy for the U.S. Market"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/upairsistem/6.jpg"
            alt="Full-Service Branding Solutions for American Educational Institutions"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/upairsistem/7.jpg"
            alt="Visual Identity Development for Emerging Universities in the U.S."
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/upairsistem/8.jpg"
            alt="Higher Education Branding and Digital Transformation Strategies"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full rounded-3xl overflow-hidden aspect-[632/632]">
          <img
            src="/assets/images/upairsistem/9.jpg"
            alt="Professional Academic Branding for Universities and Colleges in America"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default GridLUparsistemGrid;
