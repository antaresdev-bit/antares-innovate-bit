import React from "react";
import Image from "next/image";

function WersusText() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-l border-white m-[160px] ">
      <div className=" mb-2" style={{ fontFamily: "UniteaSans-bold" }}>
        <h1 className="leading-[40px] text-[30px] font-bold text-white mb-[-30px] ml-[40px]">
          Proceso:
        </h1>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="text-[18px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          Desde Antares, hemos abordado este proyecto desde nuestra
          especialidad: consultoría, tecnología y creatividad, asegurando un
          enfoque estratégico e innovador.
        </p>
        <p
          className="text-[18px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          Este ecosistema está diseñado para optimizar procesos, mejorar la
          eficiencia operativa y facilitar herramientas que beneficien tanto a
          los conductores como a la industria en general. Con un diseño
          intuitivo y accesible, Wersus está en camino de convertirse en un
          referente dentro del sector.
        </p>
        <p
          className="text-[18px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          Seguimos en desarrollo, evolucionando y perfeccionando cada aspecto
          del proyecto para garantizar su impacto y funcionalidad en el mercado.
        </p>
      </div>
    </div>
  );
}

export default WersusText;
