import React from "react";
import Image from "next/image";

// Componente para manejar la reproducción de videos
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

const workItems = [
  {
    title: "Monster Energy",
    description: '"I am the Beast"',
    video: <WideVideoSection src="/assets/videos/Monster Preview.mp4" />,
  },
  {
    title: "CIML",
    description: "Innovación Editorial para la Salud Pública",
    video: <WideVideoSection src="/assets/videos/CIML preview.mp4" />,
  },
  {
    title: "Uparsistem",
    description: "Consolidando su Identidad Universitaria",
    video: <WideVideoSection src="/assets/videos/uniupar preview.mp4" />,
  },
  {
    title: "B2Fintech",
    description: "Conectando con el Mercado Global de Criptomonedas",
    video: <WideVideoSection src="/assets/videos/2bfintech preview.mp4" />,
  },
  {
    title: "Páginas Web",
    description: "Innovación y Experiencia de Usuario de Alto Impacto",
    video: <WideVideoSection src="/assets/videos/Paginas web Preview.mp4" />,
  },
  {
    title: "Ver Más",
    description: "",
    image: "/assets/images/ourWork/Ver mas.png",
  },
];

const OurWork = () => {
  return (
    <div className="relative bg-opacity-70">
      <div className=" flex flex-col gap-4 items-left min-h-[20vh] py-24 px-5 sm:px-6 md:px-10 lg:px-16 sm:ml-[20px] md:ml-[40px] lg:ml-[70px] lg:w-[1300px]">
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Nuestro
        </h1>
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] inline"
          style={{ fontFamily: "HandelGothic" }}
        >
          Trabajo
        </h1>
      </div>

      <div className=" mb-[80px] max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-10 justify-items-center">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="relative max-w-[90%] sm:max-w-[400px] w-full h-auto min-h-[250px] rounded-[24.15px] overflow-hidden bg-gray-800 shadow-lg"
          >
            {item.video ? (
              item.video
            ) : (
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
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
