import React from "react";
import Image from "next/image";

function CreativityCard() {
  return (
    <div className="relative mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] mb-12 p-[1px] bg-transparent rounded-[48px] border border-blue-500">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-transparent rounded-[24px] p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] text-white">
       
      <div className="w-full md:w-full lg:w-auto flex justify-center items-center ">
          <div className="relative">
            <Image
              src="/assets/images/portadas-servicios-home/creatividad-portada-5.png"
              alt="Creatividad"
              width={400}
              height={400}
              className="rounded-lg md:hidden"
            />
            <Image
              src="/assets/images/portadas-servicios-home/creatividad-portada-6.png"
              alt="Creatividad Tablet"
              width={1000}
              height={400}
              className="rounded-lg hidden md:block lg:hidden mb-0 "
            />
            <Image
              src="/assets/images/portadas-servicios-home/creatividad-portada-5.png"
              alt="Creatividad Desktop"
              width={600}
              height={400}
              className="rounded-lg hidden md:hidden lg:block"
            />
          </div>
        </div>

        {/* Contenedor rojo con altura automática */}
        <div className="w-full md:w-full lg:flex-grow border border-red-500 rounded-[24px] flex flex-col justify-between p-[32px] min-h-full">
          <div>
            <h2
              className="font-bold mb-[37px]"
              style={{ fontFamily: "HandelGothic", fontSize: "40px" }}
            >
              Creatividad
            </h2>
            <p style={{ fontFamily: "UniteaSans", fontSize: "18px" }}>
              Transformamos ideas en experiencias visuales de alto impacto:
            </p>
            <ul
              className="mt-[10px] ml-[20px]"
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
          <div className="flex items-center mt-6">
            <Image
              src="/assets/images/Gif Avion.gif"
              alt="Botón Animado"
              width={48}
              height={48}
              className=""
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
