"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const WideVideoSection = ({ src }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-80"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const PortafolioPage = () => {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const workItems = [
    {
      title: "Upardigital",
      description: "Revolucionando la educación virtual en Uparsistem",
      category: ["creativity"],
      video: (
        <Link href={`/${locale}/upardigital`}>
          <WideVideoSection src="/assets/videos/uparpreview.mp4" />
        </Link>
      ),
    },
    {
      title: "Monster Energy",
      description: '"I am the Beast"',
      category: ["technology"],
      video: (
        <Link href={`/${locale}/monster-energy`}>
          <WideVideoSection src="/assets/videos/Monster Preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Páginas Web",
      description: "Innovación y Experiencia de Usuario de Alto Impacto",
      category: ["consulting", "technology"],
      video: (
        <Link href={`/${locale}/web-page`}>
          <WideVideoSection src="/assets/videos/Paginas web Preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Wersus",
      description: "Innovación en logística de transporte",
      category: ["consulting", "technology"],
      video: (
        <Link href={`/${locale}/wersus`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Video%20Promo%20Wersus%20TSP_1.mp4" />
        </Link>
      ),
    },
    {
      title: "CIML",
      description: "Innovación Editorial para la Salud Pública",
      category: ["technology"],
      video: (
        <Link href={`/${locale}/ciml`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/CIML%20preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Politécnico Grancolombiano",
      description: "Estrategia Digital para Conectar con los Jóvenes",
      category: ["consulting", "creativity"],
      video: (
        <Link href={`/${locale}/politecnico`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Poli%20Preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Lili Estevez",
      description: "Concept Art para Sencillo Musical “La Señal",
      category: ["technology"],
      video: (
        <Link href={`/${locale}/lili-estevez`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Lili%20Preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Fundación Heinrich Böll",
      description: "Escuela de Administración y Gestión del Estado para Transiciones Justas",
      category: ["creativity"],
      video: (
        <Link href={`/${locale}/fundacion`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/heinrich%20boll%20PREVIEW.mp4" />
        </Link>
      ),
    },
    {
      title: "Uparsistem",
      description: "Consolidando su Identidad Universitaria",
      category: ["creativity"],
      video: (
        <Link href={`/${locale}/uparsistem`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Uparsistem%20preview.mp4" />
        </Link>
      ),
    },
  ];

  const filteredItems = workItems.filter((item) =>
    activeCategory === "all" ? true : item.category.includes(activeCategory)
  );

  return (
    <div className="relative bg-opacity-70">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col gap-4 items-start min-h-[20vh]  px-5 sm:px-6 md:px-10 lg:px-16 lg:w-[1500px] mr-[21px] sm:mr-[21px] md:mr-[49px] lg:mr-[73px]  mt-[160px] mb-[8px] ">
          <h1
            className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            portafolio
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 px-5 sm:px-6 md:px-10 lg:px-16">
          <button
            onClick={() => setActiveCategory("all")}
            className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold "
            style={{ fontFamily: "HandelGothic" }}
          >
            Ver Todos
          </button>

          <button
            onClick={() => setActiveCategory("creativity")}
            className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold "
            style={{ fontFamily: "HandelGothic" }}
          >
            Creatividad
          </button>

          <button
            onClick={() => setActiveCategory("technology")}
            className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold "
            style={{ fontFamily: "HandelGothic" }}
          >
            Tecnologia
          </button>

          <button
            onClick={() => setActiveCategory("consulting")}
            className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold "
            style={{ fontFamily: "HandelGothic" }}
          >
            Consultoria
          </button>
        </div>

        <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] max-w-[1500px] mx-auto mb-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center cursor-pointer ">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative max-w-[90%] sm:max-w-[400px] w-full h-auto min-h-[250px] rounded-[24.15px] overflow-hidden bg-gray-800 shadow-lg"
              onClick={item.onClick ? item.onClick : undefined}
            >
              {item.video ? (
                item.video
              ) : (
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={50}
                    width={50}
                  />
                </div>
              )}

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">{item.title}</h3>
                {item.description && (
                  <p className="text-sm">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortafolioPage;