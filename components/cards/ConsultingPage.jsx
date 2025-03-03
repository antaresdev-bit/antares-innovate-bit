// import React from "react";
// import Image from "next/image";

// function ConsultingPage() {
//   return (
//     <div className="relative mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] mb-12 p-[1px] bg-[#1C5DE9] rounded-[24px] sm:rounded-[24px] md:rounded-[48px] lg:rounded-[48px] border border-[#1C5DE9] ">
//       <div className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-transparent rounded-[24px] p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] text-white">
//         <div className="w-full md:w-full lg:w-auto flex justify-center order-first lg:order-last mb-4 md:mb-4 lg:mb-0">
//           <div className="relative">
//             <Image
//               src="/assets/images/portadas-servicios-home/consultoria-portada.png"
//               alt="Creatividad"
//               width={400}
//               height={400}
//               className="rounded-lg md:hidden"
//             />
//             <Image
//               src="/assets/images/portadas-servicios-home/consultoria tablet.png"
//               alt="Creatividad Tablet"
//               width={700}
//               height={400}
//               className="rounded-lg hidden md:block lg:hidden"
//             />
//             <Image
//               src="/assets/images/portadas-servicios-home/consultoria-portada.png"
//               alt="Creatividad Desktop"
//               width={700}
//               height={400}
//               className="rounded-lg hidden md:hidden lg:block"
//             />
//           </div>
//         </div>

//         <div className="w-full md:w-full lg:flex-grow border border-[#3874F5] rounded-[24px] flex flex-col justify-between p-[15px] sm:p-[15px] md:p-[22px] lg:p-[32px] min-h-full bg-[#3874F5]">
//           <div>
//             <h2
//               className="font-bold mb-[18px] sm:mb-[18px] md:mb-[37px] lg:mb-[37px] "
//               style={{ fontFamily: "HandelGothic", fontSize: "40px" }}
//             >
//               Creatividad
//             </h2>
//             <p style={{ fontFamily: "UniteaSans", fontSize: "18px" }}>
//               Transformamos ideas en experiencias visuales de alto impacto:
//             </p>
//             <ul
//               className="mt-[10px] ml-[20px]"
//               style={{ fontFamily: "UniteaSans", fontSize: "18px" }}
//             >
//               <li>
//                 Estrategias de branding que posicionan marcas en el mercado.
//               </li>
//               <li>
//                 Diseño gráfico y UI/UX, asegurando identidad visual coherente y
//                 efectiva.
//               </li>
//               <li>
//                 Producción audiovisual para potenciar la narrativa de marca.
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center mt-10">
//             <Image
//               src="/assets/images/Gif Avion.gif"
//               alt="Botón Animado"
//               width={48}
//               height={48}
//               className=""
//             />
//            <button
//               className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px] hover:bg-gray-200 transition duration-300 font-bold "
//               style={{ fontFamily: "HandelGothic" }}
//             >
//               Ver Portafolio
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ConsultingPage;

import React from "react";
import Image from "next/image";

function ConsultingPage() {
  return (
    <div
      className="relative mx-[21px] sm:mx-[21px] md:mx-[49px] lg:mx-[71px] mb-12 p-[1px] bg-[#1C5DE9] lg:bg-[#0E051C] sm:bg-[#1C5DE9] md:bg-[#1C5DE9] lg:bg-none rounded-[24px] sm:rounded-[24px] md:rounded-[48px] lg:rounded-[48px] sm:pb-[0px] md:pb-[0px] lg:pt-[40px] "
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
              src="/assets/images/portadas-servicios-home/consultoria-portada.png"
              alt="Tecnologia"
              width={400}
              height={400}
              className="rounded-lg md:hidden"
            />
            <Image
              src="/assets/images/portadas-servicios-home/consultoria tablet.png"
              alt="Tecnologia Tablet"
              width={700}
              height={400}
              className="rounded-lg hidden md:block lg:hidden"
            />
            <Image
              src="/assets/images/portadas-servicios-home/consultoria-portada.png"
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
              Consultoría
            </h2>
            <p
              style={{
                fontFamily: "UniteaSans",
                fontSize: "18px",
                color: "white",
              }}
            >
              Ayudamos a tomar decisiones estratégicas con enfoque en
              resultados:
            </p>
            <ul
              className="mt-[10px] ml-[20px]"
              style={{
                fontFamily: "UniteaSans",
                fontSize: "18px",
                color: "white",
              }}
            >
              <li>
                Consultoría en marketing digital y estrategias de crecimiento.
              </li>
              <li>
                Optimización de procesos para mejorar la eficiencia operativa.
              </li>
              <li>
                Análisis financiero y de ventas para potenciar la rentabilidad.
              </li>
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
            <button
              className="w-full sm:w-[230px] h-[48px] bg-white text-[#02021E] text-[20px] rounded-[32px]  hover:bg-gray-200 transition duration-300 font-bold"
              style={{ fontFamily: "HandelGothic" }}
            >
              Ver Portafolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultingPage;
