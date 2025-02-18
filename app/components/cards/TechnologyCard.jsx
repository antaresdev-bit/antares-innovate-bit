import React from "react";
import Image from "next/image";

function TechnologyCard() {
  const tecnologiaPortadaSrc = "/assets/images/Tecnologia Portada.png";

  return (
    <div className="relative mx-5 md:mx-[100px] mb-12 p-[1px] bg-transparent rounded-[48px] border border-white bg-[#f6f2f2]">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-transparent rounded-[48px] p-8 md:p-[32px] text-white">
        <div className="w-full md:w-full lg:w-1/2 flex justify-center order-first mb-4 md:mb-4 lg:mb-0">
          <div className="relative lg:mr-[200px]">
            <Image
              src={tecnologiaPortadaSrc}
              alt="Creatividad"
              width={400}
              height={400}
              className="rounded-lg md:hidden"
            />

            <Image
              src="/assets/images/Tecnologia tablet.png"
              alt="Creatividad Tablet"
              width={400}
              height={400}
              className="rounded-lg hidden md:block lg:hidden"
            />

            <Image
              src={tecnologiaPortadaSrc}
              alt="Creatividad Desktop"
              width={400}
              height={400}
              className="rounded-lg hidden md:hidden lg:block"
            />
          </div>
        </div>

        <div className="w-full md:w-full lg:w-1/2 border border-white rounded-[48px] lg:w-[771px] h-auto md:h-[396px] flex flex-col justify-center order-last bg-[#ECECEC]">
          <h2
            className="font-bold mb-4 ml-10"
            style={{
              fontFamily: "HandelGothic",
              fontSize: "40px",
              color: "#0B0C28",
            }}
          >
            Tecnología
          </h2>
          <p
            className="mb-4 ml-5"
            style={{
              fontFamily: "UniteaSans",
              fontSize: "18px",
              color: "#0B0C28",
            }}
          >
            Aplicamos innovación y tecnología para potenciar el crecimiento:
          </p>
          <ul
            className="list-disc pl-5 mb-6 space-y-2 ml-5"
            style={{
              fontFamily: "UniteaSans",
              fontSize: "18px",
              color: "#0B0C28",
            }}
          >
            <li>Desarrollo web y mobile, con UX/UI optimizado.</li>
            <li>
              Creación de software a medida y plataformas digitales escalables
            </li>
            <li>
              Implementación de automatizaciones e Inteligencia Artificial para
              optimizar procesos.
            </li>
          </ul>
          <button className=" sm:mb-5  w-[230px] h-[48px] rounded-[32px] bg-white text-black font-bold flex items-center justify-center ml-5">
            <Image
              src="/assets/images/Boton avion animado 1.png"
              alt="Botón Animado"
              width={24}
              height={24}
              className="mr-2"
            />
            Ver Portafolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;
