import React from "react";

const statisticItems = [
  {
    title: "Años de experiencia",
    image: "/assets/images/statistics/+30.png",
    width: 60,
    height: 52,
  },
  {
    title: "Presencia en Colombia y EE.UU",
    image: "/assets/images/statistics/world.png",
    width: 50,
    height: 52,
  },
  {
    title: "Proyectos realizados",
    image: "/assets/images/statistics/+100.png",
    width: 70,
    height: 52,
  },
  {
    title: "Automatización e Inteligencia Artificial",
    image: "/assets/images/statistics/brain.png",
    width: 50,
    height: 52,
  },
];

function Statistics() {
  return (
    <div className="flex flex-wrap justify-center gap-[70px] p-4">
      {statisticItems.map((item, index) => (
        <div
          key={index}
          className="w-[239px] h-[240px] flex flex-col items-center justify-center rounded-full border-2 border-white text-white text-[25px] text-center p-4"
        >
          <img
            src={item.image}
            alt={item.title}
            width={item.width}
            height={item.height}
            className="mb-4"
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
