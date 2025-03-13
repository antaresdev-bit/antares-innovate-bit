import React from "react";
import Image from "next/image";

function ConditionalCard() {
  return (
    <div className="w-full h-[109px] mt-[57px] bg-white rounded-[24px] flex items-center p-4 shadow-md relative">
      <div className="w-12 h-12 bg-[#FDC548] rounded-full flex items-center justify-center">
        <Image
          src="/assets/images/inmobiliaria/Vector.png"
          alt="Icon"
          width={24}
          height={24}
        />
      </div>
      <div className="ml-4">
        <h2
          className="text-lg font-bold text-black"
          style={{ fontFamily: "HandelGothic", fontSize: "25px" }}
        >
          Espacios que Inspiran
        </h2>
        <p
          className="text-sm text-gray-600"
          style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
        >
          Diseñamos arquitectura inteligente que optimiza cada metro y eleva la
          eficiencia.
        </p>
      </div>
    </div>
  );
}

export default ConditionalCard;
