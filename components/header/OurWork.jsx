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

const OurWork = () => {
  const locale = useLocale();
  const [showAll, setShowAll] = useState(false);

  const workItems = [
    {
      title: "Upardigital",
      description: "Revolucionando la educación virtual en Uparsistem",
      video: (
        <Link href={`/${locale}/upardigital`}>
          <WideVideoSection src="/assets/videos/uparpreview.mp4" />
        </Link>
      ),
    },
    {
      title: "Wersus",
      description: "Innovación en logística de transporte",
      video: (
        <Link href={`/${locale}/wersus`}>
          <WideVideoSection src="https://storage.googleapis.com/antares-agency-rcs/Video%20Promo%20Wersus%20TSP_1.mp4" />
        </Link>
      ),
    },

    {
      title: "Monster Energy",
      description: '"I am the Beast"',
      video: (
        <Link href={`/${locale}/monster-energy`}>
          <WideVideoSection src="/assets/videos/Monster Preview.mp4" />
        </Link>
      ),
    },

    // {
    //   title: "Páginas Web",
    //   description: "Innovación y Experiencia de Usuario de Alto Impacto",
    //   video: (
    //     <Link href={`/${locale}/web-page`}>
    //       <WideVideoSection src="/assets/videos/Paginas web Preview.mp4" />
    //     </Link>
    //   ),
    // },

    // {
    //   title: "Monster Energy",
    //   description: '"I am the Beast"',
    //   video: (
    //     <Link href={`/${locale}/monster-energy`}>
    //       <WideVideoSection src="/assets/videos/Monster Preview.mp4" />
    //     </Link>
    //   ),
    // },

    // {
    //   title: "Uparsistem",
    //   description: "Consolidando su Identidad Universitaria",
    //   video: <WideVideoSection src="/assets/videos/uniupar preview.mp4" />,
    // },
    /* Ver mas debe estar de 6to  */
    // {
    //   title: "Ver Más",
    //   description: "",
    //   image: "/assets/images/flecha-negro.png",
    //   onClick: () => setShowAll(true),
    // },
    /* Ver mas debe estar de 6to  */

    // {
    //   title: "CIML",
    //   description: "Innovación Editorial para la Salud Pública",
    //   video: <WideVideoSection src="/assets/videos/CIML preview.mp4" />,
    // },
    // {
    //   title: "B2Fintech",
    //   description: "Conectando con el Mercado Global de Criptomonedas",
    //   video: <WideVideoSection src="/assets/videos/2bfintech preview.mp4" />,
    // },

    // {
    //   title: "7",
    //   description: "Ejemplo adicional",
    //   video: <WideVideoSection src="/assets/videos/uparpreview.mp4" />,
    // },
    // {
    //   title: "8",
    //   description: "Ejemplo adicional",
    //   video: <WideVideoSection src="/assets/videos/uparpreview.mp4" />,
    // },
    // {
    //   title: "9",
    //   description: "Ejemplo adicional",
    //   video: <WideVideoSection src="/assets/videos/uparpreview.mp4" />,
    // },
    // {
    //   title: "10",
    //   description: "Ejemplo adicional",
    //   video: <WideVideoSection src="/assets/videos/uparpreview.mp4" />,
    // },
  ];

  const visibleItems = showAll ? workItems : workItems.slice(0, 6);

  return (
    <div className="relative bg-opacity-70">
      <div className="flex flex-col gap-4 items-start min-h-[20vh]  px-5 sm:px-6 md:px-10 lg:px-16 lg:w-[1300px] mr-[21px] sm:mr-[21px] md:mr-[49px] lg:mr-[73px]  mt-[160px] mb-[8px] ">
        <h1
          className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
          style={{ fontFamily: "HandelGothic" }}
        >
          Nuestros <br /> Trabajos
        </h1>
      </div>

      <div className=" mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] max-w-[1500px] mx-auto mb-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center cursor-pointer">
        {visibleItems.map((item, index) => (
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
  );
};

export default OurWork;
