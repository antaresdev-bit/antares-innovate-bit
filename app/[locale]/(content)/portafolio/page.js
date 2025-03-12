"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import CardPortafolio from "@/components/portafolioComponenets/CardPortafolio";

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
      category: ["consulting", "technology"],
      video: (
        <Link href={`/${locale}/upardigital`}>
          <WideVideoSection src="/assets/videos/uparpreview.mp4" />
        </Link>
      ),
    },
    {
      title: "Monster Energy",
      description: '"I am the Beast"',
      category: ["creativity"],
      video: (
        <Link href={`/${locale}/monster-energy`}>
          <WideVideoSection src="/assets/videos/Monster Preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Páginas Web",
      description: "Innovación y Experiencia de Usuario de Alto Impacto",
      category: ["creativity", "technology", "consulting"],
      video: (
        <Link href={`/${locale}/web-page`}>
          <WideVideoSection src="/assets/videos/Paginas web Preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Wersus",
      description: "Innovación en logística de transporte",
      category: ["creativity", "technology", "consulting"],
      video: (
        <Link href={`/${locale}/wersus`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Video%20Promo%20Wersus%20TSP_1.mp4" />
        </Link>
      ),
    },
    {
      title: "CIML",
      description: "Innovación Editorial para la Salud Pública",
      category: ["creativity", "consulting"],
      video: (
        <Link href={`/${locale}/ciml`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/CIML%20preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Politécnico Grancolombiano",
      description: "Estrategia Digital para Conectar con los Jóvenes",
      category: ["technology"],
      video: (
        <Link href={`/${locale}/politecnico`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Poli%20Preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Lili Estevez",
      description: "Concept Art para Sencillo Musical “La Señal",
      category: ["creativity"],
      video: (
        <Link href={`/${locale}/lili-estevez`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Lili%20Preview.mp4" />
        </Link>
      ),
    },
    {
      title: "Fundación Heinrich Böll",
      description:
        "Escuela de Administración y Gestión del Estado para Transiciones Justas",
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
      category: ["technology"],
      video: (
        <Link href={`/${locale}/uparsistem`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Uparsistem%20preview.mp4" />
        </Link>
      ),
    },
    {
      title: "OIM",
      description: "Cartografía Migratoria: Impacto de la Migración Haitiana",
      category: ["creativity"],
      video: (
        <Link href={`/${locale}/oim`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/IOM%20preview.mp4" />
        </Link>
      ),
    },
    {
      title: "B2Fintech",
      description: "Conectando con el Mercado Global de Criptomonedas",
      category: ["technology"],
      video: (
        <Link href={`/${locale}/b2fintech`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/2bfintech%20preview.mp4" />
        </Link>
      ),
    },
  ];

  const filteredItems = workItems.filter((item) =>
    activeCategory === "all" ? true : item.category.includes(activeCategory)
  );

  return (
    <div className="relative bg-opacity-70">
      {/* degrade */}
      <div
        className=" absolute inset-x-0 mx-auto w-full max-w-[1409px] h-[542px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #334385 0%, #0E051C 60%)",
          transform: "translateY(-70%)",
          zIndex: -1,
        }}
      ></div>
      {/* degrade */}
      <div className="max-w-[1500px] mx-auto   ">
        <div className="mt-[187px]  mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]  ">
          <h1
            className="mb-[69px] ml-[0px] sm:ml-[0px] md:ml-[65px] lg:ml-[68px] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
            style={{ fontFamily: "HandelGothic" }}
          >
            portafolio
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px]  gap-4 sm:gap- border-b pb-[43px]">
          <button
            onClick={() => setActiveCategory("all")}
            className="flex items-center justify-center w-[136.46px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold sm:mr-[19px] lg:mr-[34px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            <img
              src="/assets/images/portafolio/4.png"
              alt="Icono"
              className="w-[38.17px] h-[38.17px] mr-2"
            />
            Todos
          </button>

          <button
            onClick={() => setActiveCategory("creativity")}
            className="flex items-center justify-center w-[196.8px] h-[48px] border-[1px] border-white bg-transparent text-white text-[20px] rounded-[32px] hover:bg-white hover:text-[#02021E] transition duration-300 font-bold sm:mr-[19px] lg:mr-[34px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            <img
              src="/assets/images/portafolio/3.png"
              alt="Icono"
              className="w-[38.17px] h-[38.17px] mr-2"
            />
            Creatividad
          </button>

          <button
            onClick={() => setActiveCategory("technology")}
            className="flex items-center justify-center w-[196.8px] h-[48px] border-[1px] border-white bg-transparent text-white text-[20px] rounded-[32px] hover:bg-white hover:text-[#02021E] transition duration-300 font-bold sm:mr-[19px] lg:mr-[34px]"
            style={{ fontFamily: "HandelGothic" }}
          >
            <img
              src="/assets/images/portafolio/2.png"
              alt="Icono"
              className="w-[38.17px] h-[38.17px] mr-2"
            />
            Tecnologia
          </button>

          <button
            onClick={() => setActiveCategory("consulting")}
            className="flex items-center justify-center w-[196.8px] h-[48px] border-[1px] border-white bg-transparent text-white text-[20px] rounded-[32px] hover:bg-white hover:text-[#02021E] transition duration-300 font-bold"
            style={{ fontFamily: "HandelGothic" }}
          >
            <img
              src="/assets/images/portafolio/1.png"
              alt="Icono"
              className="w-[38.17px] h-[38.17px] mr-2"
            />
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

        <div className="mt-[187px]">
          <CardPortafolio />
        </div>
      </div>
    </div>
  );
};

export default PortafolioPage;
