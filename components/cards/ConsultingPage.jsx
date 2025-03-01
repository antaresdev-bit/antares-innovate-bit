import React from "react";
import Image from "next/image";

function ConsultingPage() {
  const consultingPortadaSrc =
    "/assets/images/portadas-servicios-home/consultoria-portada.png";
  return (
    <div className="relative mx-5 md:mx-[100px] mb-12 p-[1px]  rounded-[48px] border border-[#1C5DE9] bg-[#1C5DE9]">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-transparent rounded-[24px] p-8 md:p-[32px] text-white">
        <div className="w-full md:w-full lg:w-1/2 flex justify-center order-first lg:order-last mb-4 md:mb-4 lg:mb-0">
          <div className="relative">
            {/* Imagen para mobile */}
            <Image
              src={consultingPortadaSrc}
              alt="Creatividad"
              width={400}
              height={400}
              className="rounded-lg md:hidden"
            />
            {/* Imagen para tablet (md) */}
            <Image
              src="/assets/images/portadas-servicios-home/creatividad-portada-7.png"
              alt="Creatividad Tablet"
              width={400}
              height={400}
              className="rounded-lg hidden md:block lg:hidden"
            />
            {/* Imagen para desktop (lg) */}
            <Image
              src={consultingPortadaSrc}
              alt="Creatividad Desktop"
              width={400}
              height={400}
              className="rounded-lg hidden md:hidden lg:block"
            />
          </div>
        </div>

        <div className="w-full md:w-full lg:w-1/2 border border-[#3874F5] rounded-[48px] h-auto md:h-[396px] flex flex-col justify-center bg-[#3874F5]">
          <h2
            className="font-bold mb-[35px] ml-10"
            style={{ fontFamily: "HandelGothic", fontSize: "40px" }}
          >
            Consultoría
          </h2>
          <p
            className="mb-4 ml-5"
            style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
          >
            Ayudamos a tomar decisiones estratégicas con enfoque en resultados:
          </p>
          <ul
            className="list-disc pl-5 mb-6 space-y-2 ml-5"
            style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
          >
            <li>
              Consultoría en marketing digital y estrategias de crecimiento.
            </li>
            <li>
              Optimización de procesos para mejorar la eficiencia operativa.
            </li>
            <li>
              Análisis financiero y de ventas para potenciar la rentabilidad.
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

export default ConsultingPage;
