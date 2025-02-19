import React from "react";
import Image from "next/image";

function CreativityCard() {
  return (
    <div className="relative mx-5 md:mx-[100px] mb-12 p-[1px] bg-transparent rounded-[48px] border border-white">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-transparent rounded-[24px] p-8 md:p-[32px] text-white">
        <div className="w-full md:w-full lg:w-1/2 flex justify-center order-first lg:order-last mb-4 md:mb-4 lg:mb-0">
          <div className="relative">
            {/* Imagen para mobile */}
            <Image
              src="/assets/images/Portadas Servicios-home/Creatividad Portada (5).png"
              alt="Creatividad"
              width={400}
              height={400}
              className="rounded-lg md:hidden"
            />
            {/* Imagen para tablet (md) */}
            <Image
              src="/assets/images/Portadas Servicios-home/Creatividad Portada (6).png"
              alt="Creatividad Tablet"
              width={400}
              height={400}
              className="rounded-lg hidden md:block lg:hidden"
            />
            {/* Imagen para desktop (lg) */}
            <Image
              src="/assets/images/Portadas Servicios-home/Creatividad Portada (5).png"
              alt="Creatividad Desktop"
              width={400}
              height={400}
              className="rounded-lg hidden md:hidden lg:block"
            />
          </div>
        </div>

        <div className="w-full md:w-full lg:w-1/2 border border-white rounded-[48px] h-auto md:h-[396px] flex flex-col justify-center">
          <div className=" ">
            <h2
              className="font-bold mb-[37px] ml-10 "
              style={{ fontFamily: "HandelGothic", fontSize: "40px" }}
            >
              Creatividad
            </h2>
            <p
              className=" ml-5  "
              style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
            >
              Transformamos ideas en experiencias visuales de alto impacto:
            </p>
            <ul
              className="list-disc pl-5 lg:mb-[45px] lg:mb-[0px]  sm:mb-[22px] space-y-2 ml-5"
              style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
            >
              <li>
                Estrategias de branding que posicionan marcas en el mercado.
              </li>
              <li>
                Diseño gráfico y UI/UX, asegurando identidad visual coherente y
                efectiva.
              </li>
              <li>
                Producción audiovisual para potenciar la narrativa de marca.
              </li>
            </ul>
          </div>
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

export default CreativityCard;
