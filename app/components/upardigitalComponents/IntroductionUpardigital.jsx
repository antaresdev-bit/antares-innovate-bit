import React from "react";
import Image from "next/image";

function IntroductionUpardigital() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-l border-white lg:m-[161px] md:m-[161px] sm:m-[50px]">
      <div className=" mb-2" style={{ fontFamily: "HandelGothic" }}>
        <h1 className="leading-[40px] text-[45px] font-bold text-white mb-[-30px] ml-[40px]">
          Innovación y Tecnología para la Educación del Futuro
        </h1>
        <p
          className="mt-[75px] leading-[40px] text-[18px]   text-white  text-transparent bg-clip-text ml-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          UI UX | Pitch | Prototipado
        </p>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="text-[30px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          Diseñamos Upardigital, una plataforma educativa innovadora pensada
          para los estudiantes de Uparsistem, con una experiencia UI/UX
          intuitiva y adaptada al público joven. La plataforma no solo brinda
          acceso a cursos virtuales y material académico, sino que también
          integra un sistema de navegación fluido, herramientas de aprendizaje
          autónomo y módulos interactivos que facilitan el acceso a la educación
          de manera flexible y escalable.
        </p>
      </div>
    </div>
  );
}

export default IntroductionUpardigital;
