import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "William G Mosquera",
    role: "Director CEO",
    src: "/assets/images/about/1.png",
    linkedin: "https://www.linkedin.com/in/william-mosquera-0463752a3/",
  },
  {
    name: "Michelle Cadavid",
    role: "Full Stack Developer",
    src: "/assets/images/about/2.png",
    linkedin: "https://www.linkedin.com/in/cmichelle-dev/",
  },
  {
    name: "Andrés Grondona",
    role: "Full Stack Developer",
    src: "/assets/images/about/3.png",
    linkedin: "https://www.linkedin.com/in/andres-grondona/",
  },
  {
    name: "Sorangy Campos",
    role: "Search Marketing Specialist",
    src: "/assets/images/about/4.png",
    linkedin: "https://www.linkedin.com/in/sorangycampos/",
  },
  {
    name: "Yamile Duran",
    role: "Project Manager Arquitecta",
    src: "/assets/images/about/5.png",
    linkedin:
      "https://www.linkedin.com/in/yamile-duran-b7034b136/",
  },
  {
    name: "Luis Gómez",
    role: "Full Stack Developer",
    src: "/assets/images/about/6.png",
    linkedin:
      "https://www.linkedin.com/in/luis-fernando-gomez-ospina-0a9295256/",
  },
  {
    name: "Daniel Huertas",
    role: "Creative Designer",
    src: "/assets/images/about/8.png",
    linkedin: "https://www.linkedin.com/in/daniel-valero-b649b1311/",
  },
];

function WorkTeam() {
  return (
    <>
      <div className="flex flex-col gap-4 items-start min-h-[20vh]  px-5 sm:px-6 md:px-10 lg:px-16 lg:w-[1300px] mr-[21px] sm:mr-[21px] md:mr-[49px] lg:mr-[73px]  mt-[213px] mb-[90px] ">
        <h1
          className=" text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4D86FF] to-[#FFFFFF] leading-[65px] max-w-[400px] "
          style={{ fontFamily: "HandelGothic" }}
        >
          Nuestro <br /> Team
        </h1>
      </div>

      <div className=" mx-auto w-full  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center  mb-[90px] sm:mb-[90px] md:mb-[100px] mb-[143px]"
            >
              <div className="w-[209px] h-[209px] overflow-hidden rounded-full ">
                <Image
                  src={member.src}
                  alt={member.name}
                  width={209}
                  height={209}
                  className="object-cover"
                />
              </div>
              <h3
                className="text-white text-[18px] font-semibold mt-[30px]"
                style={{ fontFamily: "HandelGothic" }}
              >
                {member.name}
              </h3>
              <div className=" mt-[5px] ">
                <p
                  className=" text-[18px] "
                  style={{ fontFamily: "UniteaSans-medium" }}
                >
                  {member.role}
                </p>
              </div>

              <div className="mt-[20px]">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-[20px] w-[181px] h-[40px] bg-white text-[#02021E] text-[18px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold"
                  style={{ fontFamily: "HandelGothic" }}
                >
                  <div className="ml-[20px]">
                    <p>Ver Perfil</p>
                  </div>
                  <div className="ml-[13px]">
                    <Image
                      src="/assets/images/Gif Avion.gif"
                      alt="Botón Animado"
                      width={32}
                      height={32}
                      className="ml-2"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkTeam;
