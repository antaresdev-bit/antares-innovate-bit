import React from "react";

function ProcessTextWeb() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:border-l border-white m-[161px]">
      <div className=" mb-2" style={{ fontFamily: "UniteaSans-bold" }}>
        <h1 className="leading-[40px] text-[30px] font-bold text-white mb-[-30px] ml-[40px]">
          ¿Qué hace únicas nuestras páginas web?
        </h1>

        <ul
          className="mt-[75px] leading-[40px] text-[18px]   text-white  text-transparent bg-clip-text ml-[70px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          <li>Diseño UI/UX centrado en el usuario</li>
          <li>Estructuras responsivas y adaptables a cualquier dispositivo</li>
          <li>Interactividad avanzada y experiencias dinámicas</li>
          <li>Integración de elementos 3D y animaciones fluidas</li>
          <li>Optimización para velocidad, SEO y accesibilidad</li>
        </ul>
      </div>
      <div className="space-y-6 ml-[40px]">
        <p
          className="text-[18px] font-extrabold text-white leading-[35px] tracking-tight mt-[40px]"
          style={{ fontFamily: "UniteaSans" }}
        >
          Cada proyecto es desarrollado con herramientas de vanguardia y
          metodologías ágiles, asegurando que la web de nuestros clientes no
          solo luzca increíble, sino que también convierta y posicione. Nos
          especializamos en la construcción de plataformas digitales que
          potencian la identidad de marca y maximizan la presencia online.
        </p>
      </div>
    </div>
  );
}

export default ProcessTextWeb;

