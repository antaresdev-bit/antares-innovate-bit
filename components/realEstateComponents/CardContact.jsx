import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

function CardContact() {
  const locale = useLocale();
  return (
    <div
      className="mt-[100px] relative mb-12 p-[1px] bg-[#1C5DE9] lg:bg-[#0E051C] sm:bg-[#1C5DE9] md:bg-[#1C5DE9] lg:bg-none rounded-[24px] sm:rounded-[24px] md:rounded-[48px] lg:rounded-[48px] sm:pb-[0px] md:pb-[0px] lg:pt-[40px] "
      style={{
        backgroundImage: "none",
      }}
    >
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center rounded-[48px]"
        style={{
          backgroundImage:
            "url('/assets/images/portadas-servicios-home/bg card blue.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center rounded-[24px] p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] text-white relative z-10">
        <div className="w-full md:w-full lg:w-auto flex justify-center order-first lg:order-last mb-4 md:mb-4 lg:mb-0">
          <div className="relative">
            <Image
              src="/assets/images/inmobiliaria/1.png"
              alt="Tecnologia"
              width={400}
              height={400}
              className="rounded-lg md:hidden"
            />
            <Image
              src="/assets/images/inmobiliaria/2.png"
              alt="Tecnologia Tablet"
              width={700}
              height={400}
              className="rounded-lg hidden md:block lg:hidden"
            />
            <Image
              src="/assets/images/inmobiliaria/1.png"
              alt="Tecnologia Desktop"
              width={700}
              height={600}
              className="rounded-lg hidden md:hidden lg:block"
            />
          </div>
        </div>

        <div className="w-full md:w-full lg:flex-grow border border-[#3874F5] rounded-[24px] flex flex-col justify-between p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] min-h-full bg-[#3874F5]">
          <div>
            <h2
              className="font-bold mb-[18px] sm:mb-[18px] md:mb-[37px] lg:mb-[37px]"
              style={{
                fontFamily: "HandelGothic",
                fontSize: "40px",
                color: "white",
              }}
            >
              ¿Hacemos algo increíble juntos?
            </h2>
            <p
              style={{
                fontFamily: "UniteaSans",
               
                color: "white",
              }}
             className="text-[17px] sm:text-[17px] md:text-[17px] lg:text-[22px]">
              Has visto nuestro trabajo, ahora es tu turno. Si tienes un
              proyecto en mente y quieres llevarlo al siguiente nivel, hablemos.
            </p>
            <ul
              className="mt-[30px] ml-[40px] text-[17px] sm:text-[17px] md:text-[17px] lg:text-[22px]"
              style={{
                fontFamily: "UniteaSans",
                color: "white",
              }}
            >
              <li>Transformamos ideas en experiencias digitales</li>
              <li>Fusionamos creatividad, tecnología y estrategia.</li>
              <li>Potenciamos marcas con innovación y automatización.</li>
            </ul>
          </div>
          <div className="flex items-center mt-10">
            <Image
              src="/assets/images/Gif Avion.gif"
              alt="Botón Animado"
              width={48}
              height={48}
              className=""
            />
            <Link href={`/${locale}/form-contact`} className="w-full sm:w-auto">
              <button
                className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px]  hover:bg-gray-200 transition duration-300 font-bold"
                style={{ fontFamily: "HandelGothic" }}
              >
                Contáctanos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContact;
