import React from "react";
import Image from "next/image";

function UpardigitalText() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-l border-white m-[0px] ">
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
          Este ecosistema digital permite a los usuarios gestionar su progreso
          académico, acceder a contenido especializado y participar en
          evaluaciones dinámicas dentro de un entorno gamificado que motiva el
          aprendizaje continuo. Además, se diseñó con un enfoque de
          accesibilidad, asegurando que cada estudiante pueda aprovechar al
          máximo sus recursos educativos desde cualquier dispositivo.
        </p>
        <p
          className="text-[18px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          El impacto de Upardigital ha sido reconocido a nivel nacional,
          obteniendo el primer puesto en I+D+I dentro del Programa Órbita Cesar,
          un reconocimiento otorgado por la Cámara de Comercio bajo el respaldo
          del Ministerio de Ciencias de Colombia. Este premio destaca la
          contribución del proyecto en la transformación digital del sector
          educativo, consolidando a Uparsistem como una institución pionera en
          la implementación de tecnología para el aprendizaje virtual.
        </p>
      </div>
    </div>
  );
}

export default UpardigitalText;
