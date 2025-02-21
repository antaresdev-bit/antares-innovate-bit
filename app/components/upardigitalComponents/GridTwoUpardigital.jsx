import React from "react";

function GridTwoUpardigital() {
  return (
    <div className="container mx-auto px-5 lg:px-20 mt-[160px]">
      {/* Imagen superior */}
      <div className="w-full max-w-[1298px] mx-auto mb-10 rounded-3xl overflow-hidden aspect-[1298/869]">
        <img
          src="/assets/images/upardigital/2023129 copia.jpg"
          alt="Stand Moto Cross"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Imagen inferior */}
      <div className="w-full max-w-[1298px] mx-auto mt-10 rounded-3xl overflow-hidden aspect-[1298/869]">
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
