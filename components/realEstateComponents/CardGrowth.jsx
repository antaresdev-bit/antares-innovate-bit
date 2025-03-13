import React from "react";
import Image from "next/image";

const cards = [
  {
    icon: (
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#D4AF37]">
        <Image
          src="/assets/images/inmobiliaria/Vector.png"
          width={30}
          height={30}
          alt="Vector"
        />
      </div>
    ),
    title: "Espacios que Inspiran",
    text: "Diseñamos arquitectura inteligente que optimiza cada metro y eleva la eficiencia.",
    highlight: true,
    hiddenOnMd: true,
  },
  {
    icon: (
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0E051C]">
        <Image
          src="/assets/images/inmobiliaria/lupa.png"
          width={57}
          height={57}
          alt="Lupa"
        />
      </div>
    ),
    title: "Rentabilidad Optimizada",
    text: "Menos desperdicio. Más impacto. Un enfoque preciso para mejorar costos y resultados.",
  },
  {
    icon: (
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0E051C]">
        <Image
          src="/assets/images/inmobiliaria/estadisticas.png"
          width={57}
          height={57}
          alt="Estadisticas"
        />
      </div>
    ),
    title: "Estrategias que Escalan",
    text: "Convertimos el caos en claridad, las conexiones en estructuras y las ideas en sistemas que crecen.",
  },
  {
    icon: (
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0E051C]">
        <Image
          src="/assets/images/inmobiliaria/start.png"
          width={57}
          height={57}
          alt="Start"
        />
      </div>
    ),
    title: "Diferenciación Real",
    text: "Refinamos tu propuesta de valor para que el mercado no solo te vea, sino que te elija.",
    hiddenOnMd: false,
  },
];

const CardGrowth = () => {
  return (
    <div className="flex justify-center mt-[46px] sm:mt-[46px] md:mt-[48px] lg:mt-[80px] w-full   overflow-hidden">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8 md:gap-x-[20px] lg:gap-x-14">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`sm:w-full sm:h-[335px] md:w-[264px] md:h-[361px] lg:w-[283px] lg:h-[386px] p-6 rounded-xl shadow-lg flex flex-col justify-between 
              ${
                card.highlight
                  ? "bg-white text-black"
                  : "bg-[none] text-white border border-gray-700"
              } 
              ${card.hiddenOnMd ? "md:hidden lg:flex" : "flex"}
            `}
          >
            <div>
              {card.icon}
              <div className="w-full h-[1px] bg-[white] my-4 mt-[40px]"></div>
              <h3
                className="text-xl font-bold mt-[33px] sm:mt-[42px] md:mt-[33px] lg:mt-[41px]"
                style={{ fontFamily: "HandelGothic", fontSize: "30px" }}
              >
                {card.title}
              </h3>
            </div>

            <p
              className="text-sm mt-[29px]"
              style={{ fontFamily: "UniteaSans", fontSize: "20px" }}
            >
              {card.text}
            </p>

            {card.highlight && (
              <div className="mt-4 flex space-x-2">
                <div className="h-1 w-16 bg-[#4D86FF]"></div>
                <div className="h-1 flex-1 bg-gray-300"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrowth;
