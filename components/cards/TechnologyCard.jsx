import React from "react";
import Image from "next/image";

function TechnologyCard() {
  const tecnologiaPortadaSrc =
    "/assets/images/Portadas Servicios-home/Tecnologia Portada (3).png";

  return (
    <div className="relative mx-5 md:mx-[100px] mb-12 p-[1px]  rounded-[48px] border border-white bg-[#FFFFFF]">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-transparent rounded-[24px] p-8 md:p-[32px] text-white">
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
              src="/assets/images/Portadas Servicios-home/Tecnologia Portada (4).png"
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
            className="font-bold mb-[37px] ml-10"
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
          <div className=" mb-[22px]  sm:mb-[22px] flex items-center">
            <Image
              src="/assets/images/Boton avion animado 2.gif"
              alt="Botón Animado"
              width={80}
              height={80}
              className="mr-2" 
            />
            <button className="w-[230px] h-[48px] rounded-[32px] bg-white text-black font-bold flex items-center justify-center">
              Ver Portafolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;
