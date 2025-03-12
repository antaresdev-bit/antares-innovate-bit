"use client";

import { useLocale } from "next-intl";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function InfoCard() {
  const locale = useLocale();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[1299px] bg-[#1C5DE9] rounded-[48px] md:p-10 p-6">
        <div className="w-full max-w-[1235px] bg-[#3874F5] rounded-[24px] p-6 md:p-8 text-white sm:bg-[#3874F5] ">
          <h2
            className="text-xl md:text-2xl font-bold mb-4 mt-[40px] leading-[40px]"
            style={{
              fontFamily: "HandelGothic",
              color: "white",
              fontSize: "40px",
            }}
          >
            ¿Por qué elegir Antares?
          </h2>
          <ul
            className="space-y-4 text-sm md:text-base mt-[40px] ml-[30px]  "
            style={{
              fontFamily: "UniteaSans",
              fontSize: "18px",
              color: "white",
            }}
          >
            <li>
              Diseñamos arquitecturas inteligentes que optimizan cada proceso y
              elevan la eficiencia operativa.
            </li>
            <li>
              Expertos en transformación digital:Aceleramos la ejecución de
              proyectos para que las ideas se materialicen con rapidez y
              eficacia.
            </li>
            <li>
              Decisiones basadas en datos: Cada acción que emprendemos está
              respaldada por análisis exhaustivos orientados al crecimiento
              sostenible.
            </li>
          </ul>
          <div className="flex items-center mt-10">
            <Image
              src="/assets/images/Gif Avion.gif"
              alt="Botón Animado"
              width={48}
              height={48}
              className=""
            />
            <Link href={`/${locale}/portafolio`} className="w-full sm:w-auto">
              <button
                className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px]  hover:bg-gray-200 transition duration-300 font-bold"
                style={{ fontFamily: "HandelGothic" }}
              >
                Ver Portafolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
