import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";

function CardArchitecture() {
  const locale = useLocale();
  return (
    <div className="flex items-center justify-center  mt-[72px] s:mt-[72px] md:mt-[100px] lg:mt-[93px] ">
      <div className="w-full lg:w-[1298px] h-auto lg:h-[530.25px] bg-white rounded-3xl p-[33px]">
        <div className="w-full h-full bg-gray-200 rounded-3xl flex flex-col lg:flex-row">
          {/* Contenedor del video - Orden 1 en móvil, orden 2 en lg */}
          <div className="w-full lg:w-[617px] h-full rounded-3xl overflow-hidden flex items-center justify-center order-1 lg:order-2">
            <video
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/antares-agency-rcs/ArchitectureCard.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>

          <div className=" w-full lg:w-[617px] flex flex-col justify-center p-[33px] order-2 lg:order-1">
            <p
              className="text-sm text-[18px]"
              style={{
                fontFamily: "UniteaSans",
                color: "#0B0C28",
              }}
            >
              Diseño | Project Manager
            </p>
            <h2
              className="text-[24px] sm:text-[24px] md:text-[30px] lg:text-[35px] font-bold text-gray-900 leading-tight mt-[20px]"
              style={{
                fontFamily: "HandelGothic",
                color: "#0B0C28",
              }}
            >
              Gestión de proyectos sostenible y estratégica
            </h2>
            <p
              className="text-gray-700 mt-[20px]"
              style={{
                fontFamily: "UniteaSans",
                color: "#0B0C28",
                fontSize: "18px",
              }}
            >
              En Antares, revolucionamos la gestión de proyectos mediante
              metodologías innovadoras que optimizan procesos y desbloquean el
              máximo potencial de cada organización.
            </p>
            <p
              className="text-gray-700 mt-[20px]"
              style={{
                fontFamily: "UniteaSans",
                color: "#0B0C28",
                fontSize: "18px",
              }}
            >
              Nuestra metodología integra arquitectura, ingeniería y gestión
              para garantizar proyectos eficientes, sostenibles y alineados con
              los objetivos estratégicos de cada empresa.
            </p>

            <div className="flex items-center mt-10">
              <Image
                src="/assets/images/Gif Avion.gif"
                alt="Botón Animado"
                width={48}
                height={48}
                className=""
              />
              <Link
                href={`/${locale}/form-contact`}
                className="w-full sm:w-auto"
              >
                <button
                  className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px]  hover:bg-gray-200 transition duration-300 font-bold"
                  style={{ fontFamily: "HandelGothic" }}
                >
                  Obtén Asesoría
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardArchitecture;
