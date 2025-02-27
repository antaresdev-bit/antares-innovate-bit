import React from "react";
import Image from "next/image";

function CardArchitecture() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full lg:w-[1298px] h-auto lg:h-[530.25px] bg-white rounded-3xl flex flex-col md:flex-col lg:flex-row p-6">
        <div className="w-full md:w-full lg:w-[617px] h-[466.25px] rounded-3xl overflow-hidden order-1 lg:order-2">
          <video
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/antares-agency-rcs/ArchitectureCard.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>

        <div className="w-full md:w-full lg:w-[617px] flex flex-col justify-center p-6 bg-gray-200 rounded-3xl order-2 lg:order-1 mt-6 lg:mt-0">
          <p
            className="text-sm mt-[10px]"
            style={{
              fontFamily: "UniteaSans",
              color: "#0B0C28",
              fontSize: "18px",
            }}
          >
            Diseño | Project Manager
          </p>
          <h2
            className="text-3xl font-bold text-gray-900 leading-tight mt-[20px]"
            style={{
              fontFamily: "HandelGothic",
              color: "#0B0C28",
              fontSize: "35px",
            }}
          >
            Gestión de proyectos <br /> sostenible y estratégica
          </h2>
          <p
            className="text-gray-700 mt-[10px]"
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
            className="text-gray-700 mt-[10px]"
            style={{
              fontFamily: "UniteaSans",
              color: "#0B0C28",
              fontSize: "18px",
            }}
          >
            Nuestra metodología integra arquitectura, ingeniería y gestión para
            garantizar proyectos eficientes, sostenibles y alineados con los
            objetivos estratégicos de cada empresa.
          </p>
          <div className="mt-[20px] sm:mb-[22px] flex items-center">
            <Image
              src="/assets/images/Boton avion animado 2.gif"
              alt="Botón Animado"
              width={80}
              height={80}
              className="mr-2"
            />
            <button className="w-[230px] h-[48px] rounded-[32px] bg-white text-black font-bold flex items-center justify-center">
              Obtén Asesoría
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardArchitecture;
