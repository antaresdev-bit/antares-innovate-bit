import React from "react";

function GridTwoUpardigital() {
  return (
    <div className="h-auto">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-[25px] lg:mb-[25px] md:mb-[23px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/upardigital/2023129 copia.jpg"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-[25px] lg:mt-[25px] md:mt-[23px] rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/upardigital/16215582_455-pm-6214-01-mockup copia.jpg"
          alt="Video Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default GridTwoUpardigital;