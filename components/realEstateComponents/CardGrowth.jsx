import React from "react";
import { FaBuilding, FaSearch, FaChartLine, FaStar } from "react-icons/fa";

const cards = [
  {
    icon: <FaBuilding className="text-[#D4AF37] text-3xl" />,
    title: "Espacios que Inspiran",
    text: "Diseñamos arquitectura inteligente que optimiza cada metro y eleva la eficiencia.",
    highlight: true,
  },
  {
    icon: <FaSearch className="text-white text-3xl" />,
    title: "Rentabilidad Optimizada",
    text: "Menos desperdicio. Más impacto. Un enfoque preciso para mejorar costos y resultados.",
  },
  {
    icon: <FaChartLine className="text-white text-3xl" />,
    title: "Estrategias que Escalan",
    text: "Convertimos el caos en claridad, las conexiones en estructuras y las ideas en sistemas que crecen.",
  },
  {
    icon: <FaStar className="text-white text-3xl" />,
    title: "Diferenciación Real",
    text: "Refinamos tu propuesta de valor para que el mercado no solo te vea, sino que te elija.",
    hiddenOnMd: true,
  },
];

const CardGrowth = () => {
  return (
    <>
      <div className=" flex flex-col gap-4 items-left min-h-[20vh] py-24 px-5 sm:px-6 md:px-10 lg:px-16 sm:ml-[20px] md:ml-[20px] lg:ml-[40px] lg:w-[1300px] ">
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FDC548] to-[#FFFFFF]"
          style={{ fontFamily: "HandelGothic" }}
        >
          Impulsamos
        </h1>
        <h1
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FDC548] to-[#FFFFFF] inline"
          style={{ fontFamily: "HandelGothic" }}
        >
          el Crecimiento
        </h1>
      </div>
      {/* cards */}
      <div className="flex justify-center py-10 bg-[none] none max-w-[1600px] mx-auto">
        <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-[283px] h-[386px] p-6 rounded-xl shadow-lg flex flex-col justify-between 
              ${
                card.highlight
                  ? "bg-white text-black"
                  : "bg-[none] text-white border border-gray-700"
              } 
              ${card.hiddenOnMd ? "md:hidden lg:flex" : "flex"} 
            `}
            >
              <div>
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${
                    card.highlight ? "bg-[#D4AF37]" : "bg-gray-800"
                  }`}
                >
                  {card.icon}
                </div>
                <div className="w-full h-[1px] bg-[white] my-4 mt-[40px]"></div>
                <h3
                  className="text-xl font-bold mt-4  mt-[50px]"
                  style={{ fontFamily: "HandelGothic", fontSize: "30px" }}
                >
                  {card.title}
                </h3>
              </div>

              <p
                className="text-sm mt-auto"
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
    </>
  );
};

export default CardGrowth;
